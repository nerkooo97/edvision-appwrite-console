import { access, readFile } from "node:fs/promises";
import path from "node:path";
var CLIENT_DIR = path.join(process.cwd(), "dist/client");
function getClientStaticFile(relativePath) {
	return path.join(CLIENT_DIR, relativePath);
}
async function respondWithClientStaticFile(relativePath, contentType) {
	const filepath = getClientStaticFile(relativePath);
	try {
		await access(filepath);
	} catch {
		return new Response("Not found", { status: 404 });
	}
	const headers = {
		"Content-Type": contentType,
		"Cache-Control": "public, max-age=3600"
	};
	if (typeof Bun !== "undefined") return new Response(Bun.file(filepath).stream(), { headers });
	const body = await readFile(filepath);
	return new Response(body, { headers });
}
export { respondWithClientStaticFile as n, getClientStaticFile as t };
