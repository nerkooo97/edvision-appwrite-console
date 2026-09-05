import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./debug.org-setup-preview-DkMD-TGV.js");
var orgSetupPreviewSearchSchema = z.object({
	phase: z.enum([
		"submitting",
		"confirming-payment",
		"activating",
		"complete"
	]).optional(),
	mode: z.enum(["create", "upgrade"]).optional(),
	payment: z.boolean().optional(),
	activation: z.boolean().optional()
});
const Route = createFileRoute("/_public/debug/org-setup-preview")({
	validateSearch: orgSetupPreviewSearchSchema,
	head: () => ({ meta: [{ title: pageTitle("Org setup preview") }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
