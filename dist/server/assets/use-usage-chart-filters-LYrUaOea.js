import { Ci as parseUsageChartIntervalFromPrefs, D as syncConsoleAccountAfterMutation, O as updateAccountPrefs, Si as parseUsageChartDateRangeFromPrefs, qr as mergeUsageChartFiltersIntoPrefs } from "./auth-BPuxYQAc.js";
import { C as isRollingUsageDateRangePresetId, f as normalizeUsageDateRangeSelection, l as getStableUsageChartDateRange, m as resetStableUsageChartDateRange, s as resolveUsageChartInterval, x as getUsageDateRangePresetByValue } from "./chart-interval-Dbrn19qD.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import { n as serializeUsageChartFilters, t as resolveUsageChartFiltersFromPrefs } from "./usage-chart-filters-pmJA5qvl.js";
import { useCallback, useMemo, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
function useUsageChartFilters(plan) {
	const { account } = useAuth();
	const queryClient = useQueryClient();
	const accountId = account?.$id;
	const accountPrefs = account?.prefs;
	const [rollingRangeNonce, setRollingRangeNonce] = useState(0);
	const previousAccountIdRef = useRef(accountId);
	if (previousAccountIdRef.current !== accountId) {
		resetStableUsageChartDateRange();
		previousAccountIdRef.current = accountId;
	}
	const usageFiltersPrefsKey = useMemo(() => {
		const serialized = parseUsageChartDateRangeFromPrefs(accountPrefs);
		const interval = parseUsageChartIntervalFromPrefs(accountPrefs);
		if (serialized) return `${serialized.preset ?? ""}|${serialized.from ?? ""}|${serialized.to ?? ""}|${interval ?? ""}`;
		return `default:${accountId ?? "anonymous"}`;
	}, [accountPrefs, accountId]);
	const planIntervalsKey = plan?.usageLogsIntervals?.join(",") ?? "";
	const dateRangePresetId = useMemo(() => {
		const serialized = parseUsageChartDateRangeFromPrefs(accountPrefs);
		if (serialized?.preset) return serialized.preset;
		if (!serialized) return "24h";
		return null;
	}, [usageFiltersPrefsKey, accountPrefs]);
	const { dateRange, chartInterval } = useMemo(() => {
		const filters = resolveUsageChartFiltersFromPrefs(accountPrefs, plan);
		if (dateRangePresetId) {
			const preset = getUsageDateRangePresetByValue(dateRangePresetId);
			if (preset) {
				const range = preset.getRange();
				return {
					dateRange: range,
					chartInterval: resolveUsageChartInterval(filters.chartInterval, range, plan)
				};
			}
		}
		return filters;
	}, [
		usageFiltersPrefsKey,
		dateRangePresetId,
		rollingRangeNonce,
		accountPrefs,
		plan,
		planIntervalsKey
	]);
	const refreshRollingDateRange = useCallback(() => {
		if (dateRangePresetId && isRollingUsageDateRangePresetId(dateRangePresetId)) setRollingRangeNonce((nonce) => nonce + 1);
	}, [dateRangePresetId]);
	const updateMutation = useMutation({
		mutationFn: async (next) => {
			const currentAccount = account;
			if (!currentAccount) throw new Error("Account data not available");
			const { serializedDateRange, chartInterval: interval } = serializeUsageChartFilters({
				dateRange: next.dateRange,
				chartInterval: next.chartInterval
			});
			return await updateAccountPrefs(mergeUsageChartFiltersIntoPrefs(currentAccount.prefs ?? {}, serializedDateRange, interval));
		},
		onMutate: async (next) => {
			const { serializedDateRange, chartInterval: interval } = serializeUsageChartFilters({
				dateRange: next.dateRange,
				chartInterval: next.chartInterval
			});
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: mergeUsageChartFiltersIntoPrefs(current.prefs ?? {}, serializedDateRange, interval)
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	return {
		dateRange,
		chartInterval,
		dateRangePresetId,
		setDateRange: useCallback((nextDateRange) => {
			if (!account) return;
			const normalizedSelection = normalizeUsageDateRangeSelection(nextDateRange);
			const resolvedDateRange = normalizedSelection?.from ? {
				from: normalizedSelection.from,
				to: normalizedSelection.to ?? normalizedSelection.from
			} : getStableUsageChartDateRange();
			const nextInterval = resolveUsageChartInterval(chartInterval, resolvedDateRange, plan);
			if (resolvedDateRange.from?.getTime() === dateRange.from?.getTime() && resolvedDateRange.to?.getTime() === dateRange.to?.getTime() && nextInterval === chartInterval) return;
			updateMutation.mutate({
				dateRange: resolvedDateRange,
				chartInterval: nextInterval
			});
		}, [
			account,
			chartInterval,
			dateRange,
			plan,
			updateMutation
		]),
		setChartInterval: useCallback((interval) => {
			if (!account || interval === chartInterval) return;
			const resolved = resolveUsageChartInterval(interval, dateRange, plan);
			if (resolved === chartInterval) return;
			updateMutation.mutate({
				dateRange,
				chartInterval: resolved
			});
		}, [
			account,
			chartInterval,
			dateRange,
			plan,
			updateMutation
		]),
		refreshRollingDateRange
	};
}
export { useUsageChartFilters as t };
