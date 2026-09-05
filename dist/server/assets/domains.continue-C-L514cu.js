import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
var $$splitComponentImporter = () => import("./domains.continue-C9BLInC1.js");
const domainsContinueSearchSchema = z.object({
	domain: z.string().optional(),
	stage: z.enum(["checkout"]).optional()
});
const Route = createFileRoute("/domains/continue")({
	validateSearch: domainsContinueSearchSchema,
	head: () => ({ meta: [{ title: pageTitle("Continue domain purchase", "Domains") }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { Route as t };
