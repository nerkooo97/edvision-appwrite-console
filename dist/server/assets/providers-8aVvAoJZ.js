import { jsx } from "react/jsx-runtime";
function GitHubIcon({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
	});
}
function GitLabIcon({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ jsx("path", { d: "m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z" })
	});
}
function OriginIcon({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "63 63 386 386",
		fill: "currentColor",
		className,
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ jsx("path", { d: "m410.344 159.545-146.38-84.5111c-4.7-2.7145-10.5-2.7145-15.2 0l-146.373 84.5111c-3.9515 2.282-6.391 6.501-6.391 11.071v170.418c0 4.569 2.4395 8.789 6.391 11.07l146.379 84.512c4.701 2.714 10.501 2.714 15.201 0l146.38-84.512c3.951-2.281 6.391-6.501 6.391-11.07v-170.418c0-4.57-2.44-8.789-6.391-11.071zm-9.195 17.902-141.308 244.751c-.955 1.65-3.477.976-3.477-.934v-160.261c0-3.203-1.711-6.164-4.487-7.772l-138.786-80.127c-1.65-.956-.976-3.478.934-3.478h282.616c4.013 0 6.522 4.35 4.515 7.828h-.007z" })
	});
}
function BitbucketIcon({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ jsx("path", { d: "M.778 1.213a.768.768 0 0 0-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.95a.772.772 0 0 0 .77-.646l3.27-20.03a.768.768 0 0 0-.768-.892zM14.52 15.53H9.522L8.17 8.466h7.561z" })
	});
}
const VCS_PROVIDERS = {
	github: {
		id: "github",
		label: "GitHub",
		Icon: GitHubIcon,
		baseUrl: (organization) => `https://github.com/${organization}`
	},
	origin: {
		id: "origin",
		label: "Origin",
		Icon: OriginIcon,
		baseUrl: (organization) => `https://cursor.com/codebase/${organization}`
	},
	gitlab: {
		id: "gitlab",
		label: "GitLab",
		Icon: GitLabIcon,
		baseUrl: (organization) => `https://gitlab.com/${organization}`
	},
	bitbucket: {
		id: "bitbucket",
		label: "Bitbucket",
		Icon: BitbucketIcon,
		baseUrl: (organization) => `https://bitbucket.org/${organization}`
	}
};
function getVcsProvider(provider) {
	const id = provider?.toLowerCase();
	return id && VCS_PROVIDERS[id] || VCS_PROVIDERS.github;
}
function VcsIcon({ type, className }) {
	const { Icon } = getVcsProvider(type);
	return /* @__PURE__ */ jsx(Icon, { className });
}
function getKnownVcsProvider(provider) {
	const id = provider?.toLowerCase();
	return id && VCS_PROVIDERS[id] || null;
}
function getProviderOwnerUrl(provider, organization) {
	const meta = getKnownVcsProvider(provider);
	return meta ? meta.baseUrl(organization) : null;
}
function vcsProviderHasCapability(provider, capableProviders) {
	if (!capableProviders) return true;
	const id = provider?.toLowerCase();
	return !!id && capableProviders.some((p) => p.toLowerCase() === id);
}
function buildVcsOrgOptions(installations, namespacesByInstallation) {
	return [...installations].sort((a, b) => new Date(b.$updatedAt).getTime() - new Date(a.$updatedAt).getTime()).flatMap((installation) => {
		const provider = getVcsProvider(installation.provider).id;
		const namespaces = namespacesByInstallation[installation.$id] ?? [];
		if (namespaces.length <= 1) return [{
			key: installation.$id,
			installationId: installation.$id,
			label: installation.organization,
			provider
		}];
		return namespaces.map((namespace) => ({
			key: `${installation.$id}:${namespace.path}`,
			installationId: installation.$id,
			providerNamespace: namespace.path,
			providerNamespaceId: namespace.id,
			label: namespace.name,
			provider
		}));
	});
}
function buildVcsAuthUrl(opts) {
	const { endpoint, provider, projectId, successUrl, failureUrl } = opts;
	return `${endpoint}/vcs/${provider}/authorize?${new URLSearchParams({
		project: projectId,
		success: successUrl,
		failure: failureUrl,
		mode: "admin"
	}).toString()}`;
}
export { getKnownVcsProvider as a, vcsProviderHasCapability as c, buildVcsOrgOptions as i, VcsIcon as n, getProviderOwnerUrl as o, buildVcsAuthUrl as r, getVcsProvider as s, VCS_PROVIDERS as t };
