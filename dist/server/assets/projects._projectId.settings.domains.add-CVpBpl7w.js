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
import { fc as useCreateDomain, hc as useVerifyDomain, pc as useDeleteDomain } from "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
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
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import "./tabs-XaWkg9jR.js";
import "./context-menu-D55xedo-.js";
import { t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import "./table-CsPM4E9L.js";
import "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import "./alert-BTaNwkUC.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import { t as Route } from "./projects._projectId.settings.domains.add-DEFRdpYa.js";
import { r as isValidDomain, t as ensureApexDomainInOrganization } from "./proxy-domains-BLLl99AI.js";
import { n as dnsPendingVerificationError, t as VerifyDomainContent } from "./VerifyDomainContent-1Al8Q-I5.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
function AddDomainWizard({ initialDomain } = {}) {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { project } = useProject(projectId);
	const region = project?.region;
	const createMutation = useCreateDomain(projectId, region);
	const verifyMutation = useVerifyDomain(projectId, region);
	const deleteMutation = useDeleteDomain(projectId, region);
	const [domain, setDomain] = useState(initialDomain ?? "");
	const [error, setError] = useState("");
	const [rule, setRule] = useState(null);
	const [verificationError, setVerificationError] = useState(null);
	const fallbackPath = `/projects/${projectId}/settings/domains`;
	const isPending = createMutation.isPending || verifyMutation.isPending;
	const handleSubmit = async (e) => {
		e.preventDefault();
		const d = domain.trim().toLowerCase();
		setError("");
		if (!d) {
			setError(t("Required"));
			return;
		}
		if (!isValidDomain(d)) {
			setError(t("Invalid format"));
			return;
		}
		try {
			if (project?.teamId) await ensureApexDomainInOrganization(project.teamId, d);
		} catch (err) {
			if (err?.type !== "domain_already_exists") {
				toast.error(t("Failed to register domain"));
				return;
			}
		}
		try {
			const created = await createMutation.mutateAsync(d);
			if (created.status === "verified") {
				await queryClient.refetchQueries({ queryKey: [
					"proxy-rules",
					"project",
					projectId
				] });
				toast.success(t("Domain verified successfully"));
				navigate({
					to: "/projects/$projectId/settings/domains",
					params: { projectId }
				});
			} else if (created.status === "verifying") {
				await queryClient.refetchQueries({ queryKey: [
					"proxy-rules",
					"project",
					projectId
				] });
				toast.success(t("Verification in progress"));
				navigate({
					to: "/projects/$projectId/settings/domains",
					params: { projectId }
				});
			} else setRule(created);
		} catch (err) {
			toast.error(err instanceof Error ? err.message : t("Failed to add domain"));
		}
	};
	const handleVerify = async () => {
		if (!rule) return;
		setVerificationError(null);
		try {
			const updated = await verifyMutation.mutateAsync(rule.$id);
			if (updated.status === "verified") {
				await queryClient.refetchQueries({ queryKey: [
					"proxy-rules",
					"project",
					projectId
				] });
				toast.success(t("Domain verified successfully"));
				navigate({
					to: "/projects/$projectId/settings/domains",
					params: { projectId }
				});
			} else if (updated.status === "created" || updated.status === "unverified") setVerificationError(dnsPendingVerificationError(t));
			else {
				await queryClient.refetchQueries({ queryKey: [
					"proxy-rules",
					"project",
					projectId
				] });
				toast.success(t("Verification in progress"));
				navigate({
					to: "/projects/$projectId/settings/domains",
					params: { projectId }
				});
			}
		} catch {
			setVerificationError(dnsPendingVerificationError(t));
		}
	};
	const handleChange = async () => {
		if (!rule) return;
		setVerificationError(null);
		try {
			await deleteMutation.mutateAsync(rule.$id);
			setRule(null);
		} catch {
			toast.error(t("Failed to remove domain"));
		}
	};
	if (rule) return /* @__PURE__ */ jsx(WizardLayout, {
		title: t("Verify domain"),
		fallbackPath,
		fullscreen: true,
		useSidebar: false,
		maxWidth: "max-w-4xl",
		footer: /* @__PURE__ */ jsxs("div", {
			className: "flex gap-2 justify-end w-full",
			children: [/* @__PURE__ */ jsx(Button, {
				variant: "outline",
				onClick: handleChange,
				disabled: isPending,
				children: t("Change")
			}), /* @__PURE__ */ jsx(Button, {
				onClick: handleVerify,
				disabled: isPending,
				children: t("Verify")
			})]
		}),
		children: /* @__PURE__ */ jsx(VerifyDomainContent, {
			rule,
			region,
			verificationError
		})
	});
	return /* @__PURE__ */ jsx(WizardLayout, {
		title: t("Add API domain"),
		fallbackPath,
		fullscreen: true,
		useSidebar: false,
		maxWidth: "max-w-4xl",
		footer: /* @__PURE__ */ jsxs("div", {
			className: "flex gap-2 justify-end w-full",
			children: [/* @__PURE__ */ jsx(Button, {
				variant: "outline",
				onClick: () => navigate({
					to: "/projects/$projectId/settings/domains",
					params: { projectId }
				}),
				disabled: isPending,
				children: t("Cancel")
			}), /* @__PURE__ */ jsx(Button, {
				onClick: handleSubmit,
				disabled: isPending || !domain.trim(),
				children: t("Add")
			})]
		}),
		children: /* @__PURE__ */ jsx("form", {
			onSubmit: handleSubmit,
			className: "space-y-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "px-6 py-4",
						children: /* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Domain")
						})
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "domain",
								className: "text-[12px] font-medium",
								children: t("Domain name")
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "domain",
								placeholder: "api.example.com",
								value: domain,
								onChange: (e) => {
									setDomain(e.target.value);
									setError("");
								},
								className: `font-mono mt-1.5 ${error ? "border-destructive" : ""}`,
								autoFocus: true,
								disabled: createMutation.isPending
							}),
							error && /* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-destructive mt-1",
								children: error
							})
						]
					})
				]
			})
		})
	});
}
function AddDomainWizardPage() {
	const { domain } = Route.useSearch();
	return /* @__PURE__ */ jsx(AddDomainWizard, { initialDomain: domain });
}
export { AddDomainWizardPage as component };
