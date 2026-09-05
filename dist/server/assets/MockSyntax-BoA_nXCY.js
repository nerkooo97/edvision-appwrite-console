import { t as cn } from "./utils-DoqqkI3X.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var SQL_MS_PER_CHAR = 36;
var SQL_LINE_GAP_MS = 32;
var syntaxHover = {
	keyword: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
	string: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
	number: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
	property: "group-hover:text-sky-600 dark:group-hover:text-sky-400",
	function: "group-hover:text-violet-600 dark:group-hover:text-violet-400",
	class: "group-hover:text-yellow-600 dark:group-hover:text-yellow-400",
	type: "group-hover:text-cyan-700 dark:group-hover:text-cyan-400",
	operator: "group-hover:text-muted-foreground",
	punctuation: "group-hover:text-muted-foreground/90",
	identifier: "group-hover:text-foreground",
	comment: "group-hover:text-muted-foreground",
	sqlKeyword: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
	sqlFunction: "group-hover:text-violet-600 dark:group-hover:text-violet-400",
	sqlTable: "group-hover:text-cyan-700 dark:group-hover:text-cyan-400",
	sqlAlias: "group-hover:text-orange-600 dark:group-hover:text-orange-400"
};
const productBentoIdle = {
	text: "text-muted-foreground transition-colors duration-300 group-hover:text-foreground",
	brandIcon: "text-muted-foreground transition-colors duration-300 group-hover:text-[var(--brand-cta)]",
	brandDot: "bg-muted-foreground transition-colors duration-300 group-hover:bg-[var(--brand-cta)]",
	emeraldIcon: "text-muted-foreground transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
	link: "text-muted-foreground transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400",
	scaleBar: "bg-muted-foreground/20 transition-all duration-500 group-hover:bg-[var(--brand-cta)]/80 motion-reduce:group-hover:bg-muted-foreground/20",
	slider: "bg-muted-foreground/30 transition-colors duration-300 group-hover:bg-primary/75",
	ring: "stroke-muted-foreground transition-colors duration-300 group-hover:stroke-emerald-500",
	buildBar: "bg-muted-foreground/30 transition-colors duration-300 group-hover:bg-[var(--brand-cta)]",
	ctaBlock: "bg-muted-foreground/25 transition-colors duration-300 group-hover:bg-[var(--brand-cta)]/85",
	providerIcon: "opacity-45 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:group-hover:opacity-45"
};
const productBentoContainer = {
	shell: "overflow-hidden rounded-md border border-border bg-card/80 shadow-sm",
	panel: "rounded-md border border-border bg-card/80",
	panelMd: "rounded-md border border-border bg-card/80",
	header: "shrink-0 border-b border-border bg-muted/15"
};
function Syn({ tone, className, children }) {
	return /* @__PURE__ */ jsx("span", {
		className: cn("transition-colors duration-300", tone === "punctuation" ? "text-muted-foreground/80" : "text-muted-foreground", syntaxHover[tone], tone === "comment" && "italic", className),
		children
	});
}
function SqlBlock({ children, className }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("space-y-0.5 leading-normal", className),
		children
	});
}
function SqlLine({ children, className }) {
	return /* @__PURE__ */ jsx("div", {
		className,
		children
	});
}
function SqlTypingLine({ children, charCount, startDelayMs, className, showCursor = false }) {
	const durationMs = charCount * SQL_MS_PER_CHAR;
	const cursorDelayMs = startDelayMs + durationMs;
	return /* @__PURE__ */ jsx("div", {
		className: cn("min-h-[1.4em] overflow-hidden", className),
		children: /* @__PURE__ */ jsxs("span", {
			className: "inline-flex max-w-full items-center",
			children: [/* @__PURE__ */ jsx("span", {
				className: "product-bento-sql-typing-line inline-block max-w-0 overflow-hidden whitespace-nowrap",
				style: {
					"--sql-type-chars": charCount,
					"--sql-type-duration": `${durationMs}ms`,
					"--sql-type-delay": `${startDelayMs}ms`
				},
				children
			}), showCursor ? /* @__PURE__ */ jsx("span", {
				className: "ms-px inline-block h-[1em] w-px shrink-0 bg-muted-foreground opacity-0 group-hover:animate-[ai-mock-cursor-blink_1s_step-end_infinite] motion-reduce:opacity-100",
				style: { animationDelay: `${cursorDelayMs}ms` },
				"aria-hidden": true
			}) : null]
		})
	});
}
function nextSqlLineDelay(currentDelayMs, charCount) {
	return currentDelayMs + charCount * SQL_MS_PER_CHAR + SQL_LINE_GAP_MS;
}
function buildSqlLineDelays(charCounts, baseDelayMs) {
	let delay = baseDelayMs;
	return charCounts.map((charCount) => {
		const start = delay;
		delay = nextSqlLineDelay(delay, charCount);
		return start;
	});
}
function PostgresIdleSql() {
	return /* @__PURE__ */ jsxs(SqlBlock, { children: [/* @__PURE__ */ jsxs(SqlLine, { children: [
		/* @__PURE__ */ jsx(Syn, {
			tone: "sqlKeyword",
			children: "SELECT"
		}),
		" ",
		/* @__PURE__ */ jsx(Syn, {
			tone: "operator",
			children: "*"
		})
	] }), /* @__PURE__ */ jsxs(SqlLine, { children: [
		/* @__PURE__ */ jsx(Syn, {
			tone: "sqlKeyword",
			children: "FROM"
		}),
		" ",
		/* @__PURE__ */ jsx(Syn, {
			tone: "sqlTable",
			children: "lap_times"
		}),
		/* @__PURE__ */ jsx(Syn, {
			tone: "punctuation",
			children: ";"
		})
	] })] });
}
function PostgresTypedSql({ baseDelayMs = 160 }) {
	const [line1, line2, line3, line4, line5] = buildSqlLineDelays([
		24,
		16,
		36,
		23,
		12
	], baseDelayMs);
	return /* @__PURE__ */ jsxs(SqlBlock, { children: [
		/* @__PURE__ */ jsxs(SqlTypingLine, {
			charCount: 24,
			startDelayMs: line1,
			children: [
				/* @__PURE__ */ jsx(Syn, {
					tone: "sqlKeyword",
					children: "SELECT"
				}),
				" ",
				/* @__PURE__ */ jsx(Syn, {
					tone: "sqlAlias",
					children: "d"
				}),
				/* @__PURE__ */ jsx(Syn, {
					tone: "punctuation",
					children: "."
				}),
				/* @__PURE__ */ jsx(Syn, {
					tone: "identifier",
					children: "code"
				}),
				/* @__PURE__ */ jsx(Syn, {
					tone: "punctuation",
					children: ", "
				}),
				/* @__PURE__ */ jsx(Syn, {
					tone: "sqlAlias",
					children: "l"
				}),
				/* @__PURE__ */ jsx(Syn, {
					tone: "punctuation",
					children: "."
				}),
				/* @__PURE__ */ jsx(Syn, {
					tone: "identifier",
					children: "lap_ms"
				})
			]
		}),
		/* @__PURE__ */ jsxs(SqlTypingLine, {
			charCount: 16,
			startDelayMs: line2,
			children: [
				/* @__PURE__ */ jsx(Syn, {
					tone: "sqlKeyword",
					children: "FROM"
				}),
				" ",
				/* @__PURE__ */ jsx(Syn, {
					tone: "sqlTable",
					children: "lap_times"
				}),
				" ",
				/* @__PURE__ */ jsx(Syn, {
					tone: "sqlAlias",
					children: "l"
				})
			]
		}),
		/* @__PURE__ */ jsxs(SqlTypingLine, {
			charCount: 36,
			startDelayMs: line3,
			children: [
				/* @__PURE__ */ jsx(Syn, {
					tone: "sqlKeyword",
					children: "JOIN"
				}),
				" ",
				/* @__PURE__ */ jsx(Syn, {
					tone: "sqlTable",
					children: "drivers"
				}),
				" ",
				/* @__PURE__ */ jsx(Syn, {
					tone: "sqlAlias",
					children: "d"
				}),
				" ",
				/* @__PURE__ */ jsx(Syn, {
					tone: "sqlKeyword",
					children: "ON"
				}),
				" ",
				/* @__PURE__ */ jsx(Syn, {
					tone: "sqlAlias",
					children: "d"
				}),
				/* @__PURE__ */ jsx(Syn, {
					tone: "punctuation",
					children: "."
				}),
				/* @__PURE__ */ jsx(Syn, {
					tone: "identifier",
					children: "id"
				}),
				" ",
				/* @__PURE__ */ jsx(Syn, {
					tone: "operator",
					children: "="
				}),
				" ",
				/* @__PURE__ */ jsx(Syn, {
					tone: "sqlAlias",
					children: "l"
				}),
				/* @__PURE__ */ jsx(Syn, {
					tone: "punctuation",
					children: "."
				}),
				/* @__PURE__ */ jsx(Syn, {
					tone: "identifier",
					children: "driver_id"
				})
			]
		}),
		/* @__PURE__ */ jsxs(SqlTypingLine, {
			charCount: 23,
			startDelayMs: line4,
			children: [
				/* @__PURE__ */ jsx(Syn, {
					tone: "sqlKeyword",
					children: "WHERE"
				}),
				" ",
				/* @__PURE__ */ jsx(Syn, {
					tone: "sqlAlias",
					children: "l"
				}),
				/* @__PURE__ */ jsx(Syn, {
					tone: "punctuation",
					children: "."
				}),
				/* @__PURE__ */ jsx(Syn, {
					tone: "identifier",
					children: "session"
				}),
				" ",
				/* @__PURE__ */ jsx(Syn, {
					tone: "operator",
					children: "="
				}),
				" ",
				/* @__PURE__ */ jsx(Syn, {
					tone: "string",
					children: "'Q3'"
				})
			]
		}),
		/* @__PURE__ */ jsxs(SqlTypingLine, {
			charCount: 12,
			startDelayMs: line5,
			showCursor: true,
			children: [
				/* @__PURE__ */ jsx(Syn, {
					tone: "sqlKeyword",
					children: "LIMIT"
				}),
				" ",
				/* @__PURE__ */ jsx(Syn, {
					tone: "number",
					children: "5"
				}),
				/* @__PURE__ */ jsx(Syn, {
					tone: "punctuation",
					children: ";"
				})
			]
		})
	] });
}
function QueryEqualFilter() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Syn, {
			tone: "class",
			children: "Query"
		}),
		/* @__PURE__ */ jsx(Syn, {
			tone: "punctuation",
			children: "."
		}),
		/* @__PURE__ */ jsx(Syn, {
			tone: "function",
			children: "equal"
		}),
		/* @__PURE__ */ jsx(Syn, {
			tone: "punctuation",
			children: "("
		}),
		/* @__PURE__ */ jsx(Syn, {
			tone: "string",
			children: "\"session_id\""
		}),
		/* @__PURE__ */ jsx(Syn, {
			tone: "punctuation",
			children: ", "
		}),
		/* @__PURE__ */ jsx(Syn, {
			tone: "string",
			children: "\"Q3_MON\""
		}),
		/* @__PURE__ */ jsx(Syn, {
			tone: "punctuation",
			children: ")"
		})
	] });
}
function VectorsDbSearchSnippet() {
	return /* @__PURE__ */ jsxs("div", {
		className: "font-mono text-[9px] leading-relaxed sm:text-[10px]",
		children: [/* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsx(Syn, {
				tone: "keyword",
				children: "await"
			}),
			" ",
			/* @__PURE__ */ jsx(Syn, {
				tone: "identifier",
				children: "vectorsDB"
			}),
			/* @__PURE__ */ jsx(Syn, {
				tone: "punctuation",
				children: "."
			}),
			/* @__PURE__ */ jsx(Syn, {
				tone: "function",
				children: "createTextEmbeddings"
			}),
			/* @__PURE__ */ jsxs(Syn, {
				tone: "punctuation",
				children: ["(", "{"]
			}),
			/* @__PURE__ */ jsx(Syn, {
				tone: "property",
				children: "texts"
			}),
			/* @__PURE__ */ jsx(Syn, {
				tone: "punctuation",
				children: ": ["
			}),
			/* @__PURE__ */ jsx(Syn, {
				tone: "string",
				children: "'Monaco undercut on Medium'"
			}),
			/* @__PURE__ */ jsx(Syn, {
				tone: "punctuation",
				children: "]"
			}),
			/* @__PURE__ */ jsxs(Syn, {
				tone: "punctuation",
				children: ["}", ")"]
			})
		] }), /* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsx(Syn, {
				tone: "keyword",
				children: "await"
			}),
			" ",
			/* @__PURE__ */ jsx(Syn, {
				tone: "identifier",
				children: "vectorsDB"
			}),
			/* @__PURE__ */ jsx(Syn, {
				tone: "punctuation",
				children: "."
			}),
			/* @__PURE__ */ jsx(Syn, {
				tone: "function",
				children: "listDocuments"
			}),
			/* @__PURE__ */ jsxs(Syn, {
				tone: "punctuation",
				children: ["(", "{"]
			}),
			/* @__PURE__ */ jsx(Syn, {
				tone: "property",
				children: "databaseId"
			}),
			/* @__PURE__ */ jsx(Syn, {
				tone: "punctuation",
				children: ","
			}),
			/* @__PURE__ */ jsx(Syn, {
				tone: "property",
				children: " collectionId"
			}),
			/* @__PURE__ */ jsx(Syn, {
				tone: "punctuation",
				children: ","
			}),
			/* @__PURE__ */ jsx(Syn, {
				tone: "property",
				children: " queries"
			}),
			/* @__PURE__ */ jsxs(Syn, {
				tone: "punctuation",
				children: ["}", ")"]
			})
		] })]
	});
}
export { VectorsDbSearchSnippet as a, Syn as i, PostgresTypedSql as n, productBentoContainer as o, QueryEqualFilter as r, productBentoIdle as s, PostgresIdleSql as t };
