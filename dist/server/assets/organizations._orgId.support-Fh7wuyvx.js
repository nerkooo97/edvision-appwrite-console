import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as APPWRITE_SUPPORT_EMAIL } from "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import { Mt as useOrganizationPlan, Nt as useOrganizationProjects } from "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import "./hooks-BONwG3Mt.js";
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
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import "./context-menu-D55xedo-.js";
import { n as useSmartNavigation, t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-BTaNwkUC.js";
import "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { n as getSupportHoursInLocalTime, r as submitSupportTicket, t as getSupportAnalyticsEvent } from "./support-BA-5OzxM.js";
import { t as CONTACT_ENTERPRISE_URL } from "./constants-BHoPnAWz.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Activity, AlertTriangle, BookOpen, CheckCircle2, ExternalLink, Upload, X } from "lucide-react";
var SUBJECT_MAX = 128;
var SUBJECT_PLACEHOLDER = "Brief summary of your issue";
var MESSAGE_PLACEHOLDER = "Describe your issue or question in detail. Include any relevant context (e.g. project, SDK version, error messages) so we can help faster.";
var CONTACT_SALES_URL = CONTACT_ENTERPRISE_URL;
var SUPPORT_DISCORD_URL = "/discord";
var SUPPORT_GITHUB_ISSUES_URL = "https://github.com/appwrite/appwrite/issues/new/choose";
var MESSAGE_MAX = 4096;
var ATTACHMENT_MAX_MB = 5;
var ATTACHMENT_MAX_BYTES = ATTACHMENT_MAX_MB * 1024 * 1024;
var NO_PROJECT_VALUE = "__none__";
function formatFileSize(bytes) {
	if (bytes === 0) return "0 Bytes";
	const k = 1e3;
	const sizes = [
		"Bytes",
		"KB",
		"MB",
		"GB"
	];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
function SupportWizardFullscreen() {
	const t = useT();
	const orgId = useParams({ strict: false }).orgId;
	const handleCancel = useSmartNavigation();
	const { account } = useAuth();
	const { plan } = useOrganizationPlan(orgId);
	const { projects } = useOrganizationProjects(orgId);
	const [supportHours, setSupportHours] = useState(() => getSupportHoursInLocalTime());
	const [projectId, setProjectId] = useState(NO_PROJECT_VALUE);
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [attachment, setAttachment] = useState(null);
	const [isDraggingAttachment, setIsDraggingAttachment] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [submitError, setSubmitError] = useState(null);
	const attachmentInputRef = useRef(null);
	const submitErrorRef = useRef(null);
	useEffect(() => {
		const interval = setInterval(() => {
			setSupportHours(getSupportHoursInLocalTime());
		}, 6e4);
		return () => clearInterval(interval);
	}, []);
	useEffect(() => {
		if (!submitError) return;
		submitErrorRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}, [submitError]);
	const projectList = projects ?? [];
	const email = account?.email ?? "";
	const firstName = account?.name ?? "Unknown";
	const billingPlanId = plan?.$id ?? "";
	const canSubmit = !!orgId && !!email && subject.trim().length > 0 && subject.length <= SUBJECT_MAX && message.trim().length > 0 && message.length <= MESSAGE_MAX && !isSubmitting;
	const handleAttachmentSelect = (file) => {
		if (file.size > ATTACHMENT_MAX_BYTES) {
			toast.error(`${t("File must be")} ${ATTACHMENT_MAX_MB} ${t("MB or less")}`);
			return;
		}
		setSubmitError((e) => e?.kind === "attachment" ? null : e);
		setAttachment(file);
	};
	const handleAttachmentInputChange = (e) => {
		const file = e.target.files?.[0];
		if (file) handleAttachmentSelect(file);
	};
	const handleAttachmentDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDraggingAttachment(true);
	};
	const handleAttachmentDragLeave = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDraggingAttachment(false);
	};
	const handleAttachmentDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDraggingAttachment(false);
		const file = e.dataTransfer.files?.[0];
		if (file) handleAttachmentSelect(file);
	};
	const handleSubmit = async () => {
		if (!canSubmit || !orgId) return;
		setSubmitError(null);
		setIsSubmitting(true);
		try {
			await submitSupportTicket({
				email,
				firstName,
				subject: subject.trim(),
				message: message.trim(),
				organizationId: orgId,
				projectId: projectId && projectId !== NO_PROJECT_VALUE ? projectId : void 0,
				billingPlanId: billingPlanId || void 0,
				attachment: attachment ?? void 0
			});
			const eventName = getSupportAnalyticsEvent();
			if (typeof window !== "undefined" && window.track) window.track(eventName, {});
			setSubmitted(true);
		} catch (err) {
			const eventName = getSupportAnalyticsEvent();
			if (typeof window !== "undefined" && window.track) window.track(eventName, { error: String(err) });
			const errMessage = err instanceof Error ? err.message : String(err);
			if (errMessage.includes("Attachment must be")) setSubmitError({
				kind: "attachment",
				message: errMessage
			});
			else setSubmitError({ kind: "portal" });
		} finally {
			setIsSubmitting(false);
		}
	};
	const sidebar = /* @__PURE__ */ jsxs("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card overflow-hidden",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-[15px] font-semibold text-foreground tracking-tight",
									children: t("Support hours")
								}), /* @__PURE__ */ jsxs("span", {
									className: `shrink-0 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${supportHours.isOpen ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-amber-500/10 text-amber-600 dark:text-amber-400"}`,
									children: [/* @__PURE__ */ jsx("span", { className: `h-1 w-1 rounded-full ${supportHours.isOpen ? "bg-emerald-500" : "bg-amber-500"}` }), supportHours.isOpen ? t("Online") : t("Offline")]
								})]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-[13px] text-muted-foreground tabular-nums whitespace-nowrap mt-2",
								children: [
									t("Mon–Fri"),
									" ",
									supportHours.startLocal,
									" – ",
									supportHours.endLocal
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[12px] text-muted-foreground/70 mt-1 font-mono tracking-tight",
								children: supportHours.timezone
							})
						]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border/80" }),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-3 bg-muted/30",
						children: /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground/90 leading-relaxed",
							children: t("Tickets can be submitted anytime; we reply during support hours.")
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "rounded-xl border border-border bg-card overflow-hidden",
				children: /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground tracking-tight",
							children: t("Need 24/7 or enterprise support?")
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground mt-2 leading-relaxed",
							children: t("Get dedicated support and SLAs for your organization.")
						}),
						/* @__PURE__ */ jsx(Button, {
							variant: "outline",
							size: "sm",
							className: "mt-4 w-full",
							asChild: true,
							children: /* @__PURE__ */ jsx("a", {
								href: CONTACT_SALES_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								children: t("Contact sales")
							})
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "rounded-xl border border-border bg-card overflow-hidden",
				children: /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground tracking-tight",
						children: t("What happens next")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mt-2 leading-relaxed",
						children: t("Confirmation email with ticket ID. Typically within 24h during support hours.")
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card overflow-hidden",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground tracking-tight",
							children: t("Resources")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground mt-2 leading-relaxed",
							children: t("Docs, status, and community")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border/80" }),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-2 gap-2",
							children: [
								/* @__PURE__ */ jsxs("a", {
									href: "https://status.appwrite.online",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center gap-1.5 rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-[12px] font-medium text-foreground hover:bg-muted/50 hover:border-border transition-colors",
									children: [
										/* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
										/* @__PURE__ */ jsx("span", { children: t("Status") }),
										/* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 ms-auto shrink-0 text-muted-foreground" })
									]
								}),
								/* @__PURE__ */ jsxs(DocsRouteLink, {
									className: "flex items-center gap-1.5 rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-[12px] font-medium text-foreground hover:bg-muted/50 hover:border-border transition-colors",
									href: "/docs",
									children: [
										/* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
										/* @__PURE__ */ jsx("span", { children: t("Docs") }),
										/* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 ms-auto shrink-0 text-muted-foreground" })
									]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: SUPPORT_DISCORD_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center gap-1.5 rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-[12px] font-medium text-foreground hover:bg-muted/50 hover:border-border transition-colors",
									children: [
										/* @__PURE__ */ jsx("svg", {
											className: "h-4 w-4 shrink-0 text-muted-foreground",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											"aria-hidden": true,
											children: /* @__PURE__ */ jsx("path", { d: "M19.27 5.33C17.94 4.71 16.5 4.26 15 4C14.82 4.33 14.61 4.77 14.46 5.11C12.88 4.87 11.31 4.87 9.76 5.11C9.61 4.77 9.39 4.33 9.21 4C7.71 4.26 6.26 4.71 4.94 5.34C2.24 9.42 1.52 13.39 1.88 17.31C3.65 18.61 5.37 19.43 7.06 19.97C7.49 19.39 7.88 18.77 8.21 18.11C7.59 17.88 6.99 17.59 6.43 17.25C6.58 17.14 6.73 17.02 6.87 16.9C10.19 18.43 13.84 18.43 17.12 16.9C17.27 17.02 17.41 17.14 17.56 17.25C17 17.59 16.4 17.88 15.78 18.11C16.11 18.77 16.5 19.39 16.93 19.97C18.62 19.43 20.34 18.61 22.11 17.31C22.54 12.75 21.34 8.81 19.27 5.33ZM8.52 14.88C7.49 14.88 6.63 13.91 6.63 12.72C6.63 11.53 7.47 10.56 8.52 10.56C9.57 10.56 10.43 11.53 10.41 12.72C10.41 13.91 9.56 14.88 8.52 14.88ZM15.49 14.88C14.46 14.88 13.6 13.91 13.6 12.72C13.6 11.53 14.44 10.56 15.49 10.56C16.54 10.56 17.4 11.53 17.38 12.72C17.38 13.91 16.54 14.88 15.49 14.88Z" })
										}),
										/* @__PURE__ */ jsx("span", { children: "Discord" }),
										/* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 ms-auto shrink-0 text-muted-foreground" })
									]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: SUPPORT_GITHUB_ISSUES_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center gap-1.5 rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-[12px] font-medium text-foreground hover:bg-muted/50 hover:border-border transition-colors",
									children: [
										/* @__PURE__ */ jsx("svg", {
											className: "h-4 w-4 shrink-0 text-muted-foreground",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
										}),
										/* @__PURE__ */ jsx("span", { children: "GitHub" }),
										/* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 ms-auto shrink-0 text-muted-foreground" })
									]
								})
							]
						})
					})
				]
			})
		]
	});
	if (submitted) return /* @__PURE__ */ jsx(WizardLayout, {
		title: t("Ticket submitted"),
		fullscreen: true,
		useSidebar: false,
		footerAlign: "right",
		footer: /* @__PURE__ */ jsx(Button, {
			onClick: handleCancel,
			children: t("Done")
		}),
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-[70dvh] flex-col items-center justify-center py-12 px-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "w-full max-w-xl flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-500/10",
						children: /* @__PURE__ */ jsx(CheckCircle2, {
							className: "h-8 w-8 text-emerald-600 dark:text-emerald-400",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-[18px] font-semibold text-foreground tracking-tight",
						children: t("Your support ticket has been submitted")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-md text-[13px] text-muted-foreground leading-relaxed",
						children: t("We've received your request and will get back to you as soon as we can.")
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-10 w-full max-w-xl",
				children: /* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card overflow-hidden",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-5",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground tracking-tight",
							children: t("What happens next")
						}), /* @__PURE__ */ jsxs("ul", {
							className: "mt-4 space-y-3 text-[13px] text-muted-foreground leading-relaxed",
							children: [
								/* @__PURE__ */ jsxs("li", {
									className: "flex gap-3 text-start",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground/60 shrink-0",
										children: "•"
									}), /* @__PURE__ */ jsxs("span", { children: [
										t("Check"),
										" ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-foreground",
											children: email
										}),
										" ",
										t("for a confirmation email with your ticket reference.")
									] })]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex gap-3 text-start",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground/60 shrink-0",
										children: "•"
									}), /* @__PURE__ */ jsx("span", { children: t("We typically respond within 24 hours during support hours (Mon–Fri).") })]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex gap-3 text-start",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground/60 shrink-0",
										children: "•"
									}), /* @__PURE__ */ jsx("span", { children: t("Reply to the confirmation email to add more context or attachments.") })]
								})
							]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "border-t border-border px-6 py-4 bg-muted/30",
						children: /* @__PURE__ */ jsxs("p", {
							className: "text-[13px] text-muted-foreground",
							children: [
								t("Need 24/7 or enterprise support?"),
								" ",
								/* @__PURE__ */ jsx("a", {
									href: CONTACT_SALES_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "font-medium text-foreground underline hover:no-underline",
									children: t("Contact sales")
								})
							]
						})
					})]
				})
			})]
		})
	});
	return /* @__PURE__ */ jsx(WizardLayout, {
		title: t("Support"),
		fullscreen: true,
		useSidebar: true,
		sidebar,
		footerAlign: "right",
		footer: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
			variant: "outline",
			onClick: handleCancel,
			disabled: isSubmitting,
			children: t("Cancel")
		}), /* @__PURE__ */ jsx(Button, {
			onClick: handleSubmit,
			disabled: !canSubmit || isSubmitting,
			children: t("Submit ticket")
		})] }),
		children: /* @__PURE__ */ jsxs("div", {
			className: "space-y-6",
			children: [submitError && /* @__PURE__ */ jsxs("div", {
				ref: submitErrorRef,
				children: [submitError.kind === "portal" && /* @__PURE__ */ jsxs(Alert, {
					variant: "destructive",
					children: [
						/* @__PURE__ */ jsx(AlertTriangle, { "aria-hidden": true }),
						/* @__PURE__ */ jsx(AlertTitle, { children: t("We're sorry - we couldn't submit your support request") }),
						/* @__PURE__ */ jsx(AlertDescription, {
							className: "text-[13px] prose-links-neutral",
							children: /* @__PURE__ */ jsxs("p", { children: [
								t("We're having a temporary issue with the support portal, and our engineering team are aware. In the meantime, please reach out at"),
								" ",
								/* @__PURE__ */ jsx("a", {
									href: `mailto:support@appwrite.io`,
									children: "support@appwrite.io"
								}),
								t(", on"),
								" ",
								/* @__PURE__ */ jsx("a", {
									href: SUPPORT_DISCORD_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Discord"
								}),
								t(", or on"),
								" ",
								/* @__PURE__ */ jsx("a", {
									href: SUPPORT_GITHUB_ISSUES_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									children: "GitHub"
								}),
								"."
							] })
						})
					]
				}), submitError.kind === "attachment" && /* @__PURE__ */ jsxs(Alert, {
					variant: "destructive",
					children: [
						/* @__PURE__ */ jsx(AlertTriangle, { "aria-hidden": true }),
						/* @__PURE__ */ jsx(AlertTitle, { children: t("Couldn't use this attachment") }),
						/* @__PURE__ */ jsx(AlertDescription, {
							className: "text-[13px]",
							children: submitError.message
						})
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Details")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mt-2",
						children: t("Subject and message are required.")
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "border-t border-border px-6 py-4 space-y-4",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "support-subject",
								className: "text-[13px] font-medium",
								children: t("Subject")
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "support-subject",
								value: subject,
								onChange: (e) => setSubject(e.target.value.slice(0, SUBJECT_MAX)),
								placeholder: t(SUBJECT_PLACEHOLDER),
								className: "mt-2 h-9",
								maxLength: SUBJECT_MAX
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-[11px] text-muted-foreground mt-1",
								children: [
									subject.length,
									"/",
									SUBJECT_MAX,
									" ",
									t("characters")
								]
							})
						] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "support-project",
							className: "text-[13px] font-medium",
							children: t("Project (optional)")
						}), /* @__PURE__ */ jsxs(Select, {
							value: projectId,
							onValueChange: setProjectId,
							children: [/* @__PURE__ */ jsx(SelectTrigger, {
								id: "support-project",
								className: "mt-2 h-9 w-full",
								children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t("None") })
							}), /* @__PURE__ */ jsxs(SelectContent, { children: [/* @__PURE__ */ jsx(SelectItem, {
								value: NO_PROJECT_VALUE,
								children: t("None")
							}), projectList.map((p) => /* @__PURE__ */ jsx(SelectItem, {
								value: p.$id,
								children: p.name
							}, p.$id))] })]
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "support-message",
								className: "text-[13px] font-medium",
								children: t("Message")
							}),
							/* @__PURE__ */ jsx(Textarea, {
								id: "support-message",
								value: message,
								onChange: (e) => setMessage(e.target.value.slice(0, MESSAGE_MAX)),
								placeholder: t(MESSAGE_PLACEHOLDER),
								className: "mt-2 min-h-[140px] resize-y",
								maxLength: MESSAGE_MAX
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-[11px] text-muted-foreground mt-1",
								children: [
									message.length,
									"/",
									MESSAGE_MAX,
									" ",
									t("characters")
								]
							})
						] }),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsx(Label, {
									htmlFor: "support-attachment",
									className: "text-[13px] font-medium",
									children: t("Attachment (optional)")
								}),
								/* @__PURE__ */ jsxs("div", {
									onDragOver: handleAttachmentDragOver,
									onDragLeave: handleAttachmentDragLeave,
									onDrop: handleAttachmentDrop,
									className: cn("border-2 border-dashed rounded-lg p-6 text-center transition-colors", isDraggingAttachment ? "border-primary bg-primary/5" : "border-border bg-muted/30"),
									children: [/* @__PURE__ */ jsx("input", {
										ref: attachmentInputRef,
										id: "support-attachment",
										type: "file",
										accept: "*/*",
										onChange: handleAttachmentInputChange,
										className: "hidden"
									}), /* @__PURE__ */ jsxs("label", {
										htmlFor: "support-attachment",
										className: "cursor-pointer flex flex-col items-center gap-2",
										children: [
											/* @__PURE__ */ jsx(Upload, { className: "h-8 w-8 text-muted-foreground" }),
											/* @__PURE__ */ jsx("span", {
												className: "text-[13px] text-foreground",
												children: attachment ? attachment.name : t("Click to upload or drag and drop")
											}),
											/* @__PURE__ */ jsxs("span", {
												className: "text-[12px] text-muted-foreground",
												children: [
													t("Max size:"),
													" ",
													ATTACHMENT_MAX_MB,
													" MB"
												]
											})
										]
									})]
								}),
								attachment && /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 rounded-md border border-border bg-muted/30 p-2",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "flex-1 truncate text-[12px] text-foreground",
										children: [
											attachment.name,
											" (",
											formatFileSize(attachment.size),
											")"
										]
									}), /* @__PURE__ */ jsx(Button, {
										type: "button",
										variant: "ghost",
										size: "sm",
										className: "h-6 w-6 p-0 shrink-0",
										onClick: () => {
											setAttachment(null);
											setSubmitError((e) => e?.kind === "attachment" ? null : e);
											if (attachmentInputRef.current) attachmentInputRef.current.value = "";
										},
										children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
									})]
								})
							]
						})
					]
				})]
			})]
		})
	});
}
function SupportPage() {
	return /* @__PURE__ */ jsx(SupportWizardFullscreen, {});
}
export { SupportPage as component };
