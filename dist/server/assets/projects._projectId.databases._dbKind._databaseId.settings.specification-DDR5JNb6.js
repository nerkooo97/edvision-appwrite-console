import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import { Mt as useOrganizationPlan } from "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import { J as invalidateDatabaseModel, Qt as dedicatedDatabaseSourceFromRouteKind, pt as updateProductDatabaseSpecification, st as seedDatabaseProductRouteKind, tt as refetchProjectDatabaseLists, yt as useDatabaseSpecifications } from "./databases-Dh0pwZ6h.js";
import { f as isServerlessDatabaseSpecId, l as hasEnabledDedicatedComputeOptions, n as TABLE_DB_SPEC_OPTIONS, p as mapDedicatedDatabaseSpecifications, t as SERVERLESS_DATABASE_SPEC_ID, u as hasLockedDatabaseSpecifications } from "./database-specs-CBc802K0.js";
import { b as coerceTrimmedString } from "./database-routes-DB_xKWuY.js";
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
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-CsPM4E9L.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import "./EmptyState-DZDwceHm.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import { a as planSupportsDedicatedDatabases, o as formatDedicatedDatabaseRegionUnavailableDescription, s as projectSupportsDedicatedDatabaseCompute } from "./dedicated-database-plan-D5hnUTFL.js";
import "./project-breakdown-resources-Bazw2C09.js";
import { t as ServerlessSpecPrice } from "./ServerlessSpecPrice-DQXfm9rK.js";
import { t as UpgradePlanLink } from "./UpgradePlanLink-BCG1Z_E2.js";
import { t as SpecificationsUpgradeNote } from "./SpecificationsUpgradeNote-BowRoSsd.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import { t as useScrollToCard } from "./use-scroll-to-card-D2kn3yrC.js";
import "./DatabaseOperationsLockContext-B72U5wFZ.js";
import { n as DatabaseSettingsLoading, t as useDatabaseSettingsPage } from "./useDatabaseSettingsPage-nyiksSB_.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
function DedicatedDatabaseRegionUnavailableBadge() {
	return /* @__PURE__ */ jsx(Badge, {
		variant: "inactive",
		className: "text-[10px] shrink-0",
		children: useT()("Coming soon")
	});
}
var SERVERLESS_SPEC_OPTION = TABLE_DB_SPEC_OPTIONS.find((spec) => spec.id === "shared") ?? TABLE_DB_SPEC_OPTIONS[0];
function resolveCurrentSpecId(dbKind, specification) {
	const trimmed = coerceTrimmedString(specification);
	if (trimmed && !isServerlessDatabaseSpecId(trimmed)) return trimmed;
	if (dbKind === "tablesdb") return SERVERLESS_DATABASE_SPEC_ID;
	return trimmed || "";
}
function DatabaseSpecificationCard({ projectId, databaseId, dbKind, database, canWrite }) {
	const t = useT();
	const queryClient = useQueryClient();
	const { project } = useProject(projectId);
	const { plan: organizationPlan } = useOrganizationPlan(project?.teamId);
	const regionSupportsDedicatedCompute = projectSupportsDedicatedDatabaseCompute(project?.region);
	const planSupportsDedicatedCompute = planSupportsDedicatedDatabases(organizationPlan);
	const { data: specificationsData, isSuccess: specificationsLoaded } = useDatabaseSpecifications(projectId, dedicatedDatabaseSourceFromRouteKind(dbKind));
	const apiSpecs = useMemo(() => mapDedicatedDatabaseSpecifications(specificationsData?.specifications), [specificationsData?.specifications]);
	const currentSpecId = resolveCurrentSpecId(dbKind, database.specification);
	const currentIsServerless = isServerlessDatabaseSpecId(currentSpecId);
	const specs = useMemo(() => {
		if (dbKind !== "tablesdb") return apiSpecs;
		return [SERVERLESS_SPEC_OPTION, ...apiSpecs];
	}, [apiSpecs, dbKind]);
	const currentSpecIndex = useMemo(() => specs.findIndex((spec) => {
		if (currentIsServerless) return isServerlessDatabaseSpecId(spec.id);
		return spec.id === currentSpecId;
	}), [
		currentIsServerless,
		currentSpecId,
		specs
	]);
	const upgradeMutation = useMutation({
		mutationFn: (specification) => updateProductDatabaseSpecification(projectId, databaseId, dbKind, specification, database.specification, database.name),
		onSuccess: async () => {
			seedDatabaseProductRouteKind(projectId, databaseId, dbKind);
			invalidateDatabaseModel(projectId, databaseId);
			await Promise.all([queryClient.invalidateQueries({ queryKey: [
				"database",
				"project",
				projectId,
				databaseId
			] }), refetchProjectDatabaseLists(queryClient, projectId)]);
			toast.success(currentIsServerless ? t("Migration to dedicated compute started") : t("Compute tier update started"));
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to update compute tier")));
		}
	});
	if (!regionSupportsDedicatedCompute) return /* @__PURE__ */ jsx("div", {
		"data-card-id": "specification",
		className: "rounded-xl border border-border bg-card/50 overflow-hidden opacity-80",
		children: /* @__PURE__ */ jsxs("div", {
			className: "px-6 py-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Specification")
				}), /* @__PURE__ */ jsx(DedicatedDatabaseRegionUnavailableBadge, {})]
			}), /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground mt-2",
				children: formatDedicatedDatabaseRegionUnavailableDescription(t)
			})]
		})
	});
	if (planSupportsDedicatedCompute === false) return /* @__PURE__ */ jsx("div", {
		"data-card-id": "specification",
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: /* @__PURE__ */ jsxs("div", {
			className: "px-6 py-4",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Specification")
			}), /* @__PURE__ */ jsxs("p", {
				className: "text-[13px] text-muted-foreground mt-2",
				children: [
					t("Dedicated compute is not available on your current plan."),
					" ",
					/* @__PURE__ */ jsx(UpgradePlanLink, { orgId: project?.teamId }),
					" ",
					t("to unlock dedicated databases.")
				]
			})]
		})
	});
	if (dbKind !== "tablesdb" && specificationsLoaded && !hasEnabledDedicatedComputeOptions(apiSpecs)) return /* @__PURE__ */ jsx("div", {
		"data-card-id": "specification",
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: /* @__PURE__ */ jsxs("div", {
			className: "px-6 py-4",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-[15px] font-semibold text-foreground",
				children: t("Specification")
			}), /* @__PURE__ */ jsxs("p", {
				className: "text-[13px] text-muted-foreground mt-2",
				children: [
					t("Not available on your current plan."),
					" ",
					/* @__PURE__ */ jsx(UpgradePlanLink, { orgId: project?.teamId }),
					" ",
					t("to unlock this database type.")
				]
			})]
		})
	});
	return /* @__PURE__ */ jsxs("div", {
		"data-card-id": "specification",
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Specification")
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-[13px] text-muted-foreground",
					children: currentIsServerless ? t("Upgrade from serverless to a dedicated tier to reserve CPU, memory, and connection limits. Migrating applies with a brief read-only window during cutover.") : t("Change the compute tier for this database. Upgrades apply with zero downtime via rolling cutover.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs(Table, { children: [/* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, {
				className: "hover:bg-transparent border-b border-border bg-muted/40",
				children: [
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-6 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Tier")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: "CPU"
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Memory")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: t("Connections")
					}),
					/* @__PURE__ */ jsx(TableHead, {
						className: "px-4 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end",
						children: t("Price")
					}),
					/* @__PURE__ */ jsx(TableHead, { className: "px-6 py-3 text-[12px] font-semibold text-muted-foreground uppercase tracking-wider text-end w-[120px]" })
				]
			}) }), /* @__PURE__ */ jsx(TableBody, { children: specs.map((spec, index) => {
				const isCurrent = currentIsServerless ? isServerlessDatabaseSpecId(spec.id) : spec.id === currentSpecId;
				const locked = spec.comingSoon === true;
				const canUpgrade = canWrite && !locked && !isCurrent && !(currentSpecIndex >= 0 && index < currentSpecIndex) && !isServerlessDatabaseSpecId(spec.id) && (currentSpecIndex < 0 || index > currentSpecIndex) && (dbKind === "tablesdb" || dbKind === "documentsdb" || dbKind === "vectorsdb");
				return /* @__PURE__ */ jsxs(TableRow, {
					className: cn("border-b border-border last:border-b-0", isCurrent && "bg-primary/5"),
					children: [
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-6 py-3",
							children: /* @__PURE__ */ jsxs("span", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-[13px] font-medium text-foreground",
										children: isServerlessDatabaseSpecId(spec.id) ? t(spec.label) : spec.label
									}),
									isCurrent ? /* @__PURE__ */ jsx(Badge, {
										variant: "success",
										className: "text-[10px] shrink-0",
										children: t("Current")
									}) : null,
									locked ? /* @__PURE__ */ jsx(Badge, {
										variant: "inactive",
										className: "text-[10px] shrink-0",
										children: t("Coming soon")
									}) : null
								]
							})
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3 text-[13px] text-muted-foreground",
							children: spec.cpu
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3 text-[13px] text-muted-foreground",
							children: spec.memory
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3 text-[13px] tabular-nums text-muted-foreground",
							children: spec.connections
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-4 py-3 text-end text-[13px] font-medium tabular-nums text-foreground",
							children: isServerlessDatabaseSpecId(spec.id) ? /* @__PURE__ */ jsx(ServerlessSpecPrice, { plan: organizationPlan }) : spec.price
						}),
						/* @__PURE__ */ jsx(TableCell, {
							className: "px-6 py-3 text-end",
							children: canUpgrade ? /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: "h-8 text-[12px]",
								disabled: upgradeMutation.isPending,
								onClick: () => upgradeMutation.mutate(spec.id),
								children: t("Upgrade")
							}) : null
						})
					]
				}, spec.id);
			}) })] }),
			hasLockedDatabaseSpecifications(specs) ? /* @__PURE__ */ jsx("div", {
				className: "px-6 py-3",
				children: /* @__PURE__ */ jsx(SpecificationsUpgradeNote, {
					orgId: project?.teamId,
					showContactSales: true
				})
			}) : null
		]
	});
}
function View() {
	const { projectId, databaseId, dbKind, database, canWrite, isLoading } = useDatabaseSettingsPage();
	useScrollToCard();
	if (isLoading) return /* @__PURE__ */ jsx(DatabaseSettingsLoading, {});
	if (!database) return null;
	return /* @__PURE__ */ jsx(SettingsCardsList, { cards: [{
		id: "specification",
		search: {
			title: "Specification",
			keywords: [
				"tier",
				"cpu",
				"memory",
				"upgrade",
				"specification",
				"price",
				"serverless",
				"connections",
				"compute"
			]
		},
		node: /* @__PURE__ */ jsx(DatabaseSpecificationCard, {
			projectId,
			databaseId,
			dbKind,
			database,
			canWrite
		})
	}] });
}
var SplitComponent = View;
export { SplitComponent as component };
