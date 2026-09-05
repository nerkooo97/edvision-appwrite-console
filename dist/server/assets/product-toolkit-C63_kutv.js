import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as MarketingSiteLink } from "./MarketingSiteLink-Cxu9rqvv.js";
import { o as isProductNavItemComingSoon, r as PRODUCT_NAV_REGISTRY } from "./registry-C4rxXMsK.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Fragment as Fragment$1 } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Database, Folder, Globe, Globe2, MessageSquare, Radio, ScanSearch, Shield, Users, Zap } from "lucide-react";
var avatarClassName = cn("flex size-9 items-center justify-center rounded-full border border-muted-foreground/6 bg-muted-foreground/[0.025] shadow-none backdrop-blur-sm transition-[border-color,opacity,transform] duration-300 dark:bg-muted/10", "ring-1 ring-background", "hover:z-10 hover:scale-105 hover:border-muted-foreground/10 hover:bg-muted-foreground/[0.04] sm:size-10");
var iconClassName = "size-4 text-muted-foreground/70 sm:size-[17px]";
function ProductAvatarsList({ items, className, ariaLabel }) {
	const t = useT();
	return /* @__PURE__ */ jsx("ul", {
		className: cn("inline-flex items-center justify-center ps-0", className),
		"aria-label": ariaLabel ? t(ariaLabel) : void 0,
		children: items.map((item, index) => {
			const Icon$1 = item.icon;
			return /* @__PURE__ */ jsx("li", {
				className: cn("relative shrink-0", index > 0 && "-ms-2 sm:-ms-2.5"),
				style: { zIndex: index + 1 },
				children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: item.href ? /* @__PURE__ */ jsx(MarketingSiteLink, {
						href: item.href,
						className: cn(avatarClassName, "cursor-pointer"),
						"aria-label": t(item.name),
						children: /* @__PURE__ */ jsx(Icon$1, {
							className: iconClassName,
							strokeWidth: 1.5,
							"aria-hidden": true
						})
					}) : /* @__PURE__ */ jsx("div", {
						className: cn(avatarClassName, "cursor-default"),
						"aria-label": t(item.name),
						children: /* @__PURE__ */ jsx(Icon$1, {
							className: iconClassName,
							strokeWidth: 1.5,
							"aria-hidden": true
						})
					})
				}), /* @__PURE__ */ jsx(TooltipContent, {
					side: "bottom",
					className: "text-[12px]",
					children: t(item.name)
				})] })
			}, item.name);
		})
	});
}
var ALL_PRICING_SERVICES = [
	{
		name: "Auth",
		icon: Users
	},
	{
		name: "Databases",
		icon: Database
	},
	{
		name: "Storage",
		icon: Folder
	},
	{
		name: "Functions",
		icon: Zap
	},
	{
		name: "Messaging",
		icon: MessageSquare
	},
	{
		name: "Realtime",
		icon: Radio
	},
	{
		name: "Sites",
		icon: Globe
	},
	{
		name: "Network",
		icon: Globe2
	},
	{
		name: "Firewall",
		icon: Shield
	},
	{
		name: "Advisor",
		icon: ScanSearch
	}
];
function isPricingServiceComingSoon(name) {
	return Object.values(PRODUCT_NAV_REGISTRY).find((item) => item.name === name)?.comingSoon === true;
}
const pricingServices = ALL_PRICING_SERVICES.filter((service) => !isPricingServiceComingSoon(service.name));
function getProductIcon(label) {
	return pricingServices.find((service) => service.name === label)?.icon ?? Globe;
}
function toAvatarItems(products) {
	return products.map((product) => ({
		name: product.label,
		icon: getProductIcon(product.label),
		href: product.href
	}));
}
function ProductAvatarGroup({ label, products }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-nowrap items-center gap-2.5 sm:gap-3",
		children: [/* @__PURE__ */ jsx("p", {
			className: "shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
			children: t(label)
		}), /* @__PURE__ */ jsx(ProductAvatarsList, {
			items: toAvatarItems(products),
			ariaLabel: `${t(label)} ${t("products")}`
		})]
	});
}
function ScaleAvatarGroup({ href }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-nowrap items-center gap-2.5 sm:gap-3",
		children: [/* @__PURE__ */ jsx("p", {
			className: "shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
			children: t("Scale")
		}), /* @__PURE__ */ jsx(ProductAvatarsList, {
			items: [{
				name: t("Scale"),
				icon: ArrowUpRight,
				href
			}],
			ariaLabel: t("Scale")
		})]
	});
}
function GroupArrow() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-9 shrink-0 items-center justify-center sm:h-10",
		"aria-hidden": true,
		children: [/* @__PURE__ */ jsx(ArrowRight, {
			className: "hidden size-4 text-muted-foreground/50 sm:block",
			strokeWidth: 1.5
		}), /* @__PURE__ */ jsx(ArrowDown, {
			className: "size-4 text-muted-foreground/50 sm:hidden",
			strokeWidth: 1.5
		})]
	});
}
function MarketingProductPills({ build, deploy, protect, scale, className }) {
	const productGroups = [
		{
			label: "Build",
			products: build
		},
		...deploy?.length ? [{
			label: "Deploy",
			products: deploy
		}] : [],
		...protect?.length ? [{
			label: "Protect",
			products: protect
		}] : []
	];
	return /* @__PURE__ */ jsxs("div", {
		className: cn("mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-4 sm:gap-y-3 lg:gap-x-6", className),
		children: [productGroups.map((group, index) => /* @__PURE__ */ jsxs(Fragment$1, { children: [index > 0 ? /* @__PURE__ */ jsx(GroupArrow, {}) : null, /* @__PURE__ */ jsx(ProductAvatarGroup, {
			label: group.label,
			products: group.products
		})] }, group.label)), scale ? /* @__PURE__ */ jsxs(Fragment, { children: [productGroups.length > 0 ? /* @__PURE__ */ jsx(GroupArrow, {}) : null, /* @__PURE__ */ jsx(ScaleAvatarGroup, { href: scale.href })] }) : null]
	});
}
var MARKETING_TOOLKIT_NAV_IDS = {
	build: [
		"auth",
		"databases",
		"storage",
		"functions",
		"messaging",
		"realtime",
		"agent"
	],
	deploy: ["sites"],
	protect: ["firewall", "advisor"]
};
function isToolkitNavItemVisible(id) {
	if (isProductNavItemComingSoon(id)) return false;
	if (id === "agent") return getActiveProfileFeatures().agent;
	return true;
}
function toToolkitItems(ids) {
	return ids.filter(isToolkitNavItemVisible).map((id) => {
		const item = PRODUCT_NAV_REGISTRY[id];
		return {
			label: item.name,
			href: item.href
		};
	});
}
function getMarketingProductToolkit() {
	return {
		build: toToolkitItems(MARKETING_TOOLKIT_NAV_IDS.build),
		deploy: toToolkitItems(MARKETING_TOOLKIT_NAV_IDS.deploy),
		protect: toToolkitItems(MARKETING_TOOLKIT_NAV_IDS.protect)
	};
}
const marketingProductToolkit = {
	get build() {
		return getMarketingProductToolkit().build;
	},
	get deploy() {
		return getMarketingProductToolkit().deploy;
	},
	get protect() {
		return getMarketingProductToolkit().protect;
	}
};
export { MarketingProductPills as n, marketingProductToolkit as t };
