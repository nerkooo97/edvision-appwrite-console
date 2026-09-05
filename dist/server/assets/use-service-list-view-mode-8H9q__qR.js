import { D as syncConsoleAccountAfterMutation, O as updateAccountPrefs, Wr as mergeServiceListViewModeIntoPrefs, _i as parseServiceListViewMode } from "./auth-BPuxYQAc.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import { useCallback } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
function useServiceListViewMode(scope) {
	const { account } = useAuth();
	const queryClient = useQueryClient();
	const accountPrefs = account?.prefs;
	const viewMode = parseServiceListViewMode(accountPrefs, scope);
	const updateMutation = useMutation({
		mutationFn: async (mode) => {
			const currentAccount = account;
			if (!currentAccount) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeServiceListViewModeIntoPrefs(currentAccount.prefs ?? {}, scope, mode));
		},
		onMutate: async (mode) => {
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: mergeServiceListViewModeIntoPrefs(current.prefs ?? {}, scope, mode)
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	return {
		viewMode,
		setViewMode: useCallback((mode) => {
			if (!account || mode === viewMode) return;
			updateMutation.mutate(mode);
		}, [
			account,
			viewMode,
			updateMutation
		])
	};
}
export { useServiceListViewMode as t };
