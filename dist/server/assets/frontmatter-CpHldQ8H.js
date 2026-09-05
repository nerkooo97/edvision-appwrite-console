function parseTagAttrs(raw) {
	const attrs = {};
	const idMatch = raw.match(/#([-\w]+)/);
	if (idMatch) attrs.id = idMatch[1];
	for (const match of raw.matchAll(/([\w-]+)="([^"]*)"/g)) attrs[match[1]] = match[2];
	for (const match of raw.matchAll(/([\w-]+)=([^\s"%}]+)/g)) attrs[match[1]] ??= match[2];
	return attrs;
}
function collapseInline(text) {
	return text.replace(/\s+/g, " ").trim();
}
function protectCode(source) {
	const blocks = [];
	const stash = (value) => {
		blocks.push(value);
		return `\u0000CODE${blocks.length - 1}\u0000`;
	};
	const out = [];
	let fence = null;
	for (const line of source.split("\n")) {
		if (!fence) {
			const open = line.match(/^[ \t]*(`{3,}|~{3,})/);
			if (open) fence = {
				char: open[1][0],
				length: open[1].length,
				lines: [line]
			};
			else out.push(line);
			continue;
		}
		fence.lines.push(line);
		const close = line.match(/^[ \t]*(`{3,}|~{3,})[ \t]*$/);
		if (close && close[1][0] === fence.char && close[1].length >= fence.length) {
			out.push(stash(fence.lines.join("\n")));
			fence = null;
		}
	}
	if (fence) out.push(stash(fence.lines.join("\n")));
	return {
		text: out.join("\n").replace(/`[^`\n]+`/g, stash),
		blocks
	};
}
function restoreCode(text, blocks) {
	return text.replace(/\u0000CODE(\d+)\u0000/g, (_, index) => {
		return blocks[Number(index)] ?? "";
	});
}
function convertTables(text) {
	return text.replace(/\{%\s*table[^%]*%\}([\s\S]*?)\{%\s*\/table\s*%\}/g, (original, inner) => {
		const rows = [];
		let current = [];
		for (const line of inner.split("\n")) {
			const trimmed = line.trim();
			if (trimmed === "---") {
				if (current.length > 0) rows.push(current);
				current = [];
				continue;
			}
			const cellMatch = trimmed.match(/^\*\s?(.*)$/);
			if (cellMatch) {
				current.push(cellMatch[1]);
				continue;
			}
			if (trimmed && current.length > 0) current[current.length - 1] += ` ${trimmed}`;
		}
		if (current.length > 0) rows.push(current);
		if (rows.length === 0) return original;
		const columnCount = Math.max(...rows.map((row) => row.length));
		const formatRow = (row) => {
			return `| ${Array.from({ length: columnCount }, (_, index) => collapseInline(row[index] ?? "").replace(/\|/g, "\\|")).join(" | ")} |`;
		};
		const [header, ...body] = rows;
		const separator = `| ${Array.from({ length: columnCount }, () => "---").join(" | ")} |`;
		return [
			formatRow(header),
			separator,
			...body.map(formatRow)
		].join("\n");
	});
}
function markdocToMarkdown(source) {
	const { text: protectedText, blocks } = protectCode(source);
	let text = protectedText;
	text = text.replace(/\{%\s*only_dark\s*%\}[\s\S]*?\{%\s*\/only_dark\s*%\}/g, "");
	text = text.replace(/\{%\s*only_light\s*%\}([\s\S]*?)\{%\s*\/only_light\s*%\}/g, (_, content) => content.trim());
	text = text.replace(/\{%\s*arrow_link\s+([^%]*?)%\}([\s\S]*?)\{%\s*\/arrow_link\s*%\}/g, (_, rawAttrs, content) => {
		const { href } = parseTagAttrs(rawAttrs);
		const label = collapseInline(content);
		return href ? `[${label}](${href})` : label;
	});
	text = text.replace(/\{%\s*cards(?:_image)?_item\s+([^%]*?)%\}([\s\S]*?)\{%\s*\/cards(?:_image)?_item\s*%\}/g, (_, rawAttrs, content) => {
		const { href, title } = parseTagAttrs(rawAttrs);
		const label = title ? href ? `[${title}](${href})` : `**${title}**` : "";
		const body = collapseInline(content);
		if (!label) return body ? `- ${body}` : "";
		return body ? `- ${label}: ${body}` : `- ${label}`;
	});
	text = text.replace(/\{%\s*section\s+([^%]*?)%\}/g, (_, rawAttrs) => {
		const attrs = parseTagAttrs(rawAttrs);
		const title = attrs.title ?? attrs.id;
		if (!title) return "";
		return `\n## ${attrs.step ? `${attrs.step}. ` : ""}${title}\n`;
	});
	text = text.replace(/\{%\s*(tabsitem|accordion_item|info)\s+([^%]*?)%\}/g, (_, tag, rawAttrs) => {
		const { title } = parseTagAttrs(rawAttrs);
		return title ? `\n**${title}**\n` : "";
	});
	text = text.replace(/\{%\s*call_to_action\s+([\s\S]*?)\/%\}/g, (_, rawAttrs) => {
		const { title, description, cta, url } = parseTagAttrs(rawAttrs);
		const parts = [];
		if (title) parts.push(`**${title}**`);
		if (description) parts.push(description);
		if (cta && url) parts.push(`[${cta}](${url})`);
		return parts.join(" ");
	});
	text = text.replace(/\{%\s*(?:video|youtube)\b([\s\S]*?)\/%\}/g, (_, rawAttrs) => {
		const { src } = parseTagAttrs(rawAttrs);
		return src ? `[Video](${src})` : "";
	});
	text = text.replace(/\{%\s*icon_image\b([^%]*?)\/%\}/g, (_, rawAttrs) => {
		const { src, alt } = parseTagAttrs(rawAttrs);
		return src ? `![${alt ?? ""}](${src})` : "";
	});
	text = convertTables(text);
	text = text.replace(/^(#{1,6}[ \t]+.*?)[ \t]*\{%\s*#[-\w]+\s*%\}[ \t]*$/gm, (_, heading) => heading);
	text = text.replace(/\{%[\s\S]*?%\}/g, "");
	text = text.replace(/(\S)[ \t]{2,}/g, "$1 ");
	text = text.replace(/[ \t]+$/gm, "").replace(/\n{3,}/g, "\n\n");
	return restoreCode(text, blocks).trim() + "\n";
}
function stripFrontmatter(raw) {
	const match = raw.match(/^\s*---\r?\n[\s\S]*?\r?\n---\s*\r?\n?/);
	if (!match) return raw;
	return raw.slice(match[0].length);
}
function parseFrontmatterString(raw, key) {
	const match = raw.match(/^\s*---\r?\n([\s\S]*?)\r?\n---/);
	if (!match) return void 0;
	return match[1].match(new RegExp(`^${key}:\\s*(.+)$`, "m"))?.[1]?.trim() || void 0;
}
export { stripFrontmatter as n, markdocToMarkdown as r, parseFrontmatterString as t };
