import { t as getRuntimeConfig } from "./runtime-config-DK7G0iKr.js";
var GROWTH_ENDPOINT = getRuntimeConfig().growthEndpoint;
const SUPPORT_CUSTOM_FIELDS = {
	ORGANIZATION_ID: "48492",
	PROJECT: "48491",
	BILLING_PLAN: "56024"
};
const SUPPORT_ANALYTICS_EVENT = "submit_support_ticket";
var FIRSTNAME_MAX_LENGTH = 40;
var SUBJECT_MAX_LENGTH = 128;
var MESSAGE_MAX_LENGTH = 4096;
var ATTACHMENT_MAX_BYTES = 5 * 1024 * 1024;
async function submitSupportTicket(params) {
	if (!GROWTH_ENDPOINT?.trim()) return false;
	const firstName = params.firstName.slice(0, FIRSTNAME_MAX_LENGTH) || "Unknown";
	const subject = params.subject.slice(0, SUBJECT_MAX_LENGTH);
	const message = params.message.slice(0, MESSAGE_MAX_LENGTH);
	if (params.attachment && params.attachment.size > ATTACHMENT_MAX_BYTES) throw new Error("Attachment must be 5 MB or less");
	const customFields = [
		{
			id: SUPPORT_CUSTOM_FIELDS.ORGANIZATION_ID,
			value: params.organizationId
		},
		{
			id: SUPPORT_CUSTOM_FIELDS.PROJECT,
			value: params.projectId ?? ""
		},
		{
			id: SUPPORT_CUSTOM_FIELDS.BILLING_PLAN,
			value: params.billingPlanId ?? ""
		}
	];
	const form = new FormData();
	form.append("email", params.email);
	form.append("subject", subject);
	form.append("firstName", firstName);
	form.append("message", message);
	form.append("tags[]", "console");
	form.append("customFields", JSON.stringify(customFields));
	if (params.attachment) form.append("attachment", params.attachment);
	const baseUrl = GROWTH_ENDPOINT.replace(/\/$/, "");
	if ((await fetch(`${baseUrl}/support`, {
		method: "POST",
		body: form
	})).status !== 200) throw new Error("Failed to submit support ticket");
	return true;
}
function getSupportAnalyticsEvent() {
	return SUPPORT_ANALYTICS_EVENT;
}
var SUPPORT_TIMEZONE = "Europe/Paris";
function getSupportHoursInLocalTime() {
	const now = /* @__PURE__ */ new Date();
	const month = now.getMonth();
	const cetOffset = month >= 2 && month <= 9 ? 2 : 1;
	const timeFormatter = new Intl.DateTimeFormat(void 0, {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true
	});
	const startCET = new Date(now);
	startCET.setUTCHours(14 - cetOffset, 0, 0, 0);
	const endCET = new Date(now);
	endCET.setUTCHours(26 - cetOffset, 0, 0, 0);
	const startLocal = timeFormatter.format(startCET);
	const endLocal = timeFormatter.format(endCET);
	const parts = new Intl.DateTimeFormat("en-GB", {
		timeZone: SUPPORT_TIMEZONE,
		weekday: "long",
		hour: "2-digit",
		hour12: false
	}).formatToParts(now);
	const part = (k) => parts.find((p) => p.type === k)?.value ?? "";
	const cetWeekday = part("weekday");
	const cetHour = parseInt(part("hour"), 10);
	const w = {
		Monday: 1,
		Tuesday: 2,
		Wednesday: 3,
		Thursday: 4,
		Friday: 5,
		Saturday: 6,
		Sunday: 0
	}[cetWeekday] ?? 0;
	return {
		startLocal,
		endLocal,
		isOpen: w >= 1 && w <= 4 && cetHour >= 14 || w >= 2 && w <= 5 && cetHour < 2 || w === 5 && cetHour >= 14 || w === 6 && cetHour < 2,
		timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
	};
}
export { getSupportHoursInLocalTime as n, submitSupportTicket as r, getSupportAnalyticsEvent as t };
