import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
var $$splitComponentImporter = () => import("./oauth2.device-DBccDvd7.js");
var searchSchema = (search) => ({ user_code: typeof search.user_code === "string" ? search.user_code : void 0 });
const Route = createFileRoute("/_auth/oauth2/device")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	validateSearch: searchSchema,
	head: () => ({ meta: [{ title: pageTitle("Connect a device") }] })
});
export { Route as t };
