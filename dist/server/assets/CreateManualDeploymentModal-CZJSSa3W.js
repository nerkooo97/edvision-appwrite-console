import { d as sdk, o as getApiEndpoint } from "./sdk-DjIJ_hjn.js";
import { v as orderCliShellTabs, x as resolveDefaultCliShellTab } from "./i18n-Db4baE06.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { a as getVcsInstallationErrorKind } from "./error-formatting-CL2hjGy5.js";
import { Ms as useRepository, Ns as useVcsInstallations, ws as repositoryBranchesQueryOptions } from "./hooks-BONwG3Mt.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { In as buildFunctionUpdateParams, Ot as buildSiteUpdateParams } from "./affiliates-BOg1SHC6.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-XaWkg9jR.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import { t as CodeBlock } from "./CodeBlock-BGAzMP_K.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { a as DropdownMenuItem, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { n as openDialogAfterOverlayCloses, t as closeDialogBeforeOverlayUnmount } from "./overlay-lock-CIY7GeXu.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { t as useUserOs } from "./use-user-os-Cwg5asTC.js";
import { r as buildVcsAuthUrl } from "./providers-8aVvAoJZ.js";
import { n as VcsInstallationErrorAlert, t as useVcsInstallationReconnect } from "./use-installation-reconnect-BUTVp2Vb.js";
import { t as BranchSelector } from "./BranchSelector-M6Yn8zIS.js";
import { t as RepositoryPicker } from "./RepositoryPicker-BTzJ0oV8.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { VCSReferenceType } from "@appwrite.io/console";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowLeft, ChevronDown, ExternalLink, FileArchive, GitBranch, Info, Loader2, Plus, Terminal, Upload } from "lucide-react";
var CreateDeploymentContext = createContext(null);
function useCreateDeployment() {
	return useContext(CreateDeploymentContext);
}
function CreateDeploymentProvider({ children, onOpenGit, onOpenCli, onOpenManual }) {
	const value = {
		openGitModal: onOpenGit,
		openCliModal: onOpenCli,
		openManualModal: onOpenManual
	};
	return /* @__PURE__ */ jsx(CreateDeploymentContext.Provider, {
		value,
		children
	});
}
function CreateDeploymentDropdown({ onSelectGit, onSelectCli, onSelectManual, disabled = false, disabledTooltip, className }) {
	const t = useT();
	const trigger = /* @__PURE__ */ jsxs(Button, {
		variant: "brandCta",
		size: "sm",
		disabled,
		className: `h-9 gap-2 text-[13px] font-medium disabled:opacity-50 disabled:cursor-not-allowed ${className ?? ""}`,
		...analyticsAttrs("create-deployment"),
		children: [
			/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
			t("Create deployment"),
			/* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
		]
	});
	return /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
		asChild: true,
		disabled,
		children: disabled && disabledTooltip ? /* @__PURE__ */ jsx(TooltipProvider, {
			delayDuration: 0,
			children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx("div", {
					className: "inline-flex",
					children: trigger
				})
			}), /* @__PURE__ */ jsx(TooltipContent, {
				side: "bottom",
				children: /* @__PURE__ */ jsx("p", { children: disabledTooltip })
			})] })
		}) : trigger
	}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
		align: "end",
		className: "w-[220px]",
		children: [
			/* @__PURE__ */ jsxs(DropdownMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(onSelectGit),
				className: "flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-[13px] text-foreground hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground",
				children: [
					/* @__PURE__ */ jsx(GitBranch, { className: "h-4 w-4" }),
					/* @__PURE__ */ jsx("span", { children: "Git" }),
					/* @__PURE__ */ jsx("span", {
						className: "ms-auto text-[11px] text-muted-foreground",
						children: t("Recommended")
					})
				]
			}),
			/* @__PURE__ */ jsxs(DropdownMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(onSelectCli),
				className: "flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-[13px] text-foreground hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground",
				children: [/* @__PURE__ */ jsx(Terminal, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: "CLI" })]
			}),
			/* @__PURE__ */ jsxs(DropdownMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(onSelectManual),
				className: "flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-[13px] text-foreground hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground",
				children: [/* @__PURE__ */ jsx(Upload, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: t("Manual") })]
			})
		]
	})] });
}
var FUNCTIONS_DEPLOY_DOCS = "/docs/products/functions/deployments#create-deployment";
var SITES_DEPLOY_DOCS = "/docs/products/sites/deployments#create-deployment";
function CreateGitDeploymentModal({ open, onOpenChange, resourceType, projectId, resourceId, resource, onSuccess }) {
	const t = useT();
	const queryClient = useQueryClient();
	const hasLinkedRepo = Boolean(resource.installationId && resource.providerRepositoryId);
	const [branch, setBranch] = useState(resource.providerBranch || "main");
	const [activate, setActivate] = useState(true);
	const [selectedInstallationId, setSelectedInstallationId] = useState("");
	const [selectedRepositoryId, setSelectedRepositoryId] = useState("");
	const [selectedRepoPushedAt, setSelectedRepoPushedAt] = useState(null);
	const [selectedRepoDisplayName, setSelectedRepoDisplayName] = useState(null);
	const { data: repository, error: repositoryError, isFetching: repositoryFetching, refetch: refetchRepository } = useRepository(projectId, hasLinkedRepo ? resource.installationId ?? null : null, hasLinkedRepo ? resource.providerRepositoryId ?? null : null);
	const { data: installationsData } = useVcsInstallations(projectId);
	const installations = useMemo(() => installationsData?.installations ?? [], [installationsData?.installations]);
	const { project } = useProject(projectId ?? void 0);
	const getVcsAuthUrl = useMemo(() => {
		return (provider = "github") => {
			if (typeof window === "undefined" || !projectId) return "#";
			const redirectUrl = `${window.location.origin}${resourceType === "site" ? `/projects/${projectId}/sites/${resourceId}` : `/projects/${projectId}/functions/${resourceId}`}`;
			return buildVcsAuthUrl({
				endpoint: getApiEndpoint(project?.region),
				provider,
				projectId,
				successUrl: redirectUrl,
				failureUrl: redirectUrl
			});
		};
	}, [
		projectId,
		resourceId,
		resourceType,
		project?.region
	]);
	const getGitHubAuthUrl = getVcsAuthUrl("github");
	useEffect(() => {
		if (resource.providerBranch) setBranch(resource.providerBranch);
		else setBranch("main");
	}, [resource.providerBranch, open]);
	useEffect(() => {
		if (installations.length > 0 && !selectedInstallationId) setSelectedInstallationId(installations[0].$id);
	}, [installations, selectedInstallationId]);
	const linkRepoThenDeployMutation = useMutation({
		mutationFn: async () => {
			const projectSdk = sdk.forProject(projectId);
			const installationId$1 = hasLinkedRepo ? resource.installationId : selectedInstallationId;
			const providerRepositoryId$1 = hasLinkedRepo ? resource.providerRepositoryId : selectedRepositoryId;
			const ref = branch.trim();
			if (!hasLinkedRepo && resourceType === "function") {
				const func = resource;
				await projectSdk.functions.update(buildFunctionUpdateParams(func, {
					installationId: installationId$1,
					providerRepositoryId: providerRepositoryId$1,
					providerBranch: ref
				}));
			}
			if (!hasLinkedRepo && resourceType === "site") {
				const site = resource;
				await projectSdk.sites.update(buildSiteUpdateParams(site, {
					installationId: installationId$1,
					providerRepositoryId: providerRepositoryId$1,
					providerBranch: ref
				}));
			}
			if (resourceType === "function") return await projectSdk.functions.createVcsDeployment({
				functionId: resourceId,
				type: VCSReferenceType.Branch,
				reference: ref,
				activate
			});
			return await projectSdk.sites.createVcsDeployment({
				siteId: resourceId,
				type: VCSReferenceType.Branch,
				reference: ref,
				activate
			});
		},
		onSuccess: () => {
			closeDialogBeforeOverlayUnmount(() => {
				onOpenChange(false);
			});
			const deployKey = resourceType === "function" ? [
				"deployments",
				"function",
				projectId,
				resourceId
			] : [
				"deployments",
				"site",
				projectId,
				resourceId
			];
			queryClient.refetchQueries({ queryKey: deployKey });
			if (resourceType === "site") queryClient.invalidateQueries({ queryKey: [
				"site",
				"project",
				projectId,
				resourceId
			] });
			if (resourceType === "function") queryClient.invalidateQueries({ queryKey: [
				"function",
				"project",
				projectId,
				resourceId
			] });
			if (activate) toast.success(t("Deployment is in progress. It will be automatically activated after build step completes."));
			else toast.success(t("Deployment is in progress. You can activate it after build step completes."));
			onSuccess?.();
		},
		onError: (err) => {
			toast.error(err?.message ?? t("Failed to create deployment"));
		}
	});
	const handleSubmit = () => {
		if (!hasLinkedRepo && (!selectedInstallationId || !selectedRepositoryId)) {
			toast.error(t("Please select an installation and repository"));
			return;
		}
		if (!branch.trim()) {
			toast.error(t("Please select a branch"));
			return;
		}
		linkRepoThenDeployMutation.mutate();
	};
	const installationId = hasLinkedRepo ? resource.installationId ?? void 0 : selectedInstallationId || void 0;
	const providerRepositoryId = hasLinkedRepo ? resource.providerRepositoryId ?? void 0 : selectedRepositoryId || void 0;
	const { error: branchesError, isFetching: branchesFetching, refetch: refetchBranches } = useQuery({
		...repositoryBranchesQueryOptions(projectId, installationId, providerRepositoryId),
		enabled: open && !!installationId && !!providerRepositoryId
	});
	const installationErrorKind = getVcsInstallationErrorKind(repositoryError) ?? getVcsInstallationErrorKind(branchesError) ?? getVcsInstallationErrorKind(linkRepoThenDeployMutation.error);
	const { provider: reconnectProvider, organization: reconnectOrganization, reconnectUrl } = useVcsInstallationReconnect(projectId, installationId);
	const handleRetryInstallation = () => {
		linkRepoThenDeployMutation.reset();
		refetchRepository();
		refetchBranches();
	};
	const docsUrl = resourceType === "function" ? FUNCTIONS_DEPLOY_DOCS : SITES_DEPLOY_DOCS;
	const isPending = linkRepoThenDeployMutation.isPending;
	const showRepoPicker = !hasLinkedRepo && !selectedRepositoryId;
	const showNextSteps = hasLinkedRepo || selectedRepositoryId;
	const handleRepositorySelect = (repo) => {
		setSelectedRepositoryId(repo.id);
		setSelectedRepoPushedAt(repo.pushedAt ?? null);
		setSelectedRepoDisplayName([repo.organization, repo.name].filter(Boolean).join("/") || null);
	};
	const handleBackToRepoPicker = () => {
		setSelectedRepositoryId("");
		setSelectedRepoPushedAt(null);
		setSelectedRepoDisplayName(null);
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-lg p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Create git deployment") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: showRepoPicker ? t("Select a repository to deploy from. You can change it later in settings.") : t("Choose the production branch and whether to activate the deployment after the build completes.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 pb-4 pt-0 space-y-4",
					children: showRepoPicker ? /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
						className: "text-[13px]",
						children: t("Repository")
					}), /* @__PURE__ */ jsx(RepositoryPicker, {
						projectId,
						getGitHubAuthUrl,
						getVcsAuthUrl,
						installations,
						selectedInstallationId,
						onInstallationChange: setSelectedInstallationId,
						selectedRepositoryId,
						onRepositorySelect: handleRepositorySelect,
						mode: "connect",
						detectionType: resourceType === "function" ? "runtime" : "framework",
						className: "mt-2"
					})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
						installationErrorKind && /* @__PURE__ */ jsx(VcsInstallationErrorAlert, {
							kind: installationErrorKind,
							provider: reconnectProvider,
							organization: reconnectOrganization,
							reconnectUrl,
							onRetry: handleRetryInstallation,
							isRetrying: repositoryFetching || branchesFetching,
							children: t("Appwrite could not read this repository, so a deployment created now would fail to build.")
						}),
						hasLinkedRepo && repository && /* @__PURE__ */ jsxs("div", {
							className: "rounded-lg border border-border bg-muted/20 px-3 py-2",
							children: [
								/* @__PURE__ */ jsxs("p", {
									className: "text-[13px] font-medium text-foreground truncate",
									children: [
										repository.organization,
										"/",
										repository.name
									]
								}),
								repository.pushedAt && /* @__PURE__ */ jsxs("p", {
									className: "text-[12px] text-muted-foreground mt-1",
									children: [
										t("Last updated"),
										" ",
										/* @__PURE__ */ jsx(DateTooltip, { date: repository.pushedAt })
									]
								}),
								repository.url && /* @__PURE__ */ jsxs("a", {
									href: repository.url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-1 link-neutral text-[12px] mt-1",
									children: [
										t("Open"),
										" ",
										/* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3" })
									]
								})
							]
						}),
						!hasLinkedRepo && selectedRepositoryId && /* @__PURE__ */ jsxs("div", {
							className: "rounded-lg border border-border bg-muted/20 px-3 py-2",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-[13px] font-medium text-foreground truncate",
									children: selectedRepoDisplayName ?? t("Repository")
								}),
								selectedRepoPushedAt && /* @__PURE__ */ jsxs("p", {
									className: "text-[12px] text-muted-foreground mt-1",
									children: [
										t("Last updated"),
										" ",
										/* @__PURE__ */ jsx(DateTooltip, { date: selectedRepoPushedAt })
									]
								}),
								/* @__PURE__ */ jsxs(Button, {
									type: "button",
									variant: "ghost",
									size: "sm",
									className: "h-7 text-[12px] text-muted-foreground hover:text-foreground mt-1 -ms-1",
									onClick: handleBackToRepoPicker,
									children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-3 w-3 me-1" }), t("Change repository")]
								})
							]
						}),
						/* @__PURE__ */ jsx(BranchSelector, {
							projectId,
							installationId,
							providerRepositoryId,
							value: branch,
							onChange: setBranch,
							label: t("Production branch"),
							placeholder: t("Select branch"),
							suppressInstallationError: !!installationErrorKind
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(Checkbox, {
								id: "activate-after-build",
								checked: activate,
								onCheckedChange: (v) => setActivate(v === true)
							}), /* @__PURE__ */ jsx(Label, {
								htmlFor: "activate-after-build",
								className: "text-[13px] font-normal cursor-pointer",
								children: t("Activate deployment after build")
							})]
						}),
						/* @__PURE__ */ jsxs(DocsRouteLink, {
							href: docsUrl,
							className: "inline-flex items-center gap-1 link-neutral text-[12px]",
							children: [
								t("Deployment docs"),
								" ",
								/* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3" })
							]
						})
					] })
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [showNextSteps && /* @__PURE__ */ jsxs(Fragment, { children: [
						!hasLinkedRepo && /* @__PURE__ */ jsxs(Button, {
							variant: "ghost",
							onClick: handleBackToRepoPicker,
							disabled: isPending,
							className: "h-9 text-[13px] me-auto sm:me-0 sm:order-first",
							children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-3.5 w-3.5 me-1.5" }), t("Back")]
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							onClick: () => onOpenChange(false),
							disabled: isPending,
							className: "h-9 text-[13px]",
							children: t("Cancel")
						}),
						/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsx("span", {
								className: "inline-flex",
								children: /* @__PURE__ */ jsx(Button, {
									onClick: handleSubmit,
									disabled: isPending || !branch?.trim() || !!installationErrorKind,
									className: "h-9 text-[13px]",
									children: t("Create deployment")
								})
							})
						}), installationErrorKind ? /* @__PURE__ */ jsx(TooltipContent, {
							className: "max-w-xs text-[13px]",
							children: t("The Git installation could not be reached, so this deployment cannot be created.")
						}) : null] })
					] }), showRepoPicker && /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => onOpenChange(false),
						className: "h-9 text-[13px] ms-auto",
						children: t("Cancel")
					})]
				})
			]
		})
	});
}
var CLI_INSTALL_URL = "/docs/tooling/command-line/installation#install-with-npm";
var CLI_LOGIN_URL = "/docs/tooling/command-line/installation#login";
function buildCommands(resourceType, projectId, resourceId, siteBuildConfig) {
	if (resourceType === "function") return {
		unix: `appwrite client --project-id="${projectId}" && \\
appwrite functions create-deployment \\
    --function-id=${resourceId} \\
    --code="." \\
    --activate=true`,
		cmd: `appwrite client --project-id="${projectId}" && ^
appwrite functions create-deployment ^
    --function-id=${resourceId} ^
    --code="." ^
    --activate`,
		powershell: `appwrite client --project-id="${projectId}" ;
appwrite functions create-deployment ,
    --function-id=${resourceId} ,
    --code="." ,
    --activate`
	};
	const codePath = `./sites/${siteBuildConfig?.framework || "react"}`;
	const buildCommand = siteBuildConfig?.buildCommand?.trim() || "";
	const installCommand = siteBuildConfig?.installCommand?.trim() || "";
	const startCommand = siteBuildConfig?.startCommand?.trim() || "";
	const outputDirectory = siteBuildConfig?.outputDirectory?.trim() || "";
	const buildArgs = [
		`--site-id="${resourceId}"`,
		`--code="${codePath}"`,
		"--activate"
	];
	if (buildCommand) buildArgs.push(`--build-command="${buildCommand}"`);
	if (installCommand) buildArgs.push(`--install-command="${installCommand}"`);
	if (startCommand) buildArgs.push(`--start-command="${startCommand}"`);
	if (outputDirectory) buildArgs.push(`--output-directory="${outputDirectory}"`);
	const unixTrimmed = [
		`appwrite client --project-id="${projectId}" && \\`,
		"appwrite sites create-deployment \\",
		...buildArgs.map((a, i) => i < buildArgs.length - 1 ? `    ${a} \\` : `    ${a}`)
	].join("\n");
	const cmdArgs = [
		`--site-id="${resourceId}"`,
		`--code="${codePath}"`,
		"--activate"
	];
	if (buildCommand) cmdArgs.push(`--build-command="${buildCommand}"`);
	if (installCommand) cmdArgs.push(`--install-command="${installCommand}"`);
	if (outputDirectory) cmdArgs.push(`--output-directory="${outputDirectory}"`);
	const cmdTrimmed = [
		`appwrite client --project-id="${projectId}" && ^`,
		"appwrite sites create-deployment ^",
		...cmdArgs.map((a, i) => i < cmdArgs.length - 1 ? `    ${a} ^` : `    ${a}`)
	].join("\n");
	const psArgs = [
		`--site-id="${resourceId}"`,
		`--code="${codePath}"`,
		"--activate"
	];
	if (buildCommand) psArgs.push(`--build-command="${buildCommand}"`);
	if (installCommand) psArgs.push(`--install-command="${installCommand}"`);
	if (outputDirectory) psArgs.push(`--output-directory="${outputDirectory}"`);
	return {
		unix: unixTrimmed,
		cmd: cmdTrimmed,
		powershell: [
			`appwrite client --project-id="${projectId}" ;`,
			"appwrite sites create-deployment ,",
			...psArgs.map((a, i) => i < psArgs.length - 1 ? `    ${a} ,` : `    ${a}`)
		].join("\n")
	};
}
var SHELL_TAB_LABELS = {
	unix: "Unix",
	cmd: "CMD",
	powershell: "PowerShell"
};
var DESCRIPTION = {
	function: "Deploy your function using the Appwrite CLI by running the following command inside your function's folder.",
	site: "Deploy your site using the Appwrite CLI by running the following command inside your site's folder."
};
function CreateCliDeploymentModal({ open, onOpenChange, resourceType, projectId, resourceId, siteBuildConfig }) {
	const t = useT();
	const { os } = useUserOs();
	const shellTabs = useMemo(() => orderCliShellTabs(os), [os]);
	const [activeTab, setActiveTab] = useState(resolveDefaultCliShellTab(os));
	useEffect(() => {
		setActiveTab(resolveDefaultCliShellTab(os));
	}, [os]);
	const commands = buildCommands(resourceType, projectId, resourceId, siteBuildConfig);
	const codeByTab = {
		unix: commands.unix,
		cmd: commands.cmd,
		powershell: commands.powershell
	};
	const languageByTab = {
		unix: "bash",
		cmd: "bash",
		powershell: "powershell"
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-xl p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Create CLI deployment") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t(DESCRIPTION[resourceType])
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 pb-4 pt-4",
					children: [/* @__PURE__ */ jsxs(Tabs, {
						value: activeTab,
						onValueChange: (value) => setActiveTab(value),
						children: [/* @__PURE__ */ jsx(TabsList, {
							className: "mb-3 w-full grid grid-cols-3",
							children: shellTabs.map((tab) => /* @__PURE__ */ jsx(TabsTrigger, {
								value: tab,
								className: "text-[13px]",
								children: SHELL_TAB_LABELS[tab]
							}, tab))
						}), /* @__PURE__ */ jsx("div", {
							className: "min-h-0 overflow-hidden",
							style: { height: 250 },
							children: shellTabs.map((tab) => /* @__PURE__ */ jsx(TabsContent, {
								value: tab,
								className: "mt-0 h-full data-[state=inactive]:hidden",
								children: /* @__PURE__ */ jsx(CodeBlock, {
									code: codeByTab[tab],
									language: languageByTab[tab],
									copyInside: true,
									fixedHeight: "230px",
									className: "[&>div:last-child]:min-h-0"
								})
							}, tab))
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-4 rounded-lg border border-border bg-muted/30 px-4 py-3 flex gap-3 text-[12px] text-muted-foreground",
						children: [/* @__PURE__ */ jsx(Info, { className: "h-4 w-4 shrink-0 text-muted-foreground mt-0.5" }), /* @__PURE__ */ jsxs("p", { children: [
							t("If it's your first time using the CLI, remember to"),
							" ",
							/* @__PURE__ */ jsx(DocsRouteLink, {
								className: "link-neutral",
								href: CLI_INSTALL_URL,
								children: t("install the CLI")
							}),
							" ",
							t("and"),
							" ",
							/* @__PURE__ */ jsx(DocsRouteLink, {
								className: "link-neutral",
								href: CLI_LOGIN_URL,
								children: t("log in to your account")
							}),
							" ",
							t("before running the deployment command.")
						] })]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => onOpenChange(false),
						className: "h-9 text-[13px]",
						children: t("Close")
					})
				})
			]
		})
	});
}
const DEFAULT_DEPLOYMENT_UPLOAD_MAX_BYTES = 10 * 1024 * 1024;
function isTarGzFile(file) {
	const name = file.name?.toLowerCase() ?? "";
	return name.endsWith(".tar.gz") || name.endsWith(".tgz");
}
function CreateManualDeploymentModal({ open, onOpenChange, resourceType, projectId, resourceId, onSuccess, maxFileSizeBytes = DEFAULT_DEPLOYMENT_UPLOAD_MAX_BYTES }) {
	const t = useT();
	const queryClient = useQueryClient();
	const inputRef = useRef(null);
	const [file, setFile] = useState(null);
	const [uploadProgress, setUploadProgress] = useState(null);
	const [validationError, setValidationError] = useState(null);
	const reset = () => {
		setFile(null);
		setUploadProgress(null);
		setValidationError(null);
		if (inputRef.current) inputRef.current.value = "";
	};
	const handleClose = (isOpen) => {
		if (!isOpen) reset();
		onOpenChange(isOpen);
	};
	const validateFile = (f) => {
		if (!isTarGzFile(f)) return t("Only .tar.gz files are allowed.");
		if (f.size > maxFileSizeBytes) {
			const mb = (maxFileSizeBytes / (1024 * 1024)).toFixed(0);
			return `${t("File size exceeds")} ${mb}MB.`;
		}
		return null;
	};
	const handleFileChange = (e) => {
		const chosen = e.target.files?.[0];
		setValidationError(null);
		if (!chosen) {
			setFile(null);
			return;
		}
		const err = validateFile(chosen);
		if (err) {
			setValidationError(err);
			setFile(null);
			return;
		}
		setFile(chosen);
	};
	const mutation = useMutation({
		mutationFn: async () => {
			if (!file) throw new Error("No file selected");
			const projectSdk = sdk.forProject(projectId);
			if (resourceType === "function") return await projectSdk.functions.createDeployment({
				functionId: resourceId,
				code: file,
				activate: true,
				onProgress: (progress) => {
					if (progress.chunksTotal && progress.chunksTotal > 0) setUploadProgress(Math.round(progress.chunksUploaded / progress.chunksTotal * 100));
				}
			});
			return await projectSdk.sites.createDeployment({
				siteId: resourceId,
				code: file,
				activate: true,
				onProgress: (progress) => {
					if (progress.chunksTotal && progress.chunksTotal > 0) setUploadProgress(Math.round(progress.chunksUploaded / progress.chunksTotal * 100));
				}
			});
		},
		onSuccess: () => {
			closeDialogBeforeOverlayUnmount(() => {
				handleClose(false);
			});
			const deployKey = resourceType === "function" ? [
				"deployments",
				"function",
				projectId,
				resourceId
			] : [
				"deployments",
				"site",
				projectId,
				resourceId
			];
			queryClient.refetchQueries({ queryKey: deployKey });
			if (resourceType === "site") queryClient.invalidateQueries({ queryKey: [
				"site",
				"project",
				projectId,
				resourceId
			] });
			toast.success(t("Deployment created successfully"));
			onSuccess?.();
		},
		onError: (err) => {
			toast.error(err?.message ?? t("Failed to create deployment"));
			setUploadProgress(null);
		}
	});
	const handleSubmit = () => {
		if (!file) {
			setValidationError(t("Please select a .tar.gz file."));
			return;
		}
		const err = validateFile(file);
		if (err) {
			setValidationError(err);
			return;
		}
		mutation.mutate();
	};
	const maxMb = (maxFileSizeBytes / (1024 * 1024)).toFixed(0);
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange: handleClose,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-lg p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Create manual deployment") }), /* @__PURE__ */ jsxs(DialogDescription, {
						className: "text-[13px] mt-2",
						children: [
							t("Upload a .tar.gz archive of your code. Maximum file size is"),
							" ",
							maxMb,
							"MB."
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 pb-4 pt-0",
					children: [
						/* @__PURE__ */ jsx("input", {
							ref: inputRef,
							type: "file",
							accept: ".tar.gz,.tgz,application/gzip",
							className: "hidden",
							onChange: handleFileChange
						}),
						/* @__PURE__ */ jsx("div", {
							onClick: () => inputRef.current?.click(),
							className: "flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/20 py-8 px-4 cursor-pointer hover:bg-muted/30 transition-colors",
							children: file ? /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 text-[13px] text-foreground",
								children: [
									/* @__PURE__ */ jsx(FileArchive, { className: "h-5 w-5 text-muted-foreground" }),
									/* @__PURE__ */ jsx("span", {
										className: "font-medium truncate max-w-[240px]",
										children: file.name
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "text-muted-foreground",
										children: [
											"(",
											(file.size / 1024).toFixed(1),
											" KB)"
										]
									})
								]
							}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Upload, { className: "h-10 w-10 text-muted-foreground mb-2" }), /* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-muted-foreground text-center",
								children: t("Click to select a .tar.gz file")
							})] })
						}),
						validationError && /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-[12px] text-destructive",
							children: validationError
						}),
						uploadProgress !== null && /* @__PURE__ */ jsxs("div", {
							className: "mt-3 flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" }), /* @__PURE__ */ jsxs("span", {
								className: "text-[13px] text-muted-foreground",
								children: [
									t("Uploading…"),
									" ",
									uploadProgress,
									"%"
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => handleClose(false),
						disabled: mutation.isPending,
						className: "h-9 text-[13px]",
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						onClick: handleSubmit,
						disabled: !file || mutation.isPending,
						className: "h-9 text-[13px]",
						children: t("Create deployment")
					})]
				})
			]
		})
	});
}
export { CreateDeploymentProvider as a, CreateDeploymentDropdown as i, CreateCliDeploymentModal as n, useCreateDeployment as o, CreateGitDeploymentModal as r, CreateManualDeploymentModal as t };
