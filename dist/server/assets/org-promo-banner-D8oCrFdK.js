import { A as getInitMockDayBannerExpired, E as INIT_ORG_PROMO_BANNER_DAYS_AFTER_EVENT } from "./i18n-Db4baE06.js";
import { s as getEnvProfileFeatures } from "./console-profiles-D__E5Kgi.js";
import { d as resolveInitCurrentDay, f as resolveInitRecapMode, m as parseDateOnly, n as getActiveLaunchEvent } from "./events-s0i9XY3r.js";
function resolveInitOrgPromoPhase(event, now, mockCurrentDay) {
	if (resolveInitRecapMode(event, now, mockCurrentDay)) return "after";
	if (resolveInitCurrentDay(event, now, mockCurrentDay) <= 0) return "before";
	return "during";
}
function isInitOrgPromoBannerExpired(event, options) {
	const now = options?.now ?? /* @__PURE__ */ new Date();
	const mockCurrentDay = options?.mockCurrentDay ?? null;
	if (mockCurrentDay !== null) return mockCurrentDay >= getInitMockDayBannerExpired();
	const end = parseDateOnly(event.endDate);
	end.setHours(23, 59, 59, 999);
	const hideAfter = new Date(end);
	hideAfter.setDate(hideAfter.getDate() + 7);
	return now > hideAfter;
}
function resolveInitOrgPromoBanner(event, options) {
	if (!event?.featured) return null;
	const now = options?.now ?? /* @__PURE__ */ new Date();
	const mockCurrentDay = options?.mockCurrentDay ?? null;
	if (isInitOrgPromoBannerExpired(event, {
		now,
		mockCurrentDay
	})) return null;
	const phase = resolveInitOrgPromoPhase(event, now, mockCurrentDay);
	switch (phase) {
		case "before": return {
			eventId: event.id,
			phase,
			dateRangeLabel: event.dateRangeLabel,
			message: "A week of launches, live sessions, and community events. Claim your ticket to join.",
			cta: {
				label: event.primaryCta.label,
				to: "/init"
			}
		};
		case "during": return {
			eventId: event.id,
			phase,
			dateRangeLabel: event.dateRangeLabel,
			message: "Launch week is live. Follow daily drops, live sessions, and giveaways.",
			cta: {
				label: "Join Init",
				to: "/init"
			},
			badgeLabel: "Live"
		};
		case "after": return {
			eventId: event.id,
			phase,
			dateRangeLabel: event.dateRangeLabel,
			message: event.recap?.bannerMessage ?? "Init week has ended. Explore every launch and session replay.",
			cta: {
				label: "View recap",
				to: "/init"
			},
			badgeLabel: "Recap"
		};
	}
}
function getInitOrgPromoBannerContent(options) {
	return resolveInitOrgPromoBanner(getActiveLaunchEvent(options?.now), options);
}
function isInitEventDuring(options) {
	if (!getEnvProfileFeatures().init) return false;
	const event = getActiveLaunchEvent(options?.now);
	if (!event?.featured || event.days.length === 0) return false;
	return resolveInitOrgPromoPhase(event, options?.now ?? /* @__PURE__ */ new Date(), options?.mockCurrentDay ?? null) === "during";
}
export { isInitEventDuring as n, getInitOrgPromoBannerContent as t };
