import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import { n as HomeSoftLights } from "./HomeSoftLights-BsLce5-B.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function MarketingHeroSection({ eyebrow, leading, title, description, align = "center", gradientTitle = false, wideFooter = false, children, footer, className }) {
	const t = useT();
	const isCenter = align === "center";
	return /* @__PURE__ */ jsxs("section", {
		className: cn("relative isolate overflow-hidden border-b border-border bg-background", className),
		children: [
			/* @__PURE__ */ jsx(HomeSoftLights, { variant: "hero" }),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 z-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-[length:18px_18px]",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsxs("div", {
				className: cn("relative z-[1] mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20", isCenter ? "text-center" : "text-start"),
				children: [
					eyebrow ? /* @__PURE__ */ jsxs("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground",
						children: [t(eyebrow), /* @__PURE__ */ jsx("span", {
							className: "text-[var(--brand-cta)]",
							children: "_"
						})]
					}) : null,
					leading ? /* @__PURE__ */ jsx("div", {
						className: cn("mb-6", eyebrow ? "mt-4" : "", isCenter && "flex justify-center"),
						children: leading
					}) : null,
					/* @__PURE__ */ jsxs("h1", {
						className: cn("font-aeonik-pro text-balance font-normal leading-none tracking-tight", eyebrow || leading ? "mt-4" : "", gradientTitle ? "text-gradient-brand sm:text-[40px] lg:text-[48px] text-[32px]" : "text-foreground sm:text-[40px] lg:text-[48px] text-[32px]", isCenter && "mx-auto max-w-4xl", !isCenter && "max-w-3xl"),
						children: [t(title), !gradientTitle ? /* @__PURE__ */ jsx("span", {
							className: "text-[var(--brand-cta)]",
							children: "_"
						}) : null]
					}),
					/* @__PURE__ */ jsx("p", {
						className: cn("mt-5 text-[14px] leading-7 text-muted-foreground sm:text-[15px] sm:leading-7", isCenter && "mx-auto max-w-2xl", !isCenter && "max-w-2xl"),
						children: t(description)
					}),
					children ? /* @__PURE__ */ jsx("div", {
						className: cn("mt-8 flex flex-wrap gap-2", isCenter ? "items-center justify-center" : "items-center"),
						children
					}) : null,
					footer ? /* @__PURE__ */ jsx("div", {
						className: cn(isCenter && "mx-auto w-full", wideFooter ? "max-w-7xl" : "max-w-4xl"),
						children: footer
					}) : null
				]
			})
		]
	});
}
function marketingSplitLayoutClassName(options) {
	return cn("grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-12", options?.align === "start" && "lg:items-start", options?.align === "center" && "lg:items-center", options?.className);
}
function MarketingSectionHeading({ title, description, align = "center", size = "lg", className }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-start", className),
		children: [/* @__PURE__ */ jsxs("h2", {
			className: cn("font-aeonik-pro text-balance font-normal leading-none tracking-tight text-foreground", size === "lg" && "text-[36px] sm:text-[44px]", size === "md" && "text-[28px] sm:text-[32px]", size === "sm" && "text-[15px] font-semibold sm:text-[16px]"),
			children: [t(title), /* @__PURE__ */ jsx("span", {
				className: "text-[var(--brand-cta)]",
				children: "_"
			})]
		}), description ? /* @__PURE__ */ jsx("p", {
			className: cn("mt-4 text-[14px] leading-6 text-muted-foreground sm:text-[15px] sm:leading-7", align === "center" && "mx-auto max-w-2xl text-balance"),
			children: t(description)
		}) : null]
	});
}
function featureGridCellBorderClass(index, itemCount, columns) {
	const isLastItem = index === itemCount - 1;
	if (columns === 2) {
		const col = index % 2;
		const row = Math.floor(index / 2);
		const totalRows = Math.ceil(itemCount / 2);
		return cn(!isLastItem && "border-b border-border sm:border-b-0", col === 0 && "sm:border-e sm:border-border", row < totalRows - 1 && "sm:border-b sm:border-border");
	}
	if (columns === 4) {
		const smCol$1 = index % 2;
		const smRow$1 = Math.floor(index / 2);
		const smTotalRows$1 = Math.ceil(itemCount / 2);
		const lgCol$1 = index % 4;
		const lgRow$1 = Math.floor(index / 4);
		const lgTotalRows$1 = Math.ceil(itemCount / 4);
		return cn(!isLastItem && "border-b border-border sm:border-b-0 lg:border-b-0", smCol$1 === 0 && "sm:border-e sm:border-border", smRow$1 < smTotalRows$1 - 1 && "sm:border-b sm:border-border", lgCol$1 < 3 && "lg:border-e lg:border-border", lgRow$1 < lgTotalRows$1 - 1 && "lg:border-b lg:border-border");
	}
	const smCol = index % 2;
	const smRow = Math.floor(index / 2);
	const smTotalRows = Math.ceil(itemCount / 2);
	const lgCol = index % 3;
	const lgRow = Math.floor(index / 3);
	const lgTotalRows = Math.ceil(itemCount / 3);
	return cn(!isLastItem && "border-b border-border sm:border-b-0 lg:border-b-0", smCol === 0 && "sm:border-e sm:border-border", smRow < smTotalRows - 1 && "sm:border-b sm:border-border", lgCol < 2 && "lg:border-e lg:border-border", lgRow < lgTotalRows - 1 && "lg:border-b lg:border-border");
}
function MarketingFeatureGrid({ items, columns = 3, className }) {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: cn("grid overflow-hidden rounded-xl border border-border bg-card/45", columns === 2 && "sm:grid-cols-2", columns === 3 && "sm:grid-cols-2 lg:grid-cols-3", columns === 4 && "sm:grid-cols-2 lg:grid-cols-4", className),
		children: items.map((item, index) => {
			const Icon = item.icon;
			return /* @__PURE__ */ jsx("article", {
				className: cn("group p-5 transition-colors hover:bg-accent/15", featureGridCellBorderClass(index, items.length, columns)),
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-3",
					children: [/* @__PURE__ */ jsx("span", {
						className: "flex size-7 items-center justify-center rounded-md border border-border bg-muted/40",
						children: /* @__PURE__ */ jsx(Icon, {
							className: "size-3.5 text-muted-foreground",
							"aria-hidden": true
						})
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[14px] font-semibold text-foreground",
						children: t(item.title)
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-[13px] leading-5 text-muted-foreground",
						children: t(item.description)
					})] })]
				})
			}, item.title);
		})
	});
}
function MarketingBentoFeatureCard({ title, items, className }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("overflow-hidden rounded-xl border border-border bg-card/45", className),
		children: [title ? /* @__PURE__ */ jsx("div", {
			className: "border-b border-border bg-muted/15 px-4 py-3 text-center",
			children: /* @__PURE__ */ jsx("h3", {
				className: "text-[13px] font-normal text-foreground",
				children: t(title)
			})
		}) : null, /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-2",
			children: items.map((item, index) => {
				const Icon = item.icon;
				return /* @__PURE__ */ jsxs("article", {
					className: cn("px-4 py-4", index % 2 === 1 && "border-s border-border", index >= 2 && "border-t border-border"),
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "flex size-7 items-center justify-center rounded-md border border-border bg-muted/40",
							children: /* @__PURE__ */ jsx(Icon, {
								className: "size-3.5 text-muted-foreground",
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ jsx("h4", {
							className: "mt-3 text-[13px] font-semibold text-foreground",
							children: t(item.title)
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-[12px] leading-5 text-muted-foreground",
							children: t(item.description)
						})
					]
				}, item.title);
			})
		})]
	});
}
function MarketingHeroStats({ items, className }) {
	const t = useT();
	const isWide = items.length >= 5;
	return /* @__PURE__ */ jsx("div", {
		className: cn("mt-10 border-t border-border/60 pt-8 sm:mt-12 sm:pt-10", className),
		children: /* @__PURE__ */ jsx("dl", {
			className: cn("grid grid-cols-2", isWide ? "sm:grid-cols-5" : "sm:grid-cols-4"),
			children: items.map((item, index) => /* @__PURE__ */ jsxs("div", {
				className: cn("flex flex-col-reverse items-center gap-1.5 py-4 text-center sm:gap-2 sm:py-5", isWide ? "px-2 sm:px-3" : "px-3 sm:px-4", index % 2 === 1 && "border-s border-border/60", index >= 2 && "border-t border-border/60 sm:border-t-0", index > 0 && "sm:border-s sm:border-border/60"),
				children: [/* @__PURE__ */ jsx("dt", {
					className: cn("text-[11px] font-medium leading-snug text-muted-foreground sm:text-[12px] sm:leading-5", isWide ? "max-w-[9.5rem] sm:max-w-none" : "max-w-[10rem]"),
					children: t(item.label)
				}), /* @__PURE__ */ jsx("dd", {
					className: cn("font-aeonik-pro font-normal tabular-nums tracking-tight text-foreground", isWide ? "text-[22px] sm:text-[26px] lg:text-[30px]" : "text-[26px] sm:text-[30px]"),
					children: item.value
				})]
			}, item.label))
		})
	});
}
function MarketingStatGrid({ items, compact = true, className }) {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: cn("grid grid-cols-2 gap-3 sm:grid-cols-4", className),
		children: items.map((item) => /* @__PURE__ */ jsxs("div", {
			className: cn(compact ? "flex h-full min-w-0 flex-col justify-center rounded-xl border border-border/80 px-2.5 py-2.5 sm:px-3 sm:py-3" : "rounded-xl border border-border bg-card/50 p-5 text-center sm:p-6"),
			children: [/* @__PURE__ */ jsx("p", {
				className: cn(compact ? "text-base font-semibold tabular-nums tracking-tight text-foreground sm:text-lg lg:text-xl" : "font-aeonik-pro text-[28px] font-normal text-foreground sm:text-[32px]"),
				children: item.value
			}), /* @__PURE__ */ jsx("p", {
				className: cn("mt-0.5 text-muted-foreground", compact ? "text-[10px] leading-snug sm:text-[11px]" : "text-[13px]"),
				children: t(item.label)
			})]
		}, item.label))
	});
}
function MarketingInvolvementCards({ title, items, className }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className,
		children: [title ? /* @__PURE__ */ jsx("h3", {
			className: "text-[15px] font-semibold text-foreground",
			children: t(title)
		}) : null, /* @__PURE__ */ jsx("div", {
			className: cn("grid gap-3", title && "mt-4", items.length === 1 && "max-w-xl grid-cols-1", items.length === 2 && "grid-cols-1 sm:grid-cols-2", items.length >= 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"),
			children: items.map((item) => {
				const Icon = item.icon;
				const inner = /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
					children: /* @__PURE__ */ jsx(Icon, {
						className: "size-5 text-muted-foreground",
						"aria-hidden": true
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[13px] font-medium text-foreground",
						children: t(item.title)
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-0.5 text-[12px] text-muted-foreground",
						children: t(item.description)
					})]
				})] });
				const cardClassName = "group flex w-full items-center gap-3 rounded-xl border border-border bg-card/50 p-4 text-start transition-colors hover:bg-accent/50";
				if (item.href) return /* @__PURE__ */ jsx("a", {
					href: item.href,
					...item.external ? {
						target: "_blank",
						rel: "noopener noreferrer"
					} : {},
					className: cn(cardClassName, "link-unstyled"),
					children: inner
				}, item.title);
				return /* @__PURE__ */ jsx("div", {
					className: cardClassName,
					children: inner
				}, item.title);
			})
		})]
	});
}
function MarketingCtaSection({ title, description, children }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("section", {
		className: "relative border-t border-border",
		children: [/* @__PURE__ */ jsx(HomeSoftLights, {
			variant: "testimonials",
			className: "opacity-50"
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-xl px-4 py-16 text-center sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ jsxs("h2", {
					className: "font-aeonik-pro text-[28px] font-normal leading-tight text-foreground sm:text-[32px]",
					children: [t(title), /* @__PURE__ */ jsx("span", {
						className: "text-[var(--brand-cta)]",
						children: "_"
					})]
				}),
				description ? /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-[14px] leading-7 text-muted-foreground",
					children: t(description)
				}) : null,
				/* @__PURE__ */ jsx("div", {
					className: "mt-6 flex flex-wrap items-center justify-center gap-2",
					children
				})
			]
		})]
	});
}
function MarketingCtaSignupButtons() {
	const t = useT();
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
		variant: "brandCta",
		size: "lg",
		className: "h-10 text-[14px]",
		asChild: true,
		children: /* @__PURE__ */ jsx(Link, {
			to: "/sign-up",
			search: { redirect: "/" },
			...analyticsAttrs("marketing-get-started"),
			children: t("Get started")
		})
	}), /* @__PURE__ */ jsx(Button, {
		variant: "outline",
		size: "lg",
		className: "h-10 text-[14px]",
		asChild: true,
		children: /* @__PURE__ */ jsx(Link, {
			to: "/pricing",
			...analyticsAttrs("marketing-view-pricing"),
			children: t("View pricing")
		})
	})] });
}
export { MarketingHeroSection as a, MarketingSectionHeading as c, MarketingFeatureGrid as i, MarketingStatGrid as l, MarketingCtaSection as n, MarketingHeroStats as o, MarketingCtaSignupButtons as r, MarketingInvolvementCards as s, MarketingBentoFeatureCard as t, marketingSplitLayoutClassName as u };
