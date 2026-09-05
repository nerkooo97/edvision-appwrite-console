import { n as getRequestSiteOrigin } from "./site-origin-DqNp3EP0.js";
import { t as MARKETING_PAGE_ROUTE_STATIC_DATA } from "./route-static-data-C0zd0Uu7.js";
import { n as NOINDEX_ROBOTS_META, t as NOINDEX_ROBOTS_HEADER } from "./indexing-XiUq1KWH.js";
import { t as trackServerPageview } from "./server-analytics-C9eyNcYe.js";
import { a as getBlogPost, c as getPostCategoryLabel, d as getPrimaryPostCategorySlug, h as resolveBlogAuthors, i as getBlogMarkdownExport } from "./content-BLzUgV00.js";
import { a as getBlogFaqSchema, c as getBlogPostSchema, r as getBlogBreadcrumbSchema } from "./seo-BkUvL66S.js";
import { t as BLOG_RSS_PATH } from "./rss-D80F0Df7.js";
import { i as getBlogPostRouteMetaTags } from "./route-meta-C9mfJlBj.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./blog.post._slug-Y8VbKQcF.js");
const Route = createFileRoute("/_marketing/blog/post/$slug")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	server: { handlers: { GET: async ({ params, request, next }) => {
		const slug = params.slug;
		if (!slug.endsWith(".md")) return next();
		const postSlug = slug.slice(0, -3);
		const markdown = getBlogMarkdownExport(postSlug);
		if (!markdown) return new Response("Not found", { status: 404 });
		trackServerPageview(request);
		return new Response(markdown, { headers: {
			"Content-Type": "text/markdown; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
			...getBlogPost(postSlug)?.draft ? { "X-Robots-Tag": NOINDEX_ROBOTS_HEADER } : {}
		} });
	} } },
	loader: async ({ context, params }) => {
		if (params.slug.endsWith(".md")) throw notFound();
		const post = getBlogPost(params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData }) => {
		if (!loaderData?.post) return {};
		const seoOptions = { siteOrigin: getRequestSiteOrigin() };
		const authors = resolveBlogAuthors(loaderData.post.author);
		const scripts = [{
			type: "application/ld+json",
			children: JSON.stringify(getBlogPostSchema(loaderData.post, authors, seoOptions))
		}, {
			type: "application/ld+json",
			children: JSON.stringify(getBlogBreadcrumbSchema([
				{
					name: "Blog",
					path: "/blog"
				},
				{
					name: getPostCategoryLabel(loaderData.post),
					path: `/blog/category/${getPrimaryPostCategorySlug(loaderData.post)}`
				},
				{
					name: loaderData.post.title,
					path: loaderData.post.href
				}
			]))
		}];
		if (loaderData.post.faqs?.length) scripts.push({
			type: "application/ld+json",
			children: JSON.stringify(getBlogFaqSchema(loaderData.post.faqs))
		});
		return {
			meta: [...getBlogPostRouteMetaTags(loaderData.post, authors, seoOptions), ...loaderData.post.draft ? [NOINDEX_ROBOTS_META] : []],
			links: [{
				rel: "alternate",
				type: "application/rss+xml",
				title: "Appwrite Blog",
				href: BLOG_RSS_PATH
			}, {
				rel: "alternate",
				type: "text/markdown",
				href: `${loaderData.post.href}.md`
			}],
			scripts
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
