import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { Ft as useOrganizations } from "./organizations-BKtnlNrj.js";
import { ft as parseSort, ht as urlFromRouterLocation, lt as getSort, pt as queryParamToMap, rt as encodeSort, st as getQueryParam, tt as buildListSearchParams, ut as mapToQueryParam, z as dnsRecordsFilterColumns } from "./form-field-type-badge-C7qMzJo0.js";
import { $ as shouldShowDomainTransferStatus, B as useDomainTransferStatus, F as useDeleteDnsRecord, G as useUpdateDnsRecord, I as useDeleteOrganizationDomain, J as useUpdateDomainZone, K as useUpdateDomainAutoRenewal, L as useDomain, N as useCreateDnsRecord, Q as isPendingDomainTransferStatus, U as usePresetRecords, V as useDomainZone, X as getDomainTransferStatusBadgeConfig, Y as DOMAIN_TRANSFER_IN_PROGRESS_DESCRIPTION, Z as isDomainTransferInProgress, c as createDomainTransferOut, n as DNS_RECORDS_DEFAULT_SORT_ORDER, q as useUpdateDomainTeam, t as DNS_RECORDS_DEFAULT_SORT_BY, u as deleteDnsRecord, z as useDomainRecords } from "./domains-Bfw8HsXF.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import { a as openInNewWindow, i as openInNewTab, n as copyResourceAsJson, r as copyToClipboard, t as buildConsoleUrl } from "./context-menu-D55xedo-.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as InitialsAvatar } from "./Avatar-D1PavDBA.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, d as DropdownMenuSubContent, f as DropdownMenuSubTrigger, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu, u as DropdownMenuSub } from "./dropdown-menu-DH51wH-m.js";
import { t as Pagination } from "./Pagination-BDei8M4v.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import { n as openDialogAfterOverlayCloses } from "./overlay-lock-CIY7GeXu.js";
import { t as BaseDrawer } from "./BaseDrawer-B4vv4Sf_.js";
import { a as ContextMenuSub, c as ContextMenuTrigger, i as ContextMenuSeparator, n as ContextMenuContent, o as ContextMenuSubContent, r as ContextMenuItem, s as ContextMenuSubTrigger, t as ContextMenu } from "./context-menu-Ca6WjjAw.js";
import { n as MenuItemContent, t as ContextMenuIcon } from "./ContextMenuIcon-DPnw7e0V.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { t as ConsoleLayout } from "./ConsoleLayout-c5WGBGep.js";
import { t as RowActionsMenuTrigger } from "./RowActionsMenuTrigger-BVwlWTa7.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { t as OrganizationBillingHeaderBanners } from "./OrganizationBillingHeaderBanners-DZOTNzPB.js";
import { t as DetailResourceHeaderTitle } from "./ResourceTitleSwitcher-DwH9FR7l.js";
import { t as RetryVerification } from "./RetryVerification-yAjjptiv.js";
import { t as FiltersPopover } from "./FiltersPopover-De49yhdY.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useLocation, useNavigate, useParams, useSearch } from "@tanstack/react-router";
import { Fragment as Fragment$1, useEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { AlertCircle, ArrowLeftRight, Check, CheckCircle2, Copy, Download, ExternalLink, Eye, EyeOff, FileJson, Globe, Link2, List, Lock, MoreHorizontal, Pencil, Plus, RefreshCw, Square, Trash2, Upload } from "lucide-react";
var DNS_RECORD_TYPES = [
	"A",
	"AAAA",
	"CNAME",
	"MX",
	"TXT",
	"NS",
	"SRV",
	"CAA",
	"HTTPS",
	"ALIAS"
];
var DNS_RECORD_DESCRIPTIONS$1 = {
	A: "A records map a domain to an IPv4 address, allowing browsers to find your website by translating the domain name to an IP address.",
	AAAA: "AAAA records map a domain to an IPv6 address, providing the same function as A records but for IPv6-enabled devices.",
	CNAME: "CNAME records alias one domain name to another, allowing you to point subdomains or other domain names to an existing domain.",
	MX: "MX records specify mail servers responsible for receiving emails for a domain, helping route email traffic to the correct mail server.",
	TXT: "TXT records store arbitrary text data in DNS, commonly used for verification purposes, such as domain ownership or email security settings.",
	NS: "NS records define the authoritative DNS servers for a domain, directing queries to the servers that manage the domain's DNS settings.",
	SRV: "SRV records specify the location (hostname and port number) of servers for specific services, directing traffic to particular servers based on service types.",
	CAA: "CAA records define which certificate authorities can issue SSL certificates for your domain. To avoid setup issues, make sure certainly.com is authorized.",
	HTTPS: "HTTPS records define which service or endpoint handles secure HTTPS traffic for your domain, typically used in SSL/TLS configurations.",
	ALIAS: "ALIAS records are similar to CNAMEs but can be used for the root domain, allowing you to point your domain to another domain or server."
};
var DEFAULT_TTL = 3600;
function CreateRecordDialog({ open, onOpenChange, onCreate, isLoading = false }) {
	const t = useT();
	const [type, setType] = useState("A");
	const [name, setName] = useState("");
	const [value, setValue] = useState("");
	const [ttl, setTtl] = useState(DEFAULT_TTL.toString());
	const [priority, setPriority] = useState("");
	const [weight, setWeight] = useState("");
	const [port, setPort] = useState("");
	const [comment, setComment] = useState("");
	useEffect(() => {
		if (!open) {
			setType("A");
			setName("");
			setValue("");
			setTtl(DEFAULT_TTL.toString());
			setPriority("");
			setWeight("");
			setPort("");
			setComment("");
		}
	}, [open]);
	const handleOpenChange = (newOpen) => {
		if (!isLoading) onOpenChange(newOpen);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name.trim() || !value.trim()) return;
		onCreate({
			type,
			name: name.trim(),
			value: value.trim(),
			ttl: parseInt(ttl) || DEFAULT_TTL,
			priority: type === "MX" || type === "SRV" ? parseInt(priority) || void 0 : void 0,
			weight: type === "SRV" ? parseInt(weight) || void 0 : void 0,
			port: type === "SRV" ? parseInt(port) || void 0 : void 0,
			comment: comment.trim() || void 0
		});
	};
	const requiresPriority = type === "MX" || type === "SRV";
	const requiresSRVFields = type === "SRV";
	return /* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange: handleOpenChange,
		title: t("Create DNS Record"),
		maxWidth: "sm:max-w-lg",
		children: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border shrink-0" }), /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSubmit,
			className: "flex flex-1 flex-col min-h-0",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex-1 overflow-y-auto",
				children: /* @__PURE__ */ jsx("div", {
					className: "px-6 py-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsxs(Label, {
										htmlFor: "type",
										children: [
											t("Type"),
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "text-destructive",
												children: "*"
											})
										]
									}),
									/* @__PURE__ */ jsxs(Select, {
										value: type,
										onValueChange: setType,
										disabled: isLoading,
										children: [/* @__PURE__ */ jsx(SelectTrigger, {
											id: "type",
											children: /* @__PURE__ */ jsx(SelectValue, {})
										}), /* @__PURE__ */ jsx(SelectContent, { children: DNS_RECORD_TYPES.map((recordType) => /* @__PURE__ */ jsx(SelectItem, {
											value: recordType,
											children: recordType
										}, recordType)) })]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground",
										children: DNS_RECORD_DESCRIPTIONS$1[type] ? t(DNS_RECORD_DESCRIPTIONS$1[type]) : ""
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsxs(Label, {
										htmlFor: "name",
										children: [
											t("Name"),
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "text-destructive",
												children: "*"
											})
										]
									}),
									/* @__PURE__ */ jsx(Input, {
										id: "name",
										value: name,
										onChange: (e) => setName(e.target.value),
										placeholder: t("@ or subdomain"),
										disabled: isLoading,
										autoFocus: true
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground",
										children: t("Use @ for the root domain, or enter a subdomain (e.g., www, mail)")
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: "value",
									children: [
										t("Value"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}), /* @__PURE__ */ jsx(Input, {
									id: "value",
									value,
									onChange: (e) => setValue(e.target.value),
									placeholder: type === "A" ? "192.0.2.1" : type === "AAAA" ? "2001:db8::1" : type === "CNAME" || type === "MX" || type === "NS" ? "example.com" : type === "TXT" ? "v=spf1 include:_spf.example.com ~all" : type === "SRV" ? "example.com" : type === "CAA" ? "0 issue \"letsencrypt.org\"" : "",
									disabled: isLoading
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsxs(Label, {
										htmlFor: "ttl",
										children: ["TTL ", /* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})]
									}),
									/* @__PURE__ */ jsx(Input, {
										id: "ttl",
										type: "number",
										value: ttl,
										onChange: (e) => setTtl(e.target.value),
										min: "1",
										disabled: isLoading
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground",
										children: t("Time to live in seconds (default: 3600)")
									})
								]
							}),
							requiresPriority && /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsxs(Label, {
										htmlFor: "priority",
										children: [
											t("Priority"),
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "text-destructive",
												children: "*"
											})
										]
									}),
									/* @__PURE__ */ jsx(Input, {
										id: "priority",
										type: "number",
										value: priority,
										onChange: (e) => setPriority(e.target.value),
										placeholder: type === "MX" ? "10" : "0",
										min: "0",
										disabled: isLoading
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground",
										children: type === "MX" ? t("Lower numbers have higher priority") : t("Priority for SRV record")
									})
								]
							}),
							requiresSRVFields && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: "weight",
									children: [
										t("Weight"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}), /* @__PURE__ */ jsx(Input, {
									id: "weight",
									type: "number",
									value: weight,
									onChange: (e) => setWeight(e.target.value),
									placeholder: "10",
									min: "0",
									disabled: isLoading
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: "port",
									children: [
										t("Port"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}), /* @__PURE__ */ jsx(Input, {
									id: "port",
									type: "number",
									value: port,
									onChange: (e) => setPort(e.target.value),
									placeholder: "443",
									min: "1",
									max: "65535",
									disabled: isLoading
								})]
							})] }),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "comment",
									children: t("Comment (optional)")
								}), /* @__PURE__ */ jsx(Textarea, {
									id: "comment",
									value: comment,
									onChange: (e) => setComment(e.target.value),
									placeholder: t("Optional comment"),
									disabled: isLoading,
									rows: 3
								})]
							})
						]
					})
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex-shrink-0 flex items-center justify-start gap-2 border-t border-border bg-muted/30 px-6 py-4",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "submit",
					disabled: isLoading || !name.trim() || !value.trim(),
					children: t("Create Record")
				}), /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					onClick: () => handleOpenChange(false),
					disabled: isLoading,
					children: t("Cancel")
				})]
			})]
		})] })
	});
}
var DNS_RECORD_DESCRIPTIONS = {
	A: "A records map a domain to an IPv4 address, allowing browsers to find your website by translating the domain name to an IP address.",
	AAAA: "AAAA records map a domain to an IPv6 address, providing the same function as A records but for IPv6-enabled devices.",
	CNAME: "CNAME records alias one domain name to another, allowing you to point subdomains or other domain names to an existing domain.",
	MX: "MX records specify mail servers responsible for receiving emails for a domain, helping route email traffic to the correct mail server.",
	TXT: "TXT records store arbitrary text data in DNS, commonly used for verification purposes, such as domain ownership or email security settings.",
	NS: "NS records define the authoritative DNS servers for a domain, directing queries to the servers that manage the domain's DNS settings.",
	SRV: "SRV records specify the location (hostname and port number) of servers for specific services, directing traffic to particular servers based on service types.",
	CAA: "CAA records define which certificate authorities can issue SSL certificates for your domain. To avoid setup issues, make sure certainly.com is authorized.",
	HTTPS: "HTTPS records define which service or endpoint handles secure HTTPS traffic for your domain, typically used in SSL/TLS configurations.",
	ALIAS: "ALIAS records are similar to CNAMEs but can be used for the root domain, allowing you to point your domain to another domain or server."
};
function UpdateRecordDialog({ open, onOpenChange, record, onUpdate, isLoading = false }) {
	const t = useT();
	const [name, setName] = useState(record.name || "");
	const [value, setValue] = useState(record.value || "");
	const [ttl, setTtl] = useState(record.ttl?.toString() || "3600");
	const [priority, setPriority] = useState(record.priority?.toString() || "");
	const [weight, setWeight] = useState(record.weight?.toString() || "");
	const [port, setPort] = useState(record.port?.toString() || "");
	const [comment, setComment] = useState(record.comment || "");
	useEffect(() => {
		if (open && record) {
			setName(record.name || "");
			setValue(record.value || "");
			setTtl(record.ttl?.toString() || "3600");
			setPriority(record.priority?.toString() || "");
			setWeight(record.weight?.toString() || "");
			setPort(record.port?.toString() || "");
			setComment(record.comment || "");
		}
	}, [open, record]);
	const handleOpenChange = (newOpen) => {
		if (!isLoading) onOpenChange(newOpen);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name.trim() || !value.trim()) return;
		onUpdate({
			type: record.type,
			name: name.trim(),
			value: value.trim(),
			ttl: parseInt(ttl) || 3600,
			priority: record.type === "MX" || record.type === "SRV" ? parseInt(priority) || void 0 : void 0,
			weight: record.type === "SRV" ? parseInt(weight) || void 0 : void 0,
			port: record.type === "SRV" ? parseInt(port) || void 0 : void 0,
			comment: comment.trim() || void 0
		});
	};
	const requiresPriority = record.type === "MX" || record.type === "SRV";
	const requiresSRVFields = record.type === "SRV";
	return /* @__PURE__ */ jsx(BaseDrawer, {
		open,
		onOpenChange: handleOpenChange,
		title: t("Update DNS Record"),
		maxWidth: "sm:max-w-lg",
		children: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border shrink-0" }), /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSubmit,
			className: "flex flex-1 flex-col min-h-0",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex-1 overflow-y-auto",
				children: /* @__PURE__ */ jsx("div", {
					className: "px-6 py-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsx(Label, {
										htmlFor: "type",
										children: t("Type")
									}),
									/* @__PURE__ */ jsx(Input, {
										id: "type",
										value: record.type,
										disabled: true
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-[12px] text-muted-foreground",
										children: DNS_RECORD_DESCRIPTIONS[record.type] ? t(DNS_RECORD_DESCRIPTIONS[record.type]) : ""
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: "name",
									children: [
										t("Name"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}), /* @__PURE__ */ jsx(Input, {
									id: "name",
									value: name,
									onChange: (e) => setName(e.target.value),
									placeholder: t("@ or subdomain"),
									disabled: isLoading,
									autoFocus: true
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: "value",
									children: [
										t("Value"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}), /* @__PURE__ */ jsx(Input, {
									id: "value",
									value,
									onChange: (e) => setValue(e.target.value),
									disabled: isLoading
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: "ttl",
									children: ["TTL ", /* @__PURE__ */ jsx("span", {
										className: "text-destructive",
										children: "*"
									})]
								}), /* @__PURE__ */ jsx(Input, {
									id: "ttl",
									type: "number",
									value: ttl,
									onChange: (e) => setTtl(e.target.value),
									min: "1",
									disabled: isLoading
								})]
							}),
							requiresPriority && /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: "priority",
									children: [
										t("Priority"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}), /* @__PURE__ */ jsx(Input, {
									id: "priority",
									type: "number",
									value: priority,
									onChange: (e) => setPriority(e.target.value),
									min: "0",
									disabled: isLoading
								})]
							}),
							requiresSRVFields && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: "weight",
									children: [
										t("Weight"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}), /* @__PURE__ */ jsx(Input, {
									id: "weight",
									type: "number",
									value: weight,
									onChange: (e) => setWeight(e.target.value),
									min: "0",
									disabled: isLoading
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs(Label, {
									htmlFor: "port",
									children: [
										t("Port"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}), /* @__PURE__ */ jsx(Input, {
									id: "port",
									type: "number",
									value: port,
									onChange: (e) => setPort(e.target.value),
									min: "1",
									max: "65535",
									disabled: isLoading
								})]
							})] }),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "comment",
									children: t("Comment (optional)")
								}), /* @__PURE__ */ jsx(Textarea, {
									id: "comment",
									value: comment,
									onChange: (e) => setComment(e.target.value),
									placeholder: t("Optional comment"),
									disabled: isLoading,
									rows: 3
								})]
							})
						]
					})
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex-shrink-0 flex items-center justify-start gap-2 border-t border-border bg-muted/30 px-6 py-4",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "submit",
					disabled: isLoading || !name.trim() || !value.trim(),
					children: t("Update Record")
				}), /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					onClick: () => handleOpenChange(false),
					disabled: isLoading,
					children: t("Cancel")
				})]
			})]
		})] })
	});
}
function DeleteRecordDialog({ open, onOpenChange, record, onDelete, isLoading = false }) {
	const t = useT();
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [/* @__PURE__ */ jsxs(DialogHeader, {
				className: "px-6 pt-6 text-start",
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete DNS Record") }), /* @__PURE__ */ jsxs(DialogDescription, {
					className: "text-[13px] mt-2",
					children: [
						t("Are you sure you want to delete this"),
						" ",
						record.type,
						" ",
						t("record for"),
						" ",
						/* @__PURE__ */ jsx("strong", { children: record.name || "@" }),
						"?",
						" ",
						t("This action cannot be undone.")
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					variant: "outline",
					onClick: () => onOpenChange(false),
					disabled: isLoading,
					children: t("Cancel")
				}), /* @__PURE__ */ jsx(Button, {
					variant: "destructive",
					onClick: onDelete,
					disabled: isLoading,
					children: t("Delete")
				})]
			})]
		})
	});
}
var MAX_FILE_SIZE = 5 * 1024 * 1024;
function ImportZoneDialog({ open, onOpenChange, onImport, isLoading = false }) {
	const t = useT();
	const [file, setFile] = useState(null);
	const [error, setError] = useState("");
	const fileInputRef = useRef(null);
	useEffect(() => {
		if (!open) {
			setFile(null);
			setError("");
			if (fileInputRef.current) fileInputRef.current.value = "";
		}
	}, [open]);
	const handleFileChange = (e) => {
		const selectedFile = e.target.files?.[0];
		setError("");
		if (!selectedFile) {
			setFile(null);
			return;
		}
		if (!selectedFile.name.endsWith(".txt")) {
			setError(t("Please select a .txt file"));
			setFile(null);
			return;
		}
		if (selectedFile.size > MAX_FILE_SIZE) {
			setError(`${t("File size must be less than")} ${MAX_FILE_SIZE / 1e3 / 1e3}MB`);
			setFile(null);
			return;
		}
		setFile(selectedFile);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!file) return;
		try {
			onImport(await file.text());
		} catch {
			setError(t("Failed to read file. Please try again."));
		}
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Import Zone File") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Upload a DNS zone file (.txt format) to import DNS records. Maximum file size is 5MB.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					children: [/* @__PURE__ */ jsx("div", {
						className: "px-6 pb-4 pt-0",
						children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsx(Label, {
									htmlFor: "zone-file",
									children: t("Zone File")
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ jsx("input", {
											ref: fileInputRef,
											id: "zone-file",
											type: "file",
											accept: ".txt",
											onChange: handleFileChange,
											disabled: isLoading,
											className: "hidden"
										}),
										/* @__PURE__ */ jsxs(Button, {
											type: "button",
											variant: "outline",
											onClick: () => fileInputRef.current?.click(),
											disabled: isLoading,
											className: "gap-1.5",
											children: [/* @__PURE__ */ jsx(Upload, { className: "h-4 w-4" }), t("Choose File")]
										}),
										file && /* @__PURE__ */ jsx("span", {
											className: "text-[13px] text-muted-foreground",
											children: file.name
										})
									]
								}),
								error && /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-destructive",
									children: error
								}),
								file && !error && /* @__PURE__ */ jsxs("p", {
									className: "text-[12px] text-muted-foreground",
									children: [
										t("File selected:"),
										" ",
										file.name,
										" (",
										(file.size / 1e3).toFixed(2),
										" KB)"
									]
								})
							]
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							onClick: () => onOpenChange(false),
							disabled: isLoading,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							type: "submit",
							disabled: isLoading || !file || !!error,
							children: t("Import")
						})]
					})]
				})
			]
		})
	});
}
function DnsRecordContextMenu({ orgId, domainId, record, nameValue, value, locked = false, onUpdate, onDelete, children }) {
	const t = useT();
	const recordHref = buildConsoleUrl(`/organizations/${orgId}/domains/${domainId}`);
	return /* @__PURE__ */ jsxs(ContextMenu, { children: [/* @__PURE__ */ jsx(ContextMenuTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ jsxs(ContextMenuContent, {
		className: "w-56",
		children: [
			!locked ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(() => onUpdate(record)),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Pencil }), t("Update")]
			}), /* @__PURE__ */ jsx(ContextMenuSeparator, {})] }) : null,
			/* @__PURE__ */ jsxs(ContextMenuSub, { children: [/* @__PURE__ */ jsxs(ContextMenuSubTrigger, { children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy")] }), /* @__PURE__ */ jsxs(ContextMenuSubContent, { children: [
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("ID", record.$id),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy ID")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Name", nameValue),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy name")]
				}),
				value ? /* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Value", value),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Copy }), t("Copy value")]
				}) : null,
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => copyToClipboard("Link", recordHref),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Link2 }), t("Copy link")]
				}),
				/* @__PURE__ */ jsxs(ContextMenuItem, {
					onSelect: () => void copyResourceAsJson(() => record, { fallback: record }),
					children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: FileJson }), t("Copy as JSON")]
				})
			] })] }),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewTab(recordHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: ExternalLink }), t("Open in new tab")]
			}),
			/* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openInNewWindow(recordHref),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Square }), t("Open in new window")]
			}),
			/* @__PURE__ */ jsx(ContextMenuSeparator, {}),
			!locked ? /* @__PURE__ */ jsxs(ContextMenuItem, {
				onSelect: () => openDialogAfterOverlayCloses(() => onDelete(record)),
				children: [/* @__PURE__ */ jsx(ContextMenuIcon, { icon: Trash2 }), t("Delete")]
			}) : null
		]
	})] });
}
function View({ initialData } = {}) {
	const t = useT();
	const { features } = useConsoleProfile();
	const supportsMultiTenancy = features.multiTenancy;
	const { orgId, domainId } = useParams({ strict: false });
	const navigate = useNavigate();
	const location = useLocation();
	const queryClient = useQueryClient();
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(25);
	const [createRecordDialogOpen, setCreateRecordDialogOpen] = useState(false);
	const [updateRecordDialogOpen, setUpdateRecordDialogOpen] = useState(false);
	const [deleteRecordDialogOpen, setDeleteRecordDialogOpen] = useState(false);
	const [importZoneDialogOpen, setImportZoneDialogOpen] = useState(false);
	const [retryDialogOpen, setRetryDialogOpen] = useState(false);
	const [selectedRecord, setSelectedRecord] = useState(null);
	const [selectedPreset, setSelectedPreset] = useState(null);
	const [copiedField, setCopiedField] = useState(null);
	const [selectedOrgId, setSelectedOrgId] = useState("");
	const [transferDialogOpen, setTransferDialogOpen] = useState(false);
	const [registrarTransferDialogOpen, setRegistrarTransferDialogOpen] = useState(false);
	const [registrarTransferAuthCode, setRegistrarTransferAuthCode] = useState(null);
	const [transferCodeRevealed, setTransferCodeRevealed] = useState(false);
	const [deleteConfirmation, setDeleteConfirmation] = useState("");
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [selectedRecords, setSelectedRecords] = useState(/* @__PURE__ */ new Set());
	const [bulkDeleteRecordsDialogOpen, setBulkDeleteRecordsDialogOpen] = useState(false);
	const [filtersOpen, setFiltersOpen] = useState(false);
	const [autoRenewalEnabled, setAutoRenewalEnabled] = useState(true);
	const search = useSearch({ strict: false });
	const isRecordsIndex = useMemo(() => location.pathname.replace(/\/$/, "") === `/organizations/${orgId}/domains/${domainId}`, [
		location.pathname,
		orgId,
		domainId
	]);
	const recordsFilterMap = useMemo(() => {
		if (!isRecordsIndex || typeof search !== "object" || !search) return /* @__PURE__ */ new Map();
		return queryParamToMap(getQueryParam(urlFromRouterLocation(location, window.location.origin)) ?? search.query ?? null);
	}, [
		isRecordsIndex,
		location.pathname,
		location.search,
		search?.query
	]);
	const recordsSortParams = useMemo(() => {
		if (!isRecordsIndex || typeof search !== "object" || !search) return null;
		const url = urlFromRouterLocation(location, window.location.origin);
		return parseSort(search.sort) ?? getSort(url) ?? {
			sortBy: "$createdAt",
			sortOrder: "asc"
		};
	}, [
		isRecordsIndex,
		search?.sort,
		location.pathname,
		location.search
	]);
	const recordsSortBy = recordsSortParams?.sortBy ?? "$createdAt";
	const recordsSortOrder = recordsSortParams?.sortOrder ?? "asc";
	const filterQueries = recordsFilterMap.size > 0 ? Array.from(recordsFilterMap.values()) : void 0;
	const pageIndexed = currentPage - 1;
	const { data: domainFromHook, isLoading: domainLoading } = useDomain(domainId);
	const domain = domainFromHook ?? initialData?.domain;
	const { data: transferStatusData } = useDomainTransferStatus(domainId, domain?.transferStatus, orgId);
	const domainTransferInProgress = isDomainTransferInProgress(domain);
	const effectiveTransferStatus = transferStatusData?.status ?? domain?.transferStatus;
	const transferInProgress = domainTransferInProgress || isPendingDomainTransferStatus(transferStatusData?.status);
	const transferStatusBadge = (transferInProgress || shouldShowDomainTransferStatus(effectiveTransferStatus)) && effectiveTransferStatus ? getDomainTransferStatusBadgeConfig(effectiveTransferStatus) : null;
	const hasRecordFilters = (filterQueries?.length ?? 0) > 0;
	const { dnsRecords: recordsFromHook, total: recordsTotalFromHook } = useDomainRecords(domainId, pageIndexed, pageSize, filterQueries, recordsSortBy, recordsSortOrder);
	const isFirstPage = currentPage === 1;
	const rawRecords = isFirstPage && initialData?.records && !hasRecordFilters && !recordsFromHook?.length ? initialData.records.dnsRecords : recordsFromHook ?? [];
	const dnsRecords = useMemo(() => {
		if (rawRecords.length === 0) return rawRecords;
		const lockedRecords = [];
		const unlockedRecords = [];
		for (const record of rawRecords) if (record.lock) lockedRecords.push(record);
		else unlockedRecords.push(record);
		if (lockedRecords.length === 0 || unlockedRecords.length === 0) return rawRecords;
		return [...lockedRecords, ...unlockedRecords];
	}, [rawRecords]);
	const recordsTotal = isFirstPage && initialData?.records && !hasRecordFilters ? recordsTotalFromHook ?? initialData.records.total : recordsTotalFromHook ?? 0;
	const verificationStatus = useMemo(() => {
		if (!domain) return null;
		const isVerified = domain.nameservers?.toLowerCase() === "appwrite";
		return {
			isVerified,
			icon: isVerified ? CheckCircle2 : AlertCircle,
			label: isVerified ? "Verified" : "Unverified",
			className: isVerified ? "text-green-600 dark:text-green-500" : "text-yellow-600 dark:text-yellow-500"
		};
	}, [domain]);
	const canManageAutoRenewal = domain?.registrar?.toLowerCase() === "appwrite" && !!domainId;
	const metadataActionClassName = "h-auto p-0 text-[11px] font-medium";
	const autoRenewalStatusClassName = autoRenewalEnabled ? "text-green-600 dark:text-green-500" : "text-yellow-600 dark:text-yellow-500";
	useEffect(() => {
		if (!domain) return;
		setAutoRenewalEnabled(!!domain.autoRenewal);
	}, [domain?.$id, domain?.autoRenewal]);
	const activeTab = useMemo(() => {
		const pathParts = location.pathname.split("/").filter(Boolean);
		const domainIndex = pathParts.findIndex((part, idx) => part === "domains" && pathParts[idx + 1] === domainId);
		if (domainIndex >= 0 && pathParts[domainIndex + 2]) {
			if (pathParts[domainIndex + 2] === "settings") return "settings";
		}
		return "records";
	}, [location.pathname, domainId]);
	const tabs = useMemo(() => [{
		id: "records",
		label: t("DNS Records"),
		to: "/organizations/$orgId/domains/$domainId",
		params: {
			orgId,
			domainId
		}
	}, {
		id: "settings",
		label: t("Settings"),
		to: "/organizations/$orgId/domains/$domainId/settings",
		params: {
			orgId,
			domainId
		}
	}], [
		orgId,
		domainId,
		t
	]);
	const createRecordMutation = useCreateDnsRecord(domainId);
	usePresetRecords(domainId, selectedPreset);
	const handleCreateRecord = (data) => {
		createRecordMutation.mutate({
			type: data.type,
			data: {
				name: data.name,
				value: data.value,
				ttl: data.ttl,
				priority: data.priority,
				weight: data.weight,
				port: data.port,
				comment: data.comment
			}
		}, {
			onSuccess: () => {
				toast.success(t("DNS record created successfully"));
				setCreateRecordDialogOpen(false);
			},
			onError: (error) => {
				toast.error(getErrorMessage(error));
			}
		});
	};
	const updateRecordMutation = useUpdateDnsRecord(domainId);
	const handleUpdateRecord = (recordId, data) => {
		updateRecordMutation.mutate({
			recordId,
			type: data.type,
			data: {
				name: data.name,
				value: data.value,
				ttl: data.ttl,
				priority: data.priority,
				weight: data.weight,
				port: data.port,
				comment: data.comment
			}
		}, {
			onSuccess: () => {
				toast.success(t("DNS record updated successfully"));
				setUpdateRecordDialogOpen(false);
				setSelectedRecord(null);
			},
			onError: (error) => {
				toast.error(getErrorMessage(error));
			}
		});
	};
	const deleteRecordMutation = useDeleteDnsRecord(domainId);
	const handleDeleteRecord = (recordId) => {
		deleteRecordMutation.mutate(recordId, {
			onSuccess: () => {
				toast.success(t("DNS record deleted successfully"));
				setDeleteRecordDialogOpen(false);
				setSelectedRecord(null);
			},
			onError: (error) => {
				toast.error(getErrorMessage(error));
			}
		});
	};
	const deletableRecords = useMemo(() => dnsRecords.filter((r) => !r.lock), [dnsRecords]);
	const bulkDeleteRecordsMutation = useMutation({
		mutationFn: async (recordIds) => {
			if (!domainId) throw new Error("Domain ID is required");
			await Promise.all(recordIds.map((recordId) => deleteDnsRecord(domainId, recordId)));
		},
		onSuccess: async (_, recordIds) => {
			await queryClient.refetchQueries({ queryKey: [
				"dns-records",
				"domain",
				domainId
			] });
			await queryClient.refetchQueries({ queryKey: ["domain", domainId] });
			toast.success(`${t("Deleted")} ${recordIds.length} ${recordIds.length > 1 ? t("DNS records") : t("DNS record")}`);
			setSelectedRecords(/* @__PURE__ */ new Set());
			setBulkDeleteRecordsDialogOpen(false);
		},
		onError: (error) => {
			toast.error(getErrorMessage(error));
		}
	});
	const handleBulkDeleteRecords = () => {
		if (selectedRecords.size === 0) return;
		setBulkDeleteRecordsDialogOpen(true);
	};
	const confirmBulkDeleteRecords = () => {
		if (selectedRecords.size === 0) return;
		bulkDeleteRecordsMutation.mutate(Array.from(selectedRecords));
	};
	const toggleRecord = (recordId, locked) => {
		if (locked) return;
		setSelectedRecords((prev) => {
			const next = new Set(prev);
			if (next.has(recordId)) next.delete(recordId);
			else next.add(recordId);
			return next;
		});
	};
	const toggleAllRecords = () => {
		if (selectedRecords.size === deletableRecords.length) setSelectedRecords(/* @__PURE__ */ new Set());
		else setSelectedRecords(new Set(deletableRecords.map((r) => r.$id)));
	};
	const importZoneMutation = useUpdateDomainZone(domainId);
	const handleImportZone = (content) => {
		importZoneMutation.mutate(content, {
			onSuccess: () => {
				toast.success(t("Zone file imported successfully"));
				setImportZoneDialogOpen(false);
			},
			onError: (error) => {
				toast.error(getErrorMessage(error));
			}
		});
	};
	const handlePresetSelect = async (preset) => {
		setSelectedPreset(preset);
		try {
			const { fetchPresetRecords } = await import("./hooks-PrvhueRi.js");
			const data = await fetchPresetRecords(domainId, preset);
			if (data?.dnsRecords) await handleCreatePresetRecords(data.dnsRecords, preset);
		} catch (error) {
			toast.error(getErrorMessage(error));
			setSelectedPreset(null);
		}
	};
	const handleCreatePresetRecords = async (records, preset) => {
		const presetLabels = {
			"google-workspace": "Google Workspace",
			outlook: "Outlook",
			mailgun: "Mailgun",
			zoho: "Zoho",
			protonmail: "ProtonMail",
			icloud: "iCloud"
		};
		try {
			await Promise.all(records.map((record) => createRecordMutation.mutateAsync({
				type: record.type,
				data: {
					name: record.name || "@",
					value: record.value,
					ttl: record.ttl,
					priority: record.priority,
					weight: record.weight,
					port: record.port,
					comment: record.comment
				}
			})));
			toast.success(`${t("Successfully added")} ${records.length} ${t("DNS records from")} ${presetLabels[preset]}`);
			queryClient.invalidateQueries({ queryKey: [
				"dns-records",
				"domain",
				domainId
			] });
			setSelectedPreset(null);
		} catch (error) {
			toast.error(getErrorMessage(error));
			setSelectedPreset(null);
		}
	};
	const { refetch: refetchZone } = useDomainZone(domainId);
	const handleExportZone = async () => {
		try {
			const result = await refetchZone();
			if (result.data) {
				const content = typeof result.data === "string" ? result.data : result.data?.message || "";
				const blob = new Blob([content], { type: "text/plain" });
				const url = URL.createObjectURL(blob);
				const a = document.createElement("a");
				a.href = url;
				a.download = `${domain?.domain || "zone"}.txt`;
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
				URL.revokeObjectURL(url);
				toast.success(t("Zone file downloaded"));
			}
		} catch (error) {
			toast.error(getErrorMessage(error));
		}
	};
	const handleDomainVerified = () => {
		if (!domainId) return;
		queryClient.invalidateQueries({ queryKey: ["domain", domainId] });
	};
	const handlePageChange = (page) => {
		setCurrentPage(page);
		setSelectedRecords(/* @__PURE__ */ new Set());
	};
	const handlePageSizeChange = (newPageSize) => {
		setPageSize(newPageSize);
		setCurrentPage(1);
		setSelectedRecords(/* @__PURE__ */ new Set());
	};
	const recordsRouteTo = "/organizations/$orgId/domains/$domainId";
	const recordsSearchWithSort = (queryParam, sortParam) => (prev) => ({
		...typeof prev === "object" && prev !== null ? prev : {},
		...buildListSearchParams({
			query: queryParam ?? void 0,
			sort: sortParam ?? void 0
		})
	});
	const handleDnsSortChange = (sortBy, sortOrder) => {
		setCurrentPage(1);
		setSelectedRecords(/* @__PURE__ */ new Set());
		const sortParam = sortBy !== "$createdAt" || sortOrder !== "asc" ? encodeSort(sortBy, sortOrder) : void 0;
		navigate({
			to: recordsRouteTo,
			params: {
				orgId,
				domainId
			},
			search: recordsSearchWithSort(recordsFilterMap.size > 0 ? mapToQueryParam(recordsFilterMap) : void 0, sortParam),
			replace: true
		});
	};
	const applyFilter = (compactKey, queryStr, replaceKey) => {
		const next = new Map(recordsFilterMap);
		if (replaceKey) next.delete(replaceKey);
		next.set(compactKey, queryStr);
		setCurrentPage(1);
		setSelectedRecords(/* @__PURE__ */ new Set());
		const sortParam = recordsSortBy !== "$createdAt" || recordsSortOrder !== "asc" ? encodeSort(recordsSortBy, recordsSortOrder) : void 0;
		navigate({
			to: recordsRouteTo,
			params: {
				orgId,
				domainId
			},
			search: recordsSearchWithSort(mapToQueryParam(next) || void 0, sortParam),
			replace: true
		});
	};
	const removeFilter = (compactKey) => {
		const next = new Map(recordsFilterMap);
		next.delete(compactKey);
		setCurrentPage(1);
		setSelectedRecords(/* @__PURE__ */ new Set());
		setFiltersOpen(false);
		const sortParam = recordsSortBy !== "$createdAt" || recordsSortOrder !== "asc" ? encodeSort(recordsSortBy, recordsSortOrder) : void 0;
		navigate({
			to: recordsRouteTo,
			params: {
				orgId,
				domainId
			},
			search: recordsSearchWithSort(next.size > 0 ? mapToQueryParam(next) : void 0, sortParam),
			replace: true
		});
	};
	const clearAllFilters = () => {
		setCurrentPage(1);
		setSelectedRecords(/* @__PURE__ */ new Set());
		setFiltersOpen(false);
		const sortParam = recordsSortBy !== "$createdAt" || recordsSortOrder !== "asc" ? encodeSort(recordsSortBy, recordsSortOrder) : void 0;
		navigate({
			to: recordsRouteTo,
			params: {
				orgId,
				domainId
			},
			search: recordsSearchWithSort(void 0, sortParam),
			replace: true
		});
	};
	const handleBack = () => {
		navigate({
			to: "/organizations/$orgId/domains",
			params: { orgId }
		});
	};
	const handleCopy = (text, field) => {
		navigator.clipboard.writeText(text);
		setCopiedField(field);
		toast.success(t("Copied to clipboard"));
		setTimeout(() => setCopiedField(null), 2e3);
	};
	const { organizations: allOrganizations, isLoading: organizationsLoading } = useOrganizations();
	const organizations = useMemo(() => {
		if (!allOrganizations || !domain) return [];
		return allOrganizations.filter((org) => org.$id !== domain.teamId).map((org) => ({
			value: org.$id,
			label: org.name
		}));
	}, [allOrganizations, domain]);
	const transferDomainMutation = useUpdateDomainTeam(orgId);
	const updateAutoRenewalMutation = useUpdateDomainAutoRenewal(orgId);
	const createTransferOutMutation = useMutation({
		mutationFn: async () => {
			if (!domainId || !orgId) throw new Error("Missing domain or organization");
			return createDomainTransferOut({
				domainId,
				organizationId: orgId
			});
		},
		onSuccess: (data) => {
			setRegistrarTransferAuthCode(data.authCode);
			toast.success(t("Transfer authorization code generated"));
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to start transfer out"));
		}
	});
	const handleTransferDomain = async () => {
		if (!domainId || !selectedOrgId) return;
		const targetOrgId = selectedOrgId;
		try {
			await transferDomainMutation.mutateAsync({
				domainId,
				teamId: targetOrgId
			});
			const selectedOrg = organizations.find((org) => org.value === targetOrgId);
			toast.success(`${domain?.domain || t("Domain")} ${t("has been transferred to")} ${selectedOrg?.label || t("the selected organization")}`);
			setTransferDialogOpen(false);
			setSelectedOrgId("");
			navigate({
				to: "/organizations/$orgId/domains",
				params: { orgId: targetOrgId }
			});
		} catch (error) {
			toast.error(getErrorMessage(error) || t("Failed to transfer domain"));
		}
	};
	const deleteDomainMutation = useDeleteOrganizationDomain(orgId);
	const handleDeleteDomain = () => {
		if (!domainId || !domain) return;
		if (deleteConfirmation !== domain.domain) {
			toast.error(t("Domain name does not match"));
			return;
		}
		deleteDomainMutation.mutate(domainId, {
			onSuccess: () => {
				toast.success(`${domain.domain} ${t("has been deleted")}`);
				setDeleteDialogOpen(false);
				setDeleteConfirmation("");
				navigate({
					to: "/organizations/$orgId/domains",
					params: { orgId }
				});
			},
			onError: (error) => {
				toast.error(getErrorMessage(error) || t("Failed to delete domain"));
			}
		});
	};
	const handleUpdateAutoRenewal = () => {
		if (!domainId || !domain) return;
		updateAutoRenewalMutation.mutate({
			domainId,
			autoRenewal: autoRenewalEnabled
		}, {
			onSuccess: (updatedDomain) => {
				setAutoRenewalEnabled(!!updatedDomain.autoRenewal);
				toast.success(updatedDomain.autoRenewal ? t("Auto renewal has been enabled") : t("Auto renewal has been disabled"));
			},
			onError: (error) => {
				toast.error(getErrorMessage(error) || t("Failed to update auto renewal"));
			}
		});
	};
	const getRecordTypeColor = (type) => {
		return {
			A: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
			AAAA: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
			CNAME: "bg-green-500/10 text-green-600 dark:text-green-400",
			MX: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
			TXT: "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20",
			NS: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
			SRV: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
			CAA: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
			HTTPS: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
			ALIAS: "bg-amber-500/10 text-amber-600 dark:text-amber-400"
		}[type] || "bg-muted text-muted-foreground";
	};
	if (!domain && !initialData?.domain && !domainLoading) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center",
		children: /* @__PURE__ */ jsxs("div", {
			className: "text-center",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[13px] font-medium text-foreground",
				children: t("Domain not found")
			}), /* @__PURE__ */ jsx(Button, {
				variant: "link",
				onClick: () => navigate({
					to: "/organizations/$orgId/domains",
					params: { orgId }
				}),
				children: t("Back to domains")
			})]
		})
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs(ConsoleLayout, {
			header: {
				onCommandCenterOpen: () => {},
				onCreateOrganization: () => {}
			},
			headerBanner: /* @__PURE__ */ jsx(OrganizationBillingHeaderBanners, { organizationId: orgId }),
			showFooter: true,
			containerClassName: "domain-detail-layout-container",
			children: [/* @__PURE__ */ jsx(ServiceHeader, {
				title: /* @__PURE__ */ jsx(DetailResourceHeaderTitle, {
					kind: "domain",
					label: domain?.domain ?? t("Domain"),
					resourceId: domain?.$id ?? "",
					organizationId: orgId,
					back: {
						onClick: handleBack,
						"aria-label": t("Back to domains")
					}
				}),
				tabs,
				activeTab,
				fullWidthBorder: true,
				contentAfterBorder: transferInProgress ? /* @__PURE__ */ jsx("div", {
					className: "border-b border-border bg-blue-500/5",
					children: /* @__PURE__ */ jsx("div", {
						className: "mx-auto w-full max-w-7xl px-4 py-3 sm:px-6",
						children: /* @__PURE__ */ jsxs(Alert, {
							variant: "default",
							className: "border-blue-500/30 bg-transparent",
							children: [/* @__PURE__ */ jsx(ArrowLeftRight, { className: "h-4 w-4 shrink-0 text-blue-500" }), /* @__PURE__ */ jsxs("div", {
								className: "flex-1 min-w-0 space-y-1",
								children: [/* @__PURE__ */ jsxs(AlertTitle, {
									className: "text-[13px] font-medium text-blue-600 dark:text-blue-400",
									children: [t("Domain transfer in progress"), transferStatusBadge?.label ? ` · ${t(transferStatusBadge.label)}` : null]
								}), /* @__PURE__ */ jsxs(AlertDescription, {
									className: "text-[12px] leading-relaxed text-blue-600/80 dark:text-blue-400/80",
									children: [t(DOMAIN_TRANSFER_IN_PROGRESS_DESCRIPTION), transferStatusData?.reason ? /* @__PURE__ */ jsx("span", {
										className: "mt-2 block text-blue-600/90 dark:text-blue-400/90",
										children: transferStatusData.reason
									}) : null]
								})]
							})]
						})
					})
				}) : activeTab === "records" && verificationStatus && !verificationStatus.isVerified ? /* @__PURE__ */ jsx("div", {
					className: "border-b border-border bg-amber-500/5",
					children: /* @__PURE__ */ jsx("div", {
						className: "mx-auto w-full max-w-7xl px-4 py-3 sm:px-6",
						children: /* @__PURE__ */ jsxs(Alert, {
							variant: "default",
							className: "border-amber-500/30 bg-transparent",
							children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-amber-500" }), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-1 items-start justify-between gap-4",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ jsx(AlertTitle, {
										className: "text-[13px] font-medium text-amber-600 dark:text-amber-400",
										children: t("Domain not verified")
									}), /* @__PURE__ */ jsx(AlertDescription, {
										className: "text-[12px] text-amber-600/80 dark:text-amber-400/80",
										children: /* @__PURE__ */ jsxs("span", {
											className: "inline",
											children: [t("Update your domain's nameservers to point to Appwrite"), " "]
										})
									})]
								}), /* @__PURE__ */ jsxs(Button, {
									size: "sm",
									onClick: () => setRetryDialogOpen(true),
									className: "h-8 shrink-0 bg-amber-500 px-3 text-[12px] font-medium text-amber-950 hover:bg-amber-400 dark:bg-amber-500 dark:text-amber-950 dark:hover:bg-amber-400 gap-1.5 cursor-pointer",
									children: [/* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4" }), t("Retry Verification")]
								})]
							})]
						})
					})
				}) : void 0
			}), /* @__PURE__ */ jsx("div", {
				className: "mx-auto w-full max-w-7xl flex-1 px-4 pt-4 pb-4 sm:px-6 sm:pb-6",
				children: activeTab === "records" ? /* @__PURE__ */ jsxs(Fragment, { children: [
					domain && /* @__PURE__ */ jsx("div", {
						className: "mb-4 rounded-lg border border-border bg-card/50",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-2 gap-x-6 gap-y-3 px-4 py-3 sm:grid-cols-3 lg:grid-cols-6",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-0.5",
										children: t("Status")
									}), /* @__PURE__ */ jsx("div", {
										className: "min-h-[1.25rem] flex items-center gap-1.5",
										children: transferInProgress && transferStatusBadge ? /* @__PURE__ */ jsx(Badge, {
											variant: transferStatusBadge.variant,
											className: "text-[10px] shrink-0",
											children: t(transferStatusBadge.label)
										}) : verificationStatus && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("code", {
											className: cn("text-[12px] font-mono font-medium", verificationStatus.isVerified ? "text-green-600 dark:text-green-500" : "text-yellow-600 dark:text-yellow-500"),
											children: t(verificationStatus.label)
										}), !verificationStatus.isVerified && /* @__PURE__ */ jsx(Button, {
											variant: "link",
											size: "sm",
											onClick: () => setRetryDialogOpen(true),
											className: metadataActionClassName,
											children: t("Verify")
										})] })
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-0.5",
										children: t("Registrar")
									}), /* @__PURE__ */ jsx("div", {
										className: "min-h-[1.25rem] flex items-center",
										children: /* @__PURE__ */ jsx("code", {
											className: "text-[12px] font-mono text-foreground",
											children: domain.registrar === "appwrite" ? "Appwrite" : t("3rd party")
										})
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-0.5",
										children: t("Nameservers")
									}), /* @__PURE__ */ jsx("div", {
										className: "min-h-[1.25rem] flex items-center min-w-0",
										children: /* @__PURE__ */ jsx("code", {
											className: "text-[12px] font-mono text-foreground truncate",
											children: domain.nameservers || t("3rd party")
										})
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-0.5",
										children: t("Expiry date")
									}), /* @__PURE__ */ jsx("div", {
										className: "min-h-[1.25rem] flex items-center",
										children: /* @__PURE__ */ jsx("code", {
											className: "text-[12px] font-mono text-foreground",
											children: domain.expire ? new Date(domain.expire).toLocaleDateString("en-US", {
												year: "numeric",
												month: "short",
												day: "numeric"
											}) : "-"
										})
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-0.5",
										children: t("Auto renewal")
									}), /* @__PURE__ */ jsx("div", {
										className: "min-h-[1.25rem] flex items-center",
										children: canManageAutoRenewal ? /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ jsx("code", {
												className: cn("text-[12px] font-mono font-medium", domain.autoRenewal ? "text-green-600 dark:text-green-500" : "text-yellow-600 dark:text-yellow-500"),
												children: domain.autoRenewal ? t("Enabled") : t("Disabled")
											}), /* @__PURE__ */ jsx(Button, {
												variant: "link",
												size: "sm",
												className: metadataActionClassName,
												onClick: () => navigate({
													to: "/organizations/$orgId/domains/$domainId/settings",
													params: {
														orgId,
														domainId
													}
												}),
												children: t("Update")
											})]
										}) : /* @__PURE__ */ jsx("code", {
											className: "text-[12px] font-mono text-foreground",
											children: "-"
										})
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-0.5",
										children: t("Renewal price")
									}), /* @__PURE__ */ jsx("div", {
										className: "min-h-[1.25rem] flex items-center",
										children: /* @__PURE__ */ jsx("code", {
											className: "text-[12px] font-mono text-foreground",
											children: domain.renewalPrice > 0 ? `$${(domain.renewalPrice / 100).toFixed(2)}/yr` : "-"
										})
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mb-4 flex flex-wrap items-center gap-2 sm:gap-3",
						children: [
							/* @__PURE__ */ jsx(FiltersPopover, {
								open: filtersOpen,
								onOpenChange: setFiltersOpen,
								columns: dnsRecordsFilterColumns,
								filterMap: recordsFilterMap,
								onRemoveFilter: removeFilter,
								onClearAll: clearAllFilters,
								onApplyFilter: applyFilter,
								resourceLabel: "DNS records",
								filterScope: "organizations.domains.records",
								onApplyQuery: (queryParam, sortParam) => {
									navigate({
										to: recordsRouteTo,
										params: {
											orgId,
											domainId
										},
										search: recordsSearchWithSort(queryParam ?? void 0, sortParam ?? void 0),
										replace: true
									});
								},
								sortBy: recordsSortBy,
								sortOrder: recordsSortOrder,
								onSortChange: handleDnsSortChange,
								defaultSortParam: encodeSort(DNS_RECORDS_DEFAULT_SORT_BY, "asc"),
								onReset: () => {
									navigate({
										to: recordsRouteTo,
										params: {
											orgId,
											domainId
										},
										search: {},
										replace: true
									});
								},
								teamId: orgId
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "hidden sm:flex sm:items-center sm:gap-2",
								children: [
									/* @__PURE__ */ jsxs(Button, {
										variant: "outline",
										size: "sm",
										onClick: () => setImportZoneDialogOpen(true),
										className: "h-9 gap-1.5 text-[13px] cursor-pointer",
										children: [/* @__PURE__ */ jsx(Upload, { className: "h-4 w-4" }), t("Import zone file")]
									}),
									/* @__PURE__ */ jsxs(Button, {
										variant: "outline",
										size: "sm",
										onClick: handleExportZone,
										className: "h-9 gap-1.5 text-[13px] cursor-pointer",
										children: [/* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }), t("Export")]
									}),
									/* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
										asChild: true,
										children: /* @__PURE__ */ jsxs(Button, {
											variant: "outline",
											size: "sm",
											className: "h-9 gap-1.5 text-[13px] cursor-pointer",
											children: [/* @__PURE__ */ jsx(List, { className: "h-4 w-4" }), t("Add preset")]
										})
									}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
										align: "start",
										children: [
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												onClick: () => handlePresetSelect("google-workspace"),
												disabled: createRecordMutation.isPending,
												children: "Google Workspace"
											}),
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												onClick: () => handlePresetSelect("outlook"),
												disabled: createRecordMutation.isPending,
												children: "Outlook"
											}),
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												onClick: () => handlePresetSelect("mailgun"),
												disabled: createRecordMutation.isPending,
												children: "Mailgun"
											}),
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												onClick: () => handlePresetSelect("zoho"),
												disabled: createRecordMutation.isPending,
												children: "Zoho"
											}),
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												onClick: () => handlePresetSelect("protonmail"),
												disabled: createRecordMutation.isPending,
												children: "ProtonMail"
											}),
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												onClick: () => handlePresetSelect("icloud"),
												disabled: createRecordMutation.isPending,
												children: "iCloud"
											})
										]
									})] })
								]
							}),
							/* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
								asChild: true,
								children: /* @__PURE__ */ jsxs(Button, {
									variant: "outline",
									size: "sm",
									className: "h-9 gap-1.5 text-[13px] cursor-pointer sm:hidden",
									children: [/* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" }), t("More")]
								})
							}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
								align: "start",
								className: "w-48",
								children: [
									/* @__PURE__ */ jsx(DropdownMenuItem, {
										onSelect: () => openDialogAfterOverlayCloses(() => setImportZoneDialogOpen(true)),
										children: t("Import")
									}),
									/* @__PURE__ */ jsx(DropdownMenuItem, {
										onClick: handleExportZone,
										children: t("Export")
									}),
									/* @__PURE__ */ jsxs(DropdownMenuSub, { children: [/* @__PURE__ */ jsx(DropdownMenuSubTrigger, {
										className: "text-[13px]",
										children: t("Preset")
									}), /* @__PURE__ */ jsxs(DropdownMenuSubContent, {
										className: "w-52",
										children: [
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												onClick: () => handlePresetSelect("google-workspace"),
												disabled: createRecordMutation.isPending,
												children: "Google Workspace"
											}),
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												onClick: () => handlePresetSelect("outlook"),
												disabled: createRecordMutation.isPending,
												children: "Outlook"
											}),
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												onClick: () => handlePresetSelect("mailgun"),
												disabled: createRecordMutation.isPending,
												children: "Mailgun"
											}),
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												onClick: () => handlePresetSelect("zoho"),
												disabled: createRecordMutation.isPending,
												children: "Zoho"
											}),
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												onClick: () => handlePresetSelect("protonmail"),
												disabled: createRecordMutation.isPending,
												children: "ProtonMail"
											}),
											/* @__PURE__ */ jsx(DropdownMenuItem, {
												onClick: () => handlePresetSelect("icloud"),
												disabled: createRecordMutation.isPending,
												children: "iCloud"
											})
										]
									})] })
								]
							})] }),
							/* @__PURE__ */ jsx("div", {
								className: "ms-auto",
								children: /* @__PURE__ */ jsxs(Button, {
									variant: "brandCta",
									onClick: () => setCreateRecordDialogOpen(true),
									className: "h-9 gap-1.5 text-[13px] font-medium cursor-pointer",
									...analyticsAttrs("create-dns-record"),
									children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }), t("Create Record")]
								})
							})
						]
					}),
					dnsRecords.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsx("div", {
							className: "rounded-lg border border-border bg-card overflow-x-auto overflow-y-visible",
							children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
								className: "hover:bg-transparent border-b border-border",
								children: [
									/* @__PURE__ */ jsx(TableHead, {
										className: "w-[40px] px-4 py-3",
										children: deletableRecords.length > 0 ? /* @__PURE__ */ jsx(Checkbox, {
											checked: deletableRecords.length > 0 && selectedRecords.size === deletableRecords.length,
											onCheckedChange: toggleAllRecords
										}) : null
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[180px]",
										children: t("Name")
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[90px]",
										children: t("Type")
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
										children: t("Value")
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[70px]",
										children: "TTL"
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[80px]",
										children: t("Priority")
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[70px]",
										children: t("Weight")
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[70px]",
										children: t("Port")
									}),
									/* @__PURE__ */ jsx(TableHead, {
										className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[150px]",
										children: t("Comment")
									}),
									/* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end w-[100px] pe-4" })
								]
							}) }), /* @__PURE__ */ jsx(TableBody, { children: dnsRecords.map((record) => {
								const nameValue = record.name || "@";
								const value = record.value;
								const isAppwriteManaged = value === "a.a.a.a" || value === "b:b::b:b:b" || value?.startsWith("0 issue \"") && value?.includes("\"");
								const showPriority = record.type === "MX" || record.type === "SRV";
								const showSRVFields = record.type === "SRV";
								const row = /* @__PURE__ */ jsxs(TableRow, { children: [
									/* @__PURE__ */ jsx(TableCell, {
										className: "w-[40px] px-4 py-3",
										children: record.lock ? null : /* @__PURE__ */ jsx(Checkbox, {
											checked: selectedRecords.has(record.$id),
											onCheckedChange: () => toggleRecord(record.$id, !!record.lock)
										})
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2 group/name",
											children: [/* @__PURE__ */ jsx("code", {
												className: "text-[12px] font-mono text-foreground bg-muted/50 px-1.5 py-0.5 rounded",
												children: nameValue
											}), /* @__PURE__ */ jsx(Button, {
												variant: "ghost",
												size: "sm",
												className: "h-6 w-6 p-0 opacity-0 group-hover/name:opacity-100 transition-opacity cursor-pointer",
												onClick: () => handleCopy(nameValue, `name-${record.$id}`),
												children: copiedField === `name-${record.$id}` ? /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3" })
											})]
										})
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3",
										children: /* @__PURE__ */ jsx(Badge, {
											variant: "outline",
											className: cn("text-[11px] font-medium border", getRecordTypeColor(record.type)),
											children: record.type
										})
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3",
										children: /* @__PURE__ */ jsx("div", {
											className: "flex items-center gap-2 max-w-[280px] group/value",
											children: isAppwriteManaged ? /* @__PURE__ */ jsxs(Badge, {
												variant: "outline",
												className: cn("text-[11px] font-medium border bg-emerald-500/5 text-emerald-700 dark:text-emerald-400", "inline-flex items-center gap-1.5 px-2 py-0.5"),
												children: [value === "a.a.a.a" || value === "b:b::b:b:b" ? t("Served by Appwrite") : t("Generated by Appwrite"), " "]
											}) : /* @__PURE__ */ jsxs(Fragment, { children: [value && value.length > 28 ? /* @__PURE__ */ jsx(TooltipProvider, {
												delayDuration: 0,
												children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
													asChild: true,
													children: /* @__PURE__ */ jsx("code", {
														className: "text-[12px] font-mono text-foreground cursor-pointer truncate max-w-[220px] block",
														children: value
													})
												}), /* @__PURE__ */ jsx(TooltipContent, {
													side: "top",
													className: "max-w-md",
													children: /* @__PURE__ */ jsx("p", {
														className: "text-[12px] whitespace-pre-wrap break-words font-mono",
														children: value
													})
												})] })
											}) : /* @__PURE__ */ jsx("code", {
												className: "text-[12px] font-mono text-foreground truncate max-w-[220px] block",
												children: value
											}), /* @__PURE__ */ jsx(Button, {
												variant: "ghost",
												size: "sm",
												className: "h-6 w-6 p-0 shrink-0 opacity-0 group-hover/value:opacity-100 transition-opacity cursor-pointer",
												onClick: () => handleCopy(value, `value-${record.$id}`),
												children: copiedField === `value-${record.$id}` ? /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3" })
											})] })
										})
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3",
										children: /* @__PURE__ */ jsx("code", {
											className: "text-[12px] font-mono text-muted-foreground",
											children: record.ttl
										})
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3",
										children: /* @__PURE__ */ jsx("code", {
											className: "text-[12px] font-mono text-muted-foreground",
											children: showPriority && record.priority !== void 0 ? record.priority : "-"
										})
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3",
										children: /* @__PURE__ */ jsx("code", {
											className: "text-[12px] font-mono text-muted-foreground",
											children: showSRVFields && record.weight !== void 0 ? record.weight : "-"
										})
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3",
										children: /* @__PURE__ */ jsx("code", {
											className: "text-[12px] font-mono text-muted-foreground",
											children: showSRVFields && record.port !== void 0 ? record.port : "-"
										})
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3 w-[150px]",
										children: record.comment ? /* @__PURE__ */ jsx(TooltipProvider, {
											delayDuration: 0,
											children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsx("p", {
													className: "text-[12px] text-muted-foreground line-clamp-2 cursor-pointer min-w-0 break-words",
													children: record.comment
												})
											}), /* @__PURE__ */ jsx(TooltipContent, {
												side: "top",
												className: "max-w-xs",
												children: /* @__PURE__ */ jsx("p", {
													className: "text-[12px] whitespace-pre-wrap break-words",
													children: record.comment
												})
											})] })
										}) : /* @__PURE__ */ jsx("span", {
											className: "text-[12px] text-muted-foreground",
											children: "-"
										})
									}),
									/* @__PURE__ */ jsx(TableCell, {
										className: "px-4 py-3 text-end pe-4",
										children: record.lock ? /* @__PURE__ */ jsx("div", {
											className: "flex justify-end",
											children: /* @__PURE__ */ jsx(Button, {
												variant: "ghost",
												size: "sm",
												className: "h-8 w-8 p-0",
												disabled: true,
												children: /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 text-muted-foreground" })
											})
										}) : /* @__PURE__ */ jsx("div", {
											className: "flex justify-end",
											children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
												asChild: true,
												children: /* @__PURE__ */ jsx(RowActionsMenuTrigger, {})
											}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
												align: "end",
												children: [/* @__PURE__ */ jsx(DropdownMenuItem, {
													onSelect: () => {
														openDialogAfterOverlayCloses(() => {
															setSelectedRecord(record);
															setUpdateRecordDialogOpen(true);
														});
													},
													children: /* @__PURE__ */ jsx(MenuItemContent, {
														icon: Pencil,
														children: t("Update")
													})
												}), /* @__PURE__ */ jsx(DropdownMenuItem, {
													onSelect: () => {
														openDialogAfterOverlayCloses(() => {
															setSelectedRecord(record);
															setDeleteRecordDialogOpen(true);
														});
													},
													children: /* @__PURE__ */ jsx(MenuItemContent, {
														icon: Trash2,
														children: t("Delete")
													})
												})]
											})] })
										})
									})
								] });
								if (!orgId || !domainId) return /* @__PURE__ */ jsx(Fragment$1, { children: row }, record.$id);
								return /* @__PURE__ */ jsx(DnsRecordContextMenu, {
									orgId,
									domainId,
									record,
									nameValue,
									value: value || "",
									locked: !!record.lock,
									onUpdate: (r) => {
										setSelectedRecord(r);
										setUpdateRecordDialogOpen(true);
									},
									onDelete: (r) => {
										setSelectedRecord(r);
										setDeleteRecordDialogOpen(true);
									},
									children: row
								}, record.$id);
							}) })] })
						}),
						/* @__PURE__ */ jsx(Pagination, {
							currentPage,
							totalItems: recordsTotal,
							pageSize,
							pageSizeOptions: [
								10,
								25,
								50,
								100
							],
							onPageChange: handlePageChange,
							onPageSizeChange: handlePageSizeChange,
							itemLabel: t("records")
						}),
						selectedRecords.size > 0 && /* @__PURE__ */ jsx("div", {
							className: "fixed bottom-4 start-1/2 z-50 -translate-x-1/2",
							children: /* @__PURE__ */ jsxs("div", {
								className: "mx-auto flex min-w-[400px] items-center justify-between gap-3 rounded-lg border border-border bg-background px-6 py-3",
								children: [/* @__PURE__ */ jsxs(Badge, {
									variant: "secondary",
									className: "h-6 px-2.5",
									children: [
										selectedRecords.size,
										" ",
										selectedRecords.size > 1 ? t("records") : t("record"),
										" ",
										t("selected")
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(Button, {
										variant: "ghost",
										size: "sm",
										onClick: () => setSelectedRecords(/* @__PURE__ */ new Set()),
										className: "h-8 text-xs",
										children: t("Cancel")
									}), /* @__PURE__ */ jsx(Button, {
										variant: "destructive",
										size: "sm",
										onClick: handleBulkDeleteRecords,
										disabled: bulkDeleteRecordsMutation.isPending,
										className: "h-8 gap-2",
										children: t("Delete")
									})]
								})]
							})
						}),
						/* @__PURE__ */ jsx(Dialog, {
							open: bulkDeleteRecordsDialogOpen,
							onOpenChange: setBulkDeleteRecordsDialogOpen,
							children: /* @__PURE__ */ jsxs(DialogContent, {
								className: "sm:max-w-md p-0",
								children: [/* @__PURE__ */ jsxs(DialogHeader, {
									className: "px-6 pt-6 text-start",
									children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete DNS records") }), /* @__PURE__ */ jsxs(DialogDescription, {
										className: "text-[13px] mt-2",
										children: [
											t("Are you sure you want to delete"),
											" ",
											selectedRecords.size,
											" ",
											selectedRecords.size > 1 ? t("DNS records") : t("DNS record"),
											"? ",
											t("This action cannot be undone.")
										]
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
									children: [/* @__PURE__ */ jsx(Button, {
										variant: "outline",
										onClick: () => setBulkDeleteRecordsDialogOpen(false),
										disabled: bulkDeleteRecordsMutation.isPending,
										children: t("Cancel")
									}), /* @__PURE__ */ jsx(Button, {
										variant: "destructive",
										onClick: confirmBulkDeleteRecords,
										disabled: bulkDeleteRecordsMutation.isPending,
										children: t("Delete")
									})]
								})]
							})
						})
					] }) : hasRecordFilters ? /* @__PURE__ */ jsx(EmptyState, {
						icon: Globe,
						title: t("No records match your filters"),
						description: t("Try adjusting or clearing filters to see more records"),
						variant: "card"
					}) : /* @__PURE__ */ jsx(EmptyState, {
						icon: Globe,
						title: t("No DNS records"),
						description: t("Add your first DNS record to get started"),
						variant: "card"
					})
				] }) : /* @__PURE__ */ jsxs("div", {
					className: "space-y-6",
					children: [
						domain && /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-border bg-card/50 overflow-hidden",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "px-6 py-4",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-[15px] font-semibold text-foreground",
										children: t("Auto renewal")
									}), /* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-muted-foreground mt-2",
										children: t("Choose whether this domain should renew automatically before it expires.")
									})]
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
								/* @__PURE__ */ jsxs("div", {
									className: "px-6 py-4",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-start justify-between gap-4",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ jsx(Label, {
													htmlFor: "auto-renewal-toggle",
													className: "text-[13px] font-medium text-foreground",
													children: t("Enable auto renewal")
												}), /* @__PURE__ */ jsx("p", {
													className: "text-[12px] text-muted-foreground",
													children: /* @__PURE__ */ jsx("span", {
														className: cn("font-medium", autoRenewalStatusClassName),
														children: autoRenewalEnabled ? t("Enabled") : t("Disabled")
													})
												})]
											}), /* @__PURE__ */ jsx(Switch, {
												id: "auto-renewal-toggle",
												checked: autoRenewalEnabled,
												onCheckedChange: setAutoRenewalEnabled,
												disabled: !canManageAutoRenewal || updateAutoRenewalMutation.isPending
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-4 rounded-md border border-border bg-muted/40 px-3 py-2",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
												children: t("Renewal price")
											}), /* @__PURE__ */ jsx("p", {
												className: "mt-1 text-[13px] font-medium text-foreground",
												children: domain.renewalPrice > 0 ? `$${(domain.renewalPrice / 100).toFixed(2)}/yr` : "-"
											})]
										}),
										!canManageAutoRenewal && /* @__PURE__ */ jsx("p", {
											className: "mt-3 text-[12px] text-muted-foreground",
											children: t("Auto renewal is available for domains registered with Appwrite.")
										})
									]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4 border-t border-border bg-muted/30",
									children: /* @__PURE__ */ jsx(Button, {
										size: "sm",
										className: "h-9 text-[13px]",
										disabled: !canManageAutoRenewal || updateAutoRenewalMutation.isPending || domain.autoRenewal === autoRenewalEnabled,
										onClick: handleUpdateAutoRenewal,
										children: t("Update")
									})
								})
							]
						}),
						domain && supportsMultiTenancy && /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-border bg-card/50 overflow-hidden",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ jsx("h3", {
										className: "text-[15px] font-semibold text-foreground",
										children: t("Change organization")
									})
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
								/* @__PURE__ */ jsxs("div", {
									className: "px-6 py-4",
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "text-[13px] text-muted-foreground mb-4",
											children: t("Select an organization you own to move this domain.")
										}),
										/* @__PURE__ */ jsx(Label, {
											htmlFor: "organization",
											className: "text-[11px] font-medium uppercase tracking-wide text-muted-foreground mb-1.5 block",
											children: t("Move to")
										}),
										/* @__PURE__ */ jsxs(Select, {
											value: selectedOrgId,
											onValueChange: setSelectedOrgId,
											disabled: organizationsLoading,
											children: [/* @__PURE__ */ jsx(SelectTrigger, {
												id: "organization",
												className: "mt-2 h-9 max-w-sm",
												children: /* @__PURE__ */ jsx(SelectValue, { placeholder: organizationsLoading && organizations.length === 0 ? t("Loading organizations...") : t("Select destination") })
											}), /* @__PURE__ */ jsx(SelectContent, { children: organizations.length === 0 ? /* @__PURE__ */ jsx("div", {
												className: "px-2 py-1.5 text-[13px] text-muted-foreground",
												children: organizationsLoading ? t("Loading...") : t("No other organizations available")
											}) : organizations.map((org) => /* @__PURE__ */ jsx(SelectItem, {
												value: org.value,
												children: org.label
											}, org.value)) })]
										})
									]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4 border-t border-border bg-muted/30",
									children: /* @__PURE__ */ jsx(Button, {
										size: "sm",
										className: "h-9 text-[13px]",
										disabled: !selectedOrgId || selectedOrgId === domain.teamId || transferDomainMutation.isPending,
										onClick: () => setTransferDialogOpen(true),
										children: t("Move")
									})
								})
							]
						}),
						domain && supportsMultiTenancy && /* @__PURE__ */ jsx(Dialog, {
							open: transferDialogOpen,
							onOpenChange: setTransferDialogOpen,
							children: /* @__PURE__ */ jsxs(DialogContent, {
								className: "sm:max-w-md p-0",
								children: [/* @__PURE__ */ jsxs(DialogHeader, {
									className: "px-6 pt-6 text-start",
									children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Change organization") }), /* @__PURE__ */ jsxs(DialogDescription, {
										className: "text-[13px] mt-2",
										children: [
											t("Are you sure you want to move"),
											" ",
											/* @__PURE__ */ jsx("strong", { children: domain.domain }),
											" ",
											t("to"),
											" ",
											/* @__PURE__ */ jsx("strong", { children: organizations.find((org) => org.value === selectedOrgId)?.label || t("the selected organization") }),
											"?",
											/* @__PURE__ */ jsx("br", {}),
											/* @__PURE__ */ jsx("br", {}),
											t("Members who are not part of the destination organization must be invited to gain access to this domain.")
										]
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
									children: [/* @__PURE__ */ jsx(Button, {
										variant: "outline",
										size: "sm",
										className: "h-9 text-[13px]",
										onClick: () => setTransferDialogOpen(false),
										children: t("Cancel")
									}), /* @__PURE__ */ jsx(Button, {
										size: "sm",
										className: "h-9 text-[13px]",
										disabled: transferDomainMutation.isPending,
										onClick: handleTransferDomain,
										children: t("Move")
									})]
								})]
							})
						}),
						domain?.registrar?.toLowerCase() === "appwrite" && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-border bg-card/50 overflow-hidden",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "px-6 py-4",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-[15px] font-semibold text-foreground",
									children: t("Transfer to another registrar")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[13px] text-muted-foreground mt-2",
									children: t("Generate an authorization code to move this domain to a different registrar. You will provide this code at the receiving registrar.")
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "px-6 py-4 border-t border-border bg-muted/30",
								children: /* @__PURE__ */ jsx(Button, {
									size: "sm",
									variant: "outline",
									className: "h-9 text-[13px]",
									onClick: () => {
										setRegistrarTransferAuthCode(null);
										setRegistrarTransferDialogOpen(true);
									},
									children: t("Get transfer code")
								})
							})]
						}), /* @__PURE__ */ jsx(Dialog, {
							open: registrarTransferDialogOpen,
							onOpenChange: (open) => {
								setRegistrarTransferDialogOpen(open);
								if (!open) {
									setRegistrarTransferAuthCode(null);
									setTransferCodeRevealed(false);
								}
							},
							children: /* @__PURE__ */ jsxs(DialogContent, {
								className: "sm:max-w-md p-0",
								children: [/* @__PURE__ */ jsxs(DialogHeader, {
									className: "px-6 pt-6 pb-4 text-start",
									children: [/* @__PURE__ */ jsx(DialogTitle, { children: registrarTransferAuthCode ? t("Your transfer code") : t("Transfer to another registrar") }), /* @__PURE__ */ jsx(DialogDescription, {
										className: "text-[13px] mt-2",
										children: registrarTransferAuthCode ? t("Copy this code and submit it at your new registrar to complete the transfer out.") : t("This will generate a transfer authorization code for your domain. Keep it private until you use it at the receiving registrar.")
									})]
								}), registrarTransferAuthCode ? /* @__PURE__ */ jsxs(Fragment, { children: [
									/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
									/* @__PURE__ */ jsx("div", {
										className: "px-6 py-4",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ jsx(Input, {
												readOnly: true,
												type: transferCodeRevealed ? "text" : "password",
												value: registrarTransferAuthCode,
												className: "h-10 font-mono text-[13px]"
											}), /* @__PURE__ */ jsx(Button, {
												type: "button",
												variant: "outline",
												size: "icon",
												className: "h-10 w-10 shrink-0",
												onClick: () => setTransferCodeRevealed((v) => !v),
												title: transferCodeRevealed ? t("Hide code") : t("Show code"),
												"aria-label": transferCodeRevealed ? t("Hide code") : t("Show code"),
												children: transferCodeRevealed ? /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
											})]
										})
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
										children: [/* @__PURE__ */ jsx(Button, {
											variant: "outline",
											size: "sm",
											className: "h-9 text-[13px]",
											onClick: () => handleCopy(registrarTransferAuthCode, "transfer-code"),
											children: t("Copy code")
										}), /* @__PURE__ */ jsx(Button, {
											size: "sm",
											className: "h-9 text-[13px]",
											onClick: () => setRegistrarTransferDialogOpen(false),
											children: t("Close")
										})]
									})
								] }) : /* @__PURE__ */ jsxs("div", {
									className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
									children: [/* @__PURE__ */ jsx(Button, {
										variant: "outline",
										size: "sm",
										className: "h-9 text-[13px]",
										onClick: () => setRegistrarTransferDialogOpen(false),
										children: t("Cancel")
									}), /* @__PURE__ */ jsx(Button, {
										size: "sm",
										className: "h-9 text-[13px]",
										disabled: createTransferOutMutation.isPending,
										onClick: () => createTransferOutMutation.mutate(),
										children: t("Generate code")
									})]
								})]
							})
						})] }),
						domain && /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-destructive/50 bg-card/50 overflow-hidden",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ jsx("h3", {
										className: "text-[15px] font-semibold text-foreground",
										children: t("Delete domain")
									})
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-destructive/20" }),
								/* @__PURE__ */ jsxs("div", {
									className: "px-6 py-4",
									children: [/* @__PURE__ */ jsxs("p", {
										className: "text-[13px] text-muted-foreground",
										children: [
											t("Permanently delete this domain and all associated DNS records."),
											" ",
											t("This action cannot be undone.")
										]
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 mt-4",
										children: [/* @__PURE__ */ jsx(InitialsAvatar, {
											name: domain.domain,
											size: "md"
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-[14px] font-medium text-foreground truncate",
												children: domain.domain
											}), /* @__PURE__ */ jsx("p", {
												className: "text-[12px] text-muted-foreground",
												children: domain.nameservers?.toLowerCase() === "appwrite" ? t("Verified") : t("Unverified")
											})]
										})]
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4 border-t border-destructive/20 bg-destructive/5",
									children: /* @__PURE__ */ jsxs(Dialog, {
										open: deleteDialogOpen,
										onOpenChange: setDeleteDialogOpen,
										children: [/* @__PURE__ */ jsx(DialogTrigger, {
											asChild: true,
											children: /* @__PURE__ */ jsx(Button, {
												variant: "destructive",
												size: "sm",
												className: "h-9 text-[13px]",
												children: t("Delete domain")
											})
										}), /* @__PURE__ */ jsxs(DialogContent, {
											className: "sm:max-w-md p-0",
											children: [
												/* @__PURE__ */ jsxs(DialogHeader, {
													className: "px-6 pt-6 text-start",
													children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete Domain") }), /* @__PURE__ */ jsxs(DialogDescription, {
														className: "text-[13px] mt-2",
														children: [
															t("Are you sure you want to delete"),
															" ",
															domain && /* @__PURE__ */ jsx("span", {
																className: "font-medium text-foreground",
																children: domain.domain
															}),
															" ",
															t("and all its DNS records?"),
															" ",
															t("This action cannot be undone.")
														]
													})]
												}),
												/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
												/* @__PURE__ */ jsxs("div", {
													className: "px-6 pb-4 pt-0",
													children: [
														/* @__PURE__ */ jsx("div", {
															className: "rounded-lg border border-border bg-muted/50 p-3 mb-4 mt-2",
															children: domain && /* @__PURE__ */ jsxs("div", {
																className: "flex items-center gap-3",
																children: [/* @__PURE__ */ jsx(InitialsAvatar, {
																	name: domain.domain,
																	size: "sm"
																}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
																	className: "text-[13px] font-medium text-foreground",
																	children: domain.domain
																}), /* @__PURE__ */ jsx("p", {
																	className: "text-[11px] text-muted-foreground",
																	children: domain.nameservers?.toLowerCase() === "appwrite" ? t("Verified") : t("Unverified")
																})] })]
															})
														}),
														/* @__PURE__ */ jsxs("label", {
															className: "text-[13px] text-muted-foreground",
															children: [
																t("Type"),
																" ",
																domain && /* @__PURE__ */ jsx("span", {
																	className: "font-mono font-medium text-foreground bg-muted px-1.5 py-0.5 rounded",
																	children: domain.domain
																}),
																" ",
																t("to confirm")
															]
														}),
														/* @__PURE__ */ jsx(Input, {
															value: deleteConfirmation,
															onChange: (e) => setDeleteConfirmation(e.target.value),
															placeholder: t("Enter domain name"),
															className: "mt-2 h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-red-500/50 focus:ring-0",
															autoFocus: true
														})
													]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
													children: [/* @__PURE__ */ jsx(Button, {
														variant: "outline",
														size: "sm",
														className: "h-9 text-[13px]",
														onClick: () => {
															setDeleteDialogOpen(false);
															setDeleteConfirmation("");
														},
														children: t("Cancel")
													}), /* @__PURE__ */ jsx(Button, {
														variant: "destructive",
														size: "sm",
														className: "h-9 text-[13px]",
														disabled: deleteConfirmation !== domain?.domain || deleteDomainMutation.isPending,
														onClick: handleDeleteDomain,
														children: t("Delete")
													})]
												})
											]
										})]
									})
								})
							]
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ jsx(CreateRecordDialog, {
			open: createRecordDialogOpen,
			onOpenChange: setCreateRecordDialogOpen,
			onCreate: handleCreateRecord,
			isLoading: createRecordMutation.isPending
		}),
		selectedRecord && /* @__PURE__ */ jsx(UpdateRecordDialog, {
			open: updateRecordDialogOpen,
			onOpenChange: setUpdateRecordDialogOpen,
			record: selectedRecord,
			onUpdate: (data) => handleUpdateRecord(selectedRecord.$id, data),
			isLoading: updateRecordMutation.isPending
		}),
		selectedRecord && /* @__PURE__ */ jsx(DeleteRecordDialog, {
			open: deleteRecordDialogOpen,
			onOpenChange: setDeleteRecordDialogOpen,
			record: selectedRecord,
			onDelete: () => handleDeleteRecord(selectedRecord.$id),
			isLoading: deleteRecordMutation.isPending
		}),
		/* @__PURE__ */ jsx(ImportZoneDialog, {
			open: importZoneDialogOpen,
			onOpenChange: setImportZoneDialogOpen,
			onImport: handleImportZone,
			isLoading: importZoneMutation.isPending
		}),
		domain && orgId && /* @__PURE__ */ jsx(RetryVerification, {
			open: retryDialogOpen,
			onOpenChange: setRetryDialogOpen,
			domain,
			orgId,
			onVerified: handleDomainVerified
		})
	] });
}
export { View as t };
