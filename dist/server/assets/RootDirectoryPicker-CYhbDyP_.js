import { t as cn } from "./utils-DoqqkI3X.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { a as getVcsInstallationErrorKind } from "./error-formatting-CL2hjGy5.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-CFWmsJbI.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { r as VcsInstallationErrorState, t as useVcsInstallationReconnect } from "./use-installation-reconnect-BUTVp2Vb.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { ChevronRight, FolderOpen, Info, Loader2 } from "lucide-react";
function RootDirectoryPicker({ projectId, installationId, providerRepositoryId, branch, value, onChange, label = "Root directory", labelTooltip, placeholder = "./", description = "Choose the directory containing your code", disabled = false, className }) {
	const t = useT();
	const queryClient = useQueryClient();
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
	const [dialogOpen, setDialogOpen] = useState(false);
	const [selectedDir, setSelectedDir] = useState(value || "./");
	const [expandedPaths, setExpandedPaths] = useState(/* @__PURE__ */ new Set());
	const [directoryCache, setDirectoryCache] = useState(/* @__PURE__ */ new Map());
	const [rootError, setRootError] = useState(null);
	const hasRepository = installationId && providerRepositoryId;
	const rootErrorKind = getVcsInstallationErrorKind(rootError);
	const { provider, organization, reconnectUrl } = useVcsInstallationReconnect(projectId, installationId);
	const loadDirectoryContents = useCallback(async (path) => {
		if (!projectId || !installationId || !providerRepositoryId) return;
		if (directoryCache.has(path)) return;
		try {
			const contents = await queryClient.fetchQuery({
				queryKey: [
					"vcs",
					"contents",
					projectId,
					installationId,
					providerRepositoryId,
					path,
					branch || "main"
				],
				queryFn: async () => {
					const projectSdk = sdk.forProject(projectId);
					let normalizedPath;
					if (path === "./") normalizedPath = "./";
					else {
						normalizedPath = path.replace(/^\.\//, "");
						if (normalizedPath === "") normalizedPath = void 0;
					}
					return await projectSdk.vcs.getRepositoryContents({
						installationId,
						providerRepositoryId,
						providerRootDirectory: normalizedPath,
						providerReference: branch || "main"
					});
				},
				staleTime: 300 * 1e3
			});
			setDirectoryCache((prev) => {
				const newCache = new Map(prev);
				newCache.set(path, { contents: contents.contents });
				contents.contents.filter((item) => item.isDirectory).forEach((dir) => {
					let subdirPath;
					if (path === "./") subdirPath = `./${dir.name}`;
					else if (path.startsWith("./")) subdirPath = `${path}/${dir.name}`;
					else subdirPath = `./${path}/${dir.name}`;
					if (!newCache.has(subdirPath)) queryClient.fetchQuery({
						queryKey: [
							"vcs",
							"contents",
							projectId,
							installationId,
							providerRepositoryId,
							subdirPath,
							branch || "main"
						],
						queryFn: async () => {
							const projectSdk = sdk.forProject(projectId);
							let normalizedPath;
							if (subdirPath === "./") normalizedPath = "./";
							else {
								normalizedPath = subdirPath.replace(/^\.\//, "");
								if (normalizedPath === "") normalizedPath = void 0;
							}
							return await projectSdk.vcs.getRepositoryContents({
								installationId,
								providerRepositoryId,
								providerRootDirectory: normalizedPath,
								providerReference: branch || "main"
							});
						},
						staleTime: 300 * 1e3
					}).then((subdirContents) => {
						setDirectoryCache((currentCache) => {
							const updatedCache = new Map(currentCache);
							updatedCache.set(subdirPath, { contents: subdirContents.contents });
							return updatedCache;
						});
					}).catch((error) => {
						console.error(`Failed to preload subdirectory ${subdirPath}:`, error);
					});
				});
				return newCache;
			});
			if (path === "./") setRootError(null);
		} catch (error) {
			console.error("Failed to load directory contents:", error);
			if (path === "./") setRootError(error);
		}
	}, [
		projectId,
		installationId,
		providerRepositoryId,
		branch,
		directoryCache,
		queryClient
	]);
	const toggleDirectory = async (path) => {
		if (expandedPaths.has(path)) setExpandedPaths((prev) => {
			const newSet = new Set(prev);
			newSet.delete(path);
			return newSet;
		});
		else {
			if (!directoryCache.has(path)) await loadDirectoryContents(path);
			setExpandedPaths((prev) => {
				const newSet = new Set(prev);
				newSet.add(path);
				return newSet;
			});
		}
	};
	const handleSelect = () => {
		onChange(selectedDir);
		setDialogOpen(false);
	};
	useEffect(() => {
		if (dialogOpen && hasRepository && !directoryCache.has("./")) {
			loadDirectoryContents("./");
			setExpandedPaths(new Set(["./"]));
		}
	}, [
		dialogOpen,
		hasRepository,
		loadDirectoryContents,
		directoryCache
	]);
	useEffect(() => {
		if (dialogOpen && hasRepository) {
			const rootContents = directoryCache.get("./");
			if (rootContents) rootContents.contents.filter((item) => item.isDirectory).forEach((dir) => {
				const dirPath = `./${dir.name}`;
				if (!directoryCache.has(dirPath)) loadDirectoryContents(dirPath).catch((error) => {
					console.error(`Failed to preload directory ${dirPath}:`, error);
				});
			});
		}
	}, [
		dialogOpen,
		hasRepository,
		directoryCache,
		loadDirectoryContents
	]);
	useEffect(() => {
		setSelectedDir(value || "./");
	}, [value]);
	return /* @__PURE__ */ jsxs("div", {
		className,
		children: [label && /* @__PURE__ */ jsx(Label, {
			htmlFor: "root-directory",
			className: "text-[13px] mb-2 block",
			children: labelContent
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ jsx(Input, {
				id: "root-directory",
				value,
				onChange: (e) => onChange(e.target.value),
				placeholder,
				disabled,
				className: "h-9 font-mono text-[13px]"
			}), hasRepository && /* @__PURE__ */ jsxs(Dialog, {
				open: dialogOpen,
				onOpenChange: setDialogOpen,
				children: [/* @__PURE__ */ jsx(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px] shrink-0",
						disabled,
						children: t("Select")
					})
				}), /* @__PURE__ */ jsxs(DialogContent, {
					className: "z-[10000] sm:max-w-md p-0",
					overlayClassName: "z-[9999]",
					children: [
						/* @__PURE__ */ jsxs(DialogHeader, {
							className: "px-6 pt-6 text-start",
							children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Select root directory") }), /* @__PURE__ */ jsx(DialogDescription, {
								className: "text-[13px] mt-2",
								children: t(description)
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 pb-4 pt-4 max-h-[400px] overflow-y-auto",
							children: directoryCache.has("./") ? /* @__PURE__ */ jsx(DirectoryTree, {
								path: "./",
								selectedPath: selectedDir,
								onSelect: (path) => setSelectedDir(path),
								onToggle: toggleDirectory,
								expandedPaths,
								directoryCache,
								loadDirectoryContents,
								level: 0
							}) : rootErrorKind ? /* @__PURE__ */ jsx(VcsInstallationErrorState, {
								kind: rootErrorKind,
								provider,
								organization,
								reconnectUrl,
								onRetry: () => {
									setRootError(null);
									loadDirectoryContents("./");
								},
								className: "py-2"
							}) : /* @__PURE__ */ jsx("div", {
								className: "flex items-center justify-center py-8",
								children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" })
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								onClick: () => setDialogOpen(false),
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								type: "button",
								onClick: handleSelect,
								disabled: !selectedDir,
								children: t("Select")
							})]
						})
					]
				})]
			})]
		})]
	});
}
function DirectoryTree({ path, selectedPath, onSelect, onToggle, expandedPaths, directoryCache, loadDirectoryContents, level }) {
	const isExpanded = expandedPaths.has(path);
	const contents = directoryCache.get(path);
	const directories = contents?.contents.filter((item) => item.isDirectory) || [];
	const hasSubdirectories = directories.length > 0;
	const hasContents = !!contents;
	useEffect(() => {
		if (isExpanded && !hasContents) loadDirectoryContents(path);
	}, [
		isExpanded,
		hasContents,
		path,
		loadDirectoryContents
	]);
	const handleRowClick = (e) => {
		if (e.target.closest(".directory-select")) {
			onSelect(path);
			return;
		}
		onToggle(path);
	};
	const displayName = path === "./" ? "./" : path.split("/").pop() || path;
	const showExpandButton = hasContents && hasSubdirectories;
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
		onClick: handleRowClick,
		className: cn("flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-start text-[13px] transition-colors hover:bg-accent cursor-pointer", selectedPath === path && "bg-accent"),
		style: { paddingInlineStart: `${level * 16 + 8}px` },
		children: [showExpandButton ? /* @__PURE__ */ jsx(ChevronRight, { className: cn("h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform", isExpanded && "rotate-90") }) : /* @__PURE__ */ jsx("div", { className: "w-3.5 shrink-0" }), /* @__PURE__ */ jsxs("div", {
			className: "directory-select flex items-center gap-2 flex-1 cursor-pointer",
			onClick: (e) => {
				e.stopPropagation();
				onSelect(path);
			},
			children: [/* @__PURE__ */ jsx(FolderOpen, { className: "h-4 w-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
				className: "font-mono truncate",
				children: displayName
			})]
		})]
	}), isExpanded && hasContents && hasSubdirectories && /* @__PURE__ */ jsx("div", { children: directories.map((dir) => {
		let dirPath;
		if (path === "./") dirPath = `./${dir.name}`;
		else if (path.startsWith("./")) dirPath = `${path}/${dir.name}`;
		else dirPath = `./${path}/${dir.name}`;
		return /* @__PURE__ */ jsx(DirectoryTree, {
			path: dirPath,
			selectedPath,
			onSelect,
			onToggle,
			expandedPaths,
			directoryCache,
			loadDirectoryContents,
			level: level + 1
		}, dirPath);
	}) })] });
}
export { RootDirectoryPicker as t };
