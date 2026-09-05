import { i as isValidAffiliateLinkId, t as buildAffiliateApiInviteUrl } from "./invite-url-B18y3cBt.js";
import { createFileRoute, lazyRouteComponent, redirect } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./i._linkId-CBs1WSn7.js");
const Route = createFileRoute("/i/$linkId")({
	ssr: false,
	beforeLoad: ({ params }) => {
		if (typeof window === "undefined") return;
		const linkId = params.linkId?.trim() ?? "";
		if (!isValidAffiliateLinkId(linkId)) throw redirect({
			to: "/sign-up",
			replace: true
		});
		window.location.replace(buildAffiliateApiInviteUrl(linkId));
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
