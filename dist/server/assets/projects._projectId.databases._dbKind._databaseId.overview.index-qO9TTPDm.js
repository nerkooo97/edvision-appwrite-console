import { r as dbNavLink } from "./database-routes-DB_xKWuY.js";
import { t as Route } from "./projects._projectId.databases._dbKind._databaseId.overview.index-CtMvabBO.js";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
function OverviewIndexRedirect() {
	const { projectId, dbKind, databaseId } = Route.useParams();
	const navigate = useNavigate();
	useEffect(() => {
		navigate({
			...dbNavLink(dbKind).dataGrid({
				projectId,
				dbKind,
				databaseId,
				resourceId: "-"
			}),
			replace: true
		});
	}, [
		navigate,
		projectId,
		dbKind,
		databaseId
	]);
	return null;
}
export { OverviewIndexRedirect as component };
