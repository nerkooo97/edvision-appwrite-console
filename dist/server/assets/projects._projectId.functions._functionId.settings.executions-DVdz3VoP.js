import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { d as sdk } from "./sdk-DjIJ_hjn.js";
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
import "./hooks-BONwG3Mt.js";
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
import { In as buildFunctionUpdateParams, wr as useProjectFunction } from "./affiliates-BOg1SHC6.js";
import "./social-stats-X1CQqP0k.js";
import "./cimd-CRIktQxf.js";
import "./account-applications-Bo8bAeE0.js";
import "./date-format-BD1j7PxK.js";
import "./invite-url-B18y3cBt.js";
import "./format-metric-6jsfxd5f.js";
import "./domains-Bfw8HsXF.js";
import "./parse-spec-DW3UGcrS.js";
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import "./input-yKHNPhDZ.js";
import "./popover-BjTNxuf9.js";
import "./context-menu-D55xedo-.js";
import "./label-D8nNLJBa.js";
import "./modal-auto-focus-BO41bKmA.js";
import "./dialog-CFWmsJbI.js";
import "./command-Cizl9kMJ.js";
import "./alert-BTaNwkUC.js";
import { t as CronScheduleEditor } from "./CronScheduleEditor-Dctcdb1H.js";
import "./SettingsSearchContext-DPkuZW4D.js";
import "./use-console-profile-DiUZxZ_6.js";
import { t as DocsRouteLink } from "./DocsRouteLink-cLPNKZ9F.js";
import { t as SettingsCardsList } from "./SettingsCardsList-uDb-fAqj.js";
import "./EventResourceIdSelector-DoLZYJw-.js";
import { n as DOCS_LINK, t as EventEditorModal } from "./EventEditor-Ba3G3deD.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Plus, X } from "lucide-react";
function View() {
	const t = useT();
	const { projectId, functionId } = useParams({ strict: false });
	const queryClient = useQueryClient();
	const { data: func, isLoading: funcLoading } = useProjectFunction(projectId, functionId);
	const [schedule, setSchedule] = useState("");
	const [events, setEvents] = useState([]);
	const [eventDialogOpen, setEventDialogOpen] = useState(false);
	useEffect(() => {
		if (func) {
			setSchedule(func.schedule || "");
			setEvents(func.events || []);
		}
	}, [func]);
	const syncFunctionCache = (updated) => {
		queryClient.setQueryData([
			"function",
			"project",
			projectId,
			functionId
		], updated);
		queryClient.invalidateQueries({ queryKey: [
			"functions",
			"project",
			projectId
		] });
	};
	const scheduleMutation = useMutation({
		mutationFn: async (updates) => {
			if (!projectId || !functionId || !func) throw new Error("Project ID, Function ID, and Function are required");
			return await sdk.forProject(projectId).functions.update(buildFunctionUpdateParams(func, updates));
		},
		onSuccess: (updated) => {
			toast.success(t("Schedule updated successfully"));
			syncFunctionCache(updated);
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to update schedule")));
		}
	});
	const eventsMutation = useMutation({
		mutationFn: async (updates) => {
			if (!projectId || !functionId || !func) throw new Error("Project ID, Function ID, and Function are required");
			return await sdk.forProject(projectId).functions.update(buildFunctionUpdateParams(func, updates));
		},
		onSuccess: (updated) => {
			toast.success(t("Events updated successfully"));
			syncFunctionCache(updated);
		},
		onError: (error) => {
			toast.error(getErrorMessage(error, t("Failed to update events")));
		}
	});
	const handleSaveSchedule = () => {
		scheduleMutation.mutate({ schedule: schedule || void 0 });
	};
	const handleSaveEvents = () => {
		if (events.length > 100) {
			toast.error(t("Maximum 100 events allowed"));
			return;
		}
		eventsMutation.mutate({ events });
	};
	const handleEventCreated = (eventString) => {
		const trimmed = eventString.trim();
		if (!trimmed || events.includes(trimmed) || events.length >= 100) return;
		setEvents([...events, trimmed]);
		setEventDialogOpen(false);
	};
	const handleRemoveEvent = (event) => {
		setEvents(events.filter((e) => e !== event));
	};
	const arraysEqual = (a, b) => {
		if (a.length !== b.length) return false;
		return a.every((val, idx) => val === b[idx]);
	};
	const executionsPending = scheduleMutation.isPending || eventsMutation.isPending;
	if (funcLoading) return /* @__PURE__ */ jsx("div", {
		className: "rounded-lg border border-border bg-card py-12 text-center",
		children: /* @__PURE__ */ jsx("p", {
			className: "text-[13px] text-muted-foreground",
			children: t("Loading settings...")
		})
	});
	if (!func) return null;
	return /* @__PURE__ */ jsx(SettingsCardsList, { cards: [{
		id: "schedule",
		search: {
			title: "Schedule",
			description: "Run this function on a schedule using cron expressions.",
			keywords: [
				"cron",
				"scheduled",
				"recurring"
			]
		},
		node: /* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Schedule")
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[13px] text-muted-foreground mt-2",
						children: t("Run this function on a schedule using cron expressions.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsx(CronScheduleEditor, {
						value: schedule,
						onChange: setSchedule,
						disabled: executionsPending
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30",
					children: /* @__PURE__ */ jsx(Button, {
						size: "sm",
						className: "h-9 text-[13px]",
						disabled: schedule === (func.schedule || "") || scheduleMutation.isPending,
						onClick: handleSaveSchedule,
						children: t("Update")
					})
				})
			]
		})
	}, {
		id: "events",
		search: {
			title: "Events",
			description: "Events that trigger this function (maximum 100).",
			keywords: [
				"webhook",
				"trigger",
				"invoke",
				"async"
			]
		},
		node: /* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-border bg-card/50 overflow-hidden",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-[15px] font-semibold text-foreground",
						children: t("Events")
					}), /* @__PURE__ */ jsxs("p", {
						className: "text-[13px] text-muted-foreground mt-2",
						children: [
							t("Events that trigger this function (maximum 100)."),
							" ",
							/* @__PURE__ */ jsx(DocsRouteLink, {
								className: "link-neutral",
								href: DOCS_LINK,
								children: t("Learn more")
							})
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ jsxs(Button, {
								type: "button",
								size: "sm",
								variant: "outline",
								className: "h-9 text-[13px]",
								onClick: () => setEventDialogOpen(true),
								disabled: events.length >= 100 || executionsPending,
								children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-4 w-4" }), t("Add event")]
							}),
							events.length > 0 && /* @__PURE__ */ jsx("div", {
								className: "space-y-2",
								children: events.map((event) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between rounded-md border border-border bg-background px-3 py-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[13px] font-mono",
										children: event
									}), /* @__PURE__ */ jsx(Button, {
										variant: "ghost",
										size: "sm",
										className: "h-7 w-7 p-0",
										onClick: () => handleRemoveEvent(event),
										disabled: executionsPending,
										"aria-label": `${t("Remove event")} ${event}`,
										children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
									})]
								}, event))
							}),
							events.length === 0 && /* @__PURE__ */ jsx("p", {
								className: "text-[13px] text-muted-foreground",
								children: t("No events configured")
							}),
							/* @__PURE__ */ jsx(EventEditorModal, {
								open: eventDialogOpen,
								onOpenChange: setEventDialogOpen,
								onCreated: handleEventCreated,
								description: t("Set the events that will trigger your function. Maximum 100 events allowed."),
								projectId
							})
						]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "px-6 py-4 border-t border-border bg-muted/30",
					children: /* @__PURE__ */ jsx(Button, {
						size: "sm",
						className: "h-9 text-[13px]",
						disabled: arraysEqual(events, func.events || []) || eventsMutation.isPending,
						onClick: handleSaveEvents,
						children: t("Update")
					})
				})
			]
		})
	}] });
}
var SplitComponent = View;
export { SplitComponent as component };
