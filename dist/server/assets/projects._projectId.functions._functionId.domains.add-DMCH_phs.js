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
import { hc as useVerifyDomain, pc as useDeleteDomain } from "./hooks-BONwG3Mt.js";
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
import { fr as useCreateFunctionDomainRule, wr as useProjectFunction } from "./affiliates-BOg1SHC6.js";
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
import { t as Input } from "./input-yKHNPhDZ.js";
import "./popover-BjTNxuf9.js";
import "./tabs-XaWkg9jR.js";
import "./select-BYGLGp-f.js";
import "./context-menu-D55xedo-.js";
import { t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import "./table-CsPM4E9L.js";
import "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./command-Cizl9kMJ.js";
import "./EmptyState-DZDwceHm.js";
import "./alert-BTaNwkUC.js";
import "./tooltip-DUssQZhw.js";
import "./use-console-profile-DiUZxZ_6.js";
import "./DocsRouteLink-cLPNKZ9F.js";
import "./providers-8aVvAoJZ.js";
import "./WarningAlert-ZIbpbrZO.js";
import "./use-installation-reconnect-BUTVp2Vb.js";
import "./BranchSelector-M6Yn8zIS.js";
import { t as DomainTargetCard } from "./DomainTargetCard-BGQga7QB.js";
import { r as isValidDomain, t as ensureApexDomainInOrganization } from "./proxy-domains-BLLl99AI.js";
import { n as dnsPendingVerificationError, t as VerifyDomainContent } from "./VerifyDomainContent-1Al8Q-I5.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
function AddDomainWizard() {
	const t = useT();
	const { projectId, functionId } = useParams({ strict: false });
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { project } = useProject(projectId);
	const { data: func } = useProjectFunction(projectId, functionId);
	const createMutation = useCreateFunctionDomainRule(projectId);
	const verifyMutation = useVerifyDomain(projectId, project?.region);
	const deleteMutation = useDeleteDomain(projectId, project?.region);
	const [domain, setDomain] = useState("");
	const [verificationError, setVerificationError] = useState(null);
	const [behaviour, setBehaviour] = useState("active");
	const [branch, setBranch] = useState("");
	const [redirectUrl, setRedirectUrl] = useState("");
	const [statusCode, setStatusCode] = useState("302");
	const [error, setError] = useState("");
	const [rule, setRule] = useState(null);
	const fallbackPath = `/projects/${projectId}/functions/${functionId}/domains`;
	const isPending = createMutation.isPending || verifyMutation.isPending || deleteMutation.isPending;
	const hasRepo = !!(func?.installationId && func?.providerRepositoryId);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const d = domain.trim().toLowerCase();
		setError("");
		if (!d) {
			setError(t("Required"));
			return;
		}
		if (!isValidDomain(d)) {
			setError(t("Invalid"));
			return;
		}
		if (behaviour === "branch" && !hasRepo) {
			toast.error(t("Connect repository first"));
			return;
		}
		if (behaviour === "branch" && !branch) {
			toast.error(t("Select branch"));
			return;
		}
		if (behaviour === "redirect" && !redirectUrl.trim()) {
			toast.error(t("Enter URL"));
			return;
		}
		if (behaviour === "redirect") try {
			new URL(redirectUrl.startsWith("http") ? redirectUrl : `https://${redirectUrl}`);
		} catch {
			toast.error(t("Invalid URL"));
			return;
		}
		try {
			await ensureApexDomainInOrganization(project?.teamId ?? "", d);
		} catch (err) {
			if (err?.type !== "domain_already_exists") {
				toast.error(t("Failed to register domain"));
				return;
			}
		}
		try {
			const created = await createMutation.mutateAsync({
				domain: d,
				functionId,
				behaviour,
				...behaviour === "branch" && { branch },
				...behaviour === "redirect" && {
					redirectUrl: redirectUrl.trim(),
					statusCode
				}
			});
			if (created.status === "verified") {
				await queryClient.refetchQueries({ queryKey: [
					"proxy-rules",
					"function",
					projectId,
					functionId
				] });
				toast.success(t("Domain verified"));
				navigate({
					to: "/projects/$projectId/functions/$functionId/domains",
					params: {
						projectId,
						functionId
					}
				});
			} else if (created.status === "verifying") {
				await queryClient.refetchQueries({ queryKey: [
					"proxy-rules",
					"function",
					projectId,
					functionId
				] });
				toast.success(t("Verification in progress"));
				navigate({
					to: "/projects/$projectId/functions/$functionId/domains",
					params: {
						projectId,
						functionId
					}
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
					"function",
					projectId,
					functionId
				] });
				toast.success(t("Domain verified"));
				navigate({
					to: "/projects/$projectId/functions/$functionId/domains",
					params: {
						projectId,
						functionId
					}
				});
			} else if (updated.status === "created" || updated.status === "unverified") setVerificationError(dnsPendingVerificationError(t));
			else {
				await queryClient.refetchQueries({ queryKey: [
					"proxy-rules",
					"function",
					projectId,
					functionId
				] });
				toast.success(t("Verification in progress"));
				navigate({
					to: "/projects/$projectId/functions/$functionId/domains",
					params: {
						projectId,
						functionId
					}
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
			region: project?.region,
			resourceType: "function",
			verificationError
		})
	});
	return /* @__PURE__ */ jsx(WizardLayout, {
		title: t("Add domain"),
		fallbackPath,
		fullscreen: true,
		useSidebar: false,
		maxWidth: "max-w-4xl",
		footer: /* @__PURE__ */ jsxs("div", {
			className: "flex gap-2 justify-end w-full",
			children: [/* @__PURE__ */ jsx(Button, {
				variant: "outline",
				onClick: () => navigate({
					to: "/projects/$projectId/functions/$functionId/domains",
					params: {
						projectId,
						functionId
					}
				}),
				disabled: isPending,
				children: t("Cancel")
			}), /* @__PURE__ */ jsx(Button, {
				onClick: handleSubmit,
				disabled: isPending || !domain.trim(),
				children: t("Add")
			})]
		}),
		children: /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSubmit,
			className: "space-y-6",
			children: [/* @__PURE__ */ jsxs("div", {
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
								className: "text-[12px]",
								children: t("Domain name")
							}),
							/* @__PURE__ */ jsx(Input, {
								placeholder: "my-function.example.com",
								value: domain,
								onChange: (e) => {
									setDomain(e.target.value);
									setError("");
								},
								className: `font-mono mt-1.5 ${error ? "border-destructive" : ""}`,
								disabled: createMutation.isPending
							}),
							error && /* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-destructive mt-1",
								children: error
							})
						]
					})
				]
			}), /* @__PURE__ */ jsx(DomainTargetCard, {
				behaviour,
				onBehaviourChange: setBehaviour,
				branch,
				onBranchChange: setBranch,
				redirectUrl,
				onRedirectUrlChange: setRedirectUrl,
				statusCode,
				onStatusCodeChange: setStatusCode,
				projectId,
				installationId: func?.installationId,
				providerRepositoryId: func?.providerRepositoryId,
				hasRepository: hasRepo,
				disabled: createMutation.isPending
			})]
		})
	});
}
function AddDomainWizardPage() {
	return /* @__PURE__ */ jsx(AddDomainWizard, {});
}
export { AddDomainWizardPage as component };
