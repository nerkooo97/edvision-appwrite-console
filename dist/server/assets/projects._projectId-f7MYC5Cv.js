import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { c as isHttpPaymentRequiredError, l as isHttpProjectAccessError } from "./error-formatting-CL2hjGy5.js";
import { F as isBudgetLimitReached, G as organizationQueryOptions, H as organizationPlanQueryOptions, K as organizationScopesQueryOptions, Y as organizationsQueryOptions, Z as prefetchOrganizationInvoiceDataIfAllowed, Zt as isPlanUsageLimitReached, et as resolveProjectTeamIdFromConsole, x as fetchOrganizationById } from "./organizations-BKtnlNrj.js";
import { a as getActiveProfileId, i as getActiveProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { Lo as consoleVariablesQueryOptions, ci as apiExplorerSpecQueryOptions } from "./hooks-BONwG3Mt.js";
import { X as ensureProjectRegion, Z as registerProjectRegionFromProject, m as fetchProject } from "./projects-BaTJenfQ.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as uploadManager } from "./upload-manager-DVbeAVI1.js";
import { t as ProgressBarRow } from "./ProgressBarRow-ec10tuU_.js";
import { t as formatBytes } from "./mock-data-bi-y2wwb.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Link, createFileRoute, isRedirect, lazyRouteComponent, redirect } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { AlertCircle, CheckCircle2, ExternalLink, Loader2, X } from "lucide-react";
var POLL_INTERVAL_MS = 600;
function useActiveUploads() {
	const [activeUploads, setActiveUploads] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const listenersRef = useRef(/* @__PURE__ */ new Map());
	const loadActiveUploads = useCallback(async () => {
		try {
			setActiveUploads(await uploadManager.getActiveUploads());
			setIsLoading(false);
		} catch (error) {
			console.error("Failed to load active uploads:", error);
			setIsLoading(false);
		}
	}, []);
	useEffect(() => {
		loadActiveUploads();
		const interval = setInterval(loadActiveUploads, POLL_INTERVAL_MS);
		return () => clearInterval(interval);
	}, [loadActiveUploads]);
	useEffect(() => {
		const listeners = listenersRef.current;
		const currentIds = new Set(activeUploads.map((u) => u.id));
		listeners.forEach((unsub, id) => {
			if (!currentIds.has(id)) {
				unsub();
				listeners.delete(id);
			}
		});
		activeUploads.forEach((item) => {
			if (!listeners.has(item.id)) {
				const unsubscribe = uploadManager.onProgress(item.id, () => {
					loadActiveUploads();
				});
				listeners.set(item.id, unsubscribe);
			}
		});
		return () => {
			listeners.forEach((unsub) => unsub());
			listeners.clear();
		};
	}, [activeUploads, loadActiveUploads]);
	return {
		activeUploads,
		hasActiveUploads: activeUploads.length > 0,
		isLoading
	};
}
function UploadProgress({ uploads, onCancel, onDismiss, embedded = false, className }) {
	const t = useT();
	const displayUploads = uploads.filter((u) => u.status !== "cancelled");
	if (displayUploads.length === 0) return null;
	return /* @__PURE__ */ jsx("div", {
		className: cn("w-full max-w-sm space-y-2", !embedded && "fixed z-50", !embedded && (className || "bottom-4 end-4"), className && embedded && className),
		children: displayUploads.map((upload) => {
			const isCompleted = upload.status === "completed";
			const isFailed = upload.status === "failed";
			const isActive = upload.status === "pending" || upload.status === "uploading";
			const showCloseButton = isActive ? !!onCancel : isCompleted || isFailed ? !!onDismiss : false;
			return /* @__PURE__ */ jsx("div", {
				className: "rounded-lg border border-border bg-background p-3",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-w-0",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 mb-1",
								children: [upload.status === "uploading" ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-primary shrink-0" }) : upload.status === "completed" ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 shrink-0" }) : upload.status === "failed" ? /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-destructive shrink-0" }) : /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground shrink-0" }), /* @__PURE__ */ jsx("p", {
									className: "text-[13px] font-medium text-foreground truncate",
									children: upload.fileName
								})]
							}),
							/* @__PURE__ */ jsx(ProgressBarRow, { value: upload.progress }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between gap-2 flex-wrap",
								children: [
									/* @__PURE__ */ jsxs("span", {
										className: "text-[11px] text-muted-foreground",
										children: [
											formatBytes(Math.round(upload.progress / 100 * upload.fileSize)),
											" ",
											"/ ",
											formatBytes(upload.fileSize)
										]
									}),
									isCompleted && upload.projectId && upload.bucketId && upload.fileId && /* @__PURE__ */ jsxs(Link, {
										to: "/projects/$projectId/storage/$bucketId",
										params: {
											projectId: upload.projectId,
											bucketId: upload.bucketId
										},
										search: { file: upload.fileId },
										className: "inline-flex items-center gap-1 text-[12px] link-neutral",
										children: [t("View file"), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3" })]
									}),
									isFailed && upload.error && /* @__PURE__ */ jsx("span", {
										className: "text-[11px] text-destructive truncate max-w-[200px]",
										children: upload.error
									})
								]
							})
						]
					}), showCloseButton && /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "sm",
						className: "h-6 w-6 p-0 shrink-0",
						onClick: () => isActive ? onCancel?.(upload.id) : onDismiss?.(upload.id),
						"aria-label": isActive ? t("Cancel upload") : t("Dismiss"),
						children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
					})]
				})
			}, upload.id);
		})
	});
}
function GlobalUploadProgress({ embedded } = {}) {
	const { activeUploads } = useActiveUploads();
	const queryClient = useQueryClient();
	const invalidatedUploadsRef = useRef(/* @__PURE__ */ new Set());
	const uploadItemsRef = useRef(/* @__PURE__ */ new Map());
	const previousStatusRef = useRef(/* @__PURE__ */ new Map());
	useEffect(() => {
		activeUploads.forEach((upload) => {
			uploadItemsRef.current.set(upload.id, upload);
			const previousStatus = previousStatusRef.current.get(upload.id);
			if (upload.status === "completed" && previousStatus !== "completed" && !invalidatedUploadsRef.current.has(upload.id)) {
				queryClient.refetchQueries({ queryKey: [
					"files",
					"project",
					upload.projectId,
					"bucket",
					upload.bucketId
				] });
				invalidatedUploadsRef.current.add(upload.id);
				setTimeout(() => {
					invalidatedUploadsRef.current.delete(upload.id);
					uploadItemsRef.current.delete(upload.id);
					previousStatusRef.current.delete(upload.id);
				}, 1e4);
			}
			previousStatusRef.current.set(upload.id, upload.status);
		});
	}, [activeUploads, queryClient]);
	useEffect(() => {
		const unsubscribes = [];
		const setupListeners = async () => {
			(await uploadManager.getActiveUploads()).forEach((upload) => {
				uploadItemsRef.current.set(upload.id, upload);
				const unsubscribe = uploadManager.onProgress(upload.id, (progress) => {
					if (progress.status === "completed" && !invalidatedUploadsRef.current.has(progress.id)) {
						const item = uploadItemsRef.current.get(progress.id);
						if (item) {
							queryClient.refetchQueries({ queryKey: [
								"files",
								"project",
								item.projectId,
								"bucket",
								item.bucketId
							] });
							invalidatedUploadsRef.current.add(progress.id);
							setTimeout(() => {
								invalidatedUploadsRef.current.delete(progress.id);
								uploadItemsRef.current.delete(progress.id);
							}, 1e4);
						}
					}
				});
				unsubscribes.push(unsubscribe);
			});
		};
		setupListeners();
		return () => {
			unsubscribes.forEach((unsubscribe) => unsubscribe());
		};
	}, [activeUploads.length, queryClient]);
	const handleCancel = async (uploadId) => {
		await uploadManager.cancelUpload(uploadId);
	};
	const handleDismiss = async (uploadId) => {
		await uploadManager.removeUploadItem(uploadId);
	};
	return /* @__PURE__ */ jsx(UploadProgress, {
		uploads: activeUploads,
		onCancel: handleCancel,
		onDismiss: handleDismiss,
		embedded,
		className: embedded ? void 0 : "bottom-4 end-4"
	});
}
var $$splitComponentImporter = () => import("./projects._projectId-ClSUOZsD.js");
var $$splitErrorComponentImporter = () => import("./projects._projectId-D9LQFEgl.js");
var $$splitNotFoundComponentImporter = () => import("./projects._projectId-CDuPLe9Z.js");
var EMPTY_PROJECT_LAYOUT_CONTEXT = {
	budgetLimitReached: false,
	planUsageLimitReached: false,
	budgetLimitTeamId: null
};
const Route$1 = createFileRoute("/_public/projects/$projectId")({
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	beforeLoad: async ({ params, context, location }) => {
		if (typeof window === "undefined") return EMPTY_PROJECT_LAYOUT_CONTEXT;
		const { projectId } = params;
		if (!projectId) return EMPTY_PROJECT_LAYOUT_CONTEXT;
		await ensureProjectRegion(context.queryClient, projectId).catch(() => {});
		const features = getActiveProfileFeatures();
		const redirectIfNested = () => {
			if (location.pathname.split("/").filter(Boolean).length > 2) throw redirect({
				to: "/projects/$projectId",
				params: { projectId },
				replace: true
			});
		};
		let projectData;
		try {
			projectData = await context.queryClient.ensureQueryData({
				queryKey: ["project", projectId],
				queryFn: () => fetchProject(projectId),
				staleTime: 300 * 1e3,
				retry: false
			});
			registerProjectRegionFromProject(projectData);
			if (getActiveProfileId() === "self-hosted") await context.queryClient.ensureQueryData(consoleVariablesQueryOptions(projectData?.region)).catch(() => {});
		} catch (error) {
			if (isRedirect(error)) throw error;
			if (isHttpPaymentRequiredError(error)) {
				if (features.billing) {
					const teamId$1 = await resolveProjectTeamIdFromConsole(projectId);
					let budgetConfirmed = true;
					if (teamId$1) {
						const organization = await context.queryClient.fetchQuery({
							queryKey: ["organization", teamId$1],
							queryFn: () => fetchOrganizationById(teamId$1),
							staleTime: 30 * 1e3
						}).catch(() => null);
						if (organization && organization.billingLimits && !isBudgetLimitReached(organization)) budgetConfirmed = false;
					}
					if (budgetConfirmed) {
						redirectIfNested();
						return {
							budgetLimitReached: true,
							planUsageLimitReached: false,
							budgetLimitTeamId: teamId$1
						};
					}
				}
				console.warn("Failed to resolve budget limit in beforeLoad:", error);
				return EMPTY_PROJECT_LAYOUT_CONTEXT;
			}
			if (isHttpProjectAccessError(error)) throw error;
			console.warn("Failed to resolve project in beforeLoad:", error);
			return EMPTY_PROJECT_LAYOUT_CONTEXT;
		}
		if (!features.billing) return EMPTY_PROJECT_LAYOUT_CONTEXT;
		const teamId = projectData?.teamId;
		if (!teamId) return EMPTY_PROJECT_LAYOUT_CONTEXT;
		try {
			const organization = await context.queryClient.fetchQuery({
				queryKey: ["organization", teamId],
				queryFn: () => fetchOrganizationById(teamId),
				staleTime: 30 * 1e3
			}).catch(() => null);
			const budgetLimitReached = isBudgetLimitReached(projectData) || isBudgetLimitReached(organization);
			const planUsageLimitReached = !budgetLimitReached && (isPlanUsageLimitReached(projectData) || isPlanUsageLimitReached(organization));
			if (budgetLimitReached || planUsageLimitReached) redirectIfNested();
			return {
				budgetLimitReached,
				planUsageLimitReached,
				budgetLimitTeamId: teamId
			};
		} catch (error) {
			if (isRedirect(error)) throw error;
			console.warn("Failed to resolve budget limit in beforeLoad:", error);
			return EMPTY_PROJECT_LAYOUT_CONTEXT;
		}
	},
	loader: async ({ params, context }) => {
		if (typeof window === "undefined") return;
		const { projectId } = params;
		const { queryClient } = context;
		if (!projectId) return void 0;
		const budgetLimitReached = context.budgetLimitReached === true;
		const planUsageLimitReached = context.planUsageLimitReached === true;
		let budgetLimitTeamId = context.budgetLimitTeamId;
		if (budgetLimitReached) {
			if (!budgetLimitTeamId) budgetLimitTeamId = await resolveProjectTeamIdFromConsole(projectId);
			return {
				project: {
					$id: projectId,
					teamId: budgetLimitTeamId ?? ""
				},
				budgetLimitReached: true,
				planUsageLimitReached: false
			};
		}
		try {
			const features = getActiveProfileFeatures();
			const [projectData] = await Promise.all([queryClient.ensureQueryData({
				queryKey: ["project", projectId],
				queryFn: () => fetchProject(projectId),
				staleTime: 300 * 1e3,
				retry: false
			}), features.multiTenancy ? queryClient.ensureQueryData(organizationsQueryOptions()).catch(() => {}) : Promise.resolve()]);
			registerProjectRegionFromProject(projectData);
			if (projectData?.teamId) {
				if (features.billing) {
					await queryClient.ensureQueryData(organizationPlanQueryOptions(projectData.teamId)).catch(() => {});
					await queryClient.ensureQueryData(organizationQueryOptions(projectData.teamId)).catch(() => {});
					await prefetchOrganizationInvoiceDataIfAllowed(queryClient, projectData.teamId);
				}
				if (features.orgRoles) await queryClient.ensureQueryData(organizationScopesQueryOptions(projectData.teamId, projectId)).catch(() => {});
			}
			if (!planUsageLimitReached) {
				await queryClient.ensureQueryData(consoleVariablesQueryOptions(projectData?.region)).catch(() => {});
				queryClient.prefetchQuery(apiExplorerSpecQueryOptions("server")).catch(() => {});
				queryClient.prefetchQuery(apiExplorerSpecQueryOptions("client")).catch(() => {});
			}
			return projectData ? {
				project: {
					$id: projectData.$id,
					teamId: projectData.teamId,
					status: projectData.status
				},
				budgetLimitReached: false,
				planUsageLimitReached
			} : void 0;
		} catch (error) {
			if (isHttpPaymentRequiredError(error)) return {
				project: {
					$id: projectId,
					teamId: budgetLimitTeamId ?? await resolveProjectTeamIdFromConsole(projectId) ?? ""
				},
				budgetLimitReached: true,
				planUsageLimitReached: false
			};
			if (isHttpProjectAccessError(error)) throw error;
			console.warn("Failed to fetch project in loader:", error);
			return;
		}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { GlobalUploadProgress as n, useActiveUploads as r, Route$1 as t };
