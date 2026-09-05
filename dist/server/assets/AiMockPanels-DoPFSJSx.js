import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as MarketingSiteLink } from "./MarketingSiteLink-Cxu9rqvv.js";
import { t as AiTileSoftLight } from "./HomeSoftLights-BsLce5-B.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Plus } from "lucide-react";
const AI_SKILL_TAGS = [
	"createDocument",
	"uploadFile",
	"getUser",
	"listFiles",
	"deleteSession",
	"getAccount",
	"listTeams"
];
function AiFeatureCard({ title, description, cta, shade, titleBadge, className, children }) {
	return /* @__PURE__ */ jsxs("article", {
		className: cn("relative flex min-h-[22rem] flex-col overflow-hidden", className),
		children: [shade ? /* @__PURE__ */ jsx(AiTileSoftLight, { tone: shade }) : null, /* @__PURE__ */ jsxs("div", {
			className: "relative flex flex-1 flex-col p-5 sm:p-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "font-aeonik-pro text-[16px] font-normal text-foreground",
							children: title
						}), titleBadge ? /* @__PURE__ */ jsx(Badge, {
							variant: titleBadge.variant,
							className: "text-[10px]",
							children: titleBadge.label
						}) : null]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] leading-5 text-muted-foreground",
						children: description
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-4 flex flex-1 flex-col",
					children
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-4",
					children: cta
				})
			]
		})]
	});
}
function AiMockTypingInput({ placeholder, typedText, typeDelayMs = 150, leadingIcon }) {
	const t = useT();
	const translatedTypedText = t(typedText);
	const cursorDelay = typeDelayMs + translatedTypedText.length * 55;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-2 rounded-md border border-border bg-background/80 px-3 py-2 text-[10px] sm:text-[11px]",
		children: [leadingIcon, /* @__PURE__ */ jsxs("div", {
			className: "relative min-w-0 flex-1",
			children: [/* @__PURE__ */ jsx("span", {
				className: "text-muted-foreground transition-opacity duration-200 group-hover/visual:opacity-0 motion-reduce:group-hover/visual:opacity-100",
				children: t(placeholder)
			}), /* @__PURE__ */ jsx("span", {
				className: "absolute inset-0 flex items-center opacity-0 group-hover/visual:opacity-100 motion-reduce:opacity-100",
				children: /* @__PURE__ */ jsxs("span", {
					className: "inline-flex max-w-full items-center overflow-hidden whitespace-nowrap text-muted-foreground",
					children: [/* @__PURE__ */ jsx("span", {
						className: "inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover/visual:animate-[ai-mock-type-reveal_1.7s_steps(24,end)_forwards] motion-reduce:max-w-none motion-reduce:group-hover/visual:animate-none",
						style: { animationDelay: `${typeDelayMs}ms` },
						children: translatedTypedText
					}), /* @__PURE__ */ jsx("span", {
						className: "ms-px inline-block h-3 w-px shrink-0 bg-muted-foreground opacity-0 group-hover/visual:animate-[ai-mock-cursor-blink_1s_step-end_infinite] motion-reduce:opacity-100 motion-reduce:group-hover/visual:animate-none",
						style: { animationDelay: `${cursorDelay}ms` }
					})]
				})
			})]
		})]
	});
}
function AiMcpMockVisual() {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "group/visual relative min-h-[14rem] flex-1 overflow-hidden rounded-lg border border-border bg-muted/25",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-y-0 start-0 w-[38%] border-e border-border/80 bg-background/40 p-3",
			children: /* @__PURE__ */ jsx("div", {
				className: "space-y-2",
				children: Array.from({ length: 5 }).map((_, index) => /* @__PURE__ */ jsx("div", {
					className: "h-2 rounded-full bg-muted-foreground/15 group-hover/visual:animate-[ai-mock-sidebar-pulse_1.4s_ease-in-out_infinite] motion-reduce:group-hover/visual:animate-none",
					style: {
						width: `${68 - index * 8}%`,
						animationDelay: `${index * 120}ms`
					}
				}, index))
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "absolute inset-y-0 end-0 flex w-[62%] flex-col justify-end p-3 sm:p-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-auto space-y-2 pt-1",
				children: [/* @__PURE__ */ jsx("div", {
					className: "ms-auto max-w-[92%] rounded-lg border border-border bg-background/90 px-2.5 py-2 text-[10px] leading-snug text-muted-foreground opacity-90 group-hover/visual:animate-[ai-mock-fade-in_0.45s_ease-out] motion-reduce:group-hover/visual:animate-none sm:text-[11px]",
					style: { animationDelay: "80ms" },
					children: t("Create a collection for user profiles")
				}), /* @__PURE__ */ jsxs("div", {
					className: "max-w-[92%] rounded-lg border border-border bg-background/90 px-2.5 py-2 text-[10px] leading-snug text-muted-foreground group-hover/visual:animate-[ai-mock-fade-in_0.55s_ease-out] motion-reduce:group-hover/visual:animate-none sm:text-[11px]",
					style: { animationDelay: "380ms" },
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center gap-1.5 group-hover/visual:hidden motion-reduce:hidden",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "size-1 rounded-full bg-muted-foreground/40 animate-[ai-mock-thinking-dots_1s_ease-in-out_infinite]",
									style: { animationDelay: "0ms" }
								}),
								/* @__PURE__ */ jsx("span", {
									className: "size-1 rounded-full bg-muted-foreground/40 animate-[ai-mock-thinking-dots_1s_ease-in-out_infinite]",
									style: { animationDelay: "150ms" }
								}),
								/* @__PURE__ */ jsx("span", {
									className: "size-1 rounded-full bg-muted-foreground/40 animate-[ai-mock-thinking-dots_1s_ease-in-out_infinite]",
									style: { animationDelay: "300ms" }
								})
							]
						}),
						/* @__PURE__ */ jsx("span", {
							className: "hidden group-hover/visual:inline motion-reduce:inline",
							children: t("Setting up collection with email and name attributes.")
						}),
						/* @__PURE__ */ jsx("span", {
							className: "group-hover/visual:hidden motion-reduce:hidden",
							children: t("Thinking...")
						})
					]
				})]
			}), /* @__PURE__ */ jsx(AiMockTypingInput, {
				placeholder: "Ask anything...",
				typedText: "Add avatar field to profiles",
				typeDelayMs: 220
			})]
		})]
	});
}
function AiSkillsMockVisual() {
	return /* @__PURE__ */ jsxs("div", {
		className: "group/visual relative min-h-[14rem] flex-1 overflow-hidden rounded-lg border border-border bg-muted/25 p-4 sm:p-5",
		children: [/* @__PURE__ */ jsx(AiMockTypingInput, {
			placeholder: "Ask anything...",
			typedText: "List files in my bucket",
			typeDelayMs: 120,
			leadingIcon: /* @__PURE__ */ jsx(Plus, {
				className: "size-3.5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover/visual:rotate-90 motion-reduce:group-hover/visual:rotate-0",
				"aria-hidden": true
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-4 flex flex-wrap gap-2",
			children: AI_SKILL_TAGS.map((tag, index) => /* @__PURE__ */ jsx("span", {
				className: "rounded-md border border-border bg-background/80 px-2 py-1 font-mono text-[10px] text-muted-foreground group-hover/visual:animate-[ai-mock-tag-press_0.4s_ease-out_both] motion-reduce:group-hover/visual:animate-none sm:text-[11px]",
				style: { animationDelay: `${280 + index * 110}ms` },
				children: tag
			}, tag))
		})]
	});
}
function AiPromptsMockVisual() {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "group/visual relative min-h-[14rem] flex-1 overflow-hidden rounded-lg border border-border bg-muted/25 p-4 sm:p-5",
		children: [/* @__PURE__ */ jsx("div", {
			className: "space-y-2",
			children: [
				"Scaffold auth for React",
				"Add file upload to my app",
				"Create a teams table"
			].map((prompt, index) => /* @__PURE__ */ jsx("div", {
				className: "rounded-md border border-border bg-background/80 px-3 py-2 text-[10px] text-muted-foreground opacity-70 transition-opacity group-hover/visual:opacity-100 group-hover/visual:animate-[ai-mock-fade-in_0.45s_ease-out] motion-reduce:group-hover/visual:animate-none motion-reduce:opacity-100 sm:text-[11px]",
				style: { animationDelay: `${120 + index * 160}ms` },
				children: t(prompt)
			}, prompt))
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-4",
			children: /* @__PURE__ */ jsx(AiMockTypingInput, {
				placeholder: "Describe a feature...",
				typedText: "Build messaging with email and push",
				typeDelayMs: 180
			})
		})]
	});
}
function AiFeatureCtaButton({ href, label }) {
	return /* @__PURE__ */ jsx(Button, {
		variant: "outline",
		className: "h-9 text-[13px]",
		asChild: true,
		children: /* @__PURE__ */ jsx(MarketingSiteLink, {
			href,
			children: label
		})
	});
}
export { AiSkillsMockVisual as a, AiPromptsMockVisual as i, AiFeatureCtaButton as n, AiMcpMockVisual as r, AiFeatureCard as t };
