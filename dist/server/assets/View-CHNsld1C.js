import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { Ft as useOrganizations } from "./organizations-BKtnlNrj.js";
import { Fu as MARKETPLACE_CATEGORY_LABELS, Iu as MARKETPLACE_CATEGORY_ORDER, Ou as useMarketplaceCatalog, Pu as MARKETPLACE_CATEGORY_ICONS, ju as useOrganizationApps, wu as useCreateOrganizationApp } from "./hooks-BONwG3Mt.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { a as SelectLabel, c as SelectValue, i as SelectItem, n as SelectContent, r as SelectGroup, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import { a as openInNewWindow } from "./context-menu-D55xedo-.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { r as getDocsPageUrl } from "./urls-BIlyr2O2.js";
import { o as resolveAppLogoDisplayUrl } from "./apps-logo-Bz8cZPsI.js";
import { a as RESOURCE_CARD_GRID_WIDE_CLASSNAME, f as ResourceCard, n as RESOURCE_CARD_GRID_2_COL_CLASSNAME } from "./ResourceCard-DihVgMpG.js";
import { t as MarketplaceAppBadges } from "./MarketplaceAppBadges-CRO6NDF-.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { BookOpen, ChevronRight, Compass, FileText, LayoutGrid, Loader2, Package, Plus, Search, Store, X } from "lucide-react";
import { z } from "zod";
function buildMarketplaceNavGroups() {
	return [
		{
			id: "discover",
			label: "Discover",
			items: [{
				id: "explore",
				label: "Explore",
				icon: Compass,
				keywords: [
					"explore",
					"overview",
					"home",
					"discover",
					"featured"
				],
				description: "Featured apps, popular integrations, and browse by category."
			}, {
				id: "catalog",
				label: "Catalog",
				icon: LayoutGrid,
				keywords: [
					"catalog",
					"browse",
					"all",
					"integrations"
				],
				description: "Explore all apps available in the marketplace."
			}]
		},
		{
			id: "categories",
			label: "Categories",
			items: MARKETPLACE_CATEGORY_ORDER.map((category) => ({
				id: `category:${category}`,
				label: MARKETPLACE_CATEGORY_LABELS[category],
				icon: MARKETPLACE_CATEGORY_ICONS[category],
				keywords: [category, MARKETPLACE_CATEGORY_LABELS[category]],
				description: `Apps in ${MARKETPLACE_CATEGORY_LABELS[category].toLowerCase()}.`
			}))
		},
		{
			id: "workspace",
			label: "Your apps",
			items: [{
				id: "my-apps",
				label: "My apps",
				icon: Package,
				keywords: [
					"my",
					"owned",
					"published",
					"draft"
				],
				description: "Apps published by your organization."
			}]
		}
	];
}
const MARKETPLACE_SIDEBAR_LINKS = [
	{
		id: "add-app",
		label: "Add app",
		icon: Plus,
		action: "add-app"
	},
	{
		id: "docs",
		label: "Documentation",
		icon: BookOpen,
		href: "/docs",
		external: true
	},
	{
		id: "publisher-guidelines",
		label: "Publisher guidelines",
		icon: FileText,
		action: "publisher-guidelines"
	}
];
function getMarketplaceNavItem(navId, groups = buildMarketplaceNavGroups()) {
	for (const group of groups) {
		const item = group.items.find((i) => i.id === navId);
		if (item) return item;
	}
}
function getAppsForMarketplaceNav(navId, catalog, owned) {
	switch (navId) {
		case "explore": return catalog;
		case "catalog": return catalog;
		case "my-apps": return owned;
		default:
			if (navId.startsWith("category:")) {
				const category = navId.slice(9);
				return catalog.filter((a) => a.category === category);
			}
			return catalog;
	}
}
function countAppsForNav(navId, catalog, owned) {
	return getAppsForMarketplaceNav(navId, catalog, owned).length;
}
function statusVariant(status) {
	if (status === "published") return "success";
	return "info";
}
function statusLabel(status) {
	if (status === "published") return "Published";
	return "Draft";
}
function MarketplaceAppCard({ app, onClick }) {
	const t = useT();
	const CategoryIcon = MARKETPLACE_CATEGORY_ICONS[app.category];
	const logoUrl = resolveAppLogoDisplayUrl(app.logoUri, {
		width: 80,
		height: 80
	});
	return /* @__PURE__ */ jsx(ResourceCard, {
		title: app.name,
		titleAccessory: /* @__PURE__ */ jsx(MarketplaceAppBadges, { app }),
		subtitle: app.shortDescription,
		icon: logoUrl ? void 0 : CategoryIcon,
		customIcon: logoUrl ? /* @__PURE__ */ jsx("img", {
			src: logoUrl,
			alt: "",
			className: "h-10 w-10 rounded-lg object-cover"
		}) : void 0,
		iconColor: logoUrl ? "bg-transparent p-0" : void 0,
		onClick,
		statusLabel: app.isOwned ? t(statusLabel(app.status)) : void 0,
		status: app.isOwned ? statusVariant(app.status) : void 0
	});
}
function slugify(value) {
	return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function CreateMarketplaceApp({ open, onOpenChange, onCreate, isSubmitting = false }) {
	const t = useT();
	const [name, setName] = useState("");
	const [slug, setSlug] = useState("");
	const [slugTouched, setSlugTouched] = useState(false);
	const [shortDescription, setShortDescription] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("devtools");
	useEffect(() => {
		if (!open) {
			setName("");
			setSlug("");
			setSlugTouched(false);
			setShortDescription("");
			setDescription("");
			setCategory("devtools");
		}
	}, [open]);
	useEffect(() => {
		if (!slugTouched && name) setSlug(slugify(name));
	}, [name, slugTouched]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!name.trim() || !shortDescription.trim() || isSubmitting) return;
		await onCreate({
			name: name.trim(),
			slug: slug.trim() || slugify(name),
			shortDescription: shortDescription.trim(),
			description: description.trim() || shortDescription.trim(),
			category
		});
	};
	const canSubmit = name.trim().length > 0 && shortDescription.trim().length > 0;
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Add app") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Create an OAuth2 app listing for the marketplace. It is saved as a draft until you publish it.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "px-6 pb-4 pt-0 space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "marketplace-app-name",
									children: t("Name")
								}), /* @__PURE__ */ jsx(Input, {
									id: "marketplace-app-name",
									value: name,
									onChange: (e) => setName(e.target.value),
									placeholder: t("My integration"),
									autoFocus: true
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsx(Label, {
										htmlFor: "marketplace-app-slug",
										children: t("Slug")
									}),
									/* @__PURE__ */ jsx(Input, {
										id: "marketplace-app-slug",
										value: slug,
										onChange: (e) => {
											setSlugTouched(true);
											setSlug(e.target.value);
										},
										placeholder: "my-integration"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground",
										children: t("Used in the public listing URL")
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "marketplace-app-category",
									children: t("Category")
								}), /* @__PURE__ */ jsxs(Select, {
									value: category,
									onValueChange: (v) => setCategory(v),
									children: [/* @__PURE__ */ jsx(SelectTrigger, {
										id: "marketplace-app-category",
										children: /* @__PURE__ */ jsx(SelectValue, {})
									}), /* @__PURE__ */ jsx(SelectContent, { children: Object.keys(MARKETPLACE_CATEGORY_LABELS).map((key) => /* @__PURE__ */ jsx(SelectItem, {
										value: key,
										children: t(MARKETPLACE_CATEGORY_LABELS[key])
									}, key)) })]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "marketplace-app-short",
									children: t("Short description")
								}), /* @__PURE__ */ jsx(Input, {
									id: "marketplace-app-short",
									value: shortDescription,
									onChange: (e) => setShortDescription(e.target.value),
									placeholder: t("One line summary")
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "marketplace-app-description",
									children: t("Description")
								}), /* @__PURE__ */ jsx(Textarea, {
									id: "marketplace-app-description",
									value: description,
									onChange: (e) => setDescription(e.target.value),
									placeholder: t("Full description for the listing page"),
									rows: 4,
									className: "resize-none"
								})]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							onClick: () => onOpenChange(false),
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							type: "submit",
							disabled: !canSubmit || isSubmitting,
							children: t("Add app")
						})]
					})]
				})
			]
		})
	});
}
function SectionHeader({ title, description, actionLabel, onAction, icon: Icon$1 }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-4 flex items-start justify-between gap-4",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [Icon$1 && /* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: title
				})]
			}), description && /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground mt-1",
				children: description
			})]
		}), actionLabel && onAction && /* @__PURE__ */ jsxs("button", {
			type: "button",
			onClick: onAction,
			className: "inline-flex shrink-0 cursor-pointer items-center gap-1 text-[13px] font-medium link-neutral underline-offset-4",
			children: [actionLabel, /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" })]
		})]
	});
}
function AppGrid({ apps, onAppClick, columns = "default" }) {
	return /* @__PURE__ */ jsx("div", {
		className: columns === "compact" ? RESOURCE_CARD_GRID_2_COL_CLASSNAME : RESOURCE_CARD_GRID_WIDE_CLASSNAME,
		children: apps.map((app) => /* @__PURE__ */ jsx(MarketplaceAppCard, {
			app,
			onClick: () => onAppClick(app)
		}, app.$id))
	});
}
function MarketplaceExplore({ catalogApps, featuredApps, moreApps, categoryCounts, onAppClick, onNavigate }) {
	const t = useT();
	const showViewAllCatalog = catalogApps.length > featuredApps.length + moreApps.length;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-10 [&>section:not(:first-child)]:pt-4",
		children: [
			featuredApps.length > 0 && /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(AppGrid, {
				apps: featuredApps,
				onAppClick
			}) }),
			/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx(SectionHeader, {
				title: t("More apps"),
				description: t("Popular integrations from the marketplace catalog."),
				actionLabel: showViewAllCatalog ? t("View all apps") : void 0,
				onAction: showViewAllCatalog ? () => onNavigate("catalog") : void 0
			}), moreApps.length === 0 ? /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground py-4",
				children: t("No additional apps in the catalog yet.")
			}) : /* @__PURE__ */ jsx(AppGrid, {
				apps: moreApps,
				onAppClick
			})] }),
			/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx(SectionHeader, {
				title: t("Browse by category"),
				description: t("Find integrations grouped by what they help you build.")
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
				children: MARKETPLACE_CATEGORY_ORDER.map((category) => {
					const Icon$1 = MARKETPLACE_CATEGORY_ICONS[category];
					const count = categoryCounts[category];
					return /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => onNavigate(`category:${category}`),
						className: cn("group flex cursor-pointer flex-col items-start gap-3 rounded-lg border border-border bg-card p-4 text-start transition-all", "hover:border-border hover:bg-accent/50"),
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground",
							children: /* @__PURE__ */ jsx(Icon$1, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0 w-full",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-[13px] font-medium text-foreground truncate",
								children: t(MARKETPLACE_CATEGORY_LABELS[category])
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-[12px] text-muted-foreground mt-0.5",
								children: [
									count,
									" ",
									count !== 1 ? t("apps") : t("app")
								]
							})]
						})]
					}, category);
				})
			})] })
		]
	});
}
function SidebarSearch({ value, onChange }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "relative w-full mb-2",
		children: [
			/* @__PURE__ */ jsx(Search, { className: "absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" }),
			/* @__PURE__ */ jsx(Input, {
				placeholder: t("Search apps..."),
				value,
				onChange: (e) => onChange(e.target.value),
				className: cn("h-9 w-full rounded-md border border-border bg-accent/50 ps-10 pe-4 text-[13px] text-foreground placeholder:text-muted-foreground outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", value && "pe-9")
			}),
			value ? /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: () => onChange(""),
				className: "absolute end-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground rounded p-0.5",
				"aria-label": t("Clear search"),
				children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
			}) : null
		]
	});
}
function NavButton({ isActive, onClick, icon: Icon$1, label, count }) {
	return /* @__PURE__ */ jsxs("button", {
		type: "button",
		onClick,
		className: cn("flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-start text-[13px] font-medium transition-colors", isActive ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"),
		children: [
			/* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4 shrink-0" }),
			/* @__PURE__ */ jsx("span", {
				className: "min-w-0 flex-1 truncate",
				children: label
			}),
			count !== void 0 && count > 0 && /* @__PURE__ */ jsx("span", {
				className: "shrink-0 text-[11px] tabular-nums text-muted-foreground",
				children: count
			})
		]
	});
}
function NavGroupsList({ navGroups, activeNavId, onNavChange, getItemCount }) {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: "flex flex-col gap-5 pt-3",
		children: navGroups.map((group) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
			className: "px-3 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
			children: t(group.label)
		}), /* @__PURE__ */ jsx("div", {
			className: "flex flex-col gap-0.5",
			children: group.items.map((item) => /* @__PURE__ */ jsx(NavButton, {
				isActive: activeNavId === item.id,
				onClick: () => onNavChange(item.id),
				icon: item.icon,
				label: t(item.label),
				count: getItemCount?.(item.id)
			}, item.id))
		})] }, group.id))
	});
}
function SidebarLinks({ links, onLinkAction }) {
	const t = useT();
	return /* @__PURE__ */ jsx("div", {
		className: "mt-2 flex flex-col gap-0.5 border-t border-border pt-4",
		children: links.map((link) => {
			const Icon$1 = link.icon;
			const className = cn("flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-start text-[13px] font-medium transition-colors", link.action === "add-app" ? "text-foreground hover:bg-accent/50" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground");
			if (link.href) return /* @__PURE__ */ jsxs("a", {
				href: link.href,
				target: link.external ? "_blank" : void 0,
				rel: link.external ? "noopener noreferrer" : void 0,
				className,
				children: [/* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4 shrink-0" }), t(link.label)]
			}, link.id);
			return /* @__PURE__ */ jsxs("button", {
				type: "button",
				className,
				onClick: () => onLinkAction?.(link),
				...link.action === "add-app" ? analyticsAttrs("create-marketplace-app") : {},
				children: [/* @__PURE__ */ jsx(Icon$1, { className: "h-4 w-4 shrink-0" }), t(link.label)]
			}, link.id);
		})
	});
}
function MarketplaceSidebar({ navGroups, links, activeNavId, activeItem, onNavChange, searchValue, onSearchChange, getItemCount, onLinkAction, children }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-4 lg:flex-row lg:gap-8",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "lg:hidden space-y-2",
				"aria-label": t("Marketplace section"),
				children: [
					/* @__PURE__ */ jsx(SidebarSearch, {
						value: searchValue,
						onChange: onSearchChange
					}),
					/* @__PURE__ */ jsxs(Select, {
						value: activeNavId,
						onValueChange: (v) => onNavChange(v),
						children: [/* @__PURE__ */ jsx(SelectTrigger, {
							size: "sm",
							className: "h-9 w-full text-[13px]",
							children: /* @__PURE__ */ jsx(SelectValue, {})
						}), /* @__PURE__ */ jsx(SelectContent, { children: navGroups.map((group) => /* @__PURE__ */ jsxs(SelectGroup, { children: [/* @__PURE__ */ jsx(SelectLabel, {
							className: "text-[11px] uppercase tracking-wider",
							children: t(group.label)
						}), group.items.map((item) => /* @__PURE__ */ jsx(SelectItem, {
							value: item.id,
							className: "text-[13px]",
							children: /* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4 shrink-0" }), t(item.label)]
							})
						}, item.id))] }, group.id)) })]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "lg:hidden",
						children: /* @__PURE__ */ jsx(SidebarLinks, {
							links,
							onLinkAction
						})
					})
				]
			}),
			/* @__PURE__ */ jsxs("nav", {
				className: "hidden lg:flex sticky top-4 w-52 shrink-0 flex-col self-start",
				"aria-label": t("Marketplace navigation"),
				children: [
					/* @__PURE__ */ jsx(SidebarSearch, {
						value: searchValue,
						onChange: onSearchChange
					}),
					/* @__PURE__ */ jsx(NavGroupsList, {
						navGroups,
						activeNavId,
						onNavChange,
						getItemCount
					}),
					/* @__PURE__ */ jsx(SidebarLinks, {
						links,
						onLinkAction
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1",
				children: [activeItem && /* @__PURE__ */ jsxs("div", {
					className: "mb-6",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-[15px] font-semibold text-foreground",
						children: t(activeItem.label)
					}), activeItem.description && /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mt-1",
						children: t(activeItem.description)
					})]
				}), children]
			})
		]
	});
}
const marketplaceSearchSchema = z.object({}).passthrough();
function filterApps(apps, query) {
	const q = query.trim().toLowerCase();
	if (!q) return apps;
	return apps.filter((app) => app.name.toLowerCase().includes(q) || app.shortDescription.toLowerCase().includes(q) || app.description.toLowerCase().includes(q) || app.tags.some((t) => t.toLowerCase().includes(q)) || app.author.toLowerCase().includes(q));
}
function View() {
	const t = useT();
	const { orgId } = useParams({ strict: false });
	const navigate = useNavigate();
	const { features } = useConsoleProfile();
	const { organizations } = useOrganizations();
	const teamNamesById = useMemo(() => Object.fromEntries(organizations.map((org) => [org.$id, org.name])), [organizations]);
	const { apps: catalogApps, isLoading: catalogLoading, isFetching: catalogFetching } = useMarketplaceCatalog(orgId, teamNamesById);
	const { apps: ownedApps, isLoading: ownedLoading, isFetching: ownedFetching } = useOrganizationApps(orgId, teamNamesById);
	const createAppMutation = useCreateOrganizationApp(orgId);
	const navGroups = useMemo(() => buildMarketplaceNavGroups(), []);
	const [activeNavId, setActiveNavId] = useState("explore");
	const [searchValue, setSearchValue] = useState("");
	const [createDialogOpen, setCreateDialogOpen] = useState(false);
	const searchActive = searchValue.trim().length > 0;
	const isExplore = activeNavId === "explore";
	const activeItem = getMarketplaceNavItem(activeNavId, navGroups);
	const listLoading = (catalogLoading || ownedLoading) && catalogApps.length === 0 && ownedApps.length === 0;
	const listFetching = catalogFetching || ownedFetching;
	const filteredCatalog = useMemo(() => filterApps(catalogApps, searchValue), [catalogApps, searchValue]);
	const featuredApps = useMemo(() => filteredCatalog.filter((a) => a.featured), [filteredCatalog]);
	const moreApps = useMemo(() => filteredCatalog.filter((a) => !a.featured), [filteredCatalog]);
	const categoryCounts = useMemo(() => {
		const counts = Object.fromEntries(MARKETPLACE_CATEGORY_ORDER.map((c) => [c, 0]));
		for (const app of catalogApps) counts[app.category] += 1;
		return counts;
	}, [catalogApps]);
	const displayedApps = useMemo(() => {
		if (isExplore) return searchActive ? filteredCatalog : [];
		return filterApps(getAppsForMarketplaceNav(activeNavId, catalogApps, ownedApps), searchValue);
	}, [
		isExplore,
		searchActive,
		filteredCatalog,
		activeNavId,
		catalogApps,
		ownedApps,
		searchValue
	]);
	const getItemCount = (navId) => {
		if (navId === "explore") return searchActive ? filteredCatalog.length : countAppsForNav("catalog", catalogApps, ownedApps);
		return filterApps(getAppsForMarketplaceNav(navId, catalogApps, ownedApps), searchValue).length;
	};
	const handleCreateApp = async (input) => {
		try {
			const app = await createAppMutation.mutateAsync(input);
			setCreateDialogOpen(false);
			toast.success(t("App created as draft"));
			if (orgId && app?.$id) navigate({
				to: "/organizations/$orgId/apps/$appId",
				params: {
					orgId,
					appId: app.$id
				}
			});
		} catch (error) {
			toast.error(getErrorMessage(error, t("Failed to create app")));
		}
	};
	const openDetail = (app) => {
		if (!orgId) return;
		if (app.isOwned) {
			navigate({
				to: "/organizations/$orgId/apps/$appId",
				params: {
					orgId,
					appId: app.$id
				}
			});
			return;
		}
		navigate({
			to: "/organizations/$orgId/marketplace/$appId",
			params: {
				orgId,
				appId: app.$id
			}
		});
	};
	const handleLinkAction = (link) => {
		if (link.action === "add-app") {
			setCreateDialogOpen(true);
			return;
		}
		if (link.action === "publisher-guidelines") openInNewWindow(getDocsPageUrl("/docs", features.marketing));
	};
	const exploreHasContent = featuredApps.length > 0 || moreApps.length > 0 || MARKETPLACE_CATEGORY_ORDER.some((c) => categoryCounts[c] > 0);
	const emptyTitle = searchActive ? t("No apps match your search") : activeNavId === "my-apps" ? t("No apps published yet") : t("No apps in this section");
	const emptyDescription = searchActive ? t("Try adjusting or clearing your search.") : activeNavId === "my-apps" ? t("Add your first app to share it with other organizations.") : t("Published apps from other organizations will appear here.");
	const mainContent = () => {
		if (listLoading) return /* @__PURE__ */ jsx("div", {
			className: "flex min-h-64 items-center justify-center",
			children: /* @__PURE__ */ jsx(Loader2, { className: "h-8 w-8 animate-spin text-muted-foreground" })
		});
		if (isExplore && !searchActive) {
			if (!exploreHasContent) return /* @__PURE__ */ jsx(EmptyState, {
				icon: Store,
				title: t("Marketplace is empty"),
				description: t("Apps will appear here when other organizations publish listings."),
				variant: "card"
			});
			return /* @__PURE__ */ jsx(MarketplaceExplore, {
				catalogApps,
				featuredApps,
				moreApps,
				categoryCounts,
				onAppClick: openDetail,
				onNavigate: setActiveNavId
			});
		}
		if (displayedApps.length === 0) return /* @__PURE__ */ jsx(EmptyState, {
			icon: Store,
			title: emptyTitle,
			description: emptyDescription,
			action: activeNavId === "my-apps" && !searchActive ? /* @__PURE__ */ jsx(Button, {
				size: "sm",
				onClick: () => setCreateDialogOpen(true),
				...analyticsAttrs("create-marketplace-app"),
				children: t("Add app")
			}) : void 0,
			variant: "card"
		});
		return /* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [listFetching && /* @__PURE__ */ jsx("div", {
				className: "absolute end-0 top-0 z-10",
				children: /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" })
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3",
				children: displayedApps.map((app) => /* @__PURE__ */ jsx(MarketplaceAppCard, {
					app,
					onClick: () => openDetail(app)
				}, app.$id))
			})]
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full flex-col",
		children: [/* @__PURE__ */ jsx(MarketplaceSidebar, {
			navGroups,
			links: MARKETPLACE_SIDEBAR_LINKS,
			activeNavId,
			activeItem,
			onNavChange: setActiveNavId,
			searchValue,
			onSearchChange: setSearchValue,
			getItemCount,
			onLinkAction: handleLinkAction,
			children: mainContent()
		}), /* @__PURE__ */ jsx(CreateMarketplaceApp, {
			open: createDialogOpen,
			onOpenChange: setCreateDialogOpen,
			onCreate: handleCreateApp,
			isSubmitting: createAppMutation.isPending
		})]
	});
}
export { MarketplaceAppCard as i, marketplaceSearchSchema as n, CreateMarketplaceApp as r, View as t };
