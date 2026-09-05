import { n as useT } from "./translate-DZcqveGn.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { i as isDeploymentInProgress, n as getDeploymentStatusBadge } from "./deployment-status-gtgbrodz.js";
import { jsx, jsxs } from "react/jsx-runtime";
function getActiveDeploymentCreatedAt(resource) {
	return resource.deploymentCreatedAt || resource.latestDeploymentCreatedAt || void 0;
}
function resourceHasInProgressDeployment(resource) {
	return isDeploymentInProgress(resource.latestDeploymentStatus ?? "");
}
function resourceHasVisibleStatus(resource) {
	if (resource.enabled === false) return true;
	if (!resource.live) return true;
	const deploymentStatus = resource.latestDeploymentStatus;
	if (!deploymentStatus) return false;
	const deploymentBadge = getDeploymentStatusBadge(deploymentStatus, resource.latestDeploymentCreatedAt);
	return deploymentBadge.badgeVariant === "failed" || deploymentBadge.badgeVariant === "deploymentBuilding" || deploymentBadge.badgeVariant === "pending";
}
function DeploymentResourceStatusBadges({ resource }) {
	const t = useT();
	const badgeClassName = "gap-1.5 text-[11px] font-medium border px-2 py-0.5";
	if (resource.enabled === false) return /* @__PURE__ */ jsx(Badge, {
		variant: "error",
		className: badgeClassName,
		children: t("Disabled")
	});
	const badges = [];
	const deploymentStatus = resource.latestDeploymentStatus;
	if (deploymentStatus) {
		const deploymentBadge = getDeploymentStatusBadge(deploymentStatus, resource.latestDeploymentCreatedAt);
		if (deploymentBadge.badgeVariant === "failed" || deploymentBadge.badgeVariant === "deploymentBuilding" || deploymentBadge.badgeVariant === "pending") {
			const StatusIcon = deploymentBadge.icon;
			badges.push(/* @__PURE__ */ jsxs(Badge, {
				variant: deploymentBadge.badgeVariant,
				className: badgeClassName,
				children: [/* @__PURE__ */ jsx(StatusIcon, { className: "h-3 w-3" }), t(deploymentBadge.label)]
			}, "deployment"));
		}
	}
	if (!resource.live) badges.push(/* @__PURE__ */ jsx(Badge, {
		variant: "warning",
		className: badgeClassName,
		children: t("Redeploy")
	}, "redeploy"));
	if (badges.length === 0) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "flex flex-wrap items-center gap-1.5",
		children: badges
	});
}
export { resourceHasVisibleStatus as i, getActiveDeploymentCreatedAt as n, resourceHasInProgressDeployment as r, DeploymentResourceStatusBadges as t };
