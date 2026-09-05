import { n as useT } from "./translate-DZcqveGn.js";
import { t as Button } from "./button-Bnm2QhOm.js";
import { t as Input } from "./input-yKHNPhDZ.js";
import { t as Label } from "./label-D8nNLJBa.js";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CFWmsJbI.js";
import { t as IdInput } from "./id-input-CfyIhJ26.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
function CreateBucket({ open, onOpenChange, onCreate, isLoading = false }) {
	const t = useT();
	const [bucketId, setBucketId] = useState(void 0);
	const [name, setName] = useState("");
	const [errors, setErrors] = useState({});
	const handleOpenChange = (newOpen) => {
		if (!isLoading) {
			onOpenChange(newOpen);
			if (!newOpen) resetForm();
		}
	};
	const resetForm = () => {
		setBucketId(void 0);
		setName("");
		setErrors({});
	};
	useEffect(() => {
		if (!open) resetForm();
	}, [open]);
	const validate = () => {
		const newErrors = {};
		if (!name.trim()) newErrors.name = t("Name is required");
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate()) return;
		onCreate({
			bucketId,
			name: name.trim()
		});
	};
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange: handleOpenChange,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "sm:max-w-md p-0",
			children: [
				/* @__PURE__ */ jsxs(DialogHeader, {
					className: "px-6 pt-6 text-start",
					children: [/* @__PURE__ */ jsx(DialogTitle, { children: t("Create bucket") }), /* @__PURE__ */ jsx(DialogDescription, {
						className: "text-[13px] mt-2",
						children: t("Create a new storage bucket to organize your files.")
					})]
				}),
				/* @__PURE__ */ jsx("div", { className: "border-t border-border" }),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "px-6 pb-4 pt-0 space-y-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ jsxs(Label, {
									htmlFor: "name",
									children: [
										t("Name"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}),
								/* @__PURE__ */ jsx(Input, {
									id: "name",
									type: "text",
									placeholder: t("Enter bucket name"),
									value: name,
									onChange: (e) => {
										setName(e.target.value);
										if (errors.name) setErrors((prev) => ({
											...prev,
											name: ""
										}));
									},
									disabled: isLoading,
									className: errors.name ? "border-destructive" : ""
								}),
								errors.name && /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-destructive",
									children: errors.name
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "bucket-id",
								children: t("Bucket ID")
							}), /* @__PURE__ */ jsx(IdInput, {
								id: "bucket-id",
								value: bucketId,
								onChange: setBucketId,
								maxLength: 36,
								disabled: isLoading,
								placeholder: t("Leave blank to auto-generate")
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "px-6 py-4 border-t border-border bg-muted/30 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
						children: [/* @__PURE__ */ jsx(Button, {
							type: "button",
							variant: "outline",
							onClick: () => handleOpenChange(false),
							disabled: isLoading,
							children: t("Cancel")
						}), /* @__PURE__ */ jsx(Button, {
							type: "submit",
							disabled: isLoading || !name.trim(),
							children: t("Create")
						})]
					})]
				})
			]
		})
	});
}
export { CreateBucket as t };
