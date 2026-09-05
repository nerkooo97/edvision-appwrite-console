import { t as cn } from "./utils-DoqqkI3X.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { n as CollapsibleContent, r as CollapsibleTrigger, t as Collapsible } from "./collapsible-BcDIDOgI.js";
import { d as DOCS_TOC_SECTION_TITLE_CLASS, n as DOCS_BODY_TEXT_CLASS } from "./prose-typography-BMJgwhz7.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { i as AccordionItem, n as AccordionContent, o as AccordionTrigger, t as Accordion } from "./accordion-DmQmnCa5.js";
import { a as BreadcrumbPage, i as BreadcrumbList, n as BreadcrumbItem, o as BreadcrumbSeparator, r as BreadcrumbLink, t as Breadcrumb } from "./breadcrumb-DJFLXbij.js";
import { i as BLOG_CATEGORY_TITLE_CLASS, l as BLOG_STICKY_TITLE_CLASS, o as BLOG_PAGE_DESCRIPTION_CLASS, s as BLOG_PAGE_TITLE_CLASS } from "./prose-typography-DB73MMim.js";
import { n as DOCS_PROSE_LINK_CLASS } from "./prose-link-DLbkQskb.js";
import { i as docsTocLinkClassName } from "./nav-styles-BnkuEWRE.js";
import { t as formatDate } from "./date-utils-C_g8GS8c.js";
import { c as getPostCategoryLabel, d as getPrimaryPostCategorySlug, h as resolveBlogAuthors, p as getRelatedBlogPosts, t as getAllBlogAuthors } from "./content-BLzUgV00.js";
import { n as MarketingCtaSection, r as MarketingCtaSignupButtons } from "./MarketingSections-Dg1QJnZV.js";
import { i as BlogCover, r as BlogAvatar, t as BlogPostCard } from "./BlogPostCard-DGPOz4oJ.js";
import { t as ProductFeaturePublicIcon } from "./ProductFeaturePublicIcon-lK5-PGUY.js";
import { n as ArticleStickyToolbar, t as useArticleStickyOverlay } from "./use-article-sticky-overlay-BWMK17-U.js";
import { t as ChangelogMarkdown } from "./ChangelogMarkdown-BiBlRG_b.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Check, ChevronDownIcon } from "lucide-react";
function buildBlogPostPath(slug) {
	return `/blog/post/${slug}`;
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
function SolidMarkdownIcon({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-4 shrink-0", className),
		fill: "currentColor",
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("path", { d: "M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm0 2h7v5h5v11H6V4zm2 9h8v2H8v-2zm0-4h8v2H8V9z" })
	});
}
function BlogPostShareActions({ slug, title, buttonClassName = "size-9 p-0", className }) {
	const [linkCopied, setLinkCopied] = useState(false);
	const [markdownCopied, setMarkdownCopied] = useState(false);
	const [copyingMarkdown, setCopyingMarkdown] = useState(false);
	const [shareUrl, setShareUrl] = useState(buildBlogPostPath(slug));
	const markdownUrl = `${buildBlogPostPath(slug)}.md`;
	useEffect(() => {
		setShareUrl(`${window.location.origin}${buildBlogPostPath(slug)}`);
	}, [slug]);
	const twitterShareHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;
	const linkedInShareHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
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
	const handleCopyMarkdown = async () => {
		setCopyingMarkdown(true);
		try {
			const response = await fetch(markdownUrl);
			if (!response.ok) throw new Error("Failed to fetch markdown");
			const text = await response.text();
			await navigator.clipboard.writeText(text);
			setMarkdownCopied(true);
			toast.success("Copied to clipboard");
			setTimeout(() => setMarkdownCopied(false), 2e3);
		} catch {
			toast.error("Failed to copy");
		} finally {
			setCopyingMarkdown(false);
		}
	};
	const iconButtonClass = cn("shrink-0 text-muted-foreground", buttonClassName);
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
					type: "button",
					variant: "outline",
					size: "sm",
					className: iconButtonClass,
					onClick: () => void handleCopyMarkdown(),
					disabled: copyingMarkdown,
					"aria-label": "Copy markdown",
					children: markdownCopied ? /* @__PURE__ */ jsx(Check, {
						className: "size-4 fill-current text-green-600",
						strokeWidth: 3
					}) : /* @__PURE__ */ jsx(SolidMarkdownIcon, {})
				})
			}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: markdownCopied ? "Markdown copied" : "Copy markdown" }) })] }),
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
var BLOG_TITLE_SUFFIX = /* @__PURE__ */ jsx("span", {
	className: "text-[var(--brand-cta)]",
	children: "_"
});
function BlogArticleHeader({ slug, title, description, authors, date, timeToRead, lastUpdated }) {
	const contentAnchorRef = useRef(null);
	const sentinelRef = useRef(null);
	const { pinned, bounds } = useArticleStickyOverlay({
		sentinelRef,
		contentAnchorRef,
		resetKey: title
	});
	const shareActions = /* @__PURE__ */ jsx(BlogPostShareActions, {
		slug,
		title
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ArticleStickyToolbar, {
		pinned,
		bounds,
		title,
		titleSuffix: BLOG_TITLE_SUFFIX,
		titleClassName: BLOG_STICKY_TITLE_CLASS,
		actions: shareActions
	}), /* @__PURE__ */ jsx("header", {
		className: "border-b border-border py-4",
		children: /* @__PURE__ */ jsxs("div", {
			ref: contentAnchorRef,
			className: "min-w-0",
			children: [
				/* @__PURE__ */ jsxs("h1", {
					className: BLOG_PAGE_TITLE_CLASS,
					children: [title, BLOG_TITLE_SUFFIX]
				}),
				/* @__PURE__ */ jsx("div", {
					ref: sentinelRef,
					className: "h-px w-full",
					"aria-hidden": true
				}),
				/* @__PURE__ */ jsx("p", {
					className: BLOG_PAGE_DESCRIPTION_CLASS,
					children: description
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-col gap-4",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap items-center gap-4",
						children: authors.map((author) => /* @__PURE__ */ jsxs(Link, {
							to: "/blog/author/$author",
							params: { author: author.slug },
							className: "inline-flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(BlogAvatar, {
								name: author.name,
								avatar: author.avatar
							}), /* @__PURE__ */ jsxs("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[13px] font-medium text-foreground",
									children: author.name
								}), author.role ? /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground",
									children: author.role
								}) : null]
							})]
						}, author.slug))
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center justify-between gap-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx("time", {
									dateTime: date,
									children: formatDate(date)
								}),
								timeToRead > 0 ? /* @__PURE__ */ jsxs("span", { children: [timeToRead, " min read"] }) : null,
								lastUpdated !== date ? /* @__PURE__ */ jsxs("span", { children: ["Updated ", formatDate(lastUpdated)] }) : null
							]
						}), shareActions]
					})]
				})
			]
		})
	})] });
}
var BLOG_PROSE_LINK_CLASS = cn(DOCS_PROSE_LINK_CLASS, "text-inherit");
function BlogMarkdown({ content, className }) {
	return /* @__PURE__ */ jsx(ChangelogMarkdown, {
		content,
		linkClassName: BLOG_PROSE_LINK_CLASS,
		className
	});
}
function BlogFaqSection({ faqs }) {
	if (faqs.length === 0) return null;
	return /* @__PURE__ */ jsx("section", {
		className: "mt-12 border-t border-border pt-8",
		children: /* @__PURE__ */ jsxs(Collapsible, {
			defaultOpen: false,
			children: [/* @__PURE__ */ jsxs(CollapsibleTrigger, {
				className: cn("flex w-full cursor-pointer items-center justify-between gap-4 text-start transition-colors duration-150 hover:text-muted-foreground", "[&[data-state=open]>svg]:rotate-180"),
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-aeonik-pro text-[22px] font-normal text-foreground",
					children: "Frequently asked questions"
				}), /* @__PURE__ */ jsx(ChevronDownIcon, { className: "text-muted-foreground size-4 shrink-0 transition-transform duration-200" })]
			}), /* @__PURE__ */ jsx(CollapsibleContent, { children: /* @__PURE__ */ jsx("div", {
				className: "mt-6 overflow-hidden rounded-xl border border-border bg-card/50",
				children: /* @__PURE__ */ jsx(Accordion, {
					type: "single",
					collapsible: true,
					className: "w-full",
					children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(AccordionItem, {
						value: `item-${index}`,
						children: [/* @__PURE__ */ jsx(AccordionTrigger, {
							className: cn("rounded-none px-4 py-4 text-start transition-colors duration-150 hover:bg-muted/40 hover:no-underline"),
							children: /* @__PURE__ */ jsx("span", {
								className: "pe-4 text-[14px] font-medium text-foreground",
								children: faq.question
							})
						}), /* @__PURE__ */ jsx(AccordionContent, {
							className: cn(DOCS_BODY_TEXT_CLASS, "px-4 pb-4"),
							children: /* @__PURE__ */ jsx(BlogMarkdown, { content: faq.answer })
						})]
					}, faq.question))
				})
			}) })]
		})
	});
}
function BlogToc({ items }) {
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
		className: cn("sticky top-14 z-10 hidden w-full min-w-0 max-w-[208px] shrink-0 self-start overflow-y-auto overscroll-y-contain pt-6 @[900px]:block", "max-h-[calc(100dvh-5rem)]"),
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
function PostView({ post }) {
	const authors = resolveBlogAuthors(post.author);
	const allAuthors = getAllBlogAuthors();
	const relatedPosts = getRelatedBlogPosts(post.slug);
	const categorySlug = getPrimaryPostCategorySlug(post);
	const categoryLabel = getPostCategoryLabel(post);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative bg-background",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-10 sm:py-14",
				children: /* @__PURE__ */ jsxs("div", {
					className: "@container mx-auto w-full max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
						/* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, {
							asChild: true,
							children: /* @__PURE__ */ jsx(Link, {
								to: "/blog",
								className: "cursor-pointer",
								children: "Blog"
							})
						}) }),
						/* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
						/* @__PURE__ */ jsx(BreadcrumbItem, {
							className: "min-w-0",
							children: /* @__PURE__ */ jsx(BreadcrumbLink, {
								asChild: true,
								children: /* @__PURE__ */ jsx(Link, {
									to: "/blog/category/$category",
									params: { category: categorySlug },
									className: "cursor-pointer",
									children: categoryLabel
								})
							})
						})
					] }) }), /* @__PURE__ */ jsxs("div", {
						className: "mt-8 grid items-start gap-8 overflow-visible @[900px]:grid-cols-[minmax(0,56rem)_1px_minmax(192px,208px)] @[900px]:gap-x-12 @[1080px]:gap-x-16",
						children: [
							/* @__PURE__ */ jsxs("article", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ jsx(BlogArticleHeader, {
										slug: post.slug,
										title: post.title,
										description: post.description,
										authors,
										date: post.date,
										timeToRead: post.timeToRead,
										lastUpdated: post.lastUpdated
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-8",
										children: /* @__PURE__ */ jsx(BlogCover, {
											title: post.title,
											cover: post.cover
										})
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-8 min-w-0 overflow-x-hidden",
										children: /* @__PURE__ */ jsx(BlogMarkdown, { content: post.content })
									}),
									post.faqs?.length ? /* @__PURE__ */ jsx(BlogFaqSection, { faqs: post.faqs }) : null
								]
							}),
							/* @__PURE__ */ jsx("div", {
								"aria-hidden": true,
								className: "hidden w-px self-stretch bg-border @[900px]:block"
							}),
							/* @__PURE__ */ jsx(BlogToc, { items: post.toc })
						]
					})]
				})
			}),
			relatedPosts.length > 0 ? /* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-12 sm:py-16",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-aeonik-pro text-[22px] font-normal text-foreground",
						children: "Read next"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3",
						children: relatedPosts.map((relatedPost) => /* @__PURE__ */ jsx(BlogPostCard, {
							post: relatedPost,
							authors: allAuthors
						}, relatedPost.slug))
					})]
				})
			}) : null,
			/* @__PURE__ */ jsx(MarketingCtaSection, {
				title: "Ready to build?",
				children: /* @__PURE__ */ jsx(MarketingCtaSignupButtons, {})
			})
		]
	});
}
function CategoryView({ category, posts, authors }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-x-hidden bg-background",
		children: [/* @__PURE__ */ jsx("section", {
			className: "border-b border-border py-10 sm:py-14",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6",
				children: [
					/* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
						/* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, {
							asChild: true,
							children: /* @__PURE__ */ jsx(Link, {
								to: "/blog",
								className: "cursor-pointer",
								children: "Blog"
							})
						}) }),
						/* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
						/* @__PURE__ */ jsx(BreadcrumbItem, {
							className: "min-w-0",
							children: /* @__PURE__ */ jsx(BreadcrumbPage, {
								className: "truncate",
								children: category.name
							})
						})
					] }) }),
					/* @__PURE__ */ jsxs("header", {
						className: "mt-8 max-w-4xl border-b border-border py-6",
						children: [/* @__PURE__ */ jsx("h1", {
							className: BLOG_CATEGORY_TITLE_CLASS,
							children: category.name
						}), /* @__PURE__ */ jsx("p", {
							className: BLOG_PAGE_DESCRIPTION_CLASS,
							children: category.description
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3",
						children: posts.map((post) => /* @__PURE__ */ jsx(BlogPostCard, {
							post,
							authors
						}, post.slug))
					})
				]
			})
		}), /* @__PURE__ */ jsx(MarketingCtaSection, {
			title: "Ready to build?",
			children: /* @__PURE__ */ jsx(MarketingCtaSignupButtons, {})
		})]
	});
}
function AuthorView({ author, posts, authors }) {
	const authorSocialLinks = [
		{
			href: author.github,
			icon: "/icons/github.svg",
			label: "Author GitHub"
		},
		{
			href: author.twitter,
			icon: "/icons/x.svg",
			label: "Author on X"
		},
		{
			href: author.linkedin,
			icon: "/icons/linkedin.svg",
			label: "Author LinkedIn"
		}
	].filter((link) => Boolean(link.href));
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-x-hidden bg-background",
		children: [/* @__PURE__ */ jsx("section", {
			className: "border-b border-border py-10 sm:py-14",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6",
				children: [
					/* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
						/* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, {
							asChild: true,
							children: /* @__PURE__ */ jsx(Link, {
								to: "/blog",
								className: "cursor-pointer",
								children: "Blog"
							})
						}) }),
						/* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
						/* @__PURE__ */ jsx(BreadcrumbItem, {
							className: "min-w-0",
							children: /* @__PURE__ */ jsx(BreadcrumbPage, {
								className: "truncate font-aeonik-pro",
								children: author.name
							})
						})
					] }) }),
					/* @__PURE__ */ jsxs("header", {
						className: "mt-8 flex flex-col items-start gap-4 border-b border-border py-8 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ jsx(BlogAvatar, {
							name: author.name,
							avatar: author.avatar,
							className: "size-20 text-[18px]"
						}), /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("h1", {
								className: BLOG_PAGE_TITLE_CLASS,
								children: author.name
							}),
							author.role ? /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-[13px] text-muted-foreground",
								children: author.role
							}) : null,
							author.bio ? /* @__PURE__ */ jsx("p", {
								className: cn(BLOG_PAGE_DESCRIPTION_CLASS, "mt-3 font-normal"),
								children: author.bio
							}) : null,
							/* @__PURE__ */ jsx("div", {
								className: "mt-4 flex items-center gap-1",
								children: authorSocialLinks.map((link) => /* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "sm",
									className: "size-9 shrink-0 p-0 text-muted-foreground",
									asChild: true,
									children: /* @__PURE__ */ jsx("a", {
										href: link.href,
										target: "_blank",
										rel: "noopener noreferrer",
										"aria-label": link.label,
										children: /* @__PURE__ */ jsx(ProductFeaturePublicIcon, {
											src: link.icon,
											tone: "muted-foreground"
										})
									})
								}, link.label))
							})
						] })]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-10 font-aeonik-pro text-[22px] font-normal text-foreground",
						children: "Articles"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3",
						children: posts.map((post) => /* @__PURE__ */ jsx(BlogPostCard, {
							post,
							authors
						}, post.slug))
					})
				]
			})
		}), /* @__PURE__ */ jsx(MarketingCtaSection, {
			title: "Ready to build?",
			children: /* @__PURE__ */ jsx(MarketingCtaSignupButtons, {})
		})]
	});
}
export { CategoryView as n, PostView as r, AuthorView as t };
