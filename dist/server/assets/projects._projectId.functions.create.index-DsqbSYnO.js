import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { o as getApiEndpoint } from "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { a as getVcsInstallationErrorKind } from "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import { i as CREATE_FUNCTION_WIZARD_STARTER_LIMIT, r as CREATE_FUNCTION_WIZARD_BROWSE_LIMIT } from "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { As as useNamespacesForInstallations, js as useRepositories } from "./hooks-BONwG3Mt.js";
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
import { sr as functionTemplatesPageQueryOptions } from "./affiliates-BOg1SHC6.js";
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
import "./popover-BjTNxuf9.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import "./context-menu-D55xedo-.js";
import { t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import { t as Skeleton } from "./skeleton-8d0Q_D56.js";
import "./Avatar-D1PavDBA.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import "./dropdown-menu-DH51wH-m.js";
import { n as SimplePagination } from "./Pagination-BDei8M4v.js";
import "./alert-BTaNwkUC.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import "./CopyableId-DPIWAPIb.js";
import { a as getKnownVcsProvider, i as buildVcsOrgOptions, n as VcsIcon, r as buildVcsAuthUrl, t as VCS_PROVIDERS } from "./providers-8aVvAoJZ.js";
import "./RowActionsMenuTrigger-BVwlWTa7.js";
import { c as RESOURCE_CARD_METADATA_DIVIDER_CLASSNAME } from "./ResourceCard-DihVgMpG.js";
import "./LanguageIcon-C0AhXLp0.js";
import { t as RuntimeIcon } from "./RuntimeIcon-Dt6YMTy1.js";
import { t as RefreshButton } from "./RefreshButton-BA9lQ7jC.js";
import "./WarningAlert-ZIbpbrZO.js";
import { r as VcsInstallationErrorState, t as useVcsInstallationReconnect } from "./use-installation-reconnect-BUTVp2Vb.js";
import { n as useFunctionWizard } from "./WizardContext-CgxZR-_v.js";
import { n as CreateWizardRightColumn, t as CreateWizardLeftColumn } from "./CreateWizardColumns-N6SbyMed.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { VCSDetectionType } from "@appwrite.io/console";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, ChevronRight, GitBranch, LayoutTemplate, Lock, Search } from "lucide-react";
var TEMPLATE_CARD_FOCUS_CLASSNAME = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
var MORE_TEMPLATES_GRID_CLASSNAME = "grid min-w-0 grid-cols-2 content-start gap-3 [&>*]:min-w-0";
var RUNTIME_AVATAR_SIZE_CLASS = "size-7";
var MAX_VISIBLE_RUNTIMES = 4;
var runtimeTileClassName = cn("grid shrink-0 place-items-center overflow-hidden rounded-md border border-border/80 bg-muted/50 text-muted-foreground", "transition-colors duration-150", RUNTIME_AVATAR_SIZE_CLASS);
var REPO_PAGE_SIZE = 7;
var QUICK_START_USE_CASE = "starter";
var LANGUAGE_RUNTIMES = [
	"node",
	"python",
	"bun",
	"php",
	"dart",
	"go",
	"rust",
	"deno",
	"ruby"
];
function getRuntimeBase(r) {
	return (typeof r === "string" ? r : r?.name ?? r?.key ?? "").toLowerCase().split("-")[0];
}
function getBaseRuntimeNames(runtimes) {
	const names = [];
	const seen = /* @__PURE__ */ new Set();
	for (const runtime of runtimes ?? []) {
		const base = getRuntimeBase(runtime);
		if (!base || seen.has(base)) continue;
		seen.add(base);
		names.push(base);
	}
	return names;
}
function formatRuntimeLabel(runtime) {
	if (runtime === "php") return "PHP";
	return runtime.charAt(0).toUpperCase() + runtime.slice(1);
}
function formatUseCaseLabel(useCase) {
	const u = useCase.trim();
	if (u.toLowerCase() === "ai") return "AI";
	return u.charAt(0).toUpperCase() + u.slice(1);
}
function LanguageCard({ projectId, language, template }) {
	const label = language === "php" ? "PHP" : language.charAt(0).toUpperCase() + language.slice(1);
	const disabled = !template;
	const content = /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between gap-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-3 min-w-0",
			children: [/* @__PURE__ */ jsx(RuntimeIcon, {
				runtime: language,
				size: "md",
				className: "shrink-0"
			}), /* @__PURE__ */ jsx("span", {
				className: "text-[14px] font-semibold text-foreground",
				children: label
			})]
		}), !disabled && /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 shrink-0 text-muted-foreground group-hover:text-foreground" })]
	});
	if (disabled) return /* @__PURE__ */ jsx("div", {
		className: cn("rounded-xl border border-border bg-card/50 p-4 text-start opacity-60 cursor-not-allowed"),
		children: content
	});
	return /* @__PURE__ */ jsx(Link, {
		to: "/projects/$projectId/functions/create/template/$templateId",
		params: {
			projectId,
			templateId: template.id
		},
		search: { runtime: language },
		className: cn("group block min-w-0 rounded-xl border border-border bg-card/50 p-4 text-start transition-all hover:border-border/80 hover:bg-card", TEMPLATE_CARD_FOCUS_CLASSNAME),
		children: content
	});
}
function TemplateCard({ projectId, template }) {
	const baseRuntimes = getBaseRuntimeNames(template.runtimes);
	const visibleRuntimes = baseRuntimes.slice(0, MAX_VISIBLE_RUNTIMES);
	const overflowRuntimes = baseRuntimes.slice(MAX_VISIBLE_RUNTIMES);
	const overflowCount = overflowRuntimes.length;
	const useCases = Array.isArray(template.useCases) ? template.useCases : [];
	const primaryUseCase = useCases[0] ? formatUseCaseLabel(useCases[0]) : null;
	const hasRuntimes = visibleRuntimes.length > 0;
	return /* @__PURE__ */ jsx(Link, {
		to: "/projects/$projectId/functions/create/template/$templateId",
		params: {
			projectId,
			templateId: template.id
		},
		className: cn("group flex min-w-0 flex-col rounded-xl border border-border bg-card/50 p-4 pb-0 text-start transition-all hover:border-border/80 hover:bg-card", TEMPLATE_CARD_FOCUS_CLASSNAME),
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-w-0 flex-1 flex-col gap-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "truncate text-[14px] font-semibold leading-snug text-foreground transition-colors group-hover:text-foreground",
					children: template.name
				}), template.tagline ? /* @__PURE__ */ jsx("p", {
					className: "line-clamp-1 text-[12px] leading-relaxed text-muted-foreground",
					children: template.tagline
				}) : null]
			}), /* @__PURE__ */ jsxs("div", {
				className: cn(RESOURCE_CARD_METADATA_DIVIDER_CLASSNAME, "mt-auto flex items-center justify-between gap-2"),
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 flex-1 flex-nowrap items-center gap-x-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: [
						hasRuntimes ? /* @__PURE__ */ jsxs("ul", {
							className: "m-0 inline-flex list-none items-center gap-1 p-0",
							"aria-label": baseRuntimes.map(formatRuntimeLabel).join(", "),
							children: [visibleRuntimes.map((runtime) => {
								const label = formatRuntimeLabel(runtime);
								return /* @__PURE__ */ jsx("li", {
									className: "shrink-0",
									children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
										asChild: true,
										children: /* @__PURE__ */ jsx("div", {
											className: cn(runtimeTileClassName, "hover:border-border hover:bg-muted hover:text-foreground"),
											"aria-label": label,
											children: /* @__PURE__ */ jsx(RuntimeIcon, {
												runtime,
												size: "sm",
												className: "!size-3.5 shrink-0"
											})
										})
									}), /* @__PURE__ */ jsx(TooltipContent, {
										side: "bottom",
										className: "text-[12px]",
										children: label
									})] })
								}, runtime);
							}), overflowCount > 0 ? /* @__PURE__ */ jsx("li", {
								className: "shrink-0",
								children: /* @__PURE__ */ jsxs("div", {
									className: cn(runtimeTileClassName, "text-[10px] font-semibold tabular-nums tracking-tight text-muted-foreground"),
									"aria-label": overflowRuntimes.map(formatRuntimeLabel).join(", "),
									title: overflowRuntimes.map(formatRuntimeLabel).join(", "),
									children: ["+", overflowCount]
								})
							}) : null]
						}) : null,
						hasRuntimes && primaryUseCase ? /* @__PURE__ */ jsx("span", {
							className: "shrink-0 text-[10px] text-muted-foreground/40",
							"aria-hidden": true,
							children: "·"
						}) : null,
						primaryUseCase ? /* @__PURE__ */ jsx("span", {
							className: "min-w-0 truncate text-[12px] font-medium text-muted-foreground",
							children: primaryUseCase
						}) : !hasRuntimes ? /* @__PURE__ */ jsx("span", {
							className: "text-[12px] text-muted-foreground",
							children: "-"
						}) : null
					]
				}), /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0 text-muted-foreground opacity-60 transition-colors group-hover:opacity-100" })]
			})]
		})
	});
}
function RepositorySkeleton({ index = 0, provider }) {
	const nameWidths = [
		"w-28",
		"w-36",
		"w-32",
		"w-24",
		"w-40"
	];
	const dateWidths = [
		"w-14",
		"w-16",
		"w-12",
		"w-18",
		"w-14"
	];
	return /* @__PURE__ */ jsxs("div", {
		className: "flex w-full items-center gap-3 px-4 py-3.5",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex h-7 w-7 shrink-0 items-center justify-center rounded bg-muted/50 text-muted-foreground",
				children: /* @__PURE__ */ jsx(VcsIcon, {
					type: provider,
					className: "h-3.5 w-3.5"
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex-1 min-w-0 flex items-center gap-2",
				children: [/* @__PURE__ */ jsx(Skeleton, { className: cn("h-3.5", nameWidths[index % nameWidths.length]) }), /* @__PURE__ */ jsx(Skeleton, { className: cn("h-3 shrink-0", dateWidths[index % dateWidths.length]) })]
			}),
			/* @__PURE__ */ jsx(Skeleton, { className: "h-7 w-[68px] shrink-0 rounded-md" })
		]
	});
}
function CreateFunctionView() {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const { installations, updateFormData } = useFunctionWizard();
	const { project } = useProject(projectId);
	const projectEndpoint = useMemo(() => getApiEndpoint(project?.region), [project?.region]);
	const [selectedInstallationId, setSelectedInstallationId] = useState("");
	const [repoSearch, setRepoSearch] = useState("");
	const [debouncedRepoSearch, setDebouncedRepoSearch] = useState("");
	const [repoPage, setRepoPage] = useState(1);
	const selectedInstallation = installations.find((i) => i.$id === selectedInstallationId);
	const [selectedNamespace, setSelectedNamespace] = useState("");
	const { namespacesByInstallation } = useNamespacesForInstallations(projectId, installations);
	const orgOptions = useMemo(() => buildVcsOrgOptions(installations, namespacesByInstallation), [installations, namespacesByInstallation]);
	const selectedOptionKey = selectedNamespace ? `${selectedInstallationId}:${selectedNamespace}` : selectedInstallationId;
	const selectedOption = orgOptions.find((o) => o.key === selectedOptionKey);
	useEffect(() => {
		if (!selectedInstallationId) {
			if (selectedNamespace) setSelectedNamespace("");
			return;
		}
		if (!orgOptions.some((o) => o.key === selectedOptionKey)) setSelectedNamespace(orgOptions.find((o) => o.installationId === selectedInstallationId)?.providerNamespace ?? "");
	}, [
		selectedInstallationId,
		orgOptions,
		selectedOptionKey,
		selectedNamespace
	]);
	const selectOption = (key) => {
		const option = orgOptions.find((o) => o.key === key);
		if (!option) return;
		setSelectedInstallationId(option.installationId);
		setSelectedNamespace(option.providerNamespace ?? "");
		setRepoPage(1);
	};
	const [orgFilter, setOrgFilter] = useState("");
	const filteredOrgOptions = useMemo(() => orgFilter.trim() ? orgOptions.filter((o) => o.label.toLowerCase().includes(orgFilter.trim().toLowerCase())) : orgOptions, [orgOptions, orgFilter]);
	const hasAutoSelectedInstallation = useRef(false);
	useEffect(() => {
		if (installations.length > 0 && !selectedInstallationId && !hasAutoSelectedInstallation.current) {
			hasAutoSelectedInstallation.current = true;
			const urlParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
			if (urlParams?.get("installation") && installations.some((i) => i.$id === urlParams.get("installation")) && urlParams) {
				setSelectedInstallationId(urlParams.get("installation"));
				return;
			}
			setSelectedInstallationId(installations[0].$id);
		}
	}, [installations, selectedInstallationId]);
	useEffect(() => {
		const t$1 = setTimeout(() => {
			setDebouncedRepoSearch(repoSearch);
			setRepoPage(1);
		}, 300);
		return () => clearTimeout(t$1);
	}, [repoSearch]);
	const getVcsAuthUrl = useMemo(() => {
		return (provider = "github", mode = "create") => {
			if (typeof window === "undefined" || !projectId) return "#";
			let redirectUrl = `${window.location.origin}/projects/${projectId}/functions/create`;
			if (selectedInstallationId) redirectUrl += `?installation=${selectedInstallationId}`;
			return buildVcsAuthUrl({
				endpoint: projectEndpoint,
				provider,
				projectId,
				successUrl: redirectUrl,
				failureUrl: redirectUrl
			});
		};
	}, [
		projectEndpoint,
		projectId,
		selectedInstallationId
	]);
	const getGitHubAuthUrl = getVcsAuthUrl("github");
	const reconnectReturnUrl = useMemo(() => {
		if (typeof window === "undefined" || !projectId) return void 0;
		const base = `${window.location.origin}/projects/${projectId}/functions/create`;
		return selectedInstallationId ? `${base}?installation=${selectedInstallationId}` : base;
	}, [projectId, selectedInstallationId]);
	const { reconnectUrl } = useVcsInstallationReconnect(projectId, selectedInstallationId || null, reconnectReturnUrl);
	const { data: repositoriesData, isLoading: reposLoading, isFetching: reposFetching, error: reposError, refetch: refetchRepos } = useRepositories(projectId, selectedInstallationId || null, VCSDetectionType.Runtime, repoPage - 1, REPO_PAGE_SIZE, debouncedRepoSearch || void 0, selectedNamespace || void 0);
	const repositories = useMemo(() => repositoriesData?.runtimeProviderRepositories || [], [repositoriesData]);
	const hasMoreRepos = repositories.length === REPO_PAGE_SIZE;
	const installationErrorKind = getVcsInstallationErrorKind(reposError);
	const { data: starterPage } = useQuery({ ...functionTemplatesPageQueryOptions(projectId, 0, 24, [], [QUICK_START_USE_CASE]) });
	const { data: browsePage } = useQuery({ ...functionTemplatesPageQueryOptions(projectId, 0, 48, [], []) });
	const starterTemplates = starterPage?.templates ?? [];
	const browseTemplates = browsePage?.templates ?? [];
	const quickStartTemplates = useMemo(() => starterTemplates.slice(0, 6), [starterTemplates]);
	const allTemplatesForHighlighted = useMemo(() => browseTemplates.slice(0, 20), [browseTemplates]);
	const { templateByLanguage, highlighted } = useMemo(() => {
		const combined = [...quickStartTemplates];
		const seen = new Set(quickStartTemplates.map((t$1) => t$1.id));
		for (const t$1 of allTemplatesForHighlighted) if (!seen.has(t$1.id)) {
			seen.add(t$1.id);
			combined.push(t$1);
		}
		const byLanguage = {};
		for (const lang of LANGUAGE_RUNTIMES) {
			if (byLanguage[lang]) continue;
			const supportsLang = (t$1) => (t$1.runtimes ?? []).some((r) => getRuntimeBase(r) === lang);
			const template = combined.find((t$1) => t$1.id === "starter" && supportsLang(t$1)) ?? null ?? combined.find((t$1) => supportsLang(t$1)) ?? void 0;
			if (template) byLanguage[lang] = template;
		}
		const starterIds = new Set(quickStartTemplates.map((t$1) => t$1.id));
		return {
			templateByLanguage: byLanguage,
			highlighted: allTemplatesForHighlighted.filter((t$1) => !starterIds.has(t$1.id)).slice(0, 8)
		};
	}, [quickStartTemplates, allTemplatesForHighlighted]);
	const hasInstallations = installations.length > 0;
	const handleSelectRepository = (repo) => {
		updateFormData({
			installationId: selectedInstallationId,
			providerRepositoryId: repo.id,
			repositoryOwner: repo.organization,
			repositoryName: repo.name,
			repositoryUrl: repo.url,
			functionName: repo.name || ""
		});
		navigate({
			to: "/projects/$projectId/functions/create/repository/$repository",
			params: {
				projectId,
				repository: encodeURIComponent(`${repo.organization || ""}/${repo.name || ""}`)
			},
			search: {
				installationId: selectedInstallationId,
				providerRepositoryId: repo.id
			}
		});
	};
	return /* @__PURE__ */ jsxs(WizardLayout, {
		title: t("Create function"),
		fallbackPath: `/projects/${projectId}/functions`,
		fullscreen: true,
		useSidebar: false,
		maxWidth: "max-w-[1400px]",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "grid items-stretch gap-12 lg:grid-cols-5",
			children: [/* @__PURE__ */ jsx(CreateWizardLeftColumn, {
				title: t("Connect Git repository"),
				children: !hasInstallations ? /* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-border bg-card/50 p-6 text-center",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex justify-center mb-3",
							children: /* @__PURE__ */ jsx("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted",
								children: /* @__PURE__ */ jsx(GitBranch, { className: "h-5 w-5 text-muted-foreground" })
							})
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "text-[13px] font-medium text-foreground mb-1",
							children: t("Connect Git provider")
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-[11px] text-muted-foreground mb-3",
							children: t("Connect a repository to deploy functions from your codebase")
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center justify-center gap-2",
							children: [
								/* @__PURE__ */ jsx(Button, {
									size: "sm",
									variant: "secondary",
									asChild: true,
									children: /* @__PURE__ */ jsxs("a", {
										href: getGitHubAuthUrl,
										children: [/* @__PURE__ */ jsx(VcsIcon, {
											type: "github",
											className: "me-1.5 h-3.5 w-3.5"
										}), t("Connect GitHub")]
									})
								}),
								/* @__PURE__ */ jsx(Button, {
									size: "sm",
									variant: "secondary",
									asChild: true,
									children: /* @__PURE__ */ jsxs("a", {
										href: getVcsAuthUrl("gitlab"),
										children: [/* @__PURE__ */ jsx(VcsIcon, {
											type: "gitlab",
											className: "me-1.5 h-3.5 w-3.5"
										}), t("Connect GitLab")]
									})
								}),
								/* @__PURE__ */ jsx(Button, {
									size: "sm",
									variant: "secondary",
									asChild: true,
									children: /* @__PURE__ */ jsxs("a", {
										href: getVcsAuthUrl("bitbucket"),
										children: [/* @__PURE__ */ jsx(VcsIcon, {
											type: "bitbucket",
											className: "me-1.5 h-3.5 w-3.5"
										}), t("Connect Bitbucket")]
									})
								}),
								/* @__PURE__ */ jsx(Button, {
									size: "sm",
									variant: "secondary",
									asChild: true,
									children: /* @__PURE__ */ jsxs("a", {
										href: getVcsAuthUrl("origin"),
										children: [/* @__PURE__ */ jsx(VcsIcon, {
											type: "origin",
											className: "me-1.5 h-3.5 w-3.5"
										}), t("Connect Origin")]
									})
								})
							]
						})
					]
				}) : /* @__PURE__ */ jsxs("div", {
					className: "flex flex-1 flex-col",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-4 flex items-center gap-2",
							children: [
								/* @__PURE__ */ jsxs(Select, {
									value: selectedOptionKey,
									onValueChange: (key) => selectOption(key),
									onOpenChange: (open) => {
										if (!open) setOrgFilter("");
									},
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										className: "w-[200px] h-9 text-[13px]",
										children: /* @__PURE__ */ jsx(SelectValue, {
											placeholder: t("Select organization"),
											children: selectedOption && /* @__PURE__ */ jsxs("span", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx(VcsIcon, {
													type: selectedOption.provider,
													className: "h-4 w-4 shrink-0"
												}), /* @__PURE__ */ jsx("span", {
													className: "truncate",
													children: selectedOption.label
												})]
											})
										})
									}), /* @__PURE__ */ jsxs(SelectContent, { children: [
										/* @__PURE__ */ jsx("div", {
											className: "px-1 pb-1 mb-1 border-b border-border",
											onKeyDown: (e) => e.stopPropagation(),
											children: /* @__PURE__ */ jsxs("div", {
												className: "relative",
												children: [/* @__PURE__ */ jsx(Search, { className: "absolute start-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground pointer-events-none" }), /* @__PURE__ */ jsx(Input, {
													value: orgFilter,
													onChange: (e) => setOrgFilter(e.target.value),
													placeholder: t("Filter organizations..."),
													className: "h-8 ps-7 text-[12px]"
												})]
											})
										}),
										filteredOrgOptions.length > 0 ? filteredOrgOptions.map((option) => /* @__PURE__ */ jsx(SelectItem, {
											value: option.key,
											children: /* @__PURE__ */ jsxs("span", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ jsx(VcsIcon, {
													type: option.provider,
													className: "h-4 w-4 shrink-0"
												}), /* @__PURE__ */ jsx("span", { children: option.label })]
											})
										}, option.key)) : /* @__PURE__ */ jsx("p", {
											className: "px-2 py-1.5 text-[12px] text-muted-foreground",
											children: t("No matches")
										}),
										/* @__PURE__ */ jsx("div", {
											className: "border-t border-border mt-1 pt-1",
											children: Object.values(VCS_PROVIDERS).map((p) => /* @__PURE__ */ jsxs("a", {
												href: getVcsAuthUrl(p.id),
												className: "flex items-center gap-2 px-2 py-1.5 text-[11px] text-muted-foreground hover:text-foreground",
												children: [/* @__PURE__ */ jsx(p.Icon, { className: "h-3 w-3" }), t(`Add ${p.label} account`)]
											}, p.id))
										})
									] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "relative flex-1",
									children: [/* @__PURE__ */ jsx(Search, { className: "absolute start-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" }), /* @__PURE__ */ jsx(Input, {
										value: repoSearch,
										onChange: (e) => setRepoSearch(e.target.value),
										placeholder: t("Search repositories..."),
										className: "h-9 ps-9 text-[13px]"
									})]
								}),
								/* @__PURE__ */ jsx(RefreshButton, {
									onClick: () => refetchRepos(),
									isRefreshing: reposFetching,
									tooltip: t("Refresh repositories")
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "rounded-lg border border-border overflow-hidden mb-4",
							children: reposLoading ? /* @__PURE__ */ jsx("div", {
								className: "divide-y divide-border",
								children: Array.from({ length: REPO_PAGE_SIZE }).map((_, i) => /* @__PURE__ */ jsx(RepositorySkeleton, {
									index: i,
									provider: selectedInstallation?.provider
								}, i))
							}) : repositories.length > 0 ? /* @__PURE__ */ jsx("div", {
								className: cn("divide-y divide-border", reposFetching && "opacity-60 pointer-events-none"),
								children: repositories.map((repo) => /* @__PURE__ */ jsxs("div", {
									className: "flex w-full items-center gap-3 px-4 py-3.5 hover:bg-accent/50 transition-colors",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "flex h-7 w-7 shrink-0 items-center justify-center rounded bg-muted/50 text-muted-foreground",
											children: repo.runtime ? /* @__PURE__ */ jsx(RuntimeIcon, {
												runtime: repo.runtime,
												size: "sm"
											}) : /* @__PURE__ */ jsx(VcsIcon, {
												type: selectedInstallation?.provider,
												className: "h-3.5 w-3.5"
											})
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex-1 min-w-0 flex items-center gap-2",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "text-[13px] font-medium text-foreground truncate",
													children: repo.name
												}),
												repo.private && /* @__PURE__ */ jsx(Lock, { className: "h-3 w-3 shrink-0 text-muted-foreground/70" }),
												repo.pushedAt && /* @__PURE__ */ jsx("span", {
													className: "text-[11px] text-muted-foreground shrink-0",
													children: /* @__PURE__ */ jsx(DateTooltip, { date: repo.pushedAt })
												})
											]
										}),
										/* @__PURE__ */ jsx(Button, {
											size: "sm",
											variant: "outline",
											className: "h-7 text-[12px] shrink-0",
											onClick: () => handleSelectRepository(repo),
											children: t("Connect")
										})
									]
								}, repo.id))
							}) : installationErrorKind ? /* @__PURE__ */ jsx("div", {
								className: "px-4 py-8",
								children: /* @__PURE__ */ jsx(VcsInstallationErrorState, {
									kind: installationErrorKind,
									provider: selectedInstallation?.provider,
									organization: selectedInstallation?.organization,
									reconnectUrl,
									onRetry: () => refetchRepos(),
									isRetrying: reposFetching,
									className: "py-0"
								})
							}) : /* @__PURE__ */ jsx("div", {
								className: "py-8 text-center",
								children: /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground",
									children: repoSearch ? t("No repositories found") : t("No repositories available")
								})
							})
						}),
						!installationErrorKind && /* @__PURE__ */ jsx(SimplePagination, {
							currentPage: repoPage,
							hasMore: hasMoreRepos,
							onPageChange: setRepoPage,
							disabled: reposFetching
						}),
						(() => {
							if (installationErrorKind) return null;
							const knownProvider = getKnownVcsProvider(selectedInstallation?.provider);
							if (!knownProvider) return null;
							return /* @__PURE__ */ jsx("div", {
								className: "mt-8 rounded-lg border border-border bg-muted/30 px-4 py-4",
								children: /* @__PURE__ */ jsxs("p", {
									className: "text-[12px] text-muted-foreground",
									children: [
										t("Missing a repository?"),
										" ",
										/* @__PURE__ */ jsxs("a", {
											href: getVcsAuthUrl(knownProvider.id, "update"),
											className: "link-neutral inline-flex items-center gap-1 font-medium",
											children: [t("Check your permissions"), /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
										})
									]
								})
							});
						})()
					]
				})
			}), /* @__PURE__ */ jsx(CreateWizardRightColumn, {
				title: t("Clone template"),
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex h-full min-h-0 flex-col gap-8",
					children: [/* @__PURE__ */ jsx("div", {
						className: "grid shrink-0 grid-cols-2 gap-3 sm:grid-cols-3",
						children: LANGUAGE_RUNTIMES.map((lang) => /* @__PURE__ */ jsx(LanguageCard, {
							projectId,
							language: lang,
							template: templateByLanguage[lang] ?? null
						}, lang))
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex min-h-0 flex-1 flex-col",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "mb-4 flex shrink-0 items-center justify-between gap-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[13px] font-semibold leading-none text-foreground",
								children: t("More templates")
							}), /* @__PURE__ */ jsxs(Link, {
								to: "/projects/$projectId/functions/templates",
								params: { projectId },
								className: "inline-flex shrink-0 items-center gap-1 text-[13px] font-medium leading-none link-neutral",
								children: [t("View all templates"), /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" })]
							})]
						}), highlighted.length > 0 ? /* @__PURE__ */ jsx("div", {
							className: MORE_TEMPLATES_GRID_CLASSNAME,
							children: highlighted.map((template) => /* @__PURE__ */ jsx(TemplateCard, {
								projectId,
								template
							}, template.id))
						}) : /* @__PURE__ */ jsx(EmptyState, {
							icon: LayoutTemplate,
							title: t("No additional templates"),
							description: t("More highlighted templates will show here when the catalog includes them."),
							isEmpty: true,
							hasFilters: false,
							variant: "card"
						})]
					})]
				})
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-6 pt-6 border-t border-border",
			children: /* @__PURE__ */ jsxs("p", {
				className: "text-[12px] text-muted-foreground",
				children: [
					t("You can also"),
					" ",
					/* @__PURE__ */ jsx(Link, {
						to: "/projects/$projectId/functions/create/manual",
						params: { projectId },
						className: "link-neutral",
						children: t("create a function manually")
					}),
					",",
					" ",
					/* @__PURE__ */ jsx(Link, {
						to: "/projects/$projectId/functions/create/deploy",
						params: { projectId },
						className: "link-neutral",
						children: t("deploy from URL")
					}),
					", ",
					t("or using the CLI."),
					" ",
					/* @__PURE__ */ jsx(DocsRouteLink, {
						className: "link-neutral",
						href: "/docs/functions",
						children: t("Learn more")
					})
				]
			})
		})]
	});
}
function CreateFunctionPage() {
	return /* @__PURE__ */ jsx(CreateFunctionView, {});
}
export { CreateFunctionPage as component };
