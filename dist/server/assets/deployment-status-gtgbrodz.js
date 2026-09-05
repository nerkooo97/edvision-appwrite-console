import { AlertCircle, CheckCircle2, CircleDashed, Clock } from "lucide-react";
const DEPLOYMENT_TABLE_STATUS_COLUMN_CLASS = "w-[7.75rem] min-w-[7.75rem] max-w-[7.75rem]";
var DEPLOYMENT_TIMEOUT_MS = 1800 * 1e3;
function isDeploymentTimeout(status, createdAt) {
	if (status === "ready" || status === "failed" || status === "canceled" || status === "cancelled") return false;
	if (!createdAt) return false;
	try {
		const createdTime = new Date(createdAt).getTime();
		return Date.now() - createdTime >= DEPLOYMENT_TIMEOUT_MS;
	} catch {
		return false;
	}
}
function getDeploymentStatusBadge(status, createdAt) {
	if (isDeploymentTimeout(status, createdAt)) return {
		label: "Timeout",
		badgeVariant: "failed",
		icon: AlertCircle
	};
	const statusInfo = {
		ready: {
			label: "Ready",
			badgeVariant: "deploymentReady",
			icon: CheckCircle2
		},
		building: {
			label: "Building",
			badgeVariant: "deploymentBuilding",
			icon: CircleDashed
		},
		processing: {
			label: "Processing",
			badgeVariant: "deploymentBuilding",
			icon: CircleDashed
		},
		waiting: {
			label: "Waiting",
			badgeVariant: "pending",
			icon: Clock
		},
		failed: {
			label: "Failed",
			badgeVariant: "failed",
			icon: AlertCircle
		},
		canceled: {
			label: "Canceled",
			badgeVariant: "pending",
			icon: AlertCircle
		},
		cancelled: {
			label: "Canceled",
			badgeVariant: "pending",
			icon: AlertCircle
		},
		timeout: {
			label: "Timeout",
			badgeVariant: "failed",
			icon: AlertCircle
		}
	}[status] || {
		label: status,
		badgeVariant: "pending",
		icon: Clock
	};
	return {
		label: statusInfo.label,
		badgeVariant: statusInfo.badgeVariant,
		icon: statusInfo.icon
	};
}
function isDeploymentInProgress(status) {
	return status === "building" || status === "processing" || status === "waiting";
}
function isDeploymentCompleted(status) {
	return status === "ready" || status === "failed";
}
export { isDeploymentTimeout as a, isDeploymentInProgress as i, getDeploymentStatusBadge as n, isDeploymentCompleted as r, DEPLOYMENT_TABLE_STATUS_COLUMN_CLASS as t };
