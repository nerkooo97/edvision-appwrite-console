import { t as translate } from "./translate-DZcqveGn.js";
import { t as MARKETING_PAGE_ROUTE_STATIC_DATA } from "./route-static-data-C0zd0Uu7.js";
import { On as MARKETING_SITE_TEMPLATES_PROJECT_ID, Zt as siteFrameworksQueryOptions, qt as marketingSiteTemplatesQueryOptions } from "./affiliates-BOg1SHC6.js";
import { n as pageTitle } from "./page-title-D-d2GRz3.js";
import { a as isProductId, i as PRODUCT_REGISTRY } from "./registry-C4rxXMsK.js";
import { n as getMarketingPageMetaTags } from "./route-meta-CfD66bzz.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
var PRODUCT_CONTENT = {
	auth: {
		id: "auth",
		metaDescription: "Add secure authentication to your app with email, OAuth, SMS, magic URLs, MFA, teams, presences, and session management.",
		hero: {
			title: "Authentication that ships with your product",
			description: "Give users a secure sign-in experience without building auth infrastructure. Appwrite Auth supports the methods your users expect, team collaboration signals, and the controls your team needs.",
			stats: [
				{
					value: "40+",
					label: "OAuth providers"
				},
				{
					value: "7",
					label: "Sign-in methods"
				},
				{
					value: "Multi-Tenancy",
					label: "Memberships & roles"
				},
				{
					value: "MFA",
					label: "Two-factor auth"
				},
				{
					value: "Presences",
					label: "Team collaboration"
				}
			]
		},
		faq: [
			{
				question: "Can I use Auth without building a custom login UI?",
				answer: "Yes. Appwrite Auth is API-first, so you keep full control of the UI in your app and call the Account SDK for sign-up, login, sessions, and MFA. Quick starts cover React, Next.js, Vue, SvelteKit, Flutter, and other platforms. For server-rendered apps, verify sessions on your backend and issue HTTP-only cookies using the SSR guides.",
				links: [
					{
						label: "Quick start",
						href: "/docs/products/auth/quick-start"
					},
					{
						label: "SSR authentication",
						href: "/docs/products/auth/server-side-rendering"
					},
					{
						label: "Checking auth status",
						href: "/docs/products/auth/checking-auth-status"
					}
				]
			},
			{
				question: "Does Auth support social login and linked identities?",
				answer: "Yes. Appwrite supports OAuth 2.0 with 30+ providers, including GitHub, Google, Apple, Discord, and Microsoft. Enable providers in the Console under Auth > Social providers, add your OAuth credentials and redirect URI, then start the flow from the Account SDK. Each OAuth sign-in creates an identity linked to the user account, so one person can connect multiple providers without duplicate accounts.",
				links: [{
					label: "OAuth2",
					href: "/docs/products/auth/oauth2"
				}, {
					label: "Identities",
					href: "/docs/products/auth/identities"
				}]
			},
			{
				question: "How does passwordless sign-in work?",
				answer: "Enable Magic URL, Email OTP, and Phone SMS from Auth settings in the Console. Magic URL sends a one-click sign-in link to the user's email. Email OTP delivers a time-limited code they enter in your app. Phone SMS verifies users through text messages without a password. You can offer passwordless methods alongside email and password, or disable password login entirely for a password-free experience.",
				links: [
					{
						label: "Magic URL",
						href: "/docs/products/auth/magic-url"
					},
					{
						label: "Email OTP",
						href: "/docs/products/auth/email-otp"
					},
					{
						label: "Phone SMS",
						href: "/docs/products/auth/phone-sms"
					}
				]
			},
			{
				question: "How do teams and multi-tenancy work?",
				answer: "Create a team for each customer, organization, or workspace in your app. Invite members by email, assign roles, and scope databases, storage buckets, functions, and other resources with team-based permissions. Teams give you tenant isolation without building custom RBAC, and membership privacy settings let you control whether member lists are visible to other users.",
				links: [
					{
						label: "Multi-tenancy",
						href: "/docs/products/auth/multi-tenancy"
					},
					{
						label: "Teams",
						href: "/docs/products/auth/teams"
					},
					{
						label: "Team invites",
						href: "/docs/products/auth/team-invites"
					}
				]
			},
			{
				question: "How do I add multi-factor authentication?",
				answer: "Enable MFA in Auth settings, then let users enroll an authenticator app (TOTP) and download recovery codes. MFA adds a second step after the primary sign-in method. Require it for sensitive actions such as updating credentials or accessing protected resources. Users who lose their device can sign in with a recovery code instead of the TOTP.",
				links: [{
					label: "MFA",
					href: "/docs/products/auth/mfa"
				}, {
					label: "Security",
					href: "/docs/products/auth/security"
				}]
			},
			{
				question: "Can I migrate users from another auth provider?",
				answer: "Yes. Import users through the Console or the Users API with the Server SDK. For email and password accounts, create users with plain-text passwords or import existing password hashes when your provider uses a supported algorithm: Argon2, bcrypt, scrypt, scrypt-modified (Firebase), SHA, MD5, or PHPass. New passwords are stored with Argon2. Hashes imported from other algorithms are upgraded to Argon2 after the user's first successful sign-in.",
				links: [{
					label: "Manage users",
					href: "/docs/products/auth/users"
				}, {
					label: "Password hashing",
					href: "/docs/advanced/security/authentication#password-hashing"
				}]
			},
			{
				question: "How are passwords, sessions, and security policies configured?",
				answer: "Appwrite hashes passwords with Argon2, including salting and adjustable work factors. From Auth Policies and Settings, set minimum length, character requirements, password history, dictionary checks, and rules that block personal data in passwords. Email policies can block disposable, aliased, or free-provider addresses at sign-up. Session settings control duration, limits per user, and cookie behavior for web apps.",
				links: [
					{
						label: "Email and password login",
						href: "/docs/products/auth/email-password"
					},
					{
						label: "Email policies",
						href: "/docs/products/auth/email-policies"
					},
					{
						label: "Security",
						href: "/docs/products/auth/security"
					}
				]
			},
			{
				question: "What team collaboration features can presences power?",
				answer: "Presences show who is active right now: online, away, typing, or viewing a page or channel. Upsert records with status and metadata, then subscribe over Realtime for live updates. Use them for team rosters, shared doc viewers, chat typing indicators, and support queue availability.",
				links: [{
					label: "Presences",
					href: "/docs/products/auth/presences"
				}, {
					label: "Realtime",
					href: "/docs/apis/realtime"
				}]
			},
			{
				question: "How does Auth work with self-hosted Appwrite?",
				answer: "Auth is included in every Appwrite deployment. Self-hosted installations use the same Auth APIs, SDKs, OAuth providers, policies, and session behavior as Appwrite Cloud. Configure auth methods, password rules, and security policies from the Console the same way.",
				links: [{
					label: "Auth overview",
					href: "/docs/products/auth"
				}, {
					label: "Self-hosting",
					href: "/docs/advanced/self-hosting"
				}]
			}
		],
		cta: {
			title: "Start building with Auth",
			description: "Create a project and add authentication in minutes with our quick start guides."
		}
	},
	databases: {
		id: "databases",
		metaDescription: "Store and query data with TablesDB, DocumentsDB, VectorsDB, PostgreSQL, and MySQL. Choose serverless or dedicated, with replication, backups, and PITR.",
		hero: {
			title: "Databases for every data model",
			description: "Pick the engine that fits your workload, then scale it the same way. Appwrite Databases cover structured tables, documents, vectors, and native SQL, with serverless or dedicated compute, replication, backups, and point-in-time recovery."
		},
		faq: [
			{
				question: "What database engines does Appwrite offer?",
				answer: "Appwrite Databases include five engines in two categories. Appwrite DBs are TablesDB for relational-style tables and columns, DocumentsDB for flexible JSON documents, and VectorsDB for embeddings and similarity search. Native DBs are managed PostgreSQL and MySQL for teams that need full SQL compatibility, extensions, and portable schemas.",
				links: [{
					label: "Databases overview",
					href: "/docs/products/databases"
				}, {
					label: "Quick start",
					href: "/docs/products/databases/quick-start"
				}]
			},
			{
				question: "When should I use Appwrite DBs vs native PostgreSQL or MySQL?",
				answer: "Choose TablesDB, DocumentsDB, or VectorsDB when you want Appwrite SDKs, Console workflows, and Auth-aware permissions out of the box. Choose PostgreSQL or MySQL when you need advanced SQL, existing ORM tooling, extensions such as pgvector, or to run schemas you already operate elsewhere.",
				links: [{
					label: "Tables",
					href: "/docs/products/databases/tables"
				}, {
					label: "Queries",
					href: "/docs/products/databases/queries"
				}]
			},
			{
				question: "What is the difference between serverless and dedicated databases?",
				answer: "Serverless databases run on a shared pool and are the fastest way to start. Billing is usage-based: there is no fixed compute fee, and you pay for storage plus reads and writes against your plan quota (then overage). Dedicated databases provision isolated compute for predictable performance, higher connection limits, and production options such as read replicas, high availability, and point-in-time recovery. Billing is a fixed monthly compute tier per database (from $10/mo), with reads and writes included in the tier. HA replicas and PITR are optional add-ons, and extra storage or bandwidth is billed as overage. You pick a specification when you create the database and can upgrade later.",
				links: [{
					label: "Database pricing",
					href: "/pricing#database-pricing"
				}]
			},
			{
				question: "How do replication and high availability work?",
				answer: "On serverless databases, replication and high availability are abstracted and managed by the platform, so you do not configure replicas or sync mode yourself. On dedicated databases, traffic can enter through a connection pooler such as PgDog or ProxySQL. A primary instance accepts reads and writes, and read replicas scale query traffic and improve failover resilience. High availability is enabled when replica count is greater than zero. Choose asynchronous, synchronous, or quorum sync mode, and promote a replica from the Console when you need to move write traffic."
			},
			{
				question: "Are backups and PITR included?",
				answer: "Yes on Appwrite Cloud for supported plans and engines. Create automated backup policies or run manual backups from the Backups tab. Point-in-time recovery (PITR) on dedicated databases lets you restore to a specific moment beyond the latest scheduled backup, which helps after accidental deletes, failed migrations, or bad writes.",
				links: [{
					label: "Backups",
					href: "/docs/products/databases/backups"
				}]
			},
			{
				question: "Do Appwrite DBs integrate with Auth permissions?",
				answer: "Yes. TablesDB and DocumentsDB permissions can reference users, teams, and roles from Appwrite Auth at the table, collection, row, and document level. Scope data per customer or workspace without building custom access control.",
				links: [{
					label: "Permissions",
					href: "/docs/products/databases/permissions"
				}, {
					label: "Multi-tenancy",
					href: "/docs/products/auth/multi-tenancy"
				}]
			},
			{
				question: "Can I query, relate, and bulk-update data from the SDKs?",
				answer: "Yes. Appwrite DBs support filters, ordering, pagination, relationships, transactions, bulk operations, and geo queries through the SDKs and Console. Native PostgreSQL and MySQL databases support full SQL from the in-console editor and your existing SQL clients.",
				links: [
					{
						label: "Queries",
						href: "/docs/products/databases/queries"
					},
					{
						label: "Relationships",
						href: "/docs/products/databases/relationships"
					},
					{
						label: "Transactions",
						href: "/docs/products/databases/transactions"
					},
					{
						label: "Bulk operations",
						href: "/docs/products/databases/bulk-operations"
					}
				]
			}
		],
		cta: {
			title: "Start building with Databases",
			description: "Create a database, choose your engine and compute model, and query your first data in minutes."
		}
	},
	storage: {
		id: "storage",
		metaDescription: "Store, manage, and deliver files with Appwrite Storage. Built-in CDN, regional caching, S3-compatible access, compression, encryption, on-the-fly transforms, file tokens, and secure downloads.",
		hero: {
			title: "File storage with delivery built in",
			description: "Upload, organize, and serve images, videos, documents, and other assets through Appwrite CDN. Resize, crop, and convert formats on the fly, compress and encrypt at the bucket level, and share with granular permissions.",
			stats: [
				{
					value: "CDN",
					label: "120+ edge locations"
				},
				{
					value: "Transforms",
					label: "On-the-fly delivery"
				},
				{
					value: "S3",
					label: "Compatible object access"
				},
				{
					value: "Compression",
					label: "gzip and zstd buckets"
				},
				{
					value: "Encryption",
					label: "At-rest protection"
				}
			]
		},
		faq: [
			{
				question: "How is Storage different from Databases?",
				answer: "Storage is for binary files like images, videos, and PDFs. Databases store structured rows and fields. Most apps use both together: Storage for assets and Databases for metadata and relationships.",
				links: [{
					label: "Storage overview",
					href: "/docs/products/storage"
				}, {
					label: "Databases overview",
					href: "/docs/products/databases"
				}]
			},
			{
				question: "Can I transform images without storing multiple copies?",
				answer: "Yes. Request transformations through the preview endpoint to resize, crop, convert format, and adjust quality on the fly. Keep one original upload and let Appwrite generate variants on demand.",
				links: [{
					label: "Image transformations",
					href: "/docs/products/storage/images"
				}]
			},
			{
				question: "Is CDN delivery included with Storage?",
				answer: "Yes. Storage files and transformed previews are served through Appwrite CDN with 120+ edge locations. Transformed images are cached in your project region, so repeat requests skip re-processing before reaching the edge.",
				links: [{
					label: "CDN overview",
					href: "/docs/products/network/cdn"
				}, {
					label: "Caching",
					href: "/docs/products/network/caching"
				}]
			},
			{
				question: "Does Storage support file compression?",
				answer: "Yes. Enable gzip or zstd compression per bucket from Settings. Compression applies to new uploads and helps reduce storage and bandwidth costs. Files larger than 20 MB skip compression even when enabled.",
				links: [{
					label: "Bucket compression",
					href: "/docs/products/storage/buckets"
				}]
			},
			{
				question: "Can I encrypt files in Storage?",
				answer: "Yes. Turn on encryption per bucket from Settings so new files are stored encrypted at rest. If files are leaked, encrypted objects cannot be read without your keys. Files larger than 20 MB skip encryption even when enabled.",
				links: [{
					label: "Bucket encryption",
					href: "/docs/products/storage/buckets"
				}]
			},
			{
				question: "Are files private by default?",
				answer: "Yes. Buckets and files have no permissions by default, so access is denied until you grant read, create, update, or delete to users, teams, or roles. Enable file security on a bucket to set per-file permissions on top of bucket defaults.",
				links: [{
					label: "Storage permissions",
					href: "/docs/products/storage/permissions"
				}]
			},
			{
				question: "How do file tokens work for public sharing?",
				answer: "File tokens are secrets attached to a file that authorize preview, view, or download without session cookies. Create tokens from the Console or Server SDK, set an optional expiry, and share the URL with anyone. This avoids third-party cookie issues in embedded or cross-domain apps.",
				links: [{
					label: "File tokens",
					href: "/docs/products/storage/file-tokens"
				}]
			},
			{
				question: "Can I upload large files?",
				answer: "Yes. Storage supports chunked uploads for large files through the SDKs and Console. Configure maximum file size per bucket and use resumable uploads when transferring big assets.",
				links: [{
					label: "Upload and download",
					href: "/docs/products/storage/upload-download"
				}]
			},
			{
				question: "Does Storage support the S3 API?",
				answer: "Yes. Appwrite Storage exposes a project-scoped HTTPS endpoint with SigV4-compatible signing. Copy the endpoint, access key, and secret from the Connect tab in your project to attach buckets to rclone, Terraform, or other S3 tooling without rebuilding upload pipelines.",
				links: [{
					label: "Storage overview",
					href: "/docs/products/storage"
				}]
			}
		],
		cta: {
			title: "Start building with Storage",
			description: "Create a bucket, upload your first file, and generate a preview URL in minutes."
		}
	},
	functions: {
		id: "functions",
		metaDescription: "Deploy serverless Functions with isolated runtimes, schedules, and event triggers. Build backends without managing servers.",
		hero: {
			title: "Serverless Functions for every backend job",
			description: "Run API endpoints, webhooks, cron jobs, and event handlers in secure isolated runtimes that scale with demand.",
			stats: [
				{
					value: "13+",
					label: "Language runtimes"
				},
				{
					value: "CLI",
					label: "Local-first development"
				},
				{
					value: "Cron",
					label: "Schedule triggers"
				},
				{
					value: "Events",
					label: "Platform event hooks"
				},
				{
					value: "Git",
					label: "Repository deploys"
				}
			]
		},
		faq: [
			{
				question: "Which languages do Functions support?",
				answer: "Appwrite supports 13+ runtimes including Node.js, Bun, Python, Go, Dart, PHP, Ruby, Rust, and Deno. Each runtime has multiple version tags so you can pin the environment that matches production.",
				links: [{
					label: "Runtimes",
					href: "/docs/products/functions/runtimes"
				}]
			},
			{
				question: "What is the difference between sync and async execution?",
				answer: "Sync executions run over HTTP domains or the SDK with async set to false. Appwrite waits for your function and returns the response, with a 30 second hard limit. Async executions are queued for events, cron schedules, and SDK calls with async set to true. They run in the background and use your function timeout, up to 15 minutes.",
				links: [{
					label: "Execution modes",
					href: "/docs/products/functions/execute#execution-modes"
				}]
			},
			{
				question: "Can Functions respond to HTTP requests?",
				answer: "Yes. Every function gets a generated domain and you can add custom domains on Appwrite Cloud. Pass x-appwrite-user-jwt to authenticate users and respect Auth permissions inside your function.",
				links: [{
					label: "Function domains",
					href: "/docs/products/functions/domains"
				}, {
					label: "Execute functions",
					href: "/docs/products/functions/execute"
				}]
			},
			{
				question: "How do I debug function executions?",
				answer: "Open the Executions tab in the Console to review status, trigger, method, path, and duration for each run. Execution details include logs, errors, and headers. Request and response bodies are not logged by default for privacy. Use log() and error() in your handler for the output you want to retain.",
				links: [{
					label: "Executions",
					href: "/docs/products/functions/executions"
				}]
			},
			{
				question: "How do I deploy from Git?",
				answer: "Connect a repository in the Console, set a production branch and root directory, then deploy on every push. Branch and path filters use glob patterns, matching the Sites Git workflow.",
				links: [{
					label: "Deploy from Git",
					href: "/docs/products/functions/deploy-from-git"
				}]
			},
			{
				question: "How does the build cache work?",
				answer: "Appwrite caches your package manager store between deployments, keyed automatically per function. pnpm, bun, npm, and yarn installs are faster on the next build with no extra configuration. If a cache restore fails, the build continues normally.",
				links: [{
					label: "Deployments",
					href: "/docs/products/functions/deployments"
				}]
			},
			{
				question: "Can I develop Functions locally?",
				answer: "Yes. The Appwrite CLI runs your function in Docker on localhost with hot reload, the same runtime image as production, and optional user impersonation for Auth-aware testing.",
				links: [{
					label: "Develop locally",
					href: "/docs/products/functions/develop-locally"
				}]
			},
			{
				question: "Can Functions access other Appwrite services?",
				answer: "Yes. Functions receive a dynamic API key and run with project context. Configure scopes in Settings, then call Databases, Storage, Messaging, Auth, and other APIs from server SDKs inside your handler.",
				links: [{
					label: "Develop functions",
					href: "/docs/products/functions/develop"
				}]
			}
		],
		cta: {
			title: "Start building with Functions",
			description: "Deploy your first function from a template or your own codebase in minutes."
		}
	},
	messaging: {
		id: "messaging",
		metaDescription: "Send email, SMS, and push notifications with Appwrite Messaging. Topics, targets, providers, and scheduling in one API.",
		hero: {
			title: "Messaging across every channel",
			description: "Reach users on email, SMS, and push from a unified API. Manage providers, audiences, and delivery without stitching vendors together.",
			stats: [
				{
					value: "3",
					label: "Channels in one API"
				},
				{
					value: "Topics",
					label: "Broadcast messaging"
				},
				{
					value: "11",
					label: "Delivery providers"
				},
				{
					value: "Targets",
					label: "Auth user delivery"
				},
				{
					value: "Schedule",
					label: "Compose and delivery logs"
				}
			]
		},
		faq: [
			{
				question: "Do I need separate vendor integrations for email, SMS, and push?",
				answer: "No. You connect your own provider credentials once in the Console, then send on every channel through one Messaging API and SDK. Pick a vendor per channel (Resend for email, Twilio for SMS, FCM for push, and so on) without maintaining three separate integrations or delivery logs.",
				links: [{
					label: "Messaging overview",
					href: "/docs/products/messaging"
				}, {
					label: "Providers",
					href: "/docs/products/messaging/providers"
				}]
			},
			{
				question: "How do topics and targets work together?",
				answer: "Targets are the ways a user can be reached: email addresses, phone numbers, and push device tokens. Subscribe targets to a topic to broadcast the same message to every subscriber, or address specific users and targets when you need private, one-to-one delivery. Topics fit newsletters and announcements; sensitive content like chat should go to individual targets.",
				links: [{
					label: "Topics",
					href: "/docs/products/messaging/topics"
				}, {
					label: "Targets",
					href: "/docs/products/messaging/targets"
				}]
			},
			{
				question: "Which delivery providers are supported?",
				answer: "Email: Resend, SendGrid, Mailgun, and SMTP. SMS: Twilio, Vonage, MSG91, Telesign, and Textmagic. Push: APNS and FCM. Configure multiple providers per channel and choose which one to use when sending. Discord and Slack chat integrations are coming soon.",
				links: [{
					label: "Providers",
					href: "/docs/products/messaging/providers"
				}]
			},
			{
				question: "How are targets linked to Auth users?",
				answer: "Each Auth user can have multiple targets registered to your project. Verified emails from email/password, magic URL, and email OTP sign-up create email targets automatically. Verified phone numbers from SMS OTP sign-up create SMS targets. Push targets are added from your client app after the user grants notification permission. Inspect and manage targets from the Targets tab on user detail in Auth.",
				links: [{
					label: "Targets",
					href: "/docs/products/messaging/targets"
				}, {
					label: "Send push notifications",
					href: "/docs/products/messaging/send-push-notifications"
				}]
			},
			{
				question: "Can I schedule messages and track delivery?",
				answer: "Yes. Compose email, SMS, and push from the Console Messages tab or call createEmail, createSms, and createPush from the Server SDK. Send immediately, save as a draft, or pass scheduledAt for later delivery. Every message appears in the Messages tab with status (draft, scheduled, processing, failed, or success) and delivery timestamps.",
				links: [{
					label: "Messages",
					href: "/docs/products/messaging/messages"
				}, {
					label: "Send email messages",
					href: "/docs/products/messaging/send-email-messages"
				}]
			},
			{
				question: "Can I send messages from Functions or my backend?",
				answer: "Yes. Use the Server SDK from Functions, your API server, or any trusted backend with a project API key. This is the standard pattern for transactional flows such as OTP verification, password reset, order receipts, and inventory alerts triggered by platform events or custom logic.",
				links: [{
					label: "Send SMS messages",
					href: "/docs/products/messaging/send-sms-messages"
				}, {
					label: "Send push notifications",
					href: "/docs/products/messaging/send-push-notifications"
				}]
			},
			{
				question: "When should I use email, SMS, or push?",
				answer: "Push and SMS work well for time-sensitive alerts users see within minutes. Email suits rich HTML content like receipts, newsletters, and promotions. SMS reaches phones even without internet. Push drives re-engagement with deep links back into your app. Most production apps combine all three depending on urgency and content.",
				links: [{
					label: "Choosing a message type",
					href: "/docs/products/messaging/messages#choosing-a-message-type"
				}]
			}
		],
		cta: {
			title: "Start building with Messaging",
			description: "Configure a provider, create a topic, and send your first message from the console or SDK."
		}
	},
	sites: {
		id: "sites",
		metaDescription: "Deploy static, SSR, and CSR web apps with Appwrite Sites. Git-based deploys, preview URLs, instant rollbacks, custom domains, and Appwrite backends.",
		hero: {
			title: "Deploy web apps from Git in minutes",
			description: "Ship static, SSR, and client-rendered frontends with automatic builds, branch previews, and Appwrite services connected behind the scenes.",
			stats: [
				{
					value: "14",
					label: "Framework presets"
				},
				{
					value: "Git",
					label: "Push to deploy"
				},
				{
					value: "Preview",
					label: "Branch URLs"
				},
				{
					value: "Instant",
					label: "Rollbacks"
				},
				{
					value: "Edge",
					label: "CDN + TLS"
				}
			]
		},
		faq: [
			{
				question: "Which frameworks does Sites support?",
				answer: "Sites supports popular frameworks including Next.js, Nuxt, SvelteKit, Astro, Vue, TanStack Start, Remix, Angular, React, and more. Static hosting works with any framework that outputs HTML assets; SSR is available for supported server-rendered stacks. See the frameworks page for build settings per preset.",
				links: [{
					label: "Frameworks",
					href: "/docs/products/sites/frameworks"
				}, {
					label: "Quick start",
					href: "/docs/products/sites/quick-start"
				}]
			},
			{
				question: "Can I deploy without connecting Git?",
				answer: "Yes. Push deployments with the Appwrite CLI from CI or your machine, or upload a .tar.gz archive from the Console for manual deploys. Git remains the recommended path for automatic builds on push and branch previews, but every deploy method uses the same build pipeline and settings.",
				links: [{
					label: "Deploy from CLI",
					href: "/docs/products/sites/deploy-from-cli"
				}, {
					label: "Deploy manually",
					href: "/docs/products/sites/deploy-manually"
				}]
			},
			{
				question: "Can I inspect site traffic and debug SSR output?",
				answer: "Yes. Usage charts show requests, bandwidth, builds, and compute over selectable ranges, with breakdowns to see where traffic comes from. The Logs tab records every request with status code, method, path, and duration. Open a log entry for request and response headers. For SSR sites, console.log and console.error output appears in response logs.",
				links: [{
					label: "Site logs",
					href: "/docs/products/sites/logs"
				}]
			},
			{
				question: "Can I use separate domains for staging and production?",
				answer: "Yes. Add multiple domain rules on a site: point one hostname to the active production deployment, map another to a specific Git branch for staging, or configure redirects. Branch and commit preview URLs are also generated automatically for Git deployments.",
				links: [{
					label: "Site domains",
					href: "/docs/products/sites/domains"
				}]
			},
			{
				question: "How do preview deployments work?",
				answer: "When you push to a branch other than your production branch, Appwrite builds a deployment but does not activate it on your primary domain. Instead, a preview URL is generated for org members to review. Pull requests can also receive preview links and optional PR comments unless silent mode is enabled.",
				links: [{
					label: "Previews",
					href: "/docs/products/sites/previews"
				}, {
					label: "Deploy from Git",
					href: "/docs/products/sites/deploy-from-git"
				}]
			},
			{
				question: "What is the difference between static and SSR hosting?",
				answer: "Static and SPA hosting serves pre-built assets at the edge with fast cold starts. SSR runs your framework on each request, which suits dynamic or user-specific pages and gives you runtime access to environment variables. Many frameworks support both modes in the same app.",
				links: [
					{
						label: "Rendering",
						href: "/docs/products/sites/rendering"
					},
					{
						label: "Static hosting",
						href: "/docs/products/sites/rendering/static"
					},
					{
						label: "SSR hosting",
						href: "/docs/products/sites/rendering/ssr"
					}
				]
			},
			{
				question: "How does Appwrite Sites keep builds and deployments efficient?",
				answer: "Build workers restore a dependency cache at the start of each deployment, so package installs on unchanged lockfiles finish in seconds instead of minutes. Path filters and root directory settings let Turborepo monorepos skip builds when unrelated packages change. Deployment retention automatically deletes inactive deployments after a period you choose, so preview builds do not pile up and consume storage. You can also tune build and runtime CPU and memory in site settings when compilation or SSR needs more headroom.",
				links: [{
					label: "Deploy from Git",
					href: "/docs/products/sites/deploy-from-git"
				}, {
					label: "Deployment retention",
					href: "/docs/products/sites/deployments#deployment-retention"
				}]
			},
			{
				question: "How do instant rollbacks work?",
				answer: "Instant rollbacks change which ready deployment is served to visitors. They do not delete, modify, or rebuild your code, so recovery is near-instant with zero downtime. Open your site Overview in the Console, click Instant Rollback, and promote a previous deployment.",
				links: [{
					label: "Instant rollbacks",
					href: "/docs/products/sites/instant-rollbacks"
				}]
			},
			{
				question: "Can I buy a domain and manage DNS in Appwrite?",
				answer: "Yes. Purchase domains from your organization Domains tab and manage records with Appwrite DNS in the same Console. Connect the domain to a site for automatic TLS, or use the generated .appwrite.network URL while you set up DNS. Apex domains can delegate to Appwrite nameservers; subdomains use CNAME records. Sites traffic is delivered through Appwrite Network with CDN, DDoS protection, and Firewall.",
				links: [
					{
						label: "Site domains",
						href: "/docs/products/sites/domains"
					},
					{
						label: "Appwrite DNS",
						href: "/docs/products/network/dns"
					},
					{
						label: "Firewall",
						href: "/products/firewall"
					}
				]
			},
			{
				question: "What edge network and security features are included?",
				answer: "Sites run on Appwrite Network with global CDN delivery, DDoS protection, Firewall, and TLS encryption. SSR workloads can execute closer to users at the edge while Auth, Databases, Storage, and other project services stay in your selected region.",
				links: [
					{
						label: "Sites overview",
						href: "/docs/products/sites"
					},
					{
						label: "Appwrite Network",
						href: "/docs/products/network"
					},
					{
						label: "Firewall",
						href: "/products/firewall"
					}
				]
			},
			{
				question: "Can I start from templates or quick-starts?",
				answer: "Yes. Browse templates from Sites > Templates in the Console and filter by framework or use case. The create wizard walks you through GitHub setup, production branch, environment variables, and domain configuration. Official quick-starts cover Next.js, Nuxt, SvelteKit, Astro, Vue, TanStack Start, and more.",
				links: [{
					label: "Templates",
					href: "/docs/products/sites/templates"
				}, {
					label: "Quick start",
					href: "/docs/products/sites/quick-start"
				}]
			},
			{
				question: "Can Sites connect to my Appwrite backend?",
				answer: "Yes. Sites deploy in the same project as Auth, Databases, Storage, Functions, and Messaging. Use environment variables for API keys and endpoints, then call Appwrite SDKs from your frontend or SSR routes without managing separate infrastructure.",
				links: [{
					label: "Environment variables",
					href: "/docs/products/sites/environment-variables"
				}, {
					label: "Develop locally",
					href: "/docs/products/sites/develop"
				}]
			}
		],
		cta: {
			title: "Start building with Sites",
			description: "Connect a repository and deploy your first frontend alongside your Appwrite backend."
		}
	},
	firewall: {
		id: "firewall",
		metaDescription: "Protect project APIs, Functions, and Sites with Appwrite Firewall. Create rules to deny, bypass, rate limit, redirect, or challenge matching traffic from the Console.",
		hero: {
			title: "Control traffic before it reaches your app",
			description: "Define project rules that match the request properties you care about, then deny, bypass, rate limit, redirect, or challenge traffic before it hits your API, Functions, or Sites."
		},
		faq: [
			{
				question: "What can Firewall protect?",
				answer: "Firewall rules run on Appwrite Cloud before traffic reaches your project resources. Scope a rule to the project API, a specific Function, or a specific Site. Console traffic is never blocked, so you can keep managing rules even when deny or rate limit policies are active.",
				links: [{
					label: "Firewall overview",
					href: "/docs/products/firewall"
				}, {
					label: "Resource scopes",
					href: "/docs/products/firewall/scopes"
				}]
			},
			{
				question: "Which actions can a rule take?",
				answer: "Each matching rule applies one action: Deny returns 403, Bypass allows the request and skips later rules, Rate limit throttles per client IP with a 429 when over quota, Redirect sends clients to another location with a 3xx status, and Challenge verifies suspicious clients before allowing them through. There is no separate Allow action. Use Bypass to allowlist traffic that should skip later deny, rate limit, or challenge rules.",
				links: [{
					label: "Actions",
					href: "/docs/products/firewall/actions"
				}]
			},
			{
				question: "How do conditions and priority work together?",
				answer: "Every rule needs at least one condition. All conditions on a rule must match (AND). Rules evaluate by priority (lower numbers first). The first matching enabled rule decides the outcome and stops evaluation.",
				links: [{
					label: "Conditions",
					href: "/docs/products/firewall/conditions"
				}, {
					label: "Priority",
					href: "/docs/products/firewall/priority"
				}]
			},
			{
				question: "Can I preview impact before enabling a rule?",
				answer: "Yes. While creating a rule, the Console estimates how many recent usage events would match your current conditions for the selected resource scope and date range. Use that preview to tighten filters before you enable the rule, then confirm outcomes in traffic overview.",
				links: [{
					label: "Create a rule",
					href: "/docs/products/firewall/create"
				}, {
					label: "Monitor traffic",
					href: "/docs/products/firewall/monitor"
				}]
			},
			{
				question: "What does traffic overview show?",
				answer: "The Firewall page chart summarizes Passed request volume alongside Denied, Rate limited, Redirected, and Challenged series for the selected date range. Bypass matches and under-quota rate limit matches allow traffic without publishing a Firewall outcome metric. Use the overview with your rules list to verify policies after enablement.",
				links: [{
					label: "Monitor traffic",
					href: "/docs/products/firewall/monitor"
				}]
			},
			{
				question: "Is Firewall available on every plan?",
				answer: "Firewall is available on Appwrite Cloud. Rule limits depend on your organization plan. Disabled rules still count toward plan limits but are not evaluated.",
				links: [{
					label: "Plan limits",
					href: "/docs/products/firewall/rules#plan-limits"
				}, {
					label: "Pricing",
					href: "/pricing"
				}]
			}
		],
		cta: {
			title: "Start protecting with Firewall",
			description: "Create your first deny, bypass, rate limit, redirect, or challenge rule from the Console and preview impact before you enable it."
		}
	}
};
function getProductContent(id) {
	return PRODUCT_CONTENT[id];
}
var $$splitComponentImporter = () => import("./products._productId-C1_gt9nY.js");
const Route = createFileRoute("/_marketing/products/$productId")({
	staticData: MARKETING_PAGE_ROUTE_STATIC_DATA,
	ssr: true,
	beforeLoad: ({ params }) => {
		if (!isProductId(params.productId)) throw notFound();
	},
	head: ({ params }) => {
		if (!isProductId(params.productId)) return { meta: [{ title: pageTitle("Product") }] };
		const content = getProductContent(params.productId);
		const product = PRODUCT_REGISTRY[params.productId];
		const metaDescription = translate(content.metaDescription);
		const ogImageSubtitle = content.metaDescription.trim() !== product.name.trim() ? metaDescription : translate(product.tagline);
		return { meta: getMarketingPageMetaTags({
			pageName: product.name,
			description: metaDescription,
			ogImageEyebrow: "Products",
			ogImageSubtitle
		}) };
	},
	loader: async ({ params, context }) => {
		if (typeof window !== "undefined" && params.productId === "sites") {
			const { queryClient } = context;
			await Promise.all([queryClient.ensureQueryData(siteFrameworksQueryOptions(MARKETING_SITE_TEMPLATES_PROJECT_ID)).catch(() => {}), queryClient.ensureQueryData(marketingSiteTemplatesQueryOptions()).catch(() => {})]);
		}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
export { getProductContent as n, Route as t };
