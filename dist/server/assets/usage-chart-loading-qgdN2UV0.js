function shouldShowUsageChartSkeleton(isError, isLoading, isPlaceholderData) {
	return !isError && (isLoading || isPlaceholderData);
}
function shouldShowUsageTabMetricSkeleton(isError, data, isFetching) {
	return !isError && data == null && isFetching;
}
export { shouldShowUsageTabMetricSkeleton as n, shouldShowUsageChartSkeleton as t };
