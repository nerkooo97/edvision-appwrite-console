import { n as getRequestSiteOrigin } from "./site-origin-DqNp3EP0.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { t as MARKETING_PAGE_ROUTE_STATIC_DATA } from "./route-static-data-C0zd0Uu7.js";
import { i as initTicketStorageFileExists, n as getInitTicketShareImageSrc, r as getInitTicketShareRouteMetaTags, t as buildInitTicketShareUrl } from "./init-ticket-share-FwW0y3EN.js";
import { createFileRoute, lazyRouteComponent, notFound, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./init._ticketId-Bx4rE3ym.js");
const Route = createFileRoute("/_marketing/init/$ticketId")({
	staticData: {
		...MARKETING_PAGE_ROUTE_STATIC_DATA,
		showFooter: false
	},
	ssr: true,
	loader: async ({ params }) => {
		if (!getActiveProfileFeatures().init) throw redirect({
			to: "/",
			replace: true
		});
		const ticketId = params.ticketId.trim();
		if (!ticketId) throw notFound();
		if (!await initTicketStorageFileExists(ticketId)) throw notFound();
		const siteOrigin = getRequestSiteOrigin();
		return {
			ticketId,
			imageSrc: getInitTicketShareImageSrc(ticketId),
			canonicalUrl: buildInitTicketShareUrl(ticketId, siteOrigin)
		};
	},
	head: ({ loaderData, params }) => {
		const ticketId = loaderData?.ticketId ?? params.ticketId;
		if (!ticketId) return {};
		const imageSrc = loaderData?.imageSrc ?? getInitTicketShareImageSrc(ticketId);
		return {
			meta: getInitTicketShareRouteMetaTags({ ticketId }),
			links: [{
				rel: "preload",
				as: "image",
				href: imageSrc
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
