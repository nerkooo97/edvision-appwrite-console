var ReferenceNotFoundError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "ReferenceNotFoundError";
	}
};
function isReferenceNotFoundError(error) {
	return error instanceof ReferenceNotFoundError;
}
function isApiReferenceNotFoundError(error) {
	return error instanceof Error && error.message === "API_REFERENCE_NOT_FOUND";
}
export { isApiReferenceNotFoundError as n, isReferenceNotFoundError as r, ReferenceNotFoundError as t };
