import { t as cn } from "./utils-DoqqkI3X.js";
import { a as BLOG_INDEX_CARD_TITLE_LINES_CLASS } from "./prose-typography-DB73MMim.js";
import { t as formatDate } from "./date-utils-C_g8GS8c.js";
import { g as BLOG_COVER_ASPECT_CLASS, h as resolveBlogAuthors } from "./content-BLzUgV00.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function BlogCoverPlaceholder({ title, className }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/40", className, BLOG_COVER_ASPECT_CLASS),
		"aria-hidden": true,
		children: /* @__PURE__ */ jsx("span", {
			className: "max-w-[80%] text-center text-[13px] font-medium text-muted-foreground",
			children: title
		})
	});
}
function BlogCover({ title, cover, className }) {
	if (!cover) return /* @__PURE__ */ jsx(BlogCoverPlaceholder, {
		title,
		className
	});
	return /* @__PURE__ */ jsx("div", {
		className: cn("relative w-full overflow-hidden rounded-xl border border-border bg-muted/40", className, BLOG_COVER_ASPECT_CLASS),
		children: /* @__PURE__ */ jsx("img", {
			src: cover,
			alt: "",
			loading: "lazy",
			decoding: "async",
			className: "size-full object-cover"
		})
	});
}
function BlogAvatarPlaceholder({ name, className }) {
	const initials = name.split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "").join("");
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-[12px] font-semibold text-muted-foreground", className),
		"aria-hidden": true,
		children: initials || "?"
	});
}
function BlogAvatar({ name, avatar, className }) {
	if (!avatar) return /* @__PURE__ */ jsx(BlogAvatarPlaceholder, {
		name,
		className
	});
	return /* @__PURE__ */ jsx("img", {
		src: avatar,
		alt: "",
		loading: "lazy",
		decoding: "async",
		className: cn("size-10 shrink-0 rounded-full border border-border bg-muted object-cover opacity-95", className)
	});
}
function BlogAuthorStack({ authors, className, avatarClassName, linked = false }) {
	if (authors.length === 0) return null;
	if (authors.length === 1) {
		const author = authors[0];
		const avatar = /* @__PURE__ */ jsx(BlogAvatar, {
			name: author.name,
			avatar: author.avatar,
			className: avatarClassName
		});
		if (linked) return /* @__PURE__ */ jsx(Link, {
			to: "/blog/author/$author",
			params: { author: author.slug },
			className,
			"aria-label": author.name,
			children: avatar
		});
		return /* @__PURE__ */ jsx("div", {
			className,
			children: avatar
		});
	}
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex -space-x-2", className),
		"aria-label": authors.map((author) => author.name).join(", "),
		children: authors.map((author) => {
			const avatar = /* @__PURE__ */ jsx(BlogAvatar, {
				name: author.name,
				avatar: author.avatar,
				className: cn("ring-2 ring-background", avatarClassName)
			});
			if (linked) return /* @__PURE__ */ jsx(Link, {
				to: "/blog/author/$author",
				params: { author: author.slug },
				className: "transition-opacity hover:opacity-80",
				"aria-label": author.name,
				children: avatar
			}, author.slug);
			return /* @__PURE__ */ jsx("span", { children: avatar }, author.slug);
		})
	});
}
function BlogPostAuthors({ authors, className }) {
	if (authors.length === 0) return null;
	const names = /* @__PURE__ */ jsx("span", {
		className: "text-[12px] text-muted-foreground hover:text-foreground",
		children: authors.map((author) => author.name).join(", ")
	});
	if (authors.length === 1) return /* @__PURE__ */ jsxs(Link, {
		to: "/blog/author/$author",
		params: { author: authors[0].slug },
		className: cn("inline-flex w-fit items-center gap-2", className),
		children: [/* @__PURE__ */ jsx(BlogAuthorStack, { authors }), names]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: cn("inline-flex w-fit items-center gap-2", className),
		children: [/* @__PURE__ */ jsx(BlogAuthorStack, {
			authors,
			linked: true
		}), names]
	});
}
function BlogPostCard({ post, authors, featured = false, showDescription = true, className }) {
	const postAuthors = resolveBlogAuthors(post.author, authors);
	return /* @__PURE__ */ jsxs("article", {
		className: cn("group flex h-full flex-col", className),
		children: [/* @__PURE__ */ jsx(Link, {
			to: "/blog/post/$slug",
			params: { slug: post.slug },
			className: "block",
			children: /* @__PURE__ */ jsx(BlogCover, {
				title: post.title,
				cover: post.cover
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-4 flex flex-1 flex-col",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/blog/post/$slug",
					params: { slug: post.slug },
					className: "block",
					children: /* @__PURE__ */ jsx("h2", {
						className: cn(BLOG_INDEX_CARD_TITLE_LINES_CLASS, "font-aeonik-pro font-normal leading-snug text-foreground transition-colors group-hover:text-foreground/80", featured ? "text-[24px]" : "text-[18px]"),
						children: post.title
					})
				}),
				/* @__PURE__ */ jsx(BlogPostAuthors, {
					authors: postAuthors,
					className: "mt-2"
				}),
				showDescription ? /* @__PURE__ */ jsx("p", {
					className: "mt-2 line-clamp-3 flex-1 text-[13px] leading-relaxed text-muted-foreground",
					children: post.description
				}) : null,
				/* @__PURE__ */ jsxs("div", {
					className: "mt-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground",
					children: [/* @__PURE__ */ jsx("time", {
						dateTime: post.date,
						children: formatDate(post.date)
					}), post.timeToRead > 0 ? /* @__PURE__ */ jsxs("span", { children: [post.timeToRead, " min read"] }) : null]
				})
			]
		})]
	});
}
export { BlogCover as i, BlogPostAuthors as n, BlogAvatar as r, BlogPostCard as t };
