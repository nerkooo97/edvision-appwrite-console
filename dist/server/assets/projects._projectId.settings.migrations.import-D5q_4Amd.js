import "./utils-DoqqkI3X.js";
import "./runtime-config-DK7G0iKr.js";
import "./debug-endpoint-BvungD5q.js";
import "./sdk-DjIJ_hjn.js";
import "./console-session-cookie-7RV5Zfr4.js";
import "./i18n-Db4baE06.js";
import "./ticket-layout-B97VGq99.js";
import "./ticket-types-BpqSrvYB.js";
import { n as useT } from "./translate-DZcqveGn.js";
import "./error-formatting-CL2hjGy5.js";
import "./console-projects-C0b0tMaH.js";
import "./constants-CL7SLzjY.js";
import "./constants-Dd6QzW31.js";
import "./constants-BDeF927R.js";
import "./organizations-BKtnlNrj.js";
import "./console-profiles-D__E5Kgi.js";
import { Dc as SUPABASE_NHOST_RESOURCES, Ec as NHOST_RESOURCES, Hc as useCreateFirebaseMigration, Ic as fetchSupabaseReport, Nc as fetchFirebaseReport, Pc as fetchNHostReport, Tc as FIREBASE_RESOURCES, Uc as useCreateNHostMigration, Wc as useCreateSupabaseMigration, kc as fetchAppwriteReport, wc as APPWRITE_RESOURCES, zc as useCreateAppwriteMigration } from "./hooks-BONwG3Mt.js";
import "./auth-BPuxYQAc.js";
import { R as useProject } from "./projects-BaTJenfQ.js";
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
import { t as WizardLayout } from "./WizardLayout-DWqXFGuX.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { t as Textarea } from "./textarea-CfKMnSVC.js";
import { t as PUBLIC_ICON_MUTED_CLASSES } from "./public-icon-classes-CaQtbn94.js";
import { n as AlertDescription, t as Alert } from "./alert-BTaNwkUC.js";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip } from "./tooltip-DUssQZhw.js";
import { t as useConsoleProfile } from "./use-console-profile-DiUZxZ_6.js";
import { t as Checkbox } from "./checkbox-r_hqIB3d.js";
import { i as AccordionItem, n as AccordionContent, o as AccordionTrigger, t as Accordion } from "./accordion-DmQmnCa5.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AppwriteMigrationResource, FirebaseMigrationResource, OnDuplicate, SupabaseMigrationResource } from "@appwrite.io/console";
import { toast } from "sonner";
import { ArrowRightLeft, Database, Info, Zap } from "lucide-react";
var PROVIDERS_OTHER = [
	{
		id: "Supabase",
		label: "Supabase",
		lucideIcon: "zap"
	},
	{
		id: "Firebase",
		label: "Firebase",
		icon: "/icons/firebase.svg"
	},
	{
		id: "NHost",
		label: "NHost"
	}
];
function getProviderOptions(isCloud) {
	const appwrite = [{
		id: "AppwriteSelfHosted",
		label: "Appwrite (self-hosted)",
		icon: "/icons/appwrite.svg"
	}];
	if (!isCloud) appwrite.push({
		id: "AppwriteCloud",
		label: "Appwrite (Cloud)",
		icon: "/icons/appwrite.svg"
	});
	return [...appwrite, ...PROVIDERS_OTHER];
}
var REPORT_KEYS = {
	users: "user",
	databases: "database",
	storage: "bucket",
	functions: "function"
};
var INITIAL_RESOURCE_FORM = {
	users: {
		root: false,
		teams: false
	},
	databases: {
		root: false,
		rows: false
	},
	storage: { root: false },
	functions: {
		root: false,
		env: false,
		inactive: false
	}
};
var PROVIDER_DISPLAY_LABELS = {
	AppwriteSelfHosted: "Appwrite (self-hosted)",
	AppwriteCloud: "Appwrite (Cloud)",
	Supabase: "Supabase",
	Firebase: "Firebase",
	NHost: "NHost"
};
function ImportWizardView() {
	const t = useT();
	const { projectId } = useParams({ strict: false });
	const navigate = useNavigate();
	const pid = projectId;
	const { project } = useProject(pid);
	const region = project?.region;
	const { isCloud, features } = useConsoleProfile();
	const supportsMultiTenancy = features.multiTenancy;
	const [step, setStep] = useState(1);
	const [provider, setProvider] = useState(null);
	const [reportError, setReportError] = useState(null);
	const [loadingReport, setLoadingReport] = useState(false);
	const [reportData, setReportData] = useState(null);
	const [resourceForm, setResourceForm] = useState(() => ({ ...INITIAL_RESOURCE_FORM }));
	const [onDuplicate, setOnDuplicate] = useState(OnDuplicate.Fail);
	const [endpoint, setEndpoint] = useState("");
	const [projectID, setProjectID] = useState("");
	const [apiKey, setApiKey] = useState("");
	const providers = useMemo(() => getProviderOptions(isCloud), [isCloud]);
	useEffect(() => {
		if (step === 1) {
			setReportData(null);
			setResourceForm({ ...INITIAL_RESOURCE_FORM });
		}
	}, [step]);
	const [supabaseEndpoint, setSupabaseEndpoint] = useState("");
	const [supabaseApiKey, setSupabaseApiKey] = useState("");
	const [databaseHost, setDatabaseHost] = useState("");
	const [supabaseUsername, setSupabaseUsername] = useState("postgres");
	const [supabasePassword, setSupabasePassword] = useState("");
	const [supabasePort, setSupabasePort] = useState("5432");
	const [serviceAccount, setServiceAccount] = useState("");
	const [nhostSubdomain, setNhostSubdomain] = useState("");
	const [nhostRegion, setNhostRegion] = useState("");
	const [adminSecret, setAdminSecret] = useState("");
	const [nhostDatabase, setNhostDatabase] = useState("");
	const [nhostUsername, setNhostUsername] = useState("postgres");
	const [nhostPassword, setNhostPassword] = useState("");
	const [nhostPort, setNhostPort] = useState("5432");
	const createAppwrite = useCreateAppwriteMigration(pid, region);
	const createSupabase = useCreateSupabaseMigration(pid, region);
	const createFirebase = useCreateFirebaseMigration(pid, region);
	const createNHost = useCreateNHostMigration(pid, region);
	const supportsFunctions = provider === "AppwriteSelfHosted" || provider === "AppwriteCloud";
	const visibleGroups = useMemo(() => {
		const base = [
			"users",
			"databases",
			"storage"
		];
		if (supportsFunctions) base.push("functions");
		return base;
	}, [supportsFunctions]);
	const getReportCount = (group) => {
		if (!reportData) return null;
		const value = reportData[REPORT_KEYS[group]];
		return typeof value === "number" ? value : null;
	};
	const resourceFormToResources = useCallback(() => {
		const allowed = supportsFunctions ? APPWRITE_RESOURCES : provider === "Firebase" ? FIREBASE_RESOURCES : SUPABASE_NHOST_RESOURCES;
		const out = [];
		if (resourceForm.users.root) out.push(supportsFunctions ? AppwriteMigrationResource.User : provider === "Firebase" ? FirebaseMigrationResource.User : SupabaseMigrationResource.User);
		if (resourceForm.databases.root) if (supportsFunctions) {
			out.push(AppwriteMigrationResource.Database, AppwriteMigrationResource.Table, AppwriteMigrationResource.Column, AppwriteMigrationResource.Index);
			if (resourceForm.databases.rows) out.push(AppwriteMigrationResource.Row);
		} else {
			const dbEnum = provider === "Firebase" ? FirebaseMigrationResource : SupabaseMigrationResource;
			out.push(dbEnum.Database, dbEnum.Collection, dbEnum.Attribute, ...provider === "Firebase" ? [] : [SupabaseMigrationResource.Index], dbEnum.Document);
		}
		if (resourceForm.storage.root) {
			const storageEnum = supportsFunctions ? AppwriteMigrationResource : provider === "Firebase" ? FirebaseMigrationResource : SupabaseMigrationResource;
			out.push(storageEnum.Bucket, storageEnum.File);
		}
		const allowedSet = new Set(allowed);
		return out.filter((r) => allowedSet.has(r));
	}, [
		resourceForm,
		provider,
		supportsFunctions
	]);
	const selectedResourcesList = useMemo(() => resourceFormToResources(), [resourceFormToResources]);
	const hasSelection = selectedResourcesList.length > 0;
	const selectAll = () => {
		setResourceForm({
			users: {
				root: true,
				teams: true
			},
			databases: {
				root: true,
				rows: true
			},
			storage: { root: true },
			functions: {
				root: true,
				env: true,
				inactive: true
			}
		});
	};
	const selectNone = () => {
		setResourceForm({ ...INITIAL_RESOURCE_FORM });
	};
	const setGroupRoot = (group, value) => {
		setResourceForm((prev) => {
			const next = { ...prev };
			if (group === "users") next.users = {
				...prev.users,
				root: value,
				teams: value
			};
			else if (group === "databases") next.databases = {
				...prev.databases,
				root: value,
				rows: value
			};
			else if (group === "storage") next.storage = { root: value };
			else if (group === "functions") next.functions = {
				...prev.functions,
				root: value,
				env: value,
				inactive: value
			};
			return next;
		});
	};
	const setGroupChild = (group, child, value) => {
		setResourceForm((prev) => {
			const next = { ...prev };
			if (group === "users" && (child === "root" || child === "teams")) next.users = {
				...prev.users,
				[child]: value
			};
			else if (group === "databases" && (child === "root" || child === "rows")) next.databases = {
				...prev.databases,
				[child]: value
			};
			else if (group === "functions" && (child === "root" || child === "env" || child === "inactive")) next.functions = {
				...prev.functions,
				[child]: value
			};
			return next;
		});
	};
	const handleFetchReport = async () => {
		if (!provider || !pid) return;
		setReportError(null);
		setLoadingReport(true);
		try {
			if (provider === "AppwriteSelfHosted" || provider === "AppwriteCloud") {
				if (!endpoint.trim() || !projectID.trim() || !apiKey.trim()) {
					toast.error(t("Please fill endpoint, project ID, and API key"));
					return;
				}
				setReportData(await fetchAppwriteReport(pid, {
					endpoint: endpoint.trim(),
					projectID: projectID.trim(),
					key: apiKey.trim()
				}, region));
			} else if (provider === "Supabase") {
				if (!supabaseEndpoint.trim() || !supabaseApiKey.trim() || !databaseHost.trim() || !supabasePassword.trim()) {
					toast.error(t("Please fill required Supabase fields"));
					return;
				}
				setReportData(await fetchSupabaseReport(pid, {
					endpoint: supabaseEndpoint.trim(),
					apiKey: supabaseApiKey.trim(),
					databaseHost: databaseHost.trim(),
					username: supabaseUsername.trim() || "postgres",
					password: supabasePassword,
					port: parseInt(supabasePort, 10) || 5432
				}, region));
			} else if (provider === "Firebase") {
				if (!serviceAccount.trim()) {
					toast.error(t("Please paste the service account JSON"));
					return;
				}
				try {
					JSON.parse(serviceAccount);
				} catch {
					toast.error(t("Service account must be valid JSON"));
					return;
				}
				setReportData(await fetchFirebaseReport(pid, { serviceAccount }, region));
			} else if (provider === "NHost") {
				if (!nhostSubdomain.trim() || !nhostRegion.trim() || !adminSecret.trim() || !nhostPassword.trim()) {
					toast.error(t("Please fill required NHost fields"));
					return;
				}
				setReportData(await fetchNHostReport(pid, {
					subdomain: nhostSubdomain.trim(),
					region: nhostRegion.trim(),
					adminSecret: adminSecret.trim(),
					database: nhostDatabase.trim() || void 0,
					username: nhostUsername.trim() || "postgres",
					password: nhostPassword,
					port: parseInt(nhostPort, 10) || void 0
				}, region));
			}
			setStep(3);
			selectAll();
		} catch (e) {
			const msg = e instanceof Error ? e.message : t("Failed to load report");
			setReportError(msg);
			toast.error(msg);
		} finally {
			setLoadingReport(false);
		}
	};
	const handleCreate = async () => {
		if (!hasSelection) {
			toast.error(t("Select at least one resource"));
			return;
		}
		try {
			if (provider === "AppwriteSelfHosted" || provider === "AppwriteCloud") await createAppwrite.mutateAsync({
				resources: selectedResourcesList,
				endpoint: endpoint.trim(),
				projectId: projectID.trim(),
				apiKey: apiKey.trim(),
				onDuplicate
			});
			else if (provider === "Supabase") await createSupabase.mutateAsync({
				resources: selectedResourcesList,
				endpoint: supabaseEndpoint.trim(),
				apiKey: supabaseApiKey.trim(),
				databaseHost: databaseHost.trim(),
				username: supabaseUsername.trim() || "postgres",
				password: supabasePassword,
				port: parseInt(supabasePort, 10) || 5432
			});
			else if (provider === "Firebase") await createFirebase.mutateAsync({
				resources: selectedResourcesList,
				serviceAccount
			});
			else if (provider === "NHost") {
				const nhostAllowed = new Set(NHOST_RESOURCES);
				const nhostResources = selectedResourcesList.filter((r) => nhostAllowed.has(r));
				await createNHost.mutateAsync({
					resources: nhostResources,
					subdomain: nhostSubdomain.trim(),
					region: nhostRegion.trim(),
					adminSecret: adminSecret.trim(),
					database: nhostDatabase.trim() || void 0,
					username: nhostUsername.trim() || void 0,
					password: nhostPassword,
					port: parseInt(nhostPort, 10) || void 0
				});
			}
			toast.success(t("Migration started"));
			navigate({
				to: "/projects/$projectId/settings/migrations",
				params: { projectId: pid }
			});
		} catch (e) {
			toast.error(e instanceof Error ? e.message : t("Failed to start migration"));
		}
	};
	const isCreatePending = createAppwrite.isPending || createSupabase.isPending || createFirebase.isPending || createNHost.isPending;
	const stepContent = /* @__PURE__ */ jsxs("div", {
		className: "space-y-6",
		children: [
			step === 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("Migrations import users, databases, and storage from an external platform into this project. Data is not deleted from the source.")
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
					children: providers.map((p) => /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => {
							setProvider(p.id);
							setStep(2);
						},
						className: "flex w-full cursor-pointer items-center gap-3 rounded-xl border border-border bg-card/50 p-5 text-start transition-all hover:border-border/80 hover:bg-card/60",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground overflow-hidden",
							children: p.icon ? /* @__PURE__ */ jsx("img", {
								src: p.icon,
								alt: "",
								className: `h-5 w-5 object-contain brightness-0 opacity-[0.55] dark:brightness-100 dark:opacity-100`
							}) : p.lucideIcon === "zap" ? /* @__PURE__ */ jsx(Zap, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Database, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[14px] font-medium text-foreground",
							children: p.label
						})]
					}, p.id))
				}),
				supportsMultiTenancy && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
					className: "relative py-2",
					children: [/* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 flex items-center",
						"aria-hidden": true,
						children: /* @__PURE__ */ jsx("div", { className: "w-full border-t border-border" })
					}), /* @__PURE__ */ jsx("div", {
						className: "relative flex justify-center",
						children: /* @__PURE__ */ jsx("span", {
							className: "bg-background px-3 text-[12px] font-medium text-muted-foreground",
							children: t("Or")
						})
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "rounded-xl border border-border bg-card/50 overflow-hidden",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
									children: /* @__PURE__ */ jsx(ArrowRightLeft, { className: "h-5 w-5" })
								}), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-[15px] font-semibold text-foreground",
										children: t("Transfer between organizations")
									}), /* @__PURE__ */ jsx("p", {
										className: "text-[13px] text-muted-foreground mt-2",
										children: t("Move this project to another organization in your account. Ownership updates immediately; no data is imported.")
									})]
								})]
							})
						}),
						/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
						/* @__PURE__ */ jsx("div", {
							className: "px-6 py-4 bg-muted/30",
							children: /* @__PURE__ */ jsx(Button, {
								type: "button",
								size: "sm",
								className: "h-9 text-[13px]",
								onClick: () => navigate({
									to: "/projects/$projectId/settings",
									params: { projectId: pid },
									hash: "card-transfer-project"
								}),
								children: t("Transfer project")
							})
						})
					]
				})] })
			] }),
			step === 2 && (provider === "AppwriteSelfHosted" || provider === "AppwriteCloud") && /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Credentials")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground mt-1",
							children: provider === "AppwriteSelfHosted" ? t("Import from a self-hosted Appwrite instance. Enter the endpoint, project ID, and a server API key with read scopes for the resources you want to migrate.") : t("Import from Appwrite Cloud. Enter the endpoint (with region), project ID, and a server API key with read scopes for the resources you want to migrate.")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "appwrite-endpoint",
									className: "text-[13px]",
									children: t("Endpoint")
								}), /* @__PURE__ */ jsx(Input, {
									id: "appwrite-endpoint",
									placeholder: provider === "AppwriteSelfHosted" ? "https://<YOUR_APPWRITE_HOSTNAME>/v1" : "https://<region>.cloud.appwrite.io/v1",
									value: endpoint,
									onChange: (e) => setEndpoint(e.target.value),
									className: "h-9 text-[13px]"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "appwrite-project-id",
									className: "text-[13px]",
									children: t("Project ID")
								}), /* @__PURE__ */ jsx(Input, {
									id: "appwrite-project-id",
									value: projectID,
									onChange: (e) => setProjectID(e.target.value),
									placeholder: t("Source project ID"),
									className: "h-9 text-[13px]"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "appwrite-api-key",
										className: "text-[13px]",
										children: t("API key")
									}), /* @__PURE__ */ jsx(TooltipProvider, {
										delayDuration: 0,
										children: /* @__PURE__ */ jsxs(Tooltip, { children: [/* @__PURE__ */ jsx(TooltipTrigger, {
											asChild: true,
											children: /* @__PURE__ */ jsx(Info, { className: "h-3.5 w-3.5 text-muted-foreground cursor-help" })
										}), /* @__PURE__ */ jsx(TooltipContent, {
											side: "top",
											className: "max-w-[240px]",
											children: t("Server API key with read scopes for users, databases, storage, etc. The source project must be reachable from the internet.")
										})] })
									})]
								}), /* @__PURE__ */ jsx(Input, {
									id: "appwrite-api-key",
									type: "password",
									value: apiKey,
									onChange: (e) => setApiKey(e.target.value),
									placeholder: t("Server API key with read scopes"),
									className: "h-9 text-[13px]"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-muted-foreground pt-1",
								children: t("Migrations are non-destructive. $createdAt and $updatedAt may be set to the migration date.")
							})
						]
					})
				]
			}),
			step === 2 && provider === "Supabase" && /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Credentials")
						}), /* @__PURE__ */ jsxs("p", {
							className: "text-[12px] text-muted-foreground mt-1",
							children: [
								t("In Supabase:"),
								" ",
								/* @__PURE__ */ jsx("strong", { children: t("Project Settings → Database") }),
								" ",
								t("(Host, Port, Username, Password) and"),
								" ",
								/* @__PURE__ */ jsx("strong", { children: t("Project Settings → API") }),
								" ",
								t("(Endpoint and API key). Use the"),
								" ",
								/* @__PURE__ */ jsx("strong", { children: "service_role" }),
								" ",
								t("key for the API key.")
							]
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "supabase-endpoint",
									className: "text-[13px]",
									children: t("Supabase endpoint")
								}), /* @__PURE__ */ jsx(Input, {
									id: "supabase-endpoint",
									placeholder: "https://xxx.supabase.co",
									value: supabaseEndpoint,
									onChange: (e) => setSupabaseEndpoint(e.target.value),
									className: "h-9 text-[13px]"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "supabase-api-key",
									className: "text-[13px]",
									children: t("API key")
								}), /* @__PURE__ */ jsx(Input, {
									id: "supabase-api-key",
									type: "password",
									value: supabaseApiKey,
									onChange: (e) => setSupabaseApiKey(e.target.value),
									className: "h-9 text-[13px]"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "supabase-db-host",
									className: "text-[13px]",
									children: t("Database host")
								}), /* @__PURE__ */ jsx(Input, {
									id: "supabase-db-host",
									value: databaseHost,
									onChange: (e) => setDatabaseHost(e.target.value),
									placeholder: "db.xxx.supabase.co",
									className: "h-9 text-[13px]"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "supabase-username",
										className: "text-[13px]",
										children: t("Username")
									}), /* @__PURE__ */ jsx(Input, {
										id: "supabase-username",
										value: supabaseUsername,
										onChange: (e) => setSupabaseUsername(e.target.value),
										className: "h-9 text-[13px]"
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "supabase-port",
										className: "text-[13px]",
										children: t("Port")
									}), /* @__PURE__ */ jsx(Input, {
										id: "supabase-port",
										value: supabasePort,
										onChange: (e) => setSupabasePort(e.target.value),
										className: "h-9 text-[13px]"
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "supabase-password",
									className: "text-[13px]",
									children: t("Password")
								}), /* @__PURE__ */ jsx(Input, {
									id: "supabase-password",
									type: "password",
									value: supabasePassword,
									onChange: (e) => setSupabasePassword(e.target.value),
									className: "h-9 text-[13px]"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-muted-foreground pt-1",
								children: t("Some PostgreSQL features are not migrated. OAuth users and functions are not migrated automatically.")
							})
						]
					})
				]
			}),
			step === 2 && provider === "Firebase" && /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Credentials")
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground mt-1",
							children: t("Use a service account JSON key. In Firebase Console: Project Settings → Service Accounts → Create service account, then add keys and create a new JSON key. Required roles: Firebase Viewer (Database and Storage), Identity Toolkit Viewer (users).")
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 space-y-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "firebase-service-account",
								className: "text-[13px]",
								children: t("Service account JSON")
							}), /* @__PURE__ */ jsx(Textarea, {
								id: "firebase-service-account",
								className: "font-mono text-[12px] min-h-[200px]",
								placeholder: t("Paste the full service account JSON object..."),
								value: serviceAccount,
								onChange: (e) => setServiceAccount(e.target.value)
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[11px] text-muted-foreground pt-1",
							children: t("Only Firestore is supported; Realtime Database is not. OAuth users and functions are not migrated automatically.")
						})]
					})
				]
			}),
			step === 2 && provider === "NHost" && /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-border bg-card/50 overflow-hidden",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-[15px] font-semibold text-foreground",
							children: t("Credentials")
						}), /* @__PURE__ */ jsxs("p", {
							className: "text-[12px] text-muted-foreground mt-1",
							children: [
								t("Find these in your NHost project:"),
								" ",
								/* @__PURE__ */ jsx("strong", { children: t("Environment variables") }),
								" ",
								t("(Region, Subdomain, Admin Secret) and"),
								" ",
								/* @__PURE__ */ jsx("strong", { children: t("Database settings") }),
								" ",
								t("(Database name, Username, Password). Admin Secret is used for files.")
							]
						})]
					}),
					/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "nhost-subdomain",
										className: "text-[13px]",
										children: t("Subdomain")
									}), /* @__PURE__ */ jsx(Input, {
										id: "nhost-subdomain",
										value: nhostSubdomain,
										onChange: (e) => setNhostSubdomain(e.target.value),
										className: "h-9 text-[13px]"
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "nhost-region",
										className: "text-[13px]",
										children: t("Region")
									}), /* @__PURE__ */ jsx(Input, {
										id: "nhost-region",
										value: nhostRegion,
										onChange: (e) => setNhostRegion(e.target.value),
										placeholder: "e.g. us-east-1",
										className: "h-9 text-[13px]"
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "nhost-admin-secret",
									className: "text-[13px]",
									children: t("Admin secret")
								}), /* @__PURE__ */ jsx(Input, {
									id: "nhost-admin-secret",
									type: "password",
									value: adminSecret,
									onChange: (e) => setAdminSecret(e.target.value),
									className: "h-9 text-[13px]"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "nhost-database",
									className: "text-[13px]",
									children: t("Database (optional)")
								}), /* @__PURE__ */ jsx(Input, {
									id: "nhost-database",
									value: nhostDatabase,
									onChange: (e) => setNhostDatabase(e.target.value),
									placeholder: t("Defaults to subdomain"),
									className: "h-9 text-[13px]"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "nhost-username",
										className: "text-[13px]",
										children: t("Username")
									}), /* @__PURE__ */ jsx(Input, {
										id: "nhost-username",
										value: nhostUsername,
										onChange: (e) => setNhostUsername(e.target.value),
										className: "h-9 text-[13px]"
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx(Label, {
										htmlFor: "nhost-port",
										className: "text-[13px]",
										children: t("Port")
									}), /* @__PURE__ */ jsx(Input, {
										id: "nhost-port",
										value: nhostPort,
										onChange: (e) => setNhostPort(e.target.value),
										className: "h-9 text-[13px]"
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "nhost-password",
									className: "text-[13px]",
									children: t("Password")
								}), /* @__PURE__ */ jsx(Input, {
									id: "nhost-password",
									type: "password",
									value: nhostPassword,
									onChange: (e) => setNhostPassword(e.target.value),
									className: "h-9 text-[13px]"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-muted-foreground pt-1",
								children: t("PostgreSQL-specific features are not migrated. OAuth users and functions are not migrated automatically.")
							})
						]
					})
				]
			}),
			step === 3 && /* @__PURE__ */ jsxs(Fragment, { children: [
				(provider === "AppwriteSelfHosted" || provider === "AppwriteCloud") && /* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-border bg-card/50 px-4 py-3 space-y-2",
					children: [
						/* @__PURE__ */ jsx(Label, {
							className: "text-[13px] font-medium",
							children: t("Duplicate rows")
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-[12px] text-muted-foreground",
							children: t("When a row with an existing ID is encountered during import.")
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex flex-wrap gap-2",
							children: [
								[OnDuplicate.Fail, "Fail"],
								[OnDuplicate.Skip, "Skip"],
								[OnDuplicate.Overwrite, "Overwrite"]
							].map(([value, label]) => /* @__PURE__ */ jsx(Button, {
								type: "button",
								size: "sm",
								variant: onDuplicate === value ? "default" : "outline",
								className: "h-8 text-[13px]",
								onClick: () => setOnDuplicate(value),
								children: t(label)
							}, value))
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-[13px] text-muted-foreground",
					children: t("Choose which resources to migrate. You do not need to keep the Console open; the migration continues in the background. After migrating, add platforms in Overview → Integrations → Platforms and set permissions on migrated resources.")
				}),
				reportError && /* @__PURE__ */ jsx(Alert, {
					variant: "destructive",
					children: /* @__PURE__ */ jsx(AlertDescription, { children: reportError })
				}),
				!reportError && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						onClick: selectAll,
						children: t("Select all")
					}), /* @__PURE__ */ jsx(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						onClick: selectNone,
						children: t("Deselect all")
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-2",
					children: visibleGroups.map((group) => {
						const count = getReportCount(group);
						const countLabel = count !== null ? count.toLocaleString() : "-";
						if (group === "storage") return /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 rounded-lg border border-border bg-card/50 px-4 py-3",
							children: [
								/* @__PURE__ */ jsx(Checkbox, {
									id: `res-${group}-root`,
									checked: resourceForm.storage.root,
									onCheckedChange: (v) => setGroupRoot("storage", v === true)
								}),
								/* @__PURE__ */ jsx(Label, {
									htmlFor: `res-${group}-root`,
									className: "flex-1 cursor-pointer text-[13px] font-medium",
									children: t("Storage")
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-[12px] text-muted-foreground tabular-nums",
									children: countLabel
								})
							]
						}, group);
						if (group === "users") return /* @__PURE__ */ jsx(Accordion, {
							type: "single",
							collapsible: true,
							className: "rounded-lg border border-border bg-card/50",
							children: /* @__PURE__ */ jsxs(AccordionItem, {
								value: "users",
								className: "border-none",
								children: [/* @__PURE__ */ jsx(AccordionTrigger, {
									className: "px-4 py-3 hover:no-underline [&[data-state=open]]:rounded-b-none",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 text-start",
										children: [
											/* @__PURE__ */ jsx(Checkbox, {
												checked: resourceForm.users.root,
												onCheckedChange: (v) => setGroupRoot("users", v === true),
												onClick: (e) => e.stopPropagation()
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-[13px] font-medium",
												children: t("Users")
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-[12px] text-muted-foreground tabular-nums",
												children: countLabel
											})
										]
									})
								}), /* @__PURE__ */ jsxs(AccordionContent, {
									className: "px-4 pb-3 pt-0",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 ps-6",
										children: [/* @__PURE__ */ jsx(Checkbox, {
											id: "users-teams",
											checked: resourceForm.users.teams,
											onCheckedChange: (v) => setGroupChild("users", "teams", v === true)
										}), /* @__PURE__ */ jsx(Label, {
											htmlFor: "users-teams",
											className: "cursor-pointer text-[13px] font-normal",
											children: t("Include teams")
										})]
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-1 ps-6 text-[11px] text-muted-foreground",
										children: t("Import all teams and the team memberships of your users.")
									})]
								})]
							})
						}, group);
						if (group === "databases") return /* @__PURE__ */ jsx(Accordion, {
							type: "single",
							collapsible: true,
							className: "rounded-lg border border-border bg-card/50",
							children: /* @__PURE__ */ jsxs(AccordionItem, {
								value: "databases",
								className: "border-none",
								children: [/* @__PURE__ */ jsx(AccordionTrigger, {
									className: "px-4 py-3 hover:no-underline [&[data-state=open]]:rounded-b-none",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 text-start",
										children: [
											/* @__PURE__ */ jsx(Checkbox, {
												checked: resourceForm.databases.root,
												onCheckedChange: (v) => setGroupRoot("databases", v === true),
												onClick: (e) => e.stopPropagation()
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-[13px] font-medium",
												children: t("Databases")
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-[12px] text-muted-foreground tabular-nums",
												children: countLabel
											})
										]
									})
								}), /* @__PURE__ */ jsxs(AccordionContent, {
									className: "px-4 pb-3 pt-0",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 ps-6",
										children: [/* @__PURE__ */ jsx(Checkbox, {
											id: "databases-rows",
											checked: resourceForm.databases.rows,
											onCheckedChange: (v) => setGroupChild("databases", "rows", v === true)
										}), /* @__PURE__ */ jsx(Label, {
											htmlFor: "databases-rows",
											className: "cursor-pointer text-[13px] font-normal",
											children: t("Include rows")
										})]
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-1 ps-6 text-[11px] text-muted-foreground",
										children: t("Import all rows inside tables.")
									})]
								})]
							})
						}, group);
						if (group === "functions") return /* @__PURE__ */ jsx(Accordion, {
							type: "single",
							collapsible: true,
							className: "rounded-lg border border-border bg-card/50",
							children: /* @__PURE__ */ jsxs(AccordionItem, {
								value: "functions",
								className: "border-none",
								children: [/* @__PURE__ */ jsx(AccordionTrigger, {
									className: "px-4 py-3 hover:no-underline [&[data-state=open]]:rounded-b-none",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 text-start",
										children: [
											/* @__PURE__ */ jsx(Checkbox, {
												checked: resourceForm.functions.root,
												onCheckedChange: (v) => setGroupRoot("functions", v === true),
												onClick: (e) => e.stopPropagation()
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-[13px] font-medium",
												children: t("Functions")
											}),
											/* @__PURE__ */ jsx("span", {
												className: "text-[12px] text-muted-foreground tabular-nums",
												children: countLabel
											})
										]
									})
								}), /* @__PURE__ */ jsxs(AccordionContent, {
									className: "px-4 pb-3 pt-0 space-y-2",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2 ps-6",
											children: [/* @__PURE__ */ jsx(Checkbox, {
												id: "functions-env",
												checked: resourceForm.functions.env,
												onCheckedChange: (v) => setGroupChild("functions", "env", v === true)
											}), /* @__PURE__ */ jsx(Label, {
												htmlFor: "functions-env",
												className: "cursor-pointer text-[13px] font-normal",
												children: t("Include environment variables")
											})]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "ps-6 text-[11px] text-muted-foreground",
											children: t("Import all environment variables.")
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2 ps-6",
											children: [/* @__PURE__ */ jsx(Checkbox, {
												id: "functions-inactive",
												checked: resourceForm.functions.inactive,
												onCheckedChange: (v) => setGroupChild("functions", "inactive", v === true)
											}), /* @__PURE__ */ jsx(Label, {
												htmlFor: "functions-inactive",
												className: "cursor-pointer text-[13px] font-normal",
												children: t("Include inactive deployments")
											})]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "ps-6 text-[11px] text-muted-foreground",
											children: t("Import all deployments that are not currently active.")
										})
									]
								})]
							})
						}, group);
						return null;
					})
				})] })
			] })
		]
	});
	const footer = /* @__PURE__ */ jsxs("div", {
		className: "flex w-full justify-end gap-2",
		children: [
			step > 1 && /* @__PURE__ */ jsx(Button, {
				type: "button",
				variant: "outline",
				onClick: () => setStep((s) => s - 1),
				disabled: loadingReport || isCreatePending,
				children: t("Back")
			}),
			step === 2 && /* @__PURE__ */ jsx(Button, {
				type: "button",
				disabled: loadingReport,
				onClick: handleFetchReport,
				children: t("Continue")
			}),
			step === 3 && /* @__PURE__ */ jsx(Button, {
				type: "button",
				disabled: !hasSelection || isCreatePending,
				onClick: handleCreate,
				children: t("Start migration")
			})
		]
	});
	return /* @__PURE__ */ jsx(WizardLayout, {
		title: step > 1 && provider ? `${t("Import from")} ${PROVIDER_DISPLAY_LABELS[provider]}` : t("Import data"),
		fullscreen: true,
		useSidebar: false,
		maxWidth: "max-w-4xl",
		fallbackPath: `/projects/${pid}/settings/migrations`,
		footer,
		footerAlign: "right",
		children: stepContent
	});
}
function ImportWizardPage() {
	return /* @__PURE__ */ jsx(ImportWizardView, {});
}
export { ImportWizardPage as component };
