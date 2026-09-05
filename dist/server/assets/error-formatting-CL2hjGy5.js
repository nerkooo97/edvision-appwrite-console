import { t as translate } from "./translate-DZcqveGn.js";
function isErrorWithCode(error) {
	return error instanceof Error && ("code" in error || "status" in error);
}
function getErrorCode(error) {
	return error.code ?? error.status;
}
function isHttpForbiddenError(error) {
	if (!error || typeof error !== "object") return false;
	const e = error;
	return e.code === 403 || e.status === 403;
}
function getVcsInstallationErrorKind(error) {
	if (!error || typeof error !== "object") return null;
	const e = error;
	if (e.type === "general_resource_locked") return "locked";
	if (e.type !== "general_provider_failure") return null;
	return (typeof e.message === "string" ? e.message.toLowerCase() : "").includes("reconnect") ? "reconnect" : "provider";
}
function isHttpNotFoundError(error) {
	if (!error || typeof error !== "object") return false;
	const e = error;
	if (e.code === 404 || e.status === 404 || e.name === "NotFoundError") return true;
	const message = typeof e.message === "string" ? e.message.toLowerCase() : "";
	return message.includes("not found") || message.includes("404") || message.includes("does not exist");
}
function isHttpPaymentRequiredError(error) {
	if (!error || typeof error !== "object") return false;
	const e = error;
	if (e.code === 402 || e.status === 402) return true;
	const message = typeof e.message === "string" ? e.message.toLowerCase() : "";
	return message.includes("payment required") || message.includes("budget limit") || message.includes("budget_limit");
}
function isHttpUnauthorizedError(error) {
	if (!error || typeof error !== "object") return false;
	const e = error;
	return e.code === 401 || e.status === 401 || e.name === "UnauthorizedError";
}
function isHttpProjectAccessError(error) {
	if (!error || typeof error !== "object") return false;
	if (isHttpUnauthorizedError(error) || isHttpForbiddenError(error) || isHttpNotFoundError(error)) return true;
	const e = error;
	if (e.name === "ForbiddenError" || e.name === "UnauthorizedError") return true;
	const message = typeof e.message === "string" ? e.message.toLowerCase() : "";
	return message.includes("unauthorized") || message.includes("forbidden") || message.includes("permission denied") || message.includes("access denied");
}
const APPWRITE_SUPPORT_EMAIL = "support@appwrite.io";
const CONSOLE_ACCOUNT_ACCESS_BLOCKED = {
	title: "Account access blocked",
	message: `This account cannot use the Appwrite Console - access is blocked or restricted, which may include a Terms of Service violation. For questions about this restriction or to request a review of your account, contact ${APPWRITE_SUPPORT_EMAIL}.`,
	isUserFriendly: true
};
function formatError(error, fallbackMessage = "Something went wrong. Please try again.") {
	if (!error) return {
		title: translate("Error"),
		message: translate(fallbackMessage),
		isUserFriendly: true
	};
	if (error instanceof Error) {
		const message = error.message || "";
		const lowerMessage = message.toLowerCase();
		const code = isErrorWithCode(error) ? getErrorCode(error) : void 0;
		if (error.name === "NotFoundError" || code === 404 || lowerMessage.includes("not found") || lowerMessage.includes("404") || lowerMessage.includes("does not exist")) return {
			title: translate("Not Found"),
			message: translate("The requested resource could not be found. It may have been deleted or you may not have permission to access it."),
			isUserFriendly: true
		};
		if (error.name === "UnauthorizedError" || code === 401 || lowerMessage.includes("unauthorized") || lowerMessage.includes("permission denied") || lowerMessage.includes("access denied")) {
			const messageToShow = message.length > 0 && message.length <= 200 && !message.includes(" at ") && !message.includes("Error:") && !message.includes("TypeError") ? message : translate("You do not have permission to perform this action. Please contact your administrator if you believe this is an error.");
			return {
				title: translate("Access Denied"),
				message: translate(messageToShow),
				isUserFriendly: true
			};
		}
		if (code === 403 || lowerMessage.includes("forbidden")) return {
			title: translate("Forbidden"),
			message: translate("You do not have permission to access this resource."),
			isUserFriendly: true
		};
		if (code === 400 || lowerMessage.includes("validation") || lowerMessage.includes("invalid") || lowerMessage.includes("bad request")) {
			const specificMessage = message.length > 0 && !message.includes("400") ? message : translate("The request is invalid. Please check your input and try again.");
			return {
				title: translate("Invalid Request"),
				message: translate(specificMessage),
				isUserFriendly: true
			};
		}
		if (code === 500 || code === 502 || code === 503 || lowerMessage.includes("server error") || lowerMessage.includes("internal error")) return {
			title: translate("Server Error"),
			message: translate("An error occurred on the server. Please try again in a few moments. If the problem persists, contact support."),
			isUserFriendly: true
		};
		if (error.name === "NetworkError" || error.name === "TypeError" && message.includes("fetch") || lowerMessage.includes("network") || lowerMessage.includes("failed to fetch") || lowerMessage.includes("connection")) return {
			title: translate("Connection Error"),
			message: translate("Unable to connect to the server. Please check your internet connection and try again."),
			isUserFriendly: true
		};
		const errorType = "type" in error && typeof error.type === "string" ? error.type : void 0;
		if (error.name === "TimeoutError" || code === 408 || errorType === "database_timeout" || lowerMessage.includes("timeout") || lowerMessage.includes("timed out")) {
			const apiMessageLooksUseful = message.length > 0 && message.length <= 200 && !message.includes("at ") && (lowerMessage.includes("timed out") || lowerMessage.includes("timeout") || lowerMessage.includes("index") || lowerMessage.includes("quer"));
			return {
				title: translate("Request Timeout"),
				message: apiMessageLooksUseful ? translate(message) : translate("The request took too long to complete. Please try again."),
				isUserFriendly: true
			};
		}
		if (message.includes("at ") || message.includes("Error:") || message.includes("TypeError") || message.includes("ReferenceError") || message.length > 200) return {
			title: translate("Error"),
			message: translate(fallbackMessage),
			isUserFriendly: true
		};
		return {
			title: translate("Error"),
			message: translate(message || fallbackMessage),
			isUserFriendly: true
		};
	}
	if (typeof error === "object" && error !== null && "message" in error) {
		const message = String(error.message || "");
		if (message) return formatError(new Error(message), fallbackMessage);
	}
	if (typeof error === "string") return formatError(new Error(error), fallbackMessage);
	return {
		title: translate("Error"),
		message: translate(fallbackMessage),
		isUserFriendly: true
	};
}
function getErrorMessage(error, fallbackMessage = "Something went wrong. Please try again.") {
	return formatError(error, fallbackMessage).message;
}
export { getVcsInstallationErrorKind as a, isHttpPaymentRequiredError as c, getErrorMessage as i, isHttpProjectAccessError as l, CONSOLE_ACCOUNT_ACCESS_BLOCKED as n, isHttpForbiddenError as o, formatError as r, isHttpNotFoundError as s, APPWRITE_SUPPORT_EMAIL as t, isHttpUnauthorizedError as u };
