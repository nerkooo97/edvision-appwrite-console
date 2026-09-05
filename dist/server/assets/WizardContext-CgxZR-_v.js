import { jsx } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
var defaultFormData = {
	installationId: void 0,
	providerRepositoryId: void 0,
	repositoryOwner: void 0,
	repositoryName: void 0,
	repositoryUrl: void 0,
	providerBranch: "",
	providerRootDirectory: "./",
	functionName: "",
	runtime: void 0,
	template: void 0,
	templateId: void 0,
	createdFunctionId: void 0,
	createdDeploymentId: void 0
};
var FunctionWizardContext = createContext(null);
function useFunctionWizard() {
	const context = useContext(FunctionWizardContext);
	if (!context) throw new Error("useFunctionWizard must be used within FunctionWizardProvider");
	return context;
}
function FunctionWizardProvider({ children }) {
	const [formData, setFormData] = useState(defaultFormData);
	const [installations, setInstallations] = useState([]);
	const [baseDomain, setBaseDomain] = useState("appwrite.network");
	const [endpointType, setEndpointType] = useState("region");
	const [region, setRegion] = useState(void 0);
	const updateFormData = useCallback((updates) => {
		setFormData((prev) => ({
			...prev,
			...updates
		}));
	}, []);
	const resetFormData = useCallback(() => {
		setFormData(defaultFormData);
	}, []);
	const effectiveBaseDomain = endpointType === "region" && region ? `${region}.appwrite.run` : "appwrite.network";
	const generateDomain = useCallback((name) => {
		const subdomain = name.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "").substring(0, 63);
		return subdomain ? `${subdomain}.${effectiveBaseDomain}` : "";
	}, [effectiveBaseDomain]);
	const value = useMemo(() => ({
		formData,
		updateFormData,
		resetFormData,
		installations,
		setInstallations,
		baseDomain: effectiveBaseDomain,
		setBaseDomain,
		generateDomain,
		endpointType,
		setEndpointType,
		region,
		setRegion
	}), [
		formData,
		updateFormData,
		resetFormData,
		installations,
		effectiveBaseDomain,
		generateDomain,
		endpointType,
		region
	]);
	return /* @__PURE__ */ jsx(FunctionWizardContext.Provider, {
		value,
		children
	});
}
export { useFunctionWizard as n, FunctionWizardProvider as t };
