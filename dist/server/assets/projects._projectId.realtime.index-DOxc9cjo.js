import { t as cn } from "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import { c as getProjectApiEndpoint, d as sdk } from "./sdk-DjIJ_hjn.js";
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
import { Vv as useProjectUsers } from "./hooks-BONwG3Mt.js";
import { D as syncConsoleAccountAfterMutation, O as updateAccountPrefs } from "./auth-BPuxYQAc.js";
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
import "./page-direction-CnacIIOa.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { n as PopoverContent, r as PopoverTrigger, t as Popover } from "./popover-BjTNxuf9.js";
import "./select-BYGLGp-f.js";
import { t as CodeBlock } from "./CodeBlock-BGAzMP_K.js";
import { t as FORCE_LTR_CLASS } from "./force-ltr-DzjunFli.js";
import "./WizardLayout-DWqXFGuX.js";
import { n as resolveFenceCodeLanguage, t as resolveFenceCodeLabel } from "./code-language-RiwE0Xft.js";
import { r as useAuth } from "./RequireAuth-DahioVQe.js";
import "./HeaderAlertBar-CK7Gy4sE.js";
import { t as Badge } from "./badge-L9aO6DfA.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import "./modal-auto-focus-BO41bKmA.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import "./command-Cizl9kMJ.js";
import "./use-localized-date-format-Dy8J1Ssn.js";
import { t as EmptyState } from "./EmptyState-DZDwceHm.js";
import { a as DropdownMenuItem, l as DropdownMenuSeparator, o as DropdownMenuLabel, p as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DH51wH-m.js";
import { n as openDialogAfterOverlayCloses } from "./overlay-lock-CIY7GeXu.js";
import "./calendar-6OJ5dwYN.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { t as ConnectCodeExample } from "./ConnectCodeExample-Ujo3XkoF.js";
import { t as DateTimePicker } from "./DateTimePicker-DySgezub.js";
import { a as parseRealtimeDebuggerConfig, c as entriesToQueryStrings, d as subscriptionQueryNeedsValue, f as subscriptionQueryOperatorsForType, i as mergeRealtimeDebuggerConfigIntoPrefs, l as normalizeSubscriptionQueries, n as createConfiguredQueryEntry, o as REALTIME_QUERY_VALUE_TYPES, p as subscriptionsMatch, r as createConfiguredSubscription, s as createSubscriptionQueryEntry, u as parseQueryEntryValue } from "./debugger-prefs-xlfdSKub.js";
import { t as SearchableSelect } from "./SearchableSelect-DPl0hr1b.js";
import "./RefreshButton-BA9lQ7jC.js";
import { n as REALTIME_OUTGOING_ICON_CLASS, t as REALTIME_INCOMING_ICON_CLASS } from "./message-direction-styles-Dxalxa2m.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { t as ToolbarCountBadge } from "./ToolbarCountBadge-WR-HvODH.js";
import { t as MessageDirectionIcon } from "./MessageDirectionIcon-CbKkiAl0.js";
import "./EventResourceIdSelector-DoLZYJw-.js";
import { t as EventEditorModal } from "./EventEditor-Ba3G3deD.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Client, ID } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { toast } from "sonner";
import { ArrowDownLeft, ArrowUpRight, Check, ChevronRight, Code2, Copy, Filter, ListCollapse, ListTree, Loader2, MessagesSquare, Pause, Play, Plus, Radio, RefreshCw, Route, Search, Trash2, Unplug, X } from "lucide-react";
function parseBetweenValue(value) {
	const parts = value.split(",").map((part) => part.trim()).filter(Boolean);
	if (parts.length >= 2) return [parts[0], parts[1]];
	return null;
}
function escapeSingleQuoted$1(value) {
	return value.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}
function escapeDoubleQuoted$1(value) {
	return value.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
}
function jsLiteralFromCoerced(value) {
	if (typeof value === "boolean") return value ? "true" : "false";
	if (typeof value === "number") return String(value);
	return `'${escapeSingleQuoted$1(value)}'`;
}
function swiftLiteralFromCoerced(value) {
	if (typeof value === "boolean") return value ? "true" : "false";
	if (typeof value === "number") return String(value);
	return `"${escapeDoubleQuoted$1(value)}"`;
}
function javaLiteralFromCoerced(value) {
	if (typeof value === "boolean") return value ? "true" : "false";
	if (typeof value === "number") return String(value);
	return `"${escapeDoubleQuoted$1(value)}"`;
}
function coercePart(value, valueType) {
	const parsed = parseQueryEntryValue({
		id: "",
		attribute: "x",
		operatorKey: "equal",
		value,
		valueType
	});
	return parsed === null || parsed === "" ? value : parsed;
}
function entryScalarValue(entry) {
	const parsed = parseQueryEntryValue(entry);
	return parsed === null || parsed === "" ? entry.value.trim() : parsed;
}
function indentLines(lines, indent) {
	return lines.map((line) => `${indent}${line}`).join("\n");
}
var DIALECT = {
	jsAttr: (attribute) => `'${escapeSingleQuoted$1(attribute)}'`,
	swiftAttr: (attribute) => `"${escapeDoubleQuoted$1(attribute)}"`,
	javaAttr: (attribute) => `"${escapeDoubleQuoted$1(attribute)}"`,
	jsValue: jsLiteralFromCoerced,
	swiftValue: swiftLiteralFromCoerced,
	javaValue: javaLiteralFromCoerced
};
function buildJsQuery(entry) {
	const attribute = entry.attribute.trim();
	const { operatorKey, valueType } = entry;
	const attr = DIALECT.jsAttr(attribute);
	if (!subscriptionQueryNeedsValue(operatorKey)) return `Query.${operatorKey}(${attr})`;
	if (operatorKey === "between" || operatorKey === "notBetween") {
		const pair = parseBetweenValue(entry.value);
		if (pair) return `Query.${operatorKey === "between" ? "between" : "notBetween"}(${attr}, ${DIALECT.jsValue(coercePart(pair[0], valueType))}, ${DIALECT.jsValue(coercePart(pair[1], valueType))})`;
	}
	if (operatorKey === "exists") return `Query.exists([${attr}])`;
	if (operatorKey === "notExists") return `Query.notExists([${attr}])`;
	return `Query.${operatorKey}(${attr}, ${DIALECT.jsValue(entryScalarValue(entry))})`;
}
function buildSwiftQuery(entry) {
	const attribute = entry.attribute.trim();
	const { operatorKey, valueType } = entry;
	const attr = DIALECT.swiftAttr(attribute);
	if (!subscriptionQueryNeedsValue(operatorKey)) return `Query.${operatorKey}(${attr})`;
	if (operatorKey === "between" || operatorKey === "notBetween") {
		const pair = parseBetweenValue(entry.value);
		if (pair) return `Query.${operatorKey === "between" ? "between" : "notBetween"}(${attr}, value: ${DIALECT.swiftValue(coercePart(pair[0], valueType))}, value: ${DIALECT.swiftValue(coercePart(pair[1], valueType))})`;
	}
	if (operatorKey === "exists") return `Query.exists([${attr}])`;
	if (operatorKey === "notExists") return `Query.notExists([${attr}])`;
	return `Query.${operatorKey}(${attr}, value: ${DIALECT.swiftValue(entryScalarValue(entry))})`;
}
function buildJavaQuery(entry) {
	const attribute = entry.attribute.trim();
	const { operatorKey, valueType } = entry;
	const attr = DIALECT.javaAttr(attribute);
	if (!subscriptionQueryNeedsValue(operatorKey)) return `Query.${operatorKey}(${attr})`;
	if (operatorKey === "between" || operatorKey === "notBetween") {
		const pair = parseBetweenValue(entry.value);
		if (pair) return `Query.${operatorKey === "between" ? "between" : "notBetween"}(${attr}, ${DIALECT.javaValue(coercePart(pair[0], valueType))}, ${DIALECT.javaValue(coercePart(pair[1], valueType))})`;
	}
	if (operatorKey === "exists") return `Query.exists(Arrays.asList(${attr}))`;
	if (operatorKey === "notExists") return `Query.notExists(Arrays.asList(${attr}))`;
	return `Query.${operatorKey}(${attr}, ${DIALECT.javaValue(entryScalarValue(entry))})`;
}
var QUERY_BUILDERS = {
	"client-web": buildJsQuery,
	"client-react-native": buildJsQuery,
	"client-flutter": buildJsQuery,
	"client-apple": buildSwiftQuery,
	"client-android-kotlin": buildJavaQuery,
	"client-android-java": buildJavaQuery
};
function buildSdkQueryCalls(entries, sdkId) {
	const builder = QUERY_BUILDERS[sdkId];
	return entries.filter((entry) => entry.attribute.trim()).map((entry) => builder(entry));
}
function formatSdkQueryArray(queryCalls, sdkId) {
	if (queryCalls.length === 0) return "";
	switch (sdkId) {
		case "client-web":
		case "client-react-native": return `[\n${indentLines(queryCalls.map((query) => `${query},`), "        ")}\n    ]`;
		case "client-flutter": return `[\n${indentLines(queryCalls.map((query) => `${query},`), "        ")}\n    ]`;
		case "client-apple": return `[\n${indentLines(queryCalls.map((query) => `${query},`), "        ")}\n    ]`;
		case "client-android-kotlin": return `setOf(\n${indentLines(queryCalls.map((query) => `${query},`), "        ")}\n    )`;
		case "client-android-java": return `new HashSet<>(Arrays.asList(\n${indentLines(queryCalls.map((query) => `${query},`), "            ")}\n        ))`;
		default: return `[${queryCalls.join(", ")}]`;
	}
}
const REALTIME_SNIPPET_SDK_IDS = [
	"client-web",
	"client-flutter",
	"client-react-native",
	"client-apple",
	"client-android-kotlin",
	"client-android-java"
];
function escapeSingleQuoted(value) {
	return value.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}
function escapeDoubleQuoted(value) {
	return value.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
}
function normalizeSubscriptions(subscriptions) {
	return subscriptions.map((entry) => ({
		channel: entry.channel.trim(),
		queries: entry.queries
	})).filter((entry) => entry.channel);
}
function subscriptionVariableName(index, total) {
	if (total === 1) return "subscription";
	return `subscription${index + 1}`;
}
function subscriptionsUseQueries(subscriptions) {
	return subscriptions.some((entry) => entry.queries.length > 0);
}
function buildWebSubscribeCall(channel, queries, variable) {
	const channelLiteral = `'${escapeSingleQuoted(channel)}'`;
	const queryCalls = buildSdkQueryCalls(queries, "client-web");
	if (!(queryCalls.length > 0)) return `const ${variable} = await realtime.subscribe(${channelLiteral}, response => {
    console.log(response);
});`;
	return `const ${variable} = await realtime.subscribe(
    ${channelLiteral},
    response => {
        console.log(response);
    },
    ${formatSdkQueryArray(queryCalls, "client-web")}
);`;
}
function buildFlutterSubscribeCall(channel, queries, variable) {
	const channelLiteral = `['${escapeSingleQuoted(channel)}']`;
	const queryCalls = buildSdkQueryCalls(queries, "client-flutter");
	if (!(queryCalls.length > 0)) return `final ${variable} = realtime.subscribe(${channelLiteral});

${variable}.stream.listen((response) {
    print(response);
});`;
	return `final ${variable} = realtime.subscribe(
    ${channelLiteral},
    queries: ${formatSdkQueryArray(queryCalls, "client-flutter")},
);

${variable}.stream.listen((response) {
    print(response);
});`;
}
function buildAppleSubscribeCall(channel, queries, variable) {
	const channelLiteral = `["${escapeDoubleQuoted(channel)}"]`;
	const queryCalls = buildSdkQueryCalls(queries, "client-apple");
	if (!(queryCalls.length > 0)) return `let ${variable} = realtime.subscribe(channels: ${channelLiteral}) { response in
    print(String(describing: response))
}`;
	return `let ${variable} = realtime.subscribe(
    channels: ${channelLiteral},
    callback: { response in
        print(String(describing: response))
    },
    queries: ${formatSdkQueryArray(queryCalls, "client-apple")}
)`;
}
function buildKotlinSubscribeCall(channel, queries, variable) {
	const channelLiteral = `"${escapeDoubleQuoted(channel)}"`;
	const queryCalls = buildSdkQueryCalls(queries, "client-android-kotlin");
	if (!(queryCalls.length > 0)) return `val ${variable} = realtime.subscribe(${channelLiteral}) {
    print(it.payload.toString())
}`;
	return `val ${variable} = realtime.subscribe(
    ${channelLiteral},
    payloadType = Any::class.java,
    queries = ${formatSdkQueryArray(queryCalls, "client-android-kotlin")}
) {
    print(it.payload.toString())
}`;
}
function buildJavaSubscribeCall(channel, queries, variable) {
	const channelArray = `new String[] { "${escapeDoubleQuoted(channel)}" }`;
	const queryCalls = buildSdkQueryCalls(queries, "client-android-java");
	if (!(queryCalls.length > 0)) return `RealtimeSubscription ${variable} = realtime.subscribe(
    ${channelArray},
    (RealtimeResponseEvent<Object> response) -> {
        System.out.println(response);
        return Unit.INSTANCE;
    }
);`;
	return `RealtimeSubscription ${variable} = realtime.subscribe(
    ${channelArray},
    Object.class,
    ${formatSdkQueryArray(queryCalls, "client-android-java")},
    (RealtimeResponseEvent<Object> response) -> {
        System.out.println(response);
        return Unit.INSTANCE;
    }
);`;
}
function buildWebSnippet(endpoint, projectId, subscriptions) {
	const setup = `import { Client, Realtime${subscriptionsUseQueries(subscriptions) ? ", Query" : ""} } from "appwrite";

const client = new Client()
    .setEndpoint('${escapeSingleQuoted(endpoint)}')
    .setProject('${escapeSingleQuoted(projectId)}');

const realtime = new Realtime(client);`;
	if (subscriptions.length === 0) return `${setup}

// Add subscriptions in the debugger, then copy updated code here:
// const subscription = await realtime.subscribe('account', response => {
//     console.log(response);
// });`;
	return `${setup}

${subscriptions.map((entry, index) => buildWebSubscribeCall(entry.channel, entry.queries, subscriptionVariableName(index, subscriptions.length))).join("\n\n")}

// Stop one listener:
// await subscription.unsubscribe();

// Close the shared WebSocket:
// await realtime.disconnect();`;
}
function buildFlutterSnippet(endpoint, projectId, subscriptions) {
	const setup = `import 'package:appwrite/appwrite.dart';

final client = Client()
    .setEndpoint('${escapeSingleQuoted(endpoint)}')
    .setProject('${escapeSingleQuoted(projectId)}');

final realtime = Realtime(client);`;
	if (subscriptions.length === 0) return `${setup}

// final subscription = realtime.subscribe(['account']);
// subscription.stream.listen((response) {
//     print(response);
// });`;
	return `${setup}

${subscriptions.map((entry, index) => buildFlutterSubscribeCall(entry.channel, entry.queries, subscriptionVariableName(index, subscriptions.length))).join("\n\n")}`;
}
function buildAppleSnippet(endpoint, projectId, subscriptions) {
	const setup = `import Appwrite

let client = Client()
    .setEndpoint("${escapeDoubleQuoted(endpoint)}")
    .setProject("${escapeDoubleQuoted(projectId)}")

let realtime = Realtime(client)`;
	if (subscriptions.length === 0) return `${setup}

// let subscription = realtime.subscribe(channels: ["account"]) { response in
//     print(String(describing: response))
// }`;
	return `${setup}

${subscriptions.map((entry, index) => buildAppleSubscribeCall(entry.channel, entry.queries, subscriptionVariableName(index, subscriptions.length))).join("\n\n")}`;
}
function buildKotlinSnippet(endpoint, projectId, subscriptions) {
	const setup = `import io.appwrite.Client${subscriptionsUseQueries(subscriptions) ? "\nimport io.appwrite.Query" : ""}
import io.appwrite.services.Realtime

val client = Client(context)
    .setEndpoint("${escapeDoubleQuoted(endpoint)}")
    .setProject("${escapeDoubleQuoted(projectId)}")

val realtime = Realtime(client)`;
	if (subscriptions.length === 0) return `${setup}

// val subscription = realtime.subscribe("account") {
//     print(it.payload.toString())
// }`;
	return `${setup}

${subscriptions.map((entry, index) => buildKotlinSubscribeCall(entry.channel, entry.queries, subscriptionVariableName(index, subscriptions.length))).join("\n\n")}`;
}
function buildJavaSnippet(endpoint, projectId, subscriptions) {
	const setup = `import io.appwrite.Client;
import io.appwrite.Query;
import io.appwrite.models.RealtimeResponseEvent;
import io.appwrite.models.RealtimeSubscription;
import io.appwrite.services.Realtime;${subscriptionsUseQueries(subscriptions) ? "\nimport java.util.Arrays;\nimport java.util.HashSet;" : ""}
import kotlin.Unit;

Client client = new Client(context)
    .setEndpoint("${escapeDoubleQuoted(endpoint)}")
    .setProject("${escapeDoubleQuoted(projectId)}");

Realtime realtime = new Realtime(client);`;
	if (subscriptions.length === 0) return `${setup}

// RealtimeSubscription subscription = realtime.subscribe(
//     new String[] { "account" },
//     (RealtimeResponseEvent<Object> response) -> {
//         System.out.println(response);
//         return Unit.INSTANCE;
//     }
// );`;
	return `${setup}

${subscriptions.map((entry, index) => buildJavaSubscribeCall(entry.channel, entry.queries, subscriptionVariableName(index, subscriptions.length))).join("\n\n")}`;
}
function buildReactNativeSnippet(endpoint, projectId, subscriptions) {
	return buildWebSnippet(endpoint, projectId, subscriptions);
}
function buildRealtimeConnectionSnippets({ endpoint, projectId, subscriptions }) {
	const normalizedSubscriptions = normalizeSubscriptions(subscriptions);
	const builders = {
		"client-web": buildWebSnippet,
		"client-flutter": buildFlutterSnippet,
		"client-apple": buildAppleSnippet,
		"client-android-kotlin": buildKotlinSnippet,
		"client-android-java": buildJavaSnippet,
		"client-react-native": buildReactNativeSnippet
	};
	return REALTIME_SNIPPET_SDK_IDS.map((id) => ({
		id,
		label: resolveFenceCodeLabel(id),
		code: builders[id](endpoint, projectId, normalizedSubscriptions),
		language: resolveFenceCodeLanguage(id)
	}));
}
function ConnectionCodeDialog({ open, onOpenChange, projectId, subscriptions }) {
	const t = useT();
	const snippets = useMemo(() => buildRealtimeConnectionSnippets({
		endpoint: getProjectApiEndpoint(projectId),
		projectId,
		subscriptions: subscriptions.map((entry) => ({
			channel: entry.channel,
			queries: entry.queries
		}))
	}), [projectId, subscriptions]);
	const [activeSdkId, setActiveSdkId] = useState("client-web");
	const activeSnippet = snippets.find((snippet) => snippet.id === activeSdkId) ?? snippets[0];
	const subscriptionCount = subscriptions.length;
	const queryCount = subscriptions.reduce((total, entry) => total + entry.queries.length, 0);
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "flex max-h-[min(90dvh,720px)] flex-col gap-0 overflow-hidden p-0 sm:max-w-2xl",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 pb-4 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Realtime connection code") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: subscriptionCount > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
							t("One subscribe call per configured subscription"),
							subscriptionCount === 1 ? /* @__PURE__ */ jsxs(Fragment, { children: [
								" ",
								t("for"),
								" ",
								/* @__PURE__ */ jsx("code", {
									className: "font-mono text-[12px]",
									children: subscriptions[0]?.channel
								})
							] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
								" (",
								subscriptionCount,
								" ",
								t("total"),
								")"
							] }),
							queryCount > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [". ", t("Query filters are included per subscription where configured.")] }) : /* @__PURE__ */ jsx(Fragment, { children: "." }),
							" ",
							t("Authenticated channels require an active session or JWT on the client.")
						] }) : /* @__PURE__ */ jsx(Fragment, { children: t("Add a subscription in the debugger to generate channel-specific subscribe calls. Add query filters on each subscription as needed.") })
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsx("div", {
					className: "flex min-h-0 flex-1 flex-col px-6 py-4",
					children: activeSnippet ? /* @__PURE__ */ jsx(ConnectCodeExample, {
						code: activeSnippet.code,
						language: activeSnippet.language,
						tabs: snippets.map((snippet) => ({
							id: snippet.id,
							label: snippet.label
						})),
						activeTabId: activeSdkId,
						onTabChange: (id) => setActiveSdkId(id),
						selectorVariant: "dropdown",
						fixedHeight: "min(420px, 50dvh)",
						className: "min-h-0 flex-1"
					}) : null
				}),
				/* @__PURE__ */ jsx("div", {
					className: "border-t border-border bg-muted/30 px-6 py-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: /* @__PURE__ */ jsx(Button, {
						variant: "outline",
						onClick: () => onOpenChange(false),
						children: t("Close")
					})
				})
			]
		})
	});
}
function tryParseJson(payload) {
	try {
		return JSON.parse(payload);
	} catch {
		return null;
	}
}
function collapsedPreview(value) {
	if (Array.isArray(value)) return `[${value.length} item${value.length === 1 ? "" : "s"}]`;
	const keys = Object.keys(value);
	return `{${keys.length} key${keys.length === 1 ? "" : "s"}}`;
}
function primitiveClassName(value) {
	if (value === null) return "text-muted-foreground";
	if (typeof value === "boolean") return "text-violet-600 dark:text-violet-400";
	if (typeof value === "number") return "text-amber-700 dark:text-amber-400";
	return "text-emerald-700 dark:text-emerald-400";
}
function renderPrimitive(value) {
	if (value === null) return "null";
	if (typeof value === "string") return JSON.stringify(value);
	return String(value);
}
function JsonCopyButton({ content }) {
	const t = useT();
	const [copied, setCopied] = useState(false);
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		onClick: useCallback(() => {
			navigator.clipboard.writeText(content);
			setCopied(true);
			toast.success(t("Copied to clipboard"));
			window.setTimeout(() => setCopied(false), 2e3);
		}, [content, t]),
		className: "flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
		"aria-label": t("Copy JSON"),
		children: copied ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" })
	});
}
function CollapseToggle({ collapsed, onToggle, label }) {
	const t = useT();
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		onClick: (event) => {
			event.stopPropagation();
			onToggle();
		},
		className: "me-1 inline-flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground",
		"aria-label": collapsed ? `${t("Expand")} ${label}` : `${t("Collapse")} ${label}`,
		"aria-expanded": !collapsed,
		children: /* @__PURE__ */ jsx(ChevronRight, { className: cn("h-3 w-3 transition-transform duration-150", !collapsed && "rotate-90") })
	});
}
function JsonProperty({ name, value, path, depth, isLast }) {
	const [collapsed, setCollapsed] = useState(false);
	const comma = isLast ? "" : ",";
	const nameLabel = name === void 0 ? null : typeof name === "number" ? /* @__PURE__ */ jsx("span", {
		className: "text-muted-foreground",
		children: name
	}) : /* @__PURE__ */ jsx("span", {
		className: "text-foreground/90",
		children: JSON.stringify(name)
	});
	if (Array.isArray(value)) {
		if (value.length === 0) return /* @__PURE__ */ jsxs("div", {
			className: "whitespace-pre",
			children: [nameLabel ? /* @__PURE__ */ jsxs(Fragment, { children: [nameLabel, /* @__PURE__ */ jsx("span", {
				className: "text-muted-foreground",
				children: ": "
			})] }) : null, /* @__PURE__ */ jsxs("span", {
				className: "text-muted-foreground",
				children: ["[]", comma]
			})]
		});
		return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-start whitespace-pre",
			children: [
				/* @__PURE__ */ jsx(CollapseToggle, {
					collapsed,
					onToggle: () => setCollapsed((current) => !current),
					label: String(name ?? "array")
				}),
				nameLabel ? /* @__PURE__ */ jsxs(Fragment, { children: [nameLabel, /* @__PURE__ */ jsx("span", {
					className: "text-muted-foreground",
					children: ": "
				})] }) : null,
				collapsed ? /* @__PURE__ */ jsxs("span", {
					className: "text-muted-foreground",
					children: [collapsedPreview(value), comma]
				}) : /* @__PURE__ */ jsx("span", {
					className: "text-muted-foreground",
					children: "["
				})
			]
		}), !collapsed ? /* @__PURE__ */ jsxs(Fragment, { children: [value.map((item, index) => /* @__PURE__ */ jsx("div", {
			style: { paddingInlineStart: (depth + 1) * 14 },
			children: /* @__PURE__ */ jsx(JsonProperty, {
				value: item,
				path: `${path}[${index}]`,
				depth: depth + 1,
				isLast: index === value.length - 1
			})
		}, `${path}[${index}]`)), /* @__PURE__ */ jsx("div", {
			style: { paddingInlineStart: depth * 14 },
			children: /* @__PURE__ */ jsxs("span", {
				className: "text-muted-foreground",
				children: ["]", comma]
			})
		})] }) : null] });
	}
	if (value !== null && typeof value === "object") {
		const entries = Object.entries(value);
		if (entries.length === 0) return /* @__PURE__ */ jsxs("div", {
			className: "whitespace-pre",
			children: [nameLabel ? /* @__PURE__ */ jsxs(Fragment, { children: [nameLabel, /* @__PURE__ */ jsx("span", {
				className: "text-muted-foreground",
				children: ": "
			})] }) : null, /* @__PURE__ */ jsx("span", {
				className: "text-muted-foreground",
				children: `{}${comma}`
			})]
		});
		return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-start whitespace-pre",
			children: [
				/* @__PURE__ */ jsx(CollapseToggle, {
					collapsed,
					onToggle: () => setCollapsed((current) => !current),
					label: String(name ?? "object")
				}),
				nameLabel ? /* @__PURE__ */ jsxs(Fragment, { children: [nameLabel, /* @__PURE__ */ jsx("span", {
					className: "text-muted-foreground",
					children: ": "
				})] }) : null,
				collapsed ? /* @__PURE__ */ jsxs("span", {
					className: "text-muted-foreground",
					children: [collapsedPreview(value), comma]
				}) : /* @__PURE__ */ jsx("span", {
					className: "text-muted-foreground",
					children: "{"
				})
			]
		}), !collapsed ? /* @__PURE__ */ jsxs(Fragment, { children: [entries.map(([key, child], index) => /* @__PURE__ */ jsx("div", {
			style: { paddingInlineStart: (depth + 1) * 14 },
			children: /* @__PURE__ */ jsx(JsonProperty, {
				name: key,
				value: child,
				path: `${path}.${key}`,
				depth: depth + 1,
				isLast: index === entries.length - 1
			})
		}, `${path}.${key}`)), /* @__PURE__ */ jsx("div", {
			style: { paddingInlineStart: depth * 14 },
			children: /* @__PURE__ */ jsx("span", {
				className: "text-muted-foreground",
				children: `}${comma}`
			})
		})] }) : null] });
	}
	return /* @__PURE__ */ jsxs("div", {
		className: "whitespace-pre-wrap break-all",
		children: [
			nameLabel ? /* @__PURE__ */ jsxs(Fragment, { children: [nameLabel, /* @__PURE__ */ jsx("span", {
				className: "text-muted-foreground",
				children: ": "
			})] }) : null,
			/* @__PURE__ */ jsx("span", {
				className: primitiveClassName(value),
				children: renderPrimitive(value)
			}),
			/* @__PURE__ */ jsx("span", {
				className: "text-muted-foreground",
				children: comma
			})
		]
	});
}
function JsonRoot({ value }) {
	if (Array.isArray(value)) return /* @__PURE__ */ jsx(JsonProperty, {
		value,
		path: "$",
		depth: 0,
		isLast: true
	});
	if (value !== null && typeof value === "object") {
		const entries = Object.entries(value);
		return /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("span", {
				className: "text-muted-foreground",
				children: "{"
			}),
			entries.map(([key, child], index) => /* @__PURE__ */ jsx("div", {
				style: { paddingInlineStart: 14 },
				children: /* @__PURE__ */ jsx(JsonProperty, {
					name: key,
					value: child,
					path: `$.${key}`,
					depth: 1,
					isLast: index === entries.length - 1
				})
			}, key)),
			/* @__PURE__ */ jsx("span", {
				className: "text-muted-foreground",
				children: "}"
			})
		] });
	}
	return /* @__PURE__ */ jsx("span", {
		className: primitiveClassName(value),
		children: renderPrimitive(value)
	});
}
function CollapsibleJsonView({ payload, footer, className }) {
	const parsed = useMemo(() => tryParseJson(payload), [payload]);
	if (parsed === null) return /* @__PURE__ */ jsxs("div", {
		dir: "ltr",
		"data-code-example": true,
		className: cn(FORCE_LTR_CLASS, "overflow-hidden rounded-md border border-border", className),
		children: [/* @__PURE__ */ jsx(CodeBlock, {
			code: payload,
			language: "json",
			variant: "headless",
			copyInside: true,
			wrapLines: true
		}), footer]
	});
	return /* @__PURE__ */ jsxs("div", {
		dir: "ltr",
		"data-code-example": true,
		className: cn(FORCE_LTR_CLASS, "overflow-hidden rounded-md border border-border", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative bg-muted/10",
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute end-2 top-2 z-10",
				children: /* @__PURE__ */ jsx(JsonCopyButton, { content: payload })
			}), /* @__PURE__ */ jsx("div", {
				className: "overflow-x-auto px-3 py-3 pe-10 font-mono text-[12px] leading-relaxed",
				onClick: (event) => event.stopPropagation(),
				children: /* @__PURE__ */ jsx(JsonRoot, { value: parsed })
			})]
		}), footer]
	});
}
const MESSAGE_FRAME_TYPES = [
	"event",
	"subscribe",
	"unsubscribe",
	"connected",
	"error",
	"ping",
	"pong",
	"open",
	"close",
	"info",
	"disconnect"
];
function createDefaultMessageLogFilters() {
	return {
		search: "",
		direction: "all",
		types: new Set(MESSAGE_FRAME_TYPES),
		hidePingPong: false
	};
}
function messageSearchText(entry) {
	try {
		return JSON.stringify(entry.message).toLowerCase();
	} catch {
		return String(entry.message.type ?? "").toLowerCase();
	}
}
function matchesMessageLogFilters(entry, filters) {
	const type = entry.message.type || "unknown";
	if (filters.hidePingPong && (type === "ping" || type === "pong")) return false;
	if (filters.types.size > 0 && filters.types.size < MESSAGE_FRAME_TYPES.length && !filters.types.has(type)) return false;
	if (filters.direction !== "all" && entry.direction !== filters.direction) return false;
	const query = filters.search.trim().toLowerCase();
	if (query && !messageSearchText(entry).includes(query)) return false;
	return true;
}
function countActiveMessageFilters(filters) {
	let count = 0;
	if (filters.search.trim()) count += 1;
	if (filters.direction !== "all") count += 1;
	if (filters.hidePingPong) count += 1;
	if (filters.types.size > 0 && filters.types.size < MESSAGE_FRAME_TYPES.length) count += 1;
	return count;
}
var DIRECTION_OPTIONS = [
	{
		value: "all",
		label: "All"
	},
	{
		value: "in",
		label: "In",
		icon: ArrowDownLeft
	},
	{
		value: "out",
		label: "Out",
		icon: ArrowUpRight
	}
];
function FilterChip({ label, onRemove }) {
	const t = useT();
	return /* @__PURE__ */ jsxs("span", {
		className: "inline-flex max-w-full items-center gap-1 rounded-md border border-border bg-muted/40 py-0.5 ps-2 pe-1 text-[11px] text-foreground",
		children: [/* @__PURE__ */ jsx("span", {
			className: "truncate",
			children: label
		}), /* @__PURE__ */ jsx("button", {
			type: "button",
			className: "shrink-0 cursor-pointer rounded p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
			"aria-label": `${t("Remove filter")}: ${label}`,
			onClick: onRemove,
			children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
		})]
	});
}
function directionIconClass(value) {
	if (value === "in") return REALTIME_INCOMING_ICON_CLASS;
	if (value === "out") return REALTIME_OUTGOING_ICON_CLASS;
}
function directionSegmentClass(selected) {
	return cn("h-7 gap-1 px-2.5 text-[12px] font-medium", selected ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:bg-transparent hover:text-foreground");
}
function MessagesFilterBar({ filters, onChange }) {
	const t = useT();
	const activeFilterCount = countActiveMessageFilters(filters);
	const hasActiveFilters = activeFilterCount > 0;
	const partialTypes = filters.types.size > 0 && filters.types.size < MESSAGE_FRAME_TYPES.length;
	const toggleFrameType = (type, checked) => {
		const nextTypes = new Set(filters.types);
		if (checked) nextTypes.add(type);
		else nextTypes.delete(type);
		onChange({
			...filters,
			types: nextTypes
		});
	};
	const handleClearFilters = () => {
		onChange(createDefaultMessageLogFilters());
	};
	const selectAllFrameTypes = () => {
		onChange({
			...filters,
			types: new Set(MESSAGE_FRAME_TYPES)
		});
	};
	const clearAllFrameTypes = () => {
		onChange({
			...filters,
			types: /* @__PURE__ */ new Set()
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "shrink-0 border-b border-border bg-muted/20",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-wrap items-center gap-2 px-4 py-2.5",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "relative min-w-0 flex-1 basis-[160px]",
					children: [
						/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute start-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" }),
						/* @__PURE__ */ jsx("input", {
							type: "text",
							value: filters.search,
							onChange: (event) => onChange({
								...filters,
								search: event.target.value
							}),
							placeholder: t("Search messages..."),
							spellCheck: false,
							className: "h-9 w-full min-w-0 rounded-md border border-border bg-background ps-8 pe-8 text-[13px] text-foreground placeholder:text-muted-foreground outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
						}),
						filters.search ? /* @__PURE__ */ jsx("button", {
							type: "button",
							className: "absolute end-2 top-1/2 -translate-y-1/2 cursor-pointer rounded p-0.5 text-muted-foreground hover:bg-muted hover:text-foreground",
							"aria-label": t("Clear search"),
							onClick: () => onChange({
								...filters,
								search: ""
							}),
							children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
						}) : null
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex shrink-0 items-center rounded-md border border-border bg-muted/30 p-0.5",
					role: "group",
					"aria-label": t("Message direction"),
					children: DIRECTION_OPTIONS.map(({ value, label, icon: Icon$1 }) => {
						const selected = filters.direction === value;
						return /* @__PURE__ */ jsxs(Button, {
							type: "button",
							variant: "ghost",
							size: "sm",
							className: directionSegmentClass(selected),
							"aria-pressed": selected,
							onClick: () => onChange({
								...filters,
								direction: value
							}),
							children: [Icon$1 ? /* @__PURE__ */ jsx(Icon$1, { className: cn("h-3 w-3 shrink-0", directionIconClass(value)) }) : null, t(label)]
						}, value);
					})
				}),
				/* @__PURE__ */ jsxs(Popover, { children: [/* @__PURE__ */ jsx(PopoverTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsxs(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: cn("h-9 shrink-0 gap-1.5 border-border bg-background text-[13px] text-muted-foreground hover:bg-accent hover:text-foreground", hasActiveFilters && "border-primary/30 text-foreground"),
						children: [
							/* @__PURE__ */ jsx(Filter, { className: "h-3.5 w-3.5 shrink-0" }),
							t("Filters"),
							activeFilterCount > 0 ? /* @__PURE__ */ jsx(ToolbarCountBadge, {
								count: activeFilterCount,
								placement: "inline",
								inlineTone: "emphasis"
							}) : null
						]
					})
				}), /* @__PURE__ */ jsxs(PopoverContent, {
					align: "end",
					sideOffset: 8,
					className: "w-80 overflow-hidden rounded-xl border-border p-0 shadow-lg",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between border-b border-border px-4 py-3",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-[13px] font-semibold text-foreground",
								children: t("Message filters")
							}), hasActiveFilters ? /* @__PURE__ */ jsx(Button, {
								type: "button",
								variant: "ghost",
								size: "sm",
								className: "h-7 px-2 text-[12px] text-muted-foreground hover:text-foreground",
								onClick: handleClearFilters,
								children: t("Clear all")
							}) : null]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between gap-3 px-4 py-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "hide-ping-pong",
									className: "text-[13px] font-medium text-foreground",
									children: t("Hide ping/pong")
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-0.5 text-[12px] text-muted-foreground",
									children: t("Hide heartbeat frames from the log")
								})]
							}), /* @__PURE__ */ jsx(Switch, {
								id: "hide-ping-pong",
								checked: filters.hidePingPong,
								onCheckedChange: (checked) => onChange({
									...filters,
									hidePingPong: checked
								})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "border-t border-border px-4 py-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "mb-2.5 flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
									children: t("Frame types")
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ jsx("button", {
											type: "button",
											className: "text-[12px] font-medium text-primary hover:underline",
											onClick: selectAllFrameTypes,
											children: t("All")
										}),
										/* @__PURE__ */ jsx("span", {
											className: "text-muted-foreground/40",
											children: "·"
										}),
										/* @__PURE__ */ jsx("button", {
											type: "button",
											className: "text-[12px] font-medium text-muted-foreground hover:text-foreground hover:underline",
											onClick: clearAllFrameTypes,
											children: t("None")
										})
									]
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "max-h-52 space-y-0.5 overflow-y-auto overscroll-contain pe-1",
								children: MESSAGE_FRAME_TYPES.map((type) => /* @__PURE__ */ jsxs("label", {
									className: "flex cursor-pointer items-center gap-2.5 rounded-md px-1.5 py-1.5 transition-colors hover:bg-muted/50",
									children: [/* @__PURE__ */ jsx(Checkbox, {
										checked: filters.types.has(type),
										onCheckedChange: (checked) => toggleFrameType(type, checked === true)
									}), /* @__PURE__ */ jsx("span", {
										className: "font-mono text-[12px] uppercase text-foreground",
										children: type
									})]
								}, type))
							})]
						})
					]
				})] })
			]
		}), hasActiveFilters ? /* @__PURE__ */ jsxs("div", {
			className: "flex flex-wrap items-center gap-1.5 border-t border-border/60 px-4 py-2",
			children: [
				filters.search.trim() ? /* @__PURE__ */ jsx(FilterChip, {
					label: `${t("Search")}: ${filters.search.trim()}`,
					onRemove: () => onChange({
						...filters,
						search: ""
					})
				}) : null,
				filters.direction !== "all" ? /* @__PURE__ */ jsx(FilterChip, {
					label: filters.direction === "in" ? t("Incoming only") : t("Outgoing only"),
					onRemove: () => onChange({
						...filters,
						direction: "all"
					})
				}) : null,
				filters.hidePingPong ? /* @__PURE__ */ jsx(FilterChip, {
					label: t("Hide ping/pong"),
					onRemove: () => onChange({
						...filters,
						hidePingPong: false
					})
				}) : null,
				partialTypes ? /* @__PURE__ */ jsx(FilterChip, {
					label: `${filters.types.size} ${t("frame types")}`,
					onRemove: selectAllFrameTypes
				}) : null,
				/* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					className: "h-6 px-2 text-[11px] text-muted-foreground hover:text-foreground",
					onClick: handleClearFilters,
					children: t("Clear all")
				})
			]
		}) : null]
	});
}
function ReconnectBanner({ state }) {
	const t = useT();
	if (state.status === "idle") return null;
	const delaySeconds = state.delayMs != null ? Math.ceil(state.delayMs / 1e3) : void 0;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex items-center gap-2 border-b border-amber-500/20 bg-amber-500/[0.06] px-4 py-2 text-[12px] text-amber-800 dark:text-amber-300"),
		role: "status",
		"aria-live": "polite",
		children: [state.status === "connecting" ? /* @__PURE__ */ jsx(Loader2, {
			className: "h-3.5 w-3.5 shrink-0 animate-spin",
			"aria-hidden": true
		}) : /* @__PURE__ */ jsx(RefreshCw, {
			className: "h-3.5 w-3.5 shrink-0",
			"aria-hidden": true
		}), /* @__PURE__ */ jsx("span", { children: state.status === "connecting" ? `${t("Reconnecting…")} ${t("attempt")} ${state.attempt} ${t("of")} ${state.maxAttempts}` : `${t("Connection lost. Reconnecting in")} ${delaySeconds ?? "?"}s… ${t("attempt")} ${state.attempt} ${t("of")} ${state.maxAttempts}` })]
	});
}
var LABEL_CLASS = "mb-1 block text-[12px] font-medium text-muted-foreground";
var INPUT_CLASS = "h-9 w-full text-[13px]";
function QueryFilterForm({ disabled = false, submitLabel = "Add query", onSubmit, onCancel }) {
	const t = useT();
	const [attribute, setAttribute] = useState("");
	const [valueType, setValueType] = useState("string");
	const [operatorKey, setOperatorKey] = useState("equal");
	const [valueInput, setValueInput] = useState("");
	const operators = useMemo(() => subscriptionQueryOperatorsForType(valueType), [valueType]);
	useEffect(() => {
		if (operators.some((operator) => operator.key === operatorKey)) return;
		setOperatorKey(operators[0]?.key ?? "equal");
		setValueInput("");
	}, [operatorKey, operators]);
	const needsValue = subscriptionQueryNeedsValue(operatorKey);
	const isNumericType = valueType === "integer" || valueType === "double";
	const handleValueTypeChange = useCallback((nextType) => {
		setValueType(nextType);
		setValueInput("");
		setOperatorKey(subscriptionQueryOperatorsForType(nextType)[0]?.key ?? "equal");
	}, []);
	const resetForm = useCallback(() => {
		setAttribute("");
		setValueType("string");
		setOperatorKey("equal");
		setValueInput("");
	}, []);
	const canSubmit = useMemo(() => {
		if (!attribute.trim()) return false;
		if (!needsValue) return true;
		return !!valueInput.trim();
	}, [
		attribute,
		needsValue,
		valueInput
	]);
	const handleSubmit = useCallback((event) => {
		event.preventDefault();
		if (!canSubmit) return;
		onSubmit(createSubscriptionQueryEntry({
			attribute: attribute.trim(),
			operatorKey,
			value: needsValue ? valueInput : "",
			valueType
		}));
		resetForm();
	}, [
		attribute,
		canSubmit,
		needsValue,
		onSubmit,
		operatorKey,
		resetForm,
		valueInput,
		valueType
	]);
	const valueInputNode = (() => {
		if (!needsValue) return null;
		if (valueType === "boolean") return /* @__PURE__ */ jsxs("div", {
			className: "space-y-1",
			children: [/* @__PURE__ */ jsx("label", {
				className: LABEL_CLASS,
				htmlFor: "query-value",
				children: t("Value")
			}), /* @__PURE__ */ jsx(SearchableSelect, {
				value: valueInput,
				onValueChange: setValueInput,
				items: [{
					value: "true",
					label: t("True")
				}, {
					value: "false",
					label: t("False")
				}],
				placeholder: t("Select value"),
				searchPlaceholder: t("Search..."),
				emptyMessage: t("No results"),
				disabled,
				triggerClassName: INPUT_CLASS
			})]
		});
		if (valueType === "datetime") return /* @__PURE__ */ jsxs("div", {
			className: "space-y-1",
			children: [/* @__PURE__ */ jsx("label", {
				className: LABEL_CLASS,
				htmlFor: "query-value",
				children: t("Value")
			}), /* @__PURE__ */ jsx(DateTimePicker, {
				id: "query-value",
				value: valueInput || null,
				onChange: (next) => setValueInput(next ?? ""),
				className: INPUT_CLASS,
				disabled,
				clearable: true
			})]
		});
		return /* @__PURE__ */ jsxs("div", {
			className: "space-y-1",
			children: [/* @__PURE__ */ jsx("label", {
				className: LABEL_CLASS,
				htmlFor: "query-value",
				children: t("Value")
			}), /* @__PURE__ */ jsx(Input, {
				id: "query-value",
				type: isNumericType ? "number" : "text",
				value: valueInput,
				onChange: (event) => setValueInput(event.target.value),
				placeholder: isNumericType ? "0" : t("Enter value"),
				className: cn(INPUT_CLASS, isNumericType ? "" : "font-mono"),
				disabled,
				spellCheck: false,
				step: valueType === "integer" ? 1 : valueType === "double" ? "any" : void 0
			})]
		});
	})();
	return /* @__PURE__ */ jsxs("form", {
		onSubmit: handleSubmit,
		className: "space-y-3",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ jsx("label", {
					className: LABEL_CLASS,
					htmlFor: "query-attribute",
					children: t("Attribute")
				}), /* @__PURE__ */ jsx(Input, {
					id: "query-attribute",
					value: attribute,
					onChange: (event) => setAttribute(event.target.value),
					placeholder: "e.g. status",
					className: cn(INPUT_CLASS, "font-mono"),
					disabled,
					spellCheck: false
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ jsx("label", {
						className: LABEL_CLASS,
						htmlFor: "query-value-type",
						children: t("Value type")
					}), /* @__PURE__ */ jsx(SearchableSelect, {
						value: valueType,
						onValueChange: (value) => handleValueTypeChange(value),
						items: REALTIME_QUERY_VALUE_TYPES.map((item) => ({
							value: item.value,
							label: t(item.label)
						})),
						placeholder: t("Type"),
						searchPlaceholder: t("Search types..."),
						emptyMessage: t("No types found"),
						disabled,
						triggerClassName: INPUT_CLASS
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ jsx("label", {
						className: LABEL_CLASS,
						htmlFor: "query-operator",
						children: t("Operator")
					}), /* @__PURE__ */ jsx(SearchableSelect, {
						value: operatorKey,
						onValueChange: (value) => {
							setOperatorKey(value);
							setValueInput("");
						},
						items: operators.map((operator) => ({
							value: operator.key,
							label: t(operator.label)
						})),
						placeholder: t("Operator"),
						searchPlaceholder: t("Search operators..."),
						emptyMessage: t("No operators found"),
						disabled,
						triggerClassName: INPUT_CLASS
					})]
				})]
			}),
			valueInputNode,
			/* @__PURE__ */ jsxs("div", {
				className: "flex gap-2 pt-1",
				children: [/* @__PURE__ */ jsx(Button, {
					type: "submit",
					size: "sm",
					className: "h-9 min-w-0 flex-1 text-[13px]",
					disabled: disabled || !canSubmit,
					children: t(submitLabel)
				}), onCancel ? /* @__PURE__ */ jsx(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					className: "h-9 shrink-0 text-[13px]",
					disabled,
					onClick: onCancel,
					children: t("Cancel")
				}) : null]
			})
		]
	});
}
function getQueryDisplayPartsFromEntry(entry) {
	const operator = subscriptionQueryOperatorsForType(entry.valueType).find((item) => item.key === entry.operatorKey)?.label ?? entry.operatorKey;
	const needsValue = subscriptionQueryNeedsValue(entry.operatorKey);
	const valueTypeLabel = REALTIME_QUERY_VALUE_TYPES.find((item) => item.value === entry.valueType)?.label ?? "String";
	return {
		attribute: entry.attribute,
		operator,
		value: needsValue ? entry.value : null,
		valueType: valueTypeLabel
	};
}
function abbreviateValueType(label) {
	switch (label) {
		case "String": return "str";
		case "Integer": return "int";
		case "Float": return "flt";
		case "Boolean": return "bool";
		case "Datetime": return "dt";
		default: return label.slice(0, 4).toLowerCase();
	}
}
function QueryExpression({ parts, className, size = "default" }) {
	if (size === "compact") return /* @__PURE__ */ jsxs("div", {
		className: cn("flex min-w-0 items-center gap-1 overflow-hidden font-mono text-[11px] leading-none", className),
		title: parts.value ? `${parts.valueType ? `${parts.valueType} ` : ""}${parts.attribute} ${parts.operator} ${parts.value}` : `${parts.valueType ? `${parts.valueType} ` : ""}${parts.attribute} ${parts.operator}`,
		children: [
			parts.valueType ? /* @__PURE__ */ jsx("span", {
				className: "shrink-0 rounded bg-muted/50 px-1 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground",
				children: abbreviateValueType(parts.valueType)
			}) : null,
			/* @__PURE__ */ jsx("span", {
				className: "min-w-0 shrink truncate font-medium text-foreground",
				children: parts.attribute
			}),
			/* @__PURE__ */ jsx("span", {
				className: "shrink-0 text-muted-foreground",
				children: parts.operator
			}),
			parts.value ? /* @__PURE__ */ jsx("span", {
				className: "min-w-0 truncate text-foreground",
				children: parts.value
			}) : null
		]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex min-w-0 items-center gap-1.5 overflow-hidden font-mono text-[12px]", className),
		children: [
			parts.valueType ? /* @__PURE__ */ jsx("span", {
				className: "shrink-0 rounded-md border border-border/60 bg-muted/40 px-1.5 py-0.5 text-[10px] text-muted-foreground",
				children: abbreviateValueType(parts.valueType)
			}) : null,
			/* @__PURE__ */ jsx("span", {
				className: "min-w-0 shrink truncate rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 font-medium text-foreground",
				children: parts.attribute
			}),
			/* @__PURE__ */ jsx("span", {
				className: "shrink-0 text-muted-foreground",
				children: parts.operator
			}),
			parts.value ? /* @__PURE__ */ jsx("span", {
				className: "min-w-0 truncate rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-foreground",
				title: parts.value,
				children: parts.value
			}) : null
		]
	});
}
function LiveIndicator() {
	const t = useT();
	return /* @__PURE__ */ jsxs("span", {
		className: "inline-flex shrink-0 items-center gap-1 rounded-md bg-emerald-500/[0.08] px-1.5 py-0.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-400",
		children: [/* @__PURE__ */ jsx("span", {
			className: "h-1.5 w-1.5 rounded-full bg-emerald-500",
			"aria-hidden": true
		}), t("Live")]
	});
}
function ConfigurationSubscriptionRow({ entry, live, onRemove, onAddQuery, onRemoveQuery }) {
	const t = useT();
	const [queryPopoverOpen, setQueryPopoverOpen] = useState(false);
	const handleAddQuery = useCallback((query) => {
		onAddQuery(query);
		setQueryPopoverOpen(false);
	}, [onAddQuery]);
	return /* @__PURE__ */ jsxs("li", {
		className: "rounded-lg border border-border/60 bg-background/40 transition-colors hover:border-border hover:bg-muted/20",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "group flex min-h-9 items-center gap-2 px-2.5 py-2",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-muted/30 text-muted-foreground",
					children: /* @__PURE__ */ jsx(Radio, {
						className: "h-3.5 w-3.5",
						"aria-hidden": true
					})
				}),
				/* @__PURE__ */ jsx("code", {
					className: "min-w-0 flex-1 truncate font-mono text-[12px] font-medium leading-none text-foreground",
					title: entry.channel,
					children: entry.channel
				}),
				live ? /* @__PURE__ */ jsx(LiveIndicator, {}) : null,
				/* @__PURE__ */ jsxs("div", {
					className: "flex shrink-0 items-center gap-0.5",
					children: [/* @__PURE__ */ jsxs(Popover, {
						open: queryPopoverOpen,
						onOpenChange: setQueryPopoverOpen,
						children: [/* @__PURE__ */ jsx(PopoverTrigger, {
							asChild: true,
							children: /* @__PURE__ */ jsxs(Button, {
								type: "button",
								variant: "ghost",
								size: "sm",
								className: "h-7 px-2 text-[11px] text-muted-foreground hover:text-foreground",
								children: [/* @__PURE__ */ jsx(Filter, { className: "me-1 h-3 w-3" }), t("Query")]
							})
						}), /* @__PURE__ */ jsxs(PopoverContent, {
							align: "end",
							sideOffset: 8,
							className: "w-[min(96vw,22rem)] overflow-hidden rounded-xl border-border p-0 shadow-lg",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "border-b border-border px-4 py-3",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[13px] font-semibold text-foreground",
									children: t("Add query")
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-1 text-[12px] text-muted-foreground",
									children: t("Filter events for this subscription only.")
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx(QueryFilterForm, {
									submitLabel: t("Add query"),
									onSubmit: handleAddQuery,
									onCancel: () => setQueryPopoverOpen(false)
								})
							})]
						})]
					}), /* @__PURE__ */ jsx("button", {
						type: "button",
						className: "flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md text-muted-foreground opacity-60 transition-[color,opacity,background-color] hover:bg-muted hover:text-foreground focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring group-hover:opacity-100",
						"aria-label": `${t("Remove subscription")} ${entry.channel}`,
						onClick: onRemove,
						children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
					})]
				})
			]
		}), entry.queries.length > 0 ? /* @__PURE__ */ jsx("ul", {
			className: "space-y-1 border-t border-border/60 py-2 ps-9 pe-2.5",
			children: entry.queries.map((query) => {
				const parts = getQueryDisplayPartsFromEntry(query);
				return /* @__PURE__ */ jsxs("li", {
					className: "group/query flex min-h-7 items-center gap-1.5 rounded-md bg-muted/20 px-2 py-1",
					children: [
						/* @__PURE__ */ jsx(Filter, { className: "h-3 w-3 shrink-0 text-muted-foreground" }),
						/* @__PURE__ */ jsx("div", {
							className: "min-w-0 flex-1 overflow-hidden",
							children: /* @__PURE__ */ jsx(QueryExpression, {
								parts,
								size: "compact"
							})
						}),
						/* @__PURE__ */ jsx("button", {
							type: "button",
							className: "flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-md text-muted-foreground opacity-0 transition-[color,opacity,background-color] hover:bg-muted hover:text-foreground focus-visible:opacity-100 group-hover/query:opacity-100",
							"aria-label": t("Remove query"),
							onClick: () => onRemoveQuery(query.id),
							children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
						})
					]
				}, query.id);
			})
		}) : null]
	});
}
function ConfigurationItemsList({ configuredSubscriptions, isConnected, isSubscriptionLive, onRemoveSubscription, onAddSubscriptionQuery, onRemoveSubscriptionQuery }) {
	const t = useT();
	if (configuredSubscriptions.length === 0) return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-[160px] items-center justify-center px-4 py-8 text-center",
		children: /* @__PURE__ */ jsx("p", {
			className: "max-w-[14rem] text-[13px] leading-relaxed text-muted-foreground",
			children: t("Add a subscription to configure channels and query filters.")
		})
	});
	return /* @__PURE__ */ jsx("div", {
		className: "px-2 py-2",
		children: /* @__PURE__ */ jsx("ul", {
			className: "space-y-1.5",
			children: configuredSubscriptions.map((entry) => /* @__PURE__ */ jsx(ConfigurationSubscriptionRow, {
				entry,
				live: isConnected && isSubscriptionLive(entry.id),
				onRemove: () => void onRemoveSubscription(entry.id),
				onAddQuery: (query) => onAddSubscriptionQuery(entry.id, query),
				onRemoveQuery: (queryId) => onRemoveSubscriptionQuery(entry.id, queryId)
			}, entry.id))
		})
	});
}
var SUGGESTED_CHANNELS = [
	"account",
	"files",
	"teams",
	"databases.*.tables.*.rows.*"
];
function ConfigurationPanel({ isConnected, configuredSubscriptions, isSubscriptionLive, onAddSubscription, onRemoveSubscription, onAddSubscriptionQuery, onRemoveSubscriptionQuery, onOpenChannelBuilder }) {
	const t = useT();
	const [subscriptionPopoverOpen, setSubscriptionPopoverOpen] = useState(false);
	const [channelDraft, setChannelDraft] = useState("");
	const handleAddSubscription = useCallback(async (event) => {
		event.preventDefault();
		const channel = channelDraft.trim();
		if (!channel) return;
		await onAddSubscription(channel);
		setChannelDraft("");
		setSubscriptionPopoverOpen(false);
	}, [channelDraft, onAddSubscription]);
	const handleSuggestedSubscribe = useCallback(async (channel) => {
		await onAddSubscription(channel);
		setChannelDraft("");
		setSubscriptionPopoverOpen(false);
	}, [onAddSubscription]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-0 flex-1 flex-col overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "shrink-0 border-b border-border px-4 py-2.5",
			children: /* @__PURE__ */ jsxs(Popover, {
				open: subscriptionPopoverOpen,
				onOpenChange: setSubscriptionPopoverOpen,
				children: [/* @__PURE__ */ jsx(PopoverTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsxs(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "h-9 w-full text-[13px]",
						children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-3.5 w-3.5" }), t("Subscriptions")]
					})
				}), /* @__PURE__ */ jsxs(PopoverContent, {
					align: "start",
					sideOffset: 8,
					className: "w-[min(96vw,22rem)] overflow-hidden rounded-xl border-border p-0 shadow-lg",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "border-b border-border px-4 py-3",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[13px] font-semibold text-foreground",
							children: t("Add subscription")
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-[12px] text-muted-foreground",
							children: isConnected ? t("Subscribe to a channel. Add query filters to each subscription separately.") : t("Configure a channel now. Add queries per subscription, then connect.")
						})]
					}), /* @__PURE__ */ jsxs("form", {
						onSubmit: (event) => void handleAddSubscription(event),
						className: "space-y-3 px-4 py-3",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ jsx(Input, {
									value: channelDraft,
									onChange: (event) => setChannelDraft(event.target.value),
									placeholder: "e.g. account",
									className: "h-9 min-w-0 flex-1 font-mono text-[13px]",
									spellCheck: false
								}), /* @__PURE__ */ jsx(Button, {
									type: "button",
									variant: "outline",
									size: "sm",
									className: "h-9 shrink-0 px-3",
									onClick: onOpenChannelBuilder,
									children: /* @__PURE__ */ jsx(Route, { className: "h-4 w-4" })
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
									children: t("Suggested")
								}), /* @__PURE__ */ jsx("div", {
									className: "flex flex-wrap gap-1.5",
									children: SUGGESTED_CHANNELS.map((channel) => /* @__PURE__ */ jsx(Button, {
										type: "button",
										variant: "outline",
										size: "sm",
										className: "h-7 font-mono text-[11px]",
										onClick: () => void handleSuggestedSubscribe(channel),
										children: channel
									}, channel))
								})]
							}),
							/* @__PURE__ */ jsx(Button, {
								type: "submit",
								size: "sm",
								className: "h-9 w-full text-[13px]",
								disabled: !channelDraft.trim(),
								children: t("Add subscription")
							})
						]
					})]
				})]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "min-h-0 flex-1 overflow-y-auto overscroll-contain",
			children: /* @__PURE__ */ jsx(ConfigurationItemsList, {
				configuredSubscriptions,
				isConnected,
				isSubscriptionLive,
				onRemoveSubscription,
				onAddSubscriptionQuery,
				onRemoveSubscriptionQuery
			})
		})]
	});
}
const MOCK_MESSAGE_SAMPLE_OPTIONS = [
	{
		id: "table-row-update",
		label: "Table row update",
		description: "Incoming event after a row is updated"
	},
	{
		id: "user-update",
		label: "User update",
		description: "Incoming event after a user record changes"
	},
	{
		id: "file-create",
		label: "File created",
		description: "Incoming event after a storage file is uploaded"
	},
	{
		id: "connected",
		label: "Connected frame",
		description: "Server handshake after the WebSocket opens"
	}
];
function createMockMessageLog(id) {
	switch (id) {
		case "table-row-update": return createTableRowUpdateEvent();
		case "user-update": return createUserUpdateEvent();
		case "file-create": return createFileCreateEvent();
		case "connected": return createConnectedFrame();
		default: return id;
	}
}
function createTableRowUpdateEvent() {
	const timestamp = (/* @__PURE__ */ new Date()).toISOString();
	const rowId = "674a1c002b8f4e5a9001";
	const tableId = "tasks";
	const databaseId = "default";
	const rowChannel = `tablesdb.${databaseId}.tables.${tableId}.rows`;
	return {
		direction: "in",
		timestamp,
		message: {
			type: "event",
			data: {
				events: [
					`${rowChannel}.${rowId}.update`,
					`${rowChannel}.${rowId}`,
					`${rowChannel}.*.update`,
					"tablesdb.*.tables.*.rows.*.update"
				],
				channels: [
					"rows",
					rowChannel,
					`${rowChannel}.${rowId}`
				],
				subscriptions: ["a1b2c3d4e5"],
				timestamp,
				payload: {
					title: "Review pull request",
					status: "in_progress",
					priority: 2,
					completed: false,
					dueDate: "2024-03-15T09:00:00.000+00:00",
					$id: rowId,
					$createdAt: "2024-03-01T14:22:11.715+00:00",
					$updatedAt: timestamp,
					$permissions: ["read(\"any\")", "update(\"users\")"],
					$tableId: tableId,
					$databaseId: databaseId
				}
			}
		}
	};
}
function createUserUpdateEvent() {
	const timestamp = (/* @__PURE__ */ new Date()).toISOString();
	const userId = "674a1c002b8f4e5a9002";
	return {
		direction: "in",
		timestamp,
		message: {
			type: "event",
			data: {
				events: [
					`users.${userId}.update`,
					`users.${userId}`,
					"users.*.update",
					"users.*"
				],
				channels: ["users", `users.${userId}`],
				subscriptions: ["f6g7h8i9j0"],
				timestamp,
				payload: {
					$id: userId,
					name: "Alex Rivera",
					email: "alex@example.com",
					emailVerification: true,
					phone: "",
					status: true,
					prefs: {
						theme: "dark",
						notifications: true
					},
					accessedAt: timestamp,
					$createdAt: "2024-01-10T08:15:00.000+00:00",
					$updatedAt: timestamp
				}
			}
		}
	};
}
function createFileCreateEvent() {
	const timestamp = (/* @__PURE__ */ new Date()).toISOString();
	const fileId = "674a1c003c9a5f6b0112";
	const bucketId = "uploads";
	const filesChannel = `buckets.${bucketId}.files`;
	return {
		direction: "in",
		timestamp,
		message: {
			type: "event",
			data: {
				events: [
					`${filesChannel}.${fileId}.create`,
					`${filesChannel}.${fileId}`,
					`${filesChannel}.*.create`,
					"buckets.*.files.*.create"
				],
				channels: [
					"files",
					filesChannel,
					`${filesChannel}.${fileId}`
				],
				subscriptions: ["k1l2m3n4o5"],
				timestamp,
				payload: {
					$id: fileId,
					bucketId,
					name: "hero-banner.png",
					signature: "abc123def4567890",
					mimeType: "image/png",
					sizeOriginal: 245760,
					$createdAt: timestamp,
					$updatedAt: timestamp,
					$permissions: ["read(\"any\")"]
				}
			}
		}
	};
}
function createConnectedFrame() {
	return {
		direction: "in",
		timestamp: (/* @__PURE__ */ new Date()).toISOString(),
		message: {
			type: "connected",
			data: {}
		}
	};
}
function InsertSampleMessageMenu({ onInsert }) {
	const t = useT();
	return /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsxs(Button, {
			type: "button",
			variant: "outline",
			size: "sm",
			className: "h-7 text-[12px]",
			children: [/* @__PURE__ */ jsx(Plus, { className: "me-1.5 h-3.5 w-3.5" }), t("Sample")]
		})
	}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
		align: "end",
		className: "w-72",
		children: [
			/* @__PURE__ */ jsx(DropdownMenuLabel, {
				className: "text-[12px] font-normal leading-snug text-muted-foreground",
				children: t("Sample frames are added locally for reference. Nothing is sent over the network.")
			}),
			/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
			MOCK_MESSAGE_SAMPLE_OPTIONS.map((option) => /* @__PURE__ */ jsxs(DropdownMenuItem, {
				className: "flex cursor-pointer flex-col items-start gap-0.5 py-2",
				onSelect: () => onInsert(option.id),
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-[13px] font-medium text-foreground",
					children: t(option.label)
				}), /* @__PURE__ */ jsx("span", {
					className: "text-[12px] leading-snug text-muted-foreground",
					children: t(option.description)
				})]
			}, option.id))
		]
	})] });
}
function useRealtimeDebuggerConfig(projectId) {
	const { account } = useAuth();
	const queryClient = useQueryClient();
	const accountPrefs = account?.prefs;
	const config = parseRealtimeDebuggerConfig(accountPrefs, projectId);
	const persistMutation = useMutation({
		mutationFn: async (next) => {
			const currentAccount = account;
			if (!currentAccount || !projectId?.trim()) throw new Error("Account data not available");
			return await updateAccountPrefs(mergeRealtimeDebuggerConfigIntoPrefs(currentAccount.prefs ?? {}, projectId, next));
		},
		onMutate: async (next) => {
			if (!projectId?.trim()) return;
			queryClient.setQueriesData({ queryKey: ["account", "console"] }, (current) => current ? {
				...current,
				prefs: mergeRealtimeDebuggerConfigIntoPrefs(current.prefs ?? {}, projectId, next)
			} : current);
		},
		onSuccess: (updatedAccount) => {
			syncConsoleAccountAfterMutation(queryClient, { apiResult: updatedAccount });
		}
	});
	const updateConfig = useCallback((updater) => {
		if (!projectId?.trim()) return;
		const next = updater(config);
		persistMutation.mutate(next);
	}, [
		config,
		persistMutation,
		projectId
	]);
	return {
		config,
		addSubscription: useCallback((channel) => {
			const trimmed = channel.trim();
			if (!trimmed) return null;
			const entry = createConfiguredSubscription(trimmed);
			updateConfig((current) => ({
				...current,
				subscriptions: [...current.subscriptions, entry]
			}));
			return entry;
		}, [updateConfig]),
		removeSubscription: useCallback((entryId) => {
			updateConfig((current) => ({
				...current,
				subscriptions: current.subscriptions.filter((entry) => entry.id !== entryId)
			}));
		}, [updateConfig]),
		addSubscriptionQuery: useCallback((subscriptionId, query) => {
			updateConfig((current) => ({
				...current,
				subscriptions: current.subscriptions.map((entry) => entry.id === subscriptionId ? {
					...entry,
					queries: [...entry.queries, query]
				} : entry)
			}));
		}, [updateConfig]),
		removeSubscriptionQuery: useCallback((subscriptionId, queryId) => {
			updateConfig((current) => ({
				...current,
				subscriptions: current.subscriptions.map((entry) => entry.id === subscriptionId ? {
					...entry,
					queries: entry.queries.filter((query) => query.id !== queryId)
				} : entry)
			}));
		}, [updateConfig]),
		createQueryEntry: createConfiguredQueryEntry
	};
}
async function createUserJwtForRealtime(projectId, userId) {
	const response = await sdk.forProject(projectId).users.createJWT({ userId });
	if (!response.jwt?.trim()) throw new Error("Failed to create JWT: empty response");
	return response.jwt;
}
var HEARTBEAT_MS = 2e4;
var POLICY_VIOLATION_CODE = 1008;
var MAX_RECONNECT_ATTEMPTS = 8;
function toWebSocketEndpoint(httpEndpoint) {
	return httpEndpoint.replace(/^https:\/\//, "wss://").replace(/^http:\/\//, "ws://");
}
function buildRealtimeUrl(client) {
	const realtimeEndpoint = toWebSocketEndpoint(client.config.endpointRealtime !== "" ? client.config.endpointRealtime : client.config.endpoint || "");
	const params = new URLSearchParams();
	params.set("project", client.config.project);
	const jwt = client.config.jwt.trim();
	if (jwt) params.set("jwt", jwt);
	return `${realtimeEndpoint}/realtime?${params.toString()}`;
}
function getProjectRealtimeWebSocketUrl(projectId) {
	return `${`${toWebSocketEndpoint(getProjectApiEndpoint(projectId))}/realtime`}?project=${encodeURIComponent(projectId)}`;
}
function createIsolatedRealtimeClient(projectId, options) {
	const client = new Client();
	client.setEndpoint(getProjectApiEndpoint(projectId)).setProject(projectId).setCredentials("omit");
	client.setSession("");
	client.setJWT(options?.jwt?.trim() ?? "");
	client.setCookie("");
	client.setKey("");
	return client;
}
function sendMessage(socket, message, onMessage) {
	socket.send(JSON.stringify(message));
	onMessage({
		direction: "out",
		timestamp: (/* @__PURE__ */ new Date()).toISOString(),
		message
	});
}
function reconnectDelayMs(attempt) {
	if (attempt < 5) return 1e3;
	if (attempt < 15) return 5e3;
	return 1e4;
}
function isFatalRealtimeErrorCode(code) {
	if (code === void 0) return false;
	if (code === POLICY_VIOLATION_CODE) return true;
	return code >= 400 && code < 500;
}
function createRealtimeSession(projectId, auth, callbacks) {
	const jwt = auth.mode === "user" ? auth.jwt.trim() : "";
	const realtimeUrl = buildRealtimeUrl(createIsolatedRealtimeClient(projectId, jwt ? { jwt } : void 0));
	let socket = null;
	let connectionId = 0;
	let heartbeatTimer;
	let reconnectTimer;
	let shouldReconnect = false;
	let closedByUser = false;
	let connectionRequested = false;
	let appConnected = false;
	let reconnectAttempts = 0;
	let fatalError = null;
	const isSessionActive = () => connectionRequested || subscriptions.size > 0;
	const subscriptions = /* @__PURE__ */ new Map();
	const pendingSubscribes = /* @__PURE__ */ new Map();
	const emitReconnectState = (state) => {
		callbacks.onReconnectStateChange?.(state);
	};
	const clearHeartbeat = () => {
		if (heartbeatTimer) {
			clearInterval(heartbeatTimer);
			heartbeatTimer = void 0;
		}
	};
	const clearReconnectTimer = () => {
		if (reconnectTimer) {
			clearTimeout(reconnectTimer);
			reconnectTimer = void 0;
		}
	};
	const startHeartbeat = (activeId) => {
		clearHeartbeat();
		heartbeatTimer = setInterval(() => {
			if (activeId !== connectionId || !socket || socket.readyState !== WebSocket.OPEN) return;
			sendMessage(socket, { type: "ping" }, callbacks.onMessage);
		}, HEARTBEAT_MS);
	};
	const flushPendingSubscribes = () => {
		if (!socket || socket.readyState !== WebSocket.OPEN || !appConnected) return;
		if (pendingSubscribes.size === 0) return;
		const rows = Array.from(pendingSubscribes.values()).map((entry) => ({
			subscriptionId: entry.id,
			channels: entry.channels,
			queries: entry.queries
		}));
		pendingSubscribes.clear();
		sendMessage(socket, {
			type: "subscribe",
			data: rows
		}, callbacks.onMessage);
	};
	const enqueuePendingSubscribe = (subscriptionId) => {
		const record = subscriptions.get(subscriptionId);
		if (!record) return;
		pendingSubscribes.set(subscriptionId, record);
	};
	const handleIncomingMessage = (raw, activeId) => {
		if (activeId !== connectionId) return;
		callbacks.onMessage({
			direction: "in",
			timestamp: (/* @__PURE__ */ new Date()).toISOString(),
			message: raw
		});
		switch (raw.type) {
			case "connected":
				appConnected = true;
				reconnectAttempts = 0;
				emitReconnectState({
					status: "idle",
					attempt: 0,
					maxAttempts: MAX_RECONNECT_ATTEMPTS
				});
				for (const subscriptionId of subscriptions.keys()) enqueuePendingSubscribe(subscriptionId);
				flushPendingSubscribes();
				break;
			case "error": {
				const data = raw.data;
				const sessionError = {
					message: data?.message || "Realtime error",
					code: data?.code
				};
				if (isFatalRealtimeErrorCode(data?.code)) {
					fatalError = sessionError;
					shouldReconnect = false;
				}
				callbacks.onError?.(sessionError);
				break;
			}
			default: break;
		}
	};
	const closeActiveSocket = () => {
		clearHeartbeat();
		clearReconnectTimer();
		const active = socket;
		socket = null;
		appConnected = false;
		if (active && active.readyState < WebSocket.CLOSING) active.close(1e3);
	};
	const scheduleReconnect = () => {
		clearReconnectTimer();
		if (closedByUser || !shouldReconnect || !isSessionActive() || fatalError) return;
		if (reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) {
			shouldReconnect = false;
			emitReconnectState({
				status: "idle",
				attempt: reconnectAttempts,
				maxAttempts: MAX_RECONNECT_ATTEMPTS
			});
			callbacks.onMessage({
				direction: "in",
				timestamp: (/* @__PURE__ */ new Date()).toISOString(),
				message: {
					type: "error",
					data: { message: "Realtime connection failed after multiple attempts." }
				}
			});
			callbacks.onError?.({ message: "Realtime connection failed after multiple attempts." });
			return;
		}
		const delay = reconnectDelayMs(reconnectAttempts);
		emitReconnectState({
			status: "scheduled",
			attempt: reconnectAttempts + 1,
			maxAttempts: MAX_RECONNECT_ATTEMPTS,
			delayMs: delay
		});
		reconnectTimer = setTimeout(() => {
			reconnectTimer = void 0;
			if (closedByUser || !shouldReconnect || !isSessionActive() || fatalError) return;
			reconnectAttempts += 1;
			emitReconnectState({
				status: "connecting",
				attempt: reconnectAttempts,
				maxAttempts: MAX_RECONNECT_ATTEMPTS
			});
			openSocket();
		}, delay);
	};
	const openSocket = () => {
		if (!isSessionActive()) {
			shouldReconnect = false;
			closeActiveSocket();
			return;
		}
		if (fatalError) {
			shouldReconnect = false;
			closeActiveSocket();
			return;
		}
		if (socket?.readyState === WebSocket.OPEN) {
			if (appConnected) flushPendingSubscribes();
			return;
		}
		if (socket?.readyState === WebSocket.CONNECTING) return;
		closeActiveSocket();
		shouldReconnect = true;
		const activeId = ++connectionId;
		if (reconnectAttempts > 0) emitReconnectState({
			status: "connecting",
			attempt: reconnectAttempts,
			maxAttempts: MAX_RECONNECT_ATTEMPTS
		});
		const ws = new WebSocket(realtimeUrl);
		socket = ws;
		ws.addEventListener("open", () => {
			if (activeId !== connectionId || ws !== socket || fatalError) return;
			callbacks.onMessage({
				direction: "in",
				timestamp: (/* @__PURE__ */ new Date()).toISOString(),
				message: {
					type: "open",
					data: { status: "WebSocket opened" }
				}
			});
			callbacks.onOpen?.();
			startHeartbeat(activeId);
		});
		ws.addEventListener("message", (event) => {
			if (activeId !== connectionId || ws !== socket) return;
			try {
				handleIncomingMessage(JSON.parse(String(event.data)), activeId);
			} catch (error) {
				const message = error instanceof Error ? error.message : "Failed to parse Realtime message";
				callbacks.onMessage({
					direction: "in",
					timestamp: (/* @__PURE__ */ new Date()).toISOString(),
					message: {
						type: "error",
						data: { message }
					}
				});
				callbacks.onError?.({ message });
			}
		});
		ws.addEventListener("close", (event) => {
			if (activeId !== connectionId || ws !== socket) return;
			clearHeartbeat();
			appConnected = false;
			callbacks.onMessage({
				direction: "in",
				timestamp: (/* @__PURE__ */ new Date()).toISOString(),
				message: {
					type: "close",
					data: {
						code: event.code,
						reason: event.reason || null,
						wasClean: event.wasClean
					}
				}
			});
			callbacks.onClose?.(event);
			if (event.code === POLICY_VIOLATION_CODE) {
				shouldReconnect = false;
				emitReconnectState({
					status: "idle",
					attempt: 0,
					maxAttempts: MAX_RECONNECT_ATTEMPTS
				});
				return;
			}
			if (closedByUser || !shouldReconnect) {
				emitReconnectState({
					status: "idle",
					attempt: 0,
					maxAttempts: MAX_RECONNECT_ATTEMPTS
				});
				return;
			}
			scheduleReconnect();
		});
		ws.addEventListener("error", () => {
			if (activeId !== connectionId || ws !== socket || fatalError) return;
			const sessionError = { message: "WebSocket error" };
			callbacks.onMessage({
				direction: "in",
				timestamp: (/* @__PURE__ */ new Date()).toISOString(),
				message: {
					type: "error",
					data: { message: sessionError.message }
				}
			});
			callbacks.onError?.(sessionError);
		});
	};
	const createSubscriptionId = () => {
		const attempts = subscriptions.size + 1;
		for (let i = 0; i < attempts; i++) {
			const candidate = ID.unique();
			if (!subscriptions.has(candidate)) return candidate;
		}
		throw new Error("Failed to generate unique subscription id");
	};
	const closeSession = () => {
		closedByUser = true;
		shouldReconnect = false;
		connectionRequested = false;
		fatalError = null;
		subscriptions.clear();
		pendingSubscribes.clear();
		closeActiveSocket();
		connectionId += 1;
		reconnectAttempts = 0;
		emitReconnectState({
			status: "idle",
			attempt: 0,
			maxAttempts: MAX_RECONNECT_ATTEMPTS
		});
		closedByUser = false;
	};
	return {
		async connect() {
			connectionRequested = true;
			fatalError = null;
			shouldReconnect = true;
			openSocket();
		},
		async subscribe(channel, queries = []) {
			const trimmed = channel.trim();
			if (!trimmed) throw new Error("Channel is required");
			const subscriptionId = createSubscriptionId();
			const record = {
				id: subscriptionId,
				channels: [trimmed],
				queries
			};
			subscriptions.set(subscriptionId, record);
			enqueuePendingSubscribe(subscriptionId);
			openSocket();
			if (appConnected) flushPendingSubscribes();
			return subscriptionId;
		},
		async unsubscribe(subscriptionId) {
			subscriptions.delete(subscriptionId);
			pendingSubscribes.delete(subscriptionId);
			if (socket && socket.readyState === WebSocket.OPEN && appConnected && subscriptionId.trim()) sendMessage(socket, {
				type: "unsubscribe",
				data: [{ subscriptionId }]
			}, callbacks.onMessage);
			if (subscriptions.size === 0 && !connectionRequested) {
				shouldReconnect = false;
				closeActiveSocket();
			}
		},
		async disconnectAll() {
			if (socket && socket.readyState === WebSocket.OPEN && appConnected && subscriptions.size > 0) {
				const rows = Array.from(subscriptions.keys()).filter((subscriptionId) => subscriptionId.trim()).map((subscriptionId) => ({ subscriptionId }));
				if (rows.length > 0) sendMessage(socket, {
					type: "unsubscribe",
					data: rows
				}, callbacks.onMessage);
			}
			closeSession();
		},
		async disconnect() {
			closeSession();
		}
	};
}
function getEventFrameSummary(data) {
	if (!data || typeof data !== "object") return null;
	const record = data;
	const events = normalizeStringList(record.events);
	const channels = normalizeStringList(record.channels);
	const subscriptionIds = normalizeSubscriptionIds(record.subscriptions);
	if (events.length === 0 && channels.length === 0 && subscriptionIds.length === 0) return null;
	return {
		events,
		channels,
		subscriptionIds
	};
}
function normalizeStringList(value) {
	if (!Array.isArray(value)) return [];
	return value.filter((item) => typeof item === "string");
}
function normalizeSubscriptionIds(value) {
	if (Array.isArray(value)) return value.filter((item) => typeof item === "string");
	return [];
}
function formatSummaryList(values, maxVisible = 2) {
	if (values.length === 0) return "";
	if (values.length <= maxVisible) return values.join(", ");
	return `${values.slice(0, maxVisible).join(", ")} +${values.length - maxVisible} more`;
}
var MAX_LOG_ENTRIES = 1e3;
var REALTIME_LAYOUT_GRID = "lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)]";
var GUEST_ACTOR_ID = "__guest__";
function buildUserSelectItem(user) {
	const name = user.name?.trim() || "";
	const email = user.email?.trim() || "";
	const phone = user.phone?.trim() || "";
	const id = user.$id;
	const label = name || email || phone || id;
	return {
		value: id,
		label,
		description: [
			name && name !== label ? name : "",
			email && email !== label ? email : "",
			phone && phone !== label ? phone : "",
			id !== label ? id : ""
		].filter(Boolean).join(" · ") || void 0,
		searchText: [
			name,
			email,
			phone,
			id
		].filter(Boolean).join(" ")
	};
}
function createLogId() {
	return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
function formatMessagePayload(message) {
	try {
		return JSON.stringify(message, null, 2);
	} catch {
		return String(message);
	}
}
function formatLogTimestamp(iso) {
	const date = new Date(iso);
	if (Number.isNaN(date.getTime())) return iso;
	return format(date, "HH:mm:ss.SSS");
}
function formatPayloadSize(message) {
	try {
		const bytes = new TextEncoder().encode(JSON.stringify(message)).length;
		if (bytes < 1024) return `${bytes} B`;
		return `${(bytes / 1024).toFixed(1)} KB`;
	} catch {
		return "-";
	}
}
function MessagePayloadBlock({ payload, message }) {
	return /* @__PURE__ */ jsx(CollapsibleJsonView, {
		payload,
		footer: /* @__PURE__ */ jsx("div", {
			className: "flex items-center justify-end border-t border-border bg-muted/20 px-3 py-1.5 font-mono text-[10px] tabular-nums text-muted-foreground",
			children: formatPayloadSize(message)
		})
	});
}
function RealtimePanelHeader({ title, className, actions }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex h-12 min-h-12 max-h-12 shrink-0 items-center justify-between gap-3 overflow-hidden border-b border-border px-4", className),
		children: [/* @__PURE__ */ jsx("h3", {
			className: "shrink-0 text-[14px] font-semibold leading-none text-foreground",
			children: title
		}), actions ? /* @__PURE__ */ jsx("div", {
			className: "flex shrink-0 items-center gap-2",
			children: actions
		}) : null]
	});
}
function connectionStatusLabel(status, socketOpen) {
	switch (status) {
		case "connected": return socketOpen ? "Connected" : "Ready";
		case "connecting": return "Connecting";
		case "error": return "Connection failed";
		default: return "Disconnected";
	}
}
function connectionStatusShortLabel(status, socketOpen) {
	switch (status) {
		case "connected": return socketOpen ? "Connected" : "Ready";
		case "connecting": return "Connecting";
		case "error": return "Failed";
		default: return "Offline";
	}
}
function connectionStatusSegmentClass(status, socketOpen) {
	switch (status) {
		case "connected": return socketOpen ? "bg-emerald-500/[0.06] text-emerald-700 dark:text-emerald-400" : "bg-muted/50 text-muted-foreground";
		case "connecting": return "bg-amber-500/[0.06] text-amber-700 dark:text-amber-400";
		case "error": return "bg-destructive/[0.06] text-destructive";
		default: return "bg-muted/50 text-muted-foreground";
	}
}
function RealtimeWebSocketUrlField({ url, status, socketOpen }) {
	const t = useT();
	const [copied, setCopied] = useState(false);
	const statusLabel = t(connectionStatusShortLabel(status, socketOpen));
	const statusDescription = t(connectionStatusLabel(status, socketOpen));
	const handleCopy = useCallback(() => {
		navigator.clipboard.writeText(url);
		setCopied(true);
		toast.success(t("WebSocket URL copied"));
		window.setTimeout(() => setCopied(false), 2e3);
	}, [url, t]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex w-full min-w-0 max-w-full items-stretch overflow-hidden rounded-md border border-border bg-background lg:inline-flex lg:w-max"),
		role: "status",
		"aria-live": "polite",
		"aria-label": `${t("Connection status")}: ${statusDescription}. ${url}`,
		children: [
			/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsxs("div", {
					className: cn("flex w-[7.25rem] shrink-0 items-center justify-center gap-1.5 border-e border-border px-2 sm:gap-2 sm:px-2.5", connectionStatusSegmentClass(status, socketOpen)),
					children: [status === "connecting" ? /* @__PURE__ */ jsx(Loader2, {
						className: "h-3 w-3 shrink-0 animate-spin opacity-80",
						"aria-hidden": true
					}) : /* @__PURE__ */ jsx("span", {
						className: cn("h-1.5 w-1.5 shrink-0 rounded-full", status === "connected" && socketOpen && "bg-emerald-500", status === "connected" && !socketOpen && "bg-muted-foreground/60", status === "error" && "bg-destructive", status === "disconnected" && "bg-muted-foreground/40"),
						"aria-hidden": true
					}), /* @__PURE__ */ jsx("span", {
						className: "hidden truncate text-center text-[12px] sm:inline",
						children: statusLabel
					})]
				})
			}), /* @__PURE__ */ jsx(TooltipContent, {
				side: "bottom",
				className: "text-[12px]",
				children: statusDescription
			})] }),
			/* @__PURE__ */ jsx("div", {
				className: "flex min-w-0 flex-1 items-center bg-muted/20 px-3",
				title: url,
				children: /* @__PURE__ */ jsx("code", {
					className: "block min-w-0 flex-1 truncate whitespace-nowrap font-mono text-[12px] text-foreground/90",
					children: url
				})
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: handleCopy,
				className: "flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center border-s border-border text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground",
				"aria-label": t("Copy WebSocket URL"),
				children: copied ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 text-emerald-500" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" })
			})
		]
	});
}
function messageTypeVariant(type, direction) {
	if (type === "error") return "error";
	if (type === "info" || type === "disconnect") return "info";
	if (type === "pong" || type === "ping") return "warning";
	if (type === "connected" || type === "open") return "success";
	if (type === "close") return "warning";
	if (direction === "out") return "info";
	return "info";
}
function MessagesEmptyState({ isConnected, hasSubscriptions }) {
	const t = useT();
	if (!isConnected) return /* @__PURE__ */ jsx(EmptyState, {
		variant: "centered",
		icon: MessagesSquare,
		iconSize: "md",
		title: t("No messages yet"),
		description: t("Connect as guest or a project user, then subscribe to channels to inspect WebSocket traffic. You can also insert sample frames to preview payload structure."),
		isEmpty: true,
		className: "w-full"
	});
	if (!hasSubscriptions) return /* @__PURE__ */ jsx(EmptyState, {
		variant: "centered",
		icon: MessagesSquare,
		iconSize: "md",
		title: t("Waiting for subscriptions"),
		description: t("Add a channel subscription to start receiving and logging Realtime frames."),
		isEmpty: true,
		className: "w-full"
	});
	return /* @__PURE__ */ jsx(EmptyState, {
		variant: "centered",
		icon: Radio,
		iconSize: "md",
		title: t("Listening for traffic"),
		description: t("Incoming and outgoing WebSocket frames will appear here as they arrive."),
		isEmpty: true,
		className: "w-full"
	});
}
function View() {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const websocketUrl = useMemo(() => projectId ? getProjectRealtimeWebSocketUrl(projectId) : "", [projectId]);
	const [actAsValue, setActAsValue] = useState(GUEST_ACTOR_ID);
	const [userSearch, setUserSearch] = useState("");
	const [connectionStatus, setConnectionStatus] = useState("disconnected");
	const [socketOpen, setSocketOpen] = useState(false);
	const [isConnecting, setIsConnecting] = useState(false);
	const [channelBuilderOpen, setChannelBuilderOpen] = useState(false);
	const [messageFilters, setMessageFilters] = useState(createDefaultMessageLogFilters);
	const [reconnectState, setReconnectState] = useState({
		status: "idle",
		attempt: 0,
		maxAttempts: 8
	});
	const [logs, setLogs] = useState([]);
	const [expandedMessageIds, setExpandedMessageIds] = useState(() => /* @__PURE__ */ new Set());
	const [isPaused, setIsPaused] = useState(false);
	const [connectionCodeOpen, setConnectionCodeOpen] = useState(false);
	const [activeSubscriptions, setActiveSubscriptions] = useState([]);
	const sessionRef = useRef(null);
	const subscriptionsRef = useRef(/* @__PURE__ */ new Map());
	const isPausedRef = useRef(isPaused);
	const { config: debuggerConfig, addSubscription, removeSubscription, addSubscriptionQuery, removeSubscriptionQuery } = useRealtimeDebuggerConfig(projectId);
	const { users, isLoading: usersLoading } = useProjectUsers(projectId ?? null, 0, 100, userSearch);
	const userItems = useMemo(() => users.map((user) => buildUserSelectItem(user)), [users]);
	const actAsItems = useMemo(() => [{
		value: GUEST_ACTOR_ID,
		label: t("Guest"),
		description: t("No session or JWT"),
		searchText: "guest unauthenticated public"
	}, ...userItems], [userItems, t]);
	const isGuestActAs = actAsValue === GUEST_ACTOR_ID;
	const configuredSubscriptions = debuggerConfig.subscriptions;
	const filteredLogs = useMemo(() => logs.filter((entry) => matchesMessageLogFilters(entry, messageFilters)), [logs, messageFilters]);
	const isConnected = connectionStatus === "connected";
	const canConnect = !!actAsValue && !isConnecting && !isConnected;
	const canDisconnectAll = isConnected || isConnecting || activeSubscriptions.length > 0;
	const subscriptionCount = configuredSubscriptions.length;
	const authControlsDisabled = isConnected || isConnecting;
	const isSubscriptionLive = useCallback((subscriptionId) => {
		const configured = configuredSubscriptions.find((entry) => entry.id === subscriptionId);
		if (!configured) return false;
		const queryStrings = entriesToQueryStrings(configured.queries);
		return activeSubscriptions.some((entry) => subscriptionsMatch(entry.channel, entry.queries, configured.channel, queryStrings));
	}, [activeSubscriptions, configuredSubscriptions]);
	useEffect(() => {
		isPausedRef.current = isPaused;
	}, [isPaused]);
	useEffect(() => {
		if (projectId) sdk.forProject(projectId);
	}, [projectId]);
	const appendLog = useCallback((entry) => {
		if (isPausedRef.current) return;
		setLogs((current) => {
			return [{
				...entry,
				id: createLogId()
			}, ...current].slice(0, MAX_LOG_ENTRIES);
		});
	}, []);
	const appendSampleLog = useCallback((sampleId) => {
		const entry = createMockMessageLog(sampleId);
		setLogs((current) => {
			return [{
				...entry,
				id: createLogId(),
				isSample: true
			}, ...current].slice(0, MAX_LOG_ENTRIES);
		});
	}, []);
	const handleSessionError = useCallback((_error) => {
		setConnectionStatus("error");
		setSocketOpen(false);
	}, []);
	const handleSessionMessage = useCallback((entry) => {
		appendLog(entry);
		if (entry.message.type === "error") {
			setConnectionStatus("error");
			setSocketOpen(false);
		}
	}, [appendLog]);
	const teardownSession = useCallback(async (options) => {
		subscriptionsRef.current.clear();
		setActiveSubscriptions([]);
		const session = sessionRef.current;
		sessionRef.current = null;
		if (session) try {
			if (options?.disconnectAll) await session.disconnectAll();
			else await session.disconnect();
		} catch {}
	}, []);
	const handleDisconnect = useCallback(async () => {
		setIsConnecting(false);
		setSocketOpen(false);
		setReconnectState({
			status: "idle",
			attempt: 0,
			maxAttempts: 8
		});
		await teardownSession();
		setConnectionStatus("disconnected");
		appendLog({
			direction: "out",
			timestamp: (/* @__PURE__ */ new Date()).toISOString(),
			message: {
				type: "disconnect",
				data: { reason: "Client disconnected" }
			}
		});
	}, [appendLog, teardownSession]);
	const handleDisconnectAll = useCallback(async () => {
		setIsConnecting(false);
		setSocketOpen(false);
		setReconnectState({
			status: "idle",
			attempt: 0,
			maxAttempts: 8
		});
		await teardownSession({ disconnectAll: true });
		setConnectionStatus("disconnected");
		appendLog({
			direction: "out",
			timestamp: (/* @__PURE__ */ new Date()).toISOString(),
			message: {
				type: "disconnect",
				data: { reason: "All connections disconnected" }
			}
		});
	}, [appendLog, teardownSession]);
	useEffect(() => {
		return () => {
			teardownSession();
		};
	}, [teardownSession]);
	const handleConnect = useCallback(async () => {
		if (!projectId) return;
		if (!actAsValue) {
			toast.error(t("Select guest or a project user to connect as."));
			return;
		}
		setIsConnecting(true);
		setConnectionStatus("connecting");
		try {
			await teardownSession();
			const session = createRealtimeSession(projectId, isGuestActAs ? { mode: "guest" } : {
				mode: "user",
				jwt: await createUserJwtForRealtime(projectId, actAsValue)
			}, {
				onMessage: handleSessionMessage,
				onOpen: () => {
					setSocketOpen(true);
					setConnectionStatus("connected");
				},
				onClose: () => {
					setSocketOpen(false);
				},
				onError: handleSessionError,
				onReconnectStateChange: setReconnectState
			});
			sessionRef.current = session;
			await session.connect();
			appendLog({
				direction: "out",
				timestamp: (/* @__PURE__ */ new Date()).toISOString(),
				message: {
					type: "info",
					data: {
						message: isGuestActAs ? "Realtime session created as guest" : "Realtime session created for project user",
						mode: isGuestActAs ? "guest" : "user",
						projectId,
						...isGuestActAs ? {} : { userId: actAsValue },
						endpoint: websocketUrl
					}
				}
			});
			for (const subscription of debuggerConfig.subscriptions) {
				const queryStrings = entriesToQueryStrings(subscription.queries);
				if (Array.from(subscriptionsRef.current.values()).some((entry) => subscriptionsMatch(entry.channel, entry.queries, subscription.channel, queryStrings))) continue;
				try {
					const subscriptionId = await session.subscribe(subscription.channel, queryStrings);
					const entry = {
						id: subscriptionId,
						channel: subscription.channel,
						queries: queryStrings
					};
					subscriptionsRef.current.set(subscriptionId, entry);
				} catch (error) {
					const message = getErrorMessage(error);
					appendLog({
						direction: "in",
						timestamp: (/* @__PURE__ */ new Date()).toISOString(),
						message: {
							type: "error",
							data: { message: `Subscribe failed (${subscription.channel}): ${message}` }
						}
					});
				}
			}
			setActiveSubscriptions(Array.from(subscriptionsRef.current.values()));
		} catch (error) {
			setConnectionStatus("error");
			const message = getErrorMessage(error);
			appendLog({
				direction: "in",
				timestamp: (/* @__PURE__ */ new Date()).toISOString(),
				message: {
					type: "error",
					data: { message }
				}
			});
			await teardownSession();
		} finally {
			setIsConnecting(false);
		}
	}, [
		actAsValue,
		appendLog,
		debuggerConfig.subscriptions,
		handleSessionError,
		handleSessionMessage,
		isGuestActAs,
		projectId,
		teardownSession,
		websocketUrl,
		t
	]);
	const subscribeWebSocket = useCallback(async (rawChannel, rawQueries = []) => {
		const channel = rawChannel.trim();
		if (!channel) return;
		const queries = normalizeSubscriptionQueries(rawQueries);
		const session = sessionRef.current;
		if (!session || connectionStatus !== "connected") return;
		if (Array.from(subscriptionsRef.current.values()).some((entry) => subscriptionsMatch(entry.channel, entry.queries, channel, queries))) return;
		try {
			const subscriptionId = await session.subscribe(channel, queries);
			const entry = {
				id: subscriptionId,
				channel,
				queries
			};
			subscriptionsRef.current.set(subscriptionId, entry);
			setActiveSubscriptions(Array.from(subscriptionsRef.current.values()));
		} catch (error) {
			const message = getErrorMessage(error);
			appendLog({
				direction: "in",
				timestamp: (/* @__PURE__ */ new Date()).toISOString(),
				message: {
					type: "error",
					data: { message: `Subscribe failed (${channel}): ${message}` }
				}
			});
		}
	}, [appendLog, connectionStatus]);
	const addConfiguredSubscription = useCallback(async (channel) => {
		const trimmed = channel.trim();
		if (!trimmed) return;
		if (!addSubscription(trimmed)) return;
		if (connectionStatus === "connected") await subscribeWebSocket(trimmed, []);
	}, [
		addSubscription,
		connectionStatus,
		subscribeWebSocket
	]);
	const handleUnsubscribe = useCallback(async (subscriptionId) => {
		if (!subscriptionsRef.current.get(subscriptionId)) return;
		try {
			await sessionRef.current?.unsubscribe(subscriptionId);
		} catch {}
		subscriptionsRef.current.delete(subscriptionId);
		setActiveSubscriptions(Array.from(subscriptionsRef.current.values()));
	}, []);
	const removeConfiguredSubscription = useCallback(async (entryId) => {
		const configured = configuredSubscriptions.find((subscription) => subscription.id === entryId);
		if (!configured) return;
		const queryStrings = entriesToQueryStrings(configured.queries);
		removeSubscription(entryId);
		if (connectionStatus === "connected") {
			const active = activeSubscriptions.find((subscription) => subscriptionsMatch(subscription.channel, subscription.queries, configured.channel, queryStrings));
			if (active) await handleUnsubscribe(active.id);
		}
	}, [
		activeSubscriptions,
		configuredSubscriptions,
		connectionStatus,
		handleUnsubscribe,
		removeSubscription
	]);
	const addConfiguredSubscriptionQuery = useCallback(async (subscriptionId, query) => {
		const configured = configuredSubscriptions.find((subscription) => subscription.id === subscriptionId);
		if (!configured) return;
		const previousQueryStrings = entriesToQueryStrings(configured.queries);
		const wasLive = activeSubscriptions.some((subscription) => subscriptionsMatch(subscription.channel, subscription.queries, configured.channel, previousQueryStrings));
		addSubscriptionQuery(subscriptionId, query);
		if (!wasLive || connectionStatus !== "connected") return;
		const nextQueryStrings = entriesToQueryStrings([...configured.queries, query]);
		const active = activeSubscriptions.find((subscription) => subscriptionsMatch(subscription.channel, subscription.queries, configured.channel, previousQueryStrings));
		if (active) await handleUnsubscribe(active.id);
		await subscribeWebSocket(configured.channel, nextQueryStrings);
	}, [
		activeSubscriptions,
		addSubscriptionQuery,
		configuredSubscriptions,
		connectionStatus,
		handleUnsubscribe,
		subscribeWebSocket
	]);
	const removeConfiguredSubscriptionQuery = useCallback(async (subscriptionId, queryId) => {
		const configured = configuredSubscriptions.find((subscription) => subscription.id === subscriptionId);
		if (!configured) return;
		const previousQueryStrings = entriesToQueryStrings(configured.queries);
		const wasLive = activeSubscriptions.some((subscription) => subscriptionsMatch(subscription.channel, subscription.queries, configured.channel, previousQueryStrings));
		removeSubscriptionQuery(subscriptionId, queryId);
		if (!wasLive || connectionStatus !== "connected") return;
		const nextQueryStrings = entriesToQueryStrings(configured.queries.filter((query) => query.id !== queryId));
		const active = activeSubscriptions.find((subscription) => subscriptionsMatch(subscription.channel, subscription.queries, configured.channel, previousQueryStrings));
		if (active) await handleUnsubscribe(active.id);
		await subscribeWebSocket(configured.channel, nextQueryStrings);
	}, [
		activeSubscriptions,
		configuredSubscriptions,
		connectionStatus,
		handleUnsubscribe,
		removeSubscriptionQuery,
		subscribeWebSocket
	]);
	const handleChannelBuilt = useCallback(async (channel) => {
		const trimmed = channel.trim();
		if (!trimmed) return;
		await addConfiguredSubscription(trimmed);
	}, [addConfiguredSubscription]);
	const handleOpenChannelBuilder = useCallback(() => {
		openDialogAfterOverlayCloses(() => setChannelBuilderOpen(true));
	}, []);
	const handleClearLogs = useCallback(() => {
		setLogs([]);
		setExpandedMessageIds(/* @__PURE__ */ new Set());
	}, []);
	const allMessagesExpanded = useMemo(() => filteredLogs.length > 0 && filteredLogs.every((entry) => expandedMessageIds.has(entry.id)), [filteredLogs, expandedMessageIds]);
	const handleToggleAllMessages = useCallback(() => {
		if (allMessagesExpanded) {
			setExpandedMessageIds(/* @__PURE__ */ new Set());
			return;
		}
		setExpandedMessageIds(new Set(filteredLogs.map((entry) => entry.id)));
	}, [allMessagesExpanded, filteredLogs]);
	const handleToggleMessageExpanded = useCallback((messageId) => {
		setExpandedMessageIds((current) => {
			const next = new Set(current);
			if (next.has(messageId)) next.delete(messageId);
			else next.add(messageId);
			return next;
		});
	}, []);
	if (!projectId) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [
			/* @__PURE__ */ jsx(ServiceHeader, {
				title: t("Realtime"),
				fullWidthBorder: true,
				fullWidth: true
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex min-h-0 flex-1 flex-col overflow-hidden",
				children: [
					/* @__PURE__ */ jsx(TooltipProvider, {
						delayDuration: 300,
						children: /* @__PURE__ */ jsxs("div", {
							className: cn("border-b border-border bg-muted/20 lg:grid", REALTIME_LAYOUT_GRID),
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex min-w-0 flex-col gap-2 border-b border-border px-4 py-3 sm:flex-row sm:items-center sm:gap-3 lg:min-h-14 lg:border-b-0 lg:border-e",
								children: [/* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ jsx("span", {
										className: "cursor-default shrink-0 text-[12px] font-medium text-muted-foreground sm:w-auto",
										children: t("Act as")
									})
								}), /* @__PURE__ */ jsx(TooltipContent, {
									side: "bottom",
									className: "max-w-xs text-[12px]",
									children: isGuestActAs ? t("Guest connections do not send a session or JWT. Subscribe only to channels with public read permissions.") : t("User connections create a JWT for the selected project user when you connect.")
								})] }), /* @__PURE__ */ jsx("div", {
									className: "min-w-0 w-full flex-1",
									children: /* @__PURE__ */ jsx(SearchableSelect, {
										value: actAsValue,
										onValueChange: setActAsValue,
										items: actAsItems,
										placeholder: usersLoading ? t("Loading users…") : t("Select guest or user"),
										searchPlaceholder: t("Search users or select guest..."),
										emptyMessage: t("No users found"),
										disabled: authControlsDisabled,
										isFetching: usersLoading,
										onSearchChange: setUserSearch
									})
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex min-w-0 flex-col gap-3 px-4 py-3 lg:min-h-14 lg:flex-row lg:items-center lg:gap-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "min-w-0 w-full lg:w-auto lg:flex-1 lg:overflow-hidden",
									children: /* @__PURE__ */ jsx(RealtimeWebSocketUrlField, {
										url: websocketUrl,
										status: connectionStatus,
										socketOpen
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex w-full shrink-0 flex-wrap items-center gap-2 sm:w-auto lg:ms-auto",
									children: [/* @__PURE__ */ jsxs(Button, {
										type: "button",
										variant: "outline",
										size: "sm",
										className: "h-9 flex-1 text-[13px] sm:flex-none",
										onClick: () => setConnectionCodeOpen(true),
										children: [/* @__PURE__ */ jsx(Code2, { className: "me-1.5 h-4 w-4" }), t("SDK code")]
									}), isConnected ? /* @__PURE__ */ jsx(Button, {
										variant: "outline",
										size: "sm",
										className: "h-9 flex-1 text-[13px] sm:flex-none",
										onClick: () => void handleDisconnect(),
										disabled: isConnecting,
										children: t("Disconnect")
									}) : /* @__PURE__ */ jsx(Button, {
										size: "sm",
										className: "h-9 flex-1 text-[13px] sm:flex-none",
										onClick: () => void handleConnect(),
										disabled: !canConnect,
										children: isConnecting ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Loader2, { className: "me-1.5 h-4 w-4 animate-spin" }), t("Connecting")] }) : t("Connect")
									})]
								})]
							})]
						})
					}),
					/* @__PURE__ */ jsx(ReconnectBanner, { state: reconnectState }),
					/* @__PURE__ */ jsxs("div", {
						className: cn("flex min-h-0 flex-1 flex-col overflow-hidden lg:grid", REALTIME_LAYOUT_GRID, "lg:grid-rows-[3rem_minmax(0,1fr)]"),
						children: [
							/* @__PURE__ */ jsx(RealtimePanelHeader, {
								title: t("Subscriptions"),
								className: "order-1 lg:col-start-1 lg:row-start-1 lg:border-e lg:border-border",
								actions: /* @__PURE__ */ jsx("span", {
									className: "rounded-md border border-border bg-muted/30 px-2 py-0.5 font-mono text-[11px] tabular-nums text-muted-foreground",
									children: subscriptionCount
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "order-2 flex max-h-[min(50dvh,28rem)] min-h-0 flex-col overflow-hidden border-b border-border lg:col-start-1 lg:row-start-2 lg:max-h-none lg:min-h-0 lg:border-b-0 lg:border-e",
								children: [/* @__PURE__ */ jsx(ConfigurationPanel, {
									isConnected,
									configuredSubscriptions,
									isSubscriptionLive,
									onAddSubscription: addConfiguredSubscription,
									onRemoveSubscription: removeConfiguredSubscription,
									onAddSubscriptionQuery: addConfiguredSubscriptionQuery,
									onRemoveSubscriptionQuery: removeConfiguredSubscriptionQuery,
									onOpenChannelBuilder: handleOpenChannelBuilder
								}), /* @__PURE__ */ jsx("div", {
									className: "shrink-0 border-t border-border bg-muted/30 px-4 py-3",
									children: /* @__PURE__ */ jsxs(Button, {
										type: "button",
										variant: "outline",
										size: "sm",
										className: "h-9 w-full text-[13px]",
										disabled: !canDisconnectAll,
										onClick: () => void handleDisconnectAll(),
										children: [/* @__PURE__ */ jsx(Unplug, { className: "me-1.5 h-4 w-4" }), t("Disconnect all")]
									})
								})]
							}),
							/* @__PURE__ */ jsx(RealtimePanelHeader, {
								title: t("Messages"),
								className: "order-3 lg:col-start-2 lg:row-start-1",
								actions: /* @__PURE__ */ jsxs(Fragment, { children: [
									/* @__PURE__ */ jsx(InsertSampleMessageMenu, { onInsert: appendSampleLog }),
									/* @__PURE__ */ jsx(Button, {
										type: "button",
										variant: "outline",
										size: "sm",
										className: "h-7 text-[12px]",
										onClick: () => setIsPaused((current) => !current),
										children: isPaused ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Play, { className: "me-1.5 h-3.5 w-3.5" }), t("Resume")] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Pause, { className: "me-1.5 h-3.5 w-3.5" }), t("Pause")] })
									}),
									/* @__PURE__ */ jsxs(Button, {
										type: "button",
										variant: "outline",
										size: "sm",
										className: "h-7 text-[12px]",
										onClick: handleClearLogs,
										disabled: logs.length === 0,
										children: [/* @__PURE__ */ jsx(Trash2, { className: "me-1.5 h-3.5 w-3.5" }), t("Clear")]
									}),
									/* @__PURE__ */ jsx(TooltipProvider, {
										delayDuration: 0,
										children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
											asChild: true,
											children: /* @__PURE__ */ jsx("button", {
												type: "button",
												className: "rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40",
												onClick: handleToggleAllMessages,
												disabled: logs.length === 0,
												"aria-label": allMessagesExpanded ? t("Collapse all") : t("Expand all"),
												children: allMessagesExpanded ? /* @__PURE__ */ jsx(ListCollapse, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(ListTree, { className: "h-3.5 w-3.5" })
											})
										}), /* @__PURE__ */ jsxs(TooltipContent, {
											side: "bottom",
											children: [/* @__PURE__ */ jsx("p", { children: allMessagesExpanded ? t("Collapse all") : t("Expand all") }), " "]
										})] })
									})
								] })
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "order-4 flex min-h-[280px] flex-col overflow-hidden lg:col-start-2 lg:row-start-2 lg:min-h-0",
								children: [/* @__PURE__ */ jsx(MessagesFilterBar, {
									filters: messageFilters,
									onChange: setMessageFilters
								}), /* @__PURE__ */ jsx("div", {
									className: "min-h-0 flex-1 overflow-y-auto overscroll-contain",
									children: logs.length === 0 ? /* @__PURE__ */ jsx("div", {
										className: "flex min-h-[200px] flex-1 items-center justify-center px-4 py-12",
										children: /* @__PURE__ */ jsx("div", {
											className: "w-full max-w-sm",
											children: /* @__PURE__ */ jsx(MessagesEmptyState, {
												isConnected,
												hasSubscriptions: configuredSubscriptions.length > 0
											})
										})
									}) : filteredLogs.length === 0 ? /* @__PURE__ */ jsxs("div", {
										className: "flex min-h-[160px] items-center justify-center px-4 py-12 text-center text-[13px] text-muted-foreground",
										children: [t("No messages match your filters."), " "]
									}) : /* @__PURE__ */ jsx("div", { children: filteredLogs.map((entry, index) => /* @__PURE__ */ jsx(MessageRow, {
										entry,
										sequence: filteredLogs.length - index,
										expanded: expandedMessageIds.has(entry.id),
										onToggle: () => handleToggleMessageExpanded(entry.id)
									}, entry.id)) })
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx(ConnectionCodeDialog, {
				open: connectionCodeOpen,
				onOpenChange: setConnectionCodeOpen,
				projectId,
				subscriptions: configuredSubscriptions
			}),
			/* @__PURE__ */ jsx(EventEditorModal, {
				open: channelBuilderOpen,
				onOpenChange: setChannelBuilderOpen,
				onCreated: handleChannelBuilt,
				projectId,
				channelMode: true,
				initialValue: void 0
			})
		]
	});
}
function MessageRow({ entry, sequence, expanded, onToggle }) {
	const t = useT();
	const type = entry.message.type || "unknown";
	const payload = useMemo(() => formatMessagePayload(entry.message), [entry.message]);
	const eventSummary = useMemo(() => {
		if (type !== "event") return null;
		return getEventFrameSummary(entry.message.data);
	}, [entry.message.data, type]);
	const handleToggle = useCallback(() => {
		onToggle();
	}, [onToggle]);
	const handleRowKeyDown = useCallback((event) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			handleToggle();
		}
	}, [handleToggle]);
	return /* @__PURE__ */ jsxs("div", {
		className: "border-b border-border last:border-b-0",
		children: [/* @__PURE__ */ jsxs("div", {
			role: "button",
			tabIndex: 0,
			"aria-expanded": expanded,
			onClick: handleToggle,
			onKeyDown: handleRowKeyDown,
			className: "grid cursor-pointer grid-cols-[auto_1.75rem_0.875rem_minmax(0,1fr)] items-start gap-x-1.5 px-4 py-2.5 transition-colors hover:bg-muted/30",
			children: [
				/* @__PURE__ */ jsx(MessageDirectionIcon, {
					direction: entry.direction,
					type: entry.message.type || "unknown"
				}),
				/* @__PURE__ */ jsx("span", {
					className: "pt-0.5 text-end font-mono text-[11px] tabular-nums leading-none text-muted-foreground",
					children: sequence
				}),
				/* @__PURE__ */ jsx(ChevronRight, {
					className: cn("mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform duration-200", expanded && "rotate-90"),
					"aria-hidden": true
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex min-w-0 items-center justify-between gap-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex min-w-0 items-center gap-1.5",
							children: [/* @__PURE__ */ jsx(Badge, {
								variant: messageTypeVariant(type, entry.direction),
								className: "h-5 shrink-0 font-mono text-[10px] uppercase",
								children: type
							}), entry.isSample ? /* @__PURE__ */ jsx(Badge, {
								variant: "warning",
								className: "h-5 shrink-0 text-[10px] uppercase",
								children: t("Sample")
							}) : null]
						}), /* @__PURE__ */ jsx("span", {
							className: "shrink-0 font-mono text-[11px] tabular-nums text-muted-foreground",
							title: entry.timestamp,
							children: formatLogTimestamp(entry.timestamp)
						})]
					}), !expanded && eventSummary ? /* @__PURE__ */ jsx(EventFrameSummaryLine, { summary: eventSummary }) : null]
				})
			]
		}), expanded ? /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-[auto_1.75rem_0.875rem_minmax(0,1fr)] gap-x-1.5 px-4 pb-3",
			children: [
				/* @__PURE__ */ jsx("div", { "aria-hidden": true }),
				/* @__PURE__ */ jsx("div", { "aria-hidden": true }),
				/* @__PURE__ */ jsx("div", { "aria-hidden": true }),
				/* @__PURE__ */ jsxs("div", {
					className: "min-w-0 pt-2",
					children: [entry.isSample ? /* @__PURE__ */ jsx("p", {
						className: "mb-2 rounded-md border border-amber-500/20 bg-amber-500/5 px-3 py-2 text-[12px] leading-snug text-muted-foreground",
						children: t("Sample frame for reference only. Nothing was sent over the network and no project data was changed.")
					}) : null, /* @__PURE__ */ jsx(MessagePayloadBlock, {
						payload,
						message: entry.message
					})]
				})
			]
		}) : null]
	});
}
function EventFrameSummaryLine({ summary }) {
	const parts = [];
	if (summary.events.length > 0) parts.push(`events: ${formatSummaryList(summary.events)}`);
	if (summary.channels.length > 0) parts.push(`channels: ${formatSummaryList(summary.channels)}`);
	if (summary.subscriptionIds.length > 0) parts.push(`subs: ${formatSummaryList(summary.subscriptionIds)}`);
	if (parts.length === 0) return null;
	return /* @__PURE__ */ jsx("p", {
		className: "truncate font-mono text-[11px] text-muted-foreground",
		children: parts.join(" · ")
	});
}
var SplitComponent = View;
export { SplitComponent as component };
