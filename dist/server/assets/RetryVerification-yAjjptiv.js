import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { W as useRetryDomainVerification } from "./domains-Bfw8HsXF.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { AlertCircle, Check, Copy, ExternalLink, Info } from "lucide-react";
var NAMESERVERS = ["ns1.appwrite.zone", "ns2.appwrite.zone"];
function RetryVerification({ open, onOpenChange, domain, orgId, onVerified }) {
	const t = useT();
	const [copiedField, setCopiedField] = useState(null);
	const [verificationError, setVerificationError] = useState(null);
	const [isPendingPropagation, setIsPendingPropagation] = useState(false);
	const retryVerificationMutation = useRetryDomainVerification(orgId);
	useEffect(() => {
		if (open) {
			setVerificationError(null);
			setIsPendingPropagation(false);
			setCopiedField(null);
		}
	}, [open]);
	const handleVerify = async () => {
		setVerificationError(null);
		setIsPendingPropagation(false);
		try {
			const updatedDomain = await retryVerificationMutation.mutateAsync(domain.$id);
			if (updatedDomain.nameservers?.toLowerCase() === "appwrite") {
				toast.success(`${domain.domain} ${t("has been verified")}`);
				onOpenChange(false);
				onVerified?.(updatedDomain);
				return;
			}
			setIsPendingPropagation(true);
			setVerificationError(t("We could not confirm Appwrite nameservers for this domain yet. DNS changes can take up to 48 hours to propagate. Confirm the nameservers below at your registrar, wait a bit, then try again."));
		} catch (error) {
			setIsPendingPropagation(false);
			setVerificationError(getErrorMessage(error) || t("Domain verification failed. Please check your domain settings or try again later."));
		}
	};
	const handleCopy = (text, field) => {
		navigator.clipboard.writeText(text);
		setCopiedField(field);
		toast.success(t("Copied to clipboard"));
		setTimeout(() => setCopiedField(null), 2e3);
	};
	const isLoading = retryVerificationMutation.isPending;
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-lg p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Retry verification") }), /* @__PURE__ */ jsxs(DialogDescription, {
						className: "text-[13px] mt-2",
						children: [
							t("Update the nameservers of your domain"),
							" ",
							/* @__PURE__ */ jsx("strong", {
								className: "font-medium text-foreground",
								children: domain.domain
							}),
							" ",
							t("to point to Appwrite. It may take up to 48 hours for DNS changes to propagate.")
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 space-y-4",
					children: [
						verificationError && /* @__PURE__ */ jsxs(Alert, {
							variant: "default",
							className: isPendingPropagation ? "border-amber-500/30 bg-amber-500/10 [&>svg]:text-amber-600 dark:[&>svg]:text-amber-400" : "border-red-500/30 bg-red-500/10 [&>svg]:text-red-600 dark:[&>svg]:text-red-400",
							children: [
								isPendingPropagation ? /* @__PURE__ */ jsx(Info, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }),
								/* @__PURE__ */ jsx(AlertTitle, {
									className: isPendingPropagation ? "text-[13px] font-medium text-amber-700 dark:text-amber-400" : "text-[13px] font-medium text-red-600 dark:text-red-400",
									children: isPendingPropagation ? t("Domain not verified yet") : t("Verification failed")
								}),
								/* @__PURE__ */ jsx(AlertDescription, {
									className: isPendingPropagation ? "text-[13px] text-amber-700/90 dark:text-amber-400/90" : "text-[13px] text-red-600 dark:text-red-400",
									children: verificationError
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "rounded-lg border border-border bg-card overflow-hidden",
							children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
								className: "hover:bg-transparent border-b border-border",
								children: [/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: t("Nameserver")
								}), /* @__PURE__ */ jsx(TableHead, { className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider w-[50px]" })]
							}) }), /* @__PURE__ */ jsx(TableBody, { children: NAMESERVERS.map((nameserver) => /* @__PURE__ */ jsxs(TableRow, { children: [/* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3 font-mono text-[13px]",
								children: nameserver
							}), /* @__PURE__ */ jsx(TableCell, {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx(Button, {
									variant: "ghost",
									size: "sm",
									className: "h-8 w-8 p-0",
									onClick: () => handleCopy(nameserver, nameserver),
									children: copiedField === nameserver ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
								})
							})] }, nameserver)) })] })
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground",
							children: /* @__PURE__ */ jsxs(DocsRouteLink, {
								className: "inline-flex items-center gap-1 link-neutral",
								href: "/docs/products/domains/external",
								children: [t("Learn more about DNS settings"), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3" })]
							})
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => onOpenChange(false),
						disabled: isLoading,
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						onClick: handleVerify,
						disabled: isLoading,
						children: t("Verify")
					})]
				})
			]
		})
	});
}
export { RetryVerification as t };
