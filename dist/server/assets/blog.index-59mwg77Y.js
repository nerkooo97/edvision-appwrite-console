import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import "./translate-DZcqveGn.js";
import "./constants-CL7SLzjY.js";
import "./constants-B5zUV45z.js";
import "./console-profiles-D__E5Kgi.js";
import "./date-format-BD1j7PxK.js";
import "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import "./prose-typography-BMJgwhz7.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./prose-typography-DB73MMim.js";
import "./frontmatter-9RsCswLb.js";
import "./HomeSoftLights-BsLce5-B.js";
import "./parse-params-BpMT2Ilk.js";
import "./date-utils-C_g8GS8c.js";
import "./content-BLzUgV00.js";
import "./og-image-DdV5MU0-.js";
import "./page-meta-DY0pOkK9.js";
import "./seo-BkUvL66S.js";
import "./route-meta-C9mfJlBj.js";
import { t as Route } from "./blog.index-BAUcru6d.js";
import "./MarketingSections-Dg1QJnZV.js";
import { t as View } from "./View-1rgE5gz7.js";
import "./BlogPostCard-DGPOz4oJ.js";
import { jsx } from "react/jsx-runtime";
function BlogIndexPage() {
	const pageData = Route.useLoaderData();
	const search = Route.useSearch();
	return /* @__PURE__ */ jsx(View, {
		...pageData,
		search
	});
}
export { BlogIndexPage as component };
