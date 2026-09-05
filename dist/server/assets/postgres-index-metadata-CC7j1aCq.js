const POSTGRES_INDEX_ALGORITHMS = [
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
function splitPostgresIndexColumnList(raw) {
	return raw.split(",").map((part) => part.trim().replace(/^"(.+)"$/, "$1").replace(/\s+(ASC|DESC|nulls first|nulls last)$/i, "").trim()).filter(Boolean);
}
function parsePostgresIndexKeyColumns(definition) {
	const usingMatch = definition.match(/USING\s+\w+\s*\(([^)]+)\)/i);
	if (usingMatch?.[1]) return splitPostgresIndexColumnList(usingMatch[1]);
	const onMatch = definition.match(/ON\s+\S+\s*\(([^)]+)\)/i);
	if (onMatch?.[1]) return splitPostgresIndexColumnList(onMatch[1]);
	return [];
}
function parsePostgresIndexIncludeColumns(definition) {
	const match = definition.match(/INCLUDE\s*\(([^)]+)\)/i);
	if (!match?.[1]) return [];
	return splitPostgresIndexColumnList(match[1]);
}
function createDefaultPostgresIndexFormState() {
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
function validatePostgresIndexFormState(state) {
	if (!state.name.trim()) return "Index name is required.";
	if (state.columns.length === 0) return "Select at least one key column.";
	if (state.algorithm === "hash" && state.columns.length > 1) return "Hash indexes support only one key column.";
	if (state.includeColumns.filter((column) => state.columns.includes(column)).length > 0) return "Include columns must be different from key columns.";
	return null;
}
function formatPostgresIndexMetadataPreview(value, maxLength = 48) {
	if (!value?.trim()) return "-";
	const singleLine = value.replace(/\s+/g, " ").trim();
	if (singleLine.length <= maxLength) return singleLine;
	return `${singleLine.slice(0, maxLength - 1)}…`;
}
function getPostgresIndexAlgorithmLabel(algorithm) {
	if (!algorithm?.trim()) return "B-tree";
	const normalized = algorithm.trim().toLowerCase();
	return POSTGRES_INDEX_ALGORITHMS.find((entry) => entry.id === normalized)?.label ?? normalized.toUpperCase();
}
function getPostgresIndexAlgorithmDefinition(algorithm) {
	return POSTGRES_INDEX_ALGORITHMS.find((entry) => entry.id === algorithm);
}
function getPostgresIndexAlgorithmSearchValue(entry) {
	return [
		entry.label,
		entry.id,
		entry.description
	].join(" ");
}
export { getPostgresIndexAlgorithmLabel as a, parsePostgresIndexKeyColumns as c, getPostgresIndexAlgorithmDefinition as i, validatePostgresIndexFormState as l, createDefaultPostgresIndexFormState as n, getPostgresIndexAlgorithmSearchValue as o, formatPostgresIndexMetadataPreview as r, parsePostgresIndexIncludeColumns as s, POSTGRES_INDEX_ALGORITHMS as t };
