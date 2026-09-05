import { BotMessageSquare, Database, Folder, Globe, MessageSquare, Radio, ScanSearch, Search, Shield, Users, Zap } from "lucide-react";
const PRODUCT_IDS = [
	"auth",
	"databases",
	"storage",
	"functions",
	"messaging",
	"sites",
	"firewall"
];
const PRODUCT_REGISTRY = {
	auth: {
		id: "auth",
		name: "Auth",
		group: "build",
		path: "/products/auth",
		icon: Users,
		tagline: "Email, OAuth, SMS, MFA, teams, and sessions.",
		docsPath: "/docs/products/auth"
	},
	databases: {
		id: "databases",
		name: "Databases",
		group: "build",
		path: "/products/databases",
		icon: Database,
		tagline: "TablesDB, DocumentsDB, VectorsDB, PostgreSQL, MySQL.",
		docsPath: "/docs/products/databases"
	},
	storage: {
		id: "storage",
		name: "Storage",
		group: "build",
		path: "/products/storage",
		icon: Folder,
		tagline: "Upload, transform, and deliver files on CDN.",
		docsPath: "/docs/products/storage"
	},
	functions: {
		id: "functions",
		name: "Functions",
		group: "build",
		path: "/products/functions",
		icon: Zap,
		tagline: "APIs, cron jobs, and event handlers at scale.",
		docsPath: "/docs/products/functions"
	},
	messaging: {
		id: "messaging",
		name: "Messaging",
		group: "build",
		path: "/products/messaging",
		icon: MessageSquare,
		tagline: "Email, SMS, and push with topics and targets.",
		docsPath: "/docs/products/messaging"
	},
	sites: {
		id: "sites",
		name: "Sites",
		group: "deploy",
		path: "/products/sites",
		icon: Globe,
		tagline: "Static, SSR, and CSR deploys from Git.",
		docsPath: "/docs/products/sites"
	},
	firewall: {
		id: "firewall",
		name: "Firewall",
		group: "protect",
		path: "/products/firewall",
		icon: Shield,
		tagline: "Project rules to deny, rate limit, and redirect traffic.",
		docsPath: "/docs/products/firewall"
	}
};
PRODUCT_IDS.filter((id) => PRODUCT_REGISTRY[id].group === "build");
PRODUCT_IDS.filter((id) => PRODUCT_REGISTRY[id].group === "deploy");
const PRODUCT_NAV_ITEM_IDS = [
	"auth",
	"databases",
	"storage",
	"functions",
	"messaging",
	"realtime",
	"agent",
	"sites",
	"domains",
	"firewall",
	"advisor"
];
const PRODUCT_NAV_REGISTRY = {
	auth: {
		id: "auth",
		name: PRODUCT_REGISTRY.auth.name,
		group: "build",
		href: PRODUCT_REGISTRY.auth.path,
		icon: PRODUCT_REGISTRY.auth.icon,
		tagline: PRODUCT_REGISTRY.auth.tagline
	},
	databases: {
		id: "databases",
		name: PRODUCT_REGISTRY.databases.name,
		group: "build",
		href: PRODUCT_REGISTRY.databases.path,
		icon: PRODUCT_REGISTRY.databases.icon,
		tagline: PRODUCT_REGISTRY.databases.tagline
	},
	storage: {
		id: "storage",
		name: PRODUCT_REGISTRY.storage.name,
		group: "build",
		href: PRODUCT_REGISTRY.storage.path,
		icon: PRODUCT_REGISTRY.storage.icon,
		tagline: PRODUCT_REGISTRY.storage.tagline
	},
	functions: {
		id: "functions",
		name: PRODUCT_REGISTRY.functions.name,
		group: "build",
		href: PRODUCT_REGISTRY.functions.path,
		icon: PRODUCT_REGISTRY.functions.icon,
		tagline: PRODUCT_REGISTRY.functions.tagline
	},
	messaging: {
		id: "messaging",
		name: PRODUCT_REGISTRY.messaging.name,
		group: "build",
		href: PRODUCT_REGISTRY.messaging.path,
		icon: PRODUCT_REGISTRY.messaging.icon,
		tagline: PRODUCT_REGISTRY.messaging.tagline
	},
	realtime: {
		id: "realtime",
		name: "Realtime",
		group: "build",
		href: "/docs/apis/realtime",
		icon: Radio,
		tagline: "Live events, channels, and presence."
	},
	agent: {
		id: "agent",
		name: "Agent",
		group: "build",
		href: "/docs/products/agent",
		icon: BotMessageSquare,
		tagline: "Chat to inspect your project and take approved actions."
	},
	sites: {
		id: "sites",
		name: PRODUCT_REGISTRY.sites.name,
		group: "deploy",
		href: PRODUCT_REGISTRY.sites.path,
		icon: PRODUCT_REGISTRY.sites.icon,
		tagline: PRODUCT_REGISTRY.sites.tagline
	},
	domains: {
		id: "domains",
		name: "Domains",
		group: "deploy",
		href: "/domains",
		icon: Search,
		tagline: "Search, buy, transfer, and manage domains."
	},
	firewall: {
		id: "firewall",
		name: PRODUCT_REGISTRY.firewall.name,
		group: "protect",
		href: PRODUCT_REGISTRY.firewall.path,
		icon: PRODUCT_REGISTRY.firewall.icon,
		tagline: PRODUCT_REGISTRY.firewall.tagline
	},
	advisor: {
		id: "advisor",
		name: "Advisor",
		group: "protect",
		href: "/docs/products/network",
		icon: ScanSearch,
		tagline: "Security and performance insights.",
		comingSoon: true
	}
};
function isProductNavItemComingSoon(id) {
	return PRODUCT_NAV_REGISTRY[id].comingSoon === true;
}
const BUILD_NAV_ITEM_IDS = PRODUCT_NAV_ITEM_IDS.filter((id) => PRODUCT_NAV_REGISTRY[id].group === "build");
const DEPLOY_NAV_ITEM_IDS = PRODUCT_NAV_ITEM_IDS.filter((id) => PRODUCT_NAV_REGISTRY[id].group === "deploy");
const PROTECT_NAV_ITEM_IDS = PRODUCT_NAV_ITEM_IDS.filter((id) => PRODUCT_NAV_REGISTRY[id].group === "protect");
const MARKETING_PRODUCT_NAV_CATEGORIES = [
	{
		id: "build",
		label: "Build",
		productIds: BUILD_NAV_ITEM_IDS
	},
	{
		id: "deploy",
		label: "Deploy",
		productIds: DEPLOY_NAV_ITEM_IDS
	},
	{
		id: "protect",
		label: "Protect",
		productIds: PROTECT_NAV_ITEM_IDS
	}
].map((category) => ({
	...category,
	productIds: category.productIds.filter((id) => !isProductNavItemComingSoon(id))
}));
function isProductId(value) {
	return PRODUCT_IDS.includes(value);
}
export { isProductId as a, PRODUCT_REGISTRY as i, PRODUCT_IDS as n, isProductNavItemComingSoon as o, PRODUCT_NAV_REGISTRY as r, MARKETING_PRODUCT_NAV_CATEGORIES as t };
