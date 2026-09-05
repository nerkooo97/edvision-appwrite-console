function getErrorCandidate(error) {
	if (!error || typeof error !== "object") return null;
	return error;
}
function isUsageHistoryLimitExceededError(error) {
	if (isUsageAddonNotFoundError(error)) return false;
	const candidate = getErrorCandidate(error);
	if (!candidate) return false;
	if ((candidate.code ?? candidate.status) === 402) return true;
	if (candidate.type === "limit_history_exceeded") return true;
	const message = typeof candidate.message === "string" ? candidate.message.toLowerCase() : "";
	return message.includes("log retention") || message.includes("limit_history_exceeded") || message.includes("history has been exceeded");
}
function isUsageAddonNotFoundError(error) {
	const candidate = getErrorCandidate(error);
	if (!candidate) return false;
	if (candidate.type === "addon_not_found") return true;
	const message = typeof candidate.message === "string" ? candidate.message.toLowerCase() : "";
	return message.includes("addon_not_found") || message.includes("addon not found");
}
function shouldSuppressUsageChartRetry(copy) {
	return copy.isRetentionLimit || copy.isAddonNotFound;
}
function resolveUsageChartErrorCopy(error, retentionDays, fallback) {
	if (isUsageAddonNotFoundError(error)) return {
		title: "Premium Geo DB required",
		message: "Enable the Premium Geo DB addon for this project to view city and country usage breakdowns.",
		isRetentionLimit: false,
		isAddonNotFound: true
	};
	if (!isUsageHistoryLimitExceededError(error)) return {
		title: fallback.title,
		message: fallback.message,
		isRetentionLimit: false,
		isAddonNotFound: false
	};
	return {
		title: "Date range exceeds log retention",
		message: fallback.message,
		retentionDays,
		isRetentionLimit: true,
		isAddonNotFound: false
	};
}
export { shouldSuppressUsageChartRetry as i, isUsageHistoryLimitExceededError as n, resolveUsageChartErrorCopy as r, isUsageAddonNotFoundError as t };
