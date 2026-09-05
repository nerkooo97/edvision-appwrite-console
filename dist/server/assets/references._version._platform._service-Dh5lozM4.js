import { d as isReferenceService, f as isReferenceVersion, u as isReferencePlatform } from "./constants-Dd6QzW31.js";
import { n as isApiReferenceNotFoundError } from "./errors-Dx4R8-YI.js";
import { n as getDocsArticleSchema, r as getDocsBreadcrumbSchema, t as getDocsMetaTags } from "./route-meta-B5-isquS.js";
import { t as getApiReferenceCanonicalSlug } from "./seo-BV_qhvZh.js";
import { n as loadApiReferenceServiceFn } from "./api-reference-DWWHtdM8.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./references._version._platform._service-CQkUw3Wg.js");
var $$splitNotFoundComponentImporter = () => import("./references._version._platform._service-Bahk1Lji.js");
const Route = createFileRoute("/docs/references/$version/$platform/$service")({
	ssr: true,
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	loader: async ({ params }) => {
		const { version, platform, service } = params;
		if (!isReferenceVersion(version) || !isReferencePlatform(platform) || !isReferenceService(service)) throw notFound();
		try {
			return {
				data: await loadApiReferenceServiceFn({ data: {
					version,
					platform,
					service
				} }),
				version,
				platform,
				service
			};
		} catch (error) {
			if (isApiReferenceNotFoundError(error)) throw notFound();
			throw error;
		}
	},
	head: ({ loaderData }) => {
		if (!loaderData) return {};
		const { data, version, platform, service } = loaderData;
		const slug = `references/${version}/${platform}/${service}`;
		const canonicalSlug = getApiReferenceCanonicalSlug(slug);
		const shortDescription = data.description.split(".")[0] ? `${data.description.split(".")[0]}.` : `${data.label} API reference.`;
		const meta = {
			slug,
			title: `${data.label} API reference`,
			description: shortDescription,
			layout: "article"
		};
		const seoOptions = { canonicalSlug };
		return {
			meta: getDocsMetaTags(meta, seoOptions),
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify(getDocsBreadcrumbSchema(meta, slug, seoOptions))
			}, {
				type: "application/ld+json",
				children: JSON.stringify(getDocsArticleSchema(meta, slug, seoOptions))
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
