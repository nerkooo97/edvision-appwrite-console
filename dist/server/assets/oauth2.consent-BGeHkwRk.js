import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./oauth2.consent-Dv-xs43X.js");
var searchSchema = (search) => {
	const out = {};
	for (const [key, value] of Object.entries(search)) if (typeof value === "string") out[key] = value;
	return out;
};
const Route = createFileRoute("/_auth/oauth2/consent")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	validateSearch: searchSchema,
	head: () => ({ meta: [{ title: pageTitle("Authorize application") }] })
});
export { Route as t };
