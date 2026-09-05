import { Gh as postgresDatabaseQueryOptions } from "./hooks-BONwG3Mt.js";
import { T as projectQueryOptions } from "./projects-BaTJenfQ.js";
async function prefetchPostgresShellData(queryClient, projectId, databaseId) {
	await queryClient.ensureQueryData(projectQueryOptions(projectId));
	return { database: await queryClient.ensureQueryData(postgresDatabaseQueryOptions(projectId, databaseId)) };
}
export { prefetchPostgresShellData as t };
