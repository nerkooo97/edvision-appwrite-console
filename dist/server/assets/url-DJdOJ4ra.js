function domainUrl(domain) {
	const hostname = domain.replace(/:\d+$/, "");
	return `${hostname === "localhost" || hostname.endsWith(".localhost") || hostname === "127.0.0.1" || hostname === "::1" ? "http" : "https"}://${domain}`;
}
export { domainUrl as t };
