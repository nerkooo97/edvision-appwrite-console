import { r as isHtmlDarkChrome } from "./html-theme-zz5wyKPq.js";
import { t as DatabaseType } from "./database-type-CDbWlUlx.js";
import { G as fetchProjectTables, H as fetchProjectTableIndexes, V as fetchProjectTableColumns, q as getDatabaseModel } from "./databases-Dh0pwZ6h.js";
function toSchemaNumber(v) {
	if (v == null) return null;
	if (typeof v === "bigint") return Number(v);
	if (typeof v === "number" && !Number.isNaN(v)) return v;
	return null;
}
function readRowSecurity(table, kind) {
	if (kind === DatabaseType.Documentsdb || kind === DatabaseType.Vectorsdb) return table.documentSecurity === true;
	return table.rowSecurity === true;
}
async function fetchDatabaseSchema(projectId, databaseId, dbKind) {
	const db = await getDatabaseModel(projectId, databaseId, dbKind);
	if (!db) throw new Error("Database not found");
	const kind = db.type ?? DatabaseType.Tablesdb;
	const tablesResponse = await fetchProjectTables(projectId, databaseId, dbKind, 0, 1e3);
	const tables = await Promise.all((tablesResponse.tables || []).map(async (table) => {
		const tableId = String(table.$id ?? "");
		const [columnsResponse, indexesResponse] = await Promise.all([fetchProjectTableColumns(projectId, databaseId, dbKind, tableId), fetchProjectTableIndexes(projectId, databaseId, dbKind, tableId)]);
		const columns = (columnsResponse.columns || []).map((col) => ({
			key: String(col.key ?? col.$id ?? ""),
			type: String(col.type || "string"),
			required: col.required === true,
			array: col.array === true,
			size: toSchemaNumber(col.size) ?? null,
			default: col.default ?? null,
			format: col.format || void 0,
			elements: col.elements || void 0,
			min: toSchemaNumber(col.min) ?? null,
			max: toSchemaNumber(col.max) ?? null,
			relatedTable: col.relatedTable || col.relatedCollection || void 0,
			relatedColumn: col.relatedColumn || col.relatedAttribute || void 0,
			relationType: col.relationType || col.relation || void 0
		}));
		const indexes = (indexesResponse.indexes || []).map((idx) => ({
			key: String(idx.key ?? idx.$id ?? ""),
			type: String(idx.type || "key"),
			attributes: idx.attributes || [],
			orders: idx.orders || void 0
		}));
		return {
			id: tableId,
			name: String(table.name || "Unnamed Table"),
			enabled: table.enabled !== false,
			rowSecurity: readRowSecurity(table, kind),
			columns,
			indexes
		};
	}));
	return {
		database: {
			id: db.$id,
			name: db.name || "Unnamed Database"
		},
		tables
	};
}
function jsonReplacer(_key, value) {
	if (typeof value === "bigint") return value.toString();
	return value;
}
function formatSchemaAsJSON(schema) {
	return JSON.stringify(schema, jsonReplacer, 2);
}
function formatSchemaAsMarkdown(schema) {
	let markdown = `# Database Schema: ${schema.database.name}\n\n`;
	markdown += `**Database ID:** \`${schema.database.id}\`\n\n`;
	markdown += `## Tables\n\n`;
	if (schema.tables.length === 0) {
		markdown += `No tables found.\n`;
		return markdown;
	}
	for (const table of schema.tables) {
		markdown += `### ${table.name}\n\n`;
		markdown += `**Table ID:** \`${table.id}\`\n\n`;
		markdown += `**Status:** ${table.enabled ? "Enabled" : "Disabled"}  \n`;
		markdown += `**Row Security:** ${table.rowSecurity ? "Enabled" : "Disabled"}\n\n`;
		if (table.columns.length > 0) {
			markdown += `#### Columns\n\n`;
			markdown += `| Column | Type | Required | Default | Size | Format | Description |\n`;
			markdown += `|--------|------|----------|---------|------|--------|------------|\n`;
			for (const col of table.columns) {
				const typeDisplay = col.array ? `${col.type}[]` : col.type;
				const requiredDisplay = col.required ? "Yes" : "No";
				const defaultDisplay = col.default !== null ? `\`${col.default}\`` : "-";
				const sizeDisplay = col.size ? col.size.toString() : "-";
				const formatDisplay = col.format || "-";
				let description = "";
				if (col.relatedTable) {
					description = `Relation to \`${col.relatedTable}\``;
					if (col.relatedColumn) description += `.\`${col.relatedColumn}\``;
					if (col.relationType) description += ` (${col.relationType})`;
				}
				markdown += `| \`${col.key}\` | ${typeDisplay} | ${requiredDisplay} | ${defaultDisplay} | ${sizeDisplay} | ${formatDisplay} | ${description || "-"} |\n`;
			}
			markdown += `\n`;
		}
		if (table.indexes.length > 0) {
			markdown += `#### Indexes\n\n`;
			markdown += `| Index | Type | Attributes |\n`;
			markdown += `|-------|------|------------|\n`;
			for (const idx of table.indexes) {
				const attributesDisplay = idx.attributes.join(", ");
				markdown += `| \`${idx.key}\` | ${idx.type} | ${attributesDisplay} |\n`;
			}
			markdown += `\n`;
		}
		markdown += `---\n\n`;
	}
	return markdown;
}
function formatSchemaAsTypeScript(schema) {
	let typescript = `// Database Schema: ${schema.database.name}\n`;
	typescript += `// Database ID: ${schema.database.id}\n\n`;
	typescript += `import type { Models } from '@appwrite.io/console'\n\n`;
	if (schema.tables.length === 0) {
		typescript += `// No tables found.\n`;
		return typescript;
	}
	for (const table of schema.tables) {
		const typeName = `${toPascalCase(table.name)}Row`;
		typescript += `export type ${typeName} = Models.Row & {\n`;
		for (const col of table.columns) {
			const tsType = getTypeScriptType(col);
			const optional = col.required ? "" : "?";
			typescript += `  ${col.key}${optional}: ${tsType}\n`;
		}
		typescript += `}\n\n`;
	}
	return typescript;
}
function toPascalCase(str) {
	return str.replace(/[^a-zA-Z0-9]/g, " ").split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join("").replace(/^[a-z]/, (char) => char.toUpperCase());
}
function getTypeScriptType(col) {
	let baseType = "string";
	switch (col.type) {
		case "string":
		case "varchar":
		case "text":
		case "mediumtext":
		case "longtext":
			baseType = "string";
			break;
		case "integer":
		case "bigint":
		case "double":
			baseType = "number";
			break;
		case "boolean":
			baseType = "boolean";
			break;
		case "datetime":
			baseType = "string";
			break;
		case "email":
		case "url":
		case "ip":
			baseType = "string";
			break;
		case "relationship":
			baseType = "string";
			break;
		default: baseType = "any";
	}
	if (col.array) return `${baseType}[]`;
	if (!col.required) return `${baseType} | null`;
	return baseType;
}
function formatSchemaAsSVG(schema) {
	const isDark = typeof window !== "undefined" && (isHtmlDarkChrome() || window.matchMedia("(prefers-color-scheme: dark)").matches);
	const cardColor = isDark ? "#242424" : "#ffffff";
	const foregroundColor = isDark ? "#ffffff" : "#000000";
	const borderColor = isDark ? "#444444" : "#b3b3b3";
	const headerBgColor = isDark ? "#2a2a2a" : "#f0f0f0";
	const tableWidth = 250;
	const tableHeight = 200;
	const tableSpacing = 50;
	const padding = 50;
	const cols = Math.ceil(Math.sqrt(schema.tables.length));
	const rows = Math.ceil(schema.tables.length / cols);
	const totalWidth = cols * tableWidth + (cols - 1) * tableSpacing + padding * 2;
	let svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${totalWidth}" height="${rows * tableHeight + (rows - 1) * tableSpacing + padding * 2}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .table-header { font-weight: 500; font-size: 13px; }
      .column-name { font-size: 12px; }
      .column-type { font-size: 10px; opacity: 0.8; }
    </style>
  </defs>
  <rect width="100%" height="100%" fill="${cardColor}" />
  
  <text x="${totalWidth / 2}" y="30" text-anchor="middle" font-size="18" font-weight="600" fill="${foregroundColor}">
    ${escapeXml(schema.database.name)}
  </text>
`;
	schema.tables.forEach((table, index) => {
		const col = index % cols;
		const row = Math.floor(index / cols);
		const x = padding + col * (tableWidth + tableSpacing);
		const y = padding + 60 + row * (tableHeight + tableSpacing);
		svg += `  <rect x="${x}" y="${y}" width="${tableWidth}" height="${tableHeight}" rx="8" fill="${cardColor}" stroke="${borderColor}" stroke-width="1" />\n`;
		svg += `  <rect x="${x}" y="${y}" width="${tableWidth}" height="40" rx="8" fill="${headerBgColor}" />\n`;
		svg += `  <line x1="${x}" y1="${y + 40}" x2="${x + tableWidth}" y2="${y + 40}" stroke="${borderColor}" stroke-width="1" />\n`;
		svg += `  <text x="${x + 12}" y="${y + 26}" class="table-header" fill="${foregroundColor}">${escapeXml(table.name)}</text>\n`;
		table.columns.slice(0, 5).forEach((col$1, colIndex) => {
			const colY = y + 50 + colIndex * 25;
			svg += `  <text x="${x + 12}" y="${colY}" class="column-name" fill="${foregroundColor}">${escapeXml(col$1.key)}</text>\n`;
			svg += `  <text x="${x + tableWidth - 12}" y="${colY}" class="column-type" text-anchor="end" fill="${foregroundColor}">${escapeXml(col$1.type)}</text>\n`;
		});
		if (table.columns.length > 5) svg += `  <text x="${x + tableWidth / 2}" y="${y + tableHeight - 10}" text-anchor="middle" font-size="10" fill="${foregroundColor}" opacity="0.6">+${table.columns.length - 5} more</text>\n`;
	});
	svg += `</svg>`;
	return svg;
}
function escapeXml(text) {
	return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function getCursorDeepLink(schema) {
	const prompt = `Here is my database schema:\n\n${formatSchemaAsJSON(schema)}\n\nHelp me understand and work with this database structure.`;
	return `cursor://anysphere.cursor-deeplink/prompt?text=${encodeURIComponent(prompt)}`;
}
function getLovableDeepLink(schema) {
	const prompt = `Here is my database schema:\n\n${formatSchemaAsJSON(schema)}\n\nHelp me understand and work with this database structure.`;
	return `https://lovable.dev/?autosubmit=true#prompt=${encodeURIComponent(prompt)}`;
}
function getChatGPTDeepLink(schema) {
	const prompt = `Here is my database schema:\n\n${formatSchemaAsMarkdown(schema)}\n\nHelp me understand and work with this database structure.`;
	return `https://chatgpt.com/?prompt=${encodeURIComponent(prompt)}`;
}
function getClaudeDeepLink(schema) {
	const prompt = `Here is my database schema:\n\n${formatSchemaAsMarkdown(schema)}\n\nHelp me understand and work with this database structure.`;
	return `https://claude.ai/new?q=${encodeURIComponent(prompt)}`;
}
function downloadBlob(blob, filename) {
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
function downloadAsFile(content, filename, mimeType = "text/plain") {
	downloadBlob(new Blob([content], { type: mimeType }), filename);
}
export { formatSchemaAsMarkdown as a, getChatGPTDeepLink as c, getLovableDeepLink as d, formatSchemaAsJSON as i, getClaudeDeepLink as l, downloadBlob as n, formatSchemaAsSVG as o, fetchDatabaseSchema as r, formatSchemaAsTypeScript as s, downloadAsFile as t, getCursorDeepLink as u };
