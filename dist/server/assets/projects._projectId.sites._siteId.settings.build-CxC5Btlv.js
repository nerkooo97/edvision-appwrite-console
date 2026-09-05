import { t as cn } from "./utils-DoqqkI3X.js";
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
import { r as getFrameworkAdapterDefaults } from "./adapter-defaults-DTi3IaNG.js";
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
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import "./context-menu-D55xedo-.js";
import "./table-CsPM4E9L.js";
import "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import "./switch-D-U5gDIQ.js";
import "./alert-BTaNwkUC.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import { t as FrameworkIcon } from "./FrameworkIcon-DTkSe6r3.js";
import { n as RadioGroupItem, t as RadioGroup } from "./radio-group-aZurL4eE.js";
import "./UpgradePlanLink-BCG1Z_E2.js";
import { t as SpecificationsUpgradeNote } from "./SpecificationsUpgradeNote-BowRoSsd.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import "./input-tags-CcIzF147.js";
import { t as SpecificationTableCard } from "./SpecificationTableCard-ecVebCBg.js";
import { a as getDeploymentRetention, i as DeploymentRetentionCard, n as describeTriggerBehavior, r as normalizeTriggerPatterns, t as BuildTriggersCard } from "./BuildTriggersCard-CJ04gXqH.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
const FRAMEWORK_CONFIGS = [
	{
		key: "sveltekit",
		adapters: {
			ssr: {
				desc: "Use $ adapter in $ file.",
				code: ["@sveltejs/adapter-node", "svelte.config.js"],
				url: "https://kit.svelte.dev/docs#adapter-node"
			},
			static: {
				desc: "Use $ adapter in $ file.",
				code: ["@sveltejs/adapter-static", "svelte.config.js"],
				url: "https://kit.svelte.dev/docs#adapter-static"
			}
		}
	},
	{
		key: "astro",
		adapters: {
			ssr: {
				desc: "Use $ adapter in $ file.",
				code: ["@astro/node", "astro.config.mjs"],
				url: "https://docs.astro.build/en/guides/server-side-rendering/"
			},
			static: {
				desc: "Ensure you don't set $ adapter in $ file.",
				code: ["adapter", "astro.config.mjs"],
				url: "https://docs.astro.build/en/guides/deploy/"
			}
		}
	},
	{
		key: "remix",
		adapters: {
			ssr: {
				desc: "Ensure $ file uses $ package.",
				code: ["entry.server.tsx", "@remix-run/node"]
			},
			static: {
				desc: "Set $ in $ plugin in $ file.",
				code: [
					"ssr: false",
					"remix",
					"vite.config.ts"
				]
			}
		}
	},
	{
		key: "nuxt",
		adapters: {
			ssr: {
				desc: "Set build command to $ in site settings.",
				code: ["npm run build"],
				url: "https://nuxt.com/docs/getting-started/deployment"
			},
			static: {
				desc: "Set build command to $ in site settings.",
				code: ["npm run generate"],
				url: "https://nuxt.com/docs/getting-started/deployment#static-hosting"
			}
		}
	},
	{
		key: "tanstack-start",
		adapters: {
			ssr: {
				desc: "Ensure $ includes $ plugin.",
				code: ["vite.config.js", "tanstackStart()"],
				url: "https://tanstack.com/start/latest/docs/framework/react/guide/hosting"
			},
			static: {
				desc: "Set $ to $ in $.",
				code: [
					"prerender",
					"enabled",
					"vite.config.js"
				],
				url: "https://tanstack.com/start/latest/docs/framework/react/guide/static-prerendering"
			}
		}
	},
	{
		key: "nextjs",
		adapters: {
			ssr: {
				desc: "Set $ in $ file.",
				code: ["output: 'standalone'", "next.config.js"],
				url: "https://nextjs.org/docs/pages/building-your-application/deploying"
			},
			static: {
				desc: "Set $ in $ file.",
				code: ["output: 'export'", "next.config.js"],
				url: "https://nextjs.org/docs/pages/building-your-application/deploying/static-exports"
			}
		}
	},
	{
		key: "analog",
		adapters: {
			ssr: {
				desc: "Set $ in $ plugin in $.",
				code: [
					"ssr: true",
					"analog",
					"vite.config.ts"
				],
				url: "https://analogjs.org/docs/features/server/server-side-rendering"
			},
			static: {
				desc: "Set $ in $ plugin in $.",
				code: [
					"static: true",
					"analog",
					"vite.config.ts"
				],
				url: "https://analogjs.org/docs/features/server/static-site-generation"
			}
		}
	},
	{
		key: "angular",
		adapters: {
			ssr: {
				desc: "Ensure $ file uses $ package.",
				code: ["src/server.ts", "@angular/ssr/node"],
				url: "https://angular.dev/guide/ssr"
			},
			static: {
				desc: "Angular's default build is static. No further action needed.",
				code: []
			}
		}
	}
];
function normalizeFrameworkKey(key) {
	return key?.toLowerCase().trim() ?? "";
}
var GENERIC_ADAPTER_COPY = {
	ssr: {
		desc: "Run the app with a server at runtime.",
		code: []
	},
	static: {
		desc: "Serve pre-built static files (HTML/CSS/JS).",
		code: []
	}
};
var ADAPTER_LABELS = {
	ssr: "Server side rendering",
	static: "Static site"
};
function getAdapterCopy(frameworkKey, adapter) {
	const label = ADAPTER_LABELS[adapter];
	const normalized = normalizeFrameworkKey(frameworkKey);
	const option = FRAMEWORK_CONFIGS.find((c) => normalizeFrameworkKey(c.key) === normalized)?.adapters?.[adapter] ?? GENERIC_ADAPTER_COPY[adapter];
	return {
		label,
		desc: option.desc,
		code: option.code ?? [],
		url: option.url
	};
}
function getAdapterDescriptionSegments(desc, code) {
	const segments = [];
	desc.split("$").forEach((text, i) => {
		if (text.length > 0) segments.push({
			type: "text",
			value: text
		});
		if (i < code.length && code[i] != null) segments.push({
			type: "code",
			value: code[i]
		});
	});
	return segments;
}
var codeClassName = "rounded bg-muted/80 px-1.5 py-0.5 font-mono text-[12px] text-foreground/90";
function AdapterOptionDescription({ desc, code }) {
	return /* @__PURE__ */ jsx("p", {
		className: "mt-2 text-[13px] text-muted-foreground leading-relaxed",
		children: getAdapterDescriptionSegments(desc, code).map((seg, i) => seg.type === "text" ? /* @__PURE__ */ jsx("span", { children: seg.value }, i) : /* @__PURE__ */ jsx("code", {
			className: codeClassName,
			children: seg.value
		}, i))
	});
}
function AdapterOptionCard({ id, value, label, desc, code, url, isSelected }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(Label, {
		htmlFor: id,
		className: cn("relative flex cursor-pointer items-start rounded-xl border transition-colors", "px-5 py-4 sm:px-5 sm:py-5", isSelected ? "border-primary bg-primary/5 shadow-sm" : "border-border bg-card/50 hover:border-border hover:bg-muted/20"),
		children: [/* @__PURE__ */ jsx(RadioGroupItem, {
			value,
			id,
			className: "mt-1 shrink-0"
		}), /* @__PURE__ */ jsxs("div", {
			className: "ms-4 flex-1 min-w-0 pe-2",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "block text-[15px] font-semibold tracking-tight text-foreground",
					children: t(label)
				}),
				/* @__PURE__ */ jsx(AdapterOptionDescription, {
					desc,
					code
				}),
				url && /* @__PURE__ */ jsx("a", {
					href: url,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mt-3 inline-block text-[13px] link-neutral",
					onClick: (e) => e.stopPropagation(),
					children: t("Learn more")
				})
			]
		})]
	});
}
function AdapterOptions({ frameworkKey, adapter, onAdapterChange }) {
	const t = useT();
	const ssrCopy = getAdapterCopy(frameworkKey, "ssr");
	const staticCopy = getAdapterCopy(frameworkKey, "static");
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx(Label, {
			className: "text-[13px] font-medium text-foreground",
			children: t("Adapter")
		}),
		/* @__PURE__ */ jsx("p", {
			className: "mt-1 text-[13px] text-muted-foreground",
			children: t("Choose how your site is rendered at runtime.")
		}),
		/* @__PURE__ */ jsxs(RadioGroup, {
			value: adapter,
			onValueChange: (v) => onAdapterChange(v),
			className: "mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5",
			children: [/* @__PURE__ */ jsx(AdapterOptionCard, {
				id: "adapter-ssr",
				value: "ssr",
				label: ssrCopy.label,
				desc: ssrCopy.desc,
				code: ssrCopy.code,
				url: ssrCopy.url,
				isSelected: adapter === "ssr"
			}), /* @__PURE__ */ jsx(AdapterOptionCard, {
				id: "adapter-static",
				value: "static",
				label: staticCopy.label,
				desc: staticCopy.desc,
				code: staticCopy.code,
				url: staticCopy.url,
				isSelected: adapter === "static"
			})]
		})
	] });
}
function SiteBuildFrameworkCard({ projectId, siteId, site }) {
	const t = useT();
	const queryClient = useQueryClient();
	const { data: frameworksData } = useSiteFrameworks(projectId);
	const frameworks = useMemo(() => frameworksData?.frameworks || [], [frameworksData]);
	const [framework, setFramework] = useState("");
	const [adapter, setAdapter] = useState("");
	const [outputDirectory, setOutputDirectory] = useState("");
	const [fallbackFile, setFallbackFile] = useState("");
	const currentFramework = useMemo(() => frameworks.find((f) => f.key === framework), [frameworks, framework]);
	const adapterDefaults = useMemo(() => getFrameworkAdapterDefaults(currentFramework, adapter), [currentFramework, adapter]);
	useEffect(() => {
		if (site) {
			setFramework(site.framework || "");
			setAdapter(site.adapter || "");
			setOutputDirectory(site.outputDirectory ?? "");
			setFallbackFile(site.fallbackFile || "");
		}
	}, [site]);
	const updateSiteMutation = useMutation({
		mutationFn: async (updates) => {
			if (!projectId || !siteId || !site) throw new Error("Project ID, Site ID, and Site are required");
			return await sdk.forProject(projectId).sites.update(buildSiteUpdateParams(site, updates));
		},
		onSuccess: (updated) => {
			toast.success(t("Framework settings updated successfully"));
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
			toast.error(getErrorMessage(error, t("Failed to update framework settings")));
		}
	});
	const handleSave = () => {
		if (!framework) {
			toast.error(t("Framework is required"));
			return;
		}
		updateSiteMutation.mutate({
			framework,
			adapter: adapter || void 0,
			outputDirectory: outputDirectory || void 0,
			fallbackFile: fallbackFile || void 0,
			...framework !== site?.framework || adapter !== site?.adapter ? { startCommand: void 0 } : {}
		});
	};
	const hasChanges = framework !== site?.framework || adapter !== site?.adapter || outputDirectory !== (site?.outputDirectory ?? "") || fallbackFile !== (site?.fallbackFile ?? "");
	const isStaticAdapter = adapter === "static";
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Framework")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Choose your stack, adapter mode, and where build output is written.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-6",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: "framework",
						className: "text-[13px]",
						children: t("Framework")
					}), /* @__PURE__ */ jsxs(Select, {
						value: framework,
						onValueChange: setFramework,
						children: [/* @__PURE__ */ jsx(SelectTrigger, {
							id: "framework",
							className: "mt-2 h-9 border-border bg-background text-[13px]",
							children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select framework") })
						}), /* @__PURE__ */ jsx(SelectContent, { children: frameworks.map((f) => /* @__PURE__ */ jsx(SelectItem, {
							value: f.key,
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(FrameworkIcon, {
									framework: f.key,
									size: "sm"
								}), f.name]
							})
						}, f.key)) })]
					})] }),
					framework ? /* @__PURE__ */ jsx(AdapterOptions, {
						frameworkKey: framework,
						adapter,
						onAdapterChange: setAdapter
					}) : null,
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: "output-directory",
						className: "text-[13px]",
						children: t("Output directory")
					}), /* @__PURE__ */ jsx(Input, {
						id: "output-directory",
						value: outputDirectory,
						onChange: (e) => setOutputDirectory(e.target.value),
						placeholder: adapterDefaults.outputDirectory || t("Enter output directory"),
						className: "mt-2 h-9 font-mono text-[13px]"
					})] }),
					isStaticAdapter ? /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx(Label, {
							htmlFor: "fallback-file",
							className: "text-[13px]",
							children: t("Fallback file")
						}),
						/* @__PURE__ */ jsx(Input, {
							id: "fallback-file",
							value: fallbackFile,
							onChange: (e) => setFallbackFile(e.target.value),
							placeholder: "index.html",
							className: "mt-2 h-9 font-mono text-[13px]"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-[12px] text-muted-foreground",
							children: t("File to serve for routes that don't match any static files")
						})
					] }) : null
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: !hasChanges || !framework || updateSiteMutation.isPending,
					onClick: handleSave,
					children: t("Update")
				})
			})
		]
	});
}
function SiteBuildCommandsCard({ projectId, siteId, site }) {
	const t = useT();
	const queryClient = useQueryClient();
	const { data: frameworksData } = useSiteFrameworks(projectId);
	const frameworks = useMemo(() => frameworksData?.frameworks || [], [frameworksData]);
	const frameworkKey = site?.framework || "";
	const adapterKey = site?.adapter || "";
	const currentFramework = useMemo(() => frameworks.find((f) => f.key === frameworkKey), [frameworks, frameworkKey]);
	const adapterDefaults = useMemo(() => getFrameworkAdapterDefaults(currentFramework, adapterKey), [currentFramework, adapterKey]);
	const [installCommand, setInstallCommand] = useState("");
	const [buildCommand, setBuildCommand] = useState("");
	useEffect(() => {
		if (site) {
			setInstallCommand(site.installCommand ?? "");
			setBuildCommand(site.buildCommand ?? "");
		}
	}, [site]);
	const updateSiteMutation = useMutation({
		mutationFn: async (updates) => {
			if (!projectId || !siteId || !site) throw new Error("Project ID, Site ID, and Site are required");
			return await sdk.forProject(projectId).sites.update(buildSiteUpdateParams(site, updates));
		},
		onSuccess: (updated) => {
			toast.success(t("Build commands updated successfully"));
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
			toast.error(getErrorMessage(error, t("Failed to update build commands")));
		}
	});
	const handleSave = () => {
		updateSiteMutation.mutate({
			installCommand: installCommand || void 0,
			buildCommand: buildCommand || void 0
		});
	};
	const hasChanges = installCommand !== (site?.installCommand ?? "") || buildCommand !== (site?.buildCommand ?? "");
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Commands")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t("Shell commands run on the build worker (defaults follow your framework).")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-4",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
					htmlFor: "install-command",
					className: "text-[13px]",
					children: t("Install command")
				}), /* @__PURE__ */ jsx(Input, {
					id: "install-command",
					value: installCommand,
					onChange: (e) => setInstallCommand(e.target.value),
					placeholder: adapterDefaults.installCommand || t("Enter install command"),
					className: "mt-2 h-9 font-mono text-[13px]"
				})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
					htmlFor: "build-command",
					className: "text-[13px]",
					children: t("Build command")
				}), /* @__PURE__ */ jsx(Input, {
					id: "build-command",
					value: buildCommand,
					onChange: (e) => setBuildCommand(e.target.value),
					placeholder: adapterDefaults.buildCommand || t("Enter build command"),
					className: "mt-2 h-9 font-mono text-[13px]"
				})] })]
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
function SiteBuildSpecificationCard({ projectId, siteId, site, isCloud = false }) {
	const t = useT();
	const queryClient = useQueryClient();
	const { project } = useProject(projectId);
	const { data: specificationsData } = useSiteSpecifications(projectId, SpecificationType.Builds);
	const specifications = useMemo(() => specificationsData?.specifications || [], [specificationsData]);
	const [buildSpecification, setBuildSpecification] = useState("");
	useEffect(() => {
		if (site) setBuildSpecification(site.buildSpecification || "");
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
		updateSiteMutation.mutate({ buildSpecification: buildSpecification || void 0 });
	};
	const hasChanges = buildSpecification !== (site?.buildSpecification || "");
	if (!isCloud || specifications.length === 0) return null;
	const footerNote = hasUnavailableSpecifications(specifications) ? /* @__PURE__ */ jsx(SpecificationsUpgradeNote, { orgId: project?.teamId }) : void 0;
	return /* @__PURE__ */ jsx(SpecificationTableCard, {
		title: t("Specification"),
		description: t("CPU and memory allocated on the build worker for dependency install and compile steps."),
		scope: "build",
		specs: specifications,
		selectedSlug: buildSpecification,
		onSelectedSlugChange: setBuildSpecification,
		hasChanges,
		isSaving: updateSiteMutation.isPending,
		onSave: handleSave,
		footerNote
	});
}
function SiteDeploymentRetentionCard({ projectId, siteId, site }) {
	const t = useT();
	const queryClient = useQueryClient();
	const updateSiteMutation = useMutation({
		mutationFn: async (deploymentRetention) => {
			if (!projectId || !siteId || !site) throw new Error("Project ID, Site ID, and Site are required");
			return await sdk.forProject(projectId).sites.update(buildSiteUpdateParams(site, { deploymentRetention }));
		},
		onSuccess: (updated) => {
			toast.success(t("Retention has been updated"));
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
			toast.error(getErrorMessage(error, t("Failed to update retention")));
		}
	});
	if (!site) return null;
	return /* @__PURE__ */ jsx(DeploymentRetentionCard, {
		deploymentRetention: getDeploymentRetention(site),
		onUpdate: (deploymentRetention) => updateSiteMutation.mutate(deploymentRetention),
		isPending: updateSiteMutation.isPending
	});
}
var SITES_BUILD_TRIGGERS_DOCS = "/docs/products/sites/deploy-from-git#build-triggers";
function SiteBuildTriggersCard({ projectId, siteId, site }) {
	const t = useT();
	const queryClient = useQueryClient();
	const updateSiteMutation = useMutation({
		mutationFn: async (updates) => {
			if (!projectId || !siteId) throw new Error("Project ID and Site ID are required");
			return await sdk.forProject(projectId).sites.update(buildSiteUpdateParams(site, updates));
		},
		onSuccess: (updated, variables) => {
			const summary = describeTriggerBehavior(variables.providerBranches, variables.providerPaths);
			toast.success(`${t("Triggers updated.")} ${summary}`);
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
			toast.error(getErrorMessage(error, t("Failed to update triggers")));
		}
	});
	if (!projectId || !siteId) return null;
	return /* @__PURE__ */ jsx(BuildTriggersCard, {
		kind: "site",
		resource: site,
		projectId,
		resourceId: siteId,
		docsLink: SITES_BUILD_TRIGGERS_DOCS,
		isSaving: updateSiteMutation.isPending,
		onSave: (updates) => updateSiteMutation.mutate({
			providerBranches: normalizeTriggerPatterns(updates.providerBranches),
			providerPaths: normalizeTriggerPatterns(updates.providerPaths)
		})
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
			id: "framework",
			search: {
				title: "Framework",
				keywords: [
					"adapter",
					"static",
					"ssg",
					"next",
					"react"
				]
			},
			node: /* @__PURE__ */ jsx(SiteBuildFrameworkCard, {
				projectId,
				siteId,
				site
			})
		},
		{
			id: "commands",
			search: {
				title: "Commands",
				keywords: [
					"install",
					"build",
					"output",
					"compile"
				]
			},
			node: /* @__PURE__ */ jsx(SiteBuildCommandsCard, {
				projectId,
				siteId,
				site
			})
		},
		{
			id: "triggers",
			search: {
				title: "Triggers",
				description: "Control which branch pushes and file changes trigger automatic deployments.",
				keywords: [
					"git",
					"branch",
					"path",
					"glob",
					"filter",
					"deploy",
					"pattern"
				]
			},
			node: /* @__PURE__ */ jsx(SiteBuildTriggersCard, {
				projectId,
				siteId,
				site
			})
		},
		{
			id: "deployment-retention",
			search: {
				title: "Retention",
				description: "Keep active deployments and choose when inactive deployments are deleted.",
				keywords: [
					"deployment",
					"retention",
					"delete",
					"inactive",
					"forever",
					"cleanup"
				]
			},
			node: /* @__PURE__ */ jsx(SiteDeploymentRetentionCard, {
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
					"worker",
					"profile"
				]
			},
			node: /* @__PURE__ */ jsx(SiteBuildSpecificationCard, {
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
