import { t as cn } from "./utils-DoqqkI3X.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { a as BLOG_INDEX_CARD_TITLE_LINES_CLASS, r as BLOG_CATEGORY_CARD_TITLE_CLASS } from "./prose-typography-DB73MMim.js";
import { o as SectionDottedBackground } from "./HomeSoftLights-BsLce5-B.js";
import { t as formatDate } from "./date-utils-C_g8GS8c.js";
import { h as resolveBlogAuthors, m as normalizeCategory, s as getDraftBlogPosts } from "./content-BLzUgV00.js";
import { a as MarketingHeroSection, n as MarketingCtaSection, r as MarketingCtaSignupButtons } from "./MarketingSections-Dg1QJnZV.js";
import { i as BlogCover, n as BlogPostAuthors, t as BlogPostCard } from "./BlogPostCard-DGPOz4oJ.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Search } from "lucide-react";
function buildBlogRouteSearch(options) {
	const next = {};
	const trimmedSearch = options.search?.trim();
	if (trimmedSearch) next.search = trimmedSearch;
	if (options.category && options.category !== "Latest") next.category = options.category;
	return next;
}
function BlogCategorySpotlightPostLink({ post, className }) {
	return /* @__PURE__ */ jsxs(Link, {
		to: "/blog/post/$slug",
		params: { slug: post.slug },
		className: cn("group relative block rounded-md px-3 py-2.5 pe-9 transition-colors hover:bg-muted/40", className),
		children: [
			/* @__PURE__ */ jsx("p", {
				className: cn(BLOG_INDEX_CARD_TITLE_LINES_CLASS, "text-[13px] font-medium leading-snug text-foreground transition-colors group-hover:text-foreground/80"),
				children: post.title
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "mt-1 text-[11px] text-muted-foreground",
				children: [formatDate(post.date), post.timeToRead > 0 ? ` · ${post.timeToRead} min read` : ""]
			}),
			/* @__PURE__ */ jsx(ArrowUpRight, {
				className: "absolute top-2.5 end-2.5 size-3.5 text-muted-foreground",
				"aria-hidden": true
			})
		]
	});
}
function BlogCategorySpotlightsSection({ spotlights }) {
	if (spotlights.length === 0) return null;
	return /* @__PURE__ */ jsxs("section", {
		className: "relative isolate border-b border-border py-10 sm:py-14",
		children: [/* @__PURE__ */ jsx(SectionDottedBackground, {}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-[1] mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
				children: "Explore by topic"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
				children: spotlights.map(({ category, posts }) => /* @__PURE__ */ jsxs("article", {
					className: "flex flex-col rounded-xl border border-border bg-card/45 p-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/blog/category/$category",
								params: { category: category.slug },
								className: "group inline-block min-w-0",
								children: /* @__PURE__ */ jsx("p", {
									className: cn(BLOG_CATEGORY_CARD_TITLE_CLASS, "transition-colors group-hover:text-foreground/80"),
									children: category.name
								})
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 line-clamp-2 text-[12px] leading-relaxed text-muted-foreground",
								children: category.description
							})]
						}), /* @__PURE__ */ jsxs(Link, {
							to: "/blog/category/$category",
							params: { category: category.slug },
							className: "inline-flex shrink-0 items-center gap-1 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground",
							children: ["All", /* @__PURE__ */ jsx(ArrowUpRight, {
								className: "size-3",
								"aria-hidden": true
							})]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-3 flex flex-col border-t border-border pt-1",
						children: posts.map((post) => /* @__PURE__ */ jsx(BlogCategorySpotlightPostLink, { post }, post.slug))
					})]
				}, category.slug))
			})]
		})]
	});
}
function BlogDraftsSection({ posts, authors }) {
	if (posts.length === 0) return null;
	return /* @__PURE__ */ jsx("section", {
		className: "border-b border-border py-10 sm:py-14",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
						children: "Drafts"
					}), /* @__PURE__ */ jsxs("span", {
						className: "rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground",
						children: [posts.length, " unpublished"]
					})]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-2 text-[13px] text-muted-foreground",
					children: [
						"Posts with ",
						/* @__PURE__ */ jsx("code", {
							className: "font-mono text-[12px]",
							children: "draft: true"
						}),
						" ",
						"frontmatter. Visible because the blog drafts feature flag is on."
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3",
					children: posts.map((post) => /* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [/* @__PURE__ */ jsx("span", {
							className: "absolute start-3 top-3 z-[1] rounded-full bg-background/90 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-foreground shadow-sm",
							children: "Draft"
						}), /* @__PURE__ */ jsx(BlogPostCard, {
							post,
							authors,
							showDescription: false
						})]
					}, post.slug))
				})
			]
		})
	});
}
function BlogFeaturedSection({ post, authors }) {
	const postAuthors = resolveBlogAuthors(post.author, authors);
	return /* @__PURE__ */ jsx("section", {
		className: "border-b border-border bg-muted/15 py-10 sm:py-14",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
				children: "Featured"
			}), /* @__PURE__ */ jsxs("article", {
				className: "group mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-12",
				children: [/* @__PURE__ */ jsx(Link, {
					to: "/blog/post/$slug",
					params: { slug: post.slug },
					className: "block overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-[1.02]",
					children: /* @__PURE__ */ jsx(BlogCover, {
						title: post.title,
						cover: post.cover,
						className: "rounded-none border-0"
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/blog/post/$slug",
							params: { slug: post.slug },
							className: "block",
							children: /* @__PURE__ */ jsx("h2", {
								className: cn(BLOG_INDEX_CARD_TITLE_LINES_CLASS, "font-aeonik-pro text-[24px] font-normal leading-[1.3] text-foreground transition-colors group-hover:text-foreground/80 sm:text-[28px]"),
								children: post.title
							})
						}),
						/* @__PURE__ */ jsx(BlogPostAuthors, {
							authors: postAuthors,
							className: "mt-3"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]",
							children: post.description
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground",
							children: [/* @__PURE__ */ jsx("time", {
								dateTime: post.date,
								children: formatDate(post.date)
							}), post.timeToRead > 0 ? /* @__PURE__ */ jsxs("span", { children: [post.timeToRead, " min read"] }) : null]
						})
					]
				})]
			})]
		})
	});
}
function BlogPagination({ currentPage, totalPages, navigation, search, category, className }) {
	if (totalPages <= 1) return null;
	const linkSearch = buildBlogRouteSearch({
		search,
		category
	});
	return /* @__PURE__ */ jsxs("nav", {
		"aria-label": "Blog pagination",
		className: cn("mt-12 flex items-center justify-center gap-1", className),
		children: [
			/* @__PURE__ */ jsx(Button, {
				variant: "outline",
				size: "icon",
				className: "size-9",
				disabled: currentPage <= 1,
				asChild: currentPage > 1,
				children: currentPage > 1 ? /* @__PURE__ */ jsx(Link, {
					to: currentPage === 2 ? "/blog" : "/blog/$page",
					...currentPage === 2 ? { search: linkSearch } : {
						params: { page: String(currentPage - 1) },
						search: linkSearch
					},
					"aria-label": "Previous page",
					children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
				}) : /* @__PURE__ */ jsx("span", {
					"aria-hidden": true,
					children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
				})
			}),
			navigation.map((item, index) => item === -1 ? /* @__PURE__ */ jsx("span", {
				className: "px-2 text-[13px] text-muted-foreground",
				children: "…"
			}, `ellipsis-${index}`) : /* @__PURE__ */ jsx(Button, {
				variant: item === currentPage ? "secondary" : "ghost",
				size: "sm",
				className: "h-9 min-w-9 px-3 text-[13px]",
				asChild: item !== currentPage,
				children: item === currentPage ? /* @__PURE__ */ jsx("span", { children: item }) : /* @__PURE__ */ jsx(Link, {
					to: item === 1 ? "/blog" : "/blog/$page",
					...item === 1 ? { search: linkSearch } : {
						params: { page: String(item) },
						search: linkSearch
					},
					children: item
				})
			}, item)),
			/* @__PURE__ */ jsx(Button, {
				variant: "outline",
				size: "icon",
				className: "size-9",
				disabled: currentPage >= totalPages,
				asChild: currentPage < totalPages,
				children: currentPage < totalPages ? /* @__PURE__ */ jsx(Link, {
					to: "/blog/$page",
					params: { page: String(currentPage + 1) },
					search: linkSearch,
					"aria-label": "Next page",
					children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
				}) : /* @__PURE__ */ jsx("span", {
					"aria-hidden": true,
					children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
				})
			})
		]
	});
}
function BlogSecondaryFeaturedSection({ posts, authors }) {
	if (posts.length === 0) return null;
	return /* @__PURE__ */ jsx("section", {
		className: "border-b border-border py-10 sm:py-14",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
				children: "More featured stories"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3",
				children: posts.map((post) => /* @__PURE__ */ jsx(BlogPostCard, {
					post,
					authors,
					showDescription: false
				}, post.slug))
			})]
		})
	});
}
function View({ posts, featured, secondaryFeatured, categorySpotlights, authors, categories, currentPage, totalPages, navigation, search }) {
	const navigate = useNavigate();
	const { features } = useConsoleProfile();
	const [query, setQuery] = useState(search?.search ?? "");
	const selectedCategory = search?.category ?? "Latest";
	useEffect(() => {
		setQuery(search?.search ?? "");
	}, [search?.search]);
	const handleSearch = () => {
		navigate({
			to: "/blog",
			search: () => buildBlogRouteSearch({
				search: query,
				category: selectedCategory
			}),
			replace: true
		});
	};
	const handleCategoryChange = (category) => {
		navigate({
			to: "/blog",
			search: () => buildBlogRouteSearch({
				search: query,
				category
			})
		});
	};
	const showSpotlights = currentPage === 1 && !search?.search && selectedCategory === "Latest";
	const showFeatured = showSpotlights && featured;
	const drafts = useMemo(() => features.blogDrafts ? getDraftBlogPosts() : [], [features.blogDrafts]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-x-hidden bg-background",
		children: [
			/* @__PURE__ */ jsx(MarketingHeroSection, {
				title: "Blog",
				description: "Product updates, engineering deep dives, tutorials, and customer stories from the Appwrite team.",
				align: "left"
			}),
			showFeatured ? /* @__PURE__ */ jsx(BlogFeaturedSection, {
				post: featured,
				authors
			}) : null,
			showSpotlights && secondaryFeatured.length > 0 ? /* @__PURE__ */ jsx(BlogSecondaryFeaturedSection, {
				posts: secondaryFeatured,
				authors
			}) : null,
			showSpotlights && features.blogDrafts ? /* @__PURE__ */ jsx(BlogDraftsSection, {
				posts: drafts,
				authors
			}) : null,
			showSpotlights && categorySpotlights.length > 0 ? /* @__PURE__ */ jsx(BlogCategorySpotlightsSection, { spotlights: categorySpotlights }) : null,
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border py-10 sm:py-14",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [
						showSpotlights ? /* @__PURE__ */ jsxs("div", {
							className: "border-b border-border pb-8",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "font-aeonik-pro text-[22px] font-normal text-foreground",
								children: "All articles"
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-[13px] text-muted-foreground",
								children: "Browse the full archive or filter by topic."
							})]
						}) : null,
						/* @__PURE__ */ jsxs("div", {
							className: cn(showSpotlights ? "mt-8" : void 0, "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"),
							children: [/* @__PURE__ */ jsxs("div", {
								className: "relative max-w-md flex-1",
								children: [/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
									value: query,
									onChange: (event) => setQuery(event.target.value),
									onKeyDown: (event) => {
										if (event.key === "Enter") handleSearch();
									},
									placeholder: "Search articles...",
									className: "h-10 ps-9 text-[13px]"
								})]
							}), /* @__PURE__ */ jsx(Button, {
								size: "sm",
								className: "h-10 text-[13px]",
								onClick: handleSearch,
								children: "Search"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => handleCategoryChange("Latest"),
								className: cn("rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors", selectedCategory === "Latest" ? "bg-foreground text-background" : "bg-muted/60 text-muted-foreground hover:text-foreground"),
								children: "Latest"
							}), categories.map((category) => {
								return /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => handleCategoryChange(category.slug),
									className: cn("rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors", normalizeCategory(selectedCategory) === category.slug ? "bg-foreground text-background" : "bg-muted/60 text-muted-foreground hover:text-foreground"),
									children: category.name
								}, category.slug);
							})]
						}),
						posts.length === 0 ? /* @__PURE__ */ jsxs("div", {
							className: "py-16 text-center",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-[15px] font-medium text-foreground",
									children: "No articles found"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-[13px] text-muted-foreground",
									children: "Try adjusting your search or clearing filters."
								}),
								/* @__PURE__ */ jsx(Button, {
									variant: "outline",
									size: "sm",
									className: "mt-4 h-9 text-[13px]",
									asChild: true,
									children: /* @__PURE__ */ jsx(Link, {
										to: "/blog",
										search: {},
										children: "Clear filters"
									})
								})
							]
						}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
							className: "mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3",
							children: posts.map((post) => /* @__PURE__ */ jsx(BlogPostCard, {
								post,
								authors,
								showDescription: false
							}, post.slug))
						}), /* @__PURE__ */ jsx(BlogPagination, {
							currentPage,
							totalPages,
							navigation,
							search: search?.search,
							category: selectedCategory !== "Latest" ? selectedCategory : void 0
						})] })
					]
				})
			}),
			/* @__PURE__ */ jsx(MarketingCtaSection, {
				title: "Ready to build?",
				children: /* @__PURE__ */ jsx(MarketingCtaSignupButtons, {})
			})
		]
	});
}
export { View as t };
