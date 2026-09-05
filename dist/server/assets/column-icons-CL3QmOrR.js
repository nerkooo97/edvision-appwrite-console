import { Binary, CalendarClock, CalendarDays, Clock, Columns3, Cpu, FileJson, Hash, Layers, Link2, Mail, MapPin, Route, ToggleLeft, Type } from "lucide-react";
function getColumnIcon(type) {
	const normalized = type.toLowerCase().trim();
	if (normalized === "enum" || normalized.startsWith("enum(")) return Columns3;
	switch (normalized) {
		case "string":
		case "varchar":
		case "text":
		case "mediumtext":
		case "longtext":
		case "bpchar":
		case "char":
		case "character varying": return Type;
		case "id":
		case "system-id":
		case "$id":
		case "uuid": return Hash;
		case "integer":
		case "int":
		case "int2":
		case "int4":
		case "int8":
		case "bigint":
		case "smallint":
		case "serial":
		case "bigserial":
		case "smallserial": return Binary;
		case "float":
		case "float4":
		case "float8":
		case "double":
		case "double precision":
		case "real":
		case "numeric":
		case "decimal": return Hash;
		case "boolean":
		case "bool": return ToggleLeft;
		case "datetime":
		case "timestamp":
		case "timestamptz":
		case "timestamp with time zone":
		case "timestamp without time zone":
		case "$createdat":
		case "$updatedat": return CalendarClock;
		case "date": return CalendarDays;
		case "time": return Clock;
		case "email": return Mail;
		case "url": return Link2;
		case "ip": return MapPin;
		case "json":
		case "jsonb":
		case "object": return FileJson;
		case "vector":
		case "embedding":
		case "embeddings": return Cpu;
		case "point": return MapPin;
		case "linestring": return Route;
		case "polygon": return Layers;
		default: return FileJson;
	}
}
export { getColumnIcon as t };
