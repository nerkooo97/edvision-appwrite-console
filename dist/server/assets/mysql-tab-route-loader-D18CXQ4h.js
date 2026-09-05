import { dp as mysqlDatabaseQueryOptions } from "./hooks-BONwG3Mt.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
async function prefetchMysqlShellData(queryClient, projectId, databaseId) {
	await queryClient.ensureQueryData(projectQueryOptions(projectId));
	return { database: await queryClient.ensureQueryData(mysqlDatabaseQueryOptions(projectId, databaseId)) };
}
export { prefetchMysqlShellData as t };
