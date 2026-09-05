const Dependencies = {
	BACKUPS: ["backup-policies", "backup-archives"],
	BUCKET: ["buckets", "bucket"],
	BUCKETS: ["buckets"],
	FILES: ["files"],
	FILE: ["file"],
	FILE_TOKENS: ["file-tokens"],
	DOMAINS: ["proxy-rules", "domains"],
	WEBHOOKS: ["webhooks"],
	WEBHOOK: ["webhook"],
	FIREWALL_RULES: ["firewall-rules"],
	FIREWALL_RULE: ["firewall-rule"],
	MIGRATIONS: ["migrations"],
	PROJECT: ["project"],
	FUNCTIONS: ["functions"],
	FUNCTION: ["function"],
	DEPLOYMENTS: ["deployments"],
	EXECUTIONS: ["executions"],
	VARIABLES: ["variables"],
	SITES: ["sites"],
	SITE: ["site"],
	FUNCTION_DOMAINS: [
		"proxy-rules",
		"domains",
		"function"
	],
	SITES_DOMAINS: [
		"proxy-rules",
		"domains",
		"site"
	]
};
export { Dependencies as t };
