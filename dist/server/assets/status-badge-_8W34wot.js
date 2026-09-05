function getStatusColor(status) {
	switch (status) {
		case "success":
		case "active":
		case "completed":
		case "verified": return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";
		case "error":
		case "failed":
		case "unverified": return "bg-red-500/10 text-red-600 dark:text-red-400";
		case "warning":
		case "pending": return "bg-amber-500/10 text-amber-600 dark:text-amber-400";
		case "processing": return "bg-blue-500/10 text-blue-600 dark:text-blue-400";
		case "info": return "bg-slate-500/10 text-slate-600 dark:text-slate-400";
		case "inactive":
		default: return "bg-muted text-muted-foreground";
	}
}
function getInvoiceStatusBadgeVariant(status) {
	switch (status) {
		case "paid": return "success";
		case "pending":
		case "due":
		case "requires_authentication": return "warning";
		case "overdue":
		case "failed": return "error";
		case "cancelled": return "info";
		default: return "info";
	}
}
function getPlanBadgeColor(plan) {
	switch (plan) {
		case "custom": return "bg-purple-500/10 text-purple-600 dark:text-purple-300";
		case "core": return "bg-blue-500/10 text-blue-700 dark:text-blue-300";
		case "pro":
		case "education": return "bg-emerald-500/10 text-emerald-900 dark:text-emerald-300";
		case "free":
		default: return "bg-muted text-muted-foreground";
	}
}
function getDomainStatusBadgeConfig(status) {
	switch (status) {
		case "verified": return {
			variant: "success",
			label: "Verified"
		};
		case "verifying": return {
			variant: "processing",
			label: "Generating certificate"
		};
		case "created": return {
			variant: "error",
			label: "Verification failed"
		};
		case "unverified": return {
			variant: "error",
			label: "Certificate generation failed"
		};
		default: return {
			variant: "processing",
			label: status
		};
	}
}
export { getStatusColor as i, getInvoiceStatusBadgeVariant as n, getPlanBadgeColor as r, getDomainStatusBadgeConfig as t };
