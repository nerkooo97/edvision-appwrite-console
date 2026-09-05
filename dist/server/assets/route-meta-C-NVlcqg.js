import { r as getSeoSiteOrigin } from "./site-origin-DqNp3EP0.js";
import { t as MARKETING_SITE_ORIGIN } from "./urls-BIlyr2O2.js";
import { n as OG_IMAGE_WIDTH, r as buildOgImageUrl, t as OG_IMAGE_HEIGHT } from "./og-image-DdV5MU0-.js";
import { Client, Databases, Query } from "@appwrite.io/console";
function getThreadsAppwriteConfig() {
	return {
		endpoint: "https://fra.cloud.appwrite.io/v1",
		projectId: "656dd556812fe2e5f4ed",
		databaseId: "main",
		threadsCollectionId: "threads",
		messagesCollectionId: "messages",
		authorsCollectionId: "authors"
	};
}
var client = null;
var databases = null;
function getThreadsDatabases() {
	if (!databases) {
		const config = getThreadsAppwriteConfig();
		client = new Client();
		client.setEndpoint(config.endpoint).setProject(config.projectId);
		databases = new Databases(client);
	}
	return databases;
}
const THREADS_DISCORD_GUILD_ID = "564160730845151244";
const THREADS_DEFAULT_DESCRIPTION = "Appwrite is an open-source platform for building applications at any scale, using your preferred programming languages and tools.";
const THREADS_PRIMARY_TAGS = [
	"Web",
	"Flutter",
	"GraphQL",
	"Cloud",
	"Self Hosted"
];
const THREADS_MORE_TAGS = [
	"Tools",
	"Accounts",
	"Users",
	"Teams",
	"Databases",
	"Storage",
	"Functions",
	"Realtime",
	"Locale",
	"Avatars",
	"Webhooks",
	"General",
	"REST API"
];
[...THREADS_PRIMARY_TAGS, ...THREADS_MORE_TAGS];
var DISCORD_SNOWFLAKE_PATTERN = /\d{17,20}/;
var DISCORD_USER_MENTION_PATTERN = /<@!?(\d{17,20})>/g;
var DISCORD_CHANNEL_MENTION_PATTERN = /<#(\d{17,20})>/g;
var EMPTY_MENTION_LOOKUP = {
	users: {},
	channels: {}
};
function normalizeDiscordInlineCodeFences(content) {
	return content.replace(/```([^`\n]+?)```/g, "`$1`");
}
function normalizeLineEndings(content) {
	return content.replace(/\r\n/g, "\n");
}
function escapeMarkdownLinkText(text) {
	return text.replace(/[\[\]\\]/g, "\\$&");
}
function getDiscordChannelUrl(channelId) {
	return `https://discord.com/channels/${THREADS_DISCORD_GUILD_ID}/${channelId}`;
}
function getDiscordGuildUrl() {
	return `https://discord.com/channels/${THREADS_DISCORD_GUILD_ID}`;
}
function getDiscordEmojiUrl(id, animated) {
	return `https://cdn.discordapp.com/emojis/${id}.${animated ? "gif" : "webp"}`;
}
function formatDiscordTimestamp(unixSeconds) {
	const date = /* @__PURE__ */ new Date(Number(unixSeconds) * 1e3);
	if (Number.isNaN(date.getTime())) return `<t:${unixSeconds}>`;
	return date.toLocaleString(void 0, {
		dateStyle: "medium",
		timeStyle: "short"
	});
}
function markdownLink(label, href) {
	return `[${escapeMarkdownLinkText(label)}](${href})`;
}
function resolveUserMentionLabel(userId, lookup) {
	const name = lookup.users[userId]?.trim();
	return name ? `@${name}` : "@user";
}
function resolveChannelMentionLabel(channelId, lookup) {
	const channel = lookup.channels[channelId];
	if (channel?.title) return channel.title;
	return "#channel";
}
function resolveChannelMentionHref(channelId, lookup) {
	return lookup.channels[channelId]?.href ?? getDiscordChannelUrl(channelId);
}
function extractDiscordMentionIds(contents) {
	const userIds = /* @__PURE__ */ new Set();
	const channelIds = /* @__PURE__ */ new Set();
	for (const content of contents) {
		for (const match of content.matchAll(DISCORD_USER_MENTION_PATTERN)) userIds.add(match[1]);
		for (const match of content.matchAll(DISCORD_CHANNEL_MENTION_PATTERN)) channelIds.add(match[1]);
	}
	return {
		userIds,
		channelIds
	};
}
function replaceDiscordRoleMentions(content) {
	return content.replace(/<@&(\d{17,20})>/g, (_, roleId) => {
		if (!DISCORD_SNOWFLAKE_PATTERN.test(roleId)) return `<@&${roleId}>`;
		return markdownLink("@role", getDiscordGuildUrl());
	});
}
function replaceDiscordUserMentions(content, lookup) {
	return content.replace(DISCORD_USER_MENTION_PATTERN, (_, userId) => {
		if (!DISCORD_SNOWFLAKE_PATTERN.test(userId)) return `<@${userId}>`;
		return markdownLink(resolveUserMentionLabel(userId, lookup), `/threads/authors/${userId}`);
	});
}
function replaceDiscordChannelMentions(content, lookup) {
	return content.replace(DISCORD_CHANNEL_MENTION_PATTERN, (_, channelId) => {
		if (!DISCORD_SNOWFLAKE_PATTERN.test(channelId)) return `<#${channelId}>`;
		return markdownLink(resolveChannelMentionLabel(channelId, lookup), resolveChannelMentionHref(channelId, lookup));
	});
}
function replaceDiscordCustomEmojis(content) {
	return content.replace(/<a:(\w+):(\d{17,20})>/g, (_, name, id) => {
		return `![${name}](${getDiscordEmojiUrl(id, true)})`;
	}).replace(/<:(\w+):(\d{17,20})>/g, (_, name, id) => {
		return `![${name}](${getDiscordEmojiUrl(id, false)})`;
	});
}
function replaceDiscordTimestamps(content) {
	return content.replace(/<t:(\d{10,13})(?::[a-zA-Z])?>/g, (_, unix) => {
		return formatDiscordTimestamp(unix.length > 10 ? String(Math.floor(Number(unix) / 1e3)) : unix);
	});
}
function replaceDiscordSlashCommands(content) {
	return content.replace(/<\/([^:>\n]+):(\d{17,20})>/g, (_, name) => {
		return `\`/${String(name).trim()}\``;
	});
}
function replaceDiscordSpoilers(content) {
	return content.replace(/\|\|([^|\n]+?)\|\|/g, (_, text) => text);
}
function replaceDiscordMentionsForMarkdown(content, lookup) {
	let result = content;
	result = replaceDiscordRoleMentions(result);
	result = replaceDiscordUserMentions(result, lookup);
	result = replaceDiscordChannelMentions(result, lookup);
	result = replaceDiscordCustomEmojis(result);
	result = replaceDiscordTimestamps(result);
	result = replaceDiscordSlashCommands(result);
	result = replaceDiscordSpoilers(result);
	return result;
}
function replaceDiscordMentionsForPlainText(content, lookup) {
	let result = content;
	result = result.replace(/<@&(\d{17,20})>/g, "@role");
	result = result.replace(DISCORD_USER_MENTION_PATTERN, (_, userId) => resolveUserMentionLabel(userId, lookup));
	result = result.replace(DISCORD_CHANNEL_MENTION_PATTERN, (_, channelId) => resolveChannelMentionLabel(channelId, lookup));
	result = result.replace(/<a?:(\w+):\d{17,20}>/g, ":$1:");
	result = result.replace(/<t:(\d{10,13})(?::[a-zA-Z])?>/g, (_, unix) => {
		return formatDiscordTimestamp(unix.length > 10 ? String(Math.floor(Number(unix) / 1e3)) : unix);
	});
	result = result.replace(/<\/([^:>\n]+):\d{17,20}>/g, "/$1");
	result = replaceDiscordSpoilers(result);
	return result;
}
function prepareThreadMessageForMarkdown(content, mentionLookup = EMPTY_MENTION_LOOKUP) {
	let result = normalizeLineEndings(content);
	result = replaceDiscordMentionsForMarkdown(result, mentionLookup);
	result = normalizeDiscordInlineCodeFences(result);
	return result;
}
function normalizeThreadPlainText(content, mentionLookup = EMPTY_MENTION_LOOKUP) {
	let result = normalizeLineEndings(content);
	result = replaceDiscordMentionsForPlainText(result, mentionLookup);
	result = normalizeDiscordInlineCodeFences(result);
	return result;
}
function isDiscordEmojiImageUrl(src) {
	return Boolean(src?.includes("cdn.discordapp.com/emojis/"));
}
function sanitizeThreadContent(rawContent, maxLength = 200, mentionLookup) {
	const cleaned = normalizeThreadPlainText(rawContent, mentionLookup).replace(/```(?:\w+)?\n([\s\S]*?)```|```([\s\S]*?)```/g, (_, withLang, withoutLang) => (withLang || withoutLang).trim());
	return cleaned.length > maxLength ? `${cleaned.slice(0, maxLength)}...` : cleaned;
}
function filterThreads({ q, threads: threadDocs, tags, allTags }) {
	const threads = tags?.length ? threadDocs.filter((thread) => {
		const threadTags = thread.tags ?? [];
		if (allTags) return tags.every((tag) => threadTags.includes(tag));
		return tags.some((tag) => threadTags.includes(tag));
	}) : threadDocs;
	if (!q) return threads;
	const queryWords = q.toLowerCase().split(/\s+/).filter(Boolean);
	const rankPerWord = 1 / queryWords.length;
	const res = [];
	threads.forEach((item) => {
		const foundWords = /* @__PURE__ */ new Set();
		Object.values(item).forEach((value) => {
			const stringified = JSON.stringify(value).toLowerCase();
			queryWords.forEach((word) => {
				if (stringified.includes(word)) foundWords.add(word);
			});
		});
		const rank = foundWords.size * rankPerWord;
		if (rank > 0) res.push({
			data: item,
			rank
		});
	});
	return res.sort((a, b) => b.rank - a.rank).map(({ data }) => data);
}
async function getThreads({ q, tags, allTags, cursor }) {
	const config = getThreadsAppwriteConfig();
	const databases$1 = getThreadsDatabases();
	const normalizedTags = tags?.filter(Boolean) ?? [];
	let query = [
		q ? Query.search("search_meta", q) : void 0,
		Query.orderDesc("$createdAt"),
		Query.limit(25),
		cursor ? Query.cursorAfter(cursor) : void 0,
		normalizedTags.length > 0 ? Query.contains("tags", normalizedTags) : void 0
	].filter(Boolean);
	const data = await databases$1.listDocuments(config.databaseId, config.threadsCollectionId, query);
	const threadDocs = data.documents;
	const filtered = filterThreads({
		threads: threadDocs,
		q,
		tags: normalizedTags,
		allTags
	});
	const hasMore = data.documents.length === 25;
	return {
		threads: filtered,
		hasMore,
		nextCursor: hasMore ? data.documents[data.documents.length - 1]?.$id : void 0,
		total: data.total
	};
}
async function getAuthor(discordId) {
	const config = getThreadsAppwriteConfig();
	return await getThreadsDatabases().getDocument(config.databaseId, config.authorsCollectionId, discordId);
}
async function getAuthorThreads(authorId) {
	const config = getThreadsAppwriteConfig();
	const data = await getThreadsDatabases().listDocuments(config.databaseId, config.threadsCollectionId, [
		Query.equal("author_id", authorId),
		Query.orderDesc("$createdAt"),
		Query.limit(25)
	]);
	return {
		threads: data.documents,
		total: data.total
	};
}
async function getThread(threadId) {
	const config = getThreadsAppwriteConfig();
	return await getThreadsDatabases().getDocument(config.databaseId, config.threadsCollectionId, threadId);
}
function seedMentionLookupFromMessages(messages) {
	const users = {};
	for (const message of messages) if (message.author_id && message.author) users[message.author_id] = message.author;
	return {
		users,
		channels: {}
	};
}
async function resolveThreadMentionLookup(contents, messages = []) {
	const lookup = seedMentionLookupFromMessages(messages);
	const { userIds, channelIds } = extractDiscordMentionIds(contents);
	const missingAuthorIds = [...userIds].filter((id) => !lookup.users[id]);
	await Promise.all(missingAuthorIds.map(async (authorId) => {
		try {
			const author = await getAuthor(authorId);
			lookup.users[authorId] = author.display_name || author.username;
		} catch {}
	}));
	await Promise.all([...channelIds].map(async (channelId) => {
		if (lookup.channels[channelId]) return;
		try {
			const thread = await getThread(channelId);
			lookup.channels[channelId] = {
				title: thread.title,
				href: getThreadHref(thread)
			};
		} catch {}
	}));
	return lookup;
}
async function getThreadMessages(threadId) {
	const config = getThreadsAppwriteConfig();
	return (await getThreadsDatabases().listDocuments(config.databaseId, config.messagesCollectionId, [Query.equal("threadId", threadId)])).documents.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
}
async function getRelatedThreads(thread, limit = 3) {
	const { threads } = await getThreads({
		tags: thread.tags?.filter(Boolean) ?? [],
		allTags: false
	});
	return threads.filter(({ $id }) => $id !== thread.$id).slice(0, limit);
}
function getDiscordThreadUrl(discordId) {
	return `https://discord.com/channels/${THREADS_DISCORD_GUILD_ID}/${discordId}`;
}
function isThreadResolved(thread) {
	return Boolean(thread.is_resolved) || /\[(solved|resolved|closed|fixed)\]/i.test(thread.title);
}
function getThreadHref(thread) {
	return `/threads/${thread.discord_id}`;
}
function formatThreadsTotal(total) {
	if (total >= 1e3) return `${Math.floor(total / 1e3)}000+`;
	return String(total);
}
function getAuthorDescription(author) {
	return author.bio ?? `${author.display_name} has posted ${author.thread_count} threads and ${author.reply_count} replies on the Appwrite Discord community.`;
}
function cleanThreadRoleLabel(role) {
	if (!role) return "";
	return role.replace(/<a?:[^:>\s]+:\d+>/g, "").replace(/[\p{Extended_Pictographic}\p{Emoji_Presentation}\uFE0F\u200D]/gu, "").replace(/\s+/g, " ").trim();
}
function getThreadsDefaultOgImage(siteOrigin) {
	return buildOgImageUrl({
		title: "Appwrite Threads",
		eyebrow: "Threads",
		subtitle: THREADS_DEFAULT_DESCRIPTION
	}, siteOrigin);
}
function getThreadsCanonicalUrl(path) {
	return `${MARKETING_SITE_ORIGIN}${path}`;
}
function getThreadsPageTitle(title) {
	return `${title} · Appwrite`;
}
function getThreadOgImageUrl(thread, siteOrigin) {
	const title = thread.title.trim();
	const seoDescription = thread.seo_description?.trim();
	const content = thread.content?.trim();
	return buildOgImageUrl({
		title,
		eyebrow: "Threads",
		subtitle: seoDescription && seoDescription !== title && seoDescription || content && content !== title && content || "Appwrite is an open-source platform for building applications at any scale, using your preferred programming languages and tools."
	}, siteOrigin);
}
function getThreadsIndexMetaTags(siteOrigin) {
	const title = getThreadsPageTitle("Threads");
	const description = "Appwrite's Threads page showcases our community interactions on Discord. Join the conversation, ask questions, or assist other members with their issues.";
	const canonical = getThreadsCanonicalUrl("/threads");
	const ogImage = getThreadsDefaultOgImage(getSeoSiteOrigin(siteOrigin));
	return [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			property: "og:url",
			content: canonical
		},
		{
			property: "og:image",
			content: ogImage
		},
		{
			property: "og:image:width",
			content: String(OG_IMAGE_WIDTH)
		},
		{
			property: "og:image:height",
			content: String(OG_IMAGE_HEIGHT)
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: title
		},
		{
			name: "twitter:description",
			content: description
		},
		{
			name: "twitter:image",
			content: ogImage
		},
		{
			tag: "link",
			rel: "canonical",
			href: canonical
		}
	];
}
function getThreadsThreadMetaTags(thread, canonicalUrl, siteOrigin) {
	const pageTitle = getThreadsPageTitle(`${thread.title} - Threads`);
	const description = thread.seo_description ?? "Appwrite is an open-source platform for building applications at any scale, using your preferred programming languages and tools.";
	const ogImage = getThreadOgImageUrl(thread, getSeoSiteOrigin(siteOrigin));
	return [
		{ title: pageTitle },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: pageTitle
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			property: "og:url",
			content: canonicalUrl
		},
		{
			property: "og:image",
			content: ogImage
		},
		{
			property: "og:image:width",
			content: String(OG_IMAGE_WIDTH)
		},
		{
			property: "og:image:height",
			content: String(OG_IMAGE_HEIGHT)
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: pageTitle
		},
		{
			name: "twitter:description",
			content: description
		},
		{
			name: "twitter:image",
			content: ogImage
		},
		{
			tag: "link",
			rel: "canonical",
			href: canonicalUrl
		}
	];
}
function getThreadsAuthorMetaTags(author, canonicalUrl, siteOrigin) {
	const title = getThreadsPageTitle(`${author.display_name} - Threads`);
	const description = getAuthorDescription(author);
	const ogImage = getThreadsDefaultOgImage(getSeoSiteOrigin(siteOrigin));
	return [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "profile"
		},
		{
			property: "og:url",
			content: canonicalUrl
		},
		{
			property: "og:image",
			content: ogImage
		},
		{
			property: "og:image:width",
			content: String(OG_IMAGE_WIDTH)
		},
		{
			property: "og:image:height",
			content: String(OG_IMAGE_HEIGHT)
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: title
		},
		{
			name: "twitter:description",
			content: description
		},
		{
			name: "twitter:image",
			content: ogImage
		},
		{
			tag: "link",
			rel: "canonical",
			href: canonicalUrl
		}
	];
}
function toIso8601DateTime(value) {
	const date = new Date(value);
	return Number.isNaN(date.getTime()) ? (/* @__PURE__ */ new Date()).toISOString() : date.toISOString();
}
function nonEmptyText(value, fallback) {
	return value.trim().length > 0 ? value : fallback;
}
function getDiscussionForumPageSchema(options) {
	const { canonicalUrl, thread, messages } = options;
	const first = messages[0];
	const opText = nonEmptyText(first?.message ?? "", nonEmptyText(thread.content, thread.title));
	const opAuthor = (first?.author ?? thread.author).trim() || "Anonymous";
	const opDate = toIso8601DateTime(first?.timestamp ?? thread.$createdAt);
	const comments = messages.slice(1).map((message) => {
		const text = nonEmptyText(message.message, "(No text)");
		const comment = {
			"@type": "Comment",
			text,
			author: {
				"@type": "Person",
				name: message.author.trim() || "Anonymous"
			},
			datePublished: toIso8601DateTime(message.timestamp)
		};
		if (message.$id) comment.url = `${canonicalUrl}#message-${message.$id}`;
		return comment;
	});
	const mainEntity = {
		"@type": "DiscussionForumPosting",
		headline: thread.title,
		url: canonicalUrl,
		mainEntityOfPage: canonicalUrl,
		text: opText,
		author: {
			"@type": "Person",
			name: opAuthor
		},
		datePublished: opDate
	};
	if (typeof thread.vote_count === "number" && thread.vote_count >= 0) mainEntity.interactionStatistic = {
		"@type": "InteractionCounter",
		interactionType: "https://schema.org/LikeAction",
		userInteractionCount: thread.vote_count
	};
	const replyCount = Math.max(0, messages.length - 1);
	if (replyCount > 0) {
		mainEntity.commentCount = replyCount;
		mainEntity.comment = comments;
	}
	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		url: canonicalUrl,
		mainEntity
	};
}
function getThreadsAuthorPageSchema(author, canonicalUrl) {
	return {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		url: canonicalUrl,
		mainEntity: {
			"@type": "Person",
			name: author.display_name,
			alternateName: author.username,
			...author.bio ? { description: author.bio } : {},
			interactionStatistic: [{
				"@type": "InteractionCounter",
				interactionType: "https://schema.org/WriteAction",
				userInteractionCount: author.thread_count + author.reply_count
			}]
		}
	};
}
function getThreadsIndexPageSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: "Threads",
		url: getThreadsCanonicalUrl("/threads"),
		description: "Community support threads from the Appwrite Discord. Search discussions, browse topics, and find answers from developers.",
		isPartOf: {
			"@type": "WebSite",
			name: "Appwrite",
			url: MARKETING_SITE_ORIGIN
		}
	};
}
function getThreadsBreadcrumbSchema(items) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: getThreadsCanonicalUrl(item.path)
		}))
	};
}
function asRouteMetaTags(tags) {
	return [...tags];
}
function getThreadsIndexRouteMetaTags() {
	return asRouteMetaTags(getThreadsIndexMetaTags());
}
function getThreadsThreadRouteMetaTags(thread, canonicalUrl) {
	return asRouteMetaTags(getThreadsThreadMetaTags(thread, canonicalUrl));
}
function getThreadsAuthorRouteMetaTags(author, canonicalUrl) {
	return asRouteMetaTags(getThreadsAuthorMetaTags(author, canonicalUrl));
}
export { THREADS_MORE_TAGS as C, prepareThreadMessageForMarkdown as S, getThreads as _, getThreadsAuthorPageSchema as a, sanitizeThreadContent as b, getThreadsIndexPageSchema as c, getAuthor as d, getAuthorThreads as f, getThreadMessages as g, getThread as h, getDiscussionForumPageSchema as i, cleanThreadRoleLabel as l, getRelatedThreads as m, getThreadsIndexRouteMetaTags as n, getThreadsBreadcrumbSchema as o, getDiscordThreadUrl as p, getThreadsThreadRouteMetaTags as r, getThreadsCanonicalUrl as s, getThreadsAuthorRouteMetaTags as t, formatThreadsTotal as u, isThreadResolved as v, THREADS_PRIMARY_TAGS as w, isDiscordEmojiImageUrl as x, resolveThreadMentionLookup as y };
