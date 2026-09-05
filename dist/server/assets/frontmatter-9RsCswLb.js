import { t as slugifyHeading } from "./slugify-P-hUWnOW.js";
import { n as stripFrontmatter } from "./frontmatter-CpHldQ8H.js";
import yaml from "js-yaml";
function stripInlineMarkdocTags(text) {
	return text.replace(/\s*\{%\s*#[-\w]+\s*%\}/g, "").replace(/\s*\{#[-\w]+\}/g, "").replace(/\s*\{%[^%]*%\}/g, "").replace(/\s+/g, " ").trim();
}
function parseHeadingAnchor(text) {
	const cleaned = text.trim();
	const mdCustomId = cleaned.match(/\s*\{#([-\w]+)\}\s*$/);
	if (mdCustomId && mdCustomId.index !== void 0) return {
		title: stripInlineMarkdocTags(cleaned.slice(0, mdCustomId.index).trim()),
		id: mdCustomId[1]
	};
	const markdocId = cleaned.match(/\s*\{%\s*#([-\w]+)\s*%\}\s*$/);
	if (markdocId && markdocId.index !== void 0) return {
		title: stripInlineMarkdocTags(cleaned.slice(0, markdocId.index).trim()),
		id: markdocId[1]
	};
	return { title: stripInlineMarkdocTags(cleaned) };
}
function resolveHeadingId(text, explicitId) {
	const { title, id: anchorId } = parseHeadingAnchor(text);
	return {
		title,
		id: explicitId ?? anchorId ?? slugifyHeading(title)
	};
}
function parseSectionAttributes(attrs) {
	const idMatch = attrs.match(/#([-\w]+)/);
	if (!idMatch) return null;
	const stepMatch = attrs.match(/\bstep=(\d+)\b/);
	const titleMatch = attrs.match(/\btitle="([^"]*)"/);
	return {
		id: idMatch[1],
		title: stripInlineMarkdocTags(titleMatch ? titleMatch[1] : ""),
		step: stepMatch ? Number(stepMatch[1]) : void 0
	};
}
function extractDocsToc(raw) {
	const body = stripFrontmatter(raw);
	const items = [];
	const seen = /* @__PURE__ */ new Set();
	const sectionTagRe = /\{%\s*section\s+([^%]+?)\s*%\}/g;
	let match;
	while ((match = sectionTagRe.exec(body)) !== null) {
		const parsed = parseSectionAttributes(match[1]);
		if (!parsed || seen.has(parsed.id)) continue;
		seen.add(parsed.id);
		items.push({
			id: parsed.id,
			label: parsed.title || parsed.id,
			level: 2,
			step: parsed.step
		});
	}
	const headingRe = /^(#{1,2})(?!#)\s+(.+)$/gm;
	while ((match = headingRe.exec(body)) !== null) {
		const level = match[1].length;
		const rest = match[2].trim();
		const markdocId = rest.match(/\s*\{%\s*#([-\w]+)\s*%\}\s*$/);
		const mdCustomId = rest.match(/\s*\{#([-\w]+)\}\s*$/);
		let label;
		let id;
		if (markdocId) {
			label = stripInlineMarkdocTags(rest.slice(0, markdocId.index).trim());
			id = markdocId[1];
		} else if (mdCustomId) {
			label = stripInlineMarkdocTags(rest.slice(0, mdCustomId.index).trim());
			id = mdCustomId[1];
		} else {
			label = stripInlineMarkdocTags(rest);
			id = slugifyHeading(label);
		}
		if (!id || seen.has(id)) continue;
		seen.add(id);
		items.push({
			id,
			label,
			level
		});
	}
	return items;
}
var LINK_ONLY_LIST_ITEM_RE = /^(\s*(?:[-*+]|(?:\d+\.)))\s+\[([^\]]+)\]\(([^)\s]+(?:\([^)]*\)[^)\s]*)*)\)\s*$/;
function preprocessBlogMarkdocContent(content) {
	const lines = content.split("\n");
	const result = [];
	let index = 0;
	while (index < lines.length) {
		if (!lines[index].match(LINK_ONLY_LIST_ITEM_RE)) {
			result.push(lines[index]);
			index += 1;
			continue;
		}
		while (index < lines.length) {
			const match = lines[index].match(LINK_ONLY_LIST_ITEM_RE);
			if (!match) break;
			const label = match[2].trim();
			const href = match[3].trim();
			result.push(`{% arrow_link href="${href}" %}`);
			result.push(label);
			result.push("{% /arrow_link %}");
			index += 1;
		}
	}
	return result.join("\n");
}
function parseBlogFrontmatter(raw) {
	const match = raw.match(/^\s*---\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
	if (!match) return {
		frontmatter: {},
		body: raw
	};
	const parsed = yaml.load(match[1]);
	return {
		frontmatter: parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {},
		body: raw.slice(match[0].length)
	};
}
function getFrontmatterString(frontmatter, key) {
	const value = frontmatter[key];
	if (typeof value === "string") return value;
	if (typeof value === "number" || typeof value === "boolean") return String(value);
}
function getFrontmatterDate(frontmatter, key) {
	const value = frontmatter[key];
	if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString().slice(0, 10);
	if (typeof value === "string" && value.trim()) return value.trim();
	if (typeof value === "number" && Number.isFinite(value)) {
		const date = new Date(value < 0xe8d4a51000 ? value * 1e3 : value);
		if (!Number.isNaN(date.getTime())) return date.toISOString().slice(0, 10);
	}
	return "";
}
function getFrontmatterStringArray(frontmatter, key) {
	const value = frontmatter[key];
	if (typeof value === "string") return [value];
	if (!Array.isArray(value)) return void 0;
	return value.filter((item) => typeof item === "string");
}
function getFrontmatterAuthor(frontmatter) {
	const value = frontmatter.author;
	if (typeof value === "string") return value;
	if (Array.isArray(value)) return value.filter((item) => typeof item === "string");
	return "";
}
function getFrontmatterFaqs(frontmatter) {
	const value = frontmatter.faqs;
	if (!Array.isArray(value)) return void 0;
	const faqs = value.map((item) => {
		if (!item || typeof item !== "object") return null;
		const record = item;
		const question = typeof record.question === "string" ? record.question : void 0;
		const answer = typeof record.answer === "string" ? record.answer : void 0;
		if (!question || !answer) return null;
		return {
			question,
			answer
		};
	}).filter((item) => item !== null);
	return faqs.length > 0 ? faqs : void 0;
}
export { getFrontmatterStringArray as a, extractDocsToc as c, getFrontmatterString as i, resolveHeadingId as l, getFrontmatterDate as n, parseBlogFrontmatter as o, getFrontmatterFaqs as r, preprocessBlogMarkdocContent as s, getFrontmatterAuthor as t };
