import { Sr as DATABASE_OPERATIONS_BREAKDOWN_SECTIONS, Xr as REQUESTS_BREAKDOWN_SECTIONS, Yr as BANDWIDTH_BREAKDOWN_SECTIONS } from "./hooks-BONwG3Mt.js";
function generateTimeSeries(days, baseValue, variance, trend = "stable") {
	const now = Date.now();
	const dayMs = 1440 * 60 * 1e3;
	const data = [];
	for (let i = days - 1; i >= 0; i--) {
		const timestamp = now - i * dayMs;
		let trendFactor = 1;
		if (trend === "up") trendFactor = 1 + (days - i) / days * .3;
		if (trend === "down") trendFactor = 1 - (days - i) / days * .2;
		const randomVariance = 1 + (Math.random() - .5) * variance;
		const value = Math.round(baseValue * trendFactor * randomVariance);
		data.push({
			timestamp,
			value: Math.max(0, value)
		});
	}
	return data;
}
function formatMetricValue(value, unit) {
	if (unit === "GB" || unit === "MB") return `${value.toFixed(2)} ${unit}`;
	if (value >= 1e9) return `${(value / 1e9).toFixed(2)}B`;
	if (value >= 1e6) return `${(value / 1e6).toFixed(2)}M`;
	if (value >= 1e3) return `${(value / 1e3).toFixed(2)}K`;
	return value.toLocaleString();
}
function getUsagePercentage(current, quota) {
	if (quota === null || quota === 0) return null;
	return Math.min(100, current / quota * 100);
}
function getUsageStatus(percentage) {
	if (percentage === null) return "normal";
	if (percentage >= 90) return "critical";
	if (percentage >= 75) return "warning";
	return "normal";
}
const planQuotas = {
	free: {
		compute: {
			executions: 75e4,
			gbHours: 100
		},
		auth: {
			mau: 75e3,
			otp: 10,
			signUps: null
		},
		databases: {
			reads: 1e6,
			writes: 5e5,
			collections: 100,
			documents: null
		},
		storage: {
			bytes: 2 * 1e3 * 1e3 * 1e3,
			operations: 5e5
		},
		bandwidth: {
			egress: 10 * 1e3 * 1e3 * 1e3,
			ingress: null
		},
		realtime: { connections: 250 },
		messaging: {
			messages: 1e4,
			topics: 100,
			sms: 0
		},
		avatars: { screenshots: 50 },
		webhooks: {
			webhooks: 5,
			eventsSent: null,
			eventsFailed: null
		}
	},
	pro: {
		compute: {
			executions: 35e5,
			gbHours: 500
		},
		auth: {
			mau: 2e5,
			otp: 100,
			signUps: null
		},
		databases: {
			reads: 5e6,
			writes: 25e5,
			collections: 500,
			documents: null
		},
		storage: {
			bytes: 150 * 1e3 * 1e3 * 1e3,
			operations: 25e5
		},
		bandwidth: {
			egress: 300 * 1e3 * 1e3 * 1e3,
			ingress: null
		},
		realtime: { connections: 500 },
		messaging: {
			messages: 1e5,
			topics: 500,
			sms: 100
		},
		avatars: { screenshots: 5e3 },
		webhooks: {
			webhooks: 25,
			eventsSent: null,
			eventsFailed: null
		}
	},
	custom: {
		compute: {
			executions: null,
			gbHours: null
		},
		auth: {
			mau: null,
			otp: null,
			signUps: null
		},
		databases: {
			reads: null,
			writes: null,
			collections: null,
			documents: null
		},
		storage: {
			bytes: null,
			operations: null
		},
		bandwidth: {
			egress: null,
			ingress: null
		},
		realtime: { connections: null },
		messaging: {
			messages: null,
			topics: null,
			sms: null
		},
		avatars: { screenshots: null },
		webhooks: {
			webhooks: null,
			eventsSent: null,
			eventsFailed: null
		}
	}
};
function generateMockUsageData(plan = "pro") {
	const quotas = planQuotas[plan];
	const now = Date.now();
	const dayMs = 1440 * 60 * 1e3;
	const billingCycleStart = now - 15 * dayMs;
	const billingCycleEnd = now + 15 * dayMs;
	return {
		categories: [
			{
				id: "compute",
				label: "Compute",
				icon: "Cpu",
				description: "Function executions and compute resources consumed by your serverless functions.",
				metrics: [{
					id: "executions",
					name: "Function Executions",
					description: "Total number of function invocations during this billing cycle. Each time a function is triggered (via HTTP, schedule, or event), it counts as one execution. Executions beyond your plan limit are billed at $0.50 per 1,000 executions.",
					unit: "executions",
					currentValue: 1245e3,
					quota: quotas.compute.executions,
					timeSeries: generateTimeSeries(30, 41500, .4, "up"),
					thresholds: {
						warning: 75,
						critical: 90
					}
				}, {
					id: "gb-hours",
					name: "GB-Hours",
					description: "Compute time measured in gigabyte-hours. This represents the memory allocated to your functions multiplied by execution duration. A function using 512MB for 2 hours consumes 1 GB-hour. Additional GB-hours are billed at $0.15 per GB-hour.",
					unit: "GB-hours",
					currentValue: 287.5,
					quota: quotas.compute.gbHours,
					timeSeries: generateTimeSeries(30, 9.6, .3, "stable"),
					thresholds: {
						warning: 75,
						critical: 90
					}
				}]
			},
			{
				id: "auth",
				label: "Auth",
				icon: "Users",
				description: "Authentication metrics including active users, OTP usage, and sign-up activity.",
				metrics: [
					{
						id: "mau",
						name: "Monthly Active Users",
						description: "Unique users who have authenticated at least once during the billing cycle. This includes all authentication methods (email, OAuth, phone, etc.). MAU beyond your plan limit are billed at $0.02 per user.",
						unit: "users",
						currentValue: 45230,
						quota: quotas.auth.mau,
						timeSeries: generateTimeSeries(30, 1508, .2, "up"),
						thresholds: {
							warning: 75,
							critical: 90
						}
					},
					{
						id: "otp",
						name: "OTP Attempts",
						description: "One-time password verification attempts via SMS or email. Each OTP sent counts toward this limit. Additional OTP messages are billed at $0.05 per message for email and $0.10 for SMS.",
						unit: "attempts",
						currentValue: 2340,
						quota: quotas.auth.otp,
						timeSeries: generateTimeSeries(30, 78, .5, "stable"),
						thresholds: {
							warning: 75,
							critical: 90
						}
					},
					{
						id: "signups",
						name: "Sign-ups",
						description: "New user registrations during this billing cycle. This metric helps you track user growth and onboarding patterns. Sign-ups are not directly limited but contribute to your MAU count.",
						unit: "users",
						currentValue: 3890,
						quota: quotas.auth.signUps,
						timeSeries: generateTimeSeries(30, 130, .4, "up")
					}
				]
			},
			{
				id: "databases",
				label: "Databases",
				icon: "Database",
				description: "Database operations including reads, writes, and resource counts.",
				metrics: [
					{
						id: "reads",
						name: "Database Reads",
						description: "Total document read operations across all databases. Each query that retrieves documents counts as reads (one per document returned). Reads beyond your plan limit are billed at $0.30 per 1,000,000 reads.",
						unit: "reads",
						currentValue: 2456e3,
						quota: quotas.databases.reads,
						timeSeries: generateTimeSeries(30, 81867, .35, "stable"),
						thresholds: {
							warning: 75,
							critical: 90
						}
					},
					{
						id: "writes",
						name: "Database Writes",
						description: "Total document write operations (create, update, delete) across all databases. Each mutation counts as one write. Writes beyond your plan limit are billed at $1.00 per 1,000,000 writes.",
						unit: "writes",
						currentValue: 892e3,
						quota: quotas.databases.writes,
						timeSeries: generateTimeSeries(30, 29733, .4, "up"),
						thresholds: {
							warning: 75,
							critical: 90
						}
					},
					{
						id: "collections",
						name: "Collections",
						description: "Total number of collections (tables) across all databases. Collections define your data schema and indexes. Additional collections beyond your plan limit require a plan upgrade.",
						unit: "collections",
						currentValue: 47,
						quota: quotas.databases.collections,
						timeSeries: generateTimeSeries(30, 47, .02, "stable"),
						thresholds: {
							warning: 75,
							critical: 90
						}
					},
					{
						id: "documents",
						name: "Total Documents",
						description: "Total number of documents stored across all collections. This represents your data volume. Document storage is not directly limited but contributes to your storage usage.",
						unit: "documents",
						currentValue: 1245890,
						quota: quotas.databases.documents,
						timeSeries: generateTimeSeries(30, 1245890, .01, "up")
					}
				]
			},
			{
				id: "storage",
				label: "Storage",
				icon: "Folder",
				description: "File storage usage and operations for your storage buckets.",
				metrics: [{
					id: "bytes-stored",
					name: "Storage Used",
					description: "Total bytes stored across all buckets. This includes all uploaded files and their versions. Storage beyond your plan limit is billed at $0.03 per GB per month.",
					unit: "GB",
					currentValue: 45.7,
					quota: quotas.storage.bytes ? quotas.storage.bytes / (1e3 * 1e3 * 1e3) : null,
					timeSeries: generateTimeSeries(30, 45.7, .05, "up"),
					thresholds: {
						warning: 75,
						critical: 90
					}
				}, {
					id: "file-operations",
					name: "File Operations",
					description: "Total file operations including uploads, downloads, and deletions. Each API call to the storage service counts as one operation. Additional operations are billed at $0.10 per 10,000 operations.",
					unit: "operations",
					currentValue: 456e3,
					quota: quotas.storage.operations,
					timeSeries: generateTimeSeries(30, 15200, .3, "stable"),
					thresholds: {
						warning: 75,
						critical: 90
					}
				}]
			},
			{
				id: "bandwidth",
				label: "Bandwidth",
				icon: "ArrowUpDown",
				description: "Network bandwidth consumption for API requests and file transfers.",
				metrics: [{
					id: "egress",
					name: "Bandwidth Egress",
					description: "Data transferred out from Appwrite to your users. This includes API responses, file downloads, and function outputs. Egress beyond your plan limit is billed at $0.09 per GB.",
					unit: "GB",
					currentValue: 125.8,
					quota: quotas.bandwidth.egress ? quotas.bandwidth.egress / (1e3 * 1e3 * 1e3) : null,
					timeSeries: generateTimeSeries(30, 4.2, .35, "stable"),
					thresholds: {
						warning: 75,
						critical: 90
					}
				}, {
					id: "ingress",
					name: "Bandwidth Ingress",
					description: "Data transferred into Appwrite from your users. This includes API requests, file uploads, and function inputs. Ingress is typically unlimited and not billed separately.",
					unit: "GB",
					currentValue: 34.2,
					quota: quotas.bandwidth.ingress ? quotas.bandwidth.ingress / (1e3 * 1e3 * 1e3) : null,
					timeSeries: generateTimeSeries(30, 1.14, .4, "up")
				}]
			},
			{
				id: "realtime",
				label: "Realtime",
				icon: "Radio",
				description: "WebSocket connections for real-time data synchronization.",
				metrics: [{
					id: "connections",
					name: "Concurrent Connections",
					description: "Peak number of simultaneous WebSocket connections. This represents users actively subscribed to real-time updates. Connections beyond your plan limit may be queued or rejected.",
					unit: "connections",
					currentValue: 342,
					quota: quotas.realtime.connections,
					timeSeries: generateTimeSeries(30, 285, .25, "stable"),
					thresholds: {
						warning: 75,
						critical: 90
					}
				}]
			},
			{
				id: "messaging",
				label: "Messaging",
				icon: "MessageSquare",
				description: "Push notifications, emails, and SMS messages sent through the messaging service.",
				metrics: [
					{
						id: "messages",
						name: "Messages Sent",
						description: "Total messages sent across all channels (push, email, SMS). Each notification or message counts toward this limit. Additional messages are billed based on the channel type.",
						unit: "messages",
						currentValue: 23450,
						quota: quotas.messaging.messages,
						timeSeries: generateTimeSeries(30, 782, .4, "up"),
						thresholds: {
							warning: 75,
							critical: 90
						}
					},
					{
						id: "topics",
						name: "Topics",
						description: "Number of messaging topics for organizing subscribers. Topics allow you to group users for targeted notifications. Additional topics beyond your plan limit require a plan upgrade.",
						unit: "topics",
						currentValue: 24,
						quota: quotas.messaging.topics,
						timeSeries: generateTimeSeries(30, 24, .02, "stable"),
						thresholds: {
							warning: 75,
							critical: 90
						}
					},
					{
						id: "sms",
						name: "SMS Messages",
						description: "SMS messages sent for authentication or notifications. SMS is billed separately at carrier rates. Each SMS segment (160 characters) counts as one message.",
						unit: "messages",
						currentValue: 45,
						quota: quotas.messaging.sms,
						timeSeries: generateTimeSeries(30, 1.5, .6, "stable"),
						thresholds: {
							warning: 75,
							critical: 90
						}
					}
				]
			},
			{
				id: "avatars",
				label: "Avatars",
				icon: "UserCircle",
				description: "Avatars API usage for webpage screenshots and other generated assets.",
				metrics: [{
					id: "screenshots",
					name: "Screenshots Generated",
					description: "Webpage screenshots captured through the Avatars Screenshots API. Each successful request counts toward your monthly plan limit. Additional screenshots are billed per capture on paid plans.",
					unit: "screenshots",
					currentValue: 1240,
					quota: quotas.avatars.screenshots,
					timeSeries: generateTimeSeries(30, 41, .35, "up"),
					thresholds: {
						warning: 75,
						critical: 90
					}
				}]
			},
			{
				id: "webhooks",
				label: "Webhooks",
				icon: "Webhook",
				description: "Webhook event deliveries and configured endpoints for Appwrite event notifications.",
				metrics: [
					{
						id: "events-sent",
						name: "Events Sent",
						description: "Webhook events successfully delivered to your endpoints. Each HTTP request sent counts as one event.",
						unit: "events",
						currentValue: 12840,
						quota: quotas.webhooks.eventsSent,
						timeSeries: generateTimeSeries(30, 428, .35, "up"),
						thresholds: {
							warning: 75,
							critical: 90
						}
					},
					{
						id: "events-failed",
						name: "Events Failed",
						description: "Webhook delivery failures including non-2xx responses and connection errors.",
						unit: "events",
						currentValue: 42,
						quota: quotas.webhooks.eventsFailed,
						timeSeries: generateTimeSeries(30, 1.4, .5, "stable")
					},
					{
						id: "webhooks",
						name: "Webhooks",
						description: "Number of webhooks configured in your project. Each webhook can subscribe to multiple Appwrite events.",
						unit: "webhooks",
						currentValue: 6,
						quota: quotas.webhooks.webhooks,
						timeSeries: generateTimeSeries(30, 6, .05, "stable"),
						thresholds: {
							warning: 75,
							critical: 90
						}
					}
				]
			}
		],
		billingCycleStart,
		billingCycleEnd,
		plan
	};
}
generateMockUsageData("pro");
const REQUESTS_USAGE_CATEGORY = {
	id: "requests",
	label: "Requests",
	icon: "Activity",
	description: "API request volume and breakdowns across paths, methods, status codes, and client attributes.",
	metrics: [{
		id: "api-requests",
		name: "Requests over time"
	}, ...REQUESTS_BREAKDOWN_SECTIONS.map((section) => ({
		id: section.metricId,
		name: section.title
	}))]
};
const BANDWIDTH_USAGE_CATEGORY = {
	id: "bandwidth",
	label: "Bandwidth",
	icon: "ArrowUpDown",
	description: "Network bandwidth consumption with breakdowns across paths, services, and client attributes.",
	metrics: [{
		id: "bandwidth-over-time",
		name: "Bandwidth over time"
	}, ...BANDWIDTH_BREAKDOWN_SECTIONS.map((section) => ({
		id: section.metricId,
		name: section.title
	}))]
};
function buildRequestsUsageCategoryMetrics() {
	return REQUESTS_USAGE_CATEGORY.metrics.map((metric) => ({
		id: metric.id,
		name: metric.name,
		description: "",
		unit: "requests",
		currentValue: 0,
		quota: null,
		timeSeries: []
	}));
}
function buildBandwidthUsageCategoryMetrics() {
	return BANDWIDTH_USAGE_CATEGORY.metrics.map((metric) => ({
		id: metric.id,
		name: metric.name,
		description: "",
		unit: "GB",
		currentValue: 0,
		quota: null,
		timeSeries: []
	}));
}
const DATABASES_USAGE_CATEGORY = {
	id: "databases",
	label: "Databases",
	icon: "Database",
	description: "Database operations including reads, writes, and resource counts.",
	metrics: [
		{
			id: "reads",
			name: "Database reads"
		},
		{
			id: "writes",
			name: "Database writes"
		},
		...DATABASE_OPERATIONS_BREAKDOWN_SECTIONS.map((section) => ({
			id: `reads-${section.metricId}`,
			name: `Reads: ${section.title}`
		})),
		...DATABASE_OPERATIONS_BREAKDOWN_SECTIONS.map((section) => ({
			id: `writes-${section.metricId}`,
			name: `Writes: ${section.title}`
		})),
		{
			id: "collections",
			name: "Collections"
		},
		{
			id: "documents",
			name: "Total documents"
		}
	]
};
function buildDatabasesUsageCategoryMetrics() {
	return DATABASES_USAGE_CATEGORY.metrics.map((metric) => ({
		id: metric.id,
		name: metric.name,
		description: "",
		unit: metric.id === "reads" || metric.id === "writes" ? "operations" : "count",
		currentValue: 0,
		quota: null,
		timeSeries: []
	}));
}
const REALTIME_USAGE_CATEGORY = {
	id: "realtime",
	label: "Realtime",
	icon: "Radio",
	description: "WebSocket connections, messages sent, and bandwidth for live data synchronization.",
	metrics: [
		{
			id: "connections",
			name: "Concurrent connections"
		},
		{
			id: "messages",
			name: "Messages sent"
		},
		{
			id: "bandwidth",
			name: "Realtime bandwidth"
		}
	]
};
function buildRealtimeUsageCategoryMetrics() {
	return REALTIME_USAGE_CATEGORY.metrics.map((metric) => ({
		id: metric.id,
		name: metric.name,
		description: "",
		unit: metric.id === "bandwidth" ? "bytes" : metric.id === "messages" ? "messages" : "connections",
		currentValue: 0,
		quota: null,
		timeSeries: []
	}));
}
const AUTH_USAGE_CATEGORY = {
	id: "auth",
	label: "Auth",
	icon: "Users",
	description: "Authentication metrics including monthly active users, phone OTP usage, and sign-up activity.",
	metrics: [
		{
			id: "mau",
			name: "Monthly active users"
		},
		{
			id: "otp",
			name: "OTP attempts"
		},
		{
			id: "signups",
			name: "Sign-ups"
		}
	]
};
function buildAuthUsageCategoryMetrics() {
	return AUTH_USAGE_CATEGORY.metrics.map((metric) => ({
		id: metric.id,
		name: metric.name,
		description: "",
		unit: metric.id === "otp" ? "attempts" : metric.id === "signups" ? "users" : "users",
		currentValue: 0,
		quota: null,
		timeSeries: []
	}));
}
const COMPUTE_USAGE_CATEGORY = {
	id: "compute",
	label: "Compute",
	icon: "Cpu",
	description: "Combined function and site executions plus compute time across your project.",
	metrics: [{
		id: "executions",
		name: "Executions"
	}, {
		id: "gb-hours",
		name: "GB-hours"
	}]
};
const FUNCTIONS_USAGE_CATEGORY = {
	id: "functions",
	label: "Functions",
	icon: "Zap",
	description: "Function executions and compute time during the selected period.",
	metrics: [{
		id: "executions",
		name: "Executions"
	}, {
		id: "gb-hours",
		name: "GB-hours"
	}]
};
const SITES_USAGE_CATEGORY = {
	id: "sites",
	label: "Sites",
	icon: "Globe",
	description: "Site executions and compute time during the selected period.",
	metrics: [{
		id: "executions",
		name: "Executions"
	}, {
		id: "gb-hours",
		name: "GB-hours"
	}]
};
function buildComputeUsageCategoryMetrics() {
	return COMPUTE_USAGE_CATEGORY.metrics.map((metric) => ({
		id: metric.id,
		name: metric.name,
		description: "",
		unit: metric.id === "gb-hours" ? "GB-hours" : "executions",
		currentValue: 0,
		quota: null,
		timeSeries: []
	}));
}
function buildFunctionsUsageCategoryMetrics() {
	return FUNCTIONS_USAGE_CATEGORY.metrics.map((metric) => ({
		id: metric.id,
		name: metric.name,
		description: "",
		unit: metric.id === "gb-hours" ? "GB-hours" : "executions",
		currentValue: 0,
		quota: null,
		timeSeries: []
	}));
}
function buildSitesUsageCategoryMetrics() {
	return SITES_USAGE_CATEGORY.metrics.map((metric) => ({
		id: metric.id,
		name: metric.name,
		description: "",
		unit: metric.id === "gb-hours" ? "GB-hours" : "executions",
		currentValue: 0,
		quota: null,
		timeSeries: []
	}));
}
const AVATARS_USAGE_CATEGORY = {
	id: "avatars",
	label: "Avatars",
	icon: "UserCircle",
	description: "Avatars API usage for webpage screenshots and other generated assets.",
	metrics: [{
		id: "screenshots",
		name: "Screenshots generated"
	}]
};
function buildAvatarsUsageCategoryMetrics() {
	return AVATARS_USAGE_CATEGORY.metrics.map((metric) => ({
		id: metric.id,
		name: metric.name,
		description: "",
		unit: "screenshots",
		currentValue: 0,
		quota: null,
		timeSeries: []
	}));
}
const MESSAGING_USAGE_CATEGORY = {
	id: "messaging",
	label: "Messaging",
	icon: "MessageSquare",
	description: "Push notifications, emails, and SMS messages sent through the messaging service.",
	metrics: [
		{
			id: "messages",
			name: "Messages sent"
		},
		{
			id: "topics",
			name: "Topics"
		},
		{
			id: "sms",
			name: "SMS messages"
		}
	]
};
function buildMessagingUsageCategoryMetrics() {
	return MESSAGING_USAGE_CATEGORY.metrics.map((metric) => ({
		id: metric.id,
		name: metric.name,
		description: "",
		unit: metric.id === "topics" ? "topics" : metric.id === "sms" ? "messages" : "messages",
		currentValue: 0,
		quota: null,
		timeSeries: []
	}));
}
const WEBHOOKS_USAGE_CATEGORY = {
	id: "webhooks",
	label: "Webhooks",
	icon: "Webhook",
	description: "Webhook event deliveries and configured endpoints for Appwrite event notifications.",
	metrics: [
		{
			id: "events-sent",
			name: "Events sent"
		},
		{
			id: "events-failed",
			name: "Events failed"
		},
		{
			id: "webhooks",
			name: "Webhooks"
		}
	]
};
function buildWebhooksUsageCategoryMetrics() {
	return WEBHOOKS_USAGE_CATEGORY.metrics.map((metric) => ({
		id: metric.id,
		name: metric.name,
		description: "",
		unit: metric.id === "webhooks" ? "webhooks" : "events",
		currentValue: 0,
		quota: null,
		timeSeries: []
	}));
}
const STORAGE_USAGE_CATEGORY = {
	id: "storage",
	label: "Storage",
	icon: "Folder",
	description: "File, deployment, and build storage usage, plus billable image transformations.",
	metrics: [
		{
			id: "file-storage",
			name: "Files"
		},
		{
			id: "deployment-storage",
			name: "Deployment storage"
		},
		{
			id: "build-storage",
			name: "Build storage"
		},
		{
			id: "image-transformations",
			name: "Image transformations"
		}
	]
};
function buildStorageUsageCategoryMetrics() {
	return STORAGE_USAGE_CATEGORY.metrics.map((metric) => ({
		id: metric.id,
		name: metric.name,
		description: "",
		unit: metric.id === "image-transformations" ? "origin images" : "bytes",
		currentValue: 0,
		quota: null,
		timeSeries: []
	}));
}
const DEFAULT_USAGE_CATEGORY_ID = "requests";
const USAGE_NAV_GROUPS = [{
	id: "resources",
	label: "Resources",
	categoryIds: [
		"requests",
		"bandwidth",
		"compute",
		"realtime",
		"webhooks"
	]
}, {
	id: "products",
	label: "Products",
	categoryIds: [
		"auth",
		"databases",
		"storage",
		"functions",
		"messaging",
		"sites",
		"avatars"
	]
}];
function getUsageNavGroups(plan = "pro") {
	const categories = getUsageCategories(plan);
	const categoryById = new Map(categories.map((category) => [category.id, category]));
	return USAGE_NAV_GROUPS.map((group) => ({
		...group,
		categories: group.categoryIds.map((categoryId) => categoryById.get(categoryId)).filter((category) => category != null)
	})).filter((group) => group.categories.length > 0);
}
function insertBandwidthCategory(categories) {
	const bandwidthCategory = {
		...BANDWIDTH_USAGE_CATEGORY,
		metrics: buildBandwidthUsageCategoryMetrics()
	};
	return categories.map((category) => category.id === "bandwidth" ? bandwidthCategory : category);
}
function insertRequestsCategory(categories) {
	const requestsCategory = {
		...REQUESTS_USAGE_CATEGORY,
		metrics: buildRequestsUsageCategoryMetrics()
	};
	const bandwidthIndex = categories.findIndex((category) => category.id === "bandwidth");
	if (bandwidthIndex === -1) return [...categories, requestsCategory];
	return [
		...categories.slice(0, bandwidthIndex),
		requestsCategory,
		...categories.slice(bandwidthIndex)
	];
}
function insertDatabasesCategory(categories) {
	const databasesCategory = {
		...DATABASES_USAGE_CATEGORY,
		metrics: buildDatabasesUsageCategoryMetrics()
	};
	return categories.map((category) => category.id === "databases" ? databasesCategory : category);
}
function insertRealtimeCategory(categories) {
	const realtimeCategory = {
		...REALTIME_USAGE_CATEGORY,
		metrics: buildRealtimeUsageCategoryMetrics()
	};
	return categories.map((category) => category.id === "realtime" ? realtimeCategory : category);
}
function insertComputeCategory(categories) {
	const computeCategory = {
		...COMPUTE_USAGE_CATEGORY,
		metrics: buildComputeUsageCategoryMetrics()
	};
	return categories.map((category) => category.id === "compute" ? computeCategory : category);
}
function insertFunctionsCategory(categories) {
	const functionsCategory = {
		...FUNCTIONS_USAGE_CATEGORY,
		metrics: buildFunctionsUsageCategoryMetrics()
	};
	if (categories.some((category) => category.id === "functions")) return categories.map((category) => category.id === "functions" ? functionsCategory : category);
	const computeIndex = categories.findIndex((category) => category.id === "compute");
	if (computeIndex === -1) return [...categories, functionsCategory];
	return [
		...categories.slice(0, computeIndex + 1),
		functionsCategory,
		...categories.slice(computeIndex + 1)
	];
}
function insertSitesCategory(categories) {
	const sitesCategory = {
		...SITES_USAGE_CATEGORY,
		metrics: buildSitesUsageCategoryMetrics()
	};
	if (categories.some((category) => category.id === "sites")) return categories.map((category) => category.id === "sites" ? sitesCategory : category);
	const functionsIndex = categories.findIndex((category) => category.id === "functions");
	if (functionsIndex === -1) return [...categories, sitesCategory];
	return [
		...categories.slice(0, functionsIndex + 1),
		sitesCategory,
		...categories.slice(functionsIndex + 1)
	];
}
function insertAuthCategory(categories) {
	const authCategory = {
		...AUTH_USAGE_CATEGORY,
		metrics: buildAuthUsageCategoryMetrics()
	};
	return categories.map((category) => category.id === "auth" ? authCategory : category);
}
function insertAvatarsCategory(categories) {
	const avatarsCategory = {
		...AVATARS_USAGE_CATEGORY,
		metrics: buildAvatarsUsageCategoryMetrics()
	};
	return categories.map((category) => category.id === "avatars" ? avatarsCategory : category);
}
function insertMessagingCategory(categories) {
	const messagingCategory = {
		...MESSAGING_USAGE_CATEGORY,
		metrics: buildMessagingUsageCategoryMetrics()
	};
	return categories.map((category) => category.id === "messaging" ? messagingCategory : category);
}
function insertWebhooksCategory(categories) {
	const webhooksCategory = {
		...WEBHOOKS_USAGE_CATEGORY,
		metrics: buildWebhooksUsageCategoryMetrics()
	};
	return categories.map((category) => category.id === "webhooks" ? webhooksCategory : category);
}
function insertStorageCategory(categories) {
	const storageCategory = {
		...STORAGE_USAGE_CATEGORY,
		metrics: buildStorageUsageCategoryMetrics()
	};
	return categories.map((category) => category.id === "storage" ? storageCategory : category);
}
function getUsageCategories(plan = "pro") {
	return insertStorageCategory(insertWebhooksCategory(insertMessagingCategory(insertAvatarsCategory(insertAuthCategory(insertSitesCategory(insertFunctionsCategory(insertComputeCategory(insertRealtimeCategory(insertDatabasesCategory(insertBandwidthCategory(insertRequestsCategory(generateMockUsageData(plan).categories))))))))))));
}
function findUsageCategory(categories, categoryId) {
	return categories.find((category) => category.id === categoryId);
}
function isValidUsageCategory(categoryId, plan = "pro") {
	return findUsageCategory(getUsageCategories(plan), categoryId) != null;
}
function getDefaultUsageCategoryId() {
	return DEFAULT_USAGE_CATEGORY_ID;
}
function resolveUsageCategoryId(categoryId, plan = "pro") {
	if (categoryId && isValidUsageCategory(categoryId, plan)) return categoryId;
	return DEFAULT_USAGE_CATEGORY_ID;
}
function getUsageCategoryIdFromPathname(pathname) {
	const parts = pathname.split("/").filter(Boolean);
	const usageIndex = parts.findIndex((part) => part === "usage");
	if (usageIndex < 0) return void 0;
	return parts[usageIndex + 1] ?? void 0;
}
export { getUsageNavGroups as a, formatMetricValue as c, getUsageCategoryIdFromPathname as i, getUsagePercentage as l, getDefaultUsageCategoryId as n, isValidUsageCategory as o, getUsageCategories as r, resolveUsageCategoryId as s, findUsageCategory as t, getUsageStatus as u };
