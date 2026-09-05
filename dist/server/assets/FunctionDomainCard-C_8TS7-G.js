import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { n as useFunctionWizard } from "./WizardContext-CgxZR-_v.js";
import { t as DomainInput } from "./DomainInput-BVoiQ2EY.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Building2, Network } from "lucide-react";
var FUNCTION_DOMAINS_URL = "/docs/products/functions/domains";
var NETWORK_EDGES_URL = "/docs/products/network/edges";
var NETWORK_REGIONS_URL = "/docs/products/network/regions";
function extractSubdomain(fullDomain) {
	return fullDomain.split(".")[0] || "";
}
function FunctionDomainCard({ domain, setDomain, domainValid: _domainValid, setDomainValid }) {
	const t = useT();
	const { endpointType, setEndpointType, baseDomain, region } = useFunctionWizard();
	useEffect(() => {
		const sub$1 = extractSubdomain(domain);
		if (sub$1) setDomain(`${sub$1}.${baseDomain}`);
	}, [baseDomain, setDomain]);
	const sub = extractSubdomain(domain);
	const edgeUrl = sub ? `https://${sub}.appwrite.network` : "https://[name].appwrite.network";
	const regionUrl = sub && region ? `https://${sub}.${region}.appwrite.run` : `https://[name].${region || "region"}.appwrite.run`;
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden mb-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Domain")
				}), /* @__PURE__ */ jsxs("p", {
					className: "text-[12px] text-muted-foreground mt-1",
					children: [
						t("Pick where your function runs. Both support custom domains after deployment."),
						" ",
						/* @__PURE__ */ jsx(DocsRouteLink, {
							className: "link-neutral font-medium",
							href: NETWORK_REGIONS_URL,
							children: t("Region")
						}),
						" · ",
						/* @__PURE__ */ jsx(DocsRouteLink, {
							className: "link-neutral font-medium",
							href: NETWORK_EDGES_URL,
							children: t("Edge")
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 space-y-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
					children: [/* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => {
							setEndpointType("region");
							if (sub && region) setDomain(`${sub}.${region}.appwrite.run`);
						},
						className: cn("text-start rounded-lg border p-4 transition-all cursor-pointer", endpointType === "region" ? "border-foreground bg-primary/5" : "border-border hover:border-muted-foreground/50"),
						children: [
							/* @__PURE__ */ jsx(Building2, { className: "h-5 w-5 text-muted-foreground mb-2" }),
							/* @__PURE__ */ jsx("div", {
								className: "text-[13px] font-semibold",
								children: t("Region compute")
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-muted-foreground mt-0.5",
								children: t("Data sovereignty, compliance")
							}),
							/* @__PURE__ */ jsx("code", {
								className: "mt-2 block text-[11px] text-muted-foreground font-mono truncate",
								children: regionUrl
							})
						]
					}), /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => {
							setEndpointType("edge");
							if (sub) setDomain(`${sub}.appwrite.network`);
						},
						className: cn("text-start rounded-lg border p-4 transition-all cursor-pointer", endpointType === "edge" ? "border-foreground bg-primary/5" : "border-border hover:border-muted-foreground/50"),
						children: [
							/* @__PURE__ */ jsx(Network, { className: "h-5 w-5 text-muted-foreground mb-2" }),
							/* @__PURE__ */ jsx("div", {
								className: "text-[13px] font-semibold",
								children: t("Edge network")
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-muted-foreground mt-0.5",
								children: t("Geo-routed, lowest latency")
							}),
							/* @__PURE__ */ jsx("code", {
								className: "mt-2 block text-[11px] text-muted-foreground font-mono truncate",
								children: edgeUrl
							})
						]
					})]
				}), /* @__PURE__ */ jsx(DomainInput, {
					value: domain,
					onChange: setDomain,
					onValidChange: setDomainValid,
					baseDomain,
					placeholder: "my-function"
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-4 border-t border-border bg-muted/20",
				children: /* @__PURE__ */ jsxs("p", {
					className: "text-[11px] text-muted-foreground",
					children: [
						t("Custom domain can be added in function settings."),
						" ",
						/* @__PURE__ */ jsx(DocsRouteLink, {
							className: "link-neutral font-medium",
							href: FUNCTION_DOMAINS_URL,
							children: t("Learn more")
						})
					]
				})
			})
		]
	});
}
export { FunctionDomainCard as t };
