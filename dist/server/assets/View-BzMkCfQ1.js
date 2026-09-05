import { d as sdk } from "./sdk-DjIJ_hjn.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { ms as useProvider } from "./hooks-BONwG3Mt.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Switch } from "./switch-D-U5gDIQ.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as DateTooltip } from "./DateTooltip-wgOggQgS.js";
import { t as CopyableId } from "./CopyableId-DPIWAPIb.js";
import { r as formatDateTime } from "./date-utils-C_g8GS8c.js";
import { t as ServiceHeader } from "./ServiceHeader-C9TuKD27.js";
import { t as DetailResourceHeaderTitle } from "./ResourceTitleSwitcher-DwH9FR7l.js";
import { t as MessagingProviderIcon } from "./MessagingProviderIcon-CpmBYG59.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useLocation, useNavigate, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { SmtpEncryption } from "@appwrite.io/console";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
function shallowMerge(...objects) {
	return Object.assign({}, ...objects.filter(Boolean));
}
function pickDefined(obj) {
	const out = {};
	for (const [k, v] of Object.entries(obj)) if (v !== void 0) out[k] = v;
	return out;
}
function optStr(v) {
	if (v == null || v === "") return void 0;
	return String(v);
}
function optBool(v) {
	if (v === void 0) return void 0;
	if (typeof v === "boolean") return v;
	return Boolean(v);
}
function optNum(v) {
	if (v == null || v === "") return void 0;
	const n = Number(v);
	return Number.isNaN(n) ? void 0 : n;
}
function parseServiceAccountJson(raw) {
	if (raw == null || raw === "") return void 0;
	if (typeof raw === "object" && !Array.isArray(raw)) return raw;
	if (typeof raw === "string") try {
		return JSON.parse(raw);
	} catch {
		return;
	}
}
function asSmtpEncryption(value) {
	if (value === SmtpEncryption.None || value === SmtpEncryption.Ssl || value === SmtpEncryption.Tls) return value;
	if (value === "none") return SmtpEncryption.None;
	if (value === "ssl") return SmtpEncryption.Ssl;
	if (value === "tls") return SmtpEncryption.Tls;
}
function patchMessagingProvider(messaging, provider, input) {
	const { providerId, name, enabled } = input;
	const identity = pickDefined({
		providerId,
		name,
		enabled
	});
	if (!(input.credentials !== void 0 || input.options !== void 0)) return dispatchIdentityOnly(messaging, provider, identity);
	const merged = shallowMerge(provider.credentials, provider.options ?? {}, input.credentials, input.options);
	return dispatchWithMerged(messaging, provider, {
		...identity,
		merged
	});
}
function dispatchIdentityOnly(messaging, provider, identity) {
	switch (provider.provider.toLowerCase()) {
		case "smtp": return messaging.updateSMTPProvider(identity);
		case "mailgun": return messaging.updateMailgunProvider(identity);
		case "sendgrid": return messaging.updateSendgridProvider(identity);
		case "resend": return messaging.updateResendProvider(identity);
		case "twilio": return messaging.updateTwilioProvider(identity);
		case "vonage": return messaging.updateVonageProvider(identity);
		case "msg91": return messaging.updateMsg91Provider(identity);
		case "telesign": return messaging.updateTelesignProvider(identity);
		case "textmagic": return messaging.updateTextmagicProvider(identity);
		case "fcm": return messaging.updateFCMProvider(identity);
		case "apns": return messaging.updateAPNSProvider(identity);
		default: throw new Error(`Unsupported messaging provider for update: ${provider.provider}`);
	}
}
function dispatchWithMerged(messaging, provider, args) {
	const { providerId, name, enabled, merged } = args;
	switch (provider.provider.toLowerCase()) {
		case "smtp": {
			const enc = asSmtpEncryption(merged.encryption);
			return messaging.updateSMTPProvider({
				providerId,
				name,
				enabled,
				host: optStr(merged.host),
				port: optNum(merged.port),
				username: optStr(merged.username),
				password: optStr(merged.password),
				encryption: enc,
				autoTLS: optBool(merged.autoTLS),
				mailer: optStr(merged.mailer),
				fromName: optStr(merged.fromName),
				fromEmail: optStr(merged.fromEmail),
				replyToName: optStr(merged.replyToName),
				replyToEmail: optStr(merged.replyToEmail)
			});
		}
		case "mailgun": return messaging.updateMailgunProvider({
			providerId,
			name,
			enabled,
			apiKey: optStr(merged.apiKey),
			domain: optStr(merged.domain),
			isEuRegion: optBool(merged.isEuRegion),
			fromName: optStr(merged.fromName),
			fromEmail: optStr(merged.fromEmail),
			replyToName: optStr(merged.replyToName),
			replyToEmail: optStr(merged.replyToEmail)
		});
		case "sendgrid": return messaging.updateSendgridProvider({
			providerId,
			name,
			enabled,
			apiKey: optStr(merged.apiKey),
			fromName: optStr(merged.fromName),
			fromEmail: optStr(merged.fromEmail),
			replyToName: optStr(merged.replyToName),
			replyToEmail: optStr(merged.replyToEmail)
		});
		case "resend": return messaging.updateResendProvider({
			providerId,
			name,
			enabled,
			apiKey: optStr(merged.apiKey),
			fromName: optStr(merged.fromName),
			fromEmail: optStr(merged.fromEmail),
			replyToName: optStr(merged.replyToName),
			replyToEmail: optStr(merged.replyToEmail)
		});
		case "twilio": return messaging.updateTwilioProvider({
			providerId,
			name,
			enabled,
			accountSid: optStr(merged.accountSid),
			authToken: optStr(merged.authToken),
			from: optStr(merged.from)
		});
		case "vonage": return messaging.updateVonageProvider({
			providerId,
			name,
			enabled,
			apiKey: optStr(merged.apiKey),
			apiSecret: optStr(merged.apiSecret),
			from: optStr(merged.from)
		});
		case "msg91": return messaging.updateMsg91Provider({
			providerId,
			name,
			enabled,
			templateId: optStr(merged.templateId),
			senderId: optStr(merged.senderId),
			authKey: optStr(merged.authKey)
		});
		case "telesign": return messaging.updateTelesignProvider({
			providerId,
			name,
			enabled,
			customerId: optStr(merged.customerId),
			apiKey: optStr(merged.apiKey),
			from: optStr(merged.from)
		});
		case "textmagic": return messaging.updateTextmagicProvider({
			providerId,
			name,
			enabled,
			username: optStr(merged.username),
			apiKey: optStr(merged.apiKey),
			from: optStr(merged.from)
		});
		case "fcm": {
			const parsed = parseServiceAccountJson(merged.serviceAccountJSON);
			return messaging.updateFCMProvider({
				providerId,
				name,
				enabled,
				serviceAccountJSON: parsed
			});
		}
		case "apns": return messaging.updateAPNSProvider({
			providerId,
			name,
			enabled,
			authKey: optStr(merged.authKey),
			authKeyId: optStr(merged.authKeyId),
			teamId: optStr(merged.teamId),
			bundleId: optStr(merged.bundleId),
			sandbox: optBool(merged.sandbox)
		});
		default: throw new Error(`Unsupported messaging provider for update: ${provider.provider}`);
	}
}
function formatJsonConfig(value) {
	try {
		return JSON.stringify(value ?? {}, null, 2);
	} catch {
		return "{}";
	}
}
function jsonStableEqual(a, b) {
	try {
		return JSON.stringify(JSON.parse(a || "{}")) === JSON.stringify(JSON.parse(b || "{}"));
	} catch {
		return false;
	}
}
function View({ initialProvider } = {}) {
	const t = useT();
	const { projectId, providerId } = useParams({ strict: false });
	const { project } = useProject(projectId);
	const navigate = useNavigate();
	const location = useLocation();
	const queryClient = useQueryClient();
	const { data: providerFromHook, isLoading: providerLoading } = useProvider(projectId, providerId, initialProvider);
	const provider = providerFromHook ?? initialProvider;
	const activeTab = useMemo(() => {
		const pathParts = location.pathname.split("/").filter(Boolean);
		const idx = pathParts.findIndex((part, i) => part === "providers" && providerId != null && pathParts[i + 1] === providerId);
		if (idx >= 0 && pathParts[idx + 2] === "settings") return "settings";
		return "overview";
	}, [location.pathname, providerId]);
	const tabs = useMemo(() => [{
		id: "overview",
		label: t("Overview"),
		to: "/projects/$projectId/messaging/providers/$providerId",
		params: {
			projectId,
			providerId
		}
	}, {
		id: "settings",
		label: t("Settings"),
		to: "/projects/$projectId/messaging/providers/$providerId/settings",
		params: {
			projectId,
			providerId
		}
	}], [
		projectId,
		providerId,
		t
	]);
	const showOverview = activeTab === "overview";
	const showSettings = activeTab === "settings";
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [name, setName] = useState("");
	const [enabled, setEnabled] = useState(false);
	const [fromEmail, setFromEmail] = useState("");
	const [fromName, setFromName] = useState("");
	const [replyToEmail, setReplyToEmail] = useState("");
	const [replyToName, setReplyToName] = useState("");
	const [smsCredentialsJson, setSmsCredentialsJson] = useState("{}");
	const [smsOptionsJson, setSmsOptionsJson] = useState("{}");
	const [fcmServiceAccountJson, setFcmServiceAccountJson] = useState("");
	const [apnsAuthKey, setApnsAuthKey] = useState("");
	const [apnsAuthKeyId, setApnsAuthKeyId] = useState("");
	const [apnsTeamId, setApnsTeamId] = useState("");
	const [apnsBundleId, setApnsBundleId] = useState("");
	useEffect(() => {
		if (!provider) return;
		setName(provider.name || "");
		setEnabled(provider.enabled || false);
		if (provider.type === "email") {
			setFromEmail(provider.options?.fromEmail || "");
			setFromName(provider.options?.fromName || "");
			setReplyToEmail(provider.options?.replyToEmail || "");
			setReplyToName(provider.options?.replyToName || "");
		} else if (provider.type === "sms") {
			setSmsCredentialsJson(formatJsonConfig(provider.credentials));
			setSmsOptionsJson(formatJsonConfig(provider.options));
		} else if (provider.type === "push") {
			if (provider.provider === "fcm") {
				const raw = provider.credentials?.serviceAccountJSON;
				setFcmServiceAccountJson(typeof raw === "string" ? raw : formatJsonConfig(raw ?? {}));
			} else if (provider.provider === "apns") {
				setApnsAuthKey(typeof provider.credentials?.authKey === "string" ? provider.credentials.authKey : "");
				setApnsAuthKeyId(typeof provider.credentials?.authKeyId === "string" ? provider.credentials.authKeyId : "");
				setApnsTeamId(typeof provider.credentials?.teamId === "string" ? provider.credentials.teamId : "");
				setApnsBundleId(typeof provider.credentials?.bundleId === "string" ? provider.credentials.bundleId : "");
			}
		}
	}, [provider]);
	const hasConfigurationChanges = useMemo(() => {
		if (!provider) return false;
		if (provider.type === "email") {
			const o = provider.options;
			return fromEmail.trim() !== (o?.fromEmail || "").trim() || fromName.trim() !== (o?.fromName || "").trim() || replyToEmail.trim() !== (o?.replyToEmail || "").trim() || replyToName.trim() !== (o?.replyToName || "").trim();
		}
		if (provider.type === "sms") return !jsonStableEqual(smsCredentialsJson, formatJsonConfig(provider.credentials)) || !jsonStableEqual(smsOptionsJson, formatJsonConfig(provider.options));
		if (provider.type === "push" && provider.provider === "fcm") {
			const raw = provider.credentials?.serviceAccountJSON;
			return !jsonStableEqual(fcmServiceAccountJson, typeof raw === "string" ? raw : formatJsonConfig(raw ?? {}));
		}
		if (provider.type === "push" && provider.provider === "apns") {
			const c = provider.credentials;
			return apnsAuthKey !== (typeof c?.authKey === "string" ? c.authKey : "") || apnsAuthKeyId !== (typeof c?.authKeyId === "string" ? c.authKeyId : "") || apnsTeamId !== (typeof c?.teamId === "string" ? c.teamId : "") || apnsBundleId !== (typeof c?.bundleId === "string" ? c.bundleId : "");
		}
		return false;
	}, [
		provider,
		fromEmail,
		fromName,
		replyToEmail,
		replyToName,
		smsCredentialsJson,
		smsOptionsJson,
		fcmServiceAccountJson,
		apnsAuthKey,
		apnsAuthKeyId,
		apnsTeamId,
		apnsBundleId
	]);
	const handleSaveConfiguration = () => {
		if (!provider || !projectId || !providerId) return;
		if (provider.type === "email") {
			updateSettingsMutation.mutate({
				credentials: provider.credentials ?? {},
				fromEmail: fromEmail.trim(),
				fromName: fromName.trim(),
				replyToEmail: replyToEmail.trim(),
				replyToName: replyToName.trim()
			});
			return;
		}
		if (provider.type === "sms") {
			let credentials;
			let options;
			try {
				credentials = JSON.parse(smsCredentialsJson || "{}");
				options = JSON.parse(smsOptionsJson || "{}");
			} catch {
				toast.error(t("Credentials and options must be valid JSON"));
				return;
			}
			updateSettingsMutation.mutate({
				credentials,
				options
			});
			return;
		}
		if (provider.type === "push" && provider.provider === "fcm") {
			try {
				JSON.parse(fcmServiceAccountJson || "{}");
			} catch {
				toast.error(t("Service account JSON must be valid JSON"));
				return;
			}
			updateSettingsMutation.mutate({ serviceAccountJSON: fcmServiceAccountJson.trim() });
			return;
		}
		if (provider.type === "push" && provider.provider === "apns") updateSettingsMutation.mutate({
			authKey: apnsAuthKey.trim(),
			authKeyId: apnsAuthKeyId.trim(),
			teamId: apnsTeamId.trim(),
			bundleId: apnsBundleId.trim()
		});
	};
	const updateStatusMutation = useMutation({
		mutationFn: async (enabled$1) => {
			if (!projectId || !providerId) throw new Error("Project ID and Provider ID are required");
			const projectSdk = sdk.forProject(projectId);
			if (!provider) throw new Error("Provider is required");
			await patchMessagingProvider(projectSdk.messaging, provider, {
				providerId,
				enabled: enabled$1
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"provider",
				"project",
				projectId,
				providerId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"providers",
				"project",
				projectId
			] });
			toast.success(t("Provider status updated successfully"));
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to update provider status"));
		}
	});
	const updateNameMutation = useMutation({
		mutationFn: async (name$1) => {
			if (!projectId || !providerId) throw new Error("Project ID and Provider ID are required");
			const projectSdk = sdk.forProject(projectId);
			if (!provider) throw new Error("Provider is required");
			await patchMessagingProvider(projectSdk.messaging, provider, {
				providerId,
				name: name$1
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"provider",
				"project",
				projectId,
				providerId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"providers",
				"project",
				projectId
			] });
			toast.success(t("Provider name updated successfully"));
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to update provider name"));
		}
	});
	const updateSettingsMutation = useMutation({
		mutationFn: async (settings) => {
			if (!projectId || !providerId) throw new Error("Project ID and Provider ID are required");
			const projectSdk = sdk.forProject(projectId);
			if (!provider) throw new Error("Provider is required");
			let credentials;
			let options;
			if (provider.type === "sms") {
				credentials = settings.credentials || {};
				options = settings.options || {};
			} else if (provider.type === "email") {
				credentials = settings.credentials || {};
				options = {
					fromEmail: settings.fromEmail,
					fromName: settings.fromName,
					replyToEmail: settings.replyToEmail,
					replyToName: settings.replyToName
				};
			} else if (provider.type === "push") if (provider.provider === "fcm") {
				const serviceAccountJSON = settings.serviceAccountJSON;
				credentials = { serviceAccountJSON: typeof serviceAccountJSON === "string" ? serviceAccountJSON : JSON.stringify(serviceAccountJSON) };
			} else if (provider.provider === "apns") credentials = {
				authKey: settings.authKey,
				authKeyId: settings.authKeyId,
				teamId: settings.teamId,
				bundleId: settings.bundleId
			};
			else throw new Error(`Unsupported push provider: ${provider.provider}`);
			else throw new Error(`Unsupported provider type: ${provider.type}`);
			await patchMessagingProvider(projectSdk.messaging, provider, {
				providerId,
				credentials,
				options
			});
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"provider",
				"project",
				projectId,
				providerId
			] });
			await queryClient.refetchQueries({ queryKey: [
				"providers",
				"project",
				projectId
			] });
			toast.success(t("Provider settings updated successfully"));
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to update provider settings"));
		}
	});
	const deleteProviderMutation = useMutation({
		mutationFn: async () => {
			if (!projectId || !providerId) throw new Error("Project ID and Provider ID are required");
			await sdk.forProject(projectId).messaging.deleteProvider({ providerId });
		},
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: [
				"providers",
				"project",
				projectId
			] });
			toast.success(t("Provider deleted successfully"));
			navigate({
				to: "/projects/$projectId/messaging/providers",
				params: { projectId }
			});
		},
		onError: (error) => {
			toast.error(getErrorMessage(error) || t("Failed to delete provider"));
		}
	});
	const handleBack = () => {
		navigate({
			to: "/projects/$projectId/messaging/providers",
			params: { projectId }
		});
	};
	if (providerLoading && !initialProvider) return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center py-16",
		children: /* @__PURE__ */ jsx("div", {
			className: "rounded-lg border border-border bg-card py-12 px-6 text-center",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground",
				children: t("Loading provider...")
			})
		})
	});
	if (!provider) return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center py-16",
		children: /* @__PURE__ */ jsx("div", {
			className: "rounded-lg border border-border bg-card py-12 px-6 text-center",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-muted-foreground",
				children: t("Provider not found")
			})
		})
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ jsx(ServiceHeader, {
			title: /* @__PURE__ */ jsx(DetailResourceHeaderTitle, {
				kind: "provider",
				label: provider.name,
				resourceId: provider.$id,
				projectId,
				back: {
					onClick: handleBack,
					"aria-label": t("Back to providers")
				}
			}),
			tabs,
			activeTab,
			fullWidthBorder: true
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-7xl flex-1 px-4 pb-4 pt-4 sm:px-6 sm:pb-6 sm:pt-6",
			children: [
				showOverview && /* @__PURE__ */ jsxs("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-border bg-card/50 overflow-hidden",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ jsx("h3", {
										className: "text-[15px] font-semibold text-foreground",
										children: t("Name")
									})
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
								/* @__PURE__ */ jsxs("div", {
									className: "px-6 py-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-muted-foreground",
										children: t("Update your provider's display name. This will be visible to all organization members.")
									}), /* @__PURE__ */ jsx(Input, {
										id: "provider-name",
										value: name,
										onChange: (e) => setName(e.target.value),
										placeholder: t("Provider name"),
										className: "mt-3 h-9 max-w-sm border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0"
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4 border-t border-border bg-muted/30",
									children: /* @__PURE__ */ jsx(Button, {
										size: "sm",
										className: "h-9 text-[13px]",
										disabled: name.trim() === provider.name || !name.trim() || updateNameMutation.isPending,
										onClick: () => updateNameMutation.mutate(name),
										children: t("Update")
									})
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-border bg-card/50 overflow-hidden",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "px-6 py-4",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-[15px] font-semibold text-foreground",
										children: t("Status")
									}), /* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-muted-foreground mt-2",
										children: t("Enable or disable this provider for your project.")
									})]
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ jsx("div", {
										className: "flex items-center justify-between",
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ jsx(Switch, {
												id: "toggle",
												checked: enabled ?? false,
												onCheckedChange: setEnabled,
												disabled: updateStatusMutation.isPending
											}), /* @__PURE__ */ jsx(Label, {
												htmlFor: "toggle",
												className: "text-[13px] text-foreground",
												children: enabled ? t("Enabled") : t("Disabled")
											})]
										})
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4 border-t border-border bg-muted/30",
									children: /* @__PURE__ */ jsx(Button, {
										size: "sm",
										className: "h-9 text-[13px]",
										disabled: enabled === provider.enabled || updateStatusMutation.isPending,
										onClick: () => {
											if (enabled !== provider.enabled) updateStatusMutation.mutate(enabled);
										},
										children: t("Update")
									})
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-border bg-card/50 overflow-hidden",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "px-6 py-4",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-[15px] font-semibold text-foreground",
										children: t("Configuration")
									}), /* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-muted-foreground mt-2",
										children: t("Connection details for this provider instance.")
									})]
								}),
								/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ jsxs("div", {
										className: "space-y-4",
										children: [
											provider.type === "email" && /* @__PURE__ */ jsxs(Fragment, { children: [
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
													htmlFor: "from-email",
													className: "text-[13px] font-medium text-foreground",
													children: t("From Email")
												}), /* @__PURE__ */ jsx(Input, {
													id: "from-email",
													value: fromEmail,
													onChange: (e) => setFromEmail(e.target.value),
													className: "mt-1.5 h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0",
													placeholder: "sender@example.com"
												})] }),
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
													htmlFor: "from-name",
													className: "text-[13px] font-medium text-foreground",
													children: t("From Name")
												}), /* @__PURE__ */ jsx(Input, {
													id: "from-name",
													value: fromName,
													onChange: (e) => setFromName(e.target.value),
													className: "mt-1.5 h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0",
													placeholder: t("Sender Name")
												})] }),
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
													htmlFor: "reply-to-email",
													className: "text-[13px] font-medium text-foreground",
													children: t("Reply To Email")
												}), /* @__PURE__ */ jsx(Input, {
													id: "reply-to-email",
													value: replyToEmail,
													onChange: (e) => setReplyToEmail(e.target.value),
													className: "mt-1.5 h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0",
													placeholder: "reply@example.com"
												})] }),
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
													htmlFor: "reply-to-name",
													className: "text-[13px] font-medium text-foreground",
													children: t("Reply To Name")
												}), /* @__PURE__ */ jsx(Input, {
													id: "reply-to-name",
													value: replyToName,
													onChange: (e) => setReplyToName(e.target.value),
													className: "mt-1.5 h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0",
													placeholder: t("Reply Name")
												})] })
											] }),
											provider.type === "sms" && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", { children: [
												/* @__PURE__ */ jsx(Label, {
													htmlFor: "sms-credentials-json",
													className: "text-[13px] font-medium text-foreground",
													children: t("Credentials (JSON)")
												}),
												/* @__PURE__ */ jsx("p", {
													className: "text-[12px] text-muted-foreground mt-1",
													children: t("API keys and provider-specific fields from the console API.")
												}),
												/* @__PURE__ */ jsx(Textarea, {
													id: "sms-credentials-json",
													value: smsCredentialsJson,
													onChange: (e) => setSmsCredentialsJson(e.target.value),
													className: "mt-1.5 min-h-[140px] font-mono text-xs border-border bg-background text-foreground focus:border-border focus:ring-0",
													spellCheck: false
												})
											] }), /* @__PURE__ */ jsxs("div", { children: [
												/* @__PURE__ */ jsx(Label, {
													htmlFor: "sms-options-json",
													className: "text-[13px] font-medium text-foreground",
													children: t("Options (JSON)")
												}),
												/* @__PURE__ */ jsx("p", {
													className: "text-[12px] text-muted-foreground mt-1",
													children: t("Optional provider options object.")
												}),
												/* @__PURE__ */ jsx(Textarea, {
													id: "sms-options-json",
													value: smsOptionsJson,
													onChange: (e) => setSmsOptionsJson(e.target.value),
													className: "mt-1.5 min-h-[100px] font-mono text-xs border-border bg-background text-foreground focus:border-border focus:ring-0",
													spellCheck: false
												})
											] })] }),
											provider.type === "push" && provider.provider === "fcm" && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
												htmlFor: "service-account-json",
												className: "text-[13px] font-medium text-foreground",
												children: t("Service Account JSON")
											}), /* @__PURE__ */ jsx(Textarea, {
												id: "service-account-json",
												value: fcmServiceAccountJson,
												onChange: (e) => setFcmServiceAccountJson(e.target.value),
												className: "mt-1.5 font-mono text-xs border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0",
												rows: 10,
												placeholder: "{\"type\": \"service_account\", ...}",
												spellCheck: false
											})] }),
											provider.type === "push" && provider.provider === "apns" && /* @__PURE__ */ jsxs(Fragment, { children: [
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
													htmlFor: "auth-key",
													className: "text-[13px] font-medium text-foreground",
													children: t("Auth Key")
												}), /* @__PURE__ */ jsx(Input, {
													id: "auth-key",
													value: apnsAuthKey,
													onChange: (e) => setApnsAuthKey(e.target.value),
													className: "mt-1.5 h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0",
													placeholder: t("Auth key")
												})] }),
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
													htmlFor: "auth-key-id",
													className: "text-[13px] font-medium text-foreground",
													children: t("Auth Key ID")
												}), /* @__PURE__ */ jsx(Input, {
													id: "auth-key-id",
													value: apnsAuthKeyId,
													onChange: (e) => setApnsAuthKeyId(e.target.value),
													className: "mt-1.5 h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0",
													placeholder: t("Auth key ID")
												})] }),
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
													htmlFor: "team-id",
													className: "text-[13px] font-medium text-foreground",
													children: t("Team ID")
												}), /* @__PURE__ */ jsx(Input, {
													id: "team-id",
													value: apnsTeamId,
													onChange: (e) => setApnsTeamId(e.target.value),
													className: "mt-1.5 h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0",
													placeholder: t("Team ID")
												})] }),
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
													htmlFor: "bundle-id",
													className: "text-[13px] font-medium text-foreground",
													children: t("Bundle ID")
												}), /* @__PURE__ */ jsx(Input, {
													id: "bundle-id",
													value: apnsBundleId,
													onChange: (e) => setApnsBundleId(e.target.value),
													className: "mt-1.5 h-9 border-border bg-background text-[13px] text-foreground placeholder:text-muted-foreground focus:border-border focus:ring-0",
													placeholder: t("Bundle ID")
												})] })
											] })
										]
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "px-6 py-4 border-t border-border bg-muted/30 flex justify-end",
									children: /* @__PURE__ */ jsx(Button, {
										size: "sm",
										className: "h-9 text-[13px]",
										onClick: handleSaveConfiguration,
										disabled: !hasConfigurationChanges || updateSettingsMutation.isPending,
										children: t("Update")
									})
								})
							]
						})
					]
				}),
				showSettings && /* @__PURE__ */ jsxs("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-border bg-card/50 overflow-hidden",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "px-6 py-4",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-[15px] font-semibold text-foreground",
									children: t("Details")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[13px] text-muted-foreground mt-2",
									children: t("Provider ID, channel type, and timestamps.")
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
							/* @__PURE__ */ jsx("div", {
								className: "px-6 py-4",
								children: /* @__PURE__ */ jsxs("div", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ jsx("p", {
												className: "mb-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
												children: t("Provider ID")
											}), /* @__PURE__ */ jsx(CopyableId, {
												id: provider.$id,
												size: "sm"
											})]
										}),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "mb-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
											children: t("Channel type")
										}), /* @__PURE__ */ jsx("p", {
											className: "text-[13px] text-foreground capitalize",
											children: provider.type
										})] }),
										/* @__PURE__ */ jsxs("div", {
											className: "grid gap-4 sm:grid-cols-2",
											children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
												className: "mb-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
												children: t("Created")
											}), provider.$createdAt ? /* @__PURE__ */ jsx(DateTooltip, {
												date: provider.$createdAt,
												className: "text-[13px] text-foreground",
												showFormattedDate: true
											}) : /* @__PURE__ */ jsx("span", {
												className: "text-[13px] text-muted-foreground/50 italic",
												children: "N/A"
											})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
												className: "mb-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
												children: t("Updated")
											}), /* @__PURE__ */ jsx(DateTooltip, {
												date: provider.$updatedAt || provider.$createdAt,
												className: "text-[13px] text-foreground",
												showFormattedDate: true
											})] })]
										})
									]
								})
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border border-destructive/50 bg-card/50 overflow-hidden",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "px-6 py-4",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-[15px] font-semibold text-foreground",
									children: t("Delete provider")
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[13px] text-muted-foreground mt-2",
									children: t("The provider's instance will be permanently deleted. This action is irreversible.")
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "border-t border-destructive/20" }),
							/* @__PURE__ */ jsx("div", {
								className: "px-6 py-4",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted",
										children: /* @__PURE__ */ jsx(MessagingProviderIcon, {
											serviceKey: provider.provider,
											providerName: provider.name,
											providerType: provider.type,
											size: "md",
											className: "h-5 w-5"
										})
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ jsx("p", {
											className: "text-[14px] font-medium text-foreground truncate",
											children: provider.name
										}), provider.$updatedAt && /* @__PURE__ */ jsxs("p", {
											className: "text-[12px] text-muted-foreground",
											children: [
												t("Last updated:"),
												" ",
												formatDateTime(provider.$updatedAt)
											]
										})]
									})]
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "px-6 py-4 border-t border-destructive/20 bg-destructive/5",
								children: /* @__PURE__ */ jsxs(Button, {
									variant: "destructive",
									size: "sm",
									className: "h-9 text-[13px]",
									onClick: () => setDeleteDialogOpen(true),
									disabled: deleteProviderMutation.isPending,
									children: [/* @__PURE__ */ jsx(Trash2, { className: "me-1.5 h-4 w-4" }), t("Delete")]
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ jsx(Dialog, {
					open: deleteDialogOpen,
					onOpenChange: setDeleteDialogOpen,
					children: /* @__PURE__ */ jsxs(DialogContent, {
						className: "sm:max-w-md p-0",
						children: [/* @__PURE__ */ jsxs(DialogHeader, {
							className: "px-6 pt-6 text-start",
							children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Delete Provider") }), /* @__PURE__ */ jsxs(DialogDescription, {
								className: "text-[13px] mt-2",
								children: [
									t("Are you sure you want to delete"),
									" ",
									provider.name,
									" ",
									t("from"),
									" '",
									project?.name || projectId,
									"'?"
								]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ jsx(Button, {
								variant: "outline",
								onClick: () => setDeleteDialogOpen(false),
								disabled: deleteProviderMutation.isPending,
								children: t("Cancel")
							}), /* @__PURE__ */ jsx(Button, {
								variant: "destructive",
								onClick: () => deleteProviderMutation.mutate(),
								disabled: deleteProviderMutation.isPending,
								children: t("Delete")
							})]
						})]
					})
				})
			]
		})]
	});
}
export { View as t };
