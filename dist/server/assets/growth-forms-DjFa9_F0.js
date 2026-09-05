import { t as cn } from "./utils-DoqqkI3X.js";
import { t as getRuntimeConfig } from "./runtime-config-DK7G0iKr.js";
import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-BYGLGp-f.js";
import { n as analyticsAttrs } from "./analytics-actions-FGYQVzYg.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
function MarketingApplicationForm({ fields, submitLabel, onSubmit, className, successTitle = "Thank you for your submission", successDescription = "Our team will review your application and get back to you soon.", defaultValues, submitAnalyticsAction }) {
	const t = useT();
	const [values, setValues] = useState(() => defaultValues ?? {});
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState(null);
	const [submitted, setSubmitted] = useState(false);
	useEffect(() => {
		if (!defaultValues) return;
		setValues((current) => {
			const next = { ...current };
			for (const [key, value] of Object.entries(defaultValues)) if (!next[key]?.trim()) next[key] = value;
			return next;
		});
	}, [defaultValues]);
	const handleChange = (name, value) => {
		setValues((current) => ({
			...current,
			[name]: value
		}));
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		setError(null);
		setSubmitting(true);
		try {
			await onSubmit(values);
			setSubmitted(true);
		} catch (submitError) {
			setError(submitError instanceof Error ? submitError.message : t("Error submitting form. Please contact support."));
		} finally {
			setSubmitting(false);
		}
	};
	const resetForm = () => {
		setValues(defaultValues ?? {});
		setSubmitted(false);
		setError(null);
	};
	if (submitted) return /* @__PURE__ */ jsxs("div", {
		className: cn("mx-auto max-w-md text-center", className),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-center gap-2 text-[14px] font-medium text-foreground",
				children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }), t(successTitle)]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-3 text-[13px] leading-6 text-muted-foreground",
				children: t(successDescription)
			}),
			/* @__PURE__ */ jsx(Button, {
				variant: "outline",
				className: "mt-6",
				onClick: resetForm,
				children: t("Back to form")
			})
		]
	});
	return /* @__PURE__ */ jsxs("form", {
		onSubmit: handleSubmit,
		className: cn("flex flex-col gap-4", className),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
				children: fields.map((field) => /* @__PURE__ */ jsxs("div", {
					className: cn("space-y-2", field.colSpan === 2 && "sm:col-span-2"),
					children: [/* @__PURE__ */ jsx(Label, {
						htmlFor: field.name,
						className: "text-[13px]",
						children: t(field.label)
					}), field.type === "textarea" ? /* @__PURE__ */ jsx(Textarea, {
						id: field.name,
						name: field.name,
						placeholder: t(field.placeholder),
						required: field.required ?? true,
						value: values[field.name] ?? "",
						onChange: (event) => handleChange(field.name, event.target.value),
						className: "min-h-28"
					}) : field.type === "select" ? /* @__PURE__ */ jsxs(Select, {
						value: values[field.name] ?? "",
						onValueChange: (value) => handleChange(field.name, value),
						children: [/* @__PURE__ */ jsx(SelectTrigger, {
							id: field.name,
							className: "w-full",
							children: /* @__PURE__ */ jsx(SelectValue, { placeholder: t(field.placeholder) })
						}), /* @__PURE__ */ jsx(SelectContent, { children: field.options?.map((option) => /* @__PURE__ */ jsx(SelectItem, {
							value: option.value,
							children: t(option.label)
						}, option.value)) })]
					}) : /* @__PURE__ */ jsx(Input, {
						id: field.name,
						name: field.name,
						type: field.type,
						placeholder: t(field.placeholder),
						required: field.required ?? true,
						value: values[field.name] ?? "",
						onChange: (event) => handleChange(field.name, event.target.value)
					})]
				}, field.name))
			}),
			error ? /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-destructive",
				children: error
			}) : null,
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col-reverse gap-4 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "text-[12px] leading-5 text-muted-foreground",
					children: [
						t("This form is protected by reCAPTCHA, and the Google"),
						" ",
						/* @__PURE__ */ jsx("a", {
							href: "https://policies.google.com/privacy",
							className: "text-foreground underline underline-offset-2",
							target: "_blank",
							rel: "noopener noreferrer",
							children: t("Privacy Policy")
						}),
						" ",
						t("and"),
						" ",
						/* @__PURE__ */ jsx("a", {
							href: "https://policies.google.com/terms",
							className: "text-foreground underline underline-offset-2",
							target: "_blank",
							rel: "noopener noreferrer",
							children: t("Terms of Service")
						}),
						" ",
						t("apply.")
					]
				}), /* @__PURE__ */ jsx(Button, {
					type: "submit",
					variant: "brandCta",
					disabled: submitting,
					className: "shrink-0",
					...submitAnalyticsAction ? analyticsAttrs(submitAnalyticsAction) : {},
					children: t(submitLabel)
				})]
			})
		]
	});
}
var GROWTH_ENDPOINT = getRuntimeConfig().growthEndpoint;
function getGrowthBaseUrl() {
	const trimmed = GROWTH_ENDPOINT?.trim();
	if (!trimmed) return null;
	return trimmed.replace(/\/$/, "");
}
function getReferrerAndUtmSource() {
	if (typeof window === "undefined") return {};
	const params = new URLSearchParams(window.location.search);
	return {
		referrer: document.referrer || void 0,
		utmSource: params.get("utm_source") ?? void 0,
		utmMedium: params.get("utm_medium") ?? void 0,
		utmCampaign: params.get("utm_campaign") ?? void 0
	};
}
async function postGrowthJson(path, body) {
	const baseUrl = getGrowthBaseUrl();
	if (!baseUrl) return false;
	const response = await fetch(`${baseUrl}${path}`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			...body,
			...getReferrerAndUtmSource()
		})
	});
	if (response.status >= 400) throw new Error(response.status >= 500 ? "Internal server error." : "Error submitting form. Please contact support.");
	return true;
}
async function submitPartnerApplication(payload) {
	return postGrowthJson("/conversations/partner", payload);
}
async function submitStartupsApplication(payload) {
	const companyUrl = payload.companyUrl.startsWith("http") ? payload.companyUrl : `https://${payload.companyUrl}`;
	return postGrowthJson("/conversations/startups", {
		...payload,
		companyUrl
	});
}
async function submitEnterpriseApplication(payload) {
	const companyWebsite = payload.companyWebsite.startsWith("http") ? payload.companyWebsite : `https://${payload.companyWebsite}`;
	return postGrowthJson("/conversations/enterprises", {
		firstName: payload.firstName,
		lastName: payload.lastName,
		email: payload.email,
		message: payload.useCase,
		companyName: payload.companyName,
		companySize: payload.companySize,
		companyWebsite,
		preferredDeployment: payload.preferredDeployment,
		timeline: payload.timeline,
		cloudEmail: payload.cloudEmail,
		platform: "appwrite"
	});
}
export { MarketingApplicationForm as i, submitPartnerApplication as n, submitStartupsApplication as r, submitEnterpriseApplication as t };
