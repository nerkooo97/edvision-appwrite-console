import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
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
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import { In as buildFunctionUpdateParams, wr as useProjectFunction } from "./affiliates-BOg1SHC6.js";
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
import "./input-yKHNPhDZ.js";
import "./context-menu-D55xedo-.js";
import "./table-CsPM4E9L.js";
import "./badge-L9aO6DfA.js";
import "./label-D8nNLJBa.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./EmptyState-DZDwceHm.js";
import "./dropdown-menu-DH51wH-m.js";
import "./overlay-lock-CIY7GeXu.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./console-project-scopes-nd4nTLJF.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import "./checkbox-r_hqIB3d.js";
import "./accordion-DmQmnCa5.js";
import "./separator-B2hXZdKL.js";
import { t as ScopeEditor } from "./ScopeEditor-DGe3mP1w.js";
import "./avatar-DsYcfNc5.js";
import { t as PermissionsEditor } from "./PermissionsEditor-DzrUP0TS.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
function View() {
	const t = useT();
	const { projectId, functionId } = useParams({ strict: false });
	const queryClient = useQueryClient();
	const { data: func, isLoading: funcLoading } = useProjectFunction(projectId, functionId);
	const [execute, setExecute] = useState([]);
	const [scopes, setScopes] = useState(null);
	useEffect(() => {
		if (func) {
			setExecute(func.execute || []);
			setScopes(func.scopes || []);
		}
	}, [func]);
	const updateFunctionMutation = useMutation({
		mutationFn: async (updates) => {
			if (!projectId || !functionId || !func) throw new Error("Project ID, Function ID, and Function are required");
			return await sdk.forProject(projectId).functions.update(buildFunctionUpdateParams(func, updates));
		},
		onSuccess: (updated) => {
			toast.success(t("Function updated successfully"));
			queryClient.setQueryData([
				"function",
				"project",
				projectId,
				functionId
			], updated);
			queryClient.invalidateQueries({ queryKey: [
				"functions",
				"project",
				projectId
			] });
		},
		onError: (error) => {
			toast.error(error.message || t("Failed to update function"));
		}
	});
	const handleSaveExecute = () => {
		updateFunctionMutation.mutate({ execute });
	};
	const handleSaveScopes = () => {
		updateFunctionMutation.mutate({ scopes: scopes || void 0 });
	};
	const arraysEqual = (a, b) => {
		if (a.length !== b.length) return false;
		return a.every((val, idx) => val === b[idx]);
	};
	const scopesChanged = useMemo(() => {
		if (scopes === null || !func?.scopes) return false;
		const original = new Set(func.scopes || []);
		const current = new Set(scopes);
		if (original.size !== current.size) return true;
		for (const scope of original) if (!current.has(scope)) return true;
		for (const scope of current) if (!original.has(scope)) return true;
		return false;
	}, [scopes, func?.scopes]);
	if (funcLoading && !func) return /* @__PURE__ */ jsx("div", {
		className: "rounded-lg border border-border bg-card py-12 text-center",
		children: /* @__PURE__ */ jsx("p", {
			className: "text-[13px] text-muted-foreground",
			children: t("Loading security settings...")
		})
	});
	return /* @__PURE__ */ jsx("div", {
		className: "flex-1",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 sm:pb-6 pt-4 sm:pt-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Permissions")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-muted-foreground mt-2",
								children: t("Choose who can execute this function")
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4",
							children: /* @__PURE__ */ jsx(PermissionsEditor, {
								permissions: execute,
								onPermissionsChange: setExecute,
								projectId,
								executeOnly: true
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30",
							children: /* @__PURE__ */ jsx(Button, {
								size: "sm",
								className: "h-9 text-[13px]",
								disabled: arraysEqual(execute, func?.execute || []) || updateFunctionMutation.isPending,
								onClick: handleSaveExecute,
								children: t("Update")
							})
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-[15px] font-semibold text-foreground",
								children: t("Scopes")
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-[13px] text-muted-foreground mt-2",
								children: [
									t("Select scopes to grant the dynamic key generated temporarily for your function. It is best practice to allow only necessary permissions."),
									" ",
									/* @__PURE__ */ jsx(DocsRouteLink, {
										className: "link-neutral",
										href: "/docs/advanced/platform/api-keys#scopes",
										children: t("Learn more")
									})
								]
							})]
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4",
							children: scopes !== null ? /* @__PURE__ */ jsx(ScopeEditor, {
								value: scopes,
								onChange: setScopes,
								disabled: updateFunctionMutation.isPending
							}) : /* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-muted-foreground",
								children: t("Loading scopes...")
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30",
							children: /* @__PURE__ */ jsx(Button, {
								size: "sm",
								className: "h-9 text-[13px]",
								disabled: !scopesChanged || scopes === null || updateFunctionMutation.isPending,
								onClick: handleSaveScopes,
								children: t("Update")
							})
						})
					]
				})]
			})
		})
	});
}
var SplitComponent = View;
export { SplitComponent as component };
