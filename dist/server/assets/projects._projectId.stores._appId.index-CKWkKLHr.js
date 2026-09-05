import "./utils-DoqqkI3X.js";
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
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { fd as useDistributionBuilds, pd as useDistributionSubmissions, ud as useDistributionApp } from "./hooks-BONwG3Mt.js";
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
import "./popover-BjTNxuf9.js";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import "./tooltip-DUssQZhw.js";
import { t as Route$1 } from "./projects._projectId.stores._appId.index-BZiPnPBG.js";
import "./RefreshButton-BA9lQ7jC.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { a as providerLabel, i as platformLabel, n as PlatformIcons, r as frameworkLabel, t as PlatformIcon } from "./platform-CwoAXQJI.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, Package } from "lucide-react";
var BUILD_STATUS = {
	building: {
		label: "Building",
		variant: "processing"
	},
	ready: {
		label: "Ready",
		variant: "success"
	},
	failed: {
		label: "Failed",
		variant: "error"
	},
	canceled: {
		label: "Canceled",
		variant: "inactive"
	}
};
var SUBMISSION_STATUS = {
	queued: {
		label: "Queued",
		variant: "pending"
	},
	processing: {
		label: "Processing",
		variant: "processing"
	},
	in_review: {
		label: "In review",
		variant: "info"
	},
	approved: {
		label: "Approved",
		variant: "success"
	},
	published: {
		label: "Published",
		variant: "success"
	},
	rejected: {
		label: "Rejected",
		variant: "error"
	},
	failed: {
		label: "Failed",
		variant: "error"
	}
};
function fallback(status) {
	return {
		label: status ? status.charAt(0).toUpperCase() + status.slice(1) : "Unknown",
		variant: "default"
	};
}
function BuildStatusBadge({ status }) {
	const t = useT();
	const { label, variant } = BUILD_STATUS[status] ?? fallback(status);
	return /* @__PURE__ */ jsx(Badge, {
		variant,
		className: "text-[10px] shrink-0",
		children: t(label)
	});
}
function SubmissionStatusBadge({ status }) {
	const t = useT();
	const { label, variant } = SUBMISSION_STATUS[status] ?? fallback(status);
	return /* @__PURE__ */ jsx(Badge, {
		variant,
		className: "text-[10px] shrink-0",
		children: t(label)
	});
}
function formatDuration(seconds) {
	if (!seconds) return "-";
	if (seconds < 60) return `${seconds}s`;
	const minutes = Math.floor(seconds / 60);
	const rest = seconds % 60;
	return rest ? `${minutes}m ${rest}s` : `${minutes}m`;
}
function View({ initialData } = {}) {
	const t = useT();
	const { projectId, appId } = useParams({ strict: false });
	const navigate = useNavigate();
	const { data: appFromHook, isLoading: appLoading } = useDistributionApp(projectId, appId);
	const app = appFromHook ?? initialData?.app;
	const { builds, isLoading: buildsLoading } = useDistributionBuilds(projectId, appId);
	const { submissions, isLoading: submissionsLoading } = useDistributionSubmissions(projectId, appId);
	const handleBack = () => navigate({
		to: "/projects/$projectId/stores",
		params: { projectId }
	});
	if (!app && !appLoading) return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ jsx(ServiceHeader, {
			title: t("Distribution"),
			fullWidthBorder: true
		}), /* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-7xl flex-1 px-4 pb-4 sm:px-6 sm:pb-6",
			children: /* @__PURE__ */ jsx(EmptyState, {
				icon: Package,
				title: t("App not found"),
				description: t("This distribution app does not exist or has been removed."),
				variant: "card",
				action: /* @__PURE__ */ jsx(Button, {
					variant: "outline",
					size: "sm",
					onClick: handleBack,
					children: t("Back to Distribution")
				})
			})
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-h-0 flex-1 flex-col",
		children: [/* @__PURE__ */ jsx(ServiceHeader, {
			title: /* @__PURE__ */ jsxs("span", {
				className: "flex min-w-0 items-center gap-2",
				children: [
					/* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						onClick: handleBack,
						"aria-label": t("Back to Distribution"),
						className: "h-8 w-8 shrink-0 p-0 text-muted-foreground hover:text-foreground",
						children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ jsx("span", {
						className: "truncate",
						children: app?.name ?? t("App")
					}),
					app ? /* @__PURE__ */ jsx(PlatformIcons, {
						platforms: app.platforms,
						className: "shrink-0"
					}) : null,
					app && !app.enabled ? /* @__PURE__ */ jsx(Badge, {
						variant: "inactive",
						className: "text-[10px] shrink-0",
						children: t("Disabled")
					}) : null
				]
			}),
			fullWidthBorder: true
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-7xl flex-1 overflow-y-auto px-4 pb-4 pt-6 sm:px-6 sm:pb-6",
			children: [
				app ? /* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4",
							children: /* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Configuration")
							})
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsxs("div", {
							className: "grid gap-4 px-6 py-4 sm:grid-cols-2 lg:grid-cols-3",
							children: [
								/* @__PURE__ */ jsx(Detail, {
									label: t("Framework"),
									children: frameworkLabel(app.framework)
								}),
								/* @__PURE__ */ jsx(Detail, {
									label: t("Platforms"),
									children: /* @__PURE__ */ jsx("span", {
										className: "flex items-center gap-2",
										children: app.platforms.map((platform) => /* @__PURE__ */ jsxs("span", {
											className: "flex items-center gap-1.5 text-[13px] text-foreground",
											children: [/* @__PURE__ */ jsx(PlatformIcon, { platform }), platformLabel(platform)]
										}, platform))
									})
								}),
								/* @__PURE__ */ jsx(Detail, {
									label: t("Default track"),
									children: app.defaultTrack || "-"
								}),
								/* @__PURE__ */ jsx(Detail, {
									label: t("Identifier"),
									children: app.applicationId || app.bundleId || app.packageIdentity || "-"
								}),
								/* @__PURE__ */ jsx(Detail, {
									label: t("Auto submit"),
									children: app.autoSubmit ? t("Enabled") : t("Disabled")
								})
							]
						})
					]
				}) : null,
				/* @__PURE__ */ jsxs("section", {
					className: "mt-6",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "mb-3 text-[15px] font-semibold text-foreground",
						children: t("Builds")
					}), buildsLoading && builds.length === 0 ? /* @__PURE__ */ jsx("div", {
						className: "rounded-lg border border-border bg-card py-12 text-center",
						children: /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground",
							children: t("Loading builds...")
						})
					}) : builds.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
						icon: Package,
						title: t("No builds yet"),
						description: t("Trigger a build to create an artifact for the stores."),
						variant: "card"
					}) : /* @__PURE__ */ jsx("div", {
						className: "rounded-lg border border-border bg-card overflow-hidden",
						children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
							className: "hover:bg-transparent border-b border-border",
							children: [
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: t("Platform")
								}),
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: t("Version")
								}),
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: t("Status")
								}),
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: t("Duration")
								}),
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end",
									children: t("Created")
								})
							]
						}) }), /* @__PURE__ */ jsx(TableBody, { children: builds.map((build) => /* @__PURE__ */ jsxs(TableRow, {
							className: "border-b border-border/50",
							children: [
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3",
									children: /* @__PURE__ */ jsxs("span", {
										className: "flex items-center gap-2 text-[13px] text-foreground",
										children: [
											/* @__PURE__ */ jsx(PlatformIcon, { platform: build.platform }),
											platformLabel(build.platform),
											/* @__PURE__ */ jsx("span", {
												className: "text-[11px] uppercase text-muted-foreground",
												children: build.artifactType
											})
										]
									})
								}),
								/* @__PURE__ */ jsxs(TableCell, {
									className: "px-4 py-3",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[13px] text-foreground",
										children: build.versionName
									}), /* @__PURE__ */ jsxs("span", {
										className: "ms-1 text-[12px] text-muted-foreground",
										children: [
											"(",
											build.versionCode,
											")"
										]
									})]
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3",
									children: /* @__PURE__ */ jsx(BuildStatusBadge, { status: build.status })
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3",
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] text-muted-foreground font-mono",
										children: formatDuration(build.buildDuration)
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3 text-end",
									children: /* @__PURE__ */ jsx(DateTooltip, {
										date: build.$createdAt,
										className: "text-[12px] text-muted-foreground font-mono"
									})
								})
							]
						}, build.$id)) })] })
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mt-6",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "mb-3 text-[15px] font-semibold text-foreground",
						children: t("Submissions")
					}), submissionsLoading && submissions.length === 0 ? /* @__PURE__ */ jsx("div", {
						className: "rounded-lg border border-border bg-card py-12 text-center",
						children: /* @__PURE__ */ jsx("p", {
							className: "text-[13px] text-muted-foreground",
							children: t("Loading submissions...")
						})
					}) : submissions.length === 0 ? /* @__PURE__ */ jsx(EmptyState, {
						icon: Package,
						title: t("No submissions yet"),
						description: t("Submit a ready build to a store to track its review status here."),
						variant: "card"
					}) : /* @__PURE__ */ jsx("div", {
						className: "rounded-lg border border-border bg-card overflow-hidden",
						children: /* @__PURE__ */ jsxs(Table$1, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
							className: "hover:bg-transparent border-b border-border",
							children: [
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: t("Provider")
								}),
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: t("Track")
								}),
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: t("Status")
								}),
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: t("Release")
								}),
								/* @__PURE__ */ jsx(TableHead, {
									className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end",
									children: t("Submitted")
								})
							]
						}) }), /* @__PURE__ */ jsx(TableBody, { children: submissions.map((submission) => /* @__PURE__ */ jsxs(TableRow, {
							className: "border-b border-border/50",
							children: [
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3",
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[13px] text-foreground",
										children: providerLabel(submission.provider)
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3",
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[13px] text-muted-foreground",
										children: submission.track
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3",
									children: /* @__PURE__ */ jsx(SubmissionStatusBadge, { status: submission.status })
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3",
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[12px] text-muted-foreground font-mono",
										children: submission.storeReleaseId || "-"
									})
								}),
								/* @__PURE__ */ jsx(TableCell, {
									className: "px-4 py-3 text-end",
									children: /* @__PURE__ */ jsx(DateTooltip, {
										date: submission.$createdAt,
										className: "text-[12px] text-muted-foreground font-mono"
									})
								})
							]
						}, submission.$id)) })] })
					})]
				})
			]
		})]
	});
}
function Detail({ label, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-[12px] font-medium uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-1 text-[13px] text-foreground",
			children
		})]
	});
}
function StoreAppPage() {
	const { projectId, appId } = Route$1.useParams();
	const loaderData = Route$1.useLoaderData();
	return /* @__PURE__ */ jsx(View, { initialData: loaderData?.app ? { app: loaderData.app } : void 0 }, `store-app-${projectId}-${appId}`);
}
export { StoreAppPage as component };
