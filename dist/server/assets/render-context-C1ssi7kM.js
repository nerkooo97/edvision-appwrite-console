import { n as getRequestSiteOrigin } from "./site-origin-DqNp3EP0.js";
import { AsyncLocalStorage } from "node:async_hooks";
var coverRenderContext = new AsyncLocalStorage();
function getCoverRenderSiteOrigin() {
	return coverRenderContext.getStore()?.siteOrigin ?? getRequestSiteOrigin();
}
function runWithCoverRenderContext(siteOrigin, fn) {
	return coverRenderContext.run({ siteOrigin }, fn);
}
export { runWithCoverRenderContext as n, getCoverRenderSiteOrigin as t };
