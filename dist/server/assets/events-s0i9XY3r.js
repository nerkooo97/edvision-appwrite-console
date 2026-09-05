import { T as INIT_MOCK_DAY_BEFORE, k as getInitMockDayAfter } from "./i18n-Db4baE06.js";
import { t as INIT_TICKET_MATCHERS } from "./ticket-types-BpqSrvYB.js";
import { Cloud, Database, Gift, Megaphone, Rocket, Shield, Ticket } from "lucide-react";
const INIT_JULY_2026_DAYS = [
	{
		day: 1,
		dateLabel: "AUGUST 31",
		weekdayLabel: "MONDAY, AUGUST 31",
		title: "Announcing Appwrite 2.0",
		description: "The next chapter of Appwrite is here.",
		longDescription: "Meet Appwrite 2.0 - a refreshed platform experience, stronger foundations, and the start of everything we are shipping during Init week.",
		icon: Megaphone,
		visual: {
			mockVisualId: "appwrite-2",
			imageAlt: "Appwrite 2.0 mock with Appwrite icon mark and 2.0 wordmark"
		},
		isLive: true,
		sessionCount: 2,
		headerNavCta: {
			label: "Discover Appwrite 2.0",
			href: "/home",
			external: false
		},
		resources: [
			{
				id: "day1-announce",
				typeLabel: "Blog",
				title: "Announcing Appwrite 2.0",
				href: "/blog",
				actionLabel: "Read article"
			},
			{
				id: "day1-hyperloop",
				typeLabel: "Blog",
				title: "Hyperloop B - New engine behind Appwrite 2.0",
				href: "/blog",
				actionLabel: "Read article"
			},
			{
				id: "day1-console-iv",
				typeLabel: "Blog",
				title: "Console IV - Next-gen Appwrite console, rebuilt with TanStack",
				href: "/blog",
				actionLabel: "Read article"
			},
			{
				id: "day1-terminal",
				typeLabel: "Blog",
				title: "Introducing Appwrite Terminal",
				href: "/blog/post/announcing-console-terminal",
				actionLabel: "Read article"
			},
			{
				id: "day1-explorer",
				typeLabel: "Blog",
				title: "Introducing Appwrite Explorer",
				href: "/blog/post/announcing-appwrite-explorer",
				actionLabel: "Read article"
			}
		]
	},
	{
		day: 2,
		dateLabel: "SEPTEMBER 1",
		weekdayLabel: "TUESDAY, SEPTEMBER 1",
		title: "PostgreSQL comes to Appwrite",
		description: "Native PostgreSQL, managed inside Appwrite.",
		longDescription: "Run PostgreSQL on Appwrite with full SQL control, familiar extensions, and the tooling you already use - without leaving the platform.",
		icon: Database,
		visual: {
			mockVisualId: "postgres",
			imageAlt: "PostgreSQL SQL editor mock with query and results"
		},
		sessionCount: 2,
		headerNavCta: {
			label: "Explore PostgreSQL",
			href: "/docs/products/databases",
			external: false
		},
		resources: [{
			id: "day2-blog",
			typeLabel: "Blog",
			title: "PostgreSQL comes to Appwrite",
			href: "/blog",
			actionLabel: "Read article"
		}, {
			id: "day2-docs",
			typeLabel: "Docs",
			title: "PostgreSQL documentation",
			href: "/docs/products/databases",
			actionLabel: "Visit docs"
		}]
	},
	{
		day: 3,
		dateLabel: "SEPTEMBER 2",
		weekdayLabel: "WEDNESDAY, SEPTEMBER 2",
		title: "VectorsDB, DocumentsDB & MySQL",
		description: "Three new database types for modern apps.",
		longDescription: "VectorsDB, DocumentsDB, and MySQL expand what you can build on Appwrite - from vector search and flexible documents to familiar SQL workloads.",
		icon: Database,
		visual: {
			mockVisualId: "databases",
			imageAlt: "Database types mock with TablesDB, DocumentsDB, VectorsDB, and native PostgreSQL and MySQL"
		},
		sessionCount: 2,
		headerNavCta: {
			label: "Explore new database types",
			href: "/docs/products/databases",
			external: false
		},
		resources: [
			{
				id: "day3-vectorsdb-blog",
				typeLabel: "Blog",
				title: "VectorsDB comes to Appwrite",
				href: "/blog",
				actionLabel: "Read article"
			},
			{
				id: "day3-documentsdb-blog",
				typeLabel: "Blog",
				title: "DocumentsDB comes to Appwrite",
				href: "/blog",
				actionLabel: "Read article"
			},
			{
				id: "day3-mysql-blog",
				typeLabel: "Blog",
				title: "MySQL comes to Appwrite",
				href: "/blog",
				actionLabel: "Read article"
			},
			{
				id: "day3-five-database-types-blog",
				typeLabel: "Blog",
				title: "Five database types in Appwrite, and why we built them",
				href: "/blog",
				actionLabel: "Read article"
			},
			{
				id: "day3-docs",
				typeLabel: "Docs",
				title: "Databases documentation",
				href: "/docs/products/databases",
				actionLabel: "Visit docs"
			}
		]
	},
	{
		day: 4,
		dateLabel: "SEPTEMBER 3",
		weekdayLabel: "THURSDAY, SEPTEMBER 3",
		title: "S3 support for Storage",
		description: "Access Appwrite Storage with S3-compatible APIs.",
		longDescription: "Appwrite Storage now exposes a project-scoped S3 endpoint with SigV4 signing. Use rclone, Terraform, AWS CLI, and other S3 tooling against your buckets without rebuilding upload flows.",
		icon: Cloud,
		visual: {
			mockVisualId: "s3-storage",
			imageAlt: "Appwrite Storage S3 proxy mock with project endpoint, credentials, and compatible tools"
		},
		sessionCount: 2,
		headerNavCta: {
			label: "Try S3 for Storage",
			href: "/docs/products/storage",
			external: false
		},
		resources: [{
			id: "day4-blog",
			typeLabel: "Blog",
			title: "S3 support for Appwrite Storage",
			href: "/blog",
			actionLabel: "Read article"
		}, {
			id: "day4-docs",
			typeLabel: "Docs",
			title: "Storage & S3",
			href: "/docs/products/storage",
			actionLabel: "Visit docs"
		}]
	},
	{
		day: 5,
		dateLabel: "SEPTEMBER 4",
		weekdayLabel: "FRIDAY, SEPTEMBER 4",
		title: "Appwrite Firewall & Domains",
		description: "Protect traffic and own your domains in Appwrite.",
		longDescription: "Appwrite Firewall filters abuse before it reaches your APIs, Functions, and Sites. Appwrite Domains lets you buy hostnames, manage DNS, and connect custom domains with automatic TLS from the Console.",
		icon: Shield,
		visual: {
			mockVisualId: "firewall",
			imageAlt: "Appwrite Firewall mock with traffic stats, flow strip, and rule list"
		},
		sessionCount: 3,
		headerNavCta: {
			label: "Explore Firewall & Domains",
			href: "/docs/products/firewall",
			external: false
		},
		resources: [
			{
				id: "day5-firewall-blog",
				typeLabel: "Blog",
				title: "Introducing Appwrite Firewall",
				href: "/blog",
				actionLabel: "Read article"
			},
			{
				id: "day5-domains-blog",
				typeLabel: "Blog",
				title: "Introducing Appwrite Domains",
				href: "/blog",
				actionLabel: "Read article"
			},
			{
				id: "day5-firewall-docs",
				typeLabel: "Docs",
				title: "Firewall documentation",
				href: "/docs/products/firewall",
				actionLabel: "Visit docs"
			},
			{
				id: "day5-domains-docs",
				typeLabel: "Docs",
				title: "Domains documentation",
				href: "/docs/products/domains",
				actionLabel: "Visit docs"
			}
		]
	}
];
const INIT_JULY_2026_SCHEDULE = [
	{
		id: "sched-keynote",
		day: 1,
		platform: "youtube",
		title: "Appwrite 2.0 launch stream",
		timeLabel: "Live now",
		isLive: true
	},
	{
		id: "sched-reddit-ama",
		day: 1,
		platform: "reddit",
		title: "Appwrite 2.0 AMA",
		timeLabel: "2:00 PM",
		href: "https://reddit.com/r/appwrite"
	},
	{
		id: "sched-yt-databases",
		day: 2,
		platform: "youtube",
		title: "PostgreSQL deep dive",
		timeLabel: "10:00 AM"
	},
	{
		id: "sched-reddit-databases-ama",
		day: 2,
		platform: "reddit",
		title: "PostgreSQL AMA",
		timeLabel: "3:00 PM",
		href: "https://reddit.com/r/appwrite"
	},
	{
		id: "sched-yt-servers",
		day: 3,
		platform: "youtube",
		title: "VectorsDB, DocumentsDB & MySQL deep dive",
		timeLabel: "10:00 AM"
	},
	{
		id: "sched-reddit-servers-ama",
		day: 3,
		platform: "reddit",
		title: "VectorsDB, DocumentsDB & MySQL AMA",
		timeLabel: "6:00 PM",
		href: "https://reddit.com/r/appwrite"
	},
	{
		id: "sched-yt-s3",
		day: 4,
		platform: "youtube",
		title: "S3 for Appwrite Storage",
		timeLabel: "10:00 AM"
	},
	{
		id: "sched-reddit-s3-ama",
		day: 4,
		platform: "reddit",
		title: "S3 for Storage AMA",
		timeLabel: "2:00 PM",
		href: "https://reddit.com/r/appwrite"
	},
	{
		id: "sched-yt-firewall",
		day: 5,
		platform: "youtube",
		title: "Appwrite Firewall & Domains launch stream",
		timeLabel: "10:00 AM"
	},
	{
		id: "sched-discord-closing",
		day: 5,
		platform: "discord",
		title: "Init closing party",
		timeLabel: "5:00 PM",
		href: "/discord"
	},
	{
		id: "sched-reddit-recap-ama",
		day: 5,
		platform: "reddit",
		title: "Init week AMA",
		timeLabel: "7:00 PM",
		href: "https://reddit.com/r/appwrite"
	}
];
const INIT_JULY_2026_TICKET_CONFIG = { rules: [
	{
		typeId: "gold",
		when: INIT_TICKET_MATCHERS.appwriteVerified
	},
	{
		typeId: "silver",
		when: INIT_TICKET_MATCHERS.longTermVip
	},
	{
		typeId: "standard",
		when: INIT_TICKET_MATCHERS.always
	}
] };
const INIT_SEP_2026_TICKET_CONFIG = { rules: [
	{
		typeId: "gold",
		when: INIT_TICKET_MATCHERS.appwriteVerified
	},
	{
		typeId: "silver",
		when: INIT_TICKET_MATCHERS.longTermVip
	},
	{
		typeId: "standard",
		when: INIT_TICKET_MATCHERS.always
	}
] };
const INIT_JULY_2026_PRIZES = {
	sectionTitle: "Prizes and giveaways",
	sectionDescription: "Daily swag on days 1–4. Share your ticket on social to enter the day 5 grand prize.",
	dailyHeading: "Daily swag giveaways",
	dailyPrizeLabel: "Appwrite Init swag",
	grandPrizeHeading: "Grand prize",
	dailyGiveaways: [
		{
			day: 1,
			dateLabel: "AUGUST 31",
			scheduleItemId: "sched-reddit-ama",
			sessionTitle: "Appwrite 2.0 AMA",
			platform: "reddit",
			timeLabel: "2:00 PM",
			href: "https://reddit.com/r/appwrite",
			prizeDescription: "Appwrite hoodie and cap",
			visual: {
				imageAlt: "Day 1 giveaway including an Appwrite hoodie and cap",
				imageSrcLight: "/images/init/prize-day-1-swag-light.jpg",
				imageSrcDark: "/images/init/prize-day-1-swag.jpg"
			}
		},
		{
			day: 2,
			dateLabel: "SEPTEMBER 1",
			scheduleItemId: "sched-reddit-databases-ama",
			sessionTitle: "PostgreSQL AMA",
			platform: "reddit",
			timeLabel: "3:00 PM",
			href: "https://reddit.com/r/appwrite",
			prizeDescription: "Light Appwriter keyboard",
			visual: {
				imageAlt: "Day 2 giveaway including a light Appwriter keyboard",
				imageSrcLight: "/images/init/prize-day-2-swag-light.jpg",
				imageSrcDark: "/images/init/prize-day-2-swag.jpg"
			}
		},
		{
			day: 3,
			dateLabel: "SEPTEMBER 2",
			scheduleItemId: "sched-reddit-servers-ama",
			sessionTitle: "VectorsDB, DocumentsDB & MySQL AMA",
			platform: "reddit",
			timeLabel: "6:00 PM",
			href: "https://reddit.com/r/appwrite",
			prizeDescription: "Dark Appwriter keyboard",
			visual: {
				imageAlt: "Day 3 giveaway including a dark Appwriter keyboard",
				imageSrcLight: "/images/init/prize-day-3-swag-light.jpg",
				imageSrcDark: "/images/init/prize-day-3-swag.jpg"
			}
		},
		{
			day: 4,
			dateLabel: "SEPTEMBER 3",
			scheduleItemId: "sched-reddit-s3-ama",
			sessionTitle: "S3 for Storage AMA",
			platform: "reddit",
			timeLabel: "2:00 PM",
			href: "https://reddit.com/r/appwrite",
			prizeDescription: "RUNTIME bottle and Appwrite tee",
			visual: {
				imageAlt: "Day 4 giveaway including a RUNTIME water bottle and Appwrite tee",
				imageSrcLight: "/images/init/prize-day-4-swag-light.jpg",
				imageSrcDark: "/images/init/prize-day-4-swag.jpg"
			}
		}
	],
	grandPrize: {
		day: 5,
		dateLabel: "SEPTEMBER 4",
		scheduleItemId: "sched-discord-closing",
		sessionTitle: "Init closing party",
		platform: "discord",
		timeLabel: "5:00 PM",
		href: "/discord",
		title: "Claude Max 20x · 12 months free",
		description: "Expanded Claude Code access for one winner.",
		eligibility: "Share Init on social during the week to enter.",
		visual: {
			imageAlt: "Claude Max 20x plan with a free 12-month subscription grand prize card",
			imageSrcLight: "/images/init/prize-grand-claude-max-light.jpg",
			imageSrcDark: "/images/init/prize-grand-claude-max.jpg"
		}
	}
};
function parseDateOnly(isoDate) {
	const [year, month, day] = isoDate.split("-").map(Number);
	return new Date(year, month - 1, day);
}
function resolveInitDayUnlockDate(startDate, dayNumber) {
	const unlock = parseDateOnly(startDate);
	unlock.setDate(unlock.getDate() + Math.max(dayNumber - 1, 0));
	return unlock;
}
function isInitDailyPrizeRevealed(currentDay, prizeDay) {
	return currentDay > 0 && currentDay >= prizeDay;
}
function getInitMaskedSessionTitle(platform, day) {
	switch (platform) {
		case "youtube": return "Product tour";
		case "reddit": return `Day ${day} AMA`;
		case "discord": return "Closing party";
	}
}
function applyInitPrizesVisibility(prizes, currentDay) {
	return {
		...prizes,
		dailyGiveaways: prizes.dailyGiveaways.map((giveaway) => ({
			...giveaway,
			sessionTitle: isInitDailyPrizeRevealed(currentDay, giveaway.day) ? giveaway.sessionTitle : getInitMaskedSessionTitle(giveaway.platform, giveaway.day)
		})),
		grandPrize: {
			...prizes.grandPrize,
			sessionTitle: prizes.grandPrize.sessionTitle && isInitDailyPrizeRevealed(currentDay, prizes.grandPrize.day) ? prizes.grandPrize.sessionTitle : prizes.grandPrize.platform ? getInitMaskedSessionTitle(prizes.grandPrize.platform, prizes.grandPrize.day) : prizes.grandPrize.sessionTitle
		}
	};
}
function toLockedDay(day) {
	return {
		day: day.day,
		dateLabel: day.dateLabel,
		weekdayLabel: day.weekdayLabel,
		isLocked: true
	};
}
function getInitMaxDay(event) {
	return event.days.reduce((max, day) => Math.max(max, day.day), 0);
}
function resolveInitCurrentDay(event, now = /* @__PURE__ */ new Date(), mockCurrentDay = null) {
	const dayNumbers = event.days.map((day) => day.day).sort((a, b) => a - b);
	const minDay = dayNumbers[0] ?? 1;
	const maxDay = dayNumbers[dayNumbers.length - 1] ?? minDay;
	if (mockCurrentDay !== null) return Math.min(Math.max(mockCurrentDay, 0), maxDay + 1);
	const start = parseDateOnly(event.startDate);
	const end = parseDateOnly(event.endDate);
	end.setHours(23, 59, 59, 999);
	if (now < start) return 0;
	if (now > end) return maxDay;
	const dayIndex = Math.floor((now.getTime() - start.getTime()) / (1440 * 60 * 1e3)) + 1;
	return Math.min(Math.max(dayIndex, minDay), maxDay);
}
function resolveInitRecapMode(event, now = /* @__PURE__ */ new Date(), mockCurrentDay = null) {
	const maxDay = getInitMaxDay(event);
	if (maxDay === 0) return false;
	if (mockCurrentDay !== null) return mockCurrentDay >= getInitMockDayAfter(maxDay);
	const end = parseDateOnly(event.endDate);
	end.setHours(23, 59, 59, 999);
	return now > end;
}
function buildRecapDisplayEvent(event, currentDay) {
	const days = event.days.map((day) => ({
		...day,
		isLive: false
	}));
	const schedule = event.schedule.map((item) => ({
		...item,
		isLive: false
	}));
	const recap = event.recap;
	return {
		...event,
		headline: recap?.headline ?? "Init recap",
		description: recap?.description ?? "Catch up on every launch, rewatch sessions, and explore what shipped during Init week.",
		days,
		schedule,
		liveBanner: void 0,
		liveActivities: [],
		giveaway: void 0,
		getInvolved: recap?.getInvolved ?? event.getInvolved,
		currentDay,
		isRecapMode: true
	};
}
function applyInitEventVisibility(event, options) {
	const now = options?.now ?? /* @__PURE__ */ new Date();
	const mockCurrentDay = options?.mockCurrentDay ?? null;
	const currentDay = resolveInitCurrentDay(event, now, mockCurrentDay);
	if (resolveInitRecapMode(event, now, mockCurrentDay)) return buildRecapDisplayEvent(event, currentDay);
	const days = event.days.map((day) => {
		if (currentDay <= 0 || day.day > currentDay) return toLockedDay(day);
		return {
			...day,
			isLive: day.day === currentDay
		};
	});
	const schedule = event.schedule.map((item) => ({
		...item,
		title: isInitDailyPrizeRevealed(currentDay, item.day) ? item.title : getInitMaskedSessionTitle(item.platform, item.day),
		isLive: item.day === currentDay ? item.isLive : false
	}));
	const liveBanner = currentDay === 1 && event.liveBanner ? event.liveBanner : void 0;
	const prizes = event.prizes ? applyInitPrizesVisibility(event.prizes, currentDay) : void 0;
	return {
		...event,
		days,
		schedule,
		liveBanner,
		prizes,
		currentDay,
		isRecapMode: false
	};
}
const INIT_TICKET_SECTION_ID = "ticket";
const INIT_GLOBE_SECTION_ID = "globe";
const INIT_GET_INVOLVED_SECTION_ID = "get-involved";
const INIT_PRIZES_SECTION_ID = "prizes";
const INIT_RELEASE_AVAILABILITY_SECTION_ID = "release-availability";
const LAUNCH_EVENTS = [{
	id: "init-july-2026",
	slug: "init-july-2026",
	name: "init",
	dateRangeLabel: "AUGUST 31 - SEPTEMBER 4",
	headline: "Init is happening August 31 - September 4",
	description: "Init is happening August 31 - September 4. A week of exciting product launches, live sessions, and community events. Five days of launches, demos, and surprises.",
	startDate: "2026-08-31",
	endDate: "2026-09-04",
	status: "active",
	featured: true,
	presenceEnabled: true,
	tickets: INIT_JULY_2026_TICKET_CONFIG,
	primaryCta: {
		label: "Claim your ticket",
		to: "/sign-up",
		redirect: "/init"
	},
	headerNavCta: {
		beforeEvent: {
			label: "Back to Appwrite",
			href: "/home",
			external: false
		},
		duringAfterEvent: {
			label: "Explore Appwrite",
			href: "/home",
			external: false
		}
	},
	liveBanner: {
		title: "Appwrite 2.0 launch",
		href: "/init/keynote"
	},
	onlineCount: 0,
	othersOnlineCount: 0,
	days: INIT_JULY_2026_DAYS,
	schedule: INIT_JULY_2026_SCHEDULE,
	onlineUsers: [],
	recentlyOnlineUsers: [],
	liveActivities: [
		{
			id: "appwrite-2",
			title: "Appwrite 2.0 launch",
			statusLabel: "Live now",
			status: "live"
		},
		{
			id: "databases",
			title: "PostgreSQL comes to Appwrite",
			statusLabel: "Starting in 15m",
			status: "upcoming"
		},
		{
			id: "servers",
			title: "VectorsDB, DocumentsDB & MySQL",
			statusLabel: "Starting in 1h",
			status: "scheduled"
		}
	],
	giveaway: {
		title: "Init giveaways",
		description: "Win an Appwrite hoodie and tee, light and dark Appwriter keyboards, a RUNTIME bottle, and more on days 1-4. Day 5 grand prize: 12 months of Claude Max 20x.",
		ctaLabel: "View all prizes",
		ctaHref: `#${INIT_PRIZES_SECTION_ID}`,
		imageSrcLight: "/images/init/giveaway-swag-promo-light.jpg",
		imageSrcDark: "/images/init/giveaway-swag-promo.jpg",
		imageAlt: "Appwrite swag including a hoodie, cap, water bottle, tee, Appwriter keyboards, and a Claude Max 12-month subscription card"
	},
	prizes: INIT_JULY_2026_PRIZES,
	releaseAvailability: {
		unlockDay: 5,
		sectionTitle: "Cloud and Self-host are live.",
		sectionDescription: "Every Init feature is available on Appwrite Cloud, and Community Edition ships the complete Appwrite 2.0 release for self-hosting.",
		lockedTitle: "Cloud ships daily. Self-host unlocks soon.",
		lockedDescription: "Every Init feature goes live on Appwrite Cloud the same day. Community Edition unlocks with the complete release when Init week wraps up.",
		cloud: {
			title: "Appwrite Cloud",
			availabilityLabel: "Live each Init day",
			unlockDay: 1,
			description: "Each day's feature goes live on Cloud the day it drops.",
			ctaLabel: "Get started",
			href: "/"
		},
		selfHosted: {
			title: "Community Edition",
			availabilityLabel: "Complete release",
			description: "Self-host the full Appwrite 2.0 package on your infrastructure.",
			ctaLabel: "Installation docs",
			href: "/docs/advanced/self-hosting"
		}
	},
	getInvolved: [
		{
			id: "ticket",
			title: "Claim your ticket",
			description: "Get access and unlock exclusive swag.",
			icon: Ticket,
			href: `#${INIT_TICKET_SECTION_ID}`
		},
		{
			id: "community",
			title: "Join the conversation",
			description: "Share feedback and connect with the community.",
			iconSrc: "/icons/discord-simple.svg",
			href: "/discord"
		},
		{
			id: "swag",
			title: "Earn launch rewards",
			description: "Join daily sessions and enter the day 5 grand prize draw.",
			icon: Gift,
			href: `#${INIT_PRIZES_SECTION_ID}`
		}
	],
	recap: {
		headline: "Init recap",
		description: "Five days of launches are in the books. Rewatch sessions, explore every announcement, and catch up on what you missed from Init August 31 - September 4.",
		bannerMessage: "Init August 31 - September 4 has ended. Browse the full recap below.",
		introTitle: "Everything we shipped",
		introDescription: "From Appwrite 2.0 to Appwrite Firewall & Domains. Explore the full launch timeline, blog posts, and session replays.",
		getInvolvedSectionTitle: "Keep exploring",
		getInvolved: [{
			id: "explore",
			title: "Explore Appwrite",
			description: "Try the launches from Init week in your project today.",
			icon: Rocket,
			href: "/home"
		}, {
			id: "community",
			title: "Join the conversation",
			description: "Share feedback and stay connected with the Appwrite community.",
			iconSrc: "/icons/discord-simple.svg",
			href: "/discord"
		}],
		ticket: {
			titleAuthenticated: "Your Init ticket",
			titleGuest: "View your Init ticket",
			descriptionAuthenticated: "Your personalized pass from Init week. Customize it, export a share video, or post it on socials.",
			descriptionGuest: "Sign in to view your personalized Init pass and share your experience from launch week.",
			descriptionCollapsedAuthenticated: "Customize and share your Init pass.",
			descriptionCollapsedGuest: "Sign in to view your Init pass.",
			shareButtonLabel: "Share ticket"
		}
	}
}, {
	id: "init-sep-2026",
	slug: "init-sep-2026",
	name: "init",
	dateRangeLabel: "SEP 15 - 19",
	headline: "Init returns Sep 15 - 19",
	description: "Init returns Sep 15 - 19. Another week of launches, workshops, and community celebrations.",
	startDate: "2026-09-15",
	endDate: "2026-09-19",
	status: "upcoming",
	tickets: INIT_SEP_2026_TICKET_CONFIG,
	primaryCta: {
		label: "Save the date",
		href: "/init",
		external: false
	},
	onlineCount: 0,
	othersOnlineCount: 0,
	days: [],
	schedule: [],
	onlineUsers: [],
	recentlyOnlineUsers: [],
	liveActivities: [],
	getInvolved: [{
		id: "notify",
		title: "Get notified",
		description: "Be the first to know when registration opens.",
		icon: Ticket,
		href: "/init"
	}]
}];
function deriveStatus(event, now = /* @__PURE__ */ new Date()) {
	if (event.status !== "upcoming" && event.status !== "past") {
		const start = parseDateOnly(event.startDate);
		const end = parseDateOnly(event.endDate);
		end.setHours(23, 59, 59, 999);
		if (now < start) return "upcoming";
		if (now > end) return "past";
		return "active";
	}
	return event.status;
}
function getActiveLaunchEvent(now = /* @__PURE__ */ new Date()) {
	const featured = LAUNCH_EVENTS.find((event) => event.featured);
	if (featured) return {
		...featured,
		status: deriveStatus(featured, now)
	};
	const withDerivedStatus = LAUNCH_EVENTS.map((event) => ({
		...event,
		status: deriveStatus(event, now)
	}));
	const active = withDerivedStatus.find((event) => event.status === "active");
	if (active) return active;
	const upcoming = withDerivedStatus.filter((event) => event.status === "upcoming").sort((a, b) => parseDateOnly(a.startDate).getTime() - parseDateOnly(b.startDate).getTime());
	if (upcoming[0]) return upcoming[0];
	return withDerivedStatus.filter((event) => event.status === "past").sort((a, b) => parseDateOnly(b.endDate).getTime() - parseDateOnly(a.endDate).getTime())[0];
}
function getLaunchEventBySlug(slug) {
	return LAUNCH_EVENTS.find((event) => event.slug === slug);
}
var DEFAULT_INIT_HEADER_NAV_BEFORE = {
	label: "Back to Appwrite",
	href: "/home",
	external: false
};
var DEFAULT_INIT_HEADER_NAV_DURING_AFTER = {
	label: "Explore Appwrite",
	href: "/home",
	external: false
};
function dayHeaderNavCtaToHeaderNav(dayCta) {
	return {
		label: dayCta.label,
		href: dayCta.href,
		external: dayCta.external ?? true
	};
}
function resolveInitHeaderNavPhase(event, calendarStatus, mockCurrentDay) {
	if (mockCurrentDay === null || !event) return calendarStatus;
	const mockAfterDay = getInitMockDayAfter(event.days.reduce((max, day) => Math.max(max, day.day), 0));
	if (mockCurrentDay <= 0) return "upcoming";
	if (mockCurrentDay >= mockAfterDay) return "past";
	return "active";
}
function resolveInitHeaderNavCta(options) {
	const now = options?.now ?? /* @__PURE__ */ new Date();
	const activeEvent = options?.event ?? getActiveLaunchEvent(now);
	const overrides = activeEvent?.headerNavCta;
	const mockCurrentDay = options?.mockCurrentDay ?? null;
	const phase = resolveInitHeaderNavPhase(activeEvent, activeEvent?.status ?? "upcoming", mockCurrentDay);
	if (phase === "upcoming") return {
		...DEFAULT_INIT_HEADER_NAV_BEFORE,
		...overrides?.beforeEvent
	};
	if (phase === "active" && activeEvent) {
		const currentDay = resolveInitCurrentDay(activeEvent, now, mockCurrentDay);
		const day = activeEvent.days.find((entry) => entry.day === currentDay);
		if (day?.headerNavCta) return dayHeaderNavCtaToHeaderNav(day.headerNavCta);
	}
	return {
		...DEFAULT_INIT_HEADER_NAV_DURING_AFTER,
		...overrides?.duringAfterEvent
	};
}
export { INIT_GET_INVOLVED_SECTION_ID as a, INIT_RELEASE_AVAILABILITY_SECTION_ID as c, resolveInitCurrentDay as d, resolveInitRecapMode as f, resolveInitDayUnlockDate as h, resolveInitHeaderNavCta as i, INIT_TICKET_SECTION_ID as l, parseDateOnly as m, getActiveLaunchEvent as n, INIT_GLOBE_SECTION_ID as o, isInitDailyPrizeRevealed as p, getLaunchEventBySlug as r, INIT_PRIZES_SECTION_ID as s, LAUNCH_EVENTS as t, applyInitEventVisibility as u };
