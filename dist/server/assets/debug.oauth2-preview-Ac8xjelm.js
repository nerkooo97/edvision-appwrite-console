import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./debug.oauth2-preview-BVBgXCWT.js");
var oauth2PreviewSearchSchema = z.object({ screen: z.enum([
	"consent",
	"consent-mcp",
	"consent-resources",
	"device-enter-code",
	"device-confirm-code",
	"device-consent",
	"outcome-approved",
	"outcome-approved-device",
	"outcome-approved-deeplink",
	"outcome-denied",
	"error",
	"loading",
	"relay-success",
	"relay-failure",
	"relay-missing",
	"relay-error"
]).optional() });
const Route = createFileRoute("/_public/debug/oauth2-preview")({
	validateSearch: oauth2PreviewSearchSchema,
	head: () => ({ meta: [{ title: pageTitle("OAuth2 preview") }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
