import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-XaWkg9jR.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { n as MySQLDolphinIcon, r as PostgresElephantIcon } from "./database-mascot-icons-mAQ4uqbH.js";
import { h as resolveInitDayUnlockDate } from "./events-s0i9XY3r.js";
import { a as VectorsDbSearchSnippet, i as Syn, o as productBentoContainer, r as QueryEqualFilter, s as productBentoIdle } from "./MockSyntax-BoA_nXCY.js";
import { t as getColumnIcon } from "./column-icons-CL3QmOrR.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from "react";
import { Braces, Check, CheckCircle2, Layers, Loader2, Shield, ShieldAlert, ShieldCheck, ShieldX, Table, XCircle } from "lucide-react";
function formatInitDayCountdown(remainingMs) {
	if (remainingMs <= 0) return {
		label: "Unlocking now",
		isComplete: true
	};
	const totalSeconds = Math.floor(remainingMs / 1e3);
	const days = Math.floor(totalSeconds / 86400);
	const hours = Math.floor(totalSeconds % 86400 / 3600);
	const minutes = Math.floor(totalSeconds % 3600 / 60);
	const seconds = totalSeconds % 60;
	if (days > 0) return {
		label: `${days}d ${hours}h ${minutes}m`,
		isComplete: false
	};
	if (hours > 0) return {
		label: `${hours}h ${minutes}m ${seconds}s`,
		isComplete: false
	};
	return {
		label: `${minutes}m ${seconds}s`,
		isComplete: false
	};
}
function useInitDayCountdown(unlockAt) {
	const [now, setNow] = useState(() => Date.now());
	useEffect(() => {
		const interval = window.setInterval(() => {
			setNow(Date.now());
		}, 1e3);
		return () => window.clearInterval(interval);
	}, [unlockAt.getTime()]);
	return formatInitDayCountdown(unlockAt.getTime() - now);
}
function InitDayCountdown({ eventStartDate, dayNumber, className, size = "md" }) {
	const { label } = useInitDayCountdown(useMemo(() => resolveInitDayUnlockDate(eventStartDate, dayNumber), [eventStartDate, dayNumber]));
	return /* @__PURE__ */ jsx("p", {
		className: cn("font-mono tabular-nums text-foreground", size === "sm" ? "text-[12px]" : "text-[15px] font-semibold", className),
		"aria-live": "polite",
		children: label
	});
}
const INIT_DAY_CARD_SCROLL_OFFSET_PX = 112;
function getInitDayCardId(day) {
	return `day-${day}`;
}
function scrollToInitDayCard(day) {
	if (typeof document === "undefined") return;
	const el = document.getElementById(getInitDayCardId(day));
	const main = document.getElementById("main-content");
	if (!el || !main) return;
	const mainRect = main.getBoundingClientRect();
	const elRect = el.getBoundingClientRect();
	const targetTop = main.scrollTop + elRect.top - mainRect.top - 112;
	main.scrollTo({
		top: Math.max(0, targetTop),
		behavior: "smooth"
	});
}
function scrollToInitDayFromHash() {
	if (typeof window === "undefined") return;
	const match = window.location.hash.slice(1).match(/^day-(\d+)$/);
	if (!match) return;
	scrollToInitDayCard(Number(match[1]));
}
function isLaunchEventDayLocked(day) {
	return "isLocked" in day && day.isLocked === true;
}
var APPWRITE_TABS = [
	{
		id: "tablesdb",
		label: "TablesDB",
		Icon: Table
	},
	{
		id: "documentsdb",
		label: "DocumentsDB",
		Icon: Braces
	},
	{
		id: "vectorsdb",
		label: "VectorsDB",
		Icon: Layers
	}
];
var TABLE_ROWS = [
	{
		id: "67f8a2…04c1",
		driver: "Charles Leclerc",
		code: "LEC",
		team: "ferrari",
		position: "1",
		lap: "70842",
		revealDelayMs: 220
	},
	{
		id: "67f8b1…12a4",
		driver: "Lando Norris",
		code: "NOR",
		team: "mclaren",
		position: "2",
		lap: "71016",
		revealDelayMs: 360
	},
	{
		id: "67f8c3…28b7",
		driver: "Oscar Piastri",
		code: "PIA",
		team: "mclaren",
		position: "3",
		lap: "71204",
		revealDelayMs: 500
	},
	{
		id: "67f8d4…39c8",
		driver: "Lewis Hamilton",
		code: "HAM",
		team: "ferrari",
		position: "4",
		lap: "71388",
		revealDelayMs: 640,
		highlight: true
	}
];
var VECTOR_RESULTS = [
	{
		title: "Monaco undercut window",
		snippet: "Pit lap 16 while rival stays out on Medium to gain track position.",
		source: "briefing_q3.md",
		score: .94,
		delayMs: 140
	},
	{
		title: "Tyre cliff after lap 22",
		snippet: "Medium degradation accelerates once surface temps drop in the tunnel.",
		source: "telemetry_lap22.json",
		score: .91,
		delayMs: 280
	},
	{
		title: "Safety car restart gap",
		snippet: "Leave 1.2s to leader at line to avoid DRS train into Turn 1.",
		source: "race_control_notes",
		score: .87,
		delayMs: 420
	}
];
var VECTOR_FILTERS = ["session: Monaco GP", "type: strategy"];
var NATIVE_DATABASES = [{
	id: "postgres",
	label: "PostgreSQL",
	Icon: PostgresElephantIcon
}, {
	id: "mysql",
	label: "MySQL",
	Icon: MySQLDolphinIcon
}];
var TABLE_COLUMNS = [
	{
		key: "id",
		label: "$id",
		type: "system-id",
		cellAlign: "left",
		width: "16%"
	},
	{
		key: "driver",
		label: "driver",
		type: "string",
		cellAlign: "left",
		width: "28%"
	},
	{
		key: "code",
		label: "code",
		type: "string",
		cellAlign: "left",
		width: "9%"
	},
	{
		key: "team",
		label: "team",
		type: "string",
		cellAlign: "left",
		width: "16%"
	},
	{
		key: "position",
		label: "pos",
		type: "integer",
		cellAlign: "right",
		width: "11%"
	},
	{
		key: "lap",
		label: "lap_ms",
		type: "integer",
		cellAlign: "right",
		width: "20%"
	}
];
var TABLE_CHECKBOX_COL_WIDTH = 28;
var TABLE_CELL_X = "px-2";
var TABLE_HEADER_Y = "py-1.5";
var TABLE_BODY_Y = "py-1";
var TABLE_TEXT = "text-[11px]";
var TABLE_HEADER_TEXT = "text-[11px]";
function TablesDbColumnIcon({ type }) {
	return /* @__PURE__ */ jsx(type === "system-id" ? getColumnIcon("system-id") : getColumnIcon(type), {
		className: "size-3 shrink-0 text-muted-foreground",
		"aria-hidden": true
	});
}
var spreadsheetHeaderCellClass = "border-e border-border shadow-[inset_0_1px_0_0_var(--border),inset_0_-1px_0_0_var(--border)]";
var spreadsheetLastHeaderCellClass = "shadow-[inset_0_1px_0_0_var(--border),inset_0_-1px_0_0_var(--border)]";
var spreadsheetBodyCellClass = "border-b border-e border-border";
var spreadsheetLastBodyCellClass = "border-b border-border";
var EMPTY_TABLE_ROW_COUNT = 4;
function SpreadsheetCheckboxPlaceholder({ checked = false }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("mx-auto flex size-3 items-center justify-center rounded-[3px] border", checked ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background"),
		"aria-hidden": true,
		children: checked ? /* @__PURE__ */ jsx(Check, { className: "size-2.5 stroke-[3]" }) : null
	});
}
function SpreadsheetCheckboxCell({ checked = false }) {
	return /* @__PURE__ */ jsx("td", {
		className: cn("border-b border-border px-1.5 py-1 text-center", "shadow-[inset_-1px_0_0_0_var(--border)]"),
		children: /* @__PURE__ */ jsx(SpreadsheetCheckboxPlaceholder, { checked })
	});
}
function SpreadsheetEmptyRow() {
	return /* @__PURE__ */ jsxs("tr", {
		"aria-hidden": true,
		children: [/* @__PURE__ */ jsx(SpreadsheetCheckboxCell, {}), TABLE_COLUMNS.map((column, columnIndex) => {
			return /* @__PURE__ */ jsx("td", {
				className: cn(TABLE_CELL_X, TABLE_BODY_Y, columnIndex === TABLE_COLUMNS.length - 1 ? spreadsheetLastBodyCellClass : spreadsheetBodyCellClass),
				children: /* @__PURE__ */ jsx("span", { className: "block min-h-[14px]" })
			}, column.key);
		})]
	});
}
function TablesDbPanel({ playKey }) {
	const t = useT();
	const shouldAnimate = playKey > 0;
	const [queryState, setQueryState] = useState(shouldAnimate ? "running" : "done");
	const [rowCount, setRowCount] = useState(shouldAnimate ? 843 : 847);
	useEffect(() => {
		if (playKey === 0) {
			setQueryState("done");
			setRowCount(847);
			return;
		}
		setQueryState("running");
		setRowCount(843);
		const countTimer = window.setTimeout(() => setRowCount(847), 780);
		const doneTimer = window.setTimeout(() => setQueryState("done"), 920);
		return () => {
			window.clearTimeout(countTimer);
			window.clearTimeout(doneTimer);
		};
	}, [playKey]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex min-h-0 flex-1 flex-col overflow-hidden", productBentoContainer.panel),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "border-b border-border bg-muted/20 px-3 py-2",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ jsxs("p", {
						className: "min-w-0 font-mono text-[11px] text-muted-foreground",
						children: ["monaco_gp / ", /* @__PURE__ */ jsx("span", {
							className: cn("font-medium", productBentoIdle.text),
							children: "lap_times"
						})]
					}), /* @__PURE__ */ jsxs("p", {
						className: cn("shrink-0 text-[10px] tabular-nums text-muted-foreground transition-[color,transform] duration-300", rowCount === 847 && "group-hover:scale-105 group-hover:text-foreground"),
						children: [
							rowCount,
							" ",
							t("rows")
						]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2 border-b border-border bg-background px-3 py-1.5",
				children: [/* @__PURE__ */ jsx("p", {
					className: "min-w-0 flex-1 truncate font-mono text-[10px]",
					children: /* @__PURE__ */ jsx(QueryEqualFilter, {})
				}), queryState === "running" ? /* @__PURE__ */ jsx(Loader2, {
					className: "size-3.5 shrink-0 animate-spin text-muted-foreground",
					"aria-hidden": true
				}) : /* @__PURE__ */ jsx(CheckCircle2, {
					className: cn("size-3.5 shrink-0", productBentoIdle.emeraldIcon),
					"aria-hidden": true
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "min-h-0 flex-1 overflow-hidden bg-background",
				children: /* @__PURE__ */ jsxs("table", {
					className: "w-full table-fixed border-collapse bg-background",
					children: [
						/* @__PURE__ */ jsxs("colgroup", { children: [/* @__PURE__ */ jsx("col", { style: { width: TABLE_CHECKBOX_COL_WIDTH } }), TABLE_COLUMNS.map((column) => /* @__PURE__ */ jsx("col", { style: { width: column.width } }, column.key))] }),
						/* @__PURE__ */ jsx("thead", {
							className: "sticky top-0 z-20 bg-background",
							children: /* @__PURE__ */ jsxs("tr", { children: [/* @__PURE__ */ jsx("th", {
								className: cn("w-7 px-1.5 text-center", "shadow-[inset_0_1px_0_0_var(--border),inset_0_-1px_0_0_var(--border),inset_-1px_0_0_0_var(--border)]"),
								children: /* @__PURE__ */ jsx(SpreadsheetCheckboxPlaceholder, {})
							}), TABLE_COLUMNS.map((column, index) => {
								const isLast = index === TABLE_COLUMNS.length - 1;
								return /* @__PURE__ */ jsx("th", {
									className: cn(TABLE_CELL_X, TABLE_HEADER_Y, column.cellAlign === "right" ? "text-end" : "text-start", isLast ? spreadsheetLastHeaderCellClass : spreadsheetHeaderCellClass),
									children: /* @__PURE__ */ jsxs("div", {
										className: cn("flex min-w-0 items-center gap-1", column.cellAlign === "right" && "justify-end"),
										children: [/* @__PURE__ */ jsx(TablesDbColumnIcon, { type: column.type }), /* @__PURE__ */ jsx("span", {
											className: cn("min-w-0 truncate font-medium", TABLE_HEADER_TEXT, productBentoIdle.text),
											children: column.label
										})]
									})
								}, column.key);
							})] })
						}),
						/* @__PURE__ */ jsxs("tbody", { children: [TABLE_ROWS.map((row) => {
							const isSelectedRow = Boolean(row.highlight) && shouldAnimate && queryState === "done";
							return /* @__PURE__ */ jsxs("tr", {
								className: cn(shouldAnimate && row.highlight && "product-bento-db-row-highlight motion-reduce:animate-none", isSelectedRow && "bg-muted", "transition-[background-color] duration-300 hover:bg-muted/50 motion-reduce:hover:bg-transparent"),
								style: shouldAnimate && row.highlight ? { animationDelay: `${row.revealDelayMs}ms` } : void 0,
								children: [/* @__PURE__ */ jsx(SpreadsheetCheckboxCell, { checked: isSelectedRow }), TABLE_COLUMNS.map((column, columnIndex) => {
									const isLast = columnIndex === TABLE_COLUMNS.length - 1;
									const value = row[column.key];
									const isMutedValue = column.key === "team" || column.key === "code" || column.key === "position" || column.type === "system-id";
									const isAccentValue = column.key === "driver" || column.key === "lap";
									return /* @__PURE__ */ jsx("td", {
										className: cn(TABLE_CELL_X, TABLE_BODY_Y, isLast ? spreadsheetLastBodyCellClass : spreadsheetBodyCellClass, column.cellAlign === "right" && "text-end", column.type === "system-id" && "font-mono"),
										children: /* @__PURE__ */ jsx("span", {
											className: cn("block truncate", TABLE_TEXT, isMutedValue && "text-muted-foreground", isAccentValue && productBentoIdle.text, column.type === "integer" && "tabular-nums", shouldAnimate && "product-bento-db-row-reveal motion-reduce:opacity-100"),
											style: shouldAnimate ? { animationDelay: `${row.revealDelayMs}ms` } : void 0,
											children: value
										})
									}, column.key);
								})]
							}, row.id);
						}), Array.from({ length: EMPTY_TABLE_ROW_COUNT }, (_, index) => /* @__PURE__ */ jsx(SpreadsheetEmptyRow, {}, `empty-row-${index}`))] })
					]
				})
			})
		]
	});
}
function DocumentsDbPanel({ playKey }) {
	const t = useT();
	const shouldAnimate = playKey > 0;
	const revealClass = shouldAnimate ? "product-bento-db-reveal motion-reduce:opacity-100" : void 0;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex min-h-0 flex-1 flex-col overflow-hidden", productBentoContainer.panel),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between gap-2 border-b border-border bg-muted/5 px-3.5 py-2.5",
			children: [/* @__PURE__ */ jsxs("div", {
				className: cn("min-w-0", revealClass),
				style: shouldAnimate ? { animationDelay: "0ms" } : void 0,
				children: [/* @__PURE__ */ jsx("p", {
					className: cn("text-[12px] font-medium", productBentoIdle.text),
					children: "race_briefings"
				}), /* @__PURE__ */ jsx("p", {
					className: "truncate text-[10px] text-muted-foreground",
					children: "Monaco GP strategy"
				})]
			}), /* @__PURE__ */ jsx(Badge, {
				variant: "inactive",
				className: cn("h-5 shrink-0 px-1.5 text-[10px] transition-[color,background-color] duration-300 group-hover:bg-green-500/10 group-hover:text-green-700 dark:group-hover:text-green-400", revealClass),
				style: shouldAnimate ? { animationDelay: "420ms" } : void 0,
				children: t("Live")
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "min-h-0 flex-1 overflow-hidden p-3 font-mono text-[11px] leading-relaxed sm:text-[12px]",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: revealClass,
					style: shouldAnimate ? { animationDelay: "60ms" } : void 0,
					children: /* @__PURE__ */ jsx(Syn, {
						tone: "punctuation",
						children: "{"
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: cn(revealClass, "ps-2"),
					style: shouldAnimate ? { animationDelay: "120ms" } : void 0,
					children: [
						/* @__PURE__ */ jsx(Syn, {
							tone: "property",
							children: "\"event\""
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "punctuation",
							children: ": "
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "string",
							children: "\"Monaco GP\""
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "punctuation",
							children: ","
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: cn(revealClass, "ps-2"),
					style: shouldAnimate ? { animationDelay: "180ms" } : void 0,
					children: [
						/* @__PURE__ */ jsx(Syn, {
							tone: "property",
							children: "\"session\""
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "punctuation",
							children: ": "
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "string",
							children: "\"Race\""
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "punctuation",
							children: ","
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: cn(revealClass, "ps-2"),
					style: shouldAnimate ? { animationDelay: "260ms" } : void 0,
					children: [
						/* @__PURE__ */ jsx(Syn, {
							tone: "property",
							children: "\"weather\""
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "punctuation",
							children: ": "
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "punctuation",
							children: "{ "
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "property",
							children: "\"air_c\""
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "punctuation",
							children: ": "
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "number",
							children: "24"
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "punctuation",
							children: ", "
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "property",
							children: "\"track_c\""
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "punctuation",
							children: ": "
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "number",
							children: "46"
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "punctuation",
							children: " }"
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "punctuation",
							children: ","
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: cn(revealClass, "ps-2"),
					style: shouldAnimate ? { animationDelay: "340ms" } : void 0,
					children: [
						/* @__PURE__ */ jsx(Syn, {
							tone: "property",
							children: "\"strategy\""
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "punctuation",
							children: ": "
						}),
						/* @__PURE__ */ jsx(Syn, {
							tone: "string",
							children: "\"Medium stint, pit 14-17\""
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: revealClass,
					style: shouldAnimate ? { animationDelay: "400ms" } : void 0,
					children: /* @__PURE__ */ jsx(Syn, {
						tone: "punctuation",
						children: "}"
					})
				})
			]
		})]
	}, playKey);
}
function VectorScoreBar({ score, delayMs, shouldAnimate }) {
	const width = `${Math.round(score * 100)}%`;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-w-[3.25rem] flex-col items-end gap-1",
		children: [/* @__PURE__ */ jsxs("span", {
			className: "font-mono text-[10px] tabular-nums text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-[11px]",
			children: [Math.round(score * 100), "%"]
		}), /* @__PURE__ */ jsx("div", {
			className: "h-1 w-full overflow-hidden rounded-full bg-muted/40",
			children: /* @__PURE__ */ jsx("div", {
				className: cn("h-full rounded-full bg-muted-foreground/25 transition-[width,background-color] duration-500 group-hover:bg-[var(--brand-cta)]/75 motion-reduce:group-hover:bg-muted-foreground/25", shouldAnimate && "product-bento-db-reveal motion-reduce:opacity-100"),
				style: {
					width,
					...shouldAnimate ? { animationDelay: `${delayMs}ms` } : {},
					transitionDelay: `${delayMs}ms`
				}
			})
		})]
	});
}
function VectorsDbPanel({ playKey }) {
	const t = useT();
	const shouldAnimate = playKey > 0;
	const revealClass = shouldAnimate ? "product-bento-db-reveal motion-reduce:opacity-100" : void 0;
	const resultRevealClass = shouldAnimate ? "product-bento-db-result-reveal motion-reduce:opacity-100" : void 0;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex min-h-0 flex-1 flex-col overflow-hidden", productBentoContainer.panel),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: cn("border-b border-border bg-muted/10 px-3 py-2", revealClass),
				style: shouldAnimate ? { animationDelay: "0ms" } : void 0,
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsxs("p", {
							className: "font-mono text-[10px] text-muted-foreground sm:text-[11px]",
							children: [
								"race_notes /",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: cn("font-medium", productBentoIdle.text),
									children: "strategy_embeddings"
								})
							]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-0.5 truncate text-[10px] text-muted-foreground",
							children: t("Semantic search over race briefings and telemetry notes")
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex shrink-0 flex-wrap justify-end gap-1",
						children: [/* @__PURE__ */ jsx(Badge, {
							variant: "inactive",
							className: "h-5 px-1.5 text-[9px] sm:text-[10px]",
							children: "1536d"
						}), /* @__PURE__ */ jsx(Badge, {
							variant: "inactive",
							className: "h-5 px-1.5 text-[9px] transition-[color,background-color,border-color] duration-300 group-hover:border-[var(--brand-cta)]/25 group-hover:bg-[var(--brand-cta)]/10 group-hover:text-[var(--brand-cta)] sm:text-[10px]",
							children: "cosine"
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-2 border-b border-border px-3 py-2.5",
				children: [/* @__PURE__ */ jsxs("div", {
					className: cn("rounded-md border border-border/80 bg-muted/8 px-2.5 py-2", revealClass),
					style: shouldAnimate ? { animationDelay: "60ms" } : void 0,
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[9px] uppercase tracking-wider text-muted-foreground sm:text-[10px]",
						children: t("Query")
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 truncate font-mono text-[11px] sm:text-[12px]",
						children: /* @__PURE__ */ jsx(Syn, {
							tone: "string",
							children: "\"Monaco undercut on Medium\""
						})
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: cn("flex flex-wrap gap-1", revealClass),
					style: shouldAnimate ? { animationDelay: "120ms" } : void 0,
					children: VECTOR_FILTERS.map((filter, index) => /* @__PURE__ */ jsx("span", {
						className: cn("rounded-md border border-border bg-background px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground transition-[border-color,background-color,color] duration-300 sm:text-[10px]", "group-hover:border-[color-mix(in_srgb,var(--brand-cta)_22%,var(--border))] group-hover:bg-[color-mix(in_srgb,var(--brand-cta)_8%,var(--background))] group-hover:text-foreground motion-reduce:group-hover:border-border motion-reduce:group-hover:bg-background motion-reduce:group-hover:text-muted-foreground"),
						style: { transitionDelay: `${index * 40}ms` },
						children: filter
					}, filter))
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "min-h-0 flex-1 space-y-1.5 overflow-hidden px-3 py-2.5",
				children: VECTOR_RESULTS.map((row, index) => /* @__PURE__ */ jsxs("div", {
					className: cn("rounded-md border border-border/70 bg-muted/5 px-2.5 py-2", resultRevealClass),
					style: shouldAnimate ? { animationDelay: `${120 + index * 160}ms` } : void 0,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ jsx("p", {
								className: cn("truncate text-[11px] font-medium sm:text-[12px]", productBentoIdle.text),
								children: row.title
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-0.5 line-clamp-2 text-[10px] leading-snug text-muted-foreground sm:text-[11px]",
								children: row.snippet
							})]
						}), /* @__PURE__ */ jsx(VectorScoreBar, {
							score: row.score,
							delayMs: row.delayMs,
							shouldAnimate
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1.5 truncate font-mono text-[9px] text-muted-foreground sm:text-[10px]",
						children: /* @__PURE__ */ jsx("span", {
							className: cn("transition-colors duration-300", productBentoIdle.text),
							children: row.source
						})
					})]
				}, `${row.title}-${playKey}`))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: cn("flex items-end justify-between gap-2 border-t border-border bg-muted/5 px-3 py-1.5", revealClass),
				style: shouldAnimate ? { animationDelay: "560ms" } : void 0,
				children: [/* @__PURE__ */ jsx("div", {
					className: "min-w-0",
					children: /* @__PURE__ */ jsx(VectorsDbSearchSnippet, {})
				}), /* @__PURE__ */ jsxs("p", {
					className: "shrink-0 text-[9px] tabular-nums text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-[10px]",
					children: [
						VECTOR_RESULTS.length,
						" ",
						t("matches"),
						" · 14ms"
					]
				})]
			})
		]
	}, playKey);
}
function NativeDbSelectionCard({ label, Icon: Icon$1 }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex min-w-0 items-center gap-2.5 px-2.5 py-2 transition-colors duration-300 sm:gap-3 sm:px-3 sm:py-2.5", productBentoContainer.panel, "group-hover:bg-accent/15 motion-reduce:group-hover:bg-card/70"),
		children: [/* @__PURE__ */ jsx("span", {
			className: "flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-muted/40 text-muted-foreground",
			children: /* @__PURE__ */ jsx(Icon$1, {
				className: "size-4",
				"aria-hidden": true
			})
		}), /* @__PURE__ */ jsx("span", {
			className: cn("min-w-0 flex-1 truncate text-[12px] font-medium sm:text-[13px]", productBentoIdle.text),
			children: label
		})]
	});
}
function NativeDbOrSeparator() {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-2 px-1",
		children: [
			/* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" }),
			/* @__PURE__ */ jsx("span", {
				className: "text-[9px] font-medium uppercase tracking-wider text-muted-foreground",
				children: t("or")
			}),
			/* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" })
		]
	});
}
function NativeDbSelectionStrip() {
	const [postgres, mysql] = NATIVE_DATABASES;
	return /* @__PURE__ */ jsxs("div", {
		className: "grid grid-cols-2 gap-2",
		children: [/* @__PURE__ */ jsx(NativeDbSelectionCard, {
			label: postgres.label,
			Icon: postgres.Icon
		}), /* @__PURE__ */ jsx(NativeDbSelectionCard, {
			label: mysql.label,
			Icon: mysql.Icon
		})]
	});
}
function DatabasesProductVisual() {
	const [activeTab, setActiveTab] = useState("tablesdb");
	const [tablesPlayKey, setTablesPlayKey] = useState(0);
	const [documentsPlayKey, setDocumentsPlayKey] = useState(0);
	const [vectorsPlayKey, setVectorsPlayKey] = useState(0);
	const visualHoveredRef = useRef(false);
	const tabPanelClassName = "absolute inset-x-0 top-0 bottom-0 mt-0 flex min-h-0 w-full flex-col overflow-hidden px-3.5 focus-visible:outline-none";
	const replayTablesAnimation = () => {
		setTablesPlayKey((key) => key + 1);
	};
	const handleVisualEnter = () => {
		if (visualHoveredRef.current) return;
		visualHoveredRef.current = true;
		if (activeTab === "tablesdb") replayTablesAnimation();
	};
	const handleVisualLeave = () => {
		visualHoveredRef.current = false;
		if (activeTab === "tablesdb") setTablesPlayKey(0);
	};
	const handleTabChange = (value) => {
		const tab = value;
		setActiveTab(tab);
		if (tab === "tablesdb") replayTablesAnimation();
		else if (tab === "documentsdb") setDocumentsPlayKey((key) => key + 1);
		else if (tab === "vectorsdb") setVectorsPlayKey((key) => key + 1);
	};
	return /* @__PURE__ */ jsxs(Tabs, {
		value: activeTab,
		onValueChange: handleTabChange,
		onMouseEnter: handleVisualEnter,
		onMouseLeave: handleVisualLeave,
		className: "absolute inset-0 flex flex-col gap-0 overflow-visible",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative min-h-0 flex-1",
			children: [
				/* @__PURE__ */ jsx(TabsContent, {
					value: "tablesdb",
					className: tabPanelClassName,
					children: /* @__PURE__ */ jsx(TablesDbPanel, { playKey: tablesPlayKey })
				}),
				/* @__PURE__ */ jsx(TabsContent, {
					value: "documentsdb",
					className: tabPanelClassName,
					children: /* @__PURE__ */ jsx(DocumentsDbPanel, { playKey: documentsPlayKey }, documentsPlayKey)
				}),
				/* @__PURE__ */ jsx(TabsContent, {
					value: "vectorsdb",
					className: tabPanelClassName,
					children: /* @__PURE__ */ jsx(VectorsDbPanel, { playKey: vectorsPlayKey }, vectorsPlayKey)
				}),
				/* @__PURE__ */ jsx("div", {
					className: "pointer-events-none absolute inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-0.5",
					children: /* @__PURE__ */ jsx(TabsList, {
						className: "pointer-events-auto inline-flex h-auto w-auto gap-1 rounded-lg border border-border/45 bg-background/80 p-1 shadow-sm",
						children: APPWRITE_TABS.map((tab) => {
							const Icon$1 = tab.Icon;
							return /* @__PURE__ */ jsxs(TabsTrigger, {
								value: tab.id,
								className: "h-auto gap-1.5 rounded-md border border-transparent px-2.5 py-1.5 text-[10px] text-muted-foreground transition-[color,background-color,border-color,box-shadow] duration-300 data-[state=active]:border-border/40 data-[state=active]:bg-background/70 data-[state=active]:text-muted-foreground data-[state=active]:shadow-sm sm:text-[11px] group-hover:data-[state=active]:border-border/55 group-hover:data-[state=active]:bg-background/90 group-hover:data-[state=active]:text-foreground [&_svg:not([class*='size-'])]:size-3",
								children: [/* @__PURE__ */ jsx(Icon$1, { "aria-hidden": true }), /* @__PURE__ */ jsx("span", {
									className: "truncate",
									children: tab.label
								})]
							}, tab.id);
						})
					})
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 shrink-0 bg-card/10 px-3.5 pb-3 pt-4 sm:pb-3.5",
			children: [/* @__PURE__ */ jsx(NativeDbOrSeparator, {}), /* @__PURE__ */ jsx("div", {
				className: "mt-2.5",
				children: /* @__PURE__ */ jsx(NativeDbSelectionStrip, {})
			})]
		})]
	});
}
var FIREWALL_RULES = [
	{
		id: "rule-1",
		name: "Block suspicious IPs",
		condition: "192.168.1.100",
		action: "block",
		enabled: true,
		highlightOnHover: true
	},
	{
		id: "rule-2",
		name: "Rate limit API endpoints",
		condition: "/api/*",
		action: "challenge",
		enabled: true
	},
	{
		id: "rule-3",
		name: "Allow admin panel",
		condition: "/admin/*",
		action: "allow",
		enabled: true
	}
];
var TRAFFIC_STATS = [
	{
		id: "blocked",
		label: "Blocked",
		value: "34.2k"
	},
	{
		id: "allowed",
		label: "Allowed",
		value: "198k"
	},
	{
		id: "challenged",
		label: "Challenged",
		value: "13k"
	}
];
var TRAFFIC_REQUESTS = [
	{
		id: "req-1",
		outcome: "pass",
		tone: "allowed",
		delayMs: 0
	},
	{
		id: "req-2",
		outcome: "block",
		tone: "blocked",
		delayMs: 220
	},
	{
		id: "req-3",
		outcome: "pass",
		tone: "allowed",
		delayMs: 440
	},
	{
		id: "req-4",
		outcome: "pass",
		tone: "challenged",
		delayMs: 660
	},
	{
		id: "req-5",
		outcome: "block",
		tone: "blocked",
		delayMs: 880
	}
];
var ACTION_CONFIG = {
	block: {
		label: "Block",
		Icon: ShieldX
	},
	allow: {
		label: "Allow",
		Icon: ShieldCheck
	},
	challenge: {
		label: "Challenge",
		Icon: ShieldAlert
	}
};
var ACTION_BADGE_HOVER_CLASS = {
	block: "group-hover:bg-red-500/10 group-hover:text-red-700 dark:group-hover:text-red-400 motion-reduce:group-hover:bg-muted motion-reduce:group-hover:text-foreground/80",
	allow: "group-hover:bg-emerald-500/10 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 motion-reduce:group-hover:bg-muted motion-reduce:group-hover:text-foreground/80",
	challenge: "group-hover:bg-amber-500/10 group-hover:text-amber-700 dark:group-hover:text-amber-400 motion-reduce:group-hover:bg-muted motion-reduce:group-hover:text-foreground/80"
};
var REQUEST_TONE_CLASS = {
	allowed: "bg-muted-foreground group-hover:bg-emerald-500 motion-reduce:group-hover:bg-muted-foreground",
	challenged: "bg-muted-foreground group-hover:bg-amber-500 motion-reduce:group-hover:bg-muted-foreground",
	blocked: "bg-muted-foreground group-hover:bg-red-500 motion-reduce:group-hover:bg-muted-foreground"
};
function ActionBadge({ action }) {
	const t = useT();
	const { label, Icon: Icon$1 } = ACTION_CONFIG[action];
	return /* @__PURE__ */ jsxs(Badge, {
		variant: "inactive",
		className: cn("h-5 shrink-0 px-1.5 text-[9px] transition-[color,background-color] duration-300 sm:text-[10px]", ACTION_BADGE_HOVER_CLASS[action]),
		children: [/* @__PURE__ */ jsx(Icon$1, {
			className: "size-2.5",
			"aria-hidden": true
		}), t(label)]
	});
}
function TrafficFlowStrip() {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "overflow-hidden rounded-md border border-border/70 bg-muted/8 px-2.5 py-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative h-5",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-x-1 top-1/2 h-px -translate-y-1/2 bg-border",
					"aria-hidden": true
				}),
				/* @__PURE__ */ jsx("span", {
					className: cn("product-bento-firewall-shield-pulse absolute left-1/2 top-1/2 flex size-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background"),
					children: /* @__PURE__ */ jsx(Shield, {
						className: cn("size-2.5", productBentoIdle.brandIcon),
						"aria-hidden": true
					})
				}),
				TRAFFIC_REQUESTS.map((request) => /* @__PURE__ */ jsx("span", {
					className: cn("absolute top-1/2 size-1.5 rounded-full opacity-0", REQUEST_TONE_CLASS[request.tone], request.outcome === "block" ? "product-bento-firewall-request-block" : "product-bento-firewall-request-pass"),
					style: { "--fw-delay": `${request.delayMs}ms` },
					"aria-hidden": true
				}, request.id))
			]
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1.5 text-center text-[9px] text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:opacity-100 sm:text-[10px]",
			style: { transitionDelay: "120ms" },
			children: t("Requests evaluated against active rules")
		})]
	});
}
function FirewallRuleRow({ name, condition, action, enabled, index, highlightOnHover = false }) {
	const t = useT();
	const ActionIcon = ACTION_CONFIG[action].Icon;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex items-center gap-2 rounded-md border border-border/70 px-2 py-1.5 transition-[border-color,background-color,opacity,transform] duration-300", productBentoContainer.panelMd, enabled ? "group-hover:border-[color-mix(in_srgb,var(--brand-cta)_22%,var(--border))] group-hover:bg-background motion-reduce:group-hover:border-border/70 motion-reduce:group-hover:bg-card/70" : "opacity-60", highlightOnHover && "group-hover:animate-[product-bento-oauth-highlight_0.45s_ease-out_both] motion-reduce:group-hover:animate-none"),
		style: { animationDelay: highlightOnHover ? `${120 + index * 70}ms` : `${index * 50}ms` },
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "flex shrink-0 items-center justify-center",
				children: enabled ? /* @__PURE__ */ jsx(CheckCircle2, {
					className: "size-3.5 text-muted-foreground transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 motion-reduce:group-hover:text-muted-foreground",
					"aria-hidden": true
				}) : /* @__PURE__ */ jsx(XCircle, {
					className: "size-3.5 text-muted-foreground",
					"aria-hidden": true
				})
			}),
			/* @__PURE__ */ jsx(ActionIcon, {
				className: cn("size-3.5 shrink-0 text-muted-foreground transition-colors duration-300", action === "block" && "group-hover:text-red-600 dark:group-hover:text-red-400 motion-reduce:group-hover:text-muted-foreground", action === "allow" && "group-hover:text-emerald-600 dark:group-hover:text-emerald-400 motion-reduce:group-hover:text-muted-foreground", action === "challenge" && "group-hover:text-amber-600 dark:group-hover:text-amber-400 motion-reduce:group-hover:text-muted-foreground"),
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ jsx("p", {
					className: cn("truncate text-[11px] font-medium sm:text-[12px]", productBentoIdle.text),
					children: t(name)
				}), /* @__PURE__ */ jsx("p", {
					className: "truncate font-mono text-[10px] text-muted-foreground sm:text-[11px]",
					children: condition
				})]
			}),
			/* @__PURE__ */ jsx(ActionBadge, { action })
		]
	});
}
function FirewallProductVisual() {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: "absolute inset-0 flex flex-col",
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("mx-auto flex h-full min-h-0 w-full max-w-[21rem] flex-col", productBentoContainer.shell),
			children: [/* @__PURE__ */ jsx("div", {
				className: cn(productBentoContainer.header, "px-3.5 py-2.5"),
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsx("p", {
							className: cn("text-[12px] font-medium sm:text-[13px]", productBentoIdle.text),
							children: t("Traffic rules")
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-0.5 text-[11px] text-muted-foreground sm:text-[12px]",
							children: t("Filter requests before they reach your APIs")
						})]
					}), /* @__PURE__ */ jsx("span", {
						className: "relative mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md border border-border bg-background",
						children: /* @__PURE__ */ jsx(Shield, {
							className: cn("size-3.5 motion-reduce:animate-none group-hover:animate-pulse", productBentoIdle.brandIcon),
							"aria-hidden": true
						})
					})]
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-2 overflow-hidden p-3",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-3 gap-1.5",
						children: TRAFFIC_STATS.map((stat) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-md border border-border bg-background px-2 py-1.5 text-center shadow-sm transition-[border-color,box-shadow] duration-300 group-hover:border-border group-hover:shadow-md",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-[11px] font-semibold tabular-nums text-foreground sm:text-[12px]",
								children: stat.value
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[9px] font-medium text-muted-foreground sm:text-[10px]",
								children: t(stat.label)
							})]
						}, stat.id))
					}),
					/* @__PURE__ */ jsx(TrafficFlowStrip, {}),
					/* @__PURE__ */ jsx("div", {
						className: "space-y-1.5",
						children: FIREWALL_RULES.map((rule, index) => /* @__PURE__ */ jsx(FirewallRuleRow, {
							name: rule.name,
							condition: rule.condition,
							action: rule.action,
							enabled: rule.enabled,
							index,
							highlightOnHover: "highlightOnHover" in rule ? rule.highlightOnHover : false
						}, rule.id))
					})
				]
			})]
		})
	});
}
export { getInitDayCardId as a, InitDayCountdown as c, INIT_DAY_CARD_SCROLL_OFFSET_PX as i, DatabasesProductVisual as n, scrollToInitDayCard as o, isLaunchEventDayLocked as r, scrollToInitDayFromHash as s, FirewallProductVisual as t };
