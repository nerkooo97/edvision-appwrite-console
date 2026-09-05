import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { a as getVcsInstallationErrorKind, i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { As as useNamespacesForInstallations, Ds as useCreateVcsRepository, zo as useConsoleVariables } from "./hooks-BONwG3Mt.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { n as RadioGroupItem, t as RadioGroup } from "./radio-group-aZurL4eE.js";
import { c as vcsProviderHasCapability, i as buildVcsOrgOptions, n as VcsIcon, s as getVcsProvider, t as VCS_PROVIDERS } from "./providers-8aVvAoJZ.js";
import { t as WarningAlert } from "./WarningAlert-ZIbpbrZO.js";
import { n as VcsInstallationErrorAlert, t as useVcsInstallationReconnect } from "./use-installation-reconnect-BUTVp2Vb.js";
import { t as BranchSelector } from "./BranchSelector-M6Yn8zIS.js";
import { t as RepositoryPicker } from "./RepositoryPicker-BTzJ0oV8.js";
import { t as RootDirectoryPicker } from "./RootDirectoryPicker-CYhbDyP_.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { VCSDetectionType } from "@appwrite.io/console";
import { GitBranch } from "lucide-react";
const TEMPLATE_PLACEHOLDERS = {
	API_ENDPOINT: "{apiEndpoint}",
	PROJECT_ID: "{projectId}",
	PROJECT_NAME: "{projectName}"
};
function resolveTemplatePlaceholder(value, context) {
	switch (value) {
		case TEMPLATE_PLACEHOLDERS.API_ENDPOINT: return context.apiEndpoint;
		case TEMPLATE_PLACEHOLDERS.PROJECT_ID: return context.projectId;
		case TEMPLATE_PLACEHOLDERS.PROJECT_NAME: return context.projectName;
		default: return value;
	}
}
function ConnectRepositorySection({ projectId, installations, getGitHubAuthUrl, getVcsAuthUrl, defaultRepositoryName, detectionType, value, onValueChange, showBranchAndRoot = false, branch = "", onBranchChange, rootDirectory = "./", onRootDirectoryChange, branchLabel = "Branch", branchLabelTooltip = "Production branch for the repo linked to the site. Successful deployments from this branch get activated automatically.", rootDirectoryLabel = "Root directory", rootDirectoryLabelTooltip = "Path to site code in the linked repo. Use the repository root (./) or a subdirectory that contains your app (e.g. ./apps/web).", rootDirectoryDescription = "Choose the directory containing your site code", emptyStateTitle = "Connect Git repository", emptyStateDescription = "Create and deploy with a connected git repository.", className }) {
	const t = useT();
	const vcsAuthUrl = (provider, mode = "create") => getVcsAuthUrl ? getVcsAuthUrl(provider, mode) : getGitHubAuthUrl;
	const suggestedRepoName = useMemo(() => defaultRepositoryName.split(" ").join("-").toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 100) || "my-repository", [defaultRepositoryName]);
	const [repositoryBehaviour, setRepositoryBehaviour] = useState("new");
	const [selectedInstallationId, setSelectedInstallationId] = useState(value.installationId || "");
	const [selectedNamespace, setSelectedNamespace] = useState({});
	const [repositoryName, setRepositoryName] = useState(value.repositoryName || suggestedRepoName);
	const [repositoryPrivate, setRepositoryPrivate] = useState(true);
	const { namespacesByInstallation } = useNamespacesForInstallations(projectId, installations);
	const { vcsProvidersWithRepositoryCreation, vcsProvidersWithPublicRepositories } = useConsoleVariables();
	const orgOptions = useMemo(() => buildVcsOrgOptions(installations, namespacesByInstallation), [installations, namespacesByInstallation]);
	const creationOrgOptions = useMemo(() => orgOptions.filter((option) => vcsProviderHasCapability(option.provider, vcsProvidersWithRepositoryCreation)), [orgOptions, vcsProvidersWithRepositoryCreation]);
	const canCreateRepository = creationOrgOptions.length > 0;
	const effectiveBehaviour = canCreateRepository ? repositoryBehaviour : "existing";
	const selectedOrgKey = selectedNamespace.providerNamespace ? `${selectedInstallationId}:${selectedNamespace.providerNamespace}` : selectedInstallationId;
	const selectedOrgProvider = orgOptions.find((option) => option.key === selectedOrgKey)?.provider;
	const supportsPublicRepositories = vcsProviderHasCapability(selectedOrgProvider, vcsProvidersWithPublicRepositories);
	const selectOrgOption = (key) => {
		const option = orgOptions.find((o) => o.key === key);
		if (!option) return;
		setSelectedInstallationId(option.installationId);
		setSelectedNamespace({
			providerNamespace: option.providerNamespace,
			providerNamespaceId: option.providerNamespaceId
		});
	};
	useEffect(() => {
		const validOptions = effectiveBehaviour === "new" ? creationOrgOptions : orgOptions;
		if (!validOptions.length) return;
		if (!validOptions.some((o) => o.key === selectedOrgKey)) {
			const first = validOptions[0];
			setSelectedInstallationId(first.installationId);
			setSelectedNamespace({
				providerNamespace: first.providerNamespace,
				providerNamespaceId: first.providerNamespaceId
			});
		}
	}, [
		orgOptions,
		creationOrgOptions,
		effectiveBehaviour,
		selectedOrgKey
	]);
	const { Icon: ConnectedRepositoryIcon, label: connectedRepositoryProviderLabel } = getVcsProvider(installations.find((installation) => installation.$id === value.installationId)?.provider);
	const createRepositoryMutation = useCreateVcsRepository(projectId);
	const createRepositoryErrorKind = getVcsInstallationErrorKind(createRepositoryMutation.error);
	const { provider: reconnectProvider, organization: reconnectOrganization, reconnectUrl } = useVcsInstallationReconnect(projectId, selectedInstallationId);
	const hasRepository = !!value.installationId && !!value.providerRepositoryId;
	const hasInstallations = installations.length > 0;
	useEffect(() => {
		if (!hasRepository && defaultRepositoryName) setRepositoryName((prev) => prev || defaultRepositoryName);
	}, [defaultRepositoryName, hasRepository]);
	const handleCreateRepository = async () => {
		if (!projectId || !selectedInstallationId || !repositoryName.trim() || createRepositoryMutation.isPending) return;
		try {
			const repo = await createRepositoryMutation.mutateAsync({
				installationId: selectedInstallationId,
				name: repositoryName.trim(),
				xprivate: supportsPublicRepositories ? repositoryPrivate : true,
				providerNamespace: selectedNamespace.providerNamespaceId
			});
			onValueChange({
				installationId: selectedInstallationId,
				providerRepositoryId: repo.id,
				repositoryName: repo.name,
				repositoryOwner: repo.organization
			});
		} catch {}
	};
	const handleConnectExisting = (repo) => {
		onValueChange({
			installationId: selectedInstallationId,
			providerRepositoryId: repo.id,
			repositoryName: repo.name,
			repositoryOwner: repo.organization
		});
	};
	const handleClearRepository = () => {
		onValueChange({
			installationId: void 0,
			providerRepositoryId: void 0,
			repositoryName: void 0,
			repositoryOwner: void 0
		});
		setRepositoryName(suggestedRepoName);
		setRepositoryBehaviour("existing");
	};
	if (!hasInstallations) return /* @__PURE__ */ jsxs("div", {
		className: cn("rounded-xl border border-border bg-card/50 overflow-hidden", className),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t(emptyStateTitle)
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground mt-2",
					children: t(emptyStateDescription)
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-6 flex flex-col items-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-12 w-12 items-center justify-center rounded-xl bg-muted mb-4",
					children: /* @__PURE__ */ jsx(GitBranch, { className: "h-6 w-6 text-muted-foreground" })
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center justify-center gap-2",
					children: [
						/* @__PURE__ */ jsx(Button, {
							variant: "secondary",
							asChild: true,
							children: /* @__PURE__ */ jsxs("a", {
								href: getGitHubAuthUrl,
								children: [/* @__PURE__ */ jsx(VcsIcon, {
									type: "github",
									className: "me-1.5 h-4 w-4"
								}), t("Connect to GitHub")]
							})
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "secondary",
							asChild: true,
							children: /* @__PURE__ */ jsxs("a", {
								href: vcsAuthUrl("gitlab"),
								children: [/* @__PURE__ */ jsx(VcsIcon, {
									type: "gitlab",
									className: "me-1.5 h-4 w-4"
								}), t("Connect to GitLab")]
							})
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "secondary",
							asChild: true,
							children: /* @__PURE__ */ jsxs("a", {
								href: vcsAuthUrl("bitbucket"),
								children: [/* @__PURE__ */ jsx(VcsIcon, {
									type: "bitbucket",
									className: "me-1.5 h-4 w-4"
								}), t("Connect to Bitbucket")]
							})
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "secondary",
							asChild: true,
							children: /* @__PURE__ */ jsxs("a", {
								href: vcsAuthUrl("origin"),
								children: [/* @__PURE__ */ jsx(VcsIcon, {
									type: "origin",
									className: "me-1.5 h-4 w-4"
								}), t("Connect to Origin")]
							})
						})
					]
				})]
			})
		]
	});
	if (hasRepository) return /* @__PURE__ */ jsxs("div", {
		className: cn("rounded-xl border border-border bg-card/50 overflow-hidden space-y-0", className),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Git repository")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 min-w-0",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground",
							children: /* @__PURE__ */ jsx(ConnectedRepositoryIcon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsxs("p", {
								className: "text-[13px] font-medium text-foreground truncate",
								children: [
									value.repositoryOwner,
									"/",
									value.repositoryName
								]
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-muted-foreground",
								children: t(`${connectedRepositoryProviderLabel} repository`)
							})]
						})]
					}), /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px] shrink-0",
						onClick: handleClearRepository,
						children: t("Update")
					})]
				})
			}),
			showBranchAndRoot && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border" }), /* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-4",
				children: [/* @__PURE__ */ jsx(BranchSelector, {
					projectId,
					installationId: value.installationId,
					providerRepositoryId: value.providerRepositoryId,
					value: branch,
					onChange: onBranchChange || (() => {}),
					label: branchLabel,
					labelTooltip: branchLabelTooltip,
					placeholder: "Select branch"
				}), /* @__PURE__ */ jsx(RootDirectoryPicker, {
					projectId,
					installationId: value.installationId,
					providerRepositoryId: value.providerRepositoryId,
					branch: branch || "main",
					value: rootDirectory,
					onChange: onRootDirectoryChange || (() => {}),
					label: rootDirectoryLabel,
					labelTooltip: rootDirectoryLabelTooltip,
					description: rootDirectoryDescription,
					placeholder: "./"
				})]
			})] })
		]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: cn("rounded-xl border border-border bg-card/50 overflow-hidden", className),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4",
				children: /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Git repository")
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [
					canCreateRepository && /* @__PURE__ */ jsxs(RadioGroup, {
						value: effectiveBehaviour,
						onValueChange: (v) => setRepositoryBehaviour(v),
						className: "flex gap-4 mb-6",
						children: [/* @__PURE__ */ jsxs(Label, {
							htmlFor: "repo-new",
							className: cn("flex flex-1 items-start gap-3 rounded-xl border p-4 cursor-pointer transition-all", repositoryBehaviour === "new" ? "border-foreground bg-card/80" : "border-border bg-card/50 hover:border-border/80"),
							children: [/* @__PURE__ */ jsx(RadioGroupItem, {
								value: "new",
								id: "repo-new",
								className: "mt-1 shrink-0"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								className: "text-[14px] font-medium text-foreground",
								children: t("Create new repository")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground mt-1",
								children: t("Create a new Git repository and clone the template into it.")
							})] })]
						}), /* @__PURE__ */ jsxs(Label, {
							htmlFor: "repo-existing",
							className: cn("flex flex-1 items-start gap-3 rounded-xl border p-4 cursor-pointer transition-all", repositoryBehaviour === "existing" ? "border-foreground bg-card/80" : "border-border bg-card/50 hover:border-border/80"),
							children: [/* @__PURE__ */ jsx(RadioGroupItem, {
								value: "existing",
								id: "repo-existing",
								className: "mt-1 shrink-0"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								className: "text-[14px] font-medium text-foreground",
								children: t("Connect existing repository")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground mt-1",
								children: t("Link this deployment to an existing repository.")
							})] })]
						})]
					}),
					effectiveBehaviour === "new" && /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "git-org",
									className: "text-[13px]",
									children: t("Organization")
								}), /* @__PURE__ */ jsxs(Select, {
									value: selectedOrgKey,
									onValueChange: selectOrgOption,
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										id: "git-org",
										className: "h-9 text-[13px]",
										children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("Select organization") })
									}), /* @__PURE__ */ jsxs(SelectContent, { children: [creationOrgOptions.map((org) => /* @__PURE__ */ jsx(SelectItem, {
										value: org.key,
										children: /* @__PURE__ */ jsxs("span", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ jsx(VcsIcon, {
												type: org.provider,
												className: "h-4 w-4 shrink-0"
											}), /* @__PURE__ */ jsx("span", { children: org.label })]
										})
									}, org.key)), /* @__PURE__ */ jsx("div", {
										className: "border-t border-border mt-1 pt-1",
										children: Object.values(VCS_PROVIDERS).filter((p) => vcsProviderHasCapability(p.id, vcsProvidersWithRepositoryCreation)).map((p) => /* @__PURE__ */ jsxs("a", {
											href: vcsAuthUrl(p.id),
											className: "flex items-center gap-2 px-2 py-1.5 text-[11px] text-muted-foreground hover:text-foreground",
											children: [/* @__PURE__ */ jsx(p.Icon, { className: "h-3 w-3" }), t(`Add ${p.label} account`)]
										}, p.id))
									})] })]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "repo-name",
									className: "text-[13px]",
									children: t("Repository name")
								}), /* @__PURE__ */ jsx(Input, {
									id: "repo-name",
									value: repositoryName,
									onChange: (e) => setRepositoryName(e.target.value),
									placeholder: "my-repository",
									className: "h-9 text-[13px]"
								})]
							}),
							supportsPublicRepositories && /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(Checkbox, {
									id: "repo-private",
									checked: repositoryPrivate,
									onCheckedChange: (v) => setRepositoryPrivate(v === true)
								}), /* @__PURE__ */ jsx(Label, {
									htmlFor: "repo-private",
									className: "text-[13px] font-normal cursor-pointer",
									children: t("Keep repository private")
								})]
							}),
							/* @__PURE__ */ jsx(Button, {
								onClick: handleCreateRepository,
								disabled: !repositoryName.trim() || !selectedInstallationId || createRepositoryMutation.isPending,
								className: "h-9 text-[13px]",
								children: t("Create")
							}),
							createRepositoryMutation.error && (createRepositoryErrorKind ? /* @__PURE__ */ jsx(VcsInstallationErrorAlert, {
								kind: createRepositoryErrorKind,
								provider: reconnectProvider,
								organization: reconnectOrganization,
								reconnectUrl,
								onRetry: handleCreateRepository,
								isRetrying: createRepositoryMutation.isPending,
								children: getErrorMessage(createRepositoryMutation.error, t("The repository was not created because Appwrite could not reach this Git installation."))
							}) : /* @__PURE__ */ jsx(WarningAlert, {
								title: t("Could not create the repository"),
								children: getErrorMessage(createRepositoryMutation.error, "Check that the name is not already taken in the selected organization, then try again.")
							}))
						]
					}),
					effectiveBehaviour === "existing" && /* @__PURE__ */ jsx(RepositoryPicker, {
						projectId,
						getGitHubAuthUrl,
						getVcsAuthUrl,
						installations,
						selectedInstallationId,
						onInstallationChange: setSelectedInstallationId,
						onRepositorySelect: handleConnectExisting,
						mode: "create",
						detectionType: detectionType === VCSDetectionType.Runtime ? "runtime" : "framework",
						className: "mt-0"
					})
				]
			})
		]
	});
}
export { resolveTemplatePlaceholder as n, ConnectRepositorySection as t };
