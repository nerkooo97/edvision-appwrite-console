import { i as getErrorMessage } from "./error-formatting-CL2hjGy5.js";
import { Mu as useUpdateOrganizationApp } from "./hooks-BONwG3Mt.js";
import { toast } from "sonner";
function trimOrEmpty(value) {
	return value.trim();
}
function nonEmptyList(values) {
	return values.map((v) => v.trim()).filter(Boolean);
}
function useOrgAppUpdate(organizationId, app) {
	const updateMutation = useUpdateOrganizationApp(organizationId);
	const submit = async (fields, options) => {
		try {
			await updateMutation.mutateAsync({
				appId: app.$id,
				name: app.name,
				...fields
			});
			toast.success(options?.successMessage ?? "App updated");
		} catch (error) {
			toast.error(getErrorMessage(error, "Failed to update app"));
			throw error;
		}
	};
	return {
		submit,
		isUpdating: updateMutation.isPending
	};
}
export { trimOrEmpty as n, useOrgAppUpdate as r, nonEmptyList as t };
