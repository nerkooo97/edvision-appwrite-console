import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { a as getVcsInstallationErrorKind } from "./error-formatting-CL2hjGy5.js";
import { Es as sortRepositoryBranches, Ms as useRepository, ws as repositoryBranchesQueryOptions } from "./hooks-BONwG3Mt.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as CommandItem, i as CommandInput, n as CommandEmpty, o as CommandList, r as CommandGroup, t as Command$1 } from "./command-Cizl9kMJ.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { n as VcsInstallationErrorAlert, t as useVcsInstallationReconnect } from "./use-installation-reconnect-BUTVp2Vb.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ChevronDown, GitBranch, Info, Loader2 } from "lucide-react";
function BranchSelector({ projectId, installationId, providerRepositoryId, value, onChange, label = "Branch", labelTooltip, placeholder = "Select branch", disabled = false, suppressInstallationError = false, className }) {
	const t = useT();
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState("");
	const hasRepository = !!(projectId && installationId && providerRepositoryId);
	useEffect(() => {
		const timer = setTimeout(() => setDebouncedSearch(search), 300);
		return () => clearTimeout(timer);
	}, [search]);
	useEffect(() => {
		if (!open) setSearch("");
	}, [open]);
	const { data: repository, isPending: repositoryPending } = useRepository(projectId, installationId, providerRepositoryId);
	const { data: initialBranchesData, isLoading: initialLoading, isFetching: initialFetching, error: initialBranchesError, refetch: refetchBranches } = useQuery({
		...repositoryBranchesQueryOptions(projectId, installationId, providerRepositoryId),
		enabled: hasRepository
	});
	const { data: searchBranchesData, isFetching: searchFetching } = useQuery({
		...repositoryBranchesQueryOptions(projectId, installationId, providerRepositoryId, debouncedSearch),
		enabled: hasRepository && open && !!debouncedSearch,
		placeholderData: keepPreviousData
	});
	const sortedInitialBranches = useMemo(() => sortRepositoryBranches(initialBranchesData?.branches ?? []), [initialBranchesData?.branches]);
	const sortedSearchBranches = useMemo(() => sortRepositoryBranches(searchBranchesData?.branches ?? []), [searchBranchesData?.branches]);
	const displayBranches = debouncedSearch ? sortedSearchBranches : sortedInitialBranches;
	const isLoadingList = debouncedSearch ? !!debouncedSearch && searchFetching : initialLoading;
	const installationErrorKind = getVcsInstallationErrorKind(initialBranchesError);
	const { provider, organization, reconnectUrl } = useVcsInstallationReconnect(projectId, installationId);
	const defaultBranch = repository?.defaultBranch;
	useEffect(() => {
		if (value) return;
		if (hasRepository && repositoryPending) return;
		onChange(defaultBranch ?? "main");
	}, [
		defaultBranch,
		hasRepository,
		repositoryPending,
		value,
		onChange
	]);
	const labelContent = /* @__PURE__ */ jsxs(Fragment, { children: [t(label), labelTooltip && /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsx("button", {
			type: "button",
			className: "inline-flex ms-1.5 align-middle text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded",
			"aria-label": t("More info"),
			children: /* @__PURE__ */ jsx(Info, { className: "h-3.5 w-3.5" })
		})
	}), /* @__PURE__ */ jsx(TooltipContent, {
		side: "top",
		className: "max-w-[240px] z-[200]",
		children: t(labelTooltip)
	})] })] });
	if (!hasRepository) return /* @__PURE__ */ jsxs("div", {
		className,
		children: [label && /* @__PURE__ */ jsx(Label, {
			htmlFor: "branch-input",
			className: "text-[13px] mb-2 block",
			children: labelContent
		}), /* @__PURE__ */ jsx(Input, {
			id: "branch-input",
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder: "main",
			disabled,
			className: "h-9 font-mono text-[13px]"
		})]
	});
	if (initialLoading && sortedInitialBranches.length === 0) return /* @__PURE__ */ jsxs("div", {
		className,
		children: [label && /* @__PURE__ */ jsx(Label, {
			htmlFor: "branch-selector-loading",
			className: "text-[13px] mb-2 block",
			children: labelContent
		}), /* @__PURE__ */ jsxs("div", {
			id: "branch-selector-loading",
			className: "flex h-9 w-full min-w-0 shrink-0 items-center gap-2 rounded-md border border-input bg-transparent px-3 text-[13px] text-muted-foreground dark:bg-input/30",
			"aria-busy": true,
			"aria-live": "polite",
			children: [/* @__PURE__ */ jsx(Loader2, {
				className: "h-4 w-4 shrink-0 animate-spin text-muted-foreground",
				"aria-hidden": true
			}), /* @__PURE__ */ jsx("span", {
				className: "truncate",
				children: t("Loading branches...")
			})]
		})]
	});
	if (installationErrorKind && !suppressInstallationError) return /* @__PURE__ */ jsxs("div", {
		className,
		children: [
			label && /* @__PURE__ */ jsx(Label, {
				htmlFor: "branch-input",
				className: "text-[13px] mb-2 block",
				children: labelContent
			}),
			/* @__PURE__ */ jsx(Input, {
				id: "branch-input",
				value,
				onChange: (e) => onChange(e.target.value),
				placeholder: "main",
				disabled,
				className: "h-9 font-mono text-[13px]"
			}),
			/* @__PURE__ */ jsx(VcsInstallationErrorAlert, {
				kind: installationErrorKind,
				provider,
				organization,
				reconnectUrl,
				onRetry: () => refetchBranches(),
				isRetrying: initialFetching,
				className: "mt-2",
				children: t("Branches could not be loaded, so enter the branch name manually.")
			})
		]
	});
	if (sortedInitialBranches.length === 0) return /* @__PURE__ */ jsxs("div", {
		className,
		children: [label && /* @__PURE__ */ jsx(Label, {
			htmlFor: "branch-input",
			className: "text-[13px] mb-2 block",
			children: labelContent
		}), /* @__PURE__ */ jsx(Input, {
			id: "branch-input",
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder: "main",
			disabled,
			className: "h-9 font-mono text-[13px]"
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className,
		children: [label && /* @__PURE__ */ jsx(Label, {
			htmlFor: "branch-selector",
			className: "text-[13px] mb-2 block",
			children: labelContent
		}), /* @__PURE__ */ jsxs(Popover, {
			open,
			onOpenChange: setOpen,
			children: [/* @__PURE__ */ jsx(PopoverTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsxs(Button, {
					id: "branch-selector",
					type: "button",
					variant: "outline",
					role: "combobox",
					"aria-expanded": open,
					disabled,
					className: cn("h-9 w-full min-w-0 justify-between gap-2 text-[13px] font-normal", !value && "text-muted-foreground"),
					children: [/* @__PURE__ */ jsx("span", {
						className: "truncate",
						children: value || t(placeholder)
					}), /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 opacity-50" })]
				})
			}), /* @__PURE__ */ jsx(PopoverContent, {
				className: "max-h-[min(320px,var(--radix-popover-content-available-height))] w-[var(--radix-popover-trigger-width)] overflow-hidden p-0",
				align: "start",
				onWheelCapture: (event) => {
					event.stopPropagation();
				},
				children: /* @__PURE__ */ jsxs(Command$1, {
					shouldFilter: false,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [/* @__PURE__ */ jsx(CommandInput, {
							placeholder: t("Find a branch..."),
							value: search,
							onValueChange: setSearch,
							className: cn("h-9 text-[13px]", isLoadingList && "pe-8")
						}), /* @__PURE__ */ jsx("div", {
							className: cn("pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 transition-opacity duration-200", isLoadingList ? "opacity-100" : "opacity-0"),
							"aria-hidden": true,
							children: /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" })
						})]
					}), /* @__PURE__ */ jsxs(CommandList, {
						className: "min-h-[180px] max-h-[240px] overflow-y-auto overscroll-contain",
						children: [
							!isLoadingList && displayBranches.length === 0 && debouncedSearch && /* @__PURE__ */ jsx(CommandEmpty, {
								className: "py-4 text-center text-[13px] text-muted-foreground",
								children: t("No branches found")
							}),
							!isLoadingList && displayBranches.length === 0 && !debouncedSearch && /* @__PURE__ */ jsx(CommandEmpty, {
								className: "py-4 text-center text-[13px] text-muted-foreground",
								children: t("No branches available")
							}),
							/* @__PURE__ */ jsxs(CommandGroup, { children: [displayBranches.map((branch) => /* @__PURE__ */ jsx(CommandItem, {
								value: branch.name,
								className: cn("text-[13px]", branch.name === value && "font-medium"),
								onSelect: () => {
									onChange(branch.name);
									setOpen(false);
								},
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex min-w-0 items-center gap-2",
									children: [/* @__PURE__ */ jsx(GitBranch, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
										className: "truncate",
										children: branch.name
									})]
								})
							}, branch.name)), !debouncedSearch && displayBranches.length > 0 && /* @__PURE__ */ jsx("div", {
								className: "border-t border-border px-3 py-2 text-[11px] text-muted-foreground",
								children: t("Type to search all branches")
							})] })
						]
					})]
				})
			})]
		})]
	});
}
export { BranchSelector as t };
