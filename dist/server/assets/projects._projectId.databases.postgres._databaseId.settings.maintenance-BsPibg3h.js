import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { zg as useUpdatePostgresDatabaseMaintenance } from "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import "./projects-BaTJenfQ.js";
import "./appwrite-id-L15yEGeF.js";
import "./databases-Dh0pwZ6h.js";
import "./database-specs-CBc802K0.js";
import "./database-row-inline-edits-CdyGeTxj.js";
import "./form-field-type-badge-C7qMzJo0.js";
import "./chart-interval-Dbrn19qD.js";
import "./is-marketing-page-dgx45Oqy.js";
import "./use-console-impersonation-revision-BiI0c7pX.js";
import "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import "./use-console-profile-DiUZxZ_6.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import "./DatabaseOperationsLockContext-B72U5wFZ.js";
import { n as usePostgresDatabaseSettingsPage, t as PostgresSettingsLoading } from "./PostgresSettingsLoading-Ba3ADHgQ.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Check, Globe } from "lucide-react";
const MAINTENANCE_DAYS = [
	{
		value: "sun",
		label: "Sunday",
		short: "Sun"
	},
	{
		value: "mon",
		label: "Monday",
		short: "Mon"
	},
	{
		value: "tue",
		label: "Tuesday",
		short: "Tue"
	},
	{
		value: "wed",
		label: "Wednesday",
		short: "Wed"
	},
	{
		value: "thu",
		label: "Thursday",
		short: "Thu"
	},
	{
		value: "fri",
		label: "Friday",
		short: "Fri"
	},
	{
		value: "sat",
		label: "Saturday",
		short: "Sat"
	}
];
var DAY_VALUE_TO_UTC_DOW = {
	sun: 0,
	mon: 1,
	tue: 2,
	wed: 3,
	thu: 4,
	fri: 5,
	sat: 6
};
var UTC_DOW_TO_DAY_VALUE = [
	"sun",
	"mon",
	"tue",
	"wed",
	"thu",
	"fri",
	"sat"
];
function getUserTimeZone() {
	if (typeof Intl === "undefined") return "UTC";
	return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
}
function buildMaintenanceWindowUtcInstant(day, hourUtc) {
	const targetDow = DAY_VALUE_TO_UTC_DOW[day];
	const now = /* @__PURE__ */ new Date();
	const candidate = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), hourUtc, 0, 0));
	const daysUntil = (targetDow - candidate.getUTCDay() + 7) % 7;
	candidate.setUTCDate(candidate.getUTCDate() + daysUntil);
	return candidate;
}
function getLocalWeekdayIndex(date, timeZone) {
	return {
		Sun: 0,
		Mon: 1,
		Tue: 2,
		Wed: 3,
		Thu: 4,
		Fri: 5,
		Sat: 6
	}[new Intl.DateTimeFormat("en-US", {
		weekday: "short",
		timeZone
	}).format(date)] ?? 0;
}
function getMaintenanceWindowTimePreview(day, hourUtc, t) {
	const instant = buildMaintenanceWindowUtcInstant(day, hourUtc);
	const timeZone = getUserTimeZone();
	const utcDayMeta = getMaintenanceDayMeta(day);
	const localDayValue = UTC_DOW_TO_DAY_VALUE[getLocalWeekdayIndex(instant, timeZone)];
	const localDayMeta = getMaintenanceDayMeta(localDayValue);
	const localTimeLabel = new Intl.DateTimeFormat(void 0, {
		hour: "numeric",
		hour12: true,
		timeZone
	}).format(instant);
	const timeZoneLabel = new Intl.DateTimeFormat(void 0, {
		timeZone,
		timeZoneName: "short"
	}).formatToParts(instant).find((part) => part.type === "timeZoneName")?.value ?? timeZone;
	return {
		utcDayLabel: t(utcDayMeta.label),
		utcTimeLabel: `${formatMaintenanceHourAmPmLabel(hourUtc, t)} UTC`,
		localDayLabel: t(localDayMeta.label),
		localTimeLabel,
		timeZone,
		timeZoneLabel,
		dayDiffersInLocalTime: day !== localDayValue
	};
}
const MAINTENANCE_HOURS_AM = Array.from({ length: 12 }, (_, hour) => hour);
const MAINTENANCE_HOURS_PM = Array.from({ length: 12 }, (_, index) => index + 12);
function formatMaintenanceHourAmPm(hour) {
	const period = hour >= 12 ? "PM" : "AM";
	return {
		displayHour: hour === 0 ? 12 : hour > 12 ? hour - 12 : hour,
		period
	};
}
function formatMaintenanceHourAmPmLabel(hour, t) {
	const { displayHour, period } = formatMaintenanceHourAmPm(hour);
	return `${displayHour} ${t(period)}`;
}
function getMaintenanceDayMeta(day) {
	return MAINTENANCE_DAYS.find((entry) => entry.value === day) ?? MAINTENANCE_DAYS[0];
}
function usePostgresMaintenanceWindow({ projectId, databaseId, database, canWrite }) {
	const t = useT();
	const maintenanceMutation = useUpdatePostgresDatabaseMaintenance(projectId, databaseId);
	const [maintenanceDay, setMaintenanceDay] = useState(database.maintenanceWindowDay || "sun");
	const [maintenanceHourUtc, setMaintenanceHourUtc] = useState(String(database.maintenanceWindowHourUtc ?? 0));
	const writeDisabled = !canWrite || maintenanceMutation.isPending;
	const writeTooltip = !canWrite ? t("You don't have permission to change database settings.") : void 0;
	useEffect(() => {
		setMaintenanceDay(database.maintenanceWindowDay || "sun");
		setMaintenanceHourUtc(String(database.maintenanceWindowHourUtc ?? 0));
	}, [database.maintenanceWindowDay, database.maintenanceWindowHourUtc]);
	const savedDay = database.maintenanceWindowDay || "sun";
	const savedHour = String(database.maintenanceWindowHourUtc ?? 0);
	const maintenanceDirty = maintenanceDay !== savedDay || maintenanceHourUtc !== savedHour;
	const maintenanceHour = useMemo(() => {
		const hour = Number.parseInt(maintenanceHourUtc, 10);
		return Number.isFinite(hour) ? hour : 0;
	}, [maintenanceHourUtc]);
	const setMaintenanceHour = (hour) => {
		const clamped = Math.max(0, Math.min(23, hour));
		setMaintenanceHourUtc(String(clamped));
	};
	const handleMaintenanceUpdate = () => {
		const hourUtc = Number.parseInt(maintenanceHourUtc, 10);
		if (!Number.isFinite(hourUtc) || hourUtc < 0 || hourUtc > 23) {
			toast.error(t("Enter an hour between 0 and 23 (UTC)."));
			return;
		}
		maintenanceMutation.mutate({
			day: maintenanceDay,
			hourUtc
		}, {
			onSuccess: () => toast.success(t("Maintenance window updated")),
			onError: (error) => toast.error(getErrorMessage(error, t("Failed to update maintenance window")))
		});
	};
	return {
		t,
		maintenanceDay,
		setMaintenanceDay,
		maintenanceHour,
		setMaintenanceHour,
		writeDisabled,
		writeTooltip,
		maintenanceDirty,
		handleMaintenanceUpdate,
		dayMeta: getMaintenanceDayMeta(maintenanceDay)
	};
}
function MaintenanceTimezoneNotice({ t }) {
	const timeZone = getUserTimeZone();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border bg-muted/20 px-3 py-2.5",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-[12px] text-muted-foreground",
			children: t("All times in the grid use UTC (Coordinated Universal Time).")
		}), /* @__PURE__ */ jsxs(Badge, {
			variant: "outline",
			className: "gap-1.5 text-[11px] font-normal",
			children: [
				/* @__PURE__ */ jsx(Globe, {
					className: "h-3 w-3 shrink-0",
					"aria-hidden": true
				}),
				t("Your timezone"),
				": ",
				timeZone
			]
		})]
	});
}
function MaintenanceWeekHourGrid({ maintenanceDay, maintenanceHour, writeDisabled, onSelect, t }) {
	const [activePeriod, setActivePeriod] = useState(maintenanceHour >= 12 ? "PM" : "AM");
	useEffect(() => {
		setActivePeriod(maintenanceHour >= 12 ? "PM" : "AM");
	}, [maintenanceHour]);
	const visibleHours = activePeriod === "AM" ? MAINTENANCE_HOURS_AM : MAINTENANCE_HOURS_PM;
	return /* @__PURE__ */ jsxs("div", {
		className: "overflow-hidden rounded-lg border border-border p-3",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-3 flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
				children: t("UTC")
			}), /* @__PURE__ */ jsx("div", {
				className: "inline-flex rounded-md border border-border bg-muted/30 p-0.5",
				role: "group",
				"aria-label": t("Time of day in UTC"),
				children: ["AM", "PM"].map((period) => {
					const selected = activePeriod === period;
					return /* @__PURE__ */ jsxs("button", {
						type: "button",
						disabled: writeDisabled,
						onClick: () => setActivePeriod(period),
						className: cn("h-7 min-w-[4.5rem] rounded px-3 text-[11px] font-medium transition-colors", selected ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground", writeDisabled && "cursor-not-allowed opacity-60"),
						"aria-pressed": selected,
						children: [t(period), " UTC"]
					}, period);
				})
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-[2.25rem_repeat(7,minmax(0,1fr))] gap-1",
			children: [
				/* @__PURE__ */ jsx("div", {}),
				MAINTENANCE_DAYS.map((day) => /* @__PURE__ */ jsx("div", {
					className: "flex h-6 items-center justify-center text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: t(day.short)
				}, day.value)),
				visibleHours.map((hour) => {
					const { displayHour } = formatMaintenanceHourAmPm(hour);
					return /* @__PURE__ */ jsxs("div", {
						className: "contents",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-7 items-center justify-end pe-1 text-[11px] font-medium tabular-nums text-muted-foreground",
							children: displayHour
						}), MAINTENANCE_DAYS.map((day) => {
							const selected = maintenanceDay === day.value && maintenanceHour === hour;
							return /* @__PURE__ */ jsx("button", {
								type: "button",
								disabled: writeDisabled,
								onClick: () => onSelect(day.value, hour),
								className: cn("flex h-7 items-center justify-center rounded-md border transition-colors", selected ? "border-primary/50 bg-primary/10 text-primary ring-1 ring-primary/30" : "border-border/70 bg-card text-transparent hover:bg-muted/40 hover:text-muted-foreground/40", writeDisabled && "cursor-not-allowed opacity-60"),
								"aria-label": `${t(day.label)} ${formatMaintenanceHourAmPmLabel(hour, t)} UTC`,
								"aria-pressed": selected,
								children: /* @__PURE__ */ jsx(Check, {
									className: cn("h-3.5 w-3.5", selected ? "opacity-100" : "opacity-0"),
									"aria-hidden": true
								})
							}, `${day.value}-${hour}`);
						})]
					}, hour);
				})
			]
		})]
	});
}
function MaintenanceScheduleSummary({ day, hour, t }) {
	const preview = useMemo(() => getMaintenanceWindowTimePreview(day, hour, t), [
		day,
		hour,
		t
	]);
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "rounded-lg border border-border bg-muted/25 px-4 py-3",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: t("In UTC")
				}), /* @__PURE__ */ jsxs("p", {
					className: "mt-1 text-[14px] font-medium text-foreground",
					children: [
						t("Scheduled every"),
						" ",
						preview.utcDayLabel,
						" ",
						t("starting at"),
						" ",
						preview.utcTimeLabel
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "rounded-lg border border-primary/20 bg-primary/5 px-4 py-3",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
					children: [
						t("In your local time"),
						" (",
						preview.timeZoneLabel,
						")"
					]
				}), /* @__PURE__ */ jsxs("p", {
					className: "mt-1 text-[14px] font-medium text-foreground",
					children: [
						t("Scheduled every"),
						" ",
						preview.localDayLabel,
						" ",
						t("starting at"),
						" ",
						preview.localTimeLabel
					]
				})]
			})]
		}), preview.dayDiffersInLocalTime ? /* @__PURE__ */ jsx("p", {
			className: "text-[12px] leading-relaxed text-muted-foreground",
			children: t("Maintenance may start on a different weekday in your timezone than in UTC.")
		}) : null]
	});
}
function PostgresDatabaseMaintenanceCard({ projectId, databaseId, database, canWrite }) {
	const { t, maintenanceDay, setMaintenanceDay, maintenanceHour, setMaintenanceHour, writeDisabled, writeTooltip, maintenanceDirty, handleMaintenanceUpdate } = usePostgresMaintenanceWindow({
		projectId,
		databaseId,
		database,
		canWrite
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-border bg-card/50 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-4",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[15px] font-semibold text-foreground",
					children: t("Maintenance window")
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-[13px] text-muted-foreground",
					children: t("Pick a weekly window in UTC. We also show what that means in your local timezone.")
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-4 px-6 py-4",
				children: [
					/* @__PURE__ */ jsx(MaintenanceTimezoneNotice, { t }),
					/* @__PURE__ */ jsx(MaintenanceWeekHourGrid, {
						maintenanceDay,
						maintenanceHour,
						writeDisabled,
						onSelect: (day, hour) => {
							setMaintenanceDay(day);
							setMaintenanceHour(hour);
						},
						t
					}),
					/* @__PURE__ */ jsx(MaintenanceScheduleSummary, {
						day: maintenanceDay,
						hour: maintenanceHour,
						t
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "border-t border-border bg-muted/30 px-6 py-4",
				children: /* @__PURE__ */ jsx(Button, {
					size: "sm",
					className: "h-9 text-[13px]",
					disabled: writeDisabled || !maintenanceDirty,
					title: writeTooltip,
					onClick: handleMaintenanceUpdate,
					children: t("Update")
				})
			})
		]
	});
}
function View() {
	const { projectId, databaseId, database, canWrite, isLoading } = usePostgresDatabaseSettingsPage();
	if (isLoading) return /* @__PURE__ */ jsx(PostgresSettingsLoading, {});
	if (!database) return null;
	return /* @__PURE__ */ jsx(SettingsCardsList, { cards: [{
		id: "maintenance",
		search: {
			title: "Maintenance window",
			keywords: [
				"window",
				"utc",
				"day",
				"hour",
				"upgrade",
				"weekly",
				"am",
				"pm"
			]
		},
		node: /* @__PURE__ */ jsx(PostgresDatabaseMaintenanceCard, {
			projectId,
			databaseId,
			database,
			canWrite
		})
	}] });
}
var SplitComponent = View;
export { SplitComponent as component };
