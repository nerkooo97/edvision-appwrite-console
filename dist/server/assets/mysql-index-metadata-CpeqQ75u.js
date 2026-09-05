const MYSQL_INDEX_ALGORITHMS = [
	{
		id: "btree",
		label: "B-tree",
		description: "Default choice. Supports equality, range scans, sorting, and composite keys."
	},
	{
		id: "hash",
		label: "Hash",
		description: "Fast equality lookups on one column. No range scans, sorting, or multi-column keys."
	},
	{
		id: "gist",
		label: "GiST",
		description: "Generalized search for geometry, geography, ranges, and nearest-neighbor queries."
	},
	{
		id: "gin",
		label: "GIN",
		description: "Inverted index for JSONB, arrays, full-text search, and other composite values."
	},
	{
		id: "spgist",
		label: "SP-GiST",
		description: "Space-partitioned trees for non-uniform data such as phone numbers and IP ranges."
	},
	{
		id: "brin",
		label: "BRIN",
		description: "Compact block summaries for very large tables with naturally ordered columns."
	}
];
function splitMysqlIndexColumnList(raw) {
	return raw.split(",").map((part) => part.trim().replace(/^"(.+)"$/, "$1").replace(/\s+(ASC|DESC|nulls first|nulls last)$/i, "").trim()).filter(Boolean);
}
function parseMysqlIndexKeyColumns(definition) {
	const usingMatch = definition.match(/USING\s+\w+\s*\(([^)]+)\)/i);
	if (usingMatch?.[1]) return splitMysqlIndexColumnList(usingMatch[1]);
	const onMatch = definition.match(/ON\s+\S+\s*\(([^)]+)\)/i);
	if (onMatch?.[1]) return splitMysqlIndexColumnList(onMatch[1]);
	return [];
}
function parseMysqlIndexIncludeColumns(definition) {
	const match = definition.match(/INCLUDE\s*\(([^)]+)\)/i);
	if (!match?.[1]) return [];
	return splitMysqlIndexColumnList(match[1]);
}
function createDefaultMysqlIndexFormState() {
	return {
		name: "",
		algorithm: "btree",
		unique: false,
		columns: [],
		condition: "",
		includeColumns: [],
		comment: ""
	};
}
function validateMysqlIndexFormState(state) {
	if (!state.name.trim()) return "Index name is required.";
	if (state.columns.length === 0) return "Select at least one key column.";
	if (state.algorithm === "hash" && state.columns.length > 1) return "Hash indexes support only one key column.";
	if (state.includeColumns.filter((column) => state.columns.includes(column)).length > 0) return "Include columns must be different from key columns.";
	return null;
}
function formatMysqlIndexMetadataPreview(value, maxLength = 48) {
	if (!value?.trim()) return "-";
	const singleLine = value.replace(/\s+/g, " ").trim();
	if (singleLine.length <= maxLength) return singleLine;
	return `${singleLine.slice(0, maxLength - 1)}…`;
}
function getMysqlIndexAlgorithmLabel(algorithm) {
	if (!algorithm?.trim()) return "B-tree";
	const normalized = algorithm.trim().toLowerCase();
	return MYSQL_INDEX_ALGORITHMS.find((entry) => entry.id === normalized)?.label ?? normalized.toUpperCase();
}
function getMysqlIndexAlgorithmDefinition(algorithm) {
	return MYSQL_INDEX_ALGORITHMS.find((entry) => entry.id === algorithm);
}
function getMysqlIndexAlgorithmSearchValue(entry) {
	return [
		entry.label,
		entry.id,
		entry.description
	].join(" ");
}
export { getMysqlIndexAlgorithmLabel as a, parseMysqlIndexKeyColumns as c, getMysqlIndexAlgorithmDefinition as i, validateMysqlIndexFormState as l, createDefaultMysqlIndexFormState as n, getMysqlIndexAlgorithmSearchValue as o, formatMysqlIndexMetadataPreview as r, parseMysqlIndexIncludeColumns as s, MYSQL_INDEX_ALGORITHMS as t };
