import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { a as getVcsInstallationErrorKind } from "./error-formatting-CL2hjGy5.js";
import { As as useNamespacesForInstallations, js as useRepositories } from "./hooks-BONwG3Mt.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { n as SimplePagination } from "./Pagination-BDei8M4v.js";
import { t as FrameworkIcon } from "./FrameworkIcon-DTkSe6r3.js";
import { a as getKnownVcsProvider, i as buildVcsOrgOptions, n as VcsIcon, t as VCS_PROVIDERS } from "./providers-8aVvAoJZ.js";
import { t as RuntimeIcon } from "./RuntimeIcon-Dt6YMTy1.js";
import { t as RefreshButton } from "./RefreshButton-BA9lQ7jC.js";
import { r as VcsInstallationErrorState } from "./use-installation-reconnect-BUTVp2Vb.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { VCSDetectionType } from "@appwrite.io/console";
import { Lock, Search } from "lucide-react";
var REPO_PAGE_SIZE = 5;
function RepositoryRowSkeleton({ provider }) {
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
				children: [/* @__PURE__ */ jsx("div", { className: "h-3.5 w-28 rounded bg-muted/50" }), /* @__PURE__ */ jsx("div", { className: "h-3 w-14 rounded bg-muted/50 shrink-0" })]
			}),
			/* @__PURE__ */ jsx("div", { className: "h-7 w-[68px] shrink-0 rounded-md bg-muted/50" })
		]
	});
}
function RepositoryPicker({ projectId, getGitHubAuthUrl, getVcsAuthUrl, installations, selectedInstallationId, onInstallationChange, selectedRepositoryId, onRepositorySelect, mode, detectionType = "framework", onRefetch, isFetching: isFetchingProp, className }) {
	const t = useT();
	const vcsAuthUrl = (provider, mode$1 = "create") => getVcsAuthUrl ? getVcsAuthUrl(provider, mode$1) : getGitHubAuthUrl;
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
		onInstallationChange(option.installationId);
		setSelectedNamespace(option.providerNamespace ?? "");
		setRepoPage(1);
	};
	const [orgFilter, setOrgFilter] = useState("");
	const filteredOrgOptions = useMemo(() => orgFilter.trim() ? orgOptions.filter((o) => o.label.toLowerCase().includes(orgFilter.trim().toLowerCase())) : orgOptions, [orgOptions, orgFilter]);
	const vcsType = detectionType === "runtime" ? VCSDetectionType.Runtime : VCSDetectionType.Framework;
	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedRepoSearch(repoSearch);
			setRepoPage(1);
		}, 300);
		return () => clearTimeout(timer);
	}, [repoSearch]);
	const { data: repositoriesData, isLoading: reposLoading, isFetching: reposFetching, error: reposError, refetch: refetchRepos } = useRepositories(projectId, selectedInstallationId || null, vcsType, repoPage - 1, REPO_PAGE_SIZE, debouncedRepoSearch || void 0, selectedNamespace || void 0);
	const repositories = useMemo(() => {
		const data = repositoriesData;
		if (vcsType === VCSDetectionType.Runtime) return data?.runtimeProviderRepositories ?? [];
		return data?.frameworkProviderRepositories ?? [];
	}, [repositoriesData, vcsType]);
	const hasMoreRepos = repositories.length === REPO_PAGE_SIZE;
	const isFetching = isFetchingProp ?? reposFetching;
	const installationErrorKind = getVcsInstallationErrorKind(reposError);
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex flex-col", className),
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [installations.length > 0 && /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsxs(Select, {
					value: selectedOptionKey,
					onValueChange: (key) => selectOption(key),
					onOpenChange: (open) => {
						if (!open) setOrgFilter("");
					},
					children: [/* @__PURE__ */ jsx(SelectTrigger, {
						id: "repo-picker-installation",
						className: cn("shrink-0 h-9 text-[13px]", selectedInstallationId ? "w-[200px]" : "w-full"),
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
								href: vcsAuthUrl(p.id),
								className: "flex items-center gap-2 px-2 py-1.5 text-[11px] text-muted-foreground hover:text-foreground",
								children: [/* @__PURE__ */ jsx(p.Icon, { className: "h-3 w-3" }), t(`Add ${p.label} account`)]
							}, p.id))
						})
					] })]
				}), selectedInstallationId && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
					className: "relative flex-1 min-w-0",
					children: [/* @__PURE__ */ jsx(Search, { className: "absolute start-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" }), /* @__PURE__ */ jsx(Input, {
						id: "repo-picker-search",
						value: repoSearch,
						onChange: (e) => setRepoSearch(e.target.value),
						placeholder: t("Search repositories..."),
						className: "h-9 ps-9 text-[13px]"
					})]
				}), /* @__PURE__ */ jsx(RefreshButton, {
					onClick: () => {
						refetchRepos();
						onRefetch?.();
					},
					isRefreshing: isFetching,
					tooltip: t("Refresh repositories")
				})] })]
			}), selectedInstallationId && /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx("div", {
					className: "rounded-lg border border-border overflow-hidden",
					children: reposLoading ? /* @__PURE__ */ jsx("div", {
						className: "divide-y divide-border",
						children: Array.from({ length: REPO_PAGE_SIZE }).map((_, i) => /* @__PURE__ */ jsx(RepositoryRowSkeleton, { provider: selectedInstallation?.provider }, i))
					}) : repositories.length > 0 ? /* @__PURE__ */ jsx("div", {
						className: cn("divide-y divide-border", isFetching && "opacity-60 pointer-events-none"),
						children: repositories.map((repo) => {
							const isSelected = selectedRepositoryId === repo.id;
							return /* @__PURE__ */ jsxs("div", {
								className: cn("flex w-full items-center gap-3 px-4 py-3.5 transition-colors", mode === "connect" ? "cursor-pointer hover:bg-accent/50" : "", mode === "connect" && isSelected && "bg-primary/5"),
								onClick: () => mode === "connect" && onRepositorySelect(repo),
								onKeyDown: (e) => {
									if (mode === "connect" && (e.key === "Enter" || e.key === " ")) {
										e.preventDefault();
										onRepositorySelect(repo);
									}
								},
								role: mode === "connect" ? "button" : void 0,
								tabIndex: mode === "connect" ? 0 : void 0,
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "flex h-7 w-7 shrink-0 items-center justify-center rounded bg-muted/50 text-muted-foreground",
										children: "framework" in repo && repo.framework ? /* @__PURE__ */ jsx(FrameworkIcon, {
											framework: repo.framework,
											size: "sm"
										}) : "runtime" in repo && repo.runtime ? /* @__PURE__ */ jsx(RuntimeIcon, {
											runtime: repo.runtime,
											className: "h-3.5 w-3.5"
										}) : /* @__PURE__ */ jsx(VcsIcon, {
											type: selectedInstallation?.provider,
											className: "h-3.5 w-3.5"
										})
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex-1 min-w-0 flex items-center gap-2",
										children: [
											/* @__PURE__ */ jsxs("span", {
												className: "text-[13px] font-medium text-foreground truncate",
												children: [
													repo.organization,
													"/",
													repo.name
												]
											}),
											repo.private && /* @__PURE__ */ jsx(Lock, { className: "h-3 w-3 shrink-0 text-muted-foreground/70" }),
											repo.pushedAt && /* @__PURE__ */ jsx("span", {
												className: "text-[11px] text-muted-foreground shrink-0",
												children: /* @__PURE__ */ jsx(DateTooltip, { date: repo.pushedAt })
											})
										]
									}),
									mode === "create" && /* @__PURE__ */ jsx(Button, {
										size: "sm",
										variant: "outline",
										className: "h-7 text-[12px] shrink-0",
										onClick: (e) => {
											e.stopPropagation();
											onRepositorySelect(repo);
										},
										children: t("Connect")
									}),
									mode === "connect" && (isSelected ? /* @__PURE__ */ jsx("span", {
										className: "text-[12px] font-medium text-primary shrink-0",
										children: t("Selected")
									}) : /* @__PURE__ */ jsx(Button, {
										size: "sm",
										variant: "outline",
										className: "h-7 text-[12px] shrink-0",
										onClick: (e) => {
											e.stopPropagation();
											onRepositorySelect(repo);
										},
										children: t("Connect")
									}))
								]
							}, repo.id);
						})
					}) : installationErrorKind ? /* @__PURE__ */ jsx("div", {
						className: "py-8 px-4",
						children: /* @__PURE__ */ jsx(VcsInstallationErrorState, {
							kind: installationErrorKind,
							provider: selectedInstallation?.provider,
							organization: selectedInstallation?.organization,
							reconnectUrl: getKnownVcsProvider(selectedInstallation?.provider) ? vcsAuthUrl(getKnownVcsProvider(selectedInstallation?.provider).id, "update") : void 0,
							onRetry: () => {
								refetchRepos();
								onRefetch?.();
							},
							isRetrying: isFetching,
							className: "py-0"
						})
					}) : /* @__PURE__ */ jsx("div", {
						className: "py-8 px-4 text-center",
						children: /* @__PURE__ */ jsx(EmptyState, {
							title: t("No repositories found"),
							description: debouncedRepoSearch ? t("Try a different search term or installation") : t("No repositories available for this installation"),
							className: "py-0"
						})
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "min-h-10 flex items-center justify-center",
					children: repositories.length > 0 && /* @__PURE__ */ jsx(SimplePagination, {
						currentPage: repoPage,
						hasMore: hasMoreRepos,
						onPageChange: setRepoPage,
						disabled: isFetching
					})
				}),
				(() => {
					if (installationErrorKind) return null;
					const knownProvider = getKnownVcsProvider(selectedInstallation?.provider);
					if (!knownProvider) return null;
					return /* @__PURE__ */ jsxs("p", {
						className: "text-[12px] text-muted-foreground",
						children: [
							t("Can't find a repository?"),
							" ",
							/* @__PURE__ */ jsx("a", {
								href: vcsAuthUrl(knownProvider.id, "update"),
								className: "link-neutral",
								children: t(`Update ${knownProvider.label} permissions`)
							}),
							" ",
							t("to include more repos.")
						]
					});
				})()
			] })]
		})
	});
}
export { RepositoryPicker as t };
