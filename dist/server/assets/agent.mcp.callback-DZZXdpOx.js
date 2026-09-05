import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { h as fetchConsoleAccount } from "./sdk-DjIJ_hjn.js";
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
import { Nt as resolvePostAuthOrganizationId } from "./auth-BPuxYQAc.js";
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
import { c as preferredOrganizationId, o as agentSettingsPath, p as parseMcpOAuthCallbackSearch, u as ASSISTANT_MCP_OAUTH_MESSAGE_TYPE } from "./agent-paths-CTRM_FvO.js";
import { t as Route$1 } from "./agent.mcp.callback-DPnoxF4-.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
function AgentMcpOAuthCallbackPage() {
	const t = useT();
	const search = Route$1.useSearch();
	const message = useMemo(() => parseMcpOAuthCallbackSearch(search), [search]);
	const [posted, setPosted] = useState(false);
	useEffect(() => {
		const payload = message;
		if (window.opener && !window.opener.closed) {
			window.opener.postMessage(payload, window.location.origin);
			setPosted(true);
			window.setTimeout(() => {
				window.close();
			}, 400);
			return;
		}
		if (payload.type === "assistant-mcp-oauth") sessionStorage.setItem("assistant.mcp.oauth.callback", JSON.stringify(payload));
		setPosted(true);
		window.setTimeout(() => {
			(async () => {
				try {
					const account = await fetchConsoleAccount();
					const orgId = preferredOrganizationId(account.prefs) ?? await resolvePostAuthOrganizationId(account);
					window.location.replace(agentSettingsPath(orgId, "mcp"));
				} catch {
					window.location.replace("/agent/settings/mcp");
				}
			})();
		}, 800);
	}, [message]);
	const isError = message.status === "error";
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-svh items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-sm rounded-xl border border-border bg-card p-6 text-center",
			children: [
				isError ? /* @__PURE__ */ jsx(XCircle, { className: "mx-auto h-8 w-8 text-destructive" }) : posted ? /* @__PURE__ */ jsx(CheckCircle2, { className: "mx-auto h-8 w-8 text-green-600" }) : /* @__PURE__ */ jsx(Loader2, { className: "mx-auto h-8 w-8 animate-spin text-muted-foreground" }),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-3 text-[15px] font-semibold text-foreground",
					children: isError ? t("MCP connection failed") : posted ? t("MCP connected") : t("Connecting MCP...")
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-[13px] text-muted-foreground",
					children: isError ? message.errorDescription || message.error : t("You can close this window and return to the console.")
				})
			]
		})
	});
}
export { AgentMcpOAuthCallbackPage as component };
