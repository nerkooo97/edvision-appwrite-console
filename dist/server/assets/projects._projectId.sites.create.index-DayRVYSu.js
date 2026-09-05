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
import "./constants-BDeF927R.js";
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
import "./affiliates-BOg1SHC6.js";
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
import { t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./command-Cizl9kMJ.js";
import { t as Skeleton } from "./skeleton-8d0Q_D56.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import "./EmptyState-DZDwceHm.js";
import "./dropdown-menu-DH51wH-m.js";
import { n as SimplePagination } from "./Pagination-BDei8M4v.js";
import "./alert-BTaNwkUC.js";
import "./tooltip-DUssQZhw.js";
import { t as FrameworkIcon } from "./FrameworkIcon-DTkSe6r3.js";
import { a as getKnownVcsProvider, i as buildVcsOrgOptions, n as VcsIcon, r as buildVcsAuthUrl, t as VCS_PROVIDERS } from "./providers-8aVvAoJZ.js";
import { t as RefreshButton } from "./RefreshButton-BA9lQ7jC.js";
import { t as SiteTemplateGallery } from "./SiteTemplateGallery-BcxGi_qq.js";
import "./WarningAlert-ZIbpbrZO.js";
import { r as VcsInstallationErrorState, t as useVcsInstallationReconnect } from "./use-installation-reconnect-BUTVp2Vb.js";
import { n as CreateWizardRightColumn, t as CreateWizardLeftColumn } from "./CreateWizardColumns-N6SbyMed.js";
import { n as useWizard } from "./WizardContext-BjDTRlef.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { VCSDetectionType } from "@appwrite.io/console";
import { GitBranch, Lock, Search } from "lucide-react";
var REPO_PAGE_SIZE = 7;
var DEFAULT_TEMPLATE_PAGE_SIZE = 9;
function getFrameworkString(framework) {
	if (!framework) return "";
	if (typeof framework === "string") return framework;
	if (typeof framework === "object" && framework !== null) {
		const obj = framework;
		if (typeof obj.key === "string") return obj.key;
		if (typeof obj.name === "string") return obj.name;
		if (typeof obj.id === "string") return obj.id;
	}
	return "";
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
function CreateSiteView() {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const { installations, updateFormData, setCurrentPath } = useWizard();
	const { project } = useProject(projectId);
	const projectEndpoint = useMemo(() => getApiEndpoint(project?.region), [project?.region]);
	const [selectedInstallationId, setSelectedInstallationId] = useState("");
	const getVcsAuthUrl = useMemo(() => {
		return (provider = "github", mode = "create") => {
			if (typeof window === "undefined" || !projectId) return "#";
			let redirectUrl = `${window.location.origin}/projects/${projectId}/sites/create`;
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
	const [orgFilter, setOrgFilter] = useState("");
	const filteredOrgOptions = useMemo(() => orgFilter.trim() ? orgOptions.filter((o) => o.label.toLowerCase().includes(orgFilter.trim().toLowerCase())) : orgOptions, [orgOptions, orgFilter]);
	const selectOption = (key) => {
		const option = orgOptions.find((o) => o.key === key);
		if (!option) return;
		setSelectedInstallationId(option.installationId);
		setSelectedNamespace(option.providerNamespace ?? "");
		setRepoPage(1);
	};
	useEffect(() => {
		setCurrentPath("repository");
	}, [setCurrentPath]);
	const hasAutoSelectedInstallation = useRef(false);
	useEffect(() => {
		if (installations.length > 0 && !selectedInstallationId && !hasAutoSelectedInstallation.current) {
			hasAutoSelectedInstallation.current = true;
			const twoMinutesAgo = /* @__PURE__ */ new Date(Date.now() - 30 * 1e3);
			const recentInstallation = installations.find((inst) => {
				return new Date(inst.$createdAt) > twoMinutesAgo;
			});
			if (recentInstallation) {
				setSelectedInstallationId(recentInstallation.$id);
				return;
			}
			if (typeof window !== "undefined") {
				const installationFromUrl = new URLSearchParams(window.location.search).get("installation");
				if (installationFromUrl && installations.some((inst) => inst.$id === installationFromUrl)) {
					setSelectedInstallationId(installationFromUrl);
					return;
				}
			}
			setSelectedInstallationId(installations[0].$id);
		}
	}, [installations, selectedInstallationId]);
	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedRepoSearch(repoSearch);
			setRepoPage(1);
		}, 300);
		return () => clearTimeout(timer);
	}, [repoSearch]);
	const { data: repositoriesData, isLoading: reposLoading, isFetching: reposFetching, error: reposError, refetch: refetchRepos } = useRepositories(projectId, selectedInstallationId || null, VCSDetectionType.Framework, repoPage - 1, REPO_PAGE_SIZE, debouncedRepoSearch || void 0, selectedNamespace || void 0);
	const repositories = useMemo(() => {
		return repositoriesData?.frameworkProviderRepositories || [];
	}, [repositoriesData]);
	const hasMoreRepos = repositories.length === REPO_PAGE_SIZE;
	const hasInstallations = installations.length > 0;
	const reposErrorKind = getVcsInstallationErrorKind(reposError);
	const reconnectReturnUrl = useMemo(() => {
		if (typeof window === "undefined" || !projectId) return void 0;
		const base = `${window.location.origin}/projects/${projectId}/sites/create`;
		return selectedInstallationId ? `${base}?installation=${selectedInstallationId}` : base;
	}, [projectId, selectedInstallationId]);
	const { reconnectUrl } = useVcsInstallationReconnect(projectId, selectedInstallationId || null, reconnectReturnUrl);
	const handleSelectRepository = (repo) => {
		const installationId = selectedInstallationId;
		const providerRepositoryId = repo.id;
		updateFormData({
			installationId,
			providerRepositoryId,
			repositoryOwner: repo.organization,
			repositoryName: repo.name,
			repositoryUrl: repo.url,
			siteName: repo.name
		});
		navigate({
			to: "/projects/$projectId/sites/create/repositories/$installationId/$repositoryId",
			params: {
				projectId,
				installationId,
				repositoryId: providerRepositoryId
			}
		});
	};
	const handleSelectTemplate = (template) => {
		updateFormData({
			templateId: template.key,
			template,
			siteName: template.name,
			framework: getFrameworkString(template.frameworks?.[0])
		});
		navigate({
			to: "/projects/$projectId/sites/create/templates/$template",
			params: {
				projectId,
				template: encodeURIComponent(template.key)
			}
		});
	};
	return /* @__PURE__ */ jsxs(WizardLayout, {
		title: t("Create site"),
		fallbackPath: `/projects/${projectId}/sites`,
		fullscreen: true,
		useSidebar: false,
		maxWidth: "max-w-[1400px]",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "grid gap-12 lg:grid-cols-5",
			children: [/* @__PURE__ */ jsx(CreateWizardLeftColumn, {
				title: t("Import repository"),
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
							children: t("Import repositories for automatic deployments")
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
										placeholder: t("Search..."),
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
											children: repo.framework ? /* @__PURE__ */ jsx(FrameworkIcon, {
												framework: repo.framework,
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
							}) : reposErrorKind ? /* @__PURE__ */ jsx("div", {
								className: "py-8 px-4",
								children: /* @__PURE__ */ jsx(VcsInstallationErrorState, {
									kind: reposErrorKind,
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
						/* @__PURE__ */ jsx(SimplePagination, {
							currentPage: repoPage,
							hasMore: hasMoreRepos,
							onPageChange: setRepoPage,
							disabled: reposFetching
						}),
						(() => {
							if (reposErrorKind) return null;
							const knownProvider = getKnownVcsProvider(selectedInstallation?.provider);
							if (!knownProvider) return null;
							return /* @__PURE__ */ jsxs("div", {
								className: "mt-8 rounded-lg border border-border bg-muted/30 px-4 py-4",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "text-[14px] font-semibold text-foreground leading-tight mb-1.5",
										children: t("Can't find a repository?")
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground leading-snug mb-3",
										children: t("If you selected specific repositories during setup, you may need to update your permissions to include additional ones.")
									}),
									/* @__PURE__ */ jsxs("a", {
										href: getVcsAuthUrl(knownProvider.id, "update"),
										className: "inline-flex items-center gap-1.5 text-[12px] link-neutral",
										children: [/* @__PURE__ */ jsx(VcsIcon, {
											type: knownProvider.id,
											className: "h-3.5 w-3.5"
										}), t(`Update ${knownProvider.label} permissions`)]
									})
								]
							});
						})()
					]
				})
			}), /* @__PURE__ */ jsx(CreateWizardRightColumn, {
				title: t("Clone template"),
				children: projectId ? /* @__PURE__ */ jsx(SiteTemplateGallery, {
					projectId,
					defaultPageSize: DEFAULT_TEMPLATE_PAGE_SIZE,
					pageSizeOptions: [
						12,
						18,
						36,
						72
					],
					onSelectTemplate: handleSelectTemplate
				}) : null
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-6 pt-6 border-t border-border",
			children: /* @__PURE__ */ jsxs("p", {
				className: "text-[12px] text-muted-foreground",
				children: [
					t("Want to deploy without connecting a repository or using a template?"),
					" ",
					/* @__PURE__ */ jsx(Link, {
						to: "/projects/$projectId/sites/create/manual",
						params: { projectId },
						className: "link-neutral",
						children: t("Upload your website manually")
					})
				]
			})
		})]
	});
}
function CreateSitePage() {
	return /* @__PURE__ */ jsx(CreateSiteView, {});
}
export { CreateSitePage as component };
