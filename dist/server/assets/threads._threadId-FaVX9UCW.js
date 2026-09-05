import { t as cn } from "./utils-DoqqkI3X.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import "./translate-DZcqveGn.js";
import "./constants-CL7SLzjY.js";
import "./constants-B5zUV45z.js";
import "./social-stats-X1CQqP0k.js";
import "./date-format-BD1j7PxK.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./popover-BjTNxuf9.js";
import "./select-BYGLGp-f.js";
import "./CodeBlock-BGAzMP_K.js";
import "./WizardLayout-DWqXFGuX.js";
import { n as resolveFenceCodeLanguage } from "./code-language-RiwE0Xft.js";
import { f as THREAD_PROSE_DETAIL_CLASSES, n as DOCS_BODY_TEXT_CLASS, p as THREAD_PROSE_WRAPPER_CLASS } from "./prose-typography-BMJgwhz7.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as ConnectCodeExample } from "./ConnectCodeExample-Ujo3XkoF.js";
import "./HomeSoftLights-BsLce5-B.js";
import "./parse-params-BpMT2Ilk.js";
import "./og-image-DdV5MU0-.js";
import { S as prepareThreadMessageForMarkdown, b as sanitizeThreadContent, l as cleanThreadRoleLabel, p as getDiscordThreadUrl, v as isThreadResolved, x as isDiscordEmojiImageUrl } from "./route-meta-C-NVlcqg.js";
import { t as Route$1 } from "./threads._threadId-DCxPALVw.js";
import "./MarketingSections-Dg1QJnZV.js";
import { t as ProductFeaturePublicIcon } from "./ProductFeaturePublicIcon-lK5-PGUY.js";
import { t as ThreadsPreFooter } from "./ThreadsPreFooter-VaWJ0p_4.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { ArrowLeft, ArrowUp, CalendarDays, Check, ExternalLink, FileText, Heart, MessageSquare, Users } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
function isExternalLink(href) {
	if (!href) return false;
	if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) return false;
	if (href.startsWith("/")) return false;
	return /^https?:\/\//i.test(href) || href.startsWith("//");
}
function sanitizeUserMessageHref(href) {
	const trimmed = href?.trim();
	if (!trimmed) return void 0;
	if (trimmed.startsWith("/") || trimmed.startsWith("#") || /^https?:\/\//i.test(trimmed) || /^mailto:/i.test(trimmed)) return trimmed;
}
function ThreadMarkdownLink({ href, children, ...props }) {
	const safeHref = sanitizeUserMessageHref(href);
	if (!safeHref) return /* @__PURE__ */ jsx("span", { children });
	const authorMatch = safeHref.match(/^\/threads\/authors\/([^/?#]+)$/);
	if (authorMatch) return /* @__PURE__ */ jsx(Link, {
		to: "/threads/authors/$authorId",
		params: { authorId: authorMatch[1] },
		...props,
		children
	});
	const threadMatch = safeHref.match(/^\/threads\/([^/?#]+)$/);
	if (threadMatch) return /* @__PURE__ */ jsx(Link, {
		to: "/threads/$threadId",
		params: { threadId: threadMatch[1] },
		...props,
		children
	});
	const external = isExternalLink(safeHref);
	return /* @__PURE__ */ jsx("a", {
		href: safeHref,
		...props,
		rel: "nofollow ugc noopener noreferrer",
		...external ? { target: "_blank" } : {},
		children
	});
}
function ThreadMarkdown({ content, className, mentionLookup }) {
	const preparedContent = useMemo(() => prepareThreadMessageForMarkdown(content, mentionLookup), [content, mentionLookup]);
	return /* @__PURE__ */ jsx("div", {
		className: cn(THREAD_PROSE_WRAPPER_CLASS, ...THREAD_PROSE_DETAIL_CLASSES, className),
		children: /* @__PURE__ */ jsx(ReactMarkdown, {
			remarkPlugins: [remarkGfm, remarkBreaks],
			skipHtml: true,
			components: {
				a: ThreadMarkdownLink,
				img({ src, alt }) {
					if (isDiscordEmojiImageUrl(src)) return /* @__PURE__ */ jsx("img", {
						src,
						alt: alt ?? "",
						className: "inline-block h-5 w-5 align-text-bottom",
						loading: "lazy",
						decoding: "async"
					});
					return alt ? /* @__PURE__ */ jsxs("span", {
						className: "text-muted-foreground",
						children: [
							"[Image: ",
							alt,
							"]"
						]
					}) : null;
				},
				pre({ children }) {
					return /* @__PURE__ */ jsx(Fragment, { children });
				},
				code({ className: codeClassName, children, ...props }) {
					if (!codeClassName) return /* @__PURE__ */ jsx("code", {
						...props,
						children
					});
					return /* @__PURE__ */ jsx("div", {
						className: "not-prose my-4 w-full",
						children: /* @__PURE__ */ jsx(ConnectCodeExample, {
							code: String(children ?? "").replace(/\n$/, ""),
							language: resolveFenceCodeLanguage(codeClassName.match(/language-([a-zA-Z0-9_-]+)/)?.[1])
						})
					});
				}
			},
			children: preparedContent
		})
	});
}
function MessageCard({ message, isOriginalPost = false, mentionLookup, children }) {
	const role = cleanThreadRoleLabel(message.role);
	return /* @__PURE__ */ jsxs("article", {
		id: message.$id ? `message-${message.$id}` : void 0,
		className: "overflow-hidden rounded-xl border border-border bg-card/70 shadow-sm shadow-black/5",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-start justify-between gap-4 border-b border-border bg-muted/20 px-5 py-4",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex min-w-0 items-center gap-3",
				children: /* @__PURE__ */ jsxs("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex min-w-0 flex-wrap items-center gap-2",
						children: [message.author_id ? /* @__PURE__ */ jsx(Link, {
							to: "/threads/authors/$authorId",
							params: { authorId: message.author_id },
							className: "truncate text-[13px] font-medium text-foreground hover:underline",
							children: message.author
						}) : /* @__PURE__ */ jsx("span", {
							className: "truncate text-[13px] font-medium text-foreground",
							children: message.author
						}), isOriginalPost ? /* @__PURE__ */ jsx(Badge, {
							variant: "info",
							className: "text-[10px]",
							children: "Original post"
						}) : null]
					}), role ? /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-[12px] text-muted-foreground",
						children: role
					}) : null]
				})
			}), /* @__PURE__ */ jsx(DateTooltip, {
				date: message.timestamp,
				showFormattedDate: true,
				className: "shrink-0 text-[12px] text-muted-foreground"
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "px-5 py-5",
			children: [
				/* @__PURE__ */ jsx(ThreadMarkdown, {
					content: message.message,
					mentionLookup
				}),
				message.reaction_count ? /* @__PURE__ */ jsxs("div", {
					className: "mt-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/30 px-2.5 py-1 text-[12px] text-muted-foreground",
					children: [/* @__PURE__ */ jsx(Heart, {
						className: "h-3.5 w-3.5",
						"aria-hidden": true
					}), message.reaction_count]
				}) : null,
				children
			]
		})]
	});
}
function SolidLinkIcon({ className }) {
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-4 shrink-0", className),
		fill: "currentColor",
		"aria-hidden": true,
		children: [/* @__PURE__ */ jsx("path", { d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c-.39.39-1.03.39-1.42 0-.39-.39-.39-1.03 0-1.42l1.49-1.49a3 3 0 1 0-4.24-4.24l-3.54 3.54a3 3 0 0 0 0 4.24z" }), /* @__PURE__ */ jsx("path", { d: "M13.41 10.59c-.41-.39-.41-1.03 0-1.42.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c.39-.39 1.03-.39 1.42 0 .39.39.39 1.03 0 1.42l-1.49 1.49a3 3 0 0 0 0 4.24 3 3 0 0 0 4.24 0l3.54-3.54a3 3 0 0 0 0-4.24z" })]
	});
}
function normalizePath(path) {
	return path.startsWith("/") ? path : `/${path}`;
}
function ThreadShareActions({ path, title, buttonClassName = "size-9 p-0", className }) {
	const [linkCopied, setLinkCopied] = useState(false);
	const [shareUrl, setShareUrl] = useState(normalizePath(path));
	useEffect(() => {
		setShareUrl(`${window.location.origin}${normalizePath(path)}`);
	}, [path]);
	const twitterShareHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;
	const linkedInShareHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
	const iconButtonClass = cn("shrink-0 text-muted-foreground", buttonClassName);
	const handleCopyLink = async () => {
		try {
			await navigator.clipboard.writeText(shareUrl);
			setLinkCopied(true);
			toast.success("Link copied");
			setTimeout(() => setLinkCopied(false), 2e3);
		} catch {
			toast.error("Could not copy link");
		}
	};
	return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs("div", {
		className: cn("flex items-center gap-1", className),
		children: [
			/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					className: iconButtonClass,
					onClick: () => void handleCopyLink(),
					"aria-label": "Copy link",
					children: linkCopied ? /* @__PURE__ */ jsx(Check, {
						className: "size-4 fill-current text-green-600",
						strokeWidth: 3
					}) : /* @__PURE__ */ jsx(SolidLinkIcon, {})
				})
			}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: linkCopied ? "Link copied" : "Copy link" }) })] }),
			/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "sm",
					className: iconButtonClass,
					asChild: true,
					"aria-label": "Share on X",
					children: /* @__PURE__ */ jsx("a", {
						href: twitterShareHref,
						target: "_blank",
						rel: "noopener noreferrer",
						children: /* @__PURE__ */ jsx(ProductFeaturePublicIcon, {
							src: "/icons/x.svg",
							tone: "muted-foreground"
						})
					})
				})
			}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: "Share on X" }) })] }),
			/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "sm",
					className: iconButtonClass,
					asChild: true,
					"aria-label": "Share on LinkedIn",
					children: /* @__PURE__ */ jsx("a", {
						href: linkedInShareHref,
						target: "_blank",
						rel: "noopener noreferrer",
						children: /* @__PURE__ */ jsx(ProductFeaturePublicIcon, {
							src: "/icons/linkedin.svg",
							tone: "muted-foreground"
						})
					})
				})
			}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: "Share on LinkedIn" }) })] })
		]
	}) });
}
function ThreadSummary({ summary }) {
	return /* @__PURE__ */ jsxs(Alert, {
		variant: "default",
		className: "not-prose mt-6 gap-y-2 border-border bg-muted/30 [&>svg]:text-muted-foreground",
		children: [
			/* @__PURE__ */ jsx(FileText, {
				className: "h-4 w-4",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsx(AlertTitle, {
				className: "text-[15px] font-medium leading-[1.45] text-foreground @[640px]:text-[16px]",
				children: "Summary"
			}),
			/* @__PURE__ */ jsx(AlertDescription, {
				className: cn(DOCS_BODY_TEXT_CLASS, "whitespace-pre-line"),
				children: summary
			})
		]
	});
}
function ThreadDetailView({ thread, messages, related, mentionLookup }) {
	const resolved = isThreadResolved(thread);
	const discordLink = getDiscordThreadUrl(thread.discord_id);
	const replyCount = Math.max(0, messages.length - 1);
	const threadPath = `/threads/${thread.discord_id}`;
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-x-hidden bg-background",
		children: [/* @__PURE__ */ jsx("section", {
			className: "border-b border-border bg-[radial-gradient(circle_at_top_right,hsl(var(--muted))_0,transparent_34rem)] py-10 sm:py-14",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6",
				children: [
					/* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						className: "-ms-2 mb-6 h-8 px-2",
						asChild: true,
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/threads",
							children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "me-1.5 h-4 w-4" }), "Back"]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-8 py-4 sm:py-8",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "mb-5 flex flex-wrap items-center gap-2",
										children: [resolved ? /* @__PURE__ */ jsxs(Badge, {
											variant: "success",
											className: "gap-1 text-[10px]",
											children: [/* @__PURE__ */ jsx(Check, { className: "h-3 w-3" }), "Resolved"]
										}) : null, (thread.tags ?? []).map((tag) => /* @__PURE__ */ jsx(Badge, {
											variant: "info",
											className: "text-[10px]",
											children: tag
										}, tag))]
									}),
									/* @__PURE__ */ jsx("h1", {
										className: "max-w-5xl text-balance font-aeonik-pro text-[34px] font-normal leading-tight tracking-tight text-foreground sm:text-[48px]",
										children: thread.title
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted-foreground",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx(CalendarDays, {
												className: "h-4 w-4",
												"aria-hidden": true
											}), /* @__PURE__ */ jsx(DateTooltip, {
												date: thread.$createdAt,
												showFormattedDate: true
											})]
										}), thread.last_activity ? /* @__PURE__ */ jsxs("span", { children: ["Last activity ", /* @__PURE__ */ jsx(DateTooltip, { date: thread.last_activity })] }) : null]
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex shrink-0 flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ jsx(ThreadShareActions, {
									path: threadPath,
									title: thread.title
								}), /* @__PURE__ */ jsx(Button, {
									variant: "brandCta",
									className: "shrink-0",
									asChild: true,
									children: /* @__PURE__ */ jsxs("a", {
										href: discordLink,
										target: "_blank",
										rel: "noopener noreferrer",
										children: ["View on Discord", /* @__PURE__ */ jsx(ExternalLink, { className: "ms-1.5 h-4 w-4" })]
									})
								})]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-xl border border-border bg-card/55 px-4 py-4 shadow-sm shadow-black/5",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground",
										children: "Votes"
									}), /* @__PURE__ */ jsxs("p", {
										className: "mt-1 inline-flex items-center gap-1.5 font-aeonik-pro text-[22px] font-normal text-foreground",
										children: [/* @__PURE__ */ jsx(ArrowUp, { className: "h-4 w-4 text-muted-foreground" }), thread.vote_count]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-xl border border-border bg-card/55 px-4 py-4 shadow-sm shadow-black/5",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground",
										children: "Replies"
									}), /* @__PURE__ */ jsxs("p", {
										className: "mt-1 inline-flex items-center gap-1.5 font-aeonik-pro text-[22px] font-normal text-foreground",
										children: [/* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4 text-muted-foreground" }), replyCount]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-xl border border-border bg-card/55 px-4 py-4 shadow-sm shadow-black/5",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground",
										children: "Participants"
									}), /* @__PURE__ */ jsxs("p", {
										className: "mt-1 inline-flex items-center gap-1.5 font-aeonik-pro text-[22px] font-normal text-foreground",
										children: [/* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-muted-foreground" }), thread.participant_count ?? "Unknown"]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-xl border border-border bg-card/55 px-4 py-4 shadow-sm shadow-black/5",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground",
										children: "Messages"
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-1 font-aeonik-pro text-[22px] font-normal text-foreground",
										children: messages.length
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-6 grid gap-8 border-t border-border pt-8 lg:grid-cols-[minmax(0,2fr)_minmax(280px,360px)] lg:gap-10",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "min-w-0 space-y-5",
							children: [messages.map((message, index) => /* @__PURE__ */ jsx(MessageCard, {
								message,
								isOriginalPost: index === 0,
								mentionLookup,
								children: index === 0 && thread.tldr?.trim() ? /* @__PURE__ */ jsx(ThreadSummary, { summary: thread.tldr.trim() }) : null
							}, message.$id ?? `${message.timestamp}-${index}`)), /* @__PURE__ */ jsxs("div", {
								className: "rounded-xl border border-border bg-card/70 p-5 shadow-sm shadow-black/5",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "text-[15px] font-medium text-foreground",
										children: "Join the discussion"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-[13px] text-muted-foreground",
										children: "Reply to this thread by joining our Discord."
									}),
									/* @__PURE__ */ jsx(Button, {
										className: "mt-4",
										variant: "brandCta",
										asChild: true,
										children: /* @__PURE__ */ jsxs("a", {
											href: discordLink,
											target: "_blank",
											rel: "noopener noreferrer",
											children: ["Reply on Discord", /* @__PURE__ */ jsx(ExternalLink, { className: "ms-1.5 h-4 w-4" })]
										})
									})
								]
							})]
						}), /* @__PURE__ */ jsxs("aside", {
							className: "min-w-0 space-y-4 lg:sticky lg:top-24 lg:self-start",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "rounded-xl border border-border bg-card/70 p-5 shadow-sm shadow-black/5",
								children: [
									/* @__PURE__ */ jsx("h2", {
										className: "text-[13px] font-medium text-foreground",
										children: "Discussion summary"
									}),
									/* @__PURE__ */ jsxs("dl", {
										className: "mt-4 space-y-3 text-[13px]",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center justify-between gap-4",
												children: [/* @__PURE__ */ jsx("dt", {
													className: "text-muted-foreground",
													children: "Status"
												}), /* @__PURE__ */ jsx("dd", {
													className: "text-foreground",
													children: resolved ? "Resolved" : "Open"
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center justify-between gap-4",
												children: [/* @__PURE__ */ jsx("dt", {
													className: "text-muted-foreground",
													children: "Replies"
												}), /* @__PURE__ */ jsx("dd", {
													className: "text-foreground",
													children: replyCount
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center justify-between gap-4",
												children: [/* @__PURE__ */ jsx("dt", {
													className: "text-muted-foreground",
													children: "Votes"
												}), /* @__PURE__ */ jsx("dd", {
													className: "text-foreground",
													children: thread.vote_count
												})]
											}),
											thread.last_activity ? /* @__PURE__ */ jsxs("div", {
												className: "flex items-center justify-between gap-4",
												children: [/* @__PURE__ */ jsx("dt", {
													className: "text-muted-foreground",
													children: "Synced"
												}), /* @__PURE__ */ jsx("dd", {
													className: "text-foreground",
													children: /* @__PURE__ */ jsx(DateTooltip, { date: thread.last_activity })
												})]
											}) : null
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-5 border-t border-border pt-4",
										children: [/* @__PURE__ */ jsx("p", {
											className: "mb-3 text-[12px] text-muted-foreground",
											children: "Share"
										}), /* @__PURE__ */ jsx(ThreadShareActions, {
											path: threadPath,
											title: thread.title
										})]
									})
								]
							}), related.length > 0 ? /* @__PURE__ */ jsxs("div", {
								className: "rounded-xl border border-border bg-card/70 p-5 shadow-sm shadow-black/5",
								children: [/* @__PURE__ */ jsx("h2", {
									className: "text-[13px] font-medium text-foreground",
									children: "Recommended threads"
								}), /* @__PURE__ */ jsx("ul", {
									className: "mt-4 space-y-4",
									children: related.map((item) => /* @__PURE__ */ jsx("li", {
										className: "border-b border-border pb-4 last:border-b-0 last:pb-0",
										children: /* @__PURE__ */ jsxs(Link, {
											to: "/threads/$threadId",
											params: { threadId: item.discord_id },
											className: "group block",
											children: [/* @__PURE__ */ jsx("p", {
												className: "line-clamp-2 text-[13px] font-medium leading-5 text-foreground group-hover:underline",
												children: item.title
											}), /* @__PURE__ */ jsx("p", {
												className: "mt-2 line-clamp-3 whitespace-pre-line text-[12px] leading-5 text-muted-foreground",
												children: sanitizeThreadContent(item.content, 180)
											})]
										})
									}, item.$id))
								})]
							}) : null]
						})]
					})
				]
			})
		}), /* @__PURE__ */ jsx(ThreadsPreFooter, {})]
	});
}
function ThreadsDetailPage() {
	return /* @__PURE__ */ jsx(ThreadDetailView, { ...Route$1.useLoaderData() });
}
export { ThreadsDetailPage as component };
