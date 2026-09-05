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
import "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import { Qt as dedicatedDatabaseSourceFromRouteKind, S as dedicatedDatabaseByIdQueryOptions, wt as useProjectDatabase } from "./databases-Dh0pwZ6h.js";
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
import "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import "./table-CsPM4E9L.js";
import "./badge-L9aO6DfA.js";
import "./label-D8nNLJBa.js";
import "./switch-D-U5gDIQ.js";
import "./skeleton-8d0Q_D56.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import "./alert-BTaNwkUC.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import "./tooltip-DUssQZhw.js";
import "./utils-DMkzhjmw.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./radio-group-aZurL4eE.js";
import "./progress-DDUqzOsb.js";
import { i as productDedicatedEngineHints, n as canConfigureDedicatedReplication } from "./database-compute-CWpwADg-.js";
import "./useViewportPanZoom-COUwlx3T.js";
import "./SchemaVisualizerRelationshipEdges-DLVYWLVz.js";
import "./RefreshButton-BA9lQ7jC.js";
import "./DatabaseClusterPreview-Cx1tFSPT.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import "./alert-dialog-CRQIrNDu.js";
import "./DatabaseOperationsLockContext-B72U5wFZ.js";
import { n as DatabaseSettingsLoading, t as useDatabaseSettingsPage } from "./useDatabaseSettingsPage-nyiksSB_.js";
import { a as PostgresDatabaseSyncModeCard, r as PostgresDatabaseReplicasCard } from "./PostgresDatabaseConfigSettings-DqzprKQJ.js";
import { t as PostgresDatabasePrimaryCard } from "./PostgresDatabasePrimaryCard-D6BDoP9E.js";
import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
function toReplicationDatabase(dedicated, product, fallbackEngine) {
	if (dedicated?.$id) return dedicated;
	if (!product?.$id) return null;
	return {
		$id: product.$id,
		name: product.name,
		status: product.status ?? "ready",
		replicas: typeof product.replicas === "number" ? product.replicas : 0,
		syncMode: "async",
		engine: fallbackEngine,
		api: "tablesdb",
		specification: ""
	};
}
function View() {
	const t = useT();
	const { projectId, databaseId, dbKind, canWrite, isLoading } = useDatabaseSettingsPage();
	const { database: productDatabase } = useProjectDatabase(projectId, databaseId, dbKind);
	const engineHints = useMemo(() => productDedicatedEngineHints(dbKind), [dbKind]);
	const { data: dedicated, isLoading: dedicatedLoading } = useQuery(dedicatedDatabaseByIdQueryOptions(projectId, databaseId, {
		type: "product",
		dbKind
	}));
	if (isLoading || dedicatedLoading) return /* @__PURE__ */ jsx(DatabaseSettingsLoading, {});
	const productHints = {
		$id: productDatabase?.$id,
		name: productDatabase?.name,
		databaseType: dbKind,
		status: productDatabase?.status,
		replicas: productDatabase?.replicas,
		specification: productDatabase?.specification
	};
	if (!canConfigureDedicatedReplication(productHints, dedicated)) return /* @__PURE__ */ jsx(EmptyState, {
		title: t("Replication is available on dedicated databases"),
		description: t("Upgrade this database to a dedicated specification to configure read replicas and failover.")
	});
	const database = toReplicationDatabase(dedicated, {
		$id: productDatabase?.$id ?? databaseId,
		name: productDatabase?.name ?? databaseId,
		status: productHints.status,
		replicas: productHints.replicas
	}, engineHints[0] || "postgresql");
	if (!database) return null;
	const cardProps = {
		projectId,
		databaseId,
		database,
		canWrite,
		replicationSource: dedicatedDatabaseSourceFromRouteKind(dbKind),
		haEngine: dedicated?.engine || engineHints[0] || "postgresql"
	};
	return /* @__PURE__ */ jsx(SettingsCardsList, { cards: [
		{
			id: "replicas",
			search: {
				title: "Read replicas",
				keywords: [
					"replica",
					"replicas",
					"failover",
					"ha",
					"topology",
					"cluster"
				]
			},
			node: /* @__PURE__ */ jsx(PostgresDatabaseReplicasCard, { ...cardProps })
		},
		...database.replicas && database.replicas > 0 ? [{
			id: "primary",
			search: {
				title: "Primary instance",
				keywords: [
					"primary",
					"main",
					"leader",
					"failover",
					"promote",
					"promotion"
				]
			},
			node: /* @__PURE__ */ jsx(PostgresDatabasePrimaryCard, { ...cardProps })
		}] : [],
		{
			id: "sync-mode",
			search: {
				title: "Sync mode",
				keywords: [
					"sync",
					"async",
					"synchronous",
					"quorum",
					"replication"
				]
			},
			node: /* @__PURE__ */ jsx(PostgresDatabaseSyncModeCard, { ...cardProps })
		}
	] });
}
var SplitComponent = View;
export { SplitComponent as component };
