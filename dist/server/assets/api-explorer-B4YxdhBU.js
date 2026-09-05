import { a as truncateMiddle, t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { m as LATEST_EXAMPLES_VERSION, t as PLATFORM_CODE_LANGUAGES } from "./constants-Dd6QzW31.js";
import { Ai as getScopesMissingFromKey, Ci as executeApiRequest, Di as createEphemeralApiKeyForExplorer, Ei as createUserJwtForExplorer, Fi as resolveServerAuthApiKey, Ii as scopesIncludeRequired, Mi as methodRequiresApiKey, Ni as methodSupportsServerApiKey, Oi as useApiExplorerAuthPersistence, Pi as methodUsesSessionAuthChoice, Si as executeApiMultipartRequest, Ti as downloadOpenApiSpec, Vv as useProjectUsers, bi as methodRequiresSendConfirmation, di as IMPERSONATION_DOCS_HREF, fi as formatMethodAuthDescription, gi as getExplorerMethodLinkUrl, hi as getRateLimitDescription, ji as mergeUniqueScopes, ki as getMethodRequiredScopes, mi as formatRateLimitDescription, pi as getMethodAuthDescription, ui as useApiExplorerSpec, vi as resolveExplorerSelection, wi as isMultipartMethod, xi as buildCurlCommand, yi as getSendRequestConfirmationCopy } from "./hooks-BONwG3Mt.js";
import { F as useApiExplorerColumnsLayout, I as useApiExplorerExpandedProductGroup, L as useApiExplorerResponseSplitLayout } from "./auth-BPuxYQAc.js";
import { C as resolveResourceIdContext, S as getQueryFilterColumnsForMethod, _ as paramFormValuesToStrings, a as buildDefaultBodyFormValues, b as serializeBodyFromForm, c as getFormFieldOpenApiTypeLabel, d as getMissingRequiredFieldInJsonBody, f as getMissingRequiredFormField, gt as buildFilterQueryString, h as hasRequestBodyForMethod, l as getFormFieldPlaceholder, m as getRequestBodyJsonSchema, n as FORM_FIELD_TYPE_PILL_CLASS, o as buildInitialParamFormValues, p as getRequestBodyFormFields, r as getFormFieldTypeBadgeVariant, s as buildMultipartFormData, t as API_EXPLORER_PILL_CLASS, u as getFormFieldTypeLabel, v as parameterToFormField, x as stripEmptyCreatableIdFieldsFromJson, y as parseBodyToFormValues, yt as getOperatorsForType } from "./form-field-type-badge-C7qMzJo0.js";
import { f as groupServicesByProduct, i as groupMethodsByResource, l as filterAllowedServices, r as generateSampleRequestBody, u as getProjectApiExplorerAllowedServices } from "./parse-spec-DW3UGcrS.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as CollapsibleContent, r as CollapsibleTrigger, t as Collapsible } from "./collapsible-BcDIDOgI.js";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-XaWkg9jR.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { r as copyToClipboard } from "./context-menu-D55xedo-.js";
import { t as CodeBlock } from "./CodeBlock-BGAzMP_K.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import { a as SheetHeader, o as SheetTitle, r as SheetContent, s as SheetTrigger, t as Sheet } from "./sheet-CbM5lIV1.js";
import { n as usePlatform, t as useKeyboardShortcut } from "./use-keyboard-shortcuts-C2m0wYFf.js";
import { i as formatDisplayKeys } from "./display-DbRQIyxk.js";
import { n as ToggleGroupItem, t as ToggleGroup } from "./toggle-group-qQyCSBun.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { i as getHttpStatusCodeBadgeVariant, n as getHttpMethodAccentClasses, r as getHttpMethodBadgeVariant } from "./http-method-badge-BudOHyRm.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { m as parseDocsPagePath } from "./urls-BIlyr2O2.js";
import { h as verticalPanelResizeHandleClass } from "./horizontal-resize-BcegzCwH.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { t as DateTimePicker } from "./DateTimePicker-DySgezub.js";
import { i as AccordionItem, n as AccordionContent, o as AccordionTrigger, t as Accordion } from "./accordion-DmQmnCa5.js";
import { t as ScopeEditor } from "./ScopeEditor-DGe3mP1w.js";
import { n as apiNavItemClassName, r as apiNavMethodItemClassName } from "./nav-styles-B9rWOQql.js";
import { t as formatBytes } from "./mock-data-bi-y2wwb.js";
import { t as SearchableSelect } from "./SearchableSelect-DPl0hr1b.js";
import { t as ScrollArea } from "./scroll-area-CakPDLgR.js";
import { t as PermissionsEditor } from "./PermissionsEditor-DzrUP0TS.js";
import { n as ExplorerColumnsResizableLayout, r as ExplorerResponseSplitResizableLayout } from "./ApiExplorerResizableLayout-D2_hOOoH.js";
import { t as MethodDescriptionMarkdown } from "./MethodDescriptionMarkdown-HfQh_Tws.js";
import { t as EventResourceIdSelector } from "./EventResourceIdSelector-DoLZYJw-.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ID } from "@appwrite.io/console";
import { toast } from "sonner";
import { AlertCircle, Check, ChevronDown, Copy, Download, Eye, EyeOff, Layers, Link2, List, Loader2, Search, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
function StartTruncatedText({ text, className, title }) {
	return /* @__PURE__ */ jsx("span", {
		dir: "rtl",
		className: cn("block w-full min-w-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-left", className),
		title: title ?? text,
		children: /* @__PURE__ */ jsx("span", {
			dir: "ltr",
			children: text
		})
	});
}
function ConfirmActionDialog({ open, onOpenChange, title, description, confirmLabel = "Confirm", confirmVariant = "default", onConfirm, isConfirming = false }) {
	const t = useT();
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [/* @__PURE__ */ jsxs(DialogHeader, {
				className: "px-6 pt-6 pb-4 text-start",
				children: [/* @__PURE__ */ jsx(DialogTitle, { children: t(title) }), /* @__PURE__ */ jsx(DialogDescription, {
					className: "text-[13px] mt-2",
					children: description
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					className: "h-9 text-[13px]",
					disabled: isConfirming,
					onClick: () => onOpenChange(false),
					children: t("Cancel")
				}), /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: confirmVariant === "destructive" ? "destructive" : "default",
					className: "h-9 text-[13px]",
					disabled: isConfirming,
					onClick: onConfirm,
					children: t(confirmLabel)
				})]
			})]
		})
	});
}
var INLINE_CODE_CLASS = "rounded-sm bg-muted px-1 py-0.5 font-mono text-[0.92em] text-foreground ring-1 ring-border/60";
function isExternalDomainLink(href) {
	if (!href) return false;
	if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) return false;
	if (parseDocsPagePath(href)) return false;
	try {
		if (typeof window === "undefined") return /^https?:\/\//i.test(href) || href.startsWith("//");
		const current = new URL(window.location.href);
		const resolved = new URL(href, current);
		return (resolved.protocol === "http:" || resolved.protocol === "https:") && resolved.hostname !== current.hostname;
	} catch {
		return false;
	}
}
var METADATA_MARKDOWN_COMPONENTS = {
	p: ({ children }) => /* @__PURE__ */ jsx(Fragment, { children }),
	a: ({ href, children, ...props }) => {
		if (href && parseDocsPagePath(href)) return /* @__PURE__ */ jsx(DocsRouteLink, {
			href,
			className: "font-medium text-foreground underline underline-offset-2 hover:text-primary",
			children
		});
		const openInNewWindow = isExternalDomainLink(href);
		return /* @__PURE__ */ jsx("a", {
			href,
			target: openInNewWindow ? "_blank" : void 0,
			rel: openInNewWindow ? "noopener noreferrer" : void 0,
			className: "font-medium text-foreground underline underline-offset-2 hover:text-primary",
			...props,
			children
		});
	},
	strong: ({ children }) => /* @__PURE__ */ jsx("strong", {
		className: "font-semibold text-foreground",
		children
	}),
	em: ({ children }) => /* @__PURE__ */ jsx("em", {
		className: "text-foreground/90",
		children
	}),
	code: ({ className, children, ...props }) => {
		if (className) return /* @__PURE__ */ jsx("code", {
			className: cn(INLINE_CODE_CLASS, className),
			...props,
			children
		});
		return /* @__PURE__ */ jsx("code", {
			className: INLINE_CODE_CLASS,
			...props,
			children
		});
	}
};
function MetadataTextMarkdown({ content, className }) {
	return /* @__PURE__ */ jsx("div", {
		className,
		children: /* @__PURE__ */ jsx(ReactMarkdown, {
			remarkPlugins: [remarkGfm],
			components: METADATA_MARKDOWN_COMPONENTS,
			allowedElements: [
				"p",
				"a",
				"strong",
				"em",
				"code",
				"del",
				"br"
			],
			unwrapDisallowed: true,
			children: content
		})
	});
}
function RateLimitDescription({ limit, windowSeconds = 3600, rateKey, className }) {
	return /* @__PURE__ */ jsx(RateLimitDescriptionContent, {
		description: getRateLimitDescription(limit, windowSeconds, rateKey),
		className
	});
}
function RateLimitDescriptionContent({ description, className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("space-y-1.5", className),
		children: [/* @__PURE__ */ jsx(MetadataTextMarkdown, {
			content: description.text,
			className: "text-[13px] leading-relaxed text-foreground"
		}), description.apiKeyNote ? /* @__PURE__ */ jsx(MetadataTextMarkdown, {
			content: description.apiKeyNote,
			className: "text-[12px] leading-relaxed text-muted-foreground"
		}) : null]
	});
}
function ServicesSheet({ selectedService, children }) {
	const t = useT();
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs(Sheet, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(SheetTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				size: "sm",
				className: "h-8 min-w-0 flex-1 justify-start gap-1.5 px-2.5 text-[13px]",
				children: selectedService ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Layers, { className: "size-3.5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
					className: "min-w-0 truncate",
					children: t(selectedService.label)
				})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Layers, { className: "size-3.5 shrink-0" }), /* @__PURE__ */ jsx("span", {
					className: "truncate",
					children: t("Select a service")
				})] })
			})
		}), /* @__PURE__ */ jsxs(SheetContent, {
			side: "left",
			className: "flex w-[min(100vw,320px)] flex-col p-0",
			children: [/* @__PURE__ */ jsx(SheetHeader, {
				className: "shrink-0 border-b border-border px-4 py-4 text-start",
				children: /* @__PURE__ */ jsx(SheetTitle, {
					className: "truncate text-[15px]",
					children: t("APIs")
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "min-h-0 flex-1 overflow-hidden",
				children: children(() => setOpen(false))
			})]
		})]
	});
}
function MethodsSheet({ selectedMethod, serviceLabel, disabled, children }) {
	const t = useT();
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs(Sheet, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ jsx(SheetTrigger, {
			asChild: true,
			children: /* @__PURE__ */ jsx(Button, {
				variant: "outline",
				size: "sm",
				disabled,
				className: "h-8 min-w-0 flex-1 justify-start gap-1.5 px-2.5 text-[13px]",
				children: selectedMethod ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Badge, {
					variant: getHttpMethodBadgeVariant(selectedMethod.httpMethod),
					className: cn("shrink-0 text-[10px] uppercase", API_EXPLORER_PILL_CLASS),
					children: selectedMethod.httpMethod
				}), /* @__PURE__ */ jsx("span", {
					className: "min-w-0 truncate",
					children: selectedMethod.summary
				})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(List, { className: "size-3.5 shrink-0" }), /* @__PURE__ */ jsx("span", {
					className: "truncate",
					children: serviceLabel ? t(serviceLabel) : t("Select a method")
				})] })
			})
		}), /* @__PURE__ */ jsxs(SheetContent, {
			side: "left",
			className: "flex w-[min(100vw,320px)] flex-col p-0",
			children: [/* @__PURE__ */ jsx(SheetHeader, {
				className: "shrink-0 border-b border-border px-4 py-4 text-start",
				children: /* @__PURE__ */ jsx(SheetTitle, {
					className: "truncate text-[15px]",
					children: serviceLabel ? t(serviceLabel) : t("Methods")
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "min-h-0 flex-1 overflow-hidden",
				children: children(() => setOpen(false))
			})]
		})]
	});
}
function ApiExplorerMobileNav({ selectedService, selectedMethod, servicesContent, methodsContent, className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex shrink-0 items-center gap-2 border-b border-border px-3 py-2", className),
		children: [/* @__PURE__ */ jsx(ServicesSheet, {
			selectedService,
			children: servicesContent
		}), /* @__PURE__ */ jsx(MethodsSheet, {
			selectedMethod,
			serviceLabel: selectedService?.label,
			disabled: !selectedService,
			children: methodsContent
		})]
	});
}
const API_EXPLORER_CONTAINER = "@container/api-explorer";
const API_EXPLORER_MOBILE_ONLY_CLASS = "@[900px]/api-explorer:hidden";
const API_EXPLORER_DESKTOP_ONLY_CLASS = "hidden @[900px]/api-explorer:block";
function AuthRequirementDescription({ method, platform, className }) {
	return /* @__PURE__ */ jsx(AuthRequirementDescriptionContent, {
		description: getMethodAuthDescription(method, platform),
		className
	});
}
var SECONDARY_TEXT_CLASS = "text-[12px] leading-relaxed text-muted-foreground";
function AuthRequirementDescriptionContent({ description, className }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("space-y-1.5", className),
		children: [/* @__PURE__ */ jsx(MetadataTextMarkdown, {
			content: description.summary,
			className: "text-[13px] leading-relaxed text-foreground"
		}), description.impersonation ? /* @__PURE__ */ jsxs("p", {
			className: SECONDARY_TEXT_CLASS,
			children: [
				t("Supports optional impersonation."),
				" ",
				/* @__PURE__ */ jsx(DocsRouteLink, {
					href: IMPERSONATION_DOCS_HREF,
					className: "font-medium text-foreground underline underline-offset-2 hover:text-primary",
					children: t("Learn more")
				})
			]
		}) : null]
	});
}
function buildUserSelectItem(user) {
	const name = user.name?.trim() || "";
	const email = user.email?.trim() || "";
	const phone = user.phone?.trim() || "";
	const id = user.$id;
	const label = name || email || phone || id;
	return {
		value: id,
		label,
		description: [
			name && name !== label ? name : "",
			email && email !== label ? email : "",
			phone && phone !== label ? phone : "",
			id !== label ? id : ""
		].filter(Boolean).join(" · ") || void 0,
		searchText: [
			name,
			email,
			phone,
			id
		].filter(Boolean).join(" ")
	};
}
function scopeSetsEqual(left, right) {
	if (left.length !== right.length) return false;
	const rightSet = new Set(right);
	return left.every((scope) => rightSet.has(scope));
}
function splitMetadataList$1(value) {
	if (!value?.trim()) return [];
	return value.split(",").map((item) => item.trim()).filter(Boolean);
}
function ScopeRow({ label, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "grid gap-1.5 @[480px]/request-panel:grid-cols-[88px_minmax(0,1fr)] @[480px]/request-panel:items-start @[480px]/request-panel:gap-3",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-[12px] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("div", {
			className: "min-w-0",
			children
		})]
	});
}
function KeyInput({ value, onChange, readOnly = false, placeholder }) {
	const t = useT();
	const [visible, setVisible] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [/* @__PURE__ */ jsx(Input, {
			type: visible ? "text" : "password",
			value,
			onChange: onChange ? (event) => onChange(event.target.value) : void 0,
			readOnly,
			placeholder,
			className: "h-9 pe-10 font-mono text-[13px]",
			autoComplete: "off",
			spellCheck: false
		}), /* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: () => setVisible((current) => !current),
			className: "absolute end-2 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground",
			"aria-label": visible ? t("Hide API key") : t("Show API key"),
			children: visible ? /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
		})]
	});
}
function ApiExplorerAuthSection({ projectId, platform, method, clientAuth, serverAuth, onClientAuthChange, onServerAuthChange }) {
	const t = useT();
	const usesSessionAuth = methodUsesSessionAuthChoice(method, platform);
	const supportsServerApiKey = methodSupportsServerApiKey(method, platform);
	const requiresApiKey = methodRequiresApiKey(method, platform);
	const endpointScopes = useMemo(() => getMethodRequiredScopes(method), [method]);
	const requiredScopes = useMemo(() => splitMetadataList$1(method.scope), [method.scope]);
	const missingKeyScopes = useMemo(() => getScopesMissingFromKey(serverAuth.ephemeralKeyScopes, endpointScopes), [endpointScopes, serverAuth.ephemeralKeyScopes]);
	const keyCoversEndpoint = scopesIncludeRequired(serverAuth.ephemeralKeyScopes, endpointScopes);
	const draftMatchesEndpoint = scopeSetsEqual(serverAuth.ephemeralDraftScopes, endpointScopes);
	const [userSearch, setUserSearch] = useState("");
	const [isGeneratingKey, setIsGeneratingKey] = useState(false);
	const [scopesOpen, setScopesOpen] = useState(!draftMatchesEndpoint);
	const { users, isLoading: usersLoading } = useProjectUsers(usesSessionAuth ? projectId : null, 0, 100, userSearch);
	const userItems = useMemo(() => users.map((user) => buildUserSelectItem(user)), [users]);
	const ensureDraftScopesForEphemeral = useCallback((next) => {
		if (next.ephemeralDraftScopes.length > 0 || endpointScopes.length === 0) return next;
		return {
			...next,
			ephemeralDraftScopes: endpointScopes
		};
	}, [endpointScopes]);
	const handleServerModeChange = useCallback((value) => {
		if (value !== "manual" && value !== "ephemeral") return;
		onServerAuthChange(ensureDraftScopesForEphemeral({
			...serverAuth,
			mode: value
		}));
	}, [
		ensureDraftScopesForEphemeral,
		onServerAuthChange,
		serverAuth
	]);
	const handleResetDraftToEndpoint = useCallback(() => {
		onServerAuthChange({
			...serverAuth,
			ephemeralDraftScopes: endpointScopes
		});
		setScopesOpen(false);
	}, [
		endpointScopes,
		onServerAuthChange,
		serverAuth
	]);
	const handleAddMissingEndpointScopesToDraft = useCallback(() => {
		onServerAuthChange({
			...serverAuth,
			ephemeralDraftScopes: mergeUniqueScopes(serverAuth.ephemeralDraftScopes, missingKeyScopes)
		});
		setScopesOpen(true);
	}, [
		missingKeyScopes,
		onServerAuthChange,
		serverAuth
	]);
	const handleGenerateEphemeralKey = useCallback(async () => {
		const scopes = serverAuth.ephemeralDraftScopes;
		if (scopes.length === 0) {
			toast.error(t("Select at least one scope for the ephemeral key."));
			return;
		}
		setIsGeneratingKey(true);
		try {
			const result = await createEphemeralApiKeyForExplorer(projectId, scopes);
			onServerAuthChange({
				...serverAuth,
				mode: "ephemeral",
				ephemeralApiKey: result.secret,
				ephemeralKeyScopes: result.scopes
			});
			toast.success(t("Ephemeral API key generated (expires in 1 hour)"));
		} catch (error) {
			toast.error(getErrorMessage(error) || t("Failed to generate API key"));
		} finally {
			setIsGeneratingKey(false);
		}
	}, [
		onServerAuthChange,
		projectId,
		serverAuth,
		t
	]);
	const showServerAuth = supportsServerApiKey;
	const hasActiveEphemeralKey = Boolean(serverAuth.ephemeralApiKey);
	const matchEndpointTooltip = draftMatchesEndpoint ? t("Draft scopes already match this endpoint.") : t("Reset draft scopes to the scopes required by this endpoint.");
	return /* @__PURE__ */ jsx("div", {
		className: "@container/request-panel rounded-xl border border-border bg-card/50 overflow-hidden",
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-4 px-4 py-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Authentication")
					}), /* @__PURE__ */ jsx(AuthRequirementDescription, {
						method,
						platform
					})]
				}),
				requiredScopes.length > 0 && /* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Required scopes")
					}), /* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap gap-1.5",
						children: requiredScopes.map((scope) => /* @__PURE__ */ jsx(Badge, {
							variant: "info",
							className: cn("text-[10px] font-mono", API_EXPLORER_PILL_CLASS),
							children: scope
						}, scope))
					})]
				}),
				/* @__PURE__ */ jsx(ScopeRow, {
					label: t("Project"),
					children: /* @__PURE__ */ jsx(CopyableId, {
						id: projectId,
						size: "sm",
						maxWidth: 280
					})
				}),
				usesSessionAuth ? /* @__PURE__ */ jsxs("div", {
					className: "space-y-3 border-t border-border pt-4",
					children: [
						/* @__PURE__ */ jsx(Label, {
							className: "text-[12px] text-muted-foreground",
							children: t("Act as")
						}),
						/* @__PURE__ */ jsxs(ToggleGroup, {
							type: "single",
							variant: "outline",
							size: "sm",
							value: clientAuth.mode,
							onValueChange: (value) => {
								if (value === "guest" || value === "user") onClientAuthChange({
									...clientAuth,
									mode: value
								});
							},
							className: "grid w-full max-w-xs grid-cols-2",
							"aria-label": t("Session authentication"),
							children: [/* @__PURE__ */ jsx(ToggleGroupItem, {
								value: "guest",
								className: "h-9 text-[13px] font-medium data-[state=on]:bg-muted data-[state=on]:text-foreground",
								children: t("Guest")
							}), /* @__PURE__ */ jsx(ToggleGroupItem, {
								value: "user",
								className: "h-9 text-[13px] font-medium data-[state=on]:bg-muted data-[state=on]:text-foreground",
								children: t("User")
							})]
						}),
						clientAuth.mode === "guest" ? /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: t("No session or JWT is sent on the request.")
						}) : /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(SearchableSelect, {
								value: clientAuth.userId,
								onValueChange: (userId) => onClientAuthChange({
									...clientAuth,
									userId
								}),
								items: userItems,
								placeholder: usersLoading ? t("Loading users…") : t("Select a project user"),
								searchPlaceholder: t("Search by name, email, phone, or ID..."),
								emptyMessage: t("No users found"),
								disabled: usersLoading,
								onSearchChange: setUserSearch
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground",
								children: t("A JWT is created for this user when you send the request.")
							})]
						})
					]
				}) : null,
				showServerAuth && /* @__PURE__ */ jsxs("div", {
					className: "space-y-4 border-t border-border pt-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ jsx(Label, {
							className: "text-[12px] text-muted-foreground",
							children: t("API key")
						}), /* @__PURE__ */ jsxs(ToggleGroup, {
							type: "single",
							variant: "outline",
							size: "sm",
							value: serverAuth.mode,
							onValueChange: handleServerModeChange,
							className: "grid w-full max-w-xs grid-cols-2",
							"aria-label": t("Server API key source"),
							children: [/* @__PURE__ */ jsx(ToggleGroupItem, {
								value: "manual",
								className: "h-9 text-[13px] font-medium data-[state=on]:bg-muted data-[state=on]:text-foreground",
								children: t("Manual")
							}), /* @__PURE__ */ jsx(ToggleGroupItem, {
								value: "ephemeral",
								className: "h-9 text-[13px] font-medium data-[state=on]:bg-muted data-[state=on]:text-foreground",
								children: t("Ephemeral")
							})]
						})]
					}), serverAuth.mode === "manual" ? /* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ jsx(KeyInput, {
							value: serverAuth.manualApiKey,
							onChange: (manualApiKey) => onServerAuthChange({
								...serverAuth,
								manualApiKey
							}),
							placeholder: requiresApiKey ? t("Paste a project API key") : t("Paste a project API key (optional)")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: t("Reused across methods. Stored locally in this browser.")
						})]
					}) : /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [hasActiveEphemeralKey ? /* @__PURE__ */ jsxs("div", {
							className: "space-y-3 rounded-xl border border-border bg-card/50 px-4 py-3",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[12px] text-muted-foreground",
										children: t("Active key")
									}), /* @__PURE__ */ jsx(Badge, {
										variant: keyCoversEndpoint ? "success" : "warning",
										className: cn("text-[10px]", API_EXPLORER_PILL_CLASS),
										children: keyCoversEndpoint ? t("Ready") : t("Missing scopes")
									})]
								}),
								!keyCoversEndpoint && missingKeyScopes.length > 0 ? /* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap items-center gap-2 text-[12px]",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "text-muted-foreground",
										children: [
											t("Needs"),
											" ",
											missingKeyScopes.join(", "),
											"."
										]
									}), /* @__PURE__ */ jsx(Button, {
										type: "button",
										variant: "link",
										size: "sm",
										className: "h-auto p-0 text-[12px]",
										onClick: handleAddMissingEndpointScopesToDraft,
										children: t("Add to draft")
									})]
								}) : null,
								/* @__PURE__ */ jsx(KeyInput, {
									value: serverAuth.ephemeralApiKey,
									readOnly: true
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-muted-foreground",
									children: t("Expires in 1 hour. Regenerate after editing scopes below.")
								})
							]
						}) : null, /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-border bg-card/50 overflow-hidden",
							children: [/* @__PURE__ */ jsxs(Collapsible, {
								open: scopesOpen,
								onOpenChange: setScopesOpen,
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 px-4 py-4 sm:px-6",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ jsx("p", {
												className: "text-[13px] font-medium text-foreground",
												children: t("Key scopes")
											}), /* @__PURE__ */ jsxs("p", {
												className: "text-[12px] text-muted-foreground",
												children: [
													serverAuth.ephemeralDraftScopes.length,
													" ",
													serverAuth.ephemeralDraftScopes.length === 1 ? t("scope") : t("scopes"),
													" ",
													t("selected for the next key")
												]
											})]
										}),
										endpointScopes.length > 0 ? /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
											asChild: true,
											children: /* @__PURE__ */ jsx("span", {
												className: "inline-flex shrink-0",
												children: /* @__PURE__ */ jsx(Button, {
													type: "button",
													variant: "outline",
													size: "sm",
													className: "h-8 shrink-0 border-border bg-transparent px-2 text-[12px] text-muted-foreground hover:bg-accent hover:text-foreground",
													disabled: draftMatchesEndpoint,
													onClick: handleResetDraftToEndpoint,
													children: t("Match endpoint")
												})
											})
										}), /* @__PURE__ */ jsx(TooltipContent, {
											side: "bottom",
											sideOffset: 6,
											className: "text-[12px] whitespace-nowrap",
											children: matchEndpointTooltip
										})] }) : null,
										/* @__PURE__ */ jsx(CollapsibleTrigger, {
											asChild: true,
											children: /* @__PURE__ */ jsx(Button, {
												type: "button",
												variant: "outline",
												size: "sm",
												className: "h-8 w-8 shrink-0 border-border bg-transparent p-0 text-muted-foreground hover:bg-accent hover:text-foreground",
												"aria-label": scopesOpen ? t("Collapse key scopes") : t("Expand key scopes"),
												children: /* @__PURE__ */ jsx(ChevronDown, { className: cn("h-4 w-4 transition-transform", scopesOpen && "rotate-180") })
											})
										})
									]
								}), /* @__PURE__ */ jsxs(CollapsibleContent, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border" }), /* @__PURE__ */ jsx("div", {
									className: "px-4 py-4 sm:px-6",
									children: /* @__PURE__ */ jsx(ScopeEditor, {
										value: serverAuth.ephemeralDraftScopes,
										onChange: (ephemeralDraftScopes) => onServerAuthChange({
											...serverAuth,
											ephemeralDraftScopes
										}),
										disabled: isGeneratingKey
									})
								})] })]
							}), /* @__PURE__ */ jsx("div", {
								className: "border-t border-border bg-muted/30 px-4 py-4 sm:px-6",
								children: /* @__PURE__ */ jsxs(Button, {
									type: "button",
									size: "sm",
									className: "h-9 text-[13px]",
									disabled: isGeneratingKey || serverAuth.ephemeralDraftScopes.length === 0,
									onClick: handleGenerateEphemeralKey,
									children: [isGeneratingKey ? /* @__PURE__ */ jsx(Loader2, { className: "me-1.5 h-4 w-4 animate-spin" }) : null, hasActiveEphemeralKey ? t("Regenerate key") : t("Generate key")]
								})
							})]
						})]
					})]
				})
			]
		})
	});
}
var DEFAULT_BASE_URL = "https://<REGION>.cloud.appwrite.io/v1";
function splitMetadataList(value) {
	if (!value?.trim()) return [];
	return value.split(",").map((item) => item.trim()).filter(Boolean);
}
function appendSection(lines, title, body) {
	if (!body.trim()) return;
	lines.push(`## ${title}`, "", body.trim(), "");
}
function buildParameterTable(fields) {
	if (fields.length === 0) return "";
	return [
		"| Name | Type | Required | Description |",
		"| --- | --- | --- | --- |",
		...fields.map((field) => {
			const required = field.required ? "Required" : "";
			const description = field.description?.trim() || "";
			return `| ${field.name} | ${getFormFieldOpenApiTypeLabel(field.kind)} | ${required} | ${description.replace(/\|/g, "\\|").replace(/\n/g, " ")} |`;
		})
	].join("\n");
}
function formatPropertyTypeForMarkdown(property) {
	if (property.typeKind === "array") {
		if (property.itemType) return `array of ${property.itemType}`;
		if (property.variantCount) return `array (${property.variantCount} possible object types)`;
		return "array";
	}
	if (property.typeKind === "object") {
		if (property.itemType) return `object (${property.itemType})`;
		if (property.variantCount) return `object (${property.variantCount} possible types)`;
		return "object";
	}
	return property.type;
}
function buildModelPropertiesTable(properties) {
	if (properties.length === 0) return "";
	const sections = [
		"| Name | Type | Description |",
		"| --- | --- | --- |",
		...properties.map((property) => {
			const description = property.description?.trim() || "";
			const related = property.relatedModels ? `${description ? `${description} ` : ""}Can be one of: ${property.relatedModels}` : description;
			return `| ${property.name} | ${formatPropertyTypeForMarkdown(property)} | ${related.replace(/\|/g, "\\|").replace(/\n/g, " ")} |`;
		})
	];
	for (const property of properties) {
		if (!property.variants?.length) continue;
		for (const variant of property.variants) {
			sections.push("", `#### ${property.name}: ${variant.name}`);
			const variantTable = buildModelPropertiesTable(variant.properties);
			if (variantTable) sections.push("", variantTable);
		}
	}
	return sections.join("\n");
}
function buildResponsesSection(method) {
	if (method.responses.length === 0) return "";
	return method.responses.map((response) => {
		const lines = [`### ${response.code}`];
		if (response.contentType) lines.push("", response.contentType);
		if (response.models.length > 0) for (const model of response.models) {
			lines.push("", `**${model.name}**`);
			const table = buildModelPropertiesTable(model.properties);
			if (table) lines.push("", table);
		}
		return lines.join("\n");
	}).join("\n\n");
}
function buildApiReferenceMethodMarkdown(method, version, platform, options) {
	const fullUrl = `${(options?.baseUrl ?? DEFAULT_BASE_URL).replace(/\/$/, "")}${method.path}`;
	const codeLanguage = PLATFORM_CODE_LANGUAGES[platform];
	const lines = [`# ${method.summary}`, ""];
	if (options?.pageUrl) lines.push(`Source: ${options.pageUrl}`, "");
	if (method.deprecated) {
		const meta = method.xAppwrite?.deprecated;
		const parts = ["> **Deprecated endpoint**"];
		if (meta?.since) parts.push(`> Deprecated since ${meta.since}.`);
		if (meta?.replaceWith) parts.push(`> Use ${meta.replaceWith} instead.`);
		if (!meta?.since && !meta?.replaceWith) parts.push("> This endpoint is deprecated and may be removed in a future version.");
		lines.push(...parts, "");
	}
	appendSection(lines, "Endpoint", `\`${method.httpMethod.toUpperCase()}\` ${fullUrl}`);
	if (method.description?.trim()) appendSection(lines, "Description", method.description.trim());
	const scopes = splitMetadataList(method.scope);
	if (scopes.length > 0) appendSection(lines, "Required scopes", scopes.map((scope) => `- \`${scope}\``).join("\n"));
	appendSection(lines, "Authentication", formatMethodAuthDescription(method, platform));
	const rateLimit = method.xAppwrite?.["rate-limit"];
	if (rateLimit !== void 0 && rateLimit > 0) appendSection(lines, "Rate limit", formatRateLimitDescription(rateLimit, method.xAppwrite?.["rate-time"] ?? 3600, method.xAppwrite?.["rate-key"]));
	const pathFields = (method.parameters ?? []).filter((param) => param.in === "path").map((param) => parameterToFormField(param));
	const pathTable = buildParameterTable(pathFields);
	if (pathTable) appendSection(lines, "Path parameters", pathTable);
	const queryFields = (method.parameters ?? []).filter((param) => param.in === "query").map((param) => parameterToFormField(param));
	const queryTable = buildParameterTable(queryFields);
	if (queryTable) appendSection(lines, "Query parameters", queryTable);
	const bodyTable = buildParameterTable(getRequestBodyFormFields(method));
	if (bodyTable) appendSection(lines, pathFields.length > 0 || queryFields.length > 0 ? "Body" : "Parameters", bodyTable);
	const responses = buildResponsesSection(method);
	if (responses) appendSection(lines, "Responses", responses);
	if (method.demo?.trim()) lines.push("## Example", "", `\`\`\`${codeLanguage}`, method.demo.trim(), "```", "");
	return lines.join("\n").trimEnd();
}
function ApiMethodHeaderActions({ getPageUrl, getMethodMarkdown, className }) {
	const t = useT();
	const [copiedPage, setCopiedPage] = useState(false);
	const [copiedLink, setCopiedLink] = useState(false);
	const iconButtonClass = "h-7 w-7 shrink-0 p-0 text-muted-foreground";
	const stopPropagation = (event) => {
		event.preventDefault();
		event.stopPropagation();
	};
	const handleCopyPage = async (event) => {
		stopPropagation(event);
		if (!await copyToClipboard("Page", getMethodMarkdown(getPageUrl()), { showToast: false })) return;
		setCopiedPage(true);
		setTimeout(() => setCopiedPage(false), 2e3);
	};
	const handleCopyLink = async (event) => {
		stopPropagation(event);
		if (!await copyToClipboard("Link", getPageUrl(), { showToast: false })) return;
		setCopiedLink(true);
		setTimeout(() => setCopiedLink(false), 2e3);
	};
	return /* @__PURE__ */ jsx(TooltipProvider, {
		delayDuration: 300,
		children: /* @__PURE__ */ jsxs("div", {
			className: cn("flex shrink-0 items-center gap-0.5", className),
			onClick: stopPropagation,
			children: [/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					className: iconButtonClass,
					onClick: handleCopyLink,
					"aria-label": t("Copy link"),
					children: copiedLink ? /* @__PURE__ */ jsx(Check, {
						className: "h-3.5 w-3.5 text-green-600",
						strokeWidth: 3
					}) : /* @__PURE__ */ jsx(Link2, { className: "h-3.5 w-3.5" })
				})
			}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: copiedLink ? t("Link copied") : t("Copy link") }) })] }), /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					className: iconButtonClass,
					onClick: handleCopyPage,
					"aria-label": t("Copy page"),
					children: copiedPage ? /* @__PURE__ */ jsx(Check, {
						className: "h-3.5 w-3.5 text-green-600",
						strokeWidth: 3
					}) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" })
				})
			}), /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: copiedPage ? t("Copied") : t("Copy page") }) })] })]
		})
	});
}
function toReferencePlatform(platform) {
	return platform === "client" ? "client-rest" : "server-rest";
}
function ExplorerMethodActions({ method, endpoint, platform, projectId, serviceId, className }) {
	const referencePlatform = toReferencePlatform(platform);
	return /* @__PURE__ */ jsx(ApiMethodHeaderActions, {
		className,
		getPageUrl: useCallback(() => getExplorerMethodLinkUrl({
			projectId,
			serviceId,
			operationId: method.operationId
		}), [
			method.operationId,
			projectId,
			serviceId
		]),
		getMethodMarkdown: useCallback((pageUrl) => {
			return buildApiReferenceMethodMarkdown({
				...method,
				responses: []
			}, LATEST_EXAMPLES_VERSION, referencePlatform, {
				baseUrl: endpoint,
				pageUrl
			});
		}, [
			endpoint,
			method,
			referencePlatform
		])
	});
}
const REQUEST_BUILDER_CONTAINER = "@container/request-builder";
const REQUEST_BUILDER_ID_SELECTOR_POPOVER_CLASS = "max-w-[240px]";
const REQUEST_BUILDER_ROW = "group grid grid-cols-[minmax(0,1fr)_auto_auto] border-b border-border/50 last:border-b-0 hover:bg-muted/[0.07] @[680px]/request-builder:grid-cols-[152px_80px_minmax(200px,280px)_minmax(120px,1fr)_88px] @[680px]/request-builder:min-h-[44px]";
const REQUEST_BUILDER_NAME_CELL = "col-start-1 row-start-1 flex min-h-10 min-w-0 items-center px-3 py-2.5 @[680px]/request-builder:min-h-[44px] @[680px]/request-builder:w-[152px] @[680px]/request-builder:max-w-[152px] @[680px]/request-builder:px-4 @[680px]/request-builder:py-0";
const REQUEST_BUILDER_TYPE_CELL = "col-start-2 row-start-1 flex min-h-10 shrink-0 items-center justify-end px-1 py-2.5 @[680px]/request-builder:min-h-[44px] @[680px]/request-builder:w-[80px] @[680px]/request-builder:justify-center @[680px]/request-builder:border-s @[680px]/request-builder:border-border/50 @[680px]/request-builder:px-3 @[680px]/request-builder:py-0";
const REQUEST_BUILDER_VALUE_CELL = "col-span-3 col-start-1 row-start-2 flex min-h-11 min-w-0 items-center border-t border-border/50 @[680px]/request-builder:col-span-1 @[680px]/request-builder:col-start-3 @[680px]/request-builder:row-start-1 @[680px]/request-builder:min-h-[44px] @[680px]/request-builder:border-s @[680px]/request-builder:border-t-0";
const REQUEST_BUILDER_HELPER_CELL = "col-span-3 col-start-1 row-start-3 flex min-h-10 min-w-0 items-center justify-start border-t border-border/50 px-3 py-2 @[680px]/request-builder:col-span-1 @[680px]/request-builder:col-start-4 @[680px]/request-builder:row-start-1 @[680px]/request-builder:min-h-[44px] @[680px]/request-builder:border-t-0 @[680px]/request-builder:py-0";
const REQUEST_BUILDER_HELPER_SLOT = "flex w-full min-w-0 items-center justify-start";
const REQUEST_BUILDER_REQUIRED_CELL = "col-start-3 row-start-1 flex min-h-10 shrink-0 items-center justify-end pe-3 ps-1 py-2.5 empty:hidden @[680px]/request-builder:col-start-5 @[680px]/request-builder:empty:flex @[680px]/request-builder:min-h-[44px] @[680px]/request-builder:w-[88px] @[680px]/request-builder:border-s @[680px]/request-builder:border-border/50 @[680px]/request-builder:px-0 @[680px]/request-builder:pe-4 @[680px]/request-builder:ps-3 @[680px]/request-builder:py-0";
const REQUEST_BUILDER_HELPER_LINK = "link-neutral inline-flex h-8 w-full min-w-0 items-center justify-start whitespace-nowrap font-mono text-[12px]";
const REQUEST_BUILDER_INPUT = "h-full min-h-11 w-full rounded-none border-0 bg-transparent px-3 py-2 text-[13px] font-mono shadow-none outline-none ring-0 focus-visible:border-0 focus-visible:bg-transparent focus-visible:ring-0 hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent placeholder:font-mono placeholder:text-muted-foreground/45 @[680px]/request-builder:min-h-[44px] @[680px]/request-builder:px-4";
const REQUEST_BUILDER_SELECT = "h-full min-h-11 w-full rounded-none border-0 bg-transparent px-3 py-2 text-[13px] font-mono shadow-none outline-none ring-0 focus:ring-0 focus-visible:border-0 focus-visible:bg-transparent focus-visible:ring-0 hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent data-[placeholder]:text-muted-foreground/45 [&>svg]:ms-auto [&>svg]:size-3.5 [&>svg]:opacity-35 @[680px]/request-builder:min-h-[44px] @[680px]/request-builder:px-4";
const REQUEST_BUILDER_VALUE_INNER = "flex min-h-11 w-full items-center @[680px]/request-builder:min-h-[44px]";
const REQUEST_BUILDER_VALUE_INNER_COMPLEX = "flex w-full flex-col";
const REQUEST_BUILDER_ARRAY_ITEMS = "flex w-full flex-col divide-y divide-border/50";
const REQUEST_BUILDER_COMBINED_ARRAY_ROW = "grid w-full grid-cols-1 @[680px]/request-builder:grid-cols-[minmax(200px,280px)_minmax(120px,1fr)]";
const REQUEST_BUILDER_COMBINED_ARRAY_HELPER_CELL = "flex h-9 shrink-0 items-center border-border/50 px-3 @[680px]/request-builder:border-s";
const REQUEST_BUILDER_ARRAY_ITEM_ROW = "flex h-9 w-full shrink-0 items-center";
const REQUEST_BUILDER_ARRAY_ADD_ROW = "flex h-9 shrink-0 items-center px-3 @[680px]/request-builder:px-4";
const REQUEST_BUILDER_REQUIRED = "shrink-0 select-none text-[11px] font-medium text-red-600 dark:text-red-400 @[680px]/request-builder:text-[12px]";
function ExplorerArrayItemInputs({ idPrefix, items, onChange, emptyLabel = "No items", emptyState = "label", placeholder = "// enter value", inputType = "text" }) {
	const t = useT();
	const updateItem = (index, next) => {
		const copy = [...items];
		copy[index] = next;
		onChange(copy);
	};
	const removeItem = (index) => {
		onChange(items.filter((_, itemIndex) => itemIndex !== index));
	};
	if (items.length === 0) {
		if (emptyState === "add-control") return /* @__PURE__ */ jsx("div", {
			className: "flex min-h-[44px] items-center px-4",
			children: /* @__PURE__ */ jsx(ExplorerArrayAddControl, {
				items,
				onChange
			})
		});
		return /* @__PURE__ */ jsx("span", {
			className: "flex min-h-[44px] items-center px-4 font-mono text-[13px] text-muted-foreground/45",
			children: t(emptyLabel)
		});
	}
	return /* @__PURE__ */ jsxs("div", {
		className: REQUEST_BUILDER_ARRAY_ITEMS,
		children: [items.map((item, index) => /* @__PURE__ */ jsxs("div", {
			className: REQUEST_BUILDER_ARRAY_ITEM_ROW,
			children: [/* @__PURE__ */ jsx(Input, {
				id: `${idPrefix}-${index}`,
				type: inputType,
				placeholder,
				value: item,
				onChange: (event) => updateItem(index, event.target.value),
				className: cn(REQUEST_BUILDER_INPUT, "h-9 min-h-0 flex-1 py-0"),
				spellCheck: false,
				autoComplete: "off"
			}), /* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: "me-2 h-8 w-8 shrink-0 p-0 text-muted-foreground/60",
				onClick: () => removeItem(index),
				"aria-label": t("Remove item"),
				children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
			})]
		}, `${idPrefix}-${index}`)), /* @__PURE__ */ jsxs("div", {
			className: REQUEST_BUILDER_ARRAY_ADD_ROW,
			children: [/* @__PURE__ */ jsx(ExplorerArrayAddControl, {
				items,
				onChange
			}), items.length > 0 ? /* @__PURE__ */ jsx("button", {
				type: "button",
				className: cn(REQUEST_BUILDER_HELPER_LINK, "ms-3 h-8 w-auto text-muted-foreground"),
				onClick: () => onChange([]),
				children: t("Clear all")
			}) : null]
		})]
	});
}
function ExplorerArrayAddControl({ items, onChange }) {
	const t = useT();
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		className: cn(REQUEST_BUILDER_HELPER_LINK, "h-8 w-auto"),
		onClick: () => onChange([...items, ""]),
		children: items.length === 0 ? t("Add array") : t("Add item")
	});
}
function ExplorerCombinedArrayField({ idPrefix, items, onChange, placeholder = "// enter value", renderItemHelper }) {
	const t = useT();
	const updateItem = (index, next) => {
		const copy = [...items];
		copy[index] = next;
		onChange(copy);
	};
	const removeItem = (index) => {
		onChange(items.filter((_, itemIndex) => itemIndex !== index));
	};
	return /* @__PURE__ */ jsxs("div", {
		className: REQUEST_BUILDER_ARRAY_ITEMS,
		children: [items.map((item, index) => /* @__PURE__ */ jsxs("div", {
			className: REQUEST_BUILDER_COMBINED_ARRAY_ROW,
			children: [/* @__PURE__ */ jsxs("div", {
				className: REQUEST_BUILDER_ARRAY_ITEM_ROW,
				children: [/* @__PURE__ */ jsx(Input, {
					id: `${idPrefix}-${index}`,
					type: "text",
					placeholder,
					value: item,
					onChange: (event) => updateItem(index, event.target.value),
					className: cn(REQUEST_BUILDER_INPUT, "h-9 min-h-0 flex-1 py-0"),
					spellCheck: false,
					autoComplete: "off"
				}), /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					className: "me-2 h-8 w-8 shrink-0 p-0 text-muted-foreground/60",
					onClick: () => removeItem(index),
					"aria-label": t("Remove item"),
					children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: REQUEST_BUILDER_COMBINED_ARRAY_HELPER_CELL,
				children: renderItemHelper(index)
			})]
		}, `${idPrefix}-${index}`)), /* @__PURE__ */ jsxs("div", {
			className: REQUEST_BUILDER_COMBINED_ARRAY_ROW,
			children: [/* @__PURE__ */ jsxs("div", {
				className: REQUEST_BUILDER_ARRAY_ADD_ROW,
				children: [/* @__PURE__ */ jsx(ExplorerArrayAddControl, {
					items,
					onChange
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					className: cn(REQUEST_BUILDER_HELPER_LINK, "ms-3 h-8 w-auto text-muted-foreground"),
					onClick: () => onChange([]),
					children: t("Clear all")
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: REQUEST_BUILDER_COMBINED_ARRAY_HELPER_CELL,
				"aria-hidden": true
			})]
		})]
	});
}
function ExplorerArrayItemHelperRows({ count, renderItemHelper }) {
	if (count === 0) return null;
	return /* @__PURE__ */ jsx("div", {
		className: REQUEST_BUILDER_ARRAY_ITEMS,
		children: Array.from({ length: count }, (_, index) => /* @__PURE__ */ jsx("div", {
			className: REQUEST_BUILDER_ARRAY_ITEM_ROW,
			children: renderItemHelper(index)
		}, index))
	});
}
function ExplorerPermissionsField({ field, value, onChange, inputId, projectId, part }) {
	const items = Array.isArray(value) ? value.map(String) : [];
	const helper = field.helper?.type === "permissions" ? field.helper : void 0;
	const setItems = (next) => {
		onChange(next);
	};
	if (part === "combined") return /* @__PURE__ */ jsx(ExplorerCombinedArrayField, {
		idPrefix: inputId,
		items,
		onChange: setItems,
		placeholder: getFormFieldPlaceholder("string"),
		renderItemHelper: (index) => /* @__PURE__ */ jsx(ExplorerPermissionsItemHelper, {
			index,
			items,
			onChange: setItems,
			withCreate: helper?.withCreate,
			withWrite: helper?.withWrite,
			executeOnly: helper?.executeOnly,
			projectId
		})
	});
	if (part === "value") return /* @__PURE__ */ jsx(ExplorerArrayItemInputs, {
		idPrefix: inputId,
		items,
		onChange: setItems,
		emptyState: "add-control",
		placeholder: getFormFieldPlaceholder("string")
	});
	if (items.length === 0) return null;
	return /* @__PURE__ */ jsx(ExplorerArrayItemHelperRows, {
		count: items.length,
		renderItemHelper: (index) => /* @__PURE__ */ jsx(ExplorerPermissionsItemHelper, {
			index,
			items,
			onChange: setItems,
			withCreate: helper?.withCreate,
			withWrite: helper?.withWrite,
			executeOnly: helper?.executeOnly,
			projectId
		})
	});
}
function applyPermissionEntryAtIndex(items, index, next) {
	const copy = [...items];
	const filtered = next.map((entry) => entry.trim()).filter(Boolean);
	if (filtered.length === 0) copy[index] = "";
	else if (filtered.length === 1) copy[index] = filtered[0];
	else copy.splice(index, 1, ...filtered);
	return copy;
}
function ExplorerPermissionsItemHelper({ index, items, onChange, withCreate, withWrite, executeOnly, projectId }) {
	const t = useT();
	const [open, setOpen] = useState(false);
	const [editorKey, setEditorKey] = useState(0);
	const [sessionPermissions, setSessionPermissions] = useState([]);
	const editorRef = useRef(null);
	const current = items[index] ?? "";
	const openDialog = () => {
		setSessionPermissions(current.trim() ? [current.trim()] : []);
		setEditorKey((key) => key + 1);
		setOpen(true);
	};
	const handleDone = () => {
		onChange(applyPermissionEntryAtIndex(items, index, editorRef.current?.getPermissions() ?? []));
		setOpen(false);
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
		type: "button",
		variant: "outline",
		size: "sm",
		className: "h-8 shrink-0 px-3 text-[12px] leading-none",
		onClick: openDialog,
		children: t("Build")
	}), /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange: (nextOpen) => {
			if (!nextOpen) setOpen(false);
		},
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "flex max-h-[min(90dvh,720px)] w-[min(96vw,720px)] flex-col gap-0 overflow-hidden p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Build permission") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Build a permission string for this entry. Changes apply when you click Done.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "min-h-0 flex-1 overflow-y-auto px-6 py-4",
					children: open ? /* @__PURE__ */ jsx(PermissionsEditor, {
						ref: editorRef,
						deferChanges: true,
						permissions: sessionPermissions,
						withCreate,
						withWrite,
						executeOnly,
						projectId,
						compact: true
					}, editorKey) : null
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "border-t border-border bg-muted/30 px-6 py-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: () => setOpen(false),
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						size: "sm",
						className: "h-9 text-[13px]",
						onClick: handleDone,
						children: t("Done")
					})]
				})
			]
		})
	})] });
}
function ExplorerQueryBuilderField({ field, value, onChange, inputId, columns, part }) {
	const items = Array.isArray(value) ? value.map(String) : [];
	const setItems = (next) => {
		onChange(next);
	};
	if (part === "combined") return /* @__PURE__ */ jsx(ExplorerCombinedArrayField, {
		idPrefix: inputId,
		items,
		onChange: setItems,
		placeholder: getFormFieldPlaceholder("string"),
		renderItemHelper: (index) => /* @__PURE__ */ jsx(ExplorerQueryItemHelper, {
			index,
			items,
			onChange: setItems,
			fieldLabel: field.label,
			columns
		})
	});
	if (part === "value") return /* @__PURE__ */ jsx(ExplorerArrayItemInputs, {
		idPrefix: inputId,
		items,
		onChange: setItems,
		emptyState: "add-control",
		placeholder: getFormFieldPlaceholder("string")
	});
	if (items.length === 0) return null;
	return /* @__PURE__ */ jsx(ExplorerArrayItemHelperRows, {
		count: items.length,
		renderItemHelper: (index) => /* @__PURE__ */ jsx(ExplorerQueryItemHelper, {
			index,
			items,
			onChange: setItems,
			fieldLabel: field.label,
			columns
		})
	});
}
function ExplorerQueryItemHelper({ index, items, onChange, fieldLabel, columns }) {
	const t = useT();
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
		type: "button",
		variant: "outline",
		size: "sm",
		className: "h-8 shrink-0 px-3 text-[12px] leading-none",
		onClick: () => setOpen(true),
		children: t("Build")
	}), /* @__PURE__ */ jsx(ExplorerSingleQueryBuilderDialog, {
		open,
		onOpenChange: setOpen,
		fieldLabel,
		columns,
		onApply: (query) => {
			const copy = [...items];
			copy[index] = query;
			onChange(copy);
			setOpen(false);
		}
	})] });
}
function ExplorerSingleQueryBuilderDialog({ open, onOpenChange, fieldLabel, columns, onApply }) {
	const t = useT();
	const [columnId, setColumnId] = useState(columns[0]?.id ?? "$id");
	const [operatorKey, setOperatorKey] = useState("equal");
	const [valueInput, setValueInput] = useState("");
	const selectedColumn = columns.find((column) => column.id === columnId) ?? columns[0];
	const operators = useMemo(() => {
		if (!selectedColumn) return [];
		return getOperatorsForType(selectedColumn.type, {
			enumOptional: selectedColumn.optional,
			fulltextSearchable: selectedColumn.fulltextSearchable
		});
	}, [selectedColumn]);
	useEffect(() => {
		if (!open) return;
		setColumnId(columns[0]?.id ?? "$id");
		setOperatorKey("equal");
		setValueInput("");
	}, [open, columns]);
	const handleApply = () => {
		const query = buildFilterQueryString(operatorKey, columnId, [
			"isNull",
			"isNotNull",
			"exists",
			"notExists"
		].includes(operatorKey) ? null : valueInput);
		if (!query.trim()) return;
		onApply(query);
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "flex max-h-[min(90dvh,520px)] w-[min(96vw,640px)] flex-col gap-0 overflow-hidden p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsxs(DialogTitle, { children: [
						t("Build"),
						" ",
						fieldLabel
					] }), /* @__PURE__ */ jsxs(DialogDescription, {
						className: "text-[13px] mt-2",
						children: [t("Add one Appwrite Query condition for this entry."), " "]
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "min-h-0 flex-1 overflow-y-auto px-6 py-4",
					children: /* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card/50 overflow-hidden",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx("p", {
									className: "text-[13px] font-semibold text-foreground",
									children: t("Condition")
								})
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
							/* @__PURE__ */ jsxs("div", {
								className: "grid gap-3 px-4 py-4 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ jsxs("label", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[12px] font-medium text-muted-foreground",
											children: t("Attribute")
										}), /* @__PURE__ */ jsx("select", {
											value: columnId,
											onChange: (event) => {
												setColumnId(event.target.value);
												setOperatorKey("equal");
											},
											className: "h-9 w-full rounded-md border border-border bg-background px-3 font-mono text-[13px]",
											children: columns.map((column) => /* @__PURE__ */ jsx("option", {
												value: column.id,
												children: column.title
											}, column.id))
										})]
									}),
									/* @__PURE__ */ jsxs("label", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[12px] font-medium text-muted-foreground",
											children: t("Operator")
										}), /* @__PURE__ */ jsx("select", {
											value: operatorKey,
											onChange: (event) => setOperatorKey(event.target.value),
											className: "h-9 w-full rounded-md border border-border bg-background px-3 font-mono text-[13px]",
											children: operators.map((operator) => /* @__PURE__ */ jsx("option", {
												value: operator.key,
												children: operator.label
											}, operator.key))
										})]
									}),
									/* @__PURE__ */ jsxs("label", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[12px] font-medium text-muted-foreground",
											children: t("Value")
										}), /* @__PURE__ */ jsx("input", {
											value: valueInput,
											onChange: (event) => setValueInput(event.target.value),
											disabled: [
												"isNull",
												"isNotNull",
												"exists",
												"notExists"
											].includes(operatorKey),
											placeholder: [
												"isNull",
												"isNotNull",
												"exists",
												"notExists"
											].includes(operatorKey) ? t("No value needed") : t("Enter value"),
											className: "h-9 w-full rounded-md border border-border bg-background px-3 font-mono text-[13px] disabled:opacity-50"
										})]
									})
								]
							})
						]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "border-t border-border bg-muted/30 px-6 py-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						className: "h-9 text-[13px]",
						onClick: () => onOpenChange(false),
						children: t("Cancel")
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						className: "h-9 text-[13px]",
						onClick: handleApply,
						children: t("Apply query")
					})]
				})
			]
		})
	});
}
function ExplorerResourceIdValue({ inputId, value, onChange }) {
	return /* @__PURE__ */ jsx(Input, {
		id: inputId,
		type: "text",
		placeholder: "// enter or select ID",
		value,
		onChange: (event) => onChange(event.target.value),
		className: REQUEST_BUILDER_INPUT,
		spellCheck: false,
		autoComplete: "off"
	});
}
function ExplorerResourceIdHelper({ resourceType, value, onChange, projectId, formValues = {} }) {
	const t = useT();
	const context = useMemo(() => resolveResourceIdContext(formValues), [formValues]);
	const missingContext = resourceType === "file" && !context.bucketId || [
		"row",
		"column",
		"index"
	].includes(resourceType) && (!context.databaseId || !context.tableId);
	if (!projectId) return null;
	if (missingContext) return /* @__PURE__ */ jsx(Button, {
		type: "button",
		variant: "outline",
		size: "sm",
		disabled: true,
		className: "inline-flex h-8 cursor-not-allowed px-3 text-[12px] font-normal text-muted-foreground/70 opacity-100",
		title: t("Set parent resource IDs first"),
		children: t("Set parent ID")
	});
	return /* @__PURE__ */ jsx("div", {
		className: "inline-block min-w-0",
		children: /* @__PURE__ */ jsx(EventResourceIdSelector, {
			projectId,
			type: resourceType,
			databaseId: context.databaseId,
			tableId: context.tableId,
			bucketId: context.bucketId,
			value: value.trim() || void 0,
			onSelect: (next) => onChange(next === "*" ? "" : next),
			placeholder: t("Select"),
			allowAllOption: false,
			triggerClassName: "inline-flex h-8 w-auto max-w-[240px] items-center justify-start gap-1.5 px-3 text-[12px] font-normal leading-normal",
			contentClassName: REQUEST_BUILDER_ID_SELECTOR_POPOVER_CLASS
		})
	});
}
function useSelectAllOnFirstFocus(fieldKey) {
	const hasSelectedRef = useRef(false);
	useEffect(() => {
		hasSelectedRef.current = false;
	}, [fieldKey]);
	return useCallback((event) => {
		if (hasSelectedRef.current) return;
		hasSelectedRef.current = true;
		if (event.currentTarget.value.length > 0) event.currentTarget.select();
	}, []);
}
function ExplorerParamInput({ fieldKey, onFocus, ...props }) {
	const handleFirstFocus = useSelectAllOnFirstFocus(fieldKey);
	return /* @__PURE__ */ jsx(Input, {
		...props,
		onFocus: (event) => {
			handleFirstFocus(event);
			onFocus?.(event);
		}
	});
}
function ExplorerParamTextarea({ fieldKey, onFocus, ...props }) {
	const handleFirstFocus = useSelectAllOnFirstFocus(fieldKey);
	return /* @__PURE__ */ jsx(Textarea, {
		...props,
		onFocus: (event) => {
			handleFirstFocus(event);
			onFocus?.(event);
		}
	});
}
function RequestFormFieldInput({ field, value, onChange, idPrefix = "field", className, projectId, formValues, method }) {
	const t = useT();
	const inputId = `${idPrefix}-${field.name}`;
	const hasHelperField = Boolean(field.helper);
	const isHelperArrayField = field.helper?.type === "permissions" || field.helper?.type === "queries";
	const helperArrayItemCount = isHelperArrayField && Array.isArray(value) ? value.length : 0;
	const plainArrayItemCount = !hasHelperField && (field.kind === "array-string" || field.kind === "array-number") && Array.isArray(value) ? value.length : 0;
	const isComplex = isHelperArrayField && helperArrayItemCount > 0 || plainArrayItemCount > 0 || !hasHelperField && (field.kind === "json" || field.kind === "array-enum");
	const useCombinedHelperArrayLayout = isHelperArrayField && helperArrayItemCount > 0;
	const helperControl = renderHelperControl(field, value, onChange, inputId, projectId, formValues, method, t);
	const hasHelperControl = helperControl != null;
	return /* @__PURE__ */ jsxs("div", {
		className: cn(REQUEST_BUILDER_ROW, isComplex && "@[680px]/request-builder:items-stretch", className),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: REQUEST_BUILDER_NAME_CELL,
				children: /* @__PURE__ */ jsx(ParameterNameLabel, {
					inputId,
					name: field.label,
					description: field.description
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: REQUEST_BUILDER_TYPE_CELL,
				children: /* @__PURE__ */ jsx(Badge, {
					variant: getFormFieldTypeBadgeVariant(field.kind),
					className: FORM_FIELD_TYPE_PILL_CLASS,
					children: getFormFieldTypeLabel(field.kind)
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: cn(REQUEST_BUILDER_REQUIRED_CELL, isComplex && "@[680px]/request-builder:items-start"),
				children: field.required ? /* @__PURE__ */ jsx("span", {
					className: REQUEST_BUILDER_REQUIRED,
					children: t("Required")
				}) : null
			}),
			useCombinedHelperArrayLayout ? /* @__PURE__ */ jsx("div", {
				className: cn(REQUEST_BUILDER_VALUE_CELL, "col-span-3 @[680px]/request-builder:col-span-2 @[680px]/request-builder:items-start"),
				children: /* @__PURE__ */ jsx(ValueCell, {
					complex: isComplex,
					children: renderValueControl(field, value, onChange, inputId, projectId, formValues, method, true, t)
				})
			}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
				className: REQUEST_BUILDER_VALUE_CELL,
				children: /* @__PURE__ */ jsx(ValueCell, {
					complex: isComplex,
					children: renderValueControl(field, value, onChange, inputId, projectId, formValues, method, false, t)
				})
			}), /* @__PURE__ */ jsx("div", {
				className: cn(REQUEST_BUILDER_HELPER_CELL, !hasHelperControl && "hidden @[680px]/request-builder:flex", isComplex && "@[680px]/request-builder:items-start"),
				children: /* @__PURE__ */ jsx("div", {
					className: REQUEST_BUILDER_HELPER_SLOT,
					children: helperControl
				})
			})] })
		]
	});
}
function ValueCell({ complex, children }) {
	if (complex) return /* @__PURE__ */ jsx("div", {
		className: REQUEST_BUILDER_VALUE_INNER_COMPLEX,
		children: /* @__PURE__ */ jsx("div", {
			className: "min-w-0 flex-1",
			children
		})
	});
	return /* @__PURE__ */ jsx("div", {
		className: REQUEST_BUILDER_VALUE_INNER,
		children: /* @__PURE__ */ jsx("div", {
			className: "min-w-0 flex-1",
			children
		})
	});
}
function ParameterNameLabel({ inputId, name, description }) {
	const label = /* @__PURE__ */ jsx(Label, {
		htmlFor: inputId,
		className: cn("block min-w-0 w-full truncate font-mono text-[13px] font-normal text-foreground/85", description && "cursor-help underline decoration-dotted decoration-muted-foreground/38 underline-offset-[3px] hover:decoration-muted-foreground/58"),
		children: name
	});
	if (!description?.trim()) return /* @__PURE__ */ jsx("div", {
		className: "min-w-0 w-full",
		children: label
	});
	return /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsx("div", {
			className: "min-w-0 w-full",
			children: label
		})
	}), /* @__PURE__ */ jsx(TooltipContent, {
		side: "top",
		sideOffset: 6,
		className: "max-w-sm text-[12px] leading-relaxed",
		children: description.trim()
	})] });
}
function renderValueControl(field, value, onChange, inputId, projectId, formValues, method, combinedHelperArrayLayout = false, translate = (text) => text) {
	if (field.helper?.type === "permissions") return /* @__PURE__ */ jsx(ExplorerPermissionsField, {
		field,
		value,
		onChange,
		inputId,
		projectId,
		part: combinedHelperArrayLayout ? "combined" : "value"
	});
	if (field.helper?.type === "queries") return /* @__PURE__ */ jsx(ExplorerQueryBuilderField, {
		field,
		value,
		onChange,
		inputId,
		columns: getQueryFilterColumnsForMethod(method),
		part: combinedHelperArrayLayout ? "combined" : "value"
	});
	if (field.helper?.type === "resource-id") return /* @__PURE__ */ jsx(ExplorerResourceIdValue, {
		inputId,
		value: String(value ?? ""),
		onChange: (next) => onChange(next)
	});
	switch (field.kind) {
		case "boolean": return /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-[44px] items-center gap-2.5 px-4",
			children: [/* @__PURE__ */ jsx(Switch, {
				id: inputId,
				checked: Boolean(value),
				onCheckedChange: (checked) => onChange(checked)
			}), /* @__PURE__ */ jsx(Label, {
				htmlFor: inputId,
				className: "font-mono text-[13px] font-normal text-muted-foreground/75",
				children: Boolean(value) ? "true" : "false"
			})]
		});
		case "integer": return /* @__PURE__ */ jsx(ExplorerParamInput, {
			fieldKey: inputId,
			id: inputId,
			type: "number",
			inputMode: "numeric",
			step: 1,
			placeholder: getFormFieldPlaceholder(field.kind),
			value: value === null || value === void 0 ? "" : String(value),
			onChange: (event) => onChange(event.target.value === "" ? "" : parseInt(event.target.value, 10) || 0),
			className: REQUEST_BUILDER_INPUT
		});
		case "number": return /* @__PURE__ */ jsx(ExplorerParamInput, {
			fieldKey: inputId,
			id: inputId,
			type: "number",
			inputMode: "decimal",
			step: "any",
			placeholder: getFormFieldPlaceholder(field.kind),
			value: value === null || value === void 0 ? "" : String(value),
			onChange: (event) => onChange(event.target.value === "" ? "" : Number(event.target.value) || 0),
			className: REQUEST_BUILDER_INPUT
		});
		case "enum": return /* @__PURE__ */ jsxs(Select, {
			value: String(value ?? ""),
			onValueChange: (next) => onChange(next),
			children: [/* @__PURE__ */ jsx(SelectTrigger, {
				id: inputId,
				className: REQUEST_BUILDER_SELECT,
				children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "// choose value" })
			}), /* @__PURE__ */ jsx(SelectContent, { children: field.enumValues?.map((option) => /* @__PURE__ */ jsx(SelectItem, {
				value: option,
				className: "font-mono text-[13px]",
				children: option
			}, option)) })]
		});
		case "array-string":
		case "array-number": return /* @__PURE__ */ jsx(ExplorerArrayItemInputs, {
			idPrefix: inputId,
			items: Array.isArray(value) ? value.map(String) : [],
			onChange: (next) => onChange(next),
			inputType: field.kind === "array-number" ? "number" : "text"
		});
		case "array-enum": return /* @__PURE__ */ jsx("div", {
			className: "px-4 py-3",
			children: /* @__PURE__ */ jsx(ArrayEnumInput, {
				options: field.enumValues ?? [],
				selected: Array.isArray(value) ? value : [],
				onChange
			})
		});
		case "json":
			if (!String(value ?? "").trim()) return /* @__PURE__ */ jsx("span", {
				id: inputId,
				className: "block px-4 font-mono text-[13px] text-muted-foreground/45",
				children: translate("No object")
			});
			return /* @__PURE__ */ jsx("div", {
				className: "px-4 py-3",
				children: /* @__PURE__ */ jsx(ExplorerParamTextarea, {
					fieldKey: inputId,
					id: inputId,
					value: String(value ?? ""),
					onChange: (event) => onChange(event.target.value),
					placeholder: getFormFieldPlaceholder("json"),
					className: "min-h-[88px] w-full resize-y rounded-none border-0 bg-transparent p-0 font-mono text-[13px] leading-relaxed shadow-none outline-none ring-0 focus-visible:ring-0 dark:bg-transparent placeholder:font-mono placeholder:text-muted-foreground/45",
					spellCheck: false
				})
			});
		case "password": return /* @__PURE__ */ jsx(ExplorerPasswordValue, {
			inputId,
			value: String(value ?? ""),
			onChange: (next) => onChange(next)
		});
		case "email": return /* @__PURE__ */ jsx(ExplorerParamInput, {
			fieldKey: inputId,
			id: inputId,
			type: "email",
			inputMode: "email",
			autoComplete: "email",
			placeholder: getFormFieldPlaceholder(field.kind),
			value: String(value ?? ""),
			onChange: (event) => onChange(event.target.value),
			className: REQUEST_BUILDER_INPUT,
			spellCheck: false
		});
		case "url": return /* @__PURE__ */ jsx(ExplorerParamInput, {
			fieldKey: inputId,
			id: inputId,
			type: "url",
			inputMode: "url",
			autoComplete: "url",
			placeholder: getFormFieldPlaceholder(field.kind),
			value: String(value ?? ""),
			onChange: (event) => onChange(event.target.value),
			className: REQUEST_BUILDER_INPUT,
			spellCheck: false
		});
		case "phone": return /* @__PURE__ */ jsx(ExplorerParamInput, {
			fieldKey: inputId,
			id: inputId,
			type: "tel",
			inputMode: "tel",
			autoComplete: "tel",
			placeholder: getFormFieldPlaceholder(field.kind),
			value: String(value ?? ""),
			onChange: (event) => onChange(event.target.value),
			className: REQUEST_BUILDER_INPUT,
			spellCheck: false
		});
		case "ip": return /* @__PURE__ */ jsx(ExplorerParamInput, {
			fieldKey: inputId,
			id: inputId,
			type: "text",
			autoComplete: "off",
			placeholder: getFormFieldPlaceholder(field.kind),
			value: String(value ?? ""),
			onChange: (event) => onChange(event.target.value),
			className: REQUEST_BUILDER_INPUT,
			spellCheck: false
		});
		case "datetime": return /* @__PURE__ */ jsx(DateTimePicker, {
			id: inputId,
			value: String(value ?? "").trim() || null,
			onChange: (next) => onChange(next ?? ""),
			placeholder: getFormFieldPlaceholder(field.kind),
			clearable: field.nullable || !field.required,
			hideIcon: true,
			className: cn(REQUEST_BUILDER_INPUT, "h-full min-h-[44px] justify-start rounded-none border-0 bg-transparent font-mono shadow-none hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent")
		});
		case "id": return /* @__PURE__ */ jsx(ExplorerIdValue, {
			inputId,
			value: String(value ?? ""),
			onChange: (next) => onChange(next),
			required: field.required
		});
		case "binary": return /* @__PURE__ */ jsx(ExplorerFileValue, {
			inputId,
			value: value instanceof File ? value : null
		});
		case "string":
		default: return /* @__PURE__ */ jsx(ExplorerParamInput, {
			fieldKey: inputId,
			id: inputId,
			type: "text",
			placeholder: getFormFieldPlaceholder(field.kind),
			value: String(value ?? ""),
			onChange: (event) => onChange(event.target.value),
			className: REQUEST_BUILDER_INPUT,
			spellCheck: false,
			autoComplete: "off"
		});
	}
}
function renderHelperControl(field, value, onChange, inputId, projectId, formValues, method, translate = (text) => text) {
	if (field.helper?.type === "permissions") return /* @__PURE__ */ jsx(ExplorerPermissionsField, {
		field,
		value,
		onChange,
		inputId,
		projectId,
		part: "helper"
	});
	if (field.helper?.type === "queries") return /* @__PURE__ */ jsx(ExplorerQueryBuilderField, {
		field,
		value,
		onChange,
		inputId,
		columns: getQueryFilterColumnsForMethod(method),
		part: "helper"
	});
	if (field.helper?.type === "resource-id") return /* @__PURE__ */ jsx(ExplorerResourceIdHelper, {
		resourceType: field.helper.resourceType,
		value: String(value ?? ""),
		onChange: (next) => onChange(next),
		projectId,
		formValues
	});
	switch (field.kind) {
		case "id": return /* @__PURE__ */ jsx(Button, {
			type: "button",
			variant: "outline",
			size: "sm",
			className: "h-8 text-[12px]",
			onClick: () => onChange(ID.unique()),
			children: translate("Generate")
		});
		case "binary": return /* @__PURE__ */ jsx(ExplorerFileHelper, {
			inputId,
			value: value instanceof File ? value : null,
			onChange
		});
		case "json":
			if (!String(value ?? "").trim()) return /* @__PURE__ */ jsx("button", {
				type: "button",
				className: REQUEST_BUILDER_HELPER_LINK,
				onClick: () => onChange("{}"),
				children: translate("Add object")
			});
			return null;
		case "array-string":
		case "array-number": return /* @__PURE__ */ jsx(ArrayStringHelper, {
			items: Array.isArray(value) ? value : [],
			onChange
		});
		default: return null;
	}
}
function ExplorerFileValue({ value }) {
	return /* @__PURE__ */ jsx("span", {
		className: cn("block min-w-0 truncate px-4 font-mono text-[13px]", value ? "text-foreground/85" : "text-muted-foreground/45"),
		title: value?.name,
		children: value?.name ?? "// No file selected"
	});
}
function ExplorerFileHelper({ inputId, value, onChange }) {
	const t = useT();
	const fileInputRef = useRef(null);
	const handleChooseFile = () => {
		fileInputRef.current?.click();
	};
	const handleClearFile = () => {
		onChange(null);
		if (fileInputRef.current) fileInputRef.current.value = "";
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("input", {
		ref: fileInputRef,
		id: inputId,
		type: "file",
		className: "sr-only",
		onChange: (event) => {
			const file = event.target.files?.[0];
			onChange(file ?? null);
		}
	}), value ? /* @__PURE__ */ jsxs("div", {
		className: "flex min-w-0 items-center gap-1.5",
		children: [/* @__PURE__ */ jsx(Button, {
			type: "button",
			variant: "outline",
			size: "sm",
			className: "h-8 text-[12px]",
			onClick: handleChooseFile,
			children: t("Change")
		}), /* @__PURE__ */ jsx(Button, {
			type: "button",
			variant: "ghost",
			size: "sm",
			className: "h-8 w-8 shrink-0 p-0 text-muted-foreground/60",
			onClick: handleClearFile,
			"aria-label": t("Clear file"),
			children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
		})]
	}) : /* @__PURE__ */ jsx(Button, {
		type: "button",
		variant: "outline",
		size: "sm",
		className: "h-8 text-[12px]",
		onClick: handleChooseFile,
		children: t("Choose file")
	})] });
}
function ExplorerPasswordValue({ inputId, value, onChange }) {
	const t = useT();
	const [revealed, setRevealed] = useState(false);
	useEffect(() => {
		setRevealed(false);
	}, [inputId]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative w-full",
		children: [/* @__PURE__ */ jsx(ExplorerParamInput, {
			fieldKey: inputId,
			id: inputId,
			type: revealed ? "text" : "password",
			placeholder: getFormFieldPlaceholder("password"),
			value,
			onChange: (event) => onChange(event.target.value),
			className: cn(REQUEST_BUILDER_INPUT, "pe-10"),
			autoComplete: "new-password",
			spellCheck: false
		}), /* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: () => setRevealed((current) => !current),
			className: "absolute end-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground",
			"aria-label": revealed ? t("Hide password") : t("Show password"),
			title: revealed ? t("Hide password") : t("Show password"),
			children: revealed ? /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
		})]
	});
}
function ExplorerIdValue({ inputId, value, onChange, required }) {
	return /* @__PURE__ */ jsx(ExplorerParamInput, {
		fieldKey: inputId,
		id: inputId,
		type: "text",
		placeholder: getFormFieldPlaceholder("id", { required }),
		value,
		onChange: (event) => onChange(event.target.value),
		className: REQUEST_BUILDER_INPUT,
		spellCheck: false,
		autoComplete: "off"
	});
}
function ArrayStringHelper({ items, onChange }) {
	if (items.length > 0) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-[44px] items-center",
		children: /* @__PURE__ */ jsx(ExplorerArrayAddControl, {
			items,
			onChange: (next) => onChange(next)
		})
	});
}
function ArrayEnumInput({ options, selected, onChange }) {
	const toggle = (option, checked) => {
		if (checked) {
			onChange([...selected, option]);
			return;
		}
		onChange(selected.filter((value) => value !== option));
	};
	return /* @__PURE__ */ jsx("div", {
		className: "grid gap-1.5 sm:grid-cols-2",
		children: options.map((option) => {
			const checked = selected.includes(option);
			const checkboxId = `enum-${option}`;
			return /* @__PURE__ */ jsxs("label", {
				htmlFor: checkboxId,
				className: "flex items-center gap-2 py-0.5",
				children: [/* @__PURE__ */ jsx(Checkbox, {
					id: checkboxId,
					checked,
					onCheckedChange: (next) => toggle(option, next === true)
				}), /* @__PURE__ */ jsx("span", {
					className: "font-mono text-[13px] text-foreground/85",
					children: option
				})]
			}, option);
		})
	});
}
function RequestFormFields({ fields, values, onChange, idPrefix, className, projectId, formValues, method }) {
	if (fields.length === 0) return null;
	return /* @__PURE__ */ jsx("div", {
		className: cn(className),
		children: fields.map((field) => /* @__PURE__ */ jsx(RequestFormFieldInput, {
			field,
			value: values[field.name],
			onChange: (next) => onChange(field.name, next),
			idPrefix,
			projectId,
			formValues,
			method
		}, field.name))
	});
}
function RequestBuilderPanel({ children, className }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn(REQUEST_BUILDER_CONTAINER, "overflow-hidden rounded-lg border border-border bg-background", className),
		children
	});
}
function RequestBuilderSection({ title, action, children, showTopBorder = false }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn(showTopBorder && "border-t border-border"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between gap-3 border-b border-border px-3 py-2.5 @[680px]/request-builder:px-4",
			children: [/* @__PURE__ */ jsx("h4", {
				className: "text-[13px] font-semibold tracking-tight text-foreground",
				children: title
			}), action]
		}), children]
	});
}
function RequestBodySection({ title = "Parameters", fields, formValues, jsonValue, inputMode, onFormValuesChange, onJsonValueChange, onInputModeChange, showJsonToggle = true, embedded = false, showTopBorder = false, projectId, allFormValues, method }) {
	const t = useT();
	const switchToJson = () => {
		onJsonValueChange(serializeBodyFromForm(fields, formValues));
		onInputModeChange("json");
	};
	const switchToForm = () => {
		try {
			onFormValuesChange(parseBodyToFormValues(fields, jsonValue));
			onInputModeChange("form");
		} catch {
			toast.error(t("Invalid JSON. Fix the payload before switching to form view."));
		}
	};
	const modeToggle = /* @__PURE__ */ jsxs("div", {
		className: "flex rounded-md border border-border p-0.5",
		children: [/* @__PURE__ */ jsx(Button, {
			type: "button",
			variant: inputMode === "form" ? "secondary" : "ghost",
			size: "sm",
			className: "h-6 px-2.5 text-[11px] font-medium",
			onClick: switchToForm,
			children: t("Form")
		}), /* @__PURE__ */ jsx(Button, {
			type: "button",
			variant: inputMode === "json" ? "secondary" : "ghost",
			size: "sm",
			className: "h-6 px-2.5 text-[11px] font-medium",
			onClick: switchToJson,
			children: "JSON"
		})]
	});
	const content = inputMode === "form" ? fields.length > 0 ? /* @__PURE__ */ jsx(RequestFormFields, {
		fields,
		values: formValues,
		onChange: (name, value) => onFormValuesChange({
			...formValues,
			[name]: value
		}),
		idPrefix: "body",
		projectId,
		formValues: allFormValues,
		method
	}) : /* @__PURE__ */ jsx("p", {
		className: "px-4 py-3 font-mono text-[13px] text-muted-foreground/70",
		children: t("No body fields for this endpoint.")
	}) : /* @__PURE__ */ jsx("div", {
		className: "px-4 py-3",
		children: /* @__PURE__ */ jsx(Textarea, {
			value: jsonValue,
			onChange: (event) => onJsonValueChange(event.target.value),
			className: "min-h-[200px] w-full border-0 bg-transparent px-0 font-mono text-[13px] leading-relaxed shadow-none ring-0 focus-visible:ring-0",
			spellCheck: false
		})
	});
	if (embedded) return /* @__PURE__ */ jsx(RequestBuilderSection, {
		title: t(title),
		action: showJsonToggle ? modeToggle : void 0,
		showTopBorder,
		children: content
	});
	return /* @__PURE__ */ jsx("div", {
		className: "overflow-hidden rounded-lg border border-border bg-background",
		children: /* @__PURE__ */ jsx(RequestBuilderSection, {
			title: t(title),
			action: showJsonToggle ? modeToggle : void 0,
			children: content
		})
	});
}
const API_EXPLORER_SEND_REQUEST_SHORTCUT_RAW = "mod+enter";
const API_EXPLORER_SEND_REQUEST_SHORTCUT_COMBOS = ["meta+enter", "control+enter"];
function isApiExplorerFocused() {
	if (typeof document === "undefined") return false;
	const active = document.activeElement;
	if (!(active instanceof Element)) return false;
	return Boolean(active.closest("[data-api-explorer]"));
}
var EXPLORER_SHORTCUT_OPTIONS = {
	ignoreInputs: false,
	capture: true
};
function useApiExplorerShortcuts({ onSendRequest, enabled }) {
	const handleSendRequest = useCallback((event) => {
		if (!isApiExplorerFocused()) return;
		event.preventDefault();
		onSendRequest();
	}, [onSendRequest]);
	useKeyboardShortcut(API_EXPLORER_SEND_REQUEST_SHORTCUT_COMBOS[0], handleSendRequest, {
		...EXPLORER_SHORTCUT_OPTIONS,
		enabled
	});
	useKeyboardShortcut(API_EXPLORER_SEND_REQUEST_SHORTCUT_COMBOS[1], handleSendRequest, {
		...EXPLORER_SHORTCUT_OPTIONS,
		enabled
	});
}
var HANDLE_CLASS = verticalPanelResizeHandleClass("z-[45]");
var VERTICAL_HANDLE_CLASS = cn("relative z-[45] h-[0.5px] w-full bg-border", "before:pointer-events-none before:absolute before:inset-x-0 before:top-1/2 before:h-2 before:w-full before:-translate-y-1/2 before:bg-border before:opacity-0 before:transition-opacity", "hover:before:opacity-100 data-[resize-handle-state=drag]:before:opacity-100", "after:h-2 after:top-1/2 after:w-full after:-translate-y-1/2");
var COLUMN_HEADER_CLASS = "flex h-[62px] shrink-0 border-b border-border px-4";
var COLUMN_REQUEST_FOOTER_CLASS = "flex min-h-[62px] shrink-0 items-center justify-end border-t border-border bg-muted/30 px-4 py-2";
var EXPLORER_METHODS_LIST_SCROLL_CLASS = "min-h-0 flex-1 basis-0 overflow-x-hidden overflow-y-auto";
function ApiExplorerPlatformToggle({ value, onChange, className }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(ToggleGroup, {
		type: "single",
		variant: "outline",
		size: "sm",
		value,
		onValueChange: (next) => {
			if (next !== "server" && next !== "client") return;
			onChange(next);
		},
		className: cn("shrink-0", className),
		"aria-label": t("API platform"),
		children: [/* @__PURE__ */ jsx(ToggleGroupItem, {
			value: "client",
			className: "h-9 px-3 text-[13px] font-medium data-[state=on]:bg-muted data-[state=on]:text-foreground",
			children: t("Client API")
		}), /* @__PURE__ */ jsx(ToggleGroupItem, {
			value: "server",
			className: "h-9 px-3 text-[13px] font-medium data-[state=on]:bg-muted data-[state=on]:text-foreground",
			children: t("Server API")
		})]
	});
}
function ApiExplorerOpenApiSpecDownloadFooter({ platform }) {
	const t = useT();
	const [isDownloading, setIsDownloading] = useState(false);
	const handleDownload = useCallback(async () => {
		setIsDownloading(true);
		try {
			await downloadOpenApiSpec(platform);
		} catch {
			toast.error(t("Failed to download OpenAPI spec"));
		} finally {
			setIsDownloading(false);
		}
	}, [platform, t]);
	return /* @__PURE__ */ jsx("div", {
		className: "shrink-0 border-t border-border bg-background px-3 py-3",
		children: /* @__PURE__ */ jsxs(Button, {
			type: "button",
			variant: "outline",
			size: "sm",
			disabled: isDownloading,
			onClick: () => void handleDownload(),
			className: "h-9 w-full text-[13px] text-muted-foreground hover:text-foreground",
			children: [isDownloading ? /* @__PURE__ */ jsx(Loader2, { className: "me-1.5 size-4 animate-spin" }) : /* @__PURE__ */ jsx(Download, { className: "me-1.5 size-4" }), t("OpenAPI spec")]
		})
	});
}
function applyMethodFormState(method, setters) {
	const pathParameters = method.parameters.filter((param) => param.in === "path");
	const queryParameters = method.parameters.filter((param) => param.in === "query");
	setters.setPathFormValues(buildInitialParamFormValues(pathParameters, method));
	setters.setQueryFormValues(buildInitialParamFormValues(queryParameters, method));
	setters.setBodyFormValues(buildDefaultBodyFormValues(method));
	setters.setBodyJsonValue(generateSampleRequestBody(getRequestBodyJsonSchema(method)));
	setters.setBodyInputMode("form");
}
function ApiExplorer({ config, initialServiceId, initialOperationId, onSelectionChange, platform: controlledPlatform, onPlatformChange, className }) {
	const t = useT();
	const { account } = useAuth();
	const consoleAccount = account;
	const { layout: columnsLayout, persistLayout: persistColumnsLayout } = useApiExplorerColumnsLayout(consoleAccount);
	const { expandedProductGroupId, setExpandedProductGroup } = useApiExplorerExpandedProductGroup(consoleAccount);
	const initialPlatform = config.platform ?? "server";
	const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId ?? null);
	const [selectedMethod, setSelectedMethod] = useState();
	const [pathFormValues, setPathFormValues] = useState({});
	const [queryFormValues, setQueryFormValues] = useState({});
	const [bodyFormValues, setBodyFormValues] = useState({});
	const [bodyJsonValue, setBodyJsonValue] = useState("");
	const [bodyInputMode, setBodyInputMode] = useState("form");
	const [response, setResponse] = useState(null);
	const [showResponsePanel, setShowResponsePanel] = useState(false);
	const [mobilePane, setMobilePane] = useState("request");
	const [isExecuting, setIsExecuting] = useState(false);
	const [sendConfirmOpen, setSendConfirmOpen] = useState(false);
	const { internalPlatform, setInternalPlatform, clientAuth, setClientAuth, serverAuth, setServerAuth } = useApiExplorerAuthPersistence(config.projectId, initialPlatform);
	const activePlatform = controlledPlatform ?? internalPlatform;
	const setActivePlatform = onPlatformChange ?? setInternalPlatform;
	const { data: parsedSpec, isLoading: specLoading, error: specQueryError } = useApiExplorerSpec(activePlatform);
	const specError = specQueryError ? getErrorMessage(specQueryError) || t("Failed to load API specification") : null;
	const selectedOperationRef = useRef(initialOperationId);
	const { features } = useConsoleProfile();
	const allowedServices = useMemo(() => config.allowedServices ?? getProjectApiExplorerAllowedServices(features), [
		config.allowedServices,
		features.dedicatedDbsDocumentsDB,
		features.dedicatedDbsVectorsDB,
		features.nativeDbsPostgres,
		features.nativeDbsMySQL,
		features.nativeDbsMongo
	]);
	const visibleServices = useMemo(() => filterAllowedServices(parsedSpec?.services ?? [], allowedServices), [parsedSpec?.services, allowedServices]);
	useEffect(() => {
		if (activePlatform !== "server" || !selectedMethod) return;
		const methodScopes = getMethodRequiredScopes(selectedMethod);
		setServerAuth((previous) => {
			if (previous.ephemeralDraftScopes.length > 0) return previous;
			if (methodScopes.length === 0) return previous;
			return {
				...previous,
				ephemeralDraftScopes: methodScopes
			};
		});
	}, [activePlatform, selectedMethod?.id]);
	const serviceProductGroups = useMemo(() => groupServicesByProduct(visibleServices), [visibleServices]);
	const resolvedExpandedProductGroupId = useMemo(() => {
		if (expandedProductGroupId && serviceProductGroups.some((group) => group.id === expandedProductGroupId)) return expandedProductGroupId;
		if (selectedServiceId) {
			const selectedGroup = serviceProductGroups.find((group) => group.services.some((service) => service.id === selectedServiceId));
			if (selectedGroup) return selectedGroup.id;
		}
		return serviceProductGroups.find((group) => group.services.length > 0)?.id ?? "";
	}, [
		expandedProductGroupId,
		selectedServiceId,
		serviceProductGroups
	]);
	const selectedService = useMemo(() => {
		if (!selectedServiceId) return visibleServices[0];
		return visibleServices.find((service) => service.id === selectedServiceId) ?? visibleServices[0];
	}, [visibleServices, selectedServiceId]);
	const openProductGroupId = expandedProductGroupId && serviceProductGroups.some((group) => group.id === expandedProductGroupId) ? expandedProductGroupId : resolvedExpandedProductGroupId;
	const expandProductGroupForService = useCallback((serviceId) => {
		const group = serviceProductGroups.find((productGroup) => productGroup.services.some((service) => service.id === serviceId));
		if (group) setExpandedProductGroup(group.id);
	}, [serviceProductGroups, setExpandedProductGroup]);
	const applyExplorerSelection = useCallback((method, options) => {
		selectedOperationRef.current = method.operationId;
		setSelectedServiceId(method.service);
		setSelectedMethod(method);
		expandProductGroupForService(method.service);
		applyMethodFormState(method, {
			setPathFormValues,
			setQueryFormValues,
			setBodyFormValues,
			setBodyJsonValue,
			setBodyInputMode
		});
		if (options?.clearResponse) {
			setResponse(null);
			setShowResponsePanel(false);
			setMobilePane("request");
		}
		if (options?.syncUrl) onSelectionChange?.({
			serviceId: method.service,
			operationId: method.operationId
		});
	}, [expandProductGroupForService, onSelectionChange]);
	useEffect(() => {
		if (!parsedSpec || specLoading) return;
		const { method, serviceId } = resolveExplorerSelection({
			visibleServices,
			initialServiceId,
			initialOperationId,
			preservedOperationId: selectedOperationRef.current
		});
		if (!method) {
			if (serviceId && serviceId !== selectedServiceId) setSelectedServiceId(serviceId);
			return;
		}
		const urlMatchesSelection = initialServiceId === method.service && initialOperationId === method.operationId;
		if (selectedMethod?.operationId === method.operationId && selectedServiceId === method.service) {
			if (!urlMatchesSelection) onSelectionChange?.({
				serviceId: method.service,
				operationId: method.operationId
			});
			return;
		}
		applyExplorerSelection(method, {
			syncUrl: !urlMatchesSelection,
			clearResponse: false
		});
	}, [
		applyExplorerSelection,
		initialOperationId,
		initialServiceId,
		onSelectionChange,
		parsedSpec,
		selectedMethod?.operationId,
		selectedServiceId,
		specLoading,
		visibleServices
	]);
	const handleSelectService = useCallback((service) => {
		const firstMethod = service.methods[0];
		if (!firstMethod) {
			setSelectedServiceId(service.id);
			expandProductGroupForService(service.id);
			setResponse(null);
			setShowResponsePanel(false);
			setMobilePane("request");
			return;
		}
		applyExplorerSelection(firstMethod, {
			syncUrl: true,
			clearResponse: true
		});
	}, [applyExplorerSelection, expandProductGroupForService]);
	const handleSelectMethod = useCallback((method) => {
		applyExplorerSelection(method, {
			syncUrl: true,
			clearResponse: true
		});
	}, [applyExplorerSelection]);
	const bodyFormFields = useMemo(() => selectedMethod ? getRequestBodyFormFields(selectedMethod) : [], [selectedMethod]);
	const handleResetRequestForm = useCallback(() => {
		if (!selectedMethod) return;
		applyMethodFormState(selectedMethod, {
			setPathFormValues,
			setQueryFormValues,
			setBodyFormValues,
			setBodyJsonValue,
			setBodyInputMode
		});
	}, [selectedMethod]);
	const runExecuteRequest = useCallback(async () => {
		if (!selectedMethod) return;
		const pathParameters$1 = selectedMethod.parameters.filter((param) => param.in === "path");
		const queryParameters$1 = selectedMethod.parameters.filter((param) => param.in === "query");
		const pathParams = paramFormValuesToStrings(pathParameters$1, pathFormValues);
		const queryParams = paramFormValuesToStrings(queryParameters$1, queryFormValues);
		const multipart = isMultipartMethod(selectedMethod);
		let body = "";
		let formData;
		if (hasRequestBodyForMethod(selectedMethod)) if (multipart) {
			const missingField = getMissingRequiredFormField(bodyFormFields, bodyFormValues);
			if (missingField) {
				toast.error(`${t("Missing required field:")} ${missingField.label}`);
				return;
			}
			formData = buildMultipartFormData(bodyFormFields, bodyFormValues);
		} else if (bodyInputMode === "json") {
			const missingField = getMissingRequiredFieldInJsonBody(bodyFormFields, bodyJsonValue);
			if (missingField) {
				toast.error(`${t("Missing required field:")} ${missingField.label}`);
				return;
			}
			if (bodyJsonValue.trim()) try {
				body = stripEmptyCreatableIdFieldsFromJson(bodyFormFields, bodyJsonValue);
			} catch {
				toast.error(t("Invalid JSON in request body."));
				return;
			}
			else body = bodyJsonValue;
		} else {
			const missingField = getMissingRequiredFormField(bodyFormFields, bodyFormValues);
			if (missingField) {
				toast.error(`${t("Missing required field:")} ${missingField.label}`);
				return;
			}
			try {
				body = serializeBodyFromForm(bodyFormFields, bodyFormValues);
			} catch (error) {
				toast.error(getErrorMessage(error) || t("Invalid request body"));
				return;
			}
		}
		setIsExecuting(true);
		setShowResponsePanel(true);
		setMobilePane("response");
		try {
			let requestAuth;
			let apiKey;
			if (methodUsesSessionAuthChoice(selectedMethod, activePlatform)) if (clientAuth.mode === "user") {
				if (!clientAuth.userId.trim()) {
					toast.error(t("Select a user to act as, or choose Guest."));
					setIsExecuting(false);
					return;
				}
				requestAuth = {
					mode: "user",
					jwt: await createUserJwtForExplorer(config.projectId, clientAuth.userId.trim())
				};
			} else requestAuth = { mode: "guest" };
			else if (methodSupportsServerApiKey(selectedMethod, activePlatform)) {
				apiKey = resolveServerAuthApiKey(serverAuth);
				if (methodRequiresApiKey(selectedMethod, activePlatform) && !apiKey) {
					toast.error(t("Provide an API key or generate an ephemeral key."));
					setIsExecuting(false);
					return;
				}
			}
			const requestInput = {
				config: {
					...config,
					platform: activePlatform,
					apiKey
				},
				method: selectedMethod,
				pathParams,
				queryParams,
				requestAuth
			};
			setResponse(multipart ? await executeApiMultipartRequest({
				...requestInput,
				formData: formData ?? new FormData()
			}) : await executeApiRequest({
				...requestInput,
				body
			}));
		} catch (error) {
			toast.error(getErrorMessage(error) || t("Request failed"));
		} finally {
			setIsExecuting(false);
		}
	}, [
		activePlatform,
		clientAuth,
		serverAuth,
		bodyFormFields,
		bodyFormValues,
		bodyInputMode,
		bodyJsonValue,
		config,
		pathFormValues,
		queryFormValues,
		selectedMethod,
		t
	]);
	const handleExecute = useCallback(() => {
		if (!selectedMethod) return;
		if (methodRequiresSendConfirmation(selectedMethod)) {
			setSendConfirmOpen(true);
			return;
		}
		runExecuteRequest();
	}, [runExecuteRequest, selectedMethod]);
	const handleConfirmSendRequest = useCallback(() => {
		setSendConfirmOpen(false);
		runExecuteRequest();
	}, [runExecuteRequest]);
	const sendRequestConfirmation = useMemo(() => selectedMethod ? getSendRequestConfirmationCopy(selectedMethod) : null, [selectedMethod]);
	const handleCopyCurl = useCallback(async () => {
		if (!selectedMethod) return;
		const pathParameters$1 = selectedMethod.parameters.filter((param) => param.in === "path");
		const queryParameters$1 = selectedMethod.parameters.filter((param) => param.in === "query");
		const pathParams = paramFormValuesToStrings(pathParameters$1, pathFormValues);
		const queryParams = paramFormValuesToStrings(queryParameters$1, queryFormValues);
		const multipart = isMultipartMethod(selectedMethod);
		let body = "";
		let formData;
		if (hasRequestBodyForMethod(selectedMethod)) if (multipart) {
			const missingField = getMissingRequiredFormField(bodyFormFields, bodyFormValues);
			if (missingField) {
				toast.error(`${t("Missing required field:")} ${missingField.label}`);
				return;
			}
			formData = buildMultipartFormData(bodyFormFields, bodyFormValues);
		} else if (bodyInputMode === "json") {
			const missingField = getMissingRequiredFieldInJsonBody(bodyFormFields, bodyJsonValue);
			if (missingField) {
				toast.error(`${t("Missing required field:")} ${missingField.label}`);
				return;
			}
			if (bodyJsonValue.trim()) try {
				body = stripEmptyCreatableIdFieldsFromJson(bodyFormFields, bodyJsonValue);
			} catch {
				toast.error(t("Invalid JSON in request body."));
				return;
			}
			else body = bodyJsonValue;
		} else {
			const missingField = getMissingRequiredFormField(bodyFormFields, bodyFormValues);
			if (missingField) {
				toast.error(`${t("Missing required field:")} ${missingField.label}`);
				return;
			}
			try {
				body = serializeBodyFromForm(bodyFormFields, bodyFormValues);
			} catch (error) {
				toast.error(getErrorMessage(error) || t("Invalid request body"));
				return;
			}
		}
		try {
			let requestAuth;
			let apiKey;
			if (methodUsesSessionAuthChoice(selectedMethod, activePlatform)) if (clientAuth.mode === "user") {
				if (!clientAuth.userId.trim()) {
					toast.error(t("Select a user to act as, or choose Guest."));
					return;
				}
				requestAuth = {
					mode: "user",
					jwt: await createUserJwtForExplorer(config.projectId, clientAuth.userId.trim())
				};
			} else requestAuth = { mode: "guest" };
			else if (methodSupportsServerApiKey(selectedMethod, activePlatform)) {
				apiKey = resolveServerAuthApiKey(serverAuth);
				if (methodRequiresApiKey(selectedMethod, activePlatform) && !apiKey) {
					toast.error(t("Provide an API key or generate an ephemeral key."));
					return;
				}
			}
			if (await copyToClipboard("cURL", buildCurlCommand({
				config: {
					...config,
					platform: activePlatform,
					apiKey
				},
				method: selectedMethod,
				pathParams,
				queryParams,
				body: formData ? void 0 : body,
				formData,
				requestAuth
			}), { showToast: false })) toast.success(t("cURL copied"));
		} catch (error) {
			toast.error(getErrorMessage(error) || t("Failed to copy cURL"));
		}
	}, [
		activePlatform,
		clientAuth,
		serverAuth,
		bodyFormFields,
		bodyFormValues,
		bodyInputMode,
		bodyJsonValue,
		config,
		pathFormValues,
		queryFormValues,
		selectedMethod,
		t
	]);
	const handlePlatformChange = useCallback((platform) => {
		setActivePlatform(platform);
	}, [setActivePlatform]);
	const previousPlatformRef = useRef(activePlatform);
	useEffect(() => {
		if (previousPlatformRef.current === activePlatform) return;
		previousPlatformRef.current = activePlatform;
		setResponse(null);
		setShowResponsePanel(false);
		setMobilePane("request");
	}, [activePlatform]);
	const pathParameters = selectedMethod?.parameters.filter((param) => param.in === "path");
	const queryParameters = selectedMethod?.parameters.filter((param) => param.in === "query");
	const hasRequestBody = selectedMethod ? hasRequestBodyForMethod(selectedMethod) : false;
	const hasJsonBodySchema = selectedMethod ? Boolean(getRequestBodyJsonSchema(selectedMethod)?.properties) : false;
	useApiExplorerShortcuts({
		onSendRequest: handleExecute,
		enabled: Boolean(selectedMethod && !isExecuting)
	});
	useEffect(() => {
		setSendConfirmOpen(false);
	}, [activePlatform, selectedMethod?.id]);
	if (specLoading && !parsedSpec) return /* @__PURE__ */ jsxs("div", {
		className: cn("flex h-full min-h-0 flex-1 items-center justify-center text-[13px] text-muted-foreground", className),
		children: [/* @__PURE__ */ jsx(Loader2, { className: "me-2 h-4 w-4 animate-spin" }), t("Loading API specification…")]
	});
	if (specError || !parsedSpec) return /* @__PURE__ */ jsx("div", {
		className: cn("flex h-full min-h-0 flex-1 items-center justify-center px-6 text-center text-[13px] text-muted-foreground", className),
		children: specError ?? t("API specification unavailable.")
	});
	const renderRequestPanel = () => /* @__PURE__ */ jsx(RequestPanel, {
		endpoint: config.endpoint,
		projectId: config.projectId,
		platform: activePlatform,
		method: selectedMethod,
		clientAuth,
		serverAuth,
		pathFormValues,
		queryFormValues,
		bodyFormFields,
		bodyFormValues,
		bodyJsonValue,
		bodyInputMode,
		pathParameters,
		queryParameters,
		hasRequestBody,
		hasJsonBodySchema,
		isExecuting,
		showResponsePanel,
		mobilePane,
		onMobilePaneChange: setMobilePane,
		response,
		onPathFormValuesChange: setPathFormValues,
		onQueryFormValuesChange: setQueryFormValues,
		onBodyFormValuesChange: setBodyFormValues,
		onBodyJsonValueChange: setBodyJsonValue,
		onBodyInputModeChange: setBodyInputMode,
		onClientAuthChange: setClientAuth,
		onServerAuthChange: setServerAuth,
		onExecute: handleExecute,
		onCopyCurl: handleCopyCurl,
		onResetRequestForm: handleResetRequestForm
	});
	return /* @__PURE__ */ jsxs("div", {
		"data-api-explorer": true,
		className: cn(API_EXPLORER_CONTAINER, "flex h-full min-h-0 flex-1 flex-col", className),
		children: [
			/* @__PURE__ */ jsx(ApiExplorerMobileNav, {
				className: API_EXPLORER_MOBILE_ONLY_CLASS,
				selectedService,
				selectedMethod,
				servicesContent: (close) => /* @__PURE__ */ jsx(ServiceListPanel, {
					platform: activePlatform,
					onPlatformChange: handlePlatformChange,
					productGroups: serviceProductGroups,
					selectedServiceId: selectedService?.id,
					onSelectService: (service) => {
						handleSelectService(service);
						close();
					},
					expandedProductGroupId: openProductGroupId,
					onExpandedProductGroupChange: setExpandedProductGroup,
					embedded: true
				}),
				methodsContent: (close) => /* @__PURE__ */ jsx(MethodListPanel, {
					service: selectedService,
					selectedMethodId: selectedMethod?.id,
					onSelectMethod: (method) => {
						handleSelectMethod(method);
						close();
					},
					embedded: true
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: cn("min-h-0 flex-1", API_EXPLORER_MOBILE_ONLY_CLASS),
				children: renderRequestPanel()
			}),
			/* @__PURE__ */ jsx("div", {
				className: cn("min-h-0 flex-1", API_EXPLORER_DESKTOP_ONLY_CLASS),
				children: /* @__PURE__ */ jsx(ExplorerColumnsResizableLayout, {
					layout: columnsLayout,
					persistLayout: persistColumnsLayout,
					handleClassName: HANDLE_CLASS,
					className: "h-full min-h-0 overflow-hidden",
					services: /* @__PURE__ */ jsx(ServiceListPanel, {
						platform: activePlatform,
						onPlatformChange: handlePlatformChange,
						productGroups: serviceProductGroups,
						selectedServiceId: selectedService?.id,
						onSelectService: handleSelectService,
						expandedProductGroupId: openProductGroupId,
						onExpandedProductGroupChange: setExpandedProductGroup
					}),
					methods: /* @__PURE__ */ jsx(MethodListPanel, {
						service: selectedService,
						selectedMethodId: selectedMethod?.id,
						onSelectMethod: handleSelectMethod
					}),
					request: renderRequestPanel()
				})
			}),
			sendRequestConfirmation ? /* @__PURE__ */ jsx(ConfirmActionDialog, {
				open: sendConfirmOpen,
				onOpenChange: setSendConfirmOpen,
				title: t(sendRequestConfirmation.title),
				description: sendRequestConfirmation.description,
				confirmLabel: t("Send request"),
				confirmVariant: sendRequestConfirmation.confirmVariant,
				onConfirm: handleConfirmSendRequest,
				isConfirming: isExecuting
			}) : null
		]
	});
}
function ServiceListPanel({ platform, onPlatformChange, productGroups, selectedServiceId, onSelectService, expandedProductGroupId, onExpandedProductGroupChange, embedded = false }) {
	const t = useT();
	const hasServices = productGroups.some((group) => group.services.length > 0);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex h-full min-h-0 min-w-0 flex-col overflow-hidden bg-background", !embedded && "border-e border-border"),
		children: [/* @__PURE__ */ jsx("div", {
			className: "min-h-0 flex-1 overflow-y-auto px-3 py-4",
			children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ jsx("div", {
					className: "px-1",
					children: /* @__PURE__ */ jsx(ApiExplorerPlatformToggle, {
						value: platform,
						onChange: onPlatformChange,
						className: "w-full [&>button]:flex-1"
					})
				}), /* @__PURE__ */ jsxs("nav", {
					"aria-label": t("API services"),
					children: [/* @__PURE__ */ jsx("p", {
						className: "mb-1.5 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("APIs")
					}), !hasServices ? /* @__PURE__ */ jsx("p", {
						className: "px-2 py-2 text-[13px] text-muted-foreground",
						children: t("No services available for this API.")
					}) : /* @__PURE__ */ jsx(Accordion, {
						type: "single",
						collapsible: true,
						value: expandedProductGroupId,
						onValueChange: (value) => onExpandedProductGroupChange(value || void 0),
						className: "w-full space-y-1 px-2",
						children: productGroups.map((group) => /* @__PURE__ */ jsxs(AccordionItem, {
							value: group.id,
							className: "border-b border-border/50 pb-1 last:border-b-0 last:pb-0",
							children: [/* @__PURE__ */ jsx(AccordionTrigger, {
								className: "gap-1.5 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70 hover:no-underline [&>svg]:size-3.5 [&>svg]:text-muted-foreground/70",
								children: /* @__PURE__ */ jsx("span", {
									className: "min-w-0 flex-1 truncate text-start",
									children: t(group.label)
								})
							}), /* @__PURE__ */ jsx(AccordionContent, {
								className: "pb-2 pt-0",
								children: /* @__PURE__ */ jsx("ul", {
									className: "space-y-0.5",
									children: group.services.map((service) => {
										return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
											type: "button",
											onClick: () => onSelectService(service),
											className: cn("w-full text-start", apiNavItemClassName(service.id === selectedServiceId)),
											children: /* @__PURE__ */ jsx("span", {
												className: "truncate",
												children: t(service.label)
											})
										}) }, service.id);
									})
								})
							})]
						}, group.id))
					})]
				})]
			})
		}), /* @__PURE__ */ jsx(ApiExplorerOpenApiSpecDownloadFooter, { platform })]
	});
}
function methodMatchesSearch(method, query) {
	const q = query.trim().toLowerCase();
	if (!q) return true;
	return method.summary.toLowerCase().includes(q) || method.path.toLowerCase().includes(q) || method.id.toLowerCase().includes(q) || method.httpMethod.toLowerCase().includes(q) || (method.resourceGroup?.toLowerCase().includes(q) ?? false);
}
function MethodListPanel({ service, selectedMethodId, onSelectMethod, embedded = false }) {
	const t = useT();
	const selectedMethodRef = useRef(null);
	const [searchValue, setSearchValue] = useState("");
	const [expandedGroupIds, setExpandedGroupIds] = useState([]);
	useEffect(() => {
		setSearchValue("");
	}, [service?.id]);
	const resourceGroups = useMemo(() => groupMethodsByResource(service?.methods ?? []), [service?.methods]);
	const filteredGroups = useMemo(() => {
		const query = searchValue.trim();
		if (!query) return resourceGroups;
		return resourceGroups.map((group) => ({
			...group,
			methods: group.methods.filter((method) => methodMatchesSearch(method, query))
		})).filter((group) => group.methods.length > 0);
	}, [resourceGroups, searchValue]);
	const collapsibleGroupIds = useMemo(() => filteredGroups.filter((group) => group.label).map((group) => group.id || "__ungrouped__"), [filteredGroups]);
	const collapsibleGroupIdsKey = collapsibleGroupIds.join("\0");
	useEffect(() => {
		setExpandedGroupIds(collapsibleGroupIds);
	}, [
		service?.id,
		searchValue,
		collapsibleGroupIdsKey
	]);
	useEffect(() => {
		selectedMethodRef.current?.scrollIntoView({
			block: "nearest",
			inline: "nearest"
		});
	}, [
		service?.id,
		selectedMethodId,
		filteredGroups
	]);
	const renderMethodList = (methods) => /* @__PURE__ */ jsx("ul", {
		className: "space-y-0.5",
		children: methods.map((method) => {
			const isActive = method.id === selectedMethodId;
			return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
				ref: isActive ? (node) => {
					selectedMethodRef.current = node;
				} : void 0,
				type: "button",
				onClick: () => onSelectMethod(method),
				className: apiNavMethodItemClassName(isActive),
				children: [/* @__PURE__ */ jsx("span", {
					className: "min-w-0 truncate text-[13px] font-medium",
					children: method.summary
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex w-full min-w-0 max-w-full items-center gap-2",
					children: [/* @__PURE__ */ jsx(Badge, {
						variant: getHttpMethodBadgeVariant(method.httpMethod),
						className: cn("text-[10px] uppercase", API_EXPLORER_PILL_CLASS),
						children: method.httpMethod
					}), /* @__PURE__ */ jsx(StartTruncatedText, {
						text: method.path,
						className: "min-w-0 flex-1 font-mono text-[11px] text-muted-foreground"
					})]
				})]
			}) }, method.id);
		})
	});
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex h-full min-h-0 min-w-0 flex-col overflow-hidden bg-muted/20", !embedded && "border-e border-border"),
		children: [
			!embedded ? /* @__PURE__ */ jsx("div", {
				className: cn(COLUMN_HEADER_CLASS, "min-w-0 items-center overflow-hidden"),
				children: service ? /* @__PURE__ */ jsx("p", {
					className: "truncate text-[13px] font-medium text-foreground",
					children: t(service.label)
				}) : /* @__PURE__ */ jsx("span", {
					className: "block h-[13px]",
					"aria-hidden": true
				})
			}) : null,
			/* @__PURE__ */ jsx("div", {
				className: "shrink-0 border-b border-border bg-muted/20 px-2 py-2",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" }),
						/* @__PURE__ */ jsx(Input, {
							value: searchValue,
							onChange: (event) => setSearchValue(event.target.value),
							placeholder: t("Search methods..."),
							className: "h-8 border-border/60 bg-background ps-8 pe-8 text-[13px]",
							"aria-label": t("Search methods"),
							disabled: !service
						}),
						searchValue ? /* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "ghost",
							size: "icon",
							className: "absolute end-0.5 top-1/2 h-7 w-7 -translate-y-1/2 text-muted-foreground",
							"aria-label": t("Clear method search"),
							onClick: () => setSearchValue(""),
							children: /* @__PURE__ */ jsx(X, { className: "size-3.5" })
						}) : null
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: EXPLORER_METHODS_LIST_SCROLL_CLASS,
				children: /* @__PURE__ */ jsx("div", {
					className: "box-border w-full max-w-full min-w-0 space-y-3 p-2",
					children: !service || service.methods.length === 0 ? /* @__PURE__ */ jsx("p", {
						className: "px-2 py-4 text-[13px] text-muted-foreground",
						children: t("No methods available.")
					}) : filteredGroups.length === 0 ? /* @__PURE__ */ jsx("p", {
						className: "px-2 py-4 text-[13px] text-muted-foreground",
						children: t("No methods match your search.")
					}) : /* @__PURE__ */ jsxs(Fragment, { children: [filteredGroups.filter((group) => !group.label).map((group) => /* @__PURE__ */ jsx("div", { children: renderMethodList(group.methods) }, group.id || "default")), filteredGroups.some((group) => group.label) ? /* @__PURE__ */ jsx(Accordion, {
						type: "multiple",
						value: expandedGroupIds,
						onValueChange: setExpandedGroupIds,
						className: "w-full space-y-1",
						children: filteredGroups.filter((group) => group.label).map((group) => {
							const groupKey = group.id || "__ungrouped__";
							return /* @__PURE__ */ jsxs(AccordionItem, {
								value: groupKey,
								className: "border-b border-border/50 pb-1 last:border-b-0 last:pb-0",
								children: [/* @__PURE__ */ jsxs(AccordionTrigger, {
									className: "gap-1.5 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70 hover:no-underline [&>svg]:size-3.5 [&>svg]:text-muted-foreground/70",
									children: [/* @__PURE__ */ jsx("span", {
										className: "min-w-0 flex-1 truncate text-start",
										children: group.label
									}), /* @__PURE__ */ jsx("span", {
										className: "shrink-0 text-[10px] font-medium normal-case tracking-normal text-muted-foreground/60",
										children: group.methods.length
									})]
								}), /* @__PURE__ */ jsx(AccordionContent, {
									className: "pb-2 pt-0",
									children: renderMethodList(group.methods)
								})]
							}, groupKey);
						})
					}) : null] })
				})
			})
		]
	});
}
var ENDPOINT_URL_DISPLAY_MAX = 64;
function getDeprecatedWarningCopy(method) {
	const meta = method.xAppwrite?.deprecated;
	const descriptionParts = [];
	if (meta?.since) descriptionParts.push(`Deprecated since ${meta.since}.`);
	if (meta?.replaceWith) descriptionParts.push(`Use ${meta.replaceWith} instead.`);
	if (descriptionParts.length === 0) descriptionParts.push("This endpoint is deprecated and may be removed in a future version.");
	return {
		title: "Deprecated endpoint",
		description: descriptionParts.join(" ")
	};
}
function MethodDeprecatedWarning({ method }) {
	const t = useT();
	if (!method.deprecated) return null;
	const { title, description } = getDeprecatedWarningCopy(method);
	return /* @__PURE__ */ jsx("div", {
		className: "shrink-0 border-b border-border bg-amber-500/5 px-4 py-3",
		children: /* @__PURE__ */ jsxs(Alert, {
			variant: "default",
			className: "border-amber-500/30 bg-transparent",
			children: [
				/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-amber-500" }),
				/* @__PURE__ */ jsx(AlertTitle, {
					className: "text-[13px] font-medium text-amber-600 dark:text-amber-400",
					children: t(title)
				}),
				/* @__PURE__ */ jsx(AlertDescription, {
					className: "text-[12px] text-amber-600/80 dark:text-amber-400/80",
					children: t(description)
				})
			]
		})
	});
}
function MethodRequestHeader({ method, endpoint, platform, projectId, serviceId, mobilePane, onMobilePaneChange }) {
	const t = useT();
	const showMobilePaneTabs = Boolean(mobilePane && onMobilePaneChange);
	return /* @__PURE__ */ jsxs("div", {
		className: cn(COLUMN_HEADER_CLASS, "items-center gap-2.5"),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "hidden min-w-0 flex-1 items-center gap-2.5 @[900px]/api-explorer:flex",
				children: [/* @__PURE__ */ jsx(Badge, {
					variant: getHttpMethodBadgeVariant(method.httpMethod),
					className: cn("text-[10px] uppercase", API_EXPLORER_PILL_CLASS),
					children: method.httpMethod
				}), /* @__PURE__ */ jsx("p", {
					className: "min-w-0 flex-1 truncate text-[13px] font-medium text-foreground",
					children: method.summary
				})]
			}),
			showMobilePaneTabs ? /* @__PURE__ */ jsx("div", {
				className: cn("flex h-full min-w-0 flex-1 items-stretch gap-0", API_EXPLORER_MOBILE_ONLY_CLASS),
				role: "tablist",
				"aria-label": t("Request and response"),
				children: [{
					id: "request",
					label: "Request"
				}, {
					id: "response",
					label: "Response"
				}].map((pane) => {
					const isActive = mobilePane === pane.id;
					return /* @__PURE__ */ jsxs("button", {
						type: "button",
						role: "tab",
						"aria-selected": isActive,
						onClick: () => onMobilePaneChange?.(pane.id),
						className: cn("relative flex h-full items-center px-3 text-[13px] font-medium transition-colors first:ps-0", "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset", isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
						children: [t(pane.label), isActive ? /* @__PURE__ */ jsx("span", { className: "absolute inset-x-0 bottom-0 h-[2px] bg-foreground" }) : null]
					}, pane.id);
				})
			}) : /* @__PURE__ */ jsx("div", { className: cn("min-w-0 flex-1", API_EXPLORER_MOBILE_ONLY_CLASS) }),
			/* @__PURE__ */ jsx(ExplorerMethodActions, {
				method,
				endpoint,
				platform,
				projectId,
				serviceId
			})
		]
	});
}
function MethodRequestFooter({ isExecuting, onExecute, onCopyCurl, onResetRequestForm }) {
	const t = useT();
	const { isMac } = usePlatform();
	const sendShortcut = formatDisplayKeys(API_EXPLORER_SEND_REQUEST_SHORTCUT_RAW, isMac).join("");
	const canSend = !isExecuting;
	const sendTooltip = canSend ? `${t("Send request")} (${sendShortcut})` : t("Request is running.");
	return /* @__PURE__ */ jsx("div", {
		className: COLUMN_REQUEST_FOOTER_CLASS,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex w-full flex-wrap items-center justify-between gap-2",
			children: [/* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				className: "h-9 text-[13px]",
				disabled: isExecuting,
				onClick: onResetRequestForm,
				children: t("Reset")
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-center justify-end gap-2",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: isExecuting,
					onClick: onCopyCurl,
					children: t("Copy as cURL")
				}), /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsx("span", {
						className: "inline-flex",
						children: /* @__PURE__ */ jsx(Button, {
							variant: "brandCta",
							size: "sm",
							className: "h-9 min-w-[120px] text-[13px] font-medium",
							disabled: !canSend,
							onClick: onExecute,
							children: t("Send request")
						})
					})
				}), /* @__PURE__ */ jsx(TooltipContent, {
					side: "top",
					sideOffset: 6,
					className: "text-[12px]",
					children: sendTooltip
				})] })]
			})]
		})
	});
}
function MethodDetailsCard({ endpoint, method }) {
	const t = useT();
	const [copied, setCopied] = useState(false);
	const fullUrl = `${endpoint.replace(/\/$/, "")}${method.path}`;
	const methodAccent = getHttpMethodAccentClasses(method.httpMethod);
	const rateLimit = method.xAppwrite?.["rate-limit"];
	const hasMetadata = rateLimit !== void 0 && rateLimit > 0;
	const handleCopyEndpoint = async () => {
		try {
			await navigator.clipboard.writeText(fullUrl);
			setCopied(true);
			toast.success(t("Endpoint copied"));
			setTimeout(() => setCopied(false), 2e3);
		} catch {
			toast.error(t("Failed to copy endpoint"));
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "space-y-4 px-4 py-4 sm:px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Endpoint")
					}), /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: handleCopyEndpoint,
						className: "inline-flex shrink-0 items-center gap-1.5 text-[12px] text-muted-foreground transition-colors hover:text-foreground",
						children: [copied ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" }), t("Copy")]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: cn("overflow-hidden rounded-lg px-3 py-2.5", methodAccent.endpointBox),
					children: /* @__PURE__ */ jsxs("p", {
						className: "flex min-w-0 items-start gap-2.5 font-mono text-[12px] leading-relaxed text-foreground sm:items-center",
						children: [/* @__PURE__ */ jsx(Badge, {
							variant: getHttpMethodBadgeVariant(method.httpMethod),
							className: cn("mt-0.5 shrink-0 font-mono text-[10px] uppercase sm:mt-0", API_EXPLORER_PILL_CLASS),
							children: method.httpMethod
						}), /* @__PURE__ */ jsxs("span", {
							className: "min-w-0 flex-1 break-all sm:truncate sm:break-normal",
							title: fullUrl,
							children: [/* @__PURE__ */ jsx("span", {
								className: "sm:hidden",
								children: fullUrl
							}), /* @__PURE__ */ jsx("span", {
								className: "hidden sm:inline",
								children: truncateMiddle(fullUrl, ENDPOINT_URL_DISPLAY_MAX)
							})]
						})]
					})
				})]
			}), method.description && /* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: t("Description")
				}), /* @__PURE__ */ jsx(MethodDescriptionMarkdown, { content: method.description })]
			})]
		}), hasMetadata && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", { className: "border-t border-border" }), /* @__PURE__ */ jsx("div", {
			className: "grid gap-4 px-4 py-4 sm:grid-cols-2 sm:px-6",
			children: rateLimit !== void 0 && rateLimit > 0 && /* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: t("Rate limit")
				}), /* @__PURE__ */ jsx(RateLimitDescription, {
					limit: rateLimit,
					windowSeconds: method.xAppwrite?.["rate-time"] ?? 3600,
					rateKey: method.xAppwrite?.["rate-key"]
				})]
			})
		})] })]
	});
}
function RequestPanel({ endpoint, projectId, platform, method, clientAuth, serverAuth, pathFormValues, queryFormValues, bodyFormFields, bodyFormValues, bodyJsonValue, bodyInputMode, pathParameters, queryParameters, hasRequestBody, hasJsonBodySchema, isExecuting, showResponsePanel, mobilePane, onMobilePaneChange, response, onPathFormValuesChange, onQueryFormValuesChange, onBodyFormValuesChange, onBodyJsonValueChange, onBodyInputModeChange, onClientAuthChange, onServerAuthChange, onExecute, onCopyCurl, onResetRequestForm }) {
	const t = useT();
	const { account } = useAuth();
	const { layout: responseSplitLayout, persistLayout: persistResponseSplitLayout } = useApiExplorerResponseSplitLayout(account);
	if (!method) return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [/* @__PURE__ */ jsx("div", {
			className: cn(COLUMN_HEADER_CLASS, API_EXPLORER_DESKTOP_ONLY_CLASS),
			"aria-hidden": true
		}), /* @__PURE__ */ jsx("div", {
			className: "flex flex-1 items-center justify-center px-4 text-center text-[13px] text-muted-foreground",
			children: t("Select a method to inspect and send a request.")
		})]
	});
	const renderRequestPanelContent = () => /* @__PURE__ */ jsx(RequestPanelContent, {
		endpoint,
		projectId,
		platform,
		method,
		clientAuth,
		serverAuth,
		pathFormValues,
		queryFormValues,
		bodyFormFields,
		bodyFormValues,
		bodyJsonValue,
		bodyInputMode,
		pathParameters,
		queryParameters,
		hasRequestBody,
		hasJsonBodySchema,
		onPathFormValuesChange,
		onQueryFormValuesChange,
		onBodyFormValuesChange,
		onBodyJsonValueChange,
		onBodyInputModeChange,
		onClientAuthChange,
		onServerAuthChange
	});
	const renderResponseContent = (options) => response ? /* @__PURE__ */ jsx(ResponseSection, {
		response,
		isRefreshing: isExecuting,
		hideTitle: options?.hideTitle
	}) : /* @__PURE__ */ jsx("div", {
		className: "flex h-full min-h-0 items-center justify-center px-4 text-center text-[13px] text-muted-foreground/70",
		children: t("Send a request to see the response here.")
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [
			/* @__PURE__ */ jsx(MethodRequestHeader, {
				method,
				endpoint,
				platform,
				projectId,
				serviceId: method.service,
				mobilePane: showResponsePanel ? mobilePane : void 0,
				onMobilePaneChange: showResponsePanel ? onMobilePaneChange : void 0
			}),
			/* @__PURE__ */ jsx(MethodDeprecatedWarning, { method }),
			/* @__PURE__ */ jsx("div", {
				className: "min-h-0 flex-1 overflow-hidden",
				children: showResponsePanel ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
					className: cn("h-full min-h-0", API_EXPLORER_MOBILE_ONLY_CLASS),
					children: mobilePane === "request" ? /* @__PURE__ */ jsx(ScrollArea, {
						className: "h-full min-h-0",
						children: renderRequestPanelContent()
					}) : renderResponseContent({ hideTitle: true })
				}), /* @__PURE__ */ jsx("div", {
					className: cn("h-full min-h-0", API_EXPLORER_DESKTOP_ONLY_CLASS),
					children: /* @__PURE__ */ jsx(ExplorerResponseSplitResizableLayout, {
						layout: responseSplitLayout,
						persistLayout: persistResponseSplitLayout,
						handleClassName: VERTICAL_HANDLE_CLASS,
						className: "h-full min-h-0 overflow-hidden",
						request: /* @__PURE__ */ jsx(ScrollArea, {
							className: "h-full min-h-0",
							children: renderRequestPanelContent()
						}),
						response: renderResponseContent()
					})
				})] }) : /* @__PURE__ */ jsx(ScrollArea, {
					className: "h-full min-h-0",
					children: renderRequestPanelContent()
				})
			}),
			/* @__PURE__ */ jsx(MethodRequestFooter, {
				isExecuting,
				onExecute,
				onCopyCurl,
				onResetRequestForm
			})
		]
	});
}
function RequestPanelContent({ endpoint, projectId, platform, method, clientAuth, serverAuth, pathFormValues, queryFormValues, bodyFormFields, bodyFormValues, bodyJsonValue, bodyInputMode, pathParameters, queryParameters, hasRequestBody, hasJsonBodySchema, onPathFormValuesChange, onQueryFormValuesChange, onBodyFormValuesChange, onBodyJsonValueChange, onBodyInputModeChange, onClientAuthChange, onServerAuthChange }) {
	const t = useT();
	const pathFields = useMemo(() => (pathParameters ?? []).map((param) => parameterToFormField(param, method)), [pathParameters, method]);
	const queryFields = useMemo(() => (queryParameters ?? []).map((param) => parameterToFormField(param, method)), [queryParameters, method]);
	const allFormValues = useMemo(() => ({
		...pathFormValues,
		...queryFormValues,
		...bodyFormValues
	}), [
		pathFormValues,
		queryFormValues,
		bodyFormValues
	]);
	const hasPathParams = pathFields.length > 0;
	const hasQueryParams = queryFields.length > 0;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6 p-4 sm:p-6 @container/request-panel",
		children: [
			/* @__PURE__ */ jsx(MethodDetailsCard, {
				endpoint,
				method
			}),
			/* @__PURE__ */ jsx(ApiExplorerAuthSection, {
				projectId,
				platform,
				method,
				clientAuth,
				serverAuth,
				onClientAuthChange,
				onServerAuthChange
			}),
			(hasPathParams || hasQueryParams || hasRequestBody) && /* @__PURE__ */ jsxs(RequestBuilderPanel, { children: [
				hasPathParams && /* @__PURE__ */ jsx(RequestBuilderSection, {
					title: t("Path"),
					children: /* @__PURE__ */ jsx(RequestFormFields, {
						fields: pathFields,
						values: pathFormValues,
						onChange: (name, value) => onPathFormValuesChange({
							...pathFormValues,
							[name]: value
						}),
						idPrefix: "path",
						projectId,
						formValues: allFormValues,
						method
					})
				}),
				hasQueryParams && /* @__PURE__ */ jsx(RequestBuilderSection, {
					title: t("Query parameters"),
					showTopBorder: hasPathParams,
					children: /* @__PURE__ */ jsx(RequestFormFields, {
						fields: queryFields,
						values: queryFormValues,
						onChange: (name, value) => onQueryFormValuesChange({
							...queryFormValues,
							[name]: value
						}),
						idPrefix: "query",
						projectId,
						formValues: allFormValues,
						method
					})
				}),
				hasRequestBody && /* @__PURE__ */ jsx(RequestBodySection, {
					title: hasPathParams || hasQueryParams ? t("Body") : t("Parameters"),
					fields: bodyFormFields,
					formValues: bodyFormValues,
					jsonValue: bodyJsonValue,
					inputMode: bodyInputMode,
					onFormValuesChange: onBodyFormValuesChange,
					onJsonValueChange: onBodyJsonValueChange,
					onInputModeChange: onBodyInputModeChange,
					showJsonToggle: hasJsonBodySchema,
					embedded: true,
					showTopBorder: hasPathParams || hasQueryParams,
					projectId,
					allFormValues,
					method
				})
			] })
		]
	});
}
function formatResponseDisplay(body) {
	const trimmed = body?.trim();
	if (!trimmed) return {
		code: "(empty response)",
		language: "plaintext"
	};
	try {
		return {
			code: JSON.stringify(JSON.parse(trimmed), null, 2),
			language: "json"
		};
	} catch {
		return {
			code: body,
			language: "plaintext"
		};
	}
}
function ResponseHeadersPanel({ headers }) {
	const t = useT();
	const entries = useMemo(() => Object.entries(headers).sort(([a], [b]) => a.localeCompare(b, void 0, { sensitivity: "base" })), [headers]);
	const copyText = useMemo(() => entries.map(([name, value]) => `${name}: ${value}`).join("\n"), [entries]);
	const handleCopy = useCallback(async () => {
		await navigator.clipboard.writeText(copyText);
		toast.success(t("Copied headers"));
	}, [copyText, t]);
	if (entries.length === 0) return /* @__PURE__ */ jsx("div", {
		className: "flex h-full items-center justify-center p-4 text-[13px] text-muted-foreground",
		children: t("No response headers")
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-h-0 flex-col overflow-hidden bg-background",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex shrink-0 items-center justify-end border-b border-border px-3 py-1.5",
			children: /* @__PURE__ */ jsxs(Button, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: "h-7 gap-1.5 px-2 text-[12px]",
				onClick: handleCopy,
				children: [/* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" }), t("Copy")]
			})
		}), /* @__PURE__ */ jsx(ScrollArea, {
			className: "min-h-0 flex-1",
			children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
				className: "hover:bg-transparent border-b border-border",
				children: [/* @__PURE__ */ jsx(TableHead, {
					className: "w-[200px] px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: t("Key")
				}), /* @__PURE__ */ jsx(TableHead, {
					className: "px-4 py-3 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: t("Value")
				})]
			}) }), /* @__PURE__ */ jsx(TableBody, { children: entries.map(([name, value]) => /* @__PURE__ */ jsxs(TableRow, { children: [/* @__PURE__ */ jsx(TableCell, {
				className: "px-4 py-3 align-top font-mono text-[13px] break-all whitespace-normal",
				children: name
			}), /* @__PURE__ */ jsx(TableCell, {
				className: "min-w-0 px-4 py-3 align-top font-mono text-[13px] break-all whitespace-normal",
				children: value
			})] }, name)) })] })
		})]
	});
}
function ResponseSizeFooter({ byteSize }) {
	return /* @__PURE__ */ jsx("div", {
		className: "shrink-0 border-t-2 border-border bg-muted/30 px-3 py-2 text-[12px] text-muted-foreground",
		children: formatBytes(byteSize)
	});
}
function ResponseSection({ response, isRefreshing = false, hideTitle = false }) {
	const t = useT();
	const imagePreviewUrl = response.imagePreviewUrl;
	const bodyTabLabel = imagePreviewUrl ? t("Preview") : t("Body");
	const { code, language } = useMemo(() => formatResponseDisplay(response.body), [response.body]);
	const statusVariant = getHttpStatusCodeBadgeVariant(response.status);
	return /* @__PURE__ */ jsxs(Tabs, {
		defaultValue: "body",
		className: "flex h-full min-h-0 flex-col gap-0",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex min-h-10 shrink-0 items-center justify-between gap-2 border-b border-border bg-muted/30 px-3 py-1.5",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 flex-1 flex-wrap items-center gap-1.5 overflow-hidden",
					children: [
						hideTitle ? null : /* @__PURE__ */ jsx("span", {
							className: "shrink-0 text-[12px] font-semibold text-foreground",
							children: t("Response")
						}),
						/* @__PURE__ */ jsxs(Badge, {
							variant: statusVariant,
							className: cn(FORM_FIELD_TYPE_PILL_CLASS, "min-w-0 max-w-full shrink truncate"),
							title: `${response.status} ${response.statusText}`.trim(),
							children: [
								response.status,
								" ",
								response.statusText
							]
						}),
						/* @__PURE__ */ jsxs(Badge, {
							variant: "inactive",
							className: cn(FORM_FIELD_TYPE_PILL_CLASS, "shrink-0"),
							children: [response.durationMs, " ms"]
						}),
						response.responseContentType ? /* @__PURE__ */ jsx(Badge, {
							variant: "inactive",
							className: cn(FORM_FIELD_TYPE_PILL_CLASS, "min-w-0 max-w-[min(100%,14rem)] shrink truncate"),
							title: response.responseContentType,
							children: response.responseContentType
						}) : null,
						isRefreshing ? /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 shrink-0 animate-spin text-muted-foreground" }) : null
					]
				}), /* @__PURE__ */ jsxs(TabsList, {
					className: "h-7 shrink-0",
					children: [/* @__PURE__ */ jsx(TabsTrigger, {
						value: "body",
						className: "h-6 px-2.5 text-[11px]",
						children: bodyTabLabel
					}), /* @__PURE__ */ jsx(TabsTrigger, {
						value: "headers",
						className: "h-6 px-2.5 text-[11px]",
						children: t("Headers")
					})]
				})]
			}),
			/* @__PURE__ */ jsx(TabsContent, {
				value: "body",
				className: "mt-0 flex min-h-0 flex-1 flex-col overflow-hidden",
				children: imagePreviewUrl ? /* @__PURE__ */ jsxs("div", {
					className: "flex min-h-0 flex-1 flex-col overflow-hidden border-b-2 border-border",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex min-h-0 flex-1 items-center justify-center overflow-auto bg-muted/20 p-4",
						children: /* @__PURE__ */ jsx("img", {
							src: imagePreviewUrl,
							alt: t("Response preview"),
							className: "max-h-full max-w-full rounded-lg border border-border object-contain"
						})
					}), /* @__PURE__ */ jsx(ResponseSizeFooter, { byteSize: response.responseByteSize })]
				}) : /* @__PURE__ */ jsxs("div", {
					className: "flex min-h-0 flex-1 flex-col overflow-hidden border-b-2 border-border",
					children: [/* @__PURE__ */ jsx("div", {
						className: "min-h-0 flex-1 overflow-hidden",
						children: /* @__PURE__ */ jsx(CodeBlock, {
							code,
							language,
							variant: "headless",
							copyInside: true,
							showCopy: true,
							showFullscreen: true,
							wrapLines: true,
							fixedHeight: "100%",
							className: "flex h-full min-h-0 flex-col"
						})
					}), /* @__PURE__ */ jsx(ResponseSizeFooter, { byteSize: response.responseByteSize })]
				})
			}),
			/* @__PURE__ */ jsx(TabsContent, {
				value: "headers",
				className: "mt-0 flex min-h-0 flex-1 flex-col overflow-hidden",
				children: /* @__PURE__ */ jsx(ResponseHeadersPanel, { headers: response.headers })
			})
		]
	}, `${response.status}:${response.durationMs}:${response.responseByteSize}`);
}
export { REQUEST_BUILDER_VALUE_INNER_COMPLEX as a, AuthRequirementDescription as c, RequestBuilderSection as i, RateLimitDescription as l, ApiExplorerPlatformToggle as n, ApiMethodHeaderActions as o, RequestBuilderPanel as r, buildApiReferenceMethodMarkdown as s, ApiExplorer as t, StartTruncatedText as u };
