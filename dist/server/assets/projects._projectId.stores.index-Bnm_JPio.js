import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import { u as GRID_DEFAULT_PAGE_SIZE } from "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { dd as useDistributionApps, ld as useCreateDistributionApp } from "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
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
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import { t as Label } from "./label-D8nNLJBa.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import "./Avatar-D1PavDBA.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import "./dropdown-menu-DH51wH-m.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import "./tooltip-DUssQZhw.js";
import "./CopyableId-DPIWAPIb.js";
import { t as Route$1 } from "./projects._projectId.stores.index-Cn2xEv-i.js";
import "./RowActionsMenuTrigger-BVwlWTa7.js";
import { c as RESOURCE_CARD_METADATA_DIVIDER_CLASSNAME, r as RESOURCE_CARD_GRID_4_COL_CLASSNAME, s as RESOURCE_CARD_MEDIA_SHELL_CLASSNAME } from "./ResourceCard-DihVgMpG.js";
import "./RefreshButton-BA9lQ7jC.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { t as useServiceListViewMode } from "./use-service-list-view-mode-8H9q__qR.js";
import { t as ServiceListViewToggle } from "./ServiceListViewToggle-BmH3ip7r.js";
import { i as platformLabel, n as PlatformIcons, r as frameworkLabel, t as PlatformIcon } from "./platform-CwoAXQJI.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Package } from "lucide-react";
var PLATFORMS = [
	"android",
	"ios",
	"windows"
];
var FRAMEWORKS = [
	{
		value: "flutter",
		label: "Flutter"
	},
	{
		value: "react-native",
		label: "React Native"
	},
	{
		value: "expo",
		label: "Expo"
	},
	{
		value: "android",
		label: "Android"
	},
	{
		value: "ios",
		label: "iOS"
	},
	{
		value: "maui",
		label: ".NET MAUI"
	},
	{
		value: "other",
		label: "Other"
	}
];
function CreateApp({ open, onOpenChange }) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const createApp = useCreateDistributionApp(projectId);
	const [name, setName] = useState("");
	const [framework, setFramework] = useState("flutter");
	const [platforms, setPlatforms] = useState(["android"]);
	const [identifier, setIdentifier] = useState("");
	const reset = () => {
		setName("");
		setFramework("flutter");
		setPlatforms(["android"]);
		setIdentifier("");
	};
	const togglePlatform = (platform) => {
		setPlatforms((current) => current.includes(platform) ? current.filter((item) => item !== platform) : [...current, platform]);
	};
	const canSubmit = !!projectId && name.trim().length > 0 && platforms.length > 0;
	const handleSubmit = async () => {
		if (!canSubmit) return;
		try {
			const trimmedId = identifier.trim() || void 0;
			const usesBundleId = platforms.includes("ios") && !platforms.includes("android");
			const usesPackageIdentity = platforms.length === 1 && platforms[0] === "windows";
			const app = await createApp.mutateAsync({
				name: name.trim(),
				platforms,
				framework,
				applicationId: trimmedId && !usesBundleId && !usesPackageIdentity ? trimmedId : void 0,
				bundleId: trimmedId && usesBundleId ? trimmedId : void 0,
				packageIdentity: trimmedId && usesPackageIdentity ? trimmedId : void 0
			});
			toast.success(t("Distribution app created"));
			onOpenChange(false);
			reset();
			navigate({
				to: "/projects/$projectId/stores/$appId",
				params: {
					projectId,
					appId: app.$id
				}
			});
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("Failed to create distribution app"));
		}
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) reset();
			onOpenChange(next);
		},
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Create distribution app") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Pick a framework and platforms to start shipping builds to the app stores.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-4 px-6 py-4",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-1.5",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "distribution-app-name",
								children: t("Name")
							}), /* @__PURE__ */ jsx(Input, {
								id: "distribution-app-name",
								value: name,
								onChange: (event) => setName(event.target.value),
								placeholder: t("My app")
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-1.5",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "distribution-app-framework",
								children: t("Framework")
							}), /* @__PURE__ */ jsxs(Select, {
								value: framework,
								onValueChange: setFramework,
								children: [/* @__PURE__ */ jsx(SelectTrigger, {
									id: "distribution-app-framework",
									children: /* @__PURE__ */ jsx(SelectValue, {})
								}), /* @__PURE__ */ jsx(SelectContent, { children: FRAMEWORKS.map((item) => /* @__PURE__ */ jsx(SelectItem, {
									value: item.value,
									children: item.label
								}, item.value)) })]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-1.5",
							children: [/* @__PURE__ */ jsx(Label, { children: t("Platforms") }), /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-2",
								children: PLATFORMS.map((platform) => {
									return /* @__PURE__ */ jsxs("button", {
										type: "button",
										onClick: () => togglePlatform(platform),
										className: cn("flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-[13px] transition-colors", platforms.includes(platform) ? "border-primary bg-primary/10 text-foreground" : "border-border text-muted-foreground hover:bg-muted/50"),
										children: [/* @__PURE__ */ jsx(PlatformIcon, { platform }), platformLabel(platform)]
									}, platform);
								})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-1.5",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "distribution-app-identifier",
								children: t("Identifier (optional)")
							}), /* @__PURE__ */ jsx(Input, {
								id: "distribution-app-identifier",
								value: identifier,
								onChange: (event) => setIdentifier(event.target.value),
								placeholder: "com.example.app"
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						className: "h-9 text-[13px]",
						onClick: () => onOpenChange(false),
						disabled: createApp.isPending,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						className: "h-9 text-[13px]",
						onClick: handleSubmit,
						disabled: !canSubmit || createApp.isPending,
						children: t("Create")
					})]
				})
			]
		})
	});
}
var MIN_SEARCH_LENGTH = 2;
function View() {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const { viewMode, setViewMode } = useServiceListViewMode("stores");
	const [searchInput, setSearchInput] = useState("");
	const [search, setSearch] = useState(void 0);
	const [page, setPage] = useState(1);
	const [createOpen, setCreateOpen] = useState(false);
	const searchDebounceRef = useRef(null);
	useEffect(() => {
		if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
		searchDebounceRef.current = setTimeout(() => {
			const trimmed = searchInput.trim();
			if (trimmed.length > 0 && trimmed.length < MIN_SEARCH_LENGTH) return;
			setSearch(trimmed || void 0);
			setPage(1);
		}, 300);
		return () => {
			if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
		};
	}, [searchInput]);
	const { apps, total, isLoading } = useDistributionApps(projectId, page - 1, 12, search);
	const showLoading = isLoading && apps.length === 0;
	const hasFilters = !!(search && search.length > 0);
	const emptyState = useMemo(() => /* @__PURE__ */ jsx(EmptyState, {
		icon: Package,
		title: t("No distribution apps yet"),
		description: t("Create an app to build and submit to Google Play, the App Store, and the Microsoft Store."),
		isEmpty: !hasFilters,
		hasFilters,
		variant: "card"
	}), [hasFilters, t]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ jsx(ServiceHeader, {
				title: t("Distribution"),
				searchPlaceholder: t("Search apps..."),
				searchValue: searchInput,
				onSearchChange: (value) => {
					setSearchInput(value);
					setPage(1);
				},
				createLabel: t("Create app"),
				onCreate: () => setCreateOpen(true),
				fullWidthBorder: true,
				rightContent: /* @__PURE__ */ jsx(ServiceListViewToggle, {
					viewMode,
					onViewModeChange: setViewMode
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto w-full max-w-7xl flex-1 px-4 pb-4 sm:px-6 sm:pb-6",
				children: showLoading ? /* @__PURE__ */ jsx("div", {
					className: "rounded-lg border border-border bg-card py-12 text-center",
					children: /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground",
						children: t("Loading apps...")
					})
				}) : apps.length === 0 ? emptyState : viewMode === "list" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
					className: "rounded-lg border border-border bg-card overflow-hidden",
					children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
						className: "hover:bg-transparent border-b border-border",
						children: [
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("App")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Platforms")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
								children: t("Identifier")
							}),
							/* @__PURE__ */ jsx(TableHead, {
								className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end",
								children: t("Updated")
							})
						]
					}) }), /* @__PURE__ */ jsx(TableBody, { children: apps.map((app) => /* @__PURE__ */ jsxs(TableRow, {
						className: cn("cursor-pointer transition-colors border-b border-border/50 hover:bg-muted/30"),
						onClick: () => navigate({
							to: "/projects/$projectId/stores/$appId",
							params: {
								projectId,
								appId: app.$id
							}
						}),
						children: [
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 min-w-0",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
										children: /* @__PURE__ */ jsx(Package, { className: "h-4 w-4" })
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ jsx("p", {
											className: "truncate text-[13px] font-medium text-foreground",
											children: app.name
										}), /* @__PURE__ */ jsx("p", {
											className: "mt-0.5 truncate text-[12px] text-muted-foreground",
											children: frameworkLabel(app.framework)
										})]
									})]
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx(PlatformIcons, { platforms: app.platforms })
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx("span", {
									className: "truncate text-[12px] text-muted-foreground font-mono",
									children: app.applicationId || app.bundleId || app.packageIdentity || "-"
								})
							}),
							/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3 text-end",
								children: /* @__PURE__ */ jsx(DateTooltip, {
									date: app.$updatedAt,
									className: "text-[12px] text-muted-foreground font-mono"
								})
							})
						]
					}, app.$id)) })] })
				}), /* @__PURE__ */ jsx(Pagination, {
					currentPage: page,
					totalItems: total,
					pageSize: 12,
					pageSizeOptions: [
						12,
						18,
						36,
						72
					],
					onPageChange: setPage,
					onPageSizeChange: () => setPage(1),
					showPageSizeSelector: false,
					itemLabel: t("apps")
				})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
					className: RESOURCE_CARD_GRID_4_COL_CLASSNAME,
					children: apps.map((app) => /* @__PURE__ */ jsx(Link, {
						to: "/projects/$projectId/stores/$appId",
						params: {
							projectId,
							appId: app.$id
						},
						className: "block min-w-0 group",
						children: /* @__PURE__ */ jsx("div", {
							className: cn(RESOURCE_CARD_MEDIA_SHELL_CLASSNAME, "h-auto"),
							children: /* @__PURE__ */ jsxs("div", {
								className: "px-4 pt-4 pb-0",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-start justify-between gap-3 min-w-0",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 min-w-0",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
											children: /* @__PURE__ */ jsx(Package, { className: "h-4 w-4" })
										}), /* @__PURE__ */ jsxs("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "truncate text-[14px] font-medium text-foreground",
												children: app.name
											}), /* @__PURE__ */ jsx("p", {
												className: "mt-0.5 truncate text-[12px] text-muted-foreground",
												children: frameworkLabel(app.framework)
											})]
										})]
									}), /* @__PURE__ */ jsx(PlatformIcons, {
										platforms: app.platforms,
										className: "pt-1"
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: RESOURCE_CARD_METADATA_DIVIDER_CLASSNAME,
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex min-w-0 items-center justify-between gap-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "truncate text-[12px] text-muted-foreground font-mono",
											children: app.applicationId || app.bundleId || app.packageIdentity || "-"
										}), /* @__PURE__ */ jsx(DateTooltip, {
											date: app.$updatedAt,
											className: "shrink-0 text-[12px] text-muted-foreground"
										})]
									})
								})]
							})
						})
					}, app.$id))
				}), /* @__PURE__ */ jsx(Pagination, {
					currentPage: page,
					totalItems: total,
					pageSize: 12,
					pageSizeOptions: [
						12,
						18,
						36,
						72
					],
					onPageChange: setPage,
					onPageSizeChange: () => setPage(1),
					showPageSizeSelector: false,
					itemLabel: t("apps")
				})] })
			}),
			/* @__PURE__ */ jsx(CreateApp, {
				open: createOpen,
				onOpenChange: setCreateOpen
			})
		]
	});
}
function StoresIndexPage() {
	const { projectId } = Route$1.useParams();
	return /* @__PURE__ */ jsx(View, {}, `stores-${projectId}-index`);
}
export { StoresIndexPage as component };
