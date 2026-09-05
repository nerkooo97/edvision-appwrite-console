import { t as DomainInput } from "./DomainInput-BVoiQ2EY.js";
import { n as useWizard } from "./WizardContext-BjDTRlef.js";
import { jsx } from "react/jsx-runtime";
function DomainInput$1(props) {
	const { baseDomain: contextBase } = useWizard();
	const baseDomain = props.baseDomain ?? contextBase ?? "appwrite.network";
	return /* @__PURE__ */ jsx(DomainInput, {
		...props,
		baseDomain
	});
}
export { DomainInput$1 as t };
