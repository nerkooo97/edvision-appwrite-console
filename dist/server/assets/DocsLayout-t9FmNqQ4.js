import { t as cn } from "./utils-DoqqkI3X.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { a as DOCS_PAGE_TITLE_CLASS, d as DOCS_TOC_SECTION_TITLE_CLASS, i as DOCS_PAGE_EYEBROW_CLASS, r as DOCS_PAGE_DESCRIPTION_CLASS } from "./prose-typography-BMJgwhz7.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { t as getDocsSectionNav } from "./navigation-BOrhbgOp.js";
import { t as DOCS_CONTAINER } from "./docs-container-qv9gqb9G.js";
import { i as docsTocLinkClassName } from "./nav-styles-BnkuEWRE.js";
import { n as submitDocsFeedback } from "./feedback-BwuMSGir.js";
import { n as ArticleStickyToolbar, t as useArticleStickyOverlay } from "./use-article-sticky-overlay-BWMK17-U.js";
import { t as DocsSectionSubnavMobile } from "./DocsSectionSubnav-DjZ_YztL.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Check, ThumbsDown, ThumbsUp } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
function DocsArticleHeader({ title, description, readingTimeMinutes, parent, actions, className }) {
	const sentinelRef = useRef(null);
	const { pinned, bounds } = useArticleStickyOverlay({
		sentinelRef,
		resetKey: title
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ArticleStickyToolbar, {
		pinned,
		bounds,
		title,
		titleSuffix: /* @__PURE__ */ jsx("span", {
			className: "text-[var(--brand-cta)]",
			children: "_"
		}),
		actions
	}), /* @__PURE__ */ jsxs("header", {
		className: cn("mb-12", className),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start justify-between gap-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 max-w-3xl",
					children: [
						parent ? /* @__PURE__ */ jsx("p", {
							className: DOCS_PAGE_EYEBROW_CLASS,
							children: /* @__PURE__ */ jsx(DocsRouteLink, {
								href: parent.href,
								className: "text-muted-foreground transition-colors hover:text-foreground/85",
								children: parent.label
							})
						}) : null,
						/* @__PURE__ */ jsxs("h1", {
							className: cn(DOCS_PAGE_TITLE_CLASS, parent ? "mt-3" : void 0),
							children: [title, /* @__PURE__ */ jsx("span", {
								className: "text-[var(--brand-cta)]",
								children: "_"
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							ref: sentinelRef,
							className: "h-px w-full",
							"aria-hidden": true
						}),
						description ? /* @__PURE__ */ jsx("p", {
							className: DOCS_PAGE_DESCRIPTION_CLASS,
							children: description
						}) : null,
						readingTimeMinutes ? /* @__PURE__ */ jsxs("p", {
							className: "mt-3 text-[12px] text-muted-foreground",
							children: [readingTimeMinutes, " min read"]
						}) : null
					]
				}), actions ? /* @__PURE__ */ jsx("div", {
					className: "hidden shrink-0 items-center gap-2 @[560px]:flex",
					children: actions
				}) : null]
			}),
			actions ? /* @__PURE__ */ jsx("div", {
				className: "mt-5 flex flex-wrap items-center gap-2 @[560px]:hidden",
				children: actions
			}) : null,
			/* @__PURE__ */ jsx("div", {
				className: "mt-10 h-px w-full bg-border",
				"aria-hidden": true
			})
		]
	})] });
}
var FEEDBACK_EASE = [
	.22,
	1,
	.36,
	1
];
var MAX_COMMENT_LENGTH = 500;
function DocsFeedback() {
	const { account } = useAuth();
	const pathname = useLocation().pathname;
	const prefersReducedMotion = useReducedMotion();
	const sectionRef = useRef(null);
	const textareaRef = useRef(null);
	const [showForm, setShowForm] = useState(false);
	const [feedbackType, setFeedbackType] = useState(null);
	const [email, setEmail] = useState("");
	const [comment, setComment] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(null);
	const accountEmail = account?.email?.trim() ?? "";
	const hasAccountEmail = accountEmail.length > 0;
	const resolvedEmail = hasAccountEmail ? accountEmail : email.trim();
	const commentRequired = feedbackType === "negative";
	const canSubmit = Boolean(feedbackType) && resolvedEmail.length > 0 && comment.length <= MAX_COMMENT_LENGTH && (!commentRequired || comment.trim().length > 0);
	const resetForm = () => {
		setComment("");
		setFeedbackType(null);
		setSubmitted(false);
		setError(null);
		if (!hasAccountEmail) setEmail("");
	};
	useEffect(() => {
		if (accountEmail) setEmail(accountEmail);
	}, [accountEmail]);
	useEffect(() => {
		setShowForm(false);
		resetForm();
	}, [pathname]);
	useEffect(() => {
		if (!showForm || !feedbackType || submitted) return;
		const frame = requestAnimationFrame(() => {
			sectionRef.current?.scrollIntoView({
				behavior: prefersReducedMotion ? "auto" : "smooth",
				block: "nearest"
			});
			textareaRef.current?.focus({ preventScroll: true });
		});
		return () => cancelAnimationFrame(frame);
	}, [
		showForm,
		feedbackType,
		submitted,
		prefersReducedMotion
	]);
	const handleClose = () => {
		setShowForm(false);
		resetForm();
	};
	const handleThumbClick = (type) => {
		setFeedbackType(type);
		setShowForm(true);
		setSubmitted(false);
		setError(null);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!feedbackType || !canSubmit) return;
		setIsSubmitting(true);
		setError(null);
		try {
			if (!await submitDocsFeedback({
				type: feedbackType,
				route: pathname,
				comment: comment.trim() || (feedbackType === "positive" ? "Page was helpful" : ""),
				email: resolvedEmail,
				userId: account?.$id
			})) {
				toast.error("Feedback is not configured. Set VITE_GROWTH_ENDPOINT in .env to enable submission.");
				return;
			}
			setSubmitted(true);
		} catch {
			setError("There was an error submitting your feedback. Please try again later.");
		} finally {
			setIsSubmitting(false);
		}
	};
	const thumbButtonClass = (type) => cn("h-9 gap-1.5 px-3 text-[13px] font-medium", feedbackType === type && showForm && !submitted && "border-foreground/20 bg-muted text-foreground");
	const expandTransition = prefersReducedMotion ? { duration: 0 } : {
		duration: .28,
		ease: FEEDBACK_EASE
	};
	return /* @__PURE__ */ jsx("section", {
		ref: sectionRef,
		className: "mb-8 mt-14 scroll-mt-24 border-t border-border pt-10",
		children: /* @__PURE__ */ jsx("div", {
			className: "overflow-hidden rounded-xl border border-border bg-card/50",
			children: /* @__PURE__ */ jsx(AnimatePresence, {
				mode: "wait",
				initial: false,
				children: submitted ? /* @__PURE__ */ jsxs(motion.div, {
					initial: prefersReducedMotion ? false : {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: prefersReducedMotion ? void 0 : {
						opacity: 0,
						y: -4
					},
					transition: expandTransition,
					className: "flex flex-col items-center justify-center gap-3 px-6 py-10 text-center",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex size-12 items-center justify-center rounded-full bg-green-500/10",
						children: /* @__PURE__ */ jsx(Check, { className: "size-6 text-green-600" })
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-[14px] font-semibold text-foreground",
						children: "Thank you for your feedback"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-[13px] text-muted-foreground",
						children: "Once approved, our agents will automatically apply improvements based on your feedback."
					})] })]
				}, "success") : /* @__PURE__ */ jsxs(motion.div, {
					initial: false,
					animate: { opacity: 1 },
					exit: prefersReducedMotion ? void 0 : { opacity: 0 },
					transition: expandTransition,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-4 px-5 py-5 @[560px]:flex-row @[560px]:items-center @[560px]:justify-between @[560px]:px-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-[14px] font-semibold text-foreground",
								children: "Was this page helpful?"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-[13px] text-muted-foreground",
								children: "Share what worked or what we should fix. Once approved, our agents automatically apply suggested updates to the docs."
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex shrink-0 items-center gap-2",
							children: [/* @__PURE__ */ jsxs(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: thumbButtonClass("positive"),
								"aria-pressed": feedbackType === "positive" && showForm,
								onClick: () => handleThumbClick("positive"),
								children: [/* @__PURE__ */ jsx(ThumbsUp, { className: "size-3.5" }), "Yes"]
							}), /* @__PURE__ */ jsxs(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: thumbButtonClass("negative"),
								"aria-pressed": feedbackType === "negative" && showForm,
								onClick: () => handleThumbClick("negative"),
								children: [/* @__PURE__ */ jsx(ThumbsDown, { className: "size-3.5" }), "No"]
							})]
						})]
					}), /* @__PURE__ */ jsx(AnimatePresence, {
						initial: false,
						children: showForm && feedbackType ? /* @__PURE__ */ jsxs(motion.form, {
							onSubmit: handleSubmit,
							initial: prefersReducedMotion ? false : {
								height: 0,
								opacity: 0
							},
							animate: {
								height: "auto",
								opacity: 1
							},
							exit: prefersReducedMotion ? void 0 : {
								height: 0,
								opacity: 0
							},
							transition: expandTransition,
							className: "overflow-hidden",
							children: [
								/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-4 px-5 py-5 @[560px]:px-6",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ jsxs("label", {
													htmlFor: "docs-feedback-message",
													className: "text-[13px] font-medium text-foreground",
													children: [feedbackType === "negative" ? "What could we improve?" : "What did you find most helpful?", feedbackType === "positive" ? /* @__PURE__ */ jsxs("span", {
														className: "font-normal text-muted-foreground",
														children: [" ", "(optional)"]
													}) : null]
												}),
												/* @__PURE__ */ jsx(Textarea, {
													ref: textareaRef,
													id: "docs-feedback-message",
													placeholder: feedbackType === "negative" ? "Tell us what was missing or unclear" : "Share your thoughts",
													value: comment,
													onChange: (event) => setComment(event.target.value),
													required: commentRequired,
													maxLength: MAX_COMMENT_LENGTH,
													className: "min-h-[100px] resize-none text-[13px]"
												}),
												/* @__PURE__ */ jsxs("p", {
													className: "text-[12px] text-muted-foreground",
													children: [
														comment.length,
														"/",
														MAX_COMMENT_LENGTH,
														". Approved feedback is applied automatically by our agents."
													]
												})
											]
										}),
										!hasAccountEmail ? /* @__PURE__ */ jsxs("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ jsx("label", {
													htmlFor: "docs-feedback-email",
													className: "text-[13px] font-medium text-foreground",
													children: "Email"
												}),
												/* @__PURE__ */ jsx(Input, {
													id: "docs-feedback-email",
													type: "email",
													placeholder: "you@example.com",
													value: email,
													onChange: (event) => setEmail(event.target.value),
													required: true,
													className: "h-9 text-[13px]"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "text-[12px] text-muted-foreground",
													children: "We may follow up if we need more details."
												})
											]
										}) : null,
										error ? /* @__PURE__ */ jsx("p", {
											className: "text-[13px] text-destructive",
											children: error
										}) : null
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col-reverse gap-2 border-t border-border bg-muted/30 px-5 py-4 @[560px]:flex-row @[560px]:justify-end @[560px]:px-6",
									children: [/* @__PURE__ */ jsx(Button, {
										type: "button",
										variant: "outline",
										size: "sm",
										className: "h-9 text-[13px]",
										onClick: handleClose,
										disabled: isSubmitting,
										children: "Cancel"
									}), /* @__PURE__ */ jsx(Button, {
										type: "submit",
										size: "sm",
										className: "h-9 text-[13px]",
										disabled: isSubmitting || !canSubmit,
										children: "Submit"
									})]
								})
							]
						}, "feedback-form") : null
					})]
				}, "form-shell")
			})
		})
	});
}
function DocsToc({ items }) {
	const [activeId, setActiveId] = useState(items[0]?.id ?? "");
	useEffect(() => {
		if (items.length === 0) return;
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible[0]?.target.id) setActiveId(visible[0].target.id);
		}, {
			rootMargin: "-20% 0px -60% 0px",
			threshold: [
				0,
				.25,
				.5,
				1
			]
		});
		for (const item of items) {
			const element = document.getElementById(item.id);
			if (element) observer.observe(element);
		}
		return () => observer.disconnect();
	}, [items]);
	return /* @__PURE__ */ jsx("aside", {
		"aria-hidden": items.length === 0 ? true : void 0,
		className: cn("sticky top-12 z-10 hidden w-full min-w-0 max-w-[208px] shrink-0 self-start overflow-y-auto overscroll-y-contain pt-8 @[900px]:block", "max-h-[calc(100dvh-5rem)]"),
		children: items.length > 0 ? /* @__PURE__ */ jsxs("nav", {
			"aria-label": "Table of contents",
			children: [/* @__PURE__ */ jsx("p", {
				className: DOCS_TOC_SECTION_TITLE_CLASS,
				children: "On this page"
			}), /* @__PURE__ */ jsx("ul", {
				className: "space-y-0.5",
				children: items.map((item) => {
					const label = `${item.step ? `${item.step}. ` : ""}${item.label}`;
					return /* @__PURE__ */ jsx("li", {
						className: "min-w-0",
						children: /* @__PURE__ */ jsx("a", {
							href: `#${item.id}`,
							title: label,
							className: cn(docsTocLinkClassName(activeId === item.id), item.level > 2 && "ps-4"),
							children: label
						})
					}, item.id);
				})
			})]
		}) : null
	});
}
function DocsLayout({ slug, title, description, readingTimeMinutes, toc = [], headerActions, wideContent = false, children }) {
	const { parent, navigation: sectionNav } = getDocsSectionNav(slug);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex w-full min-w-0 flex-col overflow-visible",
		children: [sectionNav && sectionNav.length > 0 && sectionNav ? /* @__PURE__ */ jsx(DocsSectionSubnavMobile, {
			navigation: sectionNav,
			parent
		}) : null, /* @__PURE__ */ jsx("div", {
			className: "min-w-0 flex-1 overflow-visible",
			children: /* @__PURE__ */ jsx("div", {
				"data-docs-page-shell": true,
				className: cn(DOCS_CONTAINER, "mx-auto w-full max-w-7xl overflow-visible pb-8 ps-8 pe-4 pt-8 @[480px]:ps-10 @[480px]:pe-6 @[480px]:pt-10 @[900px]:ps-12"),
				children: /* @__PURE__ */ jsxs("div", {
					className: cn("grid items-start gap-8 overflow-visible", wideContent ? "grid-cols-1" : "@[900px]:grid-cols-[minmax(0,52rem)_1px_minmax(192px,208px)] @[900px]:gap-x-12 @[1080px]:gap-x-16"),
					children: [/* @__PURE__ */ jsxs("article", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsx(DocsArticleHeader, {
							title,
							description,
							readingTimeMinutes,
							parent,
							actions: headerActions
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0 overflow-x-clip",
							children: [children, !wideContent ? /* @__PURE__ */ jsx(DocsFeedback, {}) : null]
						})]
					}), !wideContent ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
						"aria-hidden": true,
						className: "hidden w-px self-stretch bg-border @[900px]:block"
					}), /* @__PURE__ */ jsx(DocsToc, { items: toc })] }) : null]
				})
			})
		})]
	});
}
export { DocsLayout as t };
