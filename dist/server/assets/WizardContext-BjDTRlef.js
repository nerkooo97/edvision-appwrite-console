import { i as getFrameworkCreateDefaults } from "./adapter-defaults-DTi3IaNG.js";
import { jsx } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
var defaultFormData = {
	siteName: "",
	siteId: void 0,
	installationId: void 0,
	providerRepositoryId: void 0,
	providerBranch: "",
	providerRootDirectory: "./",
	providerSilentMode: false,
	templateId: void 0,
	template: void 0,
	framework: "",
	buildRuntime: void 0,
	installCommand: "",
	buildCommand: "",
	startCommand: "",
	outputDirectory: "",
	fallbackFile: "",
	variables: [],
	domain: "",
	domainValid: false,
	repositoryOwner: void 0,
	repositoryName: void 0,
	repositoryUrl: void 0,
	createdSiteId: void 0,
	createdDeploymentId: void 0,
	uploadFile: void 0
};
var FORM_DATA_STORAGE_KEY = "sites-create-wizard-form-data";
var WizardContext = createContext(null);
function useWizard() {
	const context = useContext(WizardContext);
	if (!context) throw new Error("useWizard must be used within a WizardProvider");
	return context;
}
function WizardProvider({ children }) {
	const [formData, setFormData] = useState(() => {
		if (typeof window === "undefined") return defaultFormData;
		try {
			const raw = sessionStorage.getItem(FORM_DATA_STORAGE_KEY);
			if (!raw) return defaultFormData;
			const { path, formData: stored } = JSON.parse(raw);
			if (path !== window.location.pathname) return defaultFormData;
			return {
				...defaultFormData,
				...stored
			};
		} catch {
			return defaultFormData;
		}
	});
	useEffect(() => {
		const { variables: _variables, uploadFile: _uploadFile, template: _template, createdSiteId: _createdSiteId, createdDeploymentId: _createdDeploymentId, ...stored } = formData;
		try {
			sessionStorage.setItem(FORM_DATA_STORAGE_KEY, JSON.stringify({
				path: window.location.pathname,
				formData: stored
			}));
		} catch {}
	}, [formData]);
	const [currentPath, setCurrentPath] = useState(void 0);
	const [installations, setInstallations] = useState([]);
	const [frameworks, setFrameworks] = useState([]);
	const [baseDomain, setBaseDomain] = useState("appwrite.network");
	const updateFormData = useCallback((updates) => {
		setFormData((prev) => ({
			...prev,
			...updates
		}));
	}, []);
	const resetFormData = useCallback(() => {
		setFormData(defaultFormData);
	}, []);
	const getFramework = useCallback((key) => {
		return frameworks.find((f) => f.key === key);
	}, [frameworks]);
	const getFrameworkDefaults = useCallback((frameworkKey) => getFrameworkCreateDefaults(getFramework(frameworkKey)), [getFramework]);
	const generateDomain = useCallback((name) => {
		const subdomain = name.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "").substring(0, 63);
		return subdomain ? `${subdomain}.${baseDomain}` : "";
	}, [baseDomain]);
	const value = useMemo(() => ({
		formData,
		updateFormData,
		resetFormData,
		currentPath,
		setCurrentPath,
		installations,
		setInstallations,
		frameworks,
		setFrameworks,
		getFramework,
		getFrameworkDefaults,
		generateDomain,
		baseDomain,
		setBaseDomain
	}), [
		formData,
		updateFormData,
		resetFormData,
		currentPath,
		setCurrentPath,
		installations,
		setInstallations,
		frameworks,
		setFrameworks,
		getFramework,
		getFrameworkDefaults,
		generateDomain,
		baseDomain,
		setBaseDomain
	]);
	return /* @__PURE__ */ jsx(WizardContext.Provider, {
		value,
		children
	});
}
export { useWizard as n, WizardProvider as t };
