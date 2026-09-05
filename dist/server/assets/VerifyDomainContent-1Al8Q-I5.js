import { s as getBaseEndpoint } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { zo as useConsoleVariables } from "./hooks-BONwG3Mt.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-XaWkg9jR.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { n as getApexDomain } from "./proxy-domains-BLLl99AI.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { AlertCircle, Check, Copy, ExternalLink, Info, Loader2 } from "lucide-react";
var DNS_PROVIDERS_LINK = "/docs/advanced/platform/custom-domains";
function dnsPendingVerificationError(t) {
	return {
		title: t("Domain not verified yet"),
		message: t("DNS changes can take up to 48 hours to propagate. Confirm the records below at your DNS provider, wait a bit, then try again."),
		pending: true
	};
}
function DnsRecordsTable({ records, onCopy, copiedField, showTtl }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
		className: "hover:bg-transparent border-b border-border",
		children: [
			/* @__PURE__ */ jsx(TableHead, {
				className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
				children: t("Type")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
				children: t("Name")
			}),
			/* @__PURE__ */ jsx(TableHead, {
				className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
				children: t("Value")
			}),
			showTtl && /* @__PURE__ */ jsx(TableHead, {
				className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end",
				children: "TTL"
			}),
			/* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end w-[60px]" })
		]
	}) }), /* @__PURE__ */ jsx(TableBody, { children: records.map((r, i) => /* @__PURE__ */ jsxs(TableRow, { children: [
		/* @__PURE__ */ jsx(TableCell, {
			className: "px-4 py-3 font-mono text-[12px]",
			children: /* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-1.5",
				children: [r.type, r.badge ? /* @__PURE__ */ jsx(Badge, {
					variant: "outline",
					className: "text-[10px] shrink-0 font-sans font-medium normal-case tracking-normal",
					children: t(r.badge)
				}) : null]
			})
		}),
		/* @__PURE__ */ jsx(TableCell, {
			className: "px-4 py-3 font-mono text-[12px] truncate max-w-[180px]",
			title: r.name || "-",
			children: r.name || "-"
		}),
		/* @__PURE__ */ jsx(TableCell, {
			className: "px-4 py-3 font-mono text-[12px] truncate max-w-[200px]",
			title: r.value,
			children: r.value
		}),
		showTtl && /* @__PURE__ */ jsx(TableCell, {
			className: "px-4 py-3 text-end text-[12px] text-muted-foreground",
			children: r.ttl ?? "-"
		}),
		/* @__PURE__ */ jsx(TableCell, {
			className: "px-4 py-3 text-end",
			children: /* @__PURE__ */ jsx(Button, {
				variant: "ghost",
				size: "sm",
				className: "h-7 w-7 p-0",
				onClick: () => onCopy(r.value, `${r.type}-${i}`),
				children: copiedField === `${r.type}-${i}` ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" })
			})
		})
	] }, `${r.type}-${i}`)) })] });
}
function VerifyDomainContent({ rule, region, compact, noCard, resourceType = "api", onChange, onVerify, isVerifying, isChanging, verificationError }) {
	const t = useT();
	const [copiedField, setCopiedField] = useState(null);
	const [activeTab, setActiveTab] = useState(null);
	const { cname: rawCname, a, aaaa, caa, nameservers, isLoading, error } = useConsoleVariables(region);
	const isCloud = useMemo(() => {
		try {
			return getBaseEndpoint().includes("cloud.appwrite.io");
		} catch {
			return false;
		}
	}, []);
	const { features } = useConsoleProfile();
	const edgeNetworkEnabled = features.edgeNetwork;
	const cname = useMemo(() => {
		if (edgeNetworkEnabled && (resourceType === "function" || resourceType === "site")) return "appwrite.network";
		return rawCname;
	}, [
		edgeNetworkEnabled,
		resourceType,
		rawCname
	]);
	const handleCopy = (text, field) => {
		navigator.clipboard.writeText(text);
		setCopiedField(field);
		toast.success(t("Copied"));
		setTimeout(() => setCopiedField(null), 2e3);
	};
	const hasCname = !!cname;
	const hasNameservers = isCloud && nameservers.length > 0;
	const hasA = !isCloud && !!a;
	const hasAaaa = !isCloud && !!aaaa;
	const hasCaa = !!caa;
	const tabOptions = [
		...hasCname ? [{
			id: "cname",
			label: "CNAME"
		}] : [],
		...hasNameservers ? [{
			id: "nameservers",
			label: "Nameservers"
		}] : [],
		...hasA ? [{
			id: "a",
			label: "A"
		}] : [],
		...hasAaaa ? [{
			id: "aaaa",
			label: "AAAA"
		}] : []
	];
	const selectedTab = activeTab && tabOptions.some((tab) => tab.id === activeTab) ? activeTab : tabOptions[0]?.id ?? "cname";
	const isApex = useMemo(() => {
		const apex = getApexDomain(rule.domain);
		return !!apex && apex === rule.domain.trim().toLowerCase();
	}, [rule.domain]);
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-[180px] items-center justify-center",
		children: /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin text-muted-foreground" })
	});
	if (error || tabOptions.length === 0) return /* @__PURE__ */ jsxs(Alert, {
		variant: "default",
		className: "border-red-500/30 bg-red-500/10",
		children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-red-600 dark:text-red-400" }), /* @__PURE__ */ jsx(AlertDescription, {
			className: "text-[13px] text-red-600 dark:text-red-400",
			children: t("Failed to load DNS instructions. Please try again.")
		})]
	});
	const recordNote = t("Add the following record(s) to your DNS provider. Note that DNS changes may take up to 48 hours to propagate fully.");
	const nameserverNote = t("Add the following nameservers on your DNS provider. Note that DNS changes may take up to 48 hours to propagate fully.");
	const apexCnameNote = /* @__PURE__ */ jsxs(Alert, {
		variant: "default",
		className: "border-border bg-muted/30 [&>svg]:text-muted-foreground",
		children: [/* @__PURE__ */ jsx(Info, { className: "h-4 w-4" }), /* @__PURE__ */ jsx(AlertDescription, {
			className: "text-[13px] text-muted-foreground",
			children: /* @__PURE__ */ jsxs("p", {
				className: "leading-relaxed",
				children: [
					t("Since"),
					" ",
					/* @__PURE__ */ jsx("code", {
						className: "rounded bg-muted px-1 py-0.5 font-mono text-foreground",
						children: rule.domain
					}),
					" ",
					t("is an apex domain, CNAME record is only supported by certain providers. If yours doesn't, please verify using"),
					" ",
					hasNameservers ? /* @__PURE__ */ jsx("button", {
						type: "button",
						className: "font-medium text-foreground underline underline-offset-2 hover:no-underline",
						onClick: () => setActiveTab("nameservers"),
						children: t("nameservers")
					}) : /* @__PURE__ */ jsx("span", {
						className: "font-medium text-foreground",
						children: t("an A or AAAA record")
					}),
					" ",
					t("instead. If you're using Cloudflare or another CDN, make sure the proxy is disabled (set to DNS only) for this record, since Appwrite serves your domain through its own CDN.")
				]
			})
		})]
	});
	const getCnameRecordName = (domain) => {
		const parts = domain.split(".");
		return parts.length > 2 ? parts[0] : "@";
	};
	const getCnameRecords = () => {
		const rows = [{
			type: "CNAME",
			name: getCnameRecordName(rule.domain),
			value: cname,
			ttl: 3600
		}];
		if (hasCaa) rows.push({
			type: "CAA",
			name: "@",
			value: caa,
			ttl: 3600,
			badge: "Recommended"
		});
		return rows;
	};
	const getNameserverRecords = () => nameservers.map((ns) => ({
		type: "NS",
		name: "",
		value: ns,
		ttl: null
	}));
	const cardClassName = "rounded-xl border border-border bg-card/50 overflow-hidden";
	const padX = compact ? "px-4" : "px-6";
	const padY = compact ? "py-3" : "py-4";
	const innerContent = /* @__PURE__ */ jsxs(Fragment, { children: [
		!noCard && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
			className: `${padX} ${padY}`,
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Verification")
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground font-mono mt-2",
				children: rule.domain
			})]
		}), /* @__PURE__ */ jsx("div", { className: "border-t border-border" })] }),
		/* @__PURE__ */ jsx("div", {
			className: noCard ? "space-y-4" : `${padX} ${padY}`,
			children: tabOptions.length === 1 ? /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx("p", {
					className: "pb-3 text-[13px] text-muted-foreground",
					children: tabOptions[0].id === "nameservers" ? nameserverNote : recordNote
				}),
				tabOptions[0].id === "cname" && /* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ jsx(DnsRecordsTable, {
						records: getCnameRecords(),
						onCopy: handleCopy,
						copiedField,
						showTtl: true
					}), isApex && apexCnameNote]
				}),
				tabOptions[0].id === "nameservers" && /* @__PURE__ */ jsx(DnsRecordsTable, {
					records: getNameserverRecords(),
					onCopy: handleCopy,
					copiedField,
					showTtl: false
				}),
				tabOptions[0].id === "a" && /* @__PURE__ */ jsx(DnsRecordsTable, {
					records: [{
						type: "A",
						name: rule.domain,
						value: a,
						ttl: 3600
					}],
					onCopy: handleCopy,
					copiedField,
					showTtl: true
				}),
				tabOptions[0].id === "aaaa" && /* @__PURE__ */ jsx(DnsRecordsTable, {
					records: [{
						type: "AAAA",
						name: rule.domain,
						value: aaaa,
						ttl: 3600
					}],
					onCopy: handleCopy,
					copiedField,
					showTtl: true
				})
			] }) : /* @__PURE__ */ jsxs(Tabs, {
				value: selectedTab,
				onValueChange: setActiveTab,
				className: "w-full",
				children: [/* @__PURE__ */ jsx("div", {
					className: "pb-4",
					children: /* @__PURE__ */ jsx(TabsList, { children: tabOptions.map((tab) => /* @__PURE__ */ jsx(TabsTrigger, {
						value: tab.id,
						children: tab.label
					}, tab.id)) })
				}), tabOptions.map((tab) => /* @__PURE__ */ jsx(TabsContent, {
					value: tab.id,
					className: "mt-0",
					children: /* @__PURE__ */ jsxs("div", {
						className: "pb-4",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "pb-3 text-[13px] text-muted-foreground",
								children: tab.id === "nameservers" ? nameserverNote : recordNote
							}),
							tab.id === "cname" && /* @__PURE__ */ jsxs("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ jsx(DnsRecordsTable, {
									records: getCnameRecords(),
									onCopy: handleCopy,
									copiedField,
									showTtl: true
								}), isApex && apexCnameNote]
							}),
							tab.id === "nameservers" && /* @__PURE__ */ jsx(DnsRecordsTable, {
								records: getNameserverRecords(),
								onCopy: handleCopy,
								copiedField,
								showTtl: false
							}),
							tab.id === "a" && /* @__PURE__ */ jsx(DnsRecordsTable, {
								records: [{
									type: "A",
									name: rule.domain,
									value: a,
									ttl: 3600
								}],
								onCopy: handleCopy,
								copiedField,
								showTtl: true
							}),
							tab.id === "aaaa" && /* @__PURE__ */ jsx(DnsRecordsTable, {
								records: [{
									type: "AAAA",
									name: rule.domain,
									value: aaaa,
									ttl: 3600
								}],
								onCopy: handleCopy,
								copiedField,
								showTtl: true
							})
						]
					})
				}, tab.id))]
			})
		}),
		!noCard && /* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
		/* @__PURE__ */ jsx("div", {
			className: noCard ? "" : `${padX} ${padY}`,
			children: /* @__PURE__ */ jsxs("p", {
				className: "text-[13px] text-muted-foreground",
				children: [
					t("A list of domain providers and their DNS settings is available"),
					" ",
					/* @__PURE__ */ jsxs(DocsRouteLink, {
						className: "inline-flex items-center gap-0.5 font-medium text-foreground underline hover:no-underline",
						href: DNS_PROVIDERS_LINK,
						children: [t("here"), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 shrink-0" })]
					}),
					"."
				]
			})
		})
	] });
	const structuredError = verificationError && typeof verificationError !== "string" ? verificationError : null;
	const plainError = typeof verificationError === "string" ? verificationError : null;
	const errorPending = structuredError?.pending ?? false;
	const errorTitle = structuredError?.title ?? (plainError ? t("Verification failed") : null);
	const errorMessage = structuredError?.message ?? plainError;
	return /* @__PURE__ */ jsxs("div", {
		className: compact ? "space-y-4" : "space-y-6",
		children: [
			errorMessage && errorTitle && /* @__PURE__ */ jsxs(Alert, {
				variant: "default",
				className: errorPending ? "border-amber-500/30 bg-amber-500/10 [&>svg]:text-amber-600 dark:[&>svg]:text-amber-400" : "border-red-500/30 bg-red-500/10 [&>svg]:text-red-600 dark:[&>svg]:text-red-400",
				children: [
					errorPending ? /* @__PURE__ */ jsx(Info, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }),
					/* @__PURE__ */ jsx(AlertTitle, {
						className: errorPending ? "text-[13px] font-medium text-amber-700 dark:text-amber-400" : "text-[13px] font-medium text-red-600 dark:text-red-400",
						children: errorTitle
					}),
					/* @__PURE__ */ jsx(AlertDescription, {
						className: errorPending ? "text-[13px] text-amber-700/90 dark:text-amber-400/90" : "text-[13px] text-red-600 dark:text-red-400",
						children: errorMessage
					})
				]
			}),
			rule.status === "verifying" && /* @__PURE__ */ jsx(Alert, {
				variant: "default",
				className: "border-blue-500/30 bg-blue-500/5",
				children: /* @__PURE__ */ jsx(AlertDescription, {
					className: "text-[13px] text-muted-foreground",
					children: t("SSL certificate is being issued. This usually takes a couple of minutes - no action needed on your end.")
				})
			}),
			noCard ? /* @__PURE__ */ jsx("div", {
				className: "space-y-4",
				children: innerContent
			}) : /* @__PURE__ */ jsx("div", {
				className: cardClassName,
				children: innerContent
			}),
			onVerify && /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				children: [onChange && /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "sm",
					onClick: onChange,
					disabled: isVerifying || isChanging,
					children: t("Change")
				}), /* @__PURE__ */ jsx(Button, {
					size: "sm",
					onClick: onVerify,
					disabled: isVerifying || isChanging,
					children: t("Verify")
				})]
			})
		]
	});
}
export { dnsPendingVerificationError as n, VerifyDomainContent as t };
