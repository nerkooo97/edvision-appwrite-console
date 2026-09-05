import { t as getRuntimeConfig } from "./runtime-config-DK7G0iKr.js";
var GROWTH_ENDPOINT = getRuntimeConfig().growthEndpoint;
const FEEDBACK_CUSTOM_FIELDS = {
	PAGE_URL: "47364",
	NPS_SCORE: "40655",
	BILLING_PLAN: "56109"
};
var FIRSTNAME_MAX_LENGTH = 40;
async function submitFeedback(params) {
	if (!GROWTH_ENDPOINT?.trim()) return false;
	const firstname = params.firstname.slice(0, FIRSTNAME_MAX_LENGTH) || "Unknown";
	const body = {
		subject: params.subject,
		message: params.message,
		email: params.email ?? "",
		firstname,
		customFields: params.customFields,
		metaFields: params.metaFields
	};
	if ((await fetch(`${GROWTH_ENDPOINT.replace(/\/$/, "")}/feedback`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	})).status >= 400) throw new Error("Failed to submit feedback");
	return true;
}
async function submitDocsFeedback(params) {
	if (!GROWTH_ENDPOINT?.trim()) return false;
	if ((await fetch(`${GROWTH_ENDPOINT.replace(/\/$/, "")}/feedback/docs`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: params.email,
			type: params.type,
			route: params.route,
			comment: params.comment,
			metaFields: { userId: params.userId }
		})
	})).status >= 400) throw new Error("Failed to submit feedback");
	return true;
}
export { submitDocsFeedback as n, submitFeedback as r, FEEDBACK_CUSTOM_FIELDS as t };
