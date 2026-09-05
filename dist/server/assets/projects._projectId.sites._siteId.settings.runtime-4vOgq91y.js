import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { Ar as hasUnavailableSpecifications, Or as SpecificationType, Ot as buildSiteUpdateParams, mn as useProjectSite, xn as useSiteSpecifications, yn as useSiteFrameworks } from "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import "./table-CsPM4E9L.js";
import "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import "./LanguageIcon-C0AhXLp0.js";
import { t as RuntimeIcon } from "./RuntimeIcon-Dt6YMTy1.js";
import "./UpgradePlanLink-BCG1Z_E2.js";
import { t as SpecificationsUpgradeNote } from "./SpecificationsUpgradeNote-BowRoSsd.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import { t as SpecificationTableCard } from "./SpecificationTableCard-ecVebCBg.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
function SiteRuntimeImageCard({ projectId, siteId, site }) {
	const t = useT();
	const queryClient = useQueryClient();
	const { data: frameworksData } = useSiteFrameworks(projectId);
	const frameworks = useMemo(() => frameworksData?.frameworks || [], [frameworksData]);
	const currentFramework = useMemo(() => frameworks.find((f) => f.key === site?.framework), [frameworks, site?.framework]);
	const availableRuntimes = useMemo(() => {
		if (!currentFramework) return [];
		return currentFramework.runtimes || [];
	}, [currentFramework]);
	const [buildRuntime, setBuildRuntime] = useState("");
	useEffect(() => {
		if (site) setBuildRuntime(site.buildRuntime || "");
	}, [site]);
	const updateSiteMutation = useMutation({
		mutationFn: async (updates) => {
			if (!projectId || !siteId || !site) throw new Error("Project ID, Site ID, and Site are required");
			return await sdk.forProject(projectId).sites.update(buildSiteUpdateParams(site, updates));
		},
		onSuccess: (updated) => {
			toast.success(t("Runtime settings updated successfully"));
			queryClient.setQueryData([
				"site",
				"project",
				projectId,
				siteId
			], updated);
			queryClient.invalidateQueries({ queryKey: [
				"sites",
				"project",
				projectId
			] });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to update runtime settings")));
		}
	});
	const handleSave = () => {
		updateSiteMutation.mutate({ buildRuntime: buildRuntime || void 0 });
	};
	const hasRuntimeChoices = availableRuntimes.length > 0;
	const hasChanges = buildRuntime !== (site?.buildRuntime || "");
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Image")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Base image used when your site runs in production (SSR, API routes, and dynamic handlers). Pick an image that matches your stack. Changes take effect after the next successful deploy.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 space-y-4",
				children: hasRuntimeChoices ? /* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: "site-runtime-image",
						className: "text-[13px]",
						children: t("Image")
					}), /* @__PURE__ */ jsxs(Select, {
						value: buildRuntime || void 0,
						onValueChange: setBuildRuntime,
						children: [/* @__PURE__ */ jsx(SelectTrigger, {
							id: "site-runtime-image",
							className: "mt-2 h-9 max-w-md border-border bg-background text-[13px]",
							children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select an image") })
						}), /* @__PURE__ */ jsx(SelectContent, { children: availableRuntimes.map((runtime) => {
							const rt = runtime;
							const runtimeId = String(rt.$id ?? runtime);
							return /* @__PURE__ */ jsx(SelectItem, {
								value: runtimeId,
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(RuntimeIcon, {
										runtime: runtimeId,
										size: "sm"
									}), rt.name ?? runtimeId]
								})
							}, runtimeId);
						}) })]
					})]
				}) : /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: site?.framework ? t("No images are available for this framework yet.") : t("Choose a framework in build settings to see compatible images.")
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: !hasChanges || !hasRuntimeChoices || updateSiteMutation.isPending,
					onClick: handleSave,
					children: t("Update")
				})
			})
		]
	});
}
function SiteRuntimeTimeoutCard({ projectId, siteId, site }) {
	const t = useT();
	const queryClient = useQueryClient();
	const [requestTimeout, setRequestTimeout] = useState(15);
	useEffect(() => {
		if (site && site.timeout !== void 0) setRequestTimeout(site.timeout);
	}, [site]);
	const updateSiteMutation = useMutation({
		mutationFn: async (updates) => {
			if (!projectId || !siteId || !site) throw new Error("Project ID, Site ID, and Site are required");
			return await sdk.forProject(projectId).sites.update(buildSiteUpdateParams(site, updates));
		},
		onSuccess: (updated) => {
			toast.success(t("Request timeout updated successfully"));
			queryClient.setQueryData([
				"site",
				"project",
				projectId,
				siteId
			], updated);
			queryClient.invalidateQueries({ queryKey: [
				"sites",
				"project",
				projectId
			] });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to update request timeout")));
		}
	});
	const handleSave = () => {
		if (requestTimeout < 1 || requestTimeout > 30) {
			toast.error(t("Timeout must be between 1 and 30 seconds"));
			return;
		}
		updateSiteMutation.mutate({ timeout: requestTimeout });
	};
	const hasChanges = requestTimeout !== (site?.timeout ?? 15);
	const timeoutValid = requestTimeout >= 1 && requestTimeout <= 30;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Timeout")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Upper bound on how long a single request may run before the platform stops it. Use a higher value for slow SSR or data-heavy pages; use a lower value to fail fast when something hangs. Allowed range is 1–30 seconds.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: "site-request-timeout",
						className: "text-[13px]",
						children: t("Seconds per request")
					}), /* @__PURE__ */ jsx(Input, {
						id: "site-request-timeout",
						type: "number",
						min: 1,
						max: 30,
						value: requestTimeout,
						onChange: (e) => setRequestTimeout(Number(e.target.value)),
						className: "h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: !hasChanges || !timeoutValid || updateSiteMutation.isPending,
					onClick: handleSave,
					children: t("Update")
				})
			})
		]
	});
}
function SiteRuntimeLoggingCard({ projectId, siteId, site }) {
	const t = useT();
	const queryClient = useQueryClient();
	const [logging, setLogging] = useState(true);
	useEffect(() => {
		if (site && site.logging !== void 0) setLogging(site.logging);
	}, [site]);
	const updateSiteMutation = useMutation({
		mutationFn: async (updates) => {
			if (!projectId || !siteId || !site) throw new Error("Project ID, Site ID, and Site are required");
			return await sdk.forProject(projectId).sites.update(buildSiteUpdateParams(site, updates));
		},
		onSuccess: (updated) => {
			toast.success(t("Logging updated successfully"));
			queryClient.setQueryData([
				"site",
				"project",
				projectId,
				siteId
			], updated);
			queryClient.invalidateQueries({ queryKey: [
				"sites",
				"project",
				projectId
			] });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to update logging")));
		}
	});
	const handleSave = () => {
		updateSiteMutation.mutate({ logging });
	};
	const hasChanges = logging !== (site?.logging ?? true);
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Logging")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Controls how much detail is captured for each request. Full logging helps you debug production issues with stdout, stderr, and stack traces in the console. Turning logging off reduces overhead and can slightly improve response time when you do not need that detail.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "site-runtime-logging",
							className: "text-[13px]",
							children: t("Full request logging")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground mt-1",
							children: logging ? t("Enabled - logs and errors from your site are recorded.") : t("Disabled - lighter request records; responses may be slightly faster.")
						})]
					}), /* @__PURE__ */ jsx(Switch, {
						id: "site-runtime-logging",
						checked: logging,
						onCheckedChange: setLogging,
						disabled: updateSiteMutation.isPending,
						className: "shrink-0"
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: !hasChanges || updateSiteMutation.isPending,
					onClick: handleSave,
					children: t("Update")
				})
			})
		]
	});
}
function SiteRuntimeSpecificationCard({ projectId, siteId, site, isCloud = false }) {
	const t = useT();
	const queryClient = useQueryClient();
	const { project } = useProject(projectId);
	const { data: specificationsData } = useSiteSpecifications(projectId, SpecificationType.Runtimes);
	const specifications = useMemo(() => specificationsData?.specifications || [], [specificationsData]);
	const [runtimeSpecification, setRuntimeSpecification] = useState("");
	useEffect(() => {
		if (site) setRuntimeSpecification(site.runtimeSpecification || "");
	}, [site]);
	const updateSiteMutation = useMutation({
		mutationFn: async (updates) => {
			if (!projectId || !siteId || !site) throw new Error("Project ID, Site ID, and Site are required");
			return await sdk.forProject(projectId).sites.update(buildSiteUpdateParams(site, updates));
		},
		onSuccess: (updated) => {
			toast.success(t("Specification updated successfully"));
			queryClient.setQueryData([
				"site",
				"project",
				projectId,
				siteId
			], updated);
			queryClient.invalidateQueries({ queryKey: [
				"sites",
				"project",
				projectId
			] });
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to update specification")));
		}
	});
	const handleSave = () => {
		updateSiteMutation.mutate({ runtimeSpecification: runtimeSpecification || void 0 });
	};
	const hasChanges = runtimeSpecification !== (site?.runtimeSpecification || "");
	if (!isCloud || specifications.length === 0) return null;
	const footerNote = hasUnavailableSpecifications(specifications) ? /* @__PURE__ */ jsx(SpecificationsUpgradeNote, { orgId: project?.teamId }) : void 0;
	return /* @__PURE__ */ jsx(SpecificationTableCard, {
		title: t("Specification"),
		description: t("CPU and memory allocated when your site handles requests, including server-side rendering (SSR)."),
		scope: "runtime-site",
		specs: specifications,
		selectedSlug: runtimeSpecification,
		onSelectedSlugChange: setRuntimeSpecification,
		hasChanges,
		isSaving: updateSiteMutation.isPending,
		onSave: handleSave,
		footerNote
	});
}
function View() {
	const t = useT();
	const { projectId, siteId } = useParams({ strict: false });
	const { data: site, isLoading } = useProjectSite(projectId, siteId);
	const isCloud = true;
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "rounded-lg border border-border bg-card py-12 text-center",
		children: /* @__PURE__ */ jsx("p", {
			className: "text-[13px] text-muted-foreground",
			children: t("Loading settings...")
		})
	});
	if (!site) return null;
	return /* @__PURE__ */ jsx(SettingsCardsList, { cards: [
		{
			id: "image",
			search: {
				title: "Image",
				keywords: [
					"runtime",
					"ssr",
					"server",
					"start",
					"image",
					"node"
				]
			},
			node: /* @__PURE__ */ jsx(SiteRuntimeImageCard, {
				projectId,
				siteId,
				site
			})
		},
		{
			id: "timeout",
			search: {
				title: "Timeout",
				keywords: ["execute", "seconds"]
			},
			node: /* @__PURE__ */ jsx(SiteRuntimeTimeoutCard, {
				projectId,
				siteId,
				site
			})
		},
		{
			id: "logging",
			search: {
				title: "Logging",
				keywords: ["logs", "stdout"]
			},
			node: /* @__PURE__ */ jsx(SiteRuntimeLoggingCard, {
				projectId,
				siteId,
				site
			})
		},
		{
			id: "specification",
			search: {
				title: "Specification",
				keywords: [
					"vcpu",
					"memory",
					"cpu"
				]
			},
			node: /* @__PURE__ */ jsx(SiteRuntimeSpecificationCard, {
				projectId,
				siteId,
				site,
				isCloud
			})
		}
	] });
}
var SplitComponent = View;
export { SplitComponent as component };
