function mergeActiveDeploymentForCard(fromHook, resolved) {
	if (!resolved) return void 0;
	if (fromHook?.$id !== resolved.$id) return resolved;
	const hook = fromHook;
	const list = resolved;
	const merged = {
		...hook,
		...list
	};
	merged.screenshotDark = list.screenshotDark || hook.screenshotDark;
	merged.screenshotLight = list.screenshotLight || hook.screenshotLight;
	return merged;
}
async function refetchSitePreviewCaches(queryClient, projectId, siteId, deploymentId) {
	await Promise.all([
		queryClient.refetchQueries({ queryKey: [
			"site",
			"project",
			projectId,
			siteId
		] }),
		queryClient.refetchQueries({ queryKey: [
			"sites",
			"project",
			projectId
		] }),
		queryClient.refetchQueries({
			queryKey: [
				"deployments",
				"site",
				projectId,
				siteId
			],
			exact: false
		}),
		deploymentId ? queryClient.refetchQueries({ queryKey: [
			"deployment",
			"site",
			projectId,
			siteId,
			deploymentId
		] }) : Promise.resolve()
	]);
}
function deploymentHasScreenshot(deployment) {
	if (!deployment) return false;
	const shot = deployment;
	return Boolean(shot.screenshotDark || shot.screenshotLight);
}
export { mergeActiveDeploymentForCard as n, refetchSitePreviewCaches as r, deploymentHasScreenshot as t };
