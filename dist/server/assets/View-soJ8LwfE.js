import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { t as Dependencies } from "./dependencies-g_64U8J3.js";
import { Mt as useOrganizationPlan, fn as resolveOrganizationPlanDisplayLabel } from "./organizations-BKtnlNrj.js";
import { Rd as isStoragePlaceholderBucketId, Vd as storageSidebarBucketsQueryOptions, yd as bucketsQueryOptions } from "./hooks-BONwG3Mt.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { t as CreateBucket } from "./CreateBucket-D-ub4M79.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useLocation, useNavigate, useParams, useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ID } from "@appwrite.io/console";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { HardDrive } from "lucide-react";
function View() {
	const t = useT();
	const { projectId, bucketId } = useParams({ strict: false });
	const navigate = useNavigate();
	const location = useLocation();
	const search = useSearch({ strict: false });
	const queryClient = useQueryClient();
	const [createOpen, setCreateOpen] = useState(false);
	const { data: total = 0 } = useQuery({
		...bucketsQueryOptions(projectId, 0, 1, ""),
		select: (d) => d.total ?? 0
	});
	const { data: sidebarBuckets } = useQuery({
		...storageSidebarBucketsQueryOptions(projectId),
		enabled: !!projectId && isStoragePlaceholderBucketId(bucketId)
	});
	useEffect(() => {
		if (!projectId || !isStoragePlaceholderBucketId(bucketId)) return;
		const firstId = sidebarBuckets?.buckets?.[0]?.$id;
		if (!firstId) return;
		navigate({
			to: "/projects/$projectId/storage/$bucketId",
			params: {
				projectId,
				bucketId: firstId
			},
			replace: true
		});
	}, [
		bucketId,
		navigate,
		projectId,
		sidebarBuckets?.buckets
	]);
	const { project } = useProject(projectId);
	const { plan: organizationPlan } = useOrganizationPlan(project?.teamId);
	const bucketsLimit = organizationPlan?.buckets ?? 0;
	useEffect(() => {
		if (search?.create === "bucket" && !createOpen) {
			setCreateOpen(true);
			navigate({
				to: location.pathname,
				search: (prev) => {
					if (!prev || typeof prev !== "object") return {};
					const next = { ...prev };
					delete next.create;
					return Object.keys(next).length === 0 ? {} : next;
				},
				replace: true
			});
		}
	}, [
		search?.create,
		createOpen,
		navigate,
		location.pathname
	]);
	const createMutation = useMutation({
		mutationFn: async (data) => {
			if (!projectId) throw new Error("Project ID is required");
			const projectSdk = sdk.forProject(projectId);
			const bucketId$1 = data.bucketId || ID.unique();
			return await projectSdk.storage.createBucket({
				bucketId: bucketId$1,
				name: data.name
			});
		},
		onSuccess: (bucket) => {
			toast.success(`${bucket.name} ${t("has been created")}`);
			queryClient.invalidateQueries({ queryKey: Dependencies.BUCKETS });
			setCreateOpen(false);
			navigate({
				to: "/projects/$projectId/storage/$bucketId",
				params: {
					projectId,
					bucketId: bucket.$id
				}
			});
		},
		onError: (error) => {
			toast.error(getErrorMessage(error));
		}
	});
	const showPlanLimitLine = total === 0 && bucketsLimit > 0 && project?.teamId;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-8 sm:px-6 sm:py-12",
			children: /* @__PURE__ */ jsx(EmptyState, {
				variant: "card",
				isEmpty: true,
				className: "w-full",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted",
							children: /* @__PURE__ */ jsx(HardDrive, { className: "h-6 w-6 text-muted-foreground" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mb-2 text-[15px] font-medium text-foreground",
							children: total === 0 ? t("Create your first bucket") : t("Select a bucket")
						}),
						/* @__PURE__ */ jsx("p", {
							className: showPlanLimitLine ? "mb-2 max-w-sm text-[13px] text-muted-foreground" : "mb-6 max-w-sm text-[13px] text-muted-foreground",
							children: total === 0 ? t("Buckets isolate files, permissions, and delivery rules. Create one from the sidebar to start uploading.") : t("Choose a bucket in the left sidebar to browse files, security, and settings. This layout mirrors the database console workspace.")
						}),
						showPlanLimitLine ? /* @__PURE__ */ jsxs("p", {
							className: "mb-6 max-w-sm text-[12px] text-muted-foreground",
							children: [
								t("Plan limit:"),
								" ",
								total,
								" ",
								t("of"),
								" ",
								bucketsLimit,
								" ",
								t("buckets"),
								" ·",
								" ",
								resolveOrganizationPlanDisplayLabel({
									planName: organizationPlan?.name ?? null,
									planId: organizationPlan?.$id
								})
							]
						}) : null
					]
				})
			})
		}), /* @__PURE__ */ jsx(CreateBucket, {
			open: createOpen,
			onOpenChange: setCreateOpen,
			onCreate: (data) => createMutation.mutate(data),
			isLoading: createMutation.isPending
		})]
	});
}
export { View as t };
