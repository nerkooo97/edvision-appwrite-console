import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as useMediaMinWidth } from "./use-media-min-width-T-T6WgXi.js";
import { t as BlogPageAnchor } from "./BlogPageAnchor-BwvdqqDT.js";
import { n as HomeSoftLights } from "./HomeSoftLights-BsLce5-B.js";
import { n as AvatarFallback, r as AvatarImage, t as Avatar } from "./avatar-DsYcfNc5.js";
import { a as TrustedByLogo, i as pickRandomHomeCaseStudies, r as pickRandomHomeLogos, t as HOME_LOGO_GRID_COUNT } from "./customer-logos-Bzm6qZH_.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
var PANEL_RESIZE_MS = 480;
var LOGO_GRID_ROWS = 2;
var LOGO_ROTATE_MS = 6e3;
var accordionEase = "cubic-bezier(0.25, 1, 0.45, 1)";
var accordionTransition = `780ms ${accordionEase}`;
var contentRevealTransition = `opacity 720ms ${accordionEase}, transform 720ms ${accordionEase}`;
var panelFlexTransition = `flex ${accordionTransition}, flex-grow ${accordionTransition}, flex-basis ${accordionTransition}`;
var smallCardLogoClassName = "max-h-3.5 w-auto sm:max-h-4 lg:max-h-5";
var gridLogoClassName = "max-h-4 w-auto sm:max-h-5 lg:max-h-6";
var largeGridLogoClassName = "max-h-5 w-auto sm:max-h-6 lg:max-h-7";
var collapsedAccordionLogoClassName = "max-h-7 w-auto lg:max-h-8";
var largeCollapsedAccordionLogoClassName = "max-h-9 w-auto lg:max-h-10";
var LOGO_LG_SCALE = 1.2;
function isLargeLogo(logo) {
	return logo.size === "lg" || logo.logoSize === "lg";
}
function scaledLogoDimensions(width, height, large) {
	if (!large) return {
		width,
		height
	};
	return {
		width: Math.round(width * LOGO_LG_SCALE),
		height: Math.round(height * LOGO_LG_SCALE)
	};
}
function withScaledLogoDimensions(logo) {
	const { width, height } = scaledLogoDimensions(logo.width, logo.height, isLargeLogo(logo));
	return {
		...logo,
		width,
		height
	};
}
function caseStudyToSizedLogo(study) {
	return {
		src: study.logo,
		alt: study.company,
		width: study.logoWidth,
		height: study.logoHeight,
		mask: study.logoMask,
		size: study.logoSize
	};
}
function SmallCardLogo({ logo, className = smallCardLogoClassName }) {
	const sizedLogo = withScaledLogoDimensions(logo);
	return /* @__PURE__ */ jsx(TrustedByLogo, {
		src: sizedLogo.src,
		alt: sizedLogo.alt,
		width: sizedLogo.width,
		height: sizedLogo.height,
		mask: sizedLogo.mask,
		maskSrc: sizedLogo.maskSrc,
		inverseMask: sizedLogo.inverseMask,
		interactive: false,
		className
	});
}
function useLogoGridColumns() {
	const isLg = useMediaMinWidth(1024);
	const isSm = useMediaMinWidth(640);
	if (isLg) return 6;
	if (isSm) return 3;
	return 2;
}
function CustomerLogoGrid({ logos }) {
	const t = useT();
	const gridRef = useRef(null);
	const logosPerPage = useLogoGridColumns() * LOGO_GRID_ROWS;
	const totalPages = Math.max(1, Math.ceil(logos.length / logosPerPage));
	const [pageIndex, setPageIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		setPageIndex(0);
	}, [logosPerPage, logos.length]);
	useEffect(() => {
		const node = gridRef.current;
		if (!node) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (!entry) return;
			setIsVisible(entry.isIntersecting);
		}, {
			rootMargin: "120px 0px",
			threshold: 0
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	useEffect(() => {
		if (totalPages <= 1 || !isVisible) return;
		const intervalId = window.setInterval(() => {
			setPageIndex((current) => (current + 1) % totalPages);
		}, LOGO_ROTATE_MS);
		return () => window.clearInterval(intervalId);
	}, [totalPages, isVisible]);
	const visibleBatch = logos.slice(pageIndex * logosPerPage, (pageIndex + 1) * logosPerPage);
	return /* @__PURE__ */ jsx("div", {
		ref: gridRef,
		className: cn("relative z-[1] col-span-6 mt-3 grid min-h-[2.75rem] grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:mt-4 lg:min-h-[3.5rem] lg:grid-cols-subgrid lg:gap-x-8 lg:gap-y-5", !(typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) && "motion-reduce:animate-none animate-in fade-in duration-500"),
		"aria-label": t("More customers"),
		"aria-live": "polite",
		children: visibleBatch.map((logo) => /* @__PURE__ */ jsx(CustomerLogoItem, { logo }, logo.src))
	}, pageIndex);
}
function CaseStudyDottedSeparator() {
	return /* @__PURE__ */ jsx("div", {
		"aria-hidden": true,
		className: "h-px w-full bg-[repeating-linear-gradient(90deg,var(--border)_0,var(--border)_2px,transparent_2px,transparent_7px)]"
	});
}
function CaseStudyPanelContent({ study, revealed = true }) {
	const t = useT();
	const initials = study.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
	const tabId = `case-study-tab-${study.id}`;
	const panelId = `case-study-panel-${study.id}`;
	const largeLogo = isLargeLogo(study);
	const panelLogoDimensions = scaledLogoDimensions(study.logoWidth, study.logoHeight, largeLogo);
	return /* @__PURE__ */ jsxs("div", {
		id: panelId,
		role: "tabpanel",
		"aria-labelledby": tabId,
		className: "flex w-[min(100%,36rem)] min-w-[17.5rem] max-w-none flex-col gap-5 p-6 text-start lg:w-full lg:min-w-0 lg:p-10",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: cn("flex h-5 w-full items-center motion-reduce:transition-none sm:h-6 md:h-7", largeLogo ? "max-w-[min(100%,144px)]" : "max-w-[min(100%,120px)]", revealed ? "opacity-100" : "opacity-0"),
				style: { transition: `opacity 620ms ${accordionEase}` },
				children: /* @__PURE__ */ jsx(TrustedByLogo, {
					src: study.logo,
					alt: study.company,
					width: panelLogoDimensions.width,
					height: panelLogoDimensions.height,
					mask: study.logoMask,
					emphasized: true,
					className: "max-h-full w-auto object-left group-hover:scale-100"
				})
			}),
			/* @__PURE__ */ jsx("h3", {
				className: cn("font-aeonik-pro max-w-[20ch] text-pretty text-[22px] font-normal leading-[1.15] tracking-tight text-foreground motion-reduce:transition-none sm:text-[26px] lg:text-[28px]", revealed ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"),
				style: {
					transition: contentRevealTransition,
					transitionDelay: revealed ? "90ms" : "0ms"
				},
				children: t(study.headline)
			}),
			/* @__PURE__ */ jsxs("div", {
				className: cn("space-y-5 pt-1 motion-reduce:transition-none", revealed ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"),
				style: {
					transition: contentRevealTransition,
					transitionDelay: revealed ? "180ms" : "0ms"
				},
				children: [
					/* @__PURE__ */ jsx(CaseStudyDottedSeparator, {}),
					/* @__PURE__ */ jsxs("blockquote", {
						className: "max-w-2xl text-[13px] leading-6 text-foreground sm:text-[14px] sm:leading-7",
						children: [
							"“",
							t(study.blurb),
							"”"
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex min-w-0 items-center gap-2.5",
							children: [/* @__PURE__ */ jsxs(Avatar, {
								className: "size-8",
								children: [/* @__PURE__ */ jsx(AvatarImage, {
									src: study.avatar,
									alt: ""
								}), /* @__PURE__ */ jsx(AvatarFallback, {
									className: "text-[11px]",
									children: initials
								})]
							}), /* @__PURE__ */ jsxs("p", {
								className: "min-w-0 text-[13px] leading-5 text-foreground",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: study.name
								}), /* @__PURE__ */ jsxs("span", {
									className: "text-muted-foreground",
									children: [
										", ",
										t(study.title),
										" @ ",
										study.company
									]
								})]
							})]
						}), /* @__PURE__ */ jsxs(BlogPageAnchor, {
							href: study.storyUrl,
							className: "group link-neutral inline-flex shrink-0 items-center gap-1.5 text-[13px]",
							children: [t("Read customer story"), /* @__PURE__ */ jsx(ArrowRight, { className: "size-3.5 transition-transform group-hover:translate-x-0.5" })]
						})]
					})
				]
			})
		]
	});
}
function CustomerLogoItem({ logo }) {
	const large = isLargeLogo(logo);
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex w-full min-w-0 items-center justify-center", large ? "h-12 lg:h-16" : "h-11 lg:h-14"),
		children: /* @__PURE__ */ jsx(SmallCardLogo, {
			logo,
			className: large ? largeGridLogoClassName : gridLogoClassName
		})
	});
}
function CaseStudyCard({ study, isActive, onSelect }) {
	const [showPanelContent, setShowPanelContent] = useState(() => isActive);
	const tabId = `case-study-tab-${study.id}`;
	const panelId = `case-study-panel-${study.id}`;
	useEffect(() => {
		if (!isActive) {
			setShowPanelContent(false);
			return;
		}
		const timeoutId = window.setTimeout(() => {
			setShowPanelContent(true);
		}, PANEL_RESIZE_MS);
		return () => window.clearTimeout(timeoutId);
	}, [isActive]);
	const handleKeyDown = (event) => {
		if (!isActive && (event.key === "Enter" || event.key === " ")) {
			event.preventDefault();
			onSelect();
		}
	};
	return /* @__PURE__ */ jsx("div", {
		className: cn("min-w-0 w-full shrink max-lg:my-1.5 max-lg:flex-none lg:my-0 lg:min-w-0 motion-reduce:transition-none", isActive ? "lg:flex-[4_1_0%]" : "lg:flex-[1_1_0%]"),
		style: { transition: panelFlexTransition },
		children: /* @__PURE__ */ jsxs("div", {
			id: tabId,
			role: "tab",
			tabIndex: isActive ? 0 : -1,
			"aria-selected": isActive,
			"aria-controls": panelId,
			"aria-expanded": isActive,
			onClick: () => {
				if (!isActive) onSelect();
			},
			onKeyDown: handleKeyDown,
			className: cn("group relative isolate z-[1] w-full min-w-0 overflow-hidden rounded-xl border border-border bg-card", "motion-reduce:transition-none", "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50", !isActive && "cursor-pointer hover:bg-accent/30", !isActive && "h-16 lg:h-[467px] lg:max-h-[467px] lg:min-h-[467px]", isActive && "lg:h-[467px] lg:max-h-[467px] lg:min-h-[467px]", isActive && "lg:shadow-[0_0_0_3px_color-mix(in_srgb,var(--border)_50%,transparent)]"),
			style: { transition: `background-color ${accordionTransition}, box-shadow ${accordionTransition}` },
			children: [isActive ? /* @__PURE__ */ jsx("div", {
				className: cn("lg:hidden", "motion-reduce:transition-none", showPanelContent ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"),
				style: { transition: contentRevealTransition },
				children: /* @__PURE__ */ jsx(CaseStudyPanelContent, {
					study,
					revealed: showPanelContent
				})
			}) : /* @__PURE__ */ jsx("div", {
				className: "flex h-16 items-center justify-center px-4 lg:hidden",
				"aria-hidden": isActive,
				children: /* @__PURE__ */ jsx(SmallCardLogo, { logo: caseStudyToSizedLogo(study) })
			}), /* @__PURE__ */ jsxs("div", {
				className: "hidden lg:grid lg:h-full lg:min-h-0 lg:[grid-template-areas:stack]",
				children: [/* @__PURE__ */ jsx("div", {
					className: cn("flex items-center justify-center [grid-area:stack] p-8 motion-reduce:transition-none", isActive ? "pointer-events-none opacity-0" : "opacity-100"),
					style: {
						transition: `opacity 620ms ${accordionEase}`,
						transitionDelay: isActive ? "0ms" : "200ms"
					},
					"aria-hidden": isActive,
					children: /* @__PURE__ */ jsx(SmallCardLogo, {
						logo: caseStudyToSizedLogo(study),
						className: isLargeLogo(study) ? largeCollapsedAccordionLogoClassName : collapsedAccordionLogoClassName
					})
				}), /* @__PURE__ */ jsx("div", {
					className: cn("relative flex min-h-0 items-stretch justify-start overflow-hidden [grid-area:stack]", !isActive && "pointer-events-none"),
					"aria-hidden": !isActive,
					children: /* @__PURE__ */ jsx("div", {
						className: cn("motion-reduce:transition-none", showPanelContent && isActive ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"),
						style: { transition: contentRevealTransition },
						children: /* @__PURE__ */ jsx(CaseStudyPanelContent, {
							study,
							revealed: showPanelContent && isActive
						})
					})
				})]
			})]
		})
	});
}
function TestimonialsSection() {
	const t = useT();
	const [mounted, setMounted] = useState(false);
	const [visibleStudies, setVisibleStudies] = useState([]);
	const [gridLogos, setGridLogos] = useState([]);
	const [activeId, setActiveId] = useState("");
	useEffect(() => {
		const studies = pickRandomHomeCaseStudies();
		setVisibleStudies(studies);
		setActiveId(studies[0]?.id ?? "");
		setGridLogos(pickRandomHomeLogos(12));
		setMounted(true);
	}, []);
	const handleTabListKeyDown = (event) => {
		const currentIndex = visibleStudies.findIndex((study) => study.id === activeId);
		if (currentIndex < 0) return;
		let nextIndex = currentIndex;
		if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (currentIndex + 1) % visibleStudies.length;
		else if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (currentIndex - 1 + visibleStudies.length) % visibleStudies.length;
		else return;
		event.preventDefault();
		const nextStudy = visibleStudies[nextIndex];
		if (nextStudy) setActiveId(nextStudy.id);
	};
	return /* @__PURE__ */ jsxs("section", {
		className: "relative isolate overflow-hidden border-t border-border bg-background py-16 sm:py-20",
		children: [/* @__PURE__ */ jsx(HomeSoftLights, { variant: "testimonials" }), /* @__PURE__ */ jsxs("div", {
			className: "relative z-[1] mx-auto w-full max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mx-auto mb-10 max-w-3xl text-center sm:mb-12",
				children: [/* @__PURE__ */ jsxs("h2", {
					className: "font-aeonik-pro text-balance text-[36px] font-normal leading-none tracking-tight text-foreground sm:text-[44px]",
					children: [t("Loved by teams building in production"), /* @__PURE__ */ jsx("span", {
						className: "text-[var(--brand-cta)]",
						children: "_"
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "mx-auto mt-5 max-w-2xl text-balance text-[14px] leading-6 text-muted-foreground sm:text-[15px] sm:leading-7",
					children: t("From fast-moving startups to global enterprises, developers ship faster with Appwrite.")
				})]
			}), mounted ? /* @__PURE__ */ jsxs("div", {
				className: "lg:grid lg:grid-cols-6 lg:gap-4",
				children: [
					/* @__PURE__ */ jsx("div", {
						role: "tablist",
						"aria-label": t("Customer stories"),
						onKeyDown: handleTabListKeyDown,
						className: "relative z-[1] col-span-6 flex w-full touch-pan-y flex-col max-lg:gap-0 overscroll-y-auto lg:min-h-[467px] lg:flex-row lg:items-stretch lg:gap-4",
						children: visibleStudies.map((study) => /* @__PURE__ */ jsx(CaseStudyCard, {
							study,
							isActive: activeId === study.id,
							onSelect: () => setActiveId(study.id)
						}, study.id))
					}),
					gridLogos.length > 0 ? /* @__PURE__ */ jsx(CustomerLogoGrid, { logos: gridLogos }) : null,
					/* @__PURE__ */ jsx("div", {
						className: "relative z-[1] col-span-6 mt-8 text-center lg:mt-10",
						children: /* @__PURE__ */ jsxs(BlogPageAnchor, {
							href: "/blog/category/customer-stories",
							className: "link-neutral inline-flex items-center gap-1.5 text-[13px]",
							children: [t("Read our case studies"), /* @__PURE__ */ jsx(ArrowRight, { className: "size-3.5" })]
						})
					})
				]
			}) : /* @__PURE__ */ jsx("div", {
				className: "max-lg:min-h-[40rem] lg:min-h-[467px]",
				"aria-hidden": true
			})]
		})]
	});
}
export { TestimonialsSection as t };
