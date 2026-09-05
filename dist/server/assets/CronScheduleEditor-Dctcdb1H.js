import { t as cn } from "./utils-DoqqkI3X.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as CommandItem, i as CommandInput, n as CommandEmpty, o as CommandList, r as CommandGroup, t as Command$1 } from "./command-Cizl9kMJ.js";
import { n as AlertDescription, t as Alert } from "./alert-BTaNwkUC.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, ChevronDown, Clock, Code } from "lucide-react";
var FALLBACK_SCHEDULE_PRESET = "weekly-monday";
const PRESET_OPTIONS = [
	{
		value: "every-minute",
		label: "Every minute",
		description: "Runs every minute",
		cron: "* * * * *",
		category: "frequent"
	},
	{
		value: "every-5-minutes",
		label: "Every 5 minutes",
		description: "Runs every 5 minutes",
		cron: "*/5 * * * *",
		category: "frequent"
	},
	{
		value: "every-15-minutes",
		label: "Every 15 minutes",
		description: "Runs every 15 minutes",
		cron: "*/15 * * * *",
		category: "frequent"
	},
	{
		value: "every-30-minutes",
		label: "Every 30 minutes",
		description: "Runs every 30 minutes",
		cron: "*/30 * * * *",
		category: "frequent"
	},
	{
		value: "every-hour",
		label: "Every hour",
		description: "Runs at the start of every hour",
		cron: "0 * * * *",
		category: "frequent"
	},
	{
		value: "every-6-hours",
		label: "Every 6 hours",
		description: "Runs every 6 hours (00:00, 06:00, 12:00, 18:00)",
		cron: "0 */6 * * *",
		category: "daily"
	},
	{
		value: "every-12-hours",
		label: "Every 12 hours",
		description: "Runs every 12 hours (00:00, 12:00)",
		cron: "0 */12 * * *",
		category: "daily"
	},
	{
		value: "daily-midnight",
		label: "Daily at midnight",
		description: "Runs once per day at midnight (00:00)",
		cron: "0 0 * * *",
		category: "daily"
	},
	{
		value: "daily-noon",
		label: "Daily at noon",
		description: "Runs once per day at noon (12:00)",
		cron: "0 12 * * *",
		category: "daily"
	},
	{
		value: "twice-daily",
		label: "Twice daily",
		description: "Runs twice per day (09:00, 21:00)",
		cron: "0 9,21 * * *",
		category: "daily"
	},
	{
		value: "weekly-sunday",
		label: "Weekly on Sunday",
		description: "Runs once per week on Sunday at midnight",
		cron: "0 0 * * 0",
		category: "weekly"
	},
	{
		value: "weekly-monday",
		label: "Weekly on Monday",
		description: "Runs once per week on Monday at midnight",
		cron: "0 0 * * 1",
		category: "weekly"
	},
	{
		value: "weekly-tuesday",
		label: "Weekly on Tuesday",
		description: "Runs once per week on Tuesday at midnight",
		cron: "0 0 * * 2",
		category: "weekly"
	},
	{
		value: "weekly-wednesday",
		label: "Weekly on Wednesday",
		description: "Runs once per week on Wednesday at midnight",
		cron: "0 0 * * 3",
		category: "weekly"
	},
	{
		value: "weekly-thursday",
		label: "Weekly on Thursday",
		description: "Runs once per week on Thursday at midnight",
		cron: "0 0 * * 4",
		category: "weekly"
	},
	{
		value: "weekly-friday",
		label: "Weekly on Friday",
		description: "Runs once per week on Friday at midnight",
		cron: "0 0 * * 5",
		category: "weekly"
	},
	{
		value: "weekly-saturday",
		label: "Weekly on Saturday",
		description: "Runs once per week on Saturday at midnight",
		cron: "0 0 * * 6",
		category: "weekly"
	},
	{
		value: "monthly-1st",
		label: "Monthly on the 1st",
		description: "Runs once per month on the 1st at midnight",
		cron: "0 0 1 * *",
		category: "monthly"
	},
	{
		value: "monthly-15th",
		label: "Monthly on the 15th",
		description: "Runs once per month on the 15th at midnight",
		cron: "0 0 15 * *",
		category: "monthly"
	}
];
var getPresetsByCategory = (category) => {
	return PRESET_OPTIONS.filter((preset) => preset.category === category);
};
function validateCronExpression(cron) {
	if (!cron.trim()) return { valid: true };
	const parts = cron.trim().split(/\s+/);
	if (parts.length !== 5) return {
		valid: false,
		error: "Cron expression must have 5 parts (minute hour day month weekday)"
	};
	const patterns = [
		/^(\*|[0-5]?\d)(-(\*|[0-5]?\d))?(\/(\d+))?$/,
		/^(\*|[01]?\d|2[0-3])(-(\*|[01]?\d|2[0-3]))?(\/(\d+))?$/,
		/^(\*|[12]?\d|3[01])(-(\*|[12]?\d|3[01]))?(\/(\d+))?$/,
		/^(\*|[1-9]|1[0-2])(-(\*|[1-9]|1[0-2]))?(\/(\d+))?$/,
		/^(\*|[0-6])(-(\*|[0-6]))?(\/(\d+))?$/
	];
	for (let i = 0; i < parts.length; i++) if (parts[i] !== "*" && !patterns[i].test(parts[i])) return {
		valid: false,
		error: `Invalid value in ${[
			"minute",
			"hour",
			"day",
			"month",
			"weekday"
		][i]} field`
	};
	return { valid: true };
}
function formatCronExpression(cron) {
	if (!cron.trim()) return "Disabled";
	const parts = cron.trim().split(/\s+/);
	if (parts.length !== 5) return cron;
	const [minute, hour, day, month, weekday] = parts;
	const matchingPreset = PRESET_OPTIONS.find((p) => p.cron === cron);
	if (matchingPreset) return matchingPreset.label;
	let description = "";
	const minuteInterval = minute.match(/^\*\/(\d+)$/);
	const hourInterval = hour.match(/^\*\/(\d+)$/);
	if (hour === "*" && minute === "*") description = "Every minute";
	else if (minuteInterval) {
		const interval = minuteInterval[1];
		description = `Every ${interval} minute${interval !== "1" ? "s" : ""}`;
	} else if (hourInterval) {
		const interval = hourInterval[1];
		description = `Every ${interval} hour${interval !== "1" ? "s" : ""}`;
	} else if (hour === "*" && minute !== "*") {
		const minuteNum = parseInt(minute, 10);
		if (!isNaN(minuteNum)) description = `Every hour at minute ${minuteNum}`;
		else description = `Every hour at minute ${minute}`;
	} else if (hour !== "*" && minute === "*") {
		const hourNum = parseInt(hour, 10);
		if (!isNaN(hourNum)) description = `Every minute of hour ${hourNum}`;
		else description = `Every minute of hour ${hour}`;
	} else if (hour !== "*" && minute !== "*") {
		const hourNum = parseInt(hour, 10);
		const minuteNum = parseInt(minute, 10);
		if (!isNaN(hourNum) && !isNaN(minuteNum)) {
			const period = hourNum >= 12 ? "PM" : "AM";
			description = `At ${hourNum === 0 ? 12 : hourNum > 12 ? hourNum - 12 : hourNum}:${minuteNum.toString().padStart(2, "0")} ${period}`;
		} else description = `At ${hour}:${minute}`;
	}
	if (day !== "*") description += ` on day ${day}`;
	if (month !== "*") description += ` of month ${month}`;
	if (weekday !== "*") {
		const dayNames = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		];
		const dayIndex = parseInt(weekday, 10);
		if (dayIndex >= 0 && dayIndex < 7) description += ` on ${dayNames[dayIndex]}`;
	}
	return description || cron;
}
function getCronFromPreset(preset) {
	if (preset === "disabled") return "";
	return PRESET_OPTIONS.find((p) => p.value === preset)?.cron ?? "";
}
function CronScheduleEditor({ value, onChange, disabled, allowDisabled = true, disabledDescription = "Function will not run on a schedule" }) {
	const t = useT();
	const [mode, setMode] = useState("preset");
	const [preset, setPreset] = useState(allowDisabled ? "disabled" : FALLBACK_SCHEDULE_PRESET);
	const [customCron, setCustomCron] = useState("");
	const [popoverOpen, setPopoverOpen] = useState(false);
	const selectPreset = (nextPreset) => {
		if (!allowDisabled && nextPreset === "disabled") nextPreset = FALLBACK_SCHEDULE_PRESET;
		setPreset(nextPreset);
		onChange(getCronFromPreset(nextPreset));
	};
	const [presetListEl, setPresetListEl] = useState(null);
	useEffect(() => {
		if (!presetListEl || !popoverOpen) return;
		const onWheel = (event) => {
			const { scrollTop, scrollHeight, clientHeight } = presetListEl;
			if (scrollHeight <= clientHeight) return;
			const next = Math.min(Math.max(scrollTop + event.deltaY, 0), scrollHeight - clientHeight);
			if (next === scrollTop) return;
			presetListEl.scrollTop = next;
			event.preventDefault();
			event.stopPropagation();
		};
		presetListEl.addEventListener("wheel", onWheel, { passive: false });
		return () => {
			presetListEl.removeEventListener("wheel", onWheel);
		};
	}, [presetListEl, popoverOpen]);
	useEffect(() => {
		if (!value || !value.trim()) {
			if (!allowDisabled) {
				setPreset(FALLBACK_SCHEDULE_PRESET);
				setMode("preset");
				setCustomCron("");
				onChange(getCronFromPreset(FALLBACK_SCHEDULE_PRESET));
				return;
			}
			setPreset("disabled");
			setMode("preset");
			setCustomCron("");
			return;
		}
		const matchingPreset = PRESET_OPTIONS.find((p) => p.cron === value);
		if (matchingPreset) {
			setPreset(matchingPreset.value);
			setMode("preset");
			return;
		}
		setCustomCron(value);
		setMode("advanced");
	}, [value, allowDisabled]);
	const validation = useMemo(() => {
		let currentValue = "";
		if (mode === "advanced") currentValue = customCron;
		else if (preset === "disabled") currentValue = "";
		else currentValue = PRESET_OPTIONS.find((p) => p.value === preset)?.cron || "";
		return validateCronExpression(currentValue);
	}, [
		mode,
		preset,
		customCron
	]);
	const formattedSchedule = useMemo(() => {
		let currentValue = "";
		if (mode === "advanced") currentValue = customCron;
		else if (preset === "disabled") currentValue = "";
		else currentValue = PRESET_OPTIONS.find((p) => p.value === preset)?.cron || "";
		return formatCronExpression(currentValue);
	}, [
		mode,
		preset,
		customCron
	]);
	const handleModeChange = (newMode) => {
		if (newMode === "preset") {
			let currentValue = "";
			if (mode === "advanced") currentValue = customCron;
			else if (preset === "disabled") currentValue = "";
			else currentValue = PRESET_OPTIONS.find((p) => p.value === preset)?.cron || "";
			let nextPreset = allowDisabled ? "disabled" : FALLBACK_SCHEDULE_PRESET;
			if (currentValue.trim()) {
				const matchingPreset = PRESET_OPTIONS.find((p) => p.cron === currentValue);
				if (matchingPreset) nextPreset = matchingPreset.value;
				else if (!allowDisabled) nextPreset = FALLBACK_SCHEDULE_PRESET;
			}
			setPreset(nextPreset);
			setMode("preset");
			onChange(getCronFromPreset(nextPreset));
		} else {
			let currentValue = "";
			if (preset === "disabled") currentValue = "";
			else currentValue = PRESET_OPTIONS.find((p) => p.value === preset)?.cron || "";
			setCustomCron(currentValue);
			setMode("advanced");
			onChange(currentValue);
		}
	};
	const getPresetDisplayLabel = (presetValue) => {
		if (presetValue === "disabled") return "Disabled";
		return PRESET_OPTIONS.find((p) => p.value === presetValue)?.label || "Unknown";
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex items-center gap-3",
				children: /* @__PURE__ */ jsxs("div", {
					className: "inline-flex items-center rounded-md border border-border bg-muted/30 p-1",
					children: [/* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => handleModeChange("preset"),
						disabled,
						className: cn("flex items-center gap-1.5 rounded px-2.5 py-1 text-[12px] font-medium transition-all cursor-pointer", mode === "preset" ? "bg-background text-foreground" : "text-muted-foreground hover:text-foreground", disabled && "opacity-50 cursor-not-allowed"),
						children: [/* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5" }), t("Preset")]
					}), /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => handleModeChange("advanced"),
						disabled,
						className: cn("flex items-center gap-1.5 rounded px-2.5 py-1 text-[12px] font-medium transition-all cursor-pointer", mode === "advanced" ? "bg-background text-foreground" : "text-muted-foreground hover:text-foreground", disabled && "opacity-50 cursor-not-allowed"),
						children: [/* @__PURE__ */ jsx(Code, { className: "h-3.5 w-3.5" }), t("Advanced")]
					})]
				})
			}),
			mode === "preset" && /* @__PURE__ */ jsx("div", {
				className: "space-y-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: "schedule-preset",
						className: "text-[13px] font-medium",
						children: t("Schedule preset")
					}), /* @__PURE__ */ jsxs(Popover, {
						open: popoverOpen,
						onOpenChange: setPopoverOpen,
						modal: true,
						children: [/* @__PURE__ */ jsx(PopoverTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsxs(Button, {
								id: "schedule-preset",
								type: "button",
								variant: "outline",
								role: "combobox",
								className: cn("h-9 w-full justify-between text-[13px] font-normal", !preset && "text-muted-foreground"),
								disabled,
								children: [t(getPresetDisplayLabel(preset || "disabled")), /* @__PURE__ */ jsx(ChevronDown, { className: "ms-2 h-4 w-4 shrink-0 opacity-50" })]
							})
						}), /* @__PURE__ */ jsx(PopoverContent, {
							className: "flex max-h-[min(320px,var(--radix-popover-content-available-height))] w-[var(--radix-popover-trigger-width)] min-w-[280px] flex-col overflow-hidden p-0",
							align: "start",
							children: /* @__PURE__ */ jsxs(Command$1, {
								className: "flex max-h-[min(320px,var(--radix-popover-content-available-height))] flex-col overflow-hidden",
								children: [/* @__PURE__ */ jsx(CommandInput, {
									placeholder: t("Search presets..."),
									className: "h-9"
								}), /* @__PURE__ */ jsxs(CommandList, {
									ref: setPresetListEl,
									className: "min-h-0 max-h-[240px] flex-1 overflow-y-auto overscroll-contain",
									children: [
										/* @__PURE__ */ jsx(CommandEmpty, { children: t("No preset found.") }),
										allowDisabled ? /* @__PURE__ */ jsx(CommandGroup, { children: /* @__PURE__ */ jsx(CommandItem, {
											value: "disabled",
											onSelect: () => {
												selectPreset("disabled");
												setPopoverOpen(false);
											},
											className: "px-3 py-2.5",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex flex-col gap-0.5",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-[13px] font-medium",
													children: t("Disabled")
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[11px] text-muted-foreground leading-tight",
													children: t(disabledDescription)
												})]
											})
										}) }) : null,
										/* @__PURE__ */ jsx(CommandGroup, {
											heading: t("Frequent"),
											children: getPresetsByCategory("frequent").map((presetOption) => /* @__PURE__ */ jsx(CommandItem, {
												value: `${presetOption.label} ${presetOption.description} ${presetOption.cron}`,
												onSelect: () => {
													selectPreset(presetOption.value);
													setPopoverOpen(false);
												},
												className: "px-3 py-2.5",
												children: /* @__PURE__ */ jsxs("div", {
													className: "flex flex-col gap-0.5",
													children: [/* @__PURE__ */ jsx("span", {
														className: "text-[13px] font-medium",
														children: t(presetOption.label)
													}), /* @__PURE__ */ jsxs("span", {
														className: "text-[11px] text-muted-foreground leading-tight",
														children: [
															t(presetOption.description),
															" •",
															" ",
															/* @__PURE__ */ jsx("span", {
																className: "font-mono",
																children: presetOption.cron
															})
														]
													})]
												})
											}, presetOption.value))
										}),
										/* @__PURE__ */ jsx(CommandGroup, {
											heading: t("Daily"),
											children: getPresetsByCategory("daily").map((presetOption) => /* @__PURE__ */ jsx(CommandItem, {
												value: `${presetOption.label} ${presetOption.description} ${presetOption.cron}`,
												onSelect: () => {
													selectPreset(presetOption.value);
													setPopoverOpen(false);
												},
												className: "px-3 py-2.5",
												children: /* @__PURE__ */ jsxs("div", {
													className: "flex flex-col gap-0.5",
													children: [/* @__PURE__ */ jsx("span", {
														className: "text-[13px] font-medium",
														children: t(presetOption.label)
													}), /* @__PURE__ */ jsxs("span", {
														className: "text-[11px] text-muted-foreground leading-tight",
														children: [
															t(presetOption.description),
															" •",
															" ",
															/* @__PURE__ */ jsx("span", {
																className: "font-mono",
																children: presetOption.cron
															})
														]
													})]
												})
											}, presetOption.value))
										}),
										/* @__PURE__ */ jsx(CommandGroup, {
											heading: t("Weekly"),
											children: getPresetsByCategory("weekly").map((presetOption) => /* @__PURE__ */ jsx(CommandItem, {
												value: `${presetOption.label} ${presetOption.description} ${presetOption.cron}`,
												onSelect: () => {
													selectPreset(presetOption.value);
													setPopoverOpen(false);
												},
												className: "px-3 py-2.5",
												children: /* @__PURE__ */ jsxs("div", {
													className: "flex flex-col gap-0.5",
													children: [/* @__PURE__ */ jsx("span", {
														className: "text-[13px] font-medium",
														children: t(presetOption.label)
													}), /* @__PURE__ */ jsxs("span", {
														className: "text-[11px] text-muted-foreground leading-tight",
														children: [
															t(presetOption.description),
															" •",
															" ",
															/* @__PURE__ */ jsx("span", {
																className: "font-mono",
																children: presetOption.cron
															})
														]
													})]
												})
											}, presetOption.value))
										}),
										/* @__PURE__ */ jsx(CommandGroup, {
											heading: t("Monthly"),
											children: getPresetsByCategory("monthly").map((presetOption) => /* @__PURE__ */ jsx(CommandItem, {
												value: `${presetOption.label} ${presetOption.description} ${presetOption.cron}`,
												onSelect: () => {
													selectPreset(presetOption.value);
													setPopoverOpen(false);
												},
												className: "px-3 py-2.5",
												children: /* @__PURE__ */ jsxs("div", {
													className: "flex flex-col gap-0.5",
													children: [/* @__PURE__ */ jsx("span", {
														className: "text-[13px] font-medium",
														children: t(presetOption.label)
													}), /* @__PURE__ */ jsxs("span", {
														className: "text-[11px] text-muted-foreground leading-tight",
														children: [
															t(presetOption.description),
															" •",
															" ",
															/* @__PURE__ */ jsx("span", {
																className: "font-mono",
																children: presetOption.cron
															})
														]
													})]
												})
											}, presetOption.value))
										})
									]
								})]
							})
						})]
					})]
				})
			}),
			mode === "advanced" && /* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ jsx(Label, {
						htmlFor: "cron-expression",
						className: "text-[13px] font-medium",
						children: t("Cron expression")
					}),
					/* @__PURE__ */ jsx(Input, {
						id: "cron-expression",
						value: customCron,
						onChange: (e) => {
							const next = e.target.value;
							setCustomCron(next);
							onChange(next);
						},
						placeholder: "0 0 * * *",
						className: "font-mono text-[13px] h-9",
						disabled
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-[12px] text-muted-foreground",
						children: t("Format: minute hour day month weekday (e.g., \"0 0 * * *\" for daily at midnight)")
					})
				]
			}),
			validation.valid && value && value.trim() && /* @__PURE__ */ jsxs("div", {
				className: "rounded-lg border border-border bg-muted/30 overflow-hidden transition-all duration-200",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 border-b border-border bg-muted/40 px-3.5 py-2",
					children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
						className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t("Schedule preview")
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "px-3.5 py-3 text-[13px] font-medium leading-relaxed text-foreground",
					children: t(formattedSchedule)
				})]
			}),
			!validation.valid && value && value.trim() && /* @__PURE__ */ jsxs(Alert, {
				variant: "destructive",
				className: "transition-all duration-200",
				children: [/* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }), /* @__PURE__ */ jsx(AlertDescription, {
					className: "text-[12px]",
					children: validation.error ? t(validation.error) : t("Invalid cron expression")
				})]
			})
		]
	});
}
export { formatCronExpression as n, CronScheduleEditor as t };
