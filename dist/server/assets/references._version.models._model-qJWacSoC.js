import { f as isReferenceVersion } from "./constants-Dd6QzW31.js";
import { n as isApiReferenceNotFoundError } from "./errors-Dx4R8-YI.js";
import { n as getDocsArticleSchema, r as getDocsBreadcrumbSchema, t as getDocsMetaTags } from "./route-meta-B5-isquS.js";
import { t as getApiReferenceCanonicalSlug } from "./seo-BV_qhvZh.js";
import { t as loadApiReferenceModelFn } from "./api-reference-DWWHtdM8.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./references._version.models._model-YmKejKvy.js");
var $$splitNotFoundComponentImporter = () => import("./references._version.models._model-D5wVWw97.js");
const Route = createFileRoute("/docs/references/$version/models/$model")({
	ssr: true,
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	loader: async ({ params }) => {
		const { version, model } = params;
		if (!isReferenceVersion(version)) throw notFound();
		try {
			return {
				data: await loadApiReferenceModelFn({ data: {
					version,
					model
				} }),
				version
			};
		} catch (error) {
			if (isApiReferenceNotFoundError(error)) throw notFound();
			throw error;
		}
	},
	head: ({ loaderData }) => {
		if (!loaderData) return {};
		const { data, version } = loaderData;
		const slug = `references/${version}/models/${data.id}`;
		const canonicalSlug = getApiReferenceCanonicalSlug(slug);
		const meta = {
			slug,
			title: data.title,
			description: `${data.title} model reference.`,
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
