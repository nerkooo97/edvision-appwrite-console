import { n as useT } from "./translate-DZcqveGn.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { n as getDeploymentStatusBadge } from "./deployment-status-gtgbrodz.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { GitBranch, GitCommit } from "lucide-react";
function DeploymentInfo({ deployment, showStatus = false, compact = false }) {
	const t = useT();
	const statusBadge = showStatus ? getDeploymentStatusBadge(deployment.status, deployment.$createdAt) : null;
	if (compact) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-lg border border-border bg-muted/30 p-3 space-y-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2 flex-wrap",
			children: [
				/* @__PURE__ */ jsx(CopyableId, {
					id: deployment.$id,
					size: "xs"
				}),
				deployment.providerCommitHash && /* @__PURE__ */ jsx("span", {
					className: "text-[11px] text-muted-foreground font-mono",
					children: deployment.providerCommitHash.slice(0, 7)
				}),
				statusBadge && /* @__PURE__ */ jsxs(Badge, {
					variant: statusBadge.badgeVariant,
					className: "gap-1.5 text-[11px] font-medium h-5 px-2",
					children: [(() => {
						const StatusIcon = statusBadge.icon;
						return /* @__PURE__ */ jsx(StatusIcon, { className: "h-3 w-3" });
					})(), t(statusBadge.label)]
				})
			]
		}), (deployment.providerBranch || deployment.providerCommitAuthor || deployment.providerCommitMessage || deployment.$createdAt) && /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-1.5 text-[11px] text-muted-foreground",
			children: [
				deployment.providerBranch && /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ jsx(GitBranch, { className: "h-3 w-3 shrink-0" }), /* @__PURE__ */ jsx("span", {
						className: "truncate",
						children: deployment.providerBranch
					})]
				}),
				deployment.providerCommitAuthor && /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5 min-w-0",
					children: [/* @__PURE__ */ jsx("span", {
						className: "shrink-0",
						children: t("Committer")
					}), /* @__PURE__ */ jsx("span", {
						className: "truncate font-medium text-foreground",
						children: deployment.providerCommitAuthor
					})]
				}),
				deployment.providerCommitMessage && /* @__PURE__ */ jsxs("div", {
					className: "flex items-start gap-1.5",
					children: [/* @__PURE__ */ jsx(GitCommit, { className: "h-3 w-3 shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", {
						className: "line-clamp-2",
						children: deployment.providerCommitMessage
					})]
				}),
				deployment.$createdAt && /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ jsx("span", { children: t("Deployed") }), /* @__PURE__ */ jsx(DateTooltip, { date: deployment.$createdAt })]
				})
			]
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-lg border border-border bg-muted/30 p-4 space-y-3",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-2 flex-wrap",
			children: [
				/* @__PURE__ */ jsx(CopyableId, {
					id: deployment.$id,
					size: "xs"
				}),
				deployment.providerCommitHash && /* @__PURE__ */ jsx("span", {
					className: "text-[11px] text-muted-foreground font-mono",
					children: deployment.providerCommitHash.slice(0, 7)
				}),
				statusBadge && /* @__PURE__ */ jsxs(Badge, {
					variant: statusBadge.badgeVariant,
					className: "gap-1.5 text-[11px] font-medium h-5 px-2",
					children: [(() => {
						const StatusIcon = statusBadge.icon;
						return /* @__PURE__ */ jsx(StatusIcon, { className: "h-3 w-3" });
					})(), t(statusBadge.label)]
				})
			]
		}), (deployment.providerBranch || deployment.providerCommitAuthor || deployment.providerCommitMessage || deployment.$createdAt) && /* @__PURE__ */ jsxs("div", {
			className: "space-y-2 text-[12px]",
			children: [
				deployment.providerBranch && /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ jsx(GitBranch, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0" }),
						/* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: t("Branch:")
						}),
						/* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: deployment.providerBranch
						})
					]
				}),
				deployment.providerCommitAuthor && /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 min-w-0",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground shrink-0",
						children: t("Committer:")
					}), /* @__PURE__ */ jsx("span", {
						className: "font-medium text-foreground truncate",
						children: deployment.providerCommitAuthor
					})]
				}),
				deployment.providerCommitMessage && /* @__PURE__ */ jsxs("div", {
					className: "flex items-start gap-2",
					children: [/* @__PURE__ */ jsx(GitCommit, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: t("Commit:")
						}), /* @__PURE__ */ jsx("span", {
							className: "ms-1.5 text-foreground whitespace-pre-wrap break-words",
							children: deployment.providerCommitMessage
						})]
					})]
				}),
				deployment.$createdAt && /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground",
						children: t("Deployed:")
					}), /* @__PURE__ */ jsx(DateTooltip, { date: deployment.$createdAt })]
				})
			]
		})]
	});
}
export { DeploymentInfo as t };
