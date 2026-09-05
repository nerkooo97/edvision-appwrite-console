const tsrStartManifest = () => ({
	"routes": {
		"__root__": {
			"filePath": "/app/src/routes/__root.tsx",
			"children": [
				"/_auth",
				"/_marketing",
				"/_protected",
				"/_public",
				"/access",
				"/blog.md",
				"/changelog.md",
				"/discord",
				"/docs",
				"/docs.md",
				"/generator",
				"/integrations.md",
				"/llms-full.txt",
				"/llms.txt",
				"/robots.txt",
				"/_api/hello",
				"/cli/install.ps1",
				"/cli/install.sh",
				"/domains/continue",
				"/i/$linkId",
				"/llms-full/txt",
				"/llms/txt",
				"/_api/blog/rss.xml",
				"/_api/changelog/rss.xml",
				"/_api/debug/ip",
				"/_api/generator/cover",
				"/_api/generator/diagram",
				"/_api/og/image.png",
				"/_api/og/init.png",
				"/_api/r/e",
				"/_api/r/v.js",
				"/_api/init/$ticketId/og.png",
				"/_api/init/calendar/$eventSlug",
				"/_api/init/ticket/$eventSlug"
			],
			"preloads": ["/assets/main-uHRHOkhm.js"],
			"assets": []
		},
		"/_auth": {
			"filePath": "/app/src/routes/_auth.tsx",
			"children": [
				"/_auth/join",
				"/_auth/mfa",
				"/_auth/recovery",
				"/_auth/sign-in",
				"/_auth/sign-out",
				"/_auth/sign-up",
				"/_auth/verify-email",
				"/_auth/auth/magic-url",
				"/_auth/oauth2/consent",
				"/_auth/oauth2/device",
				"/_auth/agent/mcp/callback",
				"/_auth/assistant/mcp/callback",
				"/_auth/auth/oauth2/failure",
				"/_auth/auth/oauth2/success"
			]
		},
		"/_marketing": {
			"filePath": "/app/src/routes/_marketing.tsx",
			"children": [
				"/_marketing/affiliates",
				"/_marketing/assets",
				"/_marketing/baa",
				"/_marketing/community",
				"/_marketing/company",
				"/_marketing/cookies",
				"/_marketing/domains",
				"/_marketing/education",
				"/_marketing/enterprise",
				"/_marketing/home",
				"/_marketing/partners",
				"/_marketing/pricing",
				"/_marketing/privacy",
				"/_marketing/startups",
				"/_marketing/terms",
				"/_marketing/blog/$page",
				"/_marketing/init/$ticketId",
				"/_marketing/integrations/$slug",
				"/_marketing/products/$productId",
				"/_marketing/threads/$threadId",
				"/_marketing/blog/",
				"/_marketing/changelog/",
				"/_marketing/integrations/",
				"/_marketing/threads/",
				"/_marketing/blog/author/$author",
				"/_marketing/blog/category/$category",
				"/_marketing/blog/post/$slug",
				"/_marketing/changelog/entry/$entry",
				"/_marketing/threads/authors/$authorId"
			],
			"assets": [],
			"preloads": ["/assets/_marketing-D7OboE1x.js"]
		},
		"/_protected": {
			"filePath": "/app/src/routes/_protected.tsx",
			"children": ["/_protected/example-protected-route"]
		},
		"/_public": {
			"filePath": "/app/src/routes/_public.tsx",
			"children": [
				"/_public/account",
				"/_public/agent",
				"/_public/assistant",
				"/_public/blocks",
				"/_public/cache",
				"/_public/comps",
				"/_public/init",
				"/_public/reset",
				"/_public/upgrade",
				"/_public/",
				"/_public/debug/code-editor-preview",
				"/_public/debug/error-preview",
				"/_public/debug/oauth2-preview",
				"/_public/debug/org-setup-preview",
				"/_public/debug/verify-email-preview",
				"/_public/organizations/$orgId",
				"/_public/projects/$projectId"
			]
		},
		"/access": {
			"filePath": "/app/src/routes/access.tsx",
			"assets": [],
			"preloads": ["/assets/access-CQoIul7Q.js"]
		},
		"/blog.md": { "filePath": "/app/src/routes/blog[.]md.tsx" },
		"/changelog.md": { "filePath": "/app/src/routes/changelog[.]md.tsx" },
		"/discord": { "filePath": "/app/src/routes/discord.tsx" },
		"/docs": {
			"filePath": "/app/src/routes/docs.tsx",
			"children": [
				"/docs/$",
				"/docs/quick-starts",
				"/docs/tutorials",
				"/docs/",
				"/docs/partners/",
				"/docs/references/$version/$platform/$service",
				"/docs/references/$version/models/$model"
			],
			"assets": [],
			"preloads": [
				"/assets/docs-DlZal1KH.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/scroll-area-BAv_Fw8-.js",
				"/assets/arrow-up-right-pRIl3k3p.js",
				"/assets/command-BrgE36fy.js",
				"/assets/puzzle-BzMtSx0_.js",
				"/assets/type-t1SxOtK-.js",
				"/assets/api-explorer-BCxYYs-_.js",
				"/assets/ApiExplorerResizableLayout-BTkI2kgu.js",
				"/assets/MethodDescriptionMarkdown-Dri8vIs4.js",
				"/assets/EventResourceIdSelector-DceoGnvp.js",
				"/assets/DocsSectionSubnav-C7tc3JOQ.js",
				"/assets/ApiReferenceSectionSubnav-lZFL62zz.js",
				"/assets/explorer-styles-DkjRTq6L.js",
				"/assets/PermissionsEditor-bEX_z69O.js"
			]
		},
		"/docs.md": { "filePath": "/app/src/routes/docs[.]md.tsx" },
		"/generator": {
			"filePath": "/app/src/routes/generator.tsx",
			"children": [
				"/generator/$generationId",
				"/generator/",
				"/generator/diagrams/$generationId",
				"/generator/diagrams/"
			],
			"assets": [],
			"preloads": [
				"/assets/generator-fSnEbSLO.js",
				"/assets/panel-right-close-B7ePka20.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/GeneratorLayoutContext-ChZzKtbm.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/constants-BBDvLEDz.js"
			]
		},
		"/integrations.md": { "filePath": "/app/src/routes/integrations[.]md.tsx" },
		"/llms-full.txt": { "filePath": "/app/src/routes/llms-full[.]txt.tsx" },
		"/llms.txt": { "filePath": "/app/src/routes/llms[.]txt.tsx" },
		"/robots.txt": { "filePath": "/app/src/routes/robots[.]txt.tsx" },
		"/_api/hello": { "filePath": "/app/src/routes/_api/hello.tsx" },
		"/_auth/join": {
			"filePath": "/app/src/routes/_auth/join.tsx",
			"parent": "/_auth",
			"assets": [],
			"preloads": [
				"/assets/join-VFt3c_vF.js",
				"/assets/circle-check-big-CALerfcJ.js",
				"/assets/circle-x-BHwQQ0fF.js",
				"/assets/user-round-x-uwh785pR.js",
				"/assets/card-BWTX5GGH.js"
			]
		},
		"/_auth/mfa": {
			"filePath": "/app/src/routes/_auth/mfa.tsx",
			"parent": "/_auth",
			"assets": [],
			"preloads": [
				"/assets/mfa-BQUc8j_n.js",
				"/assets/input-otp-B_CHa58m.js",
				"/assets/card-BWTX5GGH.js"
			]
		},
		"/_auth/recovery": {
			"filePath": "/app/src/routes/_auth/recovery.tsx",
			"parent": "/_auth",
			"assets": [],
			"preloads": [
				"/assets/recovery-fBVdSvFC.js",
				"/assets/form-DF-_IP1U.js",
				"/assets/card-BWTX5GGH.js"
			]
		},
		"/_auth/sign-in": {
			"filePath": "/app/src/routes/_auth/sign-in.tsx",
			"parent": "/_auth",
			"assets": [],
			"preloads": [
				"/assets/sign-in-NDNxMIQx.js",
				"/assets/form-DF-_IP1U.js",
				"/assets/SignIn-DdsyvuUK.js",
				"/assets/card-BWTX5GGH.js"
			]
		},
		"/_auth/sign-out": {
			"filePath": "/app/src/routes/_auth/sign-out.tsx",
			"parent": "/_auth",
			"assets": [],
			"preloads": ["/assets/sign-out-5ZFsdheP.js"]
		},
		"/_auth/sign-up": {
			"filePath": "/app/src/routes/_auth/sign-up.tsx",
			"parent": "/_auth",
			"assets": [],
			"preloads": [
				"/assets/sign-up-5C38KKYu.js",
				"/assets/form-DF-_IP1U.js",
				"/assets/SignIn-DdsyvuUK.js",
				"/assets/card-BWTX5GGH.js"
			]
		},
		"/_auth/verify-email": {
			"filePath": "/app/src/routes/_auth/verify-email.tsx",
			"parent": "/_auth",
			"assets": [],
			"preloads": [
				"/assets/verify-email-CzJK4JcS.js",
				"/assets/VerifyEmail-84hlyJRv.js",
				"/assets/card-BWTX5GGH.js"
			]
		},
		"/_marketing/affiliates": {
			"filePath": "/app/src/routes/_marketing/affiliates.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/affiliates-jBjistRv.js",
				"/assets/wallet-CpnDJaeG.js",
				"/assets/MarketingFaqSection-CbCR3vDo.js",
				"/assets/MarketingSections-CH5egWlY.js"
			]
		},
		"/_marketing/assets": {
			"filePath": "/app/src/routes/_marketing/assets.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/assets-BL8B3EcA.js",
				"/assets/PolicyToc-CFZz3xFT.js",
				"/assets/PolicySidebarNav-VtGjukax.js",
				"/assets/PricingSectionHeading-Bh5jHpq9.js"
			]
		},
		"/_marketing/baa": {
			"filePath": "/app/src/routes/_marketing/baa.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/baa-6HpCgVek.js",
				"/assets/View-D6Dpuk4x.js",
				"/assets/PolicyToc-CFZz3xFT.js",
				"/assets/PolicySidebarNav-VtGjukax.js",
				"/assets/PricingSectionHeading-Bh5jHpq9.js"
			]
		},
		"/_marketing/community": {
			"filePath": "/app/src/routes/_marketing/community.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/community-HoqdvqGJ.js",
				"/assets/github-BvEgiTcV.js",
				"/assets/lightbulb-DdlBQdwg.js",
				"/assets/video-CasmaGha.js",
				"/assets/MarketingSections-CH5egWlY.js"
			]
		},
		"/_marketing/company": {
			"filePath": "/app/src/routes/_marketing/company.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/company-BgULdY1B.js",
				"/assets/arrow-up-right-pRIl3k3p.js",
				"/assets/github-BvEgiTcV.js",
				"/assets/newspaper-D85ZhxkZ.js",
				"/assets/MarketingSections-CH5egWlY.js",
				"/assets/PricingSectionHeading-Bh5jHpq9.js"
			]
		},
		"/_marketing/cookies": {
			"filePath": "/app/src/routes/_marketing/cookies.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/cookies-CCxl5HQu.js",
				"/assets/View-D6Dpuk4x.js",
				"/assets/PolicyToc-CFZz3xFT.js",
				"/assets/PolicySidebarNav-VtGjukax.js",
				"/assets/PricingSectionHeading-Bh5jHpq9.js"
			]
		},
		"/_marketing/domains": {
			"filePath": "/app/src/routes/_marketing/domains.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/domains-DwwsSjVr.js",
				"/assets/DomainSearchResults-C8CqA33L.js",
				"/assets/buy-wizard-BfiGK33Y.js"
			]
		},
		"/_marketing/education": {
			"filePath": "/app/src/routes/_marketing/education.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/education-B6WUds_A.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/beaker-B3hizuid.js",
				"/assets/github-BvEgiTcV.js",
				"/assets/MarketingFaqSection-CbCR3vDo.js",
				"/assets/MarketingSections-CH5egWlY.js"
			]
		},
		"/_marketing/enterprise": {
			"filePath": "/app/src/routes/_marketing/enterprise.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/enterprise-rTn8-fEC.js",
				"/assets/graduation-cap-D7R9RQsx.js",
				"/assets/user-round-check-DPYKf3sk.js",
				"/assets/product-toolkit-BWDjuUbU.js",
				"/assets/customer-logos-BUfUYdOn.js",
				"/assets/growth-forms-D9xxUvII.js",
				"/assets/MarketingFaqSection-CbCR3vDo.js",
				"/assets/MarketingSections-CH5egWlY.js"
			]
		},
		"/_marketing/home": {
			"filePath": "/app/src/routes/_marketing/home.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/home-CYVK4c1M.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/database-backup-DuS3oHEn.js",
				"/assets/heart-pulse-dYdTKSRi.js",
				"/assets/lock-keyhole-BCRSnFvH.js",
				"/assets/pentagon-BygJqdmE.js",
				"/assets/scale-D-76hEo2.js",
				"/assets/product-toolkit-BWDjuUbU.js",
				"/assets/customer-logos-BUfUYdOn.js",
				"/assets/NetworkGlobeMount-CztDCdRn.js",
				"/assets/TestimonialsSection-nVyt9Dbw.js",
				"/assets/FirewallProductVisual-CT2I2pqw.js",
				"/assets/MockSyntax-BBxwPtzO.js",
				"/assets/ide-Dk_d_lr4.js"
			]
		},
		"/_marketing/partners": {
			"filePath": "/app/src/routes/_marketing/partners.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/partners-B-e16nbh.js",
				"/assets/graduation-cap-D7R9RQsx.js",
				"/assets/handshake-DVz6dePM.js",
				"/assets/lightbulb-DdlBQdwg.js",
				"/assets/percent-CPDnwfAQ.js",
				"/assets/puzzle-BzMtSx0_.js",
				"/assets/growth-forms-D9xxUvII.js",
				"/assets/MarketingSections-CH5egWlY.js"
			]
		},
		"/_marketing/pricing": {
			"filePath": "/app/src/routes/_marketing/pricing.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/pricing-B8OWfHMz.js",
				"/assets/product-toolkit-BWDjuUbU.js",
				"/assets/PolicySidebarNav-VtGjukax.js",
				"/assets/MarketingSections-CH5egWlY.js",
				"/assets/PricingSectionHeading-Bh5jHpq9.js"
			]
		},
		"/_marketing/privacy": {
			"filePath": "/app/src/routes/_marketing/privacy.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/privacy-DY0o-DXm.js",
				"/assets/View-D6Dpuk4x.js",
				"/assets/PolicyToc-CFZz3xFT.js",
				"/assets/PolicySidebarNav-VtGjukax.js",
				"/assets/PricingSectionHeading-Bh5jHpq9.js"
			]
		},
		"/_marketing/startups": {
			"filePath": "/app/src/routes/_marketing/startups.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/startups-CSXJiOxl.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/graduation-cap-D7R9RQsx.js",
				"/assets/scale-D-76hEo2.js",
				"/assets/trending-up-B09KKpGZ.js",
				"/assets/product-toolkit-BWDjuUbU.js",
				"/assets/customer-logos-BUfUYdOn.js",
				"/assets/TestimonialsSection-nVyt9Dbw.js",
				"/assets/growth-forms-D9xxUvII.js",
				"/assets/MarketingFaqSection-CbCR3vDo.js",
				"/assets/MarketingSections-CH5egWlY.js"
			]
		},
		"/_marketing/terms": {
			"filePath": "/app/src/routes/_marketing/terms.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/terms-JCElQaZX.js",
				"/assets/View-D6Dpuk4x.js",
				"/assets/PolicyToc-CFZz3xFT.js",
				"/assets/PolicySidebarNav-VtGjukax.js",
				"/assets/PricingSectionHeading-Bh5jHpq9.js"
			]
		},
		"/_protected/example-protected-route": {
			"filePath": "/app/src/routes/_protected/example-protected-route.tsx",
			"parent": "/_protected",
			"assets": [],
			"preloads": ["/assets/example-protected-route-DZnwtNHG.js"]
		},
		"/_public/account": {
			"filePath": "/app/src/routes/_public/account.tsx",
			"parent": "/_public",
			"children": [
				"/_public/account/affiliates",
				"/_public/account/applications",
				"/_public/account/billing-addresses",
				"/_public/account/payment-methods",
				"/_public/account/payments",
				"/_public/account/security",
				"/_public/account/sessions",
				"/_public/account/"
			],
			"assets": [],
			"preloads": ["/assets/account-bkcNeesw.js"]
		},
		"/_public/agent": {
			"filePath": "/app/src/routes/_public/agent.tsx",
			"parent": "/_public",
			"children": [
				"/_public/agent/$agentId",
				"/_public/agent/automations",
				"/_public/agent/settings",
				"/_public/agent/"
			],
			"assets": [],
			"preloads": ["/assets/agent-BFS0y8hU.js"]
		},
		"/_public/assistant": {
			"filePath": "/app/src/routes/_public/assistant.tsx",
			"parent": "/_public"
		},
		"/_public/blocks": {
			"filePath": "/app/src/routes/_public/blocks.tsx",
			"parent": "/_public",
			"assets": [],
			"preloads": [
				"/assets/blocks-DQfiwImY.js",
				"/assets/getRoundingMethod-jpUxWAIJ.js",
				"/assets/folder-git-2-DE3Zu8c4.js",
				"/assets/funnel-C2GgtIYF.js",
				"/assets/inbox-B-aLKgdy.js",
				"/assets/infinity-D1nqg1gf.js",
				"/assets/shield-off-iwrGJNr1.js",
				"/assets/shield-x-Szd_Mle4.js",
				"/assets/RefreshButton-Du1-Lmp6.js"
			]
		},
		"/_public/cache": {
			"filePath": "/app/src/routes/_public/cache.tsx",
			"parent": "/_public",
			"assets": [],
			"preloads": [
				"/assets/cache-CbzkuxYz.js",
				"/assets/folder-git-2-DE3Zu8c4.js",
				"/assets/scroll-text-B-ybGU5M.js"
			]
		},
		"/_public/comps": {
			"filePath": "/app/src/routes/_public/comps.tsx",
			"parent": "/_public",
			"assets": [],
			"preloads": [
				"/assets/comps-B4pHeIAk.js",
				"/assets/alert-dialog-CU9wQJGk.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/scroll-area-BAv_Fw8-.js",
				"/assets/input-otp-B_CHa58m.js",
				"/assets/component-QCR-ODvd.js",
				"/assets/navigation-amlEQIbc.js",
				"/assets/rectangle-ellipsis-DPqNYM8_.js",
				"/assets/drawer-wujZceMS.js",
				"/assets/card-BWTX5GGH.js"
			]
		},
		"/_public/init": {
			"filePath": "/app/src/routes/_public/init.tsx",
			"parent": "/_public",
			"assets": [],
			"preloads": [
				"/assets/init-BSb7IpiW.js",
				"/assets/use-globe-theme-config-tX2UxB0C.js",
				"/assets/use-reduced-motion-DesS10vW.js",
				"/assets/es-BBD9SSsS.js",
				"/assets/arrow-up-right-pRIl3k3p.js",
				"/assets/calendar-plus-c7bltBp-.js",
				"/assets/circle-question-mark-D4FIUSU5.js",
				"/assets/flame-DKdy4Lo1.js",
				"/assets/heart-tmcRF8CX.js",
				"/assets/linkedin-C1sfyD-X.js",
				"/assets/log-in-Cy1pRALn.js",
				"/assets/party-popper-D1AMlX3v.js",
				"/assets/sliders-horizontal-5b5HRYNS.js",
				"/assets/trophy-DjeNnAB3.js",
				"/assets/video-CasmaGha.js",
				"/assets/FirewallProductVisual-CT2I2pqw.js",
				"/assets/MockSyntax-BBxwPtzO.js",
				"/assets/init-globe-theme-DhY1YVxt.js",
				"/assets/scramble-sensitive-text-B85ZBLrk.js"
			]
		},
		"/_public/reset": {
			"filePath": "/app/src/routes/_public/reset.tsx",
			"parent": "/_public",
			"assets": [],
			"preloads": [
				"/assets/reset-BMzFg4Qj.js",
				"/assets/form-DF-_IP1U.js",
				"/assets/card-BWTX5GGH.js"
			]
		},
		"/_public/upgrade": {
			"filePath": "/app/src/routes/_public/upgrade.tsx",
			"parent": "/_public",
			"assets": [],
			"preloads": [
				"/assets/upgrade-DKmePhSG.js",
				"/assets/Payment-DmqPzWY7.js",
				"/assets/WarningAlert-DNzxfNNg.js",
				"/assets/OrganizationSetupProgress-wFgffpTm.js",
				"/assets/useDebouncedValue-BvW0_bNY.js"
			]
		},
		"/cli/install.ps1": { "filePath": "/app/src/routes/cli.install[.]ps1.tsx" },
		"/cli/install.sh": { "filePath": "/app/src/routes/cli.install[.]sh.tsx" },
		"/docs/$": {
			"filePath": "/app/src/routes/docs/$.tsx",
			"parent": "/docs",
			"assets": [],
			"preloads": [
				"/assets/_-WgS0T-2m.js",
				"/assets/brain-circuit-PjwQiHhh.js",
				"/assets/use-article-sticky-overlay-3jqsSYtN.js",
				"/assets/DocsLayout-BW62AYji.js",
				"/assets/ide-Dk_d_lr4.js"
			]
		},
		"/docs/quick-starts": {
			"filePath": "/app/src/routes/docs/quick-starts.tsx",
			"parent": "/docs",
			"assets": [],
			"preloads": [
				"/assets/quick-starts-QaD_ApBE.js",
				"/assets/use-article-sticky-overlay-3jqsSYtN.js",
				"/assets/DocsLayout-BW62AYji.js",
				"/assets/DocsHubCategorySection-WjCFpVWG.js"
			]
		},
		"/docs/tutorials": {
			"filePath": "/app/src/routes/docs/tutorials.tsx",
			"parent": "/docs",
			"assets": [],
			"preloads": [
				"/assets/tutorials-uTxS45z2.js",
				"/assets/use-article-sticky-overlay-3jqsSYtN.js",
				"/assets/DocsLayout-BW62AYji.js",
				"/assets/DocsHubCategorySection-WjCFpVWG.js"
			]
		},
		"/domains/continue": {
			"filePath": "/app/src/routes/domains.continue.tsx",
			"assets": [],
			"preloads": ["/assets/domains.continue-BhNvZcRC.js", "/assets/buy-wizard-BfiGK33Y.js"]
		},
		"/generator/$generationId": {
			"filePath": "/app/src/routes/generator/$generationId.tsx",
			"parent": "/generator",
			"assets": [],
			"preloads": [
				"/assets/_generationId-CZqvZKCj.js",
				"/assets/alert-dialog-CU9wQJGk.js",
				"/assets/es-BBD9SSsS.js",
				"/assets/use-route-generation-editor-fgr656yW.js",
				"/assets/CoverView-D2wjlhq8.js",
				"/assets/CreateWizardColumns-5xkz44Gn.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/useDebouncedValue-BvW0_bNY.js"
			]
		},
		"/i/$linkId": {
			"filePath": "/app/src/routes/i.$linkId.tsx",
			"assets": [],
			"preloads": ["/assets/i._linkId-73IWN-yQ.js"]
		},
		"/llms-full/txt": { "filePath": "/app/src/routes/llms-full.txt.tsx" },
		"/llms/txt": { "filePath": "/app/src/routes/llms.txt.tsx" },
		"/_public/": {
			"filePath": "/app/src/routes/_public/index.tsx",
			"parent": "/_public",
			"assets": [],
			"preloads": ["/assets/_public-BDCKdsf5.js"]
		},
		"/docs/": {
			"filePath": "/app/src/routes/docs/index.tsx",
			"parent": "/docs",
			"assets": [],
			"preloads": ["/assets/docs-B90geAVn.js"]
		},
		"/generator/": {
			"filePath": "/app/src/routes/generator/index.tsx",
			"parent": "/generator",
			"assets": [],
			"preloads": [
				"/assets/generator-FrrnLb18.js",
				"/assets/alert-dialog-CU9wQJGk.js",
				"/assets/es-BBD9SSsS.js",
				"/assets/use-route-generation-editor-fgr656yW.js",
				"/assets/CoverView-D2wjlhq8.js",
				"/assets/CreateWizardColumns-5xkz44Gn.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/useDebouncedValue-BvW0_bNY.js"
			]
		},
		"/_api/blog/rss.xml": { "filePath": "/app/src/routes/_api/blog/rss[.]xml.tsx" },
		"/_api/changelog/rss.xml": { "filePath": "/app/src/routes/_api/changelog/rss[.]xml.tsx" },
		"/_api/debug/ip": { "filePath": "/app/src/routes/_api/debug.ip.tsx" },
		"/_api/generator/cover": {
			"filePath": "/app/src/routes/_api/generator/cover.tsx",
			"children": ["/_api/generator/cover/encode"]
		},
		"/_api/generator/diagram": { "filePath": "/app/src/routes/_api/generator/diagram.tsx" },
		"/_api/og/image.png": { "filePath": "/app/src/routes/_api/og/image[.]png.tsx" },
		"/_api/og/init.png": { "filePath": "/app/src/routes/_api/og/init[.]png.tsx" },
		"/_api/r/e": { "filePath": "/app/src/routes/_api/r/e.tsx" },
		"/_api/r/v.js": { "filePath": "/app/src/routes/_api/r/v[.]js.tsx" },
		"/_auth/auth/magic-url": {
			"filePath": "/app/src/routes/_auth/auth.magic-url.tsx",
			"parent": "/_auth",
			"assets": [],
			"preloads": ["/assets/auth.magic-url-CUvyWsev.js", "/assets/card-BWTX5GGH.js"]
		},
		"/_auth/oauth2/consent": {
			"filePath": "/app/src/routes/_auth/oauth2.consent.tsx",
			"parent": "/_auth",
			"assets": [],
			"preloads": [
				"/assets/oauth2.consent-Dhv0Rcml.js",
				"/assets/OAuth2OutcomeCard-DLItVcbD.js",
				"/assets/card-BWTX5GGH.js"
			]
		},
		"/_auth/oauth2/device": {
			"filePath": "/app/src/routes/_auth/oauth2.device.tsx",
			"parent": "/_auth",
			"assets": [],
			"preloads": [
				"/assets/oauth2.device-CJGcS677.js",
				"/assets/input-otp-B_CHa58m.js",
				"/assets/OAuth2OutcomeCard-DLItVcbD.js",
				"/assets/OAuth2DeviceCodeInput-BFsdt2gk.js",
				"/assets/card-BWTX5GGH.js"
			]
		},
		"/_marketing/blog/$page": {
			"filePath": "/app/src/routes/_marketing/blog.$page.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/blog._page-Csg1dNgU.js",
				"/assets/View-BWtfRwjx.js",
				"/assets/BlogPostCard-CAHiKrDY.js",
				"/assets/MarketingSections-CH5egWlY.js"
			]
		},
		"/_marketing/init/$ticketId": {
			"filePath": "/app/src/routes/_marketing/init.$ticketId.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": ["/assets/init._ticketId-XhlAEW_J.js"]
		},
		"/_marketing/integrations/$slug": {
			"filePath": "/app/src/routes/_marketing/integrations.$slug.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/integrations._slug-EelSwKyt.js",
				"/assets/ChangelogMarkdown-FkImZWce.js",
				"/assets/IntegrationCard-DwSvO3ze.js"
			]
		},
		"/_marketing/products/$productId": {
			"filePath": "/app/src/routes/_marketing/products.$productId.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/products._productId-DZd3oZSg.js",
				"/assets/arrow-down-left-CGmMaXon.js",
				"/assets/arrow-down-C5WuIwi2.js",
				"/assets/arrow-up-right-pRIl3k3p.js",
				"/assets/ban-B3hKM3ic.js",
				"/assets/calendar-clock-BTxVcidk.js",
				"/assets/clock-3-C7jF34e8.js",
				"/assets/command-BrgE36fy.js",
				"/assets/corner-down-left-DF5L92BH.js",
				"/assets/corner-down-right-Bh_qtOJH.js",
				"/assets/corner-up-left-BfgR0m1O.js",
				"/assets/corner-up-right-DEdzze0l.js",
				"/assets/crosshair-CEXvKZxj.js",
				"/assets/file-image-BuVvhIJB.js",
				"/assets/funnel-C2GgtIYF.js",
				"/assets/git-commit-horizontal-gNs7fE_n.js",
				"/assets/hash-Bxnr-edP.js",
				"/assets/layout-template-C39Jxm-2.js",
				"/assets/messages-square-BKKgnyc4.js",
				"/assets/qr-code-Bo_zMN7k.js",
				"/assets/shield-off-iwrGJNr1.js",
				"/assets/shopping-bag-EBh2023P.js",
				"/assets/shopping-cart-ELBduBN1.js",
				"/assets/BuildLogsView-DkKLjYRC.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/NetworkGlobeMount-CztDCdRn.js",
				"/assets/MockSyntax-BBxwPtzO.js",
				"/assets/MarketingFaqSection-CbCR3vDo.js",
				"/assets/MarketingSections-CH5egWlY.js",
				"/assets/ProductFeaturePublicIcon-cXDYZleE.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/SiteTemplateGallery-BW7rLx5w.js",
				"/assets/traffic-series-BtQ7Fvje.js",
				"/assets/message-direction-styles-DfhO0c8X.js",
				"/assets/deployment-status-C3aFNgY0.js"
			]
		},
		"/_marketing/threads/$threadId": {
			"filePath": "/app/src/routes/_marketing/threads.$threadId.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/threads._threadId-DDU2_JQ7.js",
				"/assets/heart-tmcRF8CX.js",
				"/assets/MarketingSections-CH5egWlY.js",
				"/assets/ProductFeaturePublicIcon-cXDYZleE.js",
				"/assets/ThreadsPreFooter-UXlE2IYI.js"
			]
		},
		"/_public/account/affiliates": {
			"filePath": "/app/src/routes/_public/account.affiliates.tsx",
			"parent": "/_public/account",
			"assets": [],
			"preloads": ["/assets/account.affiliates-oJakEzGS.js", "/assets/SettingsCardsList-aFxgkNpo.js"]
		},
		"/_public/account/applications": {
			"filePath": "/app/src/routes/_public/account.applications.tsx",
			"parent": "/_public/account",
			"assets": [],
			"preloads": ["/assets/account.applications-uhKRu9Q2.js"]
		},
		"/_public/account/billing-addresses": {
			"filePath": "/app/src/routes/_public/account.billing-addresses.tsx",
			"parent": "/_public/account",
			"assets": [],
			"preloads": [
				"/assets/account.billing-addresses-BHeNgrt_.js",
				"/assets/file-json-xVstgmtc.js",
				"/assets/link-BNgCxmz1.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/Address-BAxSfPKH.js"
			]
		},
		"/_public/account/payment-methods": {
			"filePath": "/app/src/routes/_public/account.payment-methods.tsx",
			"parent": "/_public/account",
			"assets": [],
			"preloads": [
				"/assets/account.payment-methods-DzNdE_EU.js",
				"/assets/file-json-xVstgmtc.js",
				"/assets/link-BNgCxmz1.js",
				"/assets/Payment-DmqPzWY7.js",
				"/assets/WarningAlert-DNzxfNNg.js",
				"/assets/SettingsCardsList-aFxgkNpo.js"
			]
		},
		"/_public/account/payments": {
			"filePath": "/app/src/routes/_public/account.payments.tsx",
			"parent": "/_public/account"
		},
		"/_public/account/security": {
			"filePath": "/app/src/routes/_public/account.security.tsx",
			"parent": "/_public/account",
			"assets": [],
			"preloads": [
				"/assets/account.security-CRxGo-rr.js",
				"/assets/input-otp-B_CHa58m.js",
				"/assets/Overview-BC__F_SZ.js",
				"/assets/SettingsCardsList-aFxgkNpo.js"
			]
		},
		"/_public/account/sessions": {
			"filePath": "/app/src/routes/_public/account.sessions.tsx",
			"parent": "/_public/account",
			"assets": [],
			"preloads": [
				"/assets/account.sessions-Crayv5PC.js",
				"/assets/tablet-8F3wEn5j.js",
				"/assets/format-ip-CDgjeGrv.js"
			]
		},
		"/_public/agent/$agentId": {
			"filePath": "/app/src/routes/_public/agent.$agentId.tsx",
			"parent": "/_public/agent"
		},
		"/_public/agent/automations": {
			"filePath": "/app/src/routes/_public/agent.automations.tsx",
			"parent": "/_public/agent",
			"children": [
				"/_public/agent/automations/$automationId",
				"/_public/agent/automations/create",
				"/_public/agent/automations/"
			],
			"assets": [],
			"preloads": ["/assets/agent.automations-BETdj3kH.js"]
		},
		"/_public/agent/settings": {
			"filePath": "/app/src/routes/_public/agent.settings.tsx",
			"parent": "/_public/agent",
			"children": [
				"/_public/agent/settings/mcp",
				"/_public/agent/settings/memory",
				"/_public/agent/settings/models",
				"/_public/agent/settings/usage",
				"/_public/agent/settings/"
			],
			"assets": [],
			"preloads": ["/assets/agent.settings-DLcsQ2ml.js"]
		},
		"/_public/debug/code-editor-preview": {
			"filePath": "/app/src/routes/_public/debug.code-editor-preview.tsx",
			"parent": "/_public",
			"assets": [],
			"preloads": [
				"/assets/debug.code-editor-preview-CdVQ6EQA.js",
				"/assets/scroll-area-BAv_Fw8-.js",
				"/assets/View-BNxkIBfN.js"
			]
		},
		"/_public/debug/error-preview": {
			"filePath": "/app/src/routes/_public/debug.error-preview.tsx",
			"parent": "/_public",
			"assets": [],
			"preloads": ["/assets/debug.error-preview-DNsOGf0D.js"]
		},
		"/_public/debug/oauth2-preview": {
			"filePath": "/app/src/routes/_public/debug.oauth2-preview.tsx",
			"parent": "/_public",
			"assets": [],
			"preloads": [
				"/assets/debug.oauth2-preview-QGFGUy6D.js",
				"/assets/input-otp-B_CHa58m.js",
				"/assets/OAuth2OutcomeCard-DLItVcbD.js",
				"/assets/OAuth2DeviceCodeInput-BFsdt2gk.js",
				"/assets/OAuth2RelayCard-DTJ3NKSm.js",
				"/assets/card-BWTX5GGH.js"
			]
		},
		"/_public/debug/org-setup-preview": {
			"filePath": "/app/src/routes/_public/debug.org-setup-preview.tsx",
			"parent": "/_public",
			"assets": [],
			"preloads": ["/assets/debug.org-setup-preview-DKvuQB4R.js", "/assets/OrganizationSetupProgress-wFgffpTm.js"]
		},
		"/_public/debug/verify-email-preview": {
			"filePath": "/app/src/routes/_public/debug.verify-email-preview.tsx",
			"parent": "/_public",
			"assets": [],
			"preloads": [
				"/assets/debug.verify-email-preview-BCR8dZb4.js",
				"/assets/VerifyEmail-84hlyJRv.js",
				"/assets/card-BWTX5GGH.js"
			]
		},
		"/_public/organizations/$orgId": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.tsx",
			"parent": "/_public",
			"children": [
				"/_public/organizations/$orgId/agent",
				"/_public/organizations/$orgId/apps",
				"/_public/organizations/$orgId/billing",
				"/_public/organizations/$orgId/domains",
				"/_public/organizations/$orgId/marketplace",
				"/_public/organizations/$orgId/members",
				"/_public/organizations/$orgId/settings",
				"/_public/organizations/$orgId/support",
				"/_public/organizations/$orgId/"
			],
			"assets": [],
			"preloads": [
				"/assets/organizations._orgId-BhvvJQe9.js",
				"/assets/circle-pause-D2M_sEDD.js",
				"/assets/circle-x-BHwQQ0fF.js",
				"/assets/file-json-xVstgmtc.js",
				"/assets/gauge-C7DkppFE.js",
				"/assets/square-pen-e6METbHK.js",
				"/assets/star-BFuZ5EQs.js",
				"/assets/trending-down-ByqzpRkb.js",
				"/assets/trending-up-B09KKpGZ.js",
				"/assets/trophy-DjeNnAB3.js",
				"/assets/user-cog-bv-zsPtF.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/OrganizationBillingHeaderBanners-B2VUoUrE.js",
				"/assets/OrganizationFailedInvoiceHeaderBanner-DHFBcoOj.js",
				"/assets/Payment-DmqPzWY7.js",
				"/assets/ProjectSelector-CiAbyFJ0.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/WarningAlert-DNzxfNNg.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/Address-BAxSfPKH.js",
				"/assets/View-DjMOykvS.js",
				"/assets/RetryVerification-DNy3lQI6.js",
				"/assets/useOrganizationDomainsPlanLimit-H0WE6Cnf.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceListViewToggle-CVu8KHGc.js",
				"/assets/use-service-list-view-mode-Coy1D2Eq.js",
				"/assets/platform-hERRaxzw.js"
			]
		},
		"/_public/projects/$projectId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.tsx",
			"parent": "/_public",
			"children": [
				"/_public/projects/$projectId/activity",
				"/_public/projects/$projectId/advisor",
				"/_public/projects/$projectId/analytics",
				"/_public/projects/$projectId/api-keys",
				"/_public/projects/$projectId/apps",
				"/_public/projects/$projectId/auth",
				"/_public/projects/$projectId/databases",
				"/_public/projects/$projectId/explorer",
				"/_public/projects/$projectId/firewall",
				"/_public/projects/$projectId/functions",
				"/_public/projects/$projectId/imagine",
				"/_public/projects/$projectId/messaging",
				"/_public/projects/$projectId/onboarding",
				"/_public/projects/$projectId/realtime",
				"/_public/projects/$projectId/settings",
				"/_public/projects/$projectId/storage",
				"/_public/projects/$projectId/stores",
				"/_public/projects/$projectId/usage",
				"/_public/projects/$projectId/",
				"/_public/projects/$projectId/sites/$siteId",
				"/_public/projects/$projectId/sites/create",
				"/_public/projects/$projectId/sites/"
			],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId-MWAIJyE2.js",
				"/assets/sortable.esm-D8_ajBlC.js",
				"/assets/circle-pause-D2M_sEDD.js",
				"/assets/minimize-2-DOkFBh2V.js",
				"/assets/SessionMigrationsContext-CvC0XYjH.js",
				"/assets/OrganizationFailedInvoiceHeaderBanner-DHFBcoOj.js",
				"/assets/dnd-modifiers-BHL6leK4.js",
				"/assets/constants-D7x3jYMO.js",
				"/assets/deployment-status-C3aFNgY0.js"
			]
		},
		"/generator/diagrams/$generationId": {
			"filePath": "/app/src/routes/generator/diagrams/$generationId.tsx",
			"parent": "/generator",
			"assets": [],
			"preloads": [
				"/assets/_generationId-BYbUZo1W.js",
				"/assets/sortable.esm-D8_ajBlC.js",
				"/assets/es-BBD9SSsS.js",
				"/assets/ApiExplorerResizableLayout-BTkI2kgu.js",
				"/assets/use-route-generation-editor-fgr656yW.js",
				"/assets/CreateWizardColumns-5xkz44Gn.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/DiagramsView-CTpl4KK-.js"
			]
		},
		"/_marketing/blog/": {
			"filePath": "/app/src/routes/_marketing/blog.index.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/blog.index-Dlj5uZ7N.js",
				"/assets/View-BWtfRwjx.js",
				"/assets/BlogPostCard-CAHiKrDY.js",
				"/assets/MarketingSections-CH5egWlY.js"
			]
		},
		"/_marketing/changelog/": {
			"filePath": "/app/src/routes/_marketing/changelog.index.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/changelog.index-DmGPIH9L.js",
				"/assets/ChangelogMarkdown-FkImZWce.js",
				"/assets/ChangelogSeenSync-wSebRjjP.js",
				"/assets/MarketingSections-CH5egWlY.js"
			]
		},
		"/_marketing/integrations/": {
			"filePath": "/app/src/routes/_marketing/integrations.index.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/integrations.index-D2KGLLi5.js",
				"/assets/IntegrationCard-DwSvO3ze.js",
				"/assets/MarketingSections-CH5egWlY.js"
			]
		},
		"/_marketing/threads/": {
			"filePath": "/app/src/routes/_marketing/threads.index.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/threads.index-Ble3oCMn.js",
				"/assets/MarketingSections-CH5egWlY.js",
				"/assets/ThreadCard-BM5ow6yy.js",
				"/assets/ThreadsPreFooter-UXlE2IYI.js"
			]
		},
		"/_public/account/": {
			"filePath": "/app/src/routes/_public/account.index.tsx",
			"parent": "/_public/account",
			"assets": [],
			"preloads": [
				"/assets/account.index-DOIfbUIG.js",
				"/assets/input-otp-B_CHa58m.js",
				"/assets/Overview-BC__F_SZ.js",
				"/assets/SettingsCardsList-aFxgkNpo.js"
			]
		},
		"/_public/agent/": {
			"filePath": "/app/src/routes/_public/agent.index.tsx",
			"parent": "/_public/agent"
		},
		"/docs/partners/": {
			"filePath": "/app/src/routes/docs/partners.index.tsx",
			"parent": "/docs",
			"assets": [],
			"preloads": ["/assets/partners.index-C774DimE.js"]
		},
		"/generator/diagrams/": {
			"filePath": "/app/src/routes/generator/diagrams/index.tsx",
			"parent": "/generator",
			"assets": [],
			"preloads": [
				"/assets/diagrams-Rgq7aYC-.js",
				"/assets/sortable.esm-D8_ajBlC.js",
				"/assets/es-BBD9SSsS.js",
				"/assets/ApiExplorerResizableLayout-BTkI2kgu.js",
				"/assets/use-route-generation-editor-fgr656yW.js",
				"/assets/CreateWizardColumns-5xkz44Gn.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/DiagramsView-CTpl4KK-.js"
			]
		},
		"/_api/generator/cover/encode": {
			"filePath": "/app/src/routes/_api/generator/cover.encode.tsx",
			"parent": "/_api/generator/cover"
		},
		"/_api/init/$ticketId/og.png": { "filePath": "/app/src/routes/_api/init/$ticketId/og[.]png.tsx" },
		"/_api/init/calendar/$eventSlug": { "filePath": "/app/src/routes/_api/init/calendar/$eventSlug.tsx" },
		"/_api/init/ticket/$eventSlug": { "filePath": "/app/src/routes/_api/init/ticket/$eventSlug.tsx" },
		"/_auth/agent/mcp/callback": {
			"filePath": "/app/src/routes/_auth/agent.mcp.callback.tsx",
			"parent": "/_auth",
			"assets": [],
			"preloads": ["/assets/agent.mcp.callback-DuVdUsqO.js", "/assets/circle-x-BHwQQ0fF.js"]
		},
		"/_auth/assistant/mcp/callback": {
			"filePath": "/app/src/routes/_auth/assistant.mcp.callback.tsx",
			"parent": "/_auth"
		},
		"/_auth/auth/oauth2/failure": {
			"filePath": "/app/src/routes/_auth/auth.oauth2.failure.tsx",
			"parent": "/_auth",
			"assets": [],
			"preloads": [
				"/assets/auth.oauth2.failure-I01Qe7sU.js",
				"/assets/OAuth2RelayCard-DTJ3NKSm.js",
				"/assets/card-BWTX5GGH.js"
			]
		},
		"/_auth/auth/oauth2/success": {
			"filePath": "/app/src/routes/_auth/auth.oauth2.success.tsx",
			"parent": "/_auth",
			"assets": [],
			"preloads": [
				"/assets/auth.oauth2.success-BVIyHpRc.js",
				"/assets/OAuth2RelayCard-DTJ3NKSm.js",
				"/assets/card-BWTX5GGH.js"
			]
		},
		"/_marketing/blog/author/$author": {
			"filePath": "/app/src/routes/_marketing/blog.author.$author.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/blog.author._author-D3itDwEu.js",
				"/assets/use-article-sticky-overlay-3jqsSYtN.js",
				"/assets/PostView-DAZjS_rO.js",
				"/assets/BlogPostCard-CAHiKrDY.js",
				"/assets/ChangelogMarkdown-FkImZWce.js",
				"/assets/MarketingSections-CH5egWlY.js",
				"/assets/ProductFeaturePublicIcon-cXDYZleE.js"
			]
		},
		"/_marketing/blog/category/$category": {
			"filePath": "/app/src/routes/_marketing/blog.category.$category.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/blog.category._category-DAp-_122.js",
				"/assets/use-article-sticky-overlay-3jqsSYtN.js",
				"/assets/PostView-DAZjS_rO.js",
				"/assets/BlogPostCard-CAHiKrDY.js",
				"/assets/ChangelogMarkdown-FkImZWce.js",
				"/assets/MarketingSections-CH5egWlY.js",
				"/assets/ProductFeaturePublicIcon-cXDYZleE.js"
			]
		},
		"/_marketing/blog/post/$slug": {
			"filePath": "/app/src/routes/_marketing/blog.post.$slug.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/blog.post._slug-DCfZHp8W.js",
				"/assets/use-article-sticky-overlay-3jqsSYtN.js",
				"/assets/PostView-DAZjS_rO.js",
				"/assets/BlogPostCard-CAHiKrDY.js",
				"/assets/ChangelogMarkdown-FkImZWce.js",
				"/assets/MarketingSections-CH5egWlY.js",
				"/assets/ProductFeaturePublicIcon-cXDYZleE.js"
			]
		},
		"/_marketing/changelog/entry/$entry": {
			"filePath": "/app/src/routes/_marketing/changelog.entry.$entry.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/changelog.entry._entry-D1s1--ah.js",
				"/assets/ChangelogMarkdown-FkImZWce.js",
				"/assets/ChangelogSeenSync-wSebRjjP.js",
				"/assets/MarketingSections-CH5egWlY.js"
			]
		},
		"/_marketing/threads/authors/$authorId": {
			"filePath": "/app/src/routes/_marketing/threads.authors.$authorId.tsx",
			"parent": "/_marketing",
			"assets": [],
			"preloads": [
				"/assets/threads.authors._authorId-H4Xyk4O_.js",
				"/assets/MarketingSections-CH5egWlY.js",
				"/assets/ThreadCard-BM5ow6yy.js",
				"/assets/ThreadsPreFooter-UXlE2IYI.js"
			]
		},
		"/_public/agent/automations/$automationId": {
			"filePath": "/app/src/routes/_public/agent.automations.$automationId.tsx",
			"parent": "/_public/agent/automations"
		},
		"/_public/agent/automations/create": {
			"filePath": "/app/src/routes/_public/agent.automations.create.tsx",
			"parent": "/_public/agent/automations"
		},
		"/_public/agent/settings/mcp": {
			"filePath": "/app/src/routes/_public/agent.settings.mcp.tsx",
			"parent": "/_public/agent/settings"
		},
		"/_public/agent/settings/memory": {
			"filePath": "/app/src/routes/_public/agent.settings.memory.tsx",
			"parent": "/_public/agent/settings"
		},
		"/_public/agent/settings/models": {
			"filePath": "/app/src/routes/_public/agent.settings.models.tsx",
			"parent": "/_public/agent/settings"
		},
		"/_public/agent/settings/usage": {
			"filePath": "/app/src/routes/_public/agent.settings.usage.tsx",
			"parent": "/_public/agent/settings"
		},
		"/_public/organizations/$orgId/agent": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.agent.tsx",
			"parent": "/_public/organizations/$orgId",
			"children": [
				"/_public/organizations/$orgId/agent/$agentId",
				"/_public/organizations/$orgId/agent/automations",
				"/_public/organizations/$orgId/agent/settings",
				"/_public/organizations/$orgId/agent/"
			],
			"assets": [],
			"preloads": ["/assets/organizations._orgId.agent-BevaBt9_.js"]
		},
		"/_public/organizations/$orgId/apps": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.apps.tsx",
			"parent": "/_public/organizations/$orgId",
			"children": ["/_public/organizations/$orgId/apps/$appId", "/_public/organizations/$orgId/apps/"],
			"assets": [],
			"preloads": ["/assets/organizations._orgId.apps-B6Nmq_PJ.js"]
		},
		"/_public/organizations/$orgId/billing": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.billing.tsx",
			"parent": "/_public/organizations/$orgId"
		},
		"/_public/organizations/$orgId/domains": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.domains.tsx",
			"parent": "/_public/organizations/$orgId",
			"children": [
				"/_public/organizations/$orgId/domains/$domainId",
				"/_public/organizations/$orgId/domains/buy",
				"/_public/organizations/$orgId/domains/transfer-in",
				"/_public/organizations/$orgId/domains/"
			],
			"assets": [],
			"preloads": ["/assets/organizations._orgId.domains-BaYVBvgs.js"]
		},
		"/_public/organizations/$orgId/marketplace": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.marketplace.tsx",
			"parent": "/_public/organizations/$orgId",
			"children": ["/_public/organizations/$orgId/marketplace/", "/_public/organizations/$orgId/marketplace/$appId/"],
			"assets": [],
			"preloads": ["/assets/organizations._orgId.marketplace-C3aGspS_.js"]
		},
		"/_public/organizations/$orgId/members": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.members.tsx",
			"parent": "/_public/organizations/$orgId"
		},
		"/_public/organizations/$orgId/settings": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.settings.tsx",
			"parent": "/_public/organizations/$orgId",
			"children": [
				"/_public/organizations/$orgId/settings/api-keys",
				"/_public/organizations/$orgId/settings/billing",
				"/_public/organizations/$orgId/settings/compliance",
				"/_public/organizations/$orgId/settings/danger-zone",
				"/_public/organizations/$orgId/settings/members",
				"/_public/organizations/$orgId/settings/oauth-apps"
			],
			"assets": [],
			"preloads": ["/assets/organizations._orgId.settings-CE8XLpUn.js"]
		},
		"/_public/organizations/$orgId/support": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.support.tsx",
			"parent": "/_public/organizations/$orgId",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.support-C3TCKMR0.js"]
		},
		"/_public/projects/$projectId/activity": {
			"filePath": "/app/src/routes/_public/projects.$projectId.activity.tsx",
			"parent": "/_public/projects/$projectId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.activity-Bo4mqLzy.js",
				"/assets/file-json-xVstgmtc.js",
				"/assets/layout-list-DqSGudZm.js",
				"/assets/list-checks-CpqEK-Es.js",
				"/assets/log-in-Cy1pRALn.js",
				"/assets/shield-user-DAZAE5By.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/format-ip-CDgjeGrv.js"
			]
		},
		"/_public/projects/$projectId/advisor": {
			"filePath": "/app/src/routes/_public/projects.$projectId.advisor.tsx",
			"parent": "/_public/projects/$projectId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.advisor-DYKIUdTx.js"]
		},
		"/_public/projects/$projectId/analytics": {
			"filePath": "/app/src/routes/_public/projects.$projectId.analytics.tsx",
			"parent": "/_public/projects/$projectId",
			"children": ["/_public/projects/$projectId/analytics/$websiteId"],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.analytics-CgMCt6Jl.js",
				"/assets/bot-QEvkOx3_.js",
				"/assets/list-LHjTa8GE.js",
				"/assets/mouse-pointer-click-BueVwpUO.js",
				"/assets/tablet-8F3wEn5j.js",
				"/assets/trending-down-ByqzpRkb.js",
				"/assets/trending-up-B09KKpGZ.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ServiceHeader-DlqKRX7Q.js"
			]
		},
		"/_public/projects/$projectId/api-keys": {
			"filePath": "/app/src/routes/_public/projects.$projectId.api-keys.tsx",
			"parent": "/_public/projects/$projectId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.api-keys-Bw3LBiOF.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ApiKeysList-CJb3NtMt.js",
				"/assets/ServiceHeader-DlqKRX7Q.js"
			]
		},
		"/_public/projects/$projectId/apps": {
			"filePath": "/app/src/routes/_public/projects.$projectId.apps.tsx",
			"parent": "/_public/projects/$projectId",
			"children": ["/_public/projects/$projectId/apps/add"],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.apps-CRXLEOEZ.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/PlatformContextMenu-BRV8n6Kj.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/platform-hERRaxzw.js"
			]
		},
		"/_public/projects/$projectId/auth": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.tsx",
			"parent": "/_public/projects/$projectId",
			"children": [
				"/_public/projects/$projectId/auth/oauth2-server",
				"/_public/projects/$projectId/auth/policies",
				"/_public/projects/$projectId/auth/security",
				"/_public/projects/$projectId/auth/settings",
				"/_public/projects/$projectId/auth/social-providers",
				"/_public/projects/$projectId/auth/teams",
				"/_public/projects/$projectId/auth/templates",
				"/_public/projects/$projectId/auth/",
				"/_public/projects/$projectId/auth/users/$userId"
			],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.auth-FWv_iBWM.js",
				"/assets/input-otp-B_CHa58m.js",
				"/assets/bold-CRbsRC4n.js",
				"/assets/circle-x-BHwQQ0fF.js",
				"/assets/file-json-xVstgmtc.js",
				"/assets/file-key-B6DUmKpT.js",
				"/assets/file-up-DyAfh45v.js",
				"/assets/italic-a5izCSik.js",
				"/assets/layout-list-DqSGudZm.js",
				"/assets/link-BNgCxmz1.js",
				"/assets/list-ordered-DOFUSOOY.js",
				"/assets/list-LHjTa8GE.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/OAuth2ClientTypePicker-CzKNxN6C.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/AppImagesPicker-5IVffTWt.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/ServiceListViewToggle-CVu8KHGc.js",
				"/assets/card-BWTX5GGH.js",
				"/assets/input-tags-DAy5yWAO.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/_public/projects/$projectId/databases": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.tsx",
			"parent": "/_public/projects/$projectId",
			"children": [
				"/_public/projects/$projectId/databases/$databaseId",
				"/_public/projects/$projectId/databases/create",
				"/_public/projects/$projectId/databases/",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId",
				"/_public/projects/$projectId/databases/mysql/$databaseId",
				"/_public/projects/$projectId/databases/postgres/$databaseId"
			],
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases-B7H5ditp.js"]
		},
		"/_public/projects/$projectId/explorer": {
			"filePath": "/app/src/routes/_public/projects.$projectId.explorer.tsx",
			"parent": "/_public/projects/$projectId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.explorer-DsXthVh0.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/scroll-area-BAv_Fw8-.js",
				"/assets/api-explorer-BCxYYs-_.js",
				"/assets/ApiExplorerResizableLayout-BTkI2kgu.js",
				"/assets/MethodDescriptionMarkdown-Dri8vIs4.js",
				"/assets/EventResourceIdSelector-DceoGnvp.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/ServiceHeader-DlqKRX7Q.js"
			]
		},
		"/_public/projects/$projectId/firewall": {
			"filePath": "/app/src/routes/_public/projects.$projectId.firewall.tsx",
			"parent": "/_public/projects/$projectId",
			"children": ["/_public/projects/$projectId/firewall/create", "/_public/projects/$projectId/firewall/"],
			"assets": [],
			"preloads": ["/assets/projects._projectId.firewall-DUrRIdBR.js"]
		},
		"/_public/projects/$projectId/functions": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.tsx",
			"parent": "/_public/projects/$projectId",
			"children": [
				"/_public/projects/$projectId/functions/$functionId",
				"/_public/projects/$projectId/functions/create",
				"/_public/projects/$projectId/functions/editor",
				"/_public/projects/$projectId/functions/templates",
				"/_public/projects/$projectId/functions/"
			],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions-D-PYgdsV.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/View-DENz2ih-.js",
				"/assets/DeploymentResourceStatusBadges-CQd8BBkH.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/ServiceListViewToggle-CVu8KHGc.js",
				"/assets/use-service-list-view-mode-Coy1D2Eq.js"
			]
		},
		"/_public/projects/$projectId/imagine": {
			"filePath": "/app/src/routes/_public/projects.$projectId.imagine.tsx",
			"parent": "/_public/projects/$projectId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.imagine-BcfE0i2j.js", "/assets/heart-tmcRF8CX.js"]
		},
		"/_public/projects/$projectId/messaging": {
			"filePath": "/app/src/routes/_public/projects.$projectId.messaging.tsx",
			"parent": "/_public/projects/$projectId",
			"children": [
				"/_public/projects/$projectId/messaging/$messageId",
				"/_public/projects/$projectId/messaging/",
				"/_public/projects/$projectId/messaging/providers/$providerId",
				"/_public/projects/$projectId/messaging/providers/create",
				"/_public/projects/$projectId/messaging/topics/$topicId",
				"/_public/projects/$projectId/messaging/providers/",
				"/_public/projects/$projectId/messaging/topics/"
			],
			"assets": [],
			"preloads": ["/assets/projects._projectId.messaging-5ckmTKcc.js"]
		},
		"/_public/projects/$projectId/onboarding": {
			"filePath": "/app/src/routes/_public/projects.$projectId.onboarding.tsx",
			"parent": "/_public/projects/$projectId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.onboarding-DPAarPR8.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ServiceHeader-DlqKRX7Q.js"
			]
		},
		"/_public/projects/$projectId/realtime": {
			"filePath": "/app/src/routes/_public/projects.$projectId.realtime.tsx",
			"parent": "/_public/projects/$projectId",
			"children": [
				"/_public/projects/$projectId/realtime/channels",
				"/_public/projects/$projectId/realtime/debugger",
				"/_public/projects/$projectId/realtime/messages",
				"/_public/projects/$projectId/realtime/"
			],
			"assets": [],
			"preloads": ["/assets/projects._projectId.realtime-B3sTXWvt.js"]
		},
		"/_public/projects/$projectId/settings": {
			"filePath": "/app/src/routes/_public/projects.$projectId.settings.tsx",
			"parent": "/_public/projects/$projectId",
			"children": [
				"/_public/projects/$projectId/settings/domains",
				"/_public/projects/$projectId/settings/migrations",
				"/_public/projects/$projectId/settings/smtp",
				"/_public/projects/$projectId/settings/variables",
				"/_public/projects/$projectId/settings/webhooks",
				"/_public/projects/$projectId/settings/"
			],
			"assets": [],
			"preloads": ["/assets/projects._projectId.settings-D3KltyfQ.js"]
		},
		"/_public/projects/$projectId/storage": {
			"filePath": "/app/src/routes/_public/projects.$projectId.storage.tsx",
			"parent": "/_public/projects/$projectId",
			"children": ["/_public/projects/$projectId/storage/$bucketId", "/_public/projects/$projectId/storage/"],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.storage-ZrLzrn1P.js",
				"/assets/file-json-xVstgmtc.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/CreateBucket-CxCRZC6j.js"
			]
		},
		"/_public/projects/$projectId/stores": {
			"filePath": "/app/src/routes/_public/projects.$projectId.stores.tsx",
			"parent": "/_public/projects/$projectId",
			"children": ["/_public/projects/$projectId/stores/", "/_public/projects/$projectId/stores/$appId/"],
			"assets": [],
			"preloads": ["/assets/projects._projectId.stores-C0tsiB_l.js"]
		},
		"/_public/projects/$projectId/usage": {
			"filePath": "/app/src/routes/_public/projects.$projectId.usage.tsx",
			"parent": "/_public/projects/$projectId",
			"children": ["/_public/projects/$projectId/usage/$categoryId", "/_public/projects/$projectId/usage/"],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.usage-BiRV5qc9.js",
				"/assets/webhook-DjIFpk0t.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/RefreshContext-DDPhTMg6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/UsageHistoricDataNote-CRzPKkT6.js",
				"/assets/use-usage-chart-filters-ClBZWx5w.js"
			]
		},
		"/_public/agent/automations/": {
			"filePath": "/app/src/routes/_public/agent.automations.index.tsx",
			"parent": "/_public/agent/automations"
		},
		"/_public/agent/settings/": {
			"filePath": "/app/src/routes/_public/agent.settings.index.tsx",
			"parent": "/_public/agent/settings"
		},
		"/_public/organizations/$orgId/": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.index.tsx",
			"parent": "/_public/organizations/$orgId",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.index-DqQA8yVC.js"]
		},
		"/_public/projects/$projectId/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.index.tsx",
			"parent": "/_public/projects/$projectId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.index-DsMyZNjf.js",
				"/assets/trending-down-ByqzpRkb.js",
				"/assets/trending-up-B09KKpGZ.js",
				"/assets/ApiKeysList-CJb3NtMt.js",
				"/assets/PlatformContextMenu-BRV8n6Kj.js",
				"/assets/GbHoursUnitInfo-Cktrflt4.js",
				"/assets/UsageHistoricDataNote-CRzPKkT6.js",
				"/assets/use-usage-chart-filters-ClBZWx5w.js",
				"/assets/platform-hERRaxzw.js"
			]
		},
		"/_public/organizations/$orgId/agent/$agentId": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.agent.$agentId.tsx",
			"parent": "/_public/organizations/$orgId/agent",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.agent._agentId-yuopYRw_.js", "/assets/AgentsView-Dy04MyWt.js"]
		},
		"/_public/organizations/$orgId/agent/automations": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.agent.automations.tsx",
			"parent": "/_public/organizations/$orgId/agent",
			"children": [
				"/_public/organizations/$orgId/agent/automations/$automationId",
				"/_public/organizations/$orgId/agent/automations/create",
				"/_public/organizations/$orgId/agent/automations/"
			],
			"assets": [],
			"preloads": ["/assets/organizations._orgId.agent.automations-Ddb1G-Jr.js"]
		},
		"/_public/organizations/$orgId/agent/settings": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.agent.settings.tsx",
			"parent": "/_public/organizations/$orgId/agent",
			"children": [
				"/_public/organizations/$orgId/agent/settings/mcp",
				"/_public/organizations/$orgId/agent/settings/memory",
				"/_public/organizations/$orgId/agent/settings/models",
				"/_public/organizations/$orgId/agent/settings/usage",
				"/_public/organizations/$orgId/agent/settings/"
			],
			"assets": [],
			"preloads": ["/assets/organizations._orgId.agent.settings-DckxJ-Pj.js"]
		},
		"/_public/organizations/$orgId/apps/$appId": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.apps.$appId.tsx",
			"parent": "/_public/organizations/$orgId/apps",
			"children": [
				"/_public/organizations/$orgId/apps/$appId/branding",
				"/_public/organizations/$orgId/apps/$appId/legal",
				"/_public/organizations/$orgId/apps/$appId/oauth",
				"/_public/organizations/$orgId/apps/$appId/secrets",
				"/_public/organizations/$orgId/apps/$appId/settings",
				"/_public/organizations/$orgId/apps/$appId/support",
				"/_public/organizations/$orgId/apps/$appId/"
			],
			"assets": [],
			"preloads": [
				"/assets/organizations._orgId.apps._appId-DM6vbiqW.js",
				"/assets/life-buoy-BQVSWs3p.js",
				"/assets/scale-D-76hEo2.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ServiceHeader-DlqKRX7Q.js"
			]
		},
		"/_public/organizations/$orgId/domains/$domainId": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.domains.$domainId.tsx",
			"parent": "/_public/organizations/$orgId/domains",
			"children": ["/_public/organizations/$orgId/domains/$domainId/settings", "/_public/organizations/$orgId/domains/$domainId/"],
			"assets": [],
			"preloads": ["/assets/organizations._orgId.domains._domainId-BuJdw-q9.js"]
		},
		"/_public/organizations/$orgId/domains/buy": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.domains.buy.tsx",
			"parent": "/_public/organizations/$orgId/domains",
			"assets": [],
			"preloads": [
				"/assets/organizations._orgId.domains.buy-XSdJQCHg.js",
				"/assets/PaymentMethodDropdown-WYteecwb.js",
				"/assets/DomainSearchResults-C8CqA33L.js"
			]
		},
		"/_public/organizations/$orgId/domains/transfer-in": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.domains.transfer-in.tsx",
			"parent": "/_public/organizations/$orgId/domains",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.domains.transfer-in-DjNE3pPv.js", "/assets/PaymentMethodDropdown-WYteecwb.js"]
		},
		"/_public/organizations/$orgId/settings/api-keys": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.settings.api-keys.tsx",
			"parent": "/_public/organizations/$orgId/settings",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.settings.api-keys-lQWAdSHf.js"]
		},
		"/_public/organizations/$orgId/settings/billing": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.settings.billing.tsx",
			"parent": "/_public/organizations/$orgId/settings",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.settings.billing-BgPZ36eV.js"]
		},
		"/_public/organizations/$orgId/settings/compliance": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.settings.compliance.tsx",
			"parent": "/_public/organizations/$orgId/settings",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.settings.compliance-C3ZOA_BY.js"]
		},
		"/_public/organizations/$orgId/settings/danger-zone": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.settings.danger-zone.tsx",
			"parent": "/_public/organizations/$orgId/settings"
		},
		"/_public/organizations/$orgId/settings/members": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.settings.members.tsx",
			"parent": "/_public/organizations/$orgId/settings",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.settings.members-CzOX1RBw.js"]
		},
		"/_public/organizations/$orgId/settings/oauth-apps": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.settings.oauth-apps.tsx",
			"parent": "/_public/organizations/$orgId/settings",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.settings.oauth-apps-DALKBIyg.js"]
		},
		"/_public/projects/$projectId/analytics/$websiteId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.analytics.$websiteId.tsx",
			"parent": "/_public/projects/$projectId/analytics",
			"assets": [{
				"tag": "link",
				"attrs": {
					"rel": "stylesheet",
					"href": "/assets/projects._projectId.analytics-BOXQ3wjJ.css",
					"type": "text/css"
				}
			}],
			"preloads": ["/assets/projects._projectId.analytics._websiteId-DrBmT2LH.js", "/assets/chromium-B7fME5Cn.js"]
		},
		"/_public/projects/$projectId/apps/add": {
			"filePath": "/app/src/routes/_public/projects.$projectId.apps.add.tsx",
			"parent": "/_public/projects/$projectId/apps",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.apps.add-DJUNSPhf.js",
				"/assets/brain-circuit-PjwQiHhh.js",
				"/assets/ide-Dk_d_lr4.js"
			]
		},
		"/_public/projects/$projectId/auth/oauth2-server": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.oauth2-server.tsx",
			"parent": "/_public/projects/$projectId/auth",
			"children": ["/_public/projects/$projectId/auth/oauth2-server/apps", "/_public/projects/$projectId/auth/oauth2-server/settings"],
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.oauth2-server-BhHa1MYc.js"]
		},
		"/_public/projects/$projectId/auth/policies": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.policies.tsx",
			"parent": "/_public/projects/$projectId/auth",
			"children": [
				"/_public/projects/$projectId/auth/policies/emails",
				"/_public/projects/$projectId/auth/policies/memberships",
				"/_public/projects/$projectId/auth/policies/passwords",
				"/_public/projects/$projectId/auth/policies/sessions",
				"/_public/projects/$projectId/auth/policies/users"
			],
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.policies-CQx73Hca.js"]
		},
		"/_public/projects/$projectId/auth/security": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.security.tsx",
			"parent": "/_public/projects/$projectId/auth"
		},
		"/_public/projects/$projectId/auth/settings": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.settings.tsx",
			"parent": "/_public/projects/$projectId/auth",
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.settings-75xH4nxg.js"]
		},
		"/_public/projects/$projectId/auth/social-providers": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.social-providers.tsx",
			"parent": "/_public/projects/$projectId/auth",
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.social-providers-Kt2Yw6qk.js"]
		},
		"/_public/projects/$projectId/auth/teams": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.teams.tsx",
			"parent": "/_public/projects/$projectId/auth",
			"children": ["/_public/projects/$projectId/auth/teams/$teamId"],
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.teams-CzHDxI4U.js"]
		},
		"/_public/projects/$projectId/auth/templates": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.templates.tsx",
			"parent": "/_public/projects/$projectId/auth",
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.templates-DZUmMamW.js"]
		},
		"/_public/projects/$projectId/databases/$databaseId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$databaseId.tsx",
			"parent": "/_public/projects/$projectId/databases"
		},
		"/_public/projects/$projectId/databases/create": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.create.tsx",
			"parent": "/_public/projects/$projectId/databases"
		},
		"/_public/projects/$projectId/firewall/create": {
			"filePath": "/app/src/routes/_public/projects.$projectId.firewall.create.tsx",
			"parent": "/_public/projects/$projectId/firewall"
		},
		"/_public/projects/$projectId/functions/$functionId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.$functionId.tsx",
			"parent": "/_public/projects/$projectId/functions",
			"children": [
				"/_public/projects/$projectId/functions/$functionId/domains",
				"/_public/projects/$projectId/functions/$functionId/executions",
				"/_public/projects/$projectId/functions/$functionId/security",
				"/_public/projects/$projectId/functions/$functionId/settings",
				"/_public/projects/$projectId/functions/$functionId/variables",
				"/_public/projects/$projectId/functions/$functionId/",
				"/_public/projects/$projectId/functions/$functionId/deployments/$deploymentId/"
			],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions._functionId-DxrIlQAe.js",
				"/assets/BranchSelector-VxMz1VVe.js",
				"/assets/DeploymentInfo-C6WAVE9u.js",
				"/assets/RefreshContext-DDPhTMg6.js",
				"/assets/RepositoryPicker-DgUnPiCr.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/use-installation-reconnect-CGvarikS.js",
				"/assets/WarningAlert-DNzxfNNg.js",
				"/assets/Layout-qm3ZLQbu.js",
				"/assets/CreateManualDeploymentModal-B-dTC6BD.js"
			]
		},
		"/_public/projects/$projectId/functions/create": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.create.tsx",
			"parent": "/_public/projects/$projectId/functions",
			"children": [
				"/_public/projects/$projectId/functions/create/deploy",
				"/_public/projects/$projectId/functions/create/deploying",
				"/_public/projects/$projectId/functions/create/manual",
				"/_public/projects/$projectId/functions/create/",
				"/_public/projects/$projectId/functions/create/repository/$repository",
				"/_public/projects/$projectId/functions/create/template/$templateId"
			],
			"assets": [],
			"preloads": ["/assets/projects._projectId.functions.create-BhyFzhrb.js", "/assets/WizardContext-ncBrhhzj.js"]
		},
		"/_public/projects/$projectId/functions/editor": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.editor.tsx",
			"parent": "/_public/projects/$projectId/functions",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions.editor-Dh7x7gJL.js",
				"/assets/scroll-area-BAv_Fw8-.js",
				"/assets/View-BNxkIBfN.js"
			]
		},
		"/_public/projects/$projectId/functions/templates": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.templates.tsx",
			"parent": "/_public/projects/$projectId/functions",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions.templates-DoQjVjEx.js",
				"/assets/scroll-area-BAv_Fw8-.js",
				"/assets/layout-template-C39Jxm-2.js"
			]
		},
		"/_public/projects/$projectId/messaging/$messageId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.messaging.$messageId.tsx",
			"parent": "/_public/projects/$projectId/messaging",
			"children": ["/_public/projects/$projectId/messaging/$messageId/settings", "/_public/projects/$projectId/messaging/$messageId/"],
			"assets": [],
			"preloads": ["/assets/projects._projectId.messaging._messageId-CCUmaeoA.js"]
		},
		"/_public/projects/$projectId/realtime/channels": {
			"filePath": "/app/src/routes/_public/projects.$projectId.realtime.channels.tsx",
			"parent": "/_public/projects/$projectId/realtime"
		},
		"/_public/projects/$projectId/realtime/debugger": {
			"filePath": "/app/src/routes/_public/projects.$projectId.realtime.debugger.tsx",
			"parent": "/_public/projects/$projectId/realtime"
		},
		"/_public/projects/$projectId/realtime/messages": {
			"filePath": "/app/src/routes/_public/projects.$projectId.realtime.messages.tsx",
			"parent": "/_public/projects/$projectId/realtime"
		},
		"/_public/projects/$projectId/settings/domains": {
			"filePath": "/app/src/routes/_public/projects.$projectId.settings.domains.tsx",
			"parent": "/_public/projects/$projectId/settings",
			"children": ["/_public/projects/$projectId/settings/domains/add", "/_public/projects/$projectId/settings/domains/"],
			"assets": [],
			"preloads": ["/assets/projects._projectId.settings.domains-B_5Oc0J5.js"]
		},
		"/_public/projects/$projectId/settings/migrations": {
			"filePath": "/app/src/routes/_public/projects.$projectId.settings.migrations.tsx",
			"parent": "/_public/projects/$projectId/settings",
			"children": ["/_public/projects/$projectId/settings/migrations/import", "/_public/projects/$projectId/settings/migrations/"],
			"assets": [],
			"preloads": ["/assets/projects._projectId.settings.migrations-QhNUL0Ck.js"]
		},
		"/_public/projects/$projectId/settings/smtp": {
			"filePath": "/app/src/routes/_public/projects.$projectId.settings.smtp.tsx",
			"parent": "/_public/projects/$projectId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.settings.smtp-Ch_WJ5sj.js",
				"/assets/proxy-domains-DK3yA_MR.js",
				"/assets/BuildLogsCard-BuoGQwEn.js",
				"/assets/BuildLogsView-DkKLjYRC.js",
				"/assets/EventEditor-zMKTfXm3.js",
				"/assets/EventResourceIdSelector-DceoGnvp.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/VariablesSettingsCard-DHW1AGjw.js",
				"/assets/View-L-bM4h_0.js",
				"/assets/ProxyRuleContextMenu-DQBBiMgX.js",
				"/assets/VerifyDomainContent-DnpSzuOK.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/input-tags-DAy5yWAO.js",
				"/assets/use-scroll-to-card-B-sk318q.js"
			]
		},
		"/_public/projects/$projectId/settings/variables": {
			"filePath": "/app/src/routes/_public/projects.$projectId.settings.variables.tsx",
			"parent": "/_public/projects/$projectId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.settings.variables-1dqJWDU5.js",
				"/assets/proxy-domains-DK3yA_MR.js",
				"/assets/BuildLogsCard-BuoGQwEn.js",
				"/assets/BuildLogsView-DkKLjYRC.js",
				"/assets/EventEditor-zMKTfXm3.js",
				"/assets/EventResourceIdSelector-DceoGnvp.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/VariablesSettingsCard-DHW1AGjw.js",
				"/assets/View-L-bM4h_0.js",
				"/assets/ProxyRuleContextMenu-DQBBiMgX.js",
				"/assets/VerifyDomainContent-DnpSzuOK.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/input-tags-DAy5yWAO.js",
				"/assets/use-scroll-to-card-B-sk318q.js"
			]
		},
		"/_public/projects/$projectId/settings/webhooks": {
			"filePath": "/app/src/routes/_public/projects.$projectId.settings.webhooks.tsx",
			"parent": "/_public/projects/$projectId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.settings.webhooks-Bell5gnD.js",
				"/assets/proxy-domains-DK3yA_MR.js",
				"/assets/BuildLogsCard-BuoGQwEn.js",
				"/assets/BuildLogsView-DkKLjYRC.js",
				"/assets/EventEditor-zMKTfXm3.js",
				"/assets/EventResourceIdSelector-DceoGnvp.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/VariablesSettingsCard-DHW1AGjw.js",
				"/assets/View-L-bM4h_0.js",
				"/assets/ProxyRuleContextMenu-DQBBiMgX.js",
				"/assets/VerifyDomainContent-DnpSzuOK.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/input-tags-DAy5yWAO.js",
				"/assets/use-scroll-to-card-B-sk318q.js"
			]
		},
		"/_public/projects/$projectId/sites/$siteId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.$siteId.tsx",
			"parent": "/_public/projects/$projectId",
			"children": [
				"/_public/projects/$projectId/sites/$siteId/deployments",
				"/_public/projects/$projectId/sites/$siteId/domains",
				"/_public/projects/$projectId/sites/$siteId/logs",
				"/_public/projects/$projectId/sites/$siteId/settings",
				"/_public/projects/$projectId/sites/$siteId/usage",
				"/_public/projects/$projectId/sites/$siteId/variables",
				"/_public/projects/$projectId/sites/$siteId/"
			],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites._siteId-DYDvV6ov.js",
				"/assets/BranchSelector-VxMz1VVe.js",
				"/assets/DeploymentInfo-C6WAVE9u.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/RefreshContext-DDPhTMg6.js",
				"/assets/RepositoryPicker-DgUnPiCr.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/use-installation-reconnect-CGvarikS.js",
				"/assets/WarningAlert-DNzxfNNg.js",
				"/assets/CreateManualDeploymentModal-B-dTC6BD.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/Layout-vadnDGp9.js"
			]
		},
		"/_public/projects/$projectId/sites/create": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.create.tsx",
			"parent": "/_public/projects/$projectId",
			"children": [
				"/_public/projects/$projectId/sites/create/deploy",
				"/_public/projects/$projectId/sites/create/deploying",
				"/_public/projects/$projectId/sites/create/finish",
				"/_public/projects/$projectId/sites/create/manual",
				"/_public/projects/$projectId/sites/create/",
				"/_public/projects/$projectId/sites/create/templates/$template",
				"/_public/projects/$projectId/sites/create/repositories/$installationId/$repositoryId"
			],
			"assets": [],
			"preloads": ["/assets/projects._projectId.sites.create-Dp7FwjP8.js", "/assets/WizardContext-CdyRE44z.js"]
		},
		"/_public/projects/$projectId/storage/$bucketId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.storage.$bucketId.tsx",
			"parent": "/_public/projects/$projectId/storage",
			"children": [
				"/_public/projects/$projectId/storage/$bucketId/security",
				"/_public/projects/$projectId/storage/$bucketId/settings",
				"/_public/projects/$projectId/storage/$bucketId/"
			],
			"assets": [],
			"preloads": ["/assets/projects._projectId.storage._bucketId-18UvLoEw.js"]
		},
		"/_public/projects/$projectId/usage/$categoryId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.usage.$categoryId.tsx",
			"parent": "/_public/projects/$projectId/usage",
			"children": ["/_public/projects/$projectId/usage/$categoryId/$metricId"],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.usage._categoryId-CNNE_zBg.js",
				"/assets/GbHoursUnitInfo-Cktrflt4.js",
				"/assets/ComputeUsageSection-CQUISqhA.js",
				"/assets/UsageBreakdownDrawer-BarOQhFl.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/docs/references/$version/$platform/$service": {
			"filePath": "/app/src/routes/docs/references.$version.$platform.$service.tsx",
			"parent": "/docs",
			"assets": [],
			"preloads": ["/assets/references._version._platform._service-DcHo2l0b.js"]
		},
		"/docs/references/$version/models/$model": {
			"filePath": "/app/src/routes/docs/references.$version.models.$model.tsx",
			"parent": "/docs",
			"assets": [],
			"preloads": [
				"/assets/references._version.models._model-hEFp0q7S.js",
				"/assets/use-article-sticky-overlay-3jqsSYtN.js",
				"/assets/DocsLayout-BW62AYji.js",
				"/assets/ApiReferencePropertyTypeCell-DnT-4so1.js"
			]
		},
		"/_public/organizations/$orgId/agent/": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.agent.index.tsx",
			"parent": "/_public/organizations/$orgId/agent",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.agent.index-DuBFFTRA.js", "/assets/AgentsView-Dy04MyWt.js"]
		},
		"/_public/organizations/$orgId/apps/": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.apps.index.tsx",
			"parent": "/_public/organizations/$orgId/apps",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.apps.index-CITESXPw.js"]
		},
		"/_public/organizations/$orgId/domains/": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.domains.index.tsx",
			"parent": "/_public/organizations/$orgId/domains",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.domains.index-MvfiIbeb.js"]
		},
		"/_public/organizations/$orgId/marketplace/": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.marketplace.index.tsx",
			"parent": "/_public/organizations/$orgId/marketplace",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.marketplace.index-BhUrNnO-.js"]
		},
		"/_public/projects/$projectId/auth/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.index.tsx",
			"parent": "/_public/projects/$projectId/auth"
		},
		"/_public/projects/$projectId/databases/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.index.tsx",
			"parent": "/_public/projects/$projectId/databases",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.index-C6H6qWVg.js",
				"/assets/View-CNsySQq4.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js",
				"/assets/DatabaseOperationsLockContext-c6AoSqMw.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/MessageDirectionIcon-BIBRARvM.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js",
				"/assets/UsageBreakdownDrawer-BarOQhFl.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/card-BWTX5GGH.js",
				"/assets/database-console-labels-Cv6LZ0JX.js",
				"/assets/resource-status-labels-Bgw93kqt.js",
				"/assets/scramble-sensitive-text-B85ZBLrk.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/_public/projects/$projectId/firewall/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.firewall.index.tsx",
			"parent": "/_public/projects/$projectId/firewall",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.firewall.index-BM6dTsX8.js",
				"/assets/file-json-xVstgmtc.js",
				"/assets/toggle-left-BBfCP4UP.js",
				"/assets/toggle-right-Bm78l9Lr.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/service-header-container-Cwhoy3Nd.js",
				"/assets/use-usage-chart-filters-ClBZWx5w.js",
				"/assets/traffic-series-BtQ7Fvje.js"
			]
		},
		"/_public/projects/$projectId/functions/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.index.tsx",
			"parent": "/_public/projects/$projectId/functions",
			"assets": [],
			"preloads": ["/assets/projects._projectId.functions.index-CYIE44w0.js"]
		},
		"/_public/projects/$projectId/messaging/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.messaging.index.tsx",
			"parent": "/_public/projects/$projectId/messaging",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.messaging.index-CffPrB53.js",
				"/assets/MessagingProviderIcon-AeDCxrsb.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/View-CANlVQ1N.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/resource-status-labels-Bgw93kqt.js"
			]
		},
		"/_public/projects/$projectId/realtime/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.realtime.index.tsx",
			"parent": "/_public/projects/$projectId/realtime",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.realtime.index-D5K3il4N.js",
				"/assets/arrow-down-left-CGmMaXon.js",
				"/assets/arrow-up-right-pRIl3k3p.js",
				"/assets/funnel-C2GgtIYF.js",
				"/assets/list-collapse-DAyb-3D3.js",
				"/assets/messages-square-BKKgnyc4.js",
				"/assets/pause-DbDcu7FP.js",
				"/assets/unplug-Bznham4S.js",
				"/assets/EventEditor-zMKTfXm3.js",
				"/assets/EventResourceIdSelector-DceoGnvp.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/MessageDirectionIcon-BIBRARvM.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/message-direction-styles-DfhO0c8X.js"
			]
		},
		"/_public/projects/$projectId/settings/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.settings.index.tsx",
			"parent": "/_public/projects/$projectId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.settings.index-C3IS-pob.js",
				"/assets/proxy-domains-DK3yA_MR.js",
				"/assets/BuildLogsCard-BuoGQwEn.js",
				"/assets/BuildLogsView-DkKLjYRC.js",
				"/assets/EventEditor-zMKTfXm3.js",
				"/assets/EventResourceIdSelector-DceoGnvp.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/VariablesSettingsCard-DHW1AGjw.js",
				"/assets/View-L-bM4h_0.js",
				"/assets/ProxyRuleContextMenu-DQBBiMgX.js",
				"/assets/VerifyDomainContent-DnpSzuOK.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/input-tags-DAy5yWAO.js",
				"/assets/use-scroll-to-card-B-sk318q.js"
			]
		},
		"/_public/projects/$projectId/sites/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.index.tsx",
			"parent": "/_public/projects/$projectId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites.index-CjGc8eJ6.js",
				"/assets/file-json-xVstgmtc.js",
				"/assets/folder-git-CTPS2JyF.js",
				"/assets/scroll-text-B-ybGU5M.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/DeploymentResourceStatusBadges-CQd8BBkH.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/ServiceListViewToggle-CVu8KHGc.js",
				"/assets/use-service-list-view-mode-Coy1D2Eq.js",
				"/assets/screenshot-preview-sizes-BnekkyBQ.js"
			]
		},
		"/_public/projects/$projectId/storage/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.storage.index.tsx",
			"parent": "/_public/projects/$projectId/storage",
			"assets": [],
			"preloads": ["/assets/projects._projectId.storage.index-DiPffzWv.js", "/assets/View-D3Qrg4QD.js"]
		},
		"/_public/projects/$projectId/stores/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.stores.index.tsx",
			"parent": "/_public/projects/$projectId/stores",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.stores.index-CFfG7PqF.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/ServiceListViewToggle-CVu8KHGc.js",
				"/assets/platform-Drn0Kt8_.js",
				"/assets/use-service-list-view-mode-Coy1D2Eq.js"
			]
		},
		"/_public/projects/$projectId/usage/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.usage.index.tsx",
			"parent": "/_public/projects/$projectId/usage"
		},
		"/_public/organizations/$orgId/agent/automations/$automationId": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.agent.automations.$automationId.tsx",
			"parent": "/_public/organizations/$orgId/agent/automations",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.agent.automations._automationId-C2S9iMAf.js"]
		},
		"/_public/organizations/$orgId/agent/automations/create": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.agent.automations.create.tsx",
			"parent": "/_public/organizations/$orgId/agent/automations",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.agent.automations.create-DUJlm8Ak.js"]
		},
		"/_public/organizations/$orgId/agent/settings/mcp": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.agent.settings.mcp.tsx",
			"parent": "/_public/organizations/$orgId/agent/settings",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.agent.settings.mcp-BlQu0Y_f.js"]
		},
		"/_public/organizations/$orgId/agent/settings/memory": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.agent.settings.memory.tsx",
			"parent": "/_public/organizations/$orgId/agent/settings",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.agent.settings.memory-r5O0X37K.js"]
		},
		"/_public/organizations/$orgId/agent/settings/models": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.agent.settings.models.tsx",
			"parent": "/_public/organizations/$orgId/agent/settings",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.agent.settings.models-3gq9Wf28.js"]
		},
		"/_public/organizations/$orgId/agent/settings/usage": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.agent.settings.usage.tsx",
			"parent": "/_public/organizations/$orgId/agent/settings",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.agent.settings.usage-IG-vk6ck.js"]
		},
		"/_public/organizations/$orgId/apps/$appId/branding": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.apps.$appId.branding.tsx",
			"parent": "/_public/organizations/$orgId/apps/$appId",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.apps._appId.branding-DuEs1ksX.js"]
		},
		"/_public/organizations/$orgId/apps/$appId/legal": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.apps.$appId.legal.tsx",
			"parent": "/_public/organizations/$orgId/apps/$appId",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.apps._appId.legal-Ups4-k6a.js", "/assets/useOrgAppUpdate-B4uwthVw.js"]
		},
		"/_public/organizations/$orgId/apps/$appId/oauth": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.apps.$appId.oauth.tsx",
			"parent": "/_public/organizations/$orgId/apps/$appId",
			"assets": [],
			"preloads": [
				"/assets/organizations._orgId.apps._appId.oauth-CuNH6wjG.js",
				"/assets/OAuth2ClientTypePicker-CzKNxN6C.js",
				"/assets/useOrgAppUpdate-B4uwthVw.js",
				"/assets/input-tags-DAy5yWAO.js"
			]
		},
		"/_public/organizations/$orgId/apps/$appId/secrets": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.apps.$appId.secrets.tsx",
			"parent": "/_public/organizations/$orgId/apps/$appId",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.apps._appId.secrets-CTW2J5Qx.js"]
		},
		"/_public/organizations/$orgId/apps/$appId/settings": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.apps.$appId.settings.tsx",
			"parent": "/_public/organizations/$orgId/apps/$appId",
			"assets": [],
			"preloads": [
				"/assets/organizations._orgId.apps._appId.settings-CKOcQsmd.js",
				"/assets/useOrgAppUpdate-B4uwthVw.js",
				"/assets/AppImagesPicker-5IVffTWt.js"
			]
		},
		"/_public/organizations/$orgId/apps/$appId/support": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.apps.$appId.support.tsx",
			"parent": "/_public/organizations/$orgId/apps/$appId",
			"assets": [],
			"preloads": [
				"/assets/organizations._orgId.apps._appId.support-epLLfd5X.js",
				"/assets/useOrgAppUpdate-B4uwthVw.js",
				"/assets/input-tags-DAy5yWAO.js"
			]
		},
		"/_public/organizations/$orgId/domains/$domainId/settings": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.domains.$domainId.settings.tsx",
			"parent": "/_public/organizations/$orgId/domains/$domainId",
			"assets": [],
			"preloads": [
				"/assets/organizations._orgId.domains._domainId.settings-Dh-xuADq.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/View-BKLv7N-T.js",
				"/assets/ServiceHeader-DlqKRX7Q.js"
			]
		},
		"/_public/projects/$projectId/auth/oauth2-server/apps": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.oauth2-server.apps.tsx",
			"parent": "/_public/projects/$projectId/auth/oauth2-server",
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.oauth2-server.apps-Dp1ie4K8.js"]
		},
		"/_public/projects/$projectId/auth/oauth2-server/settings": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.oauth2-server.settings.tsx",
			"parent": "/_public/projects/$projectId/auth/oauth2-server",
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.oauth2-server.settings-DUybg3OU.js"]
		},
		"/_public/projects/$projectId/auth/policies/emails": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.policies.emails.tsx",
			"parent": "/_public/projects/$projectId/auth/policies",
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.policies.emails-D_qYz11-.js"]
		},
		"/_public/projects/$projectId/auth/policies/memberships": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.policies.memberships.tsx",
			"parent": "/_public/projects/$projectId/auth/policies",
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.policies.memberships-pkk9xhfw.js"]
		},
		"/_public/projects/$projectId/auth/policies/passwords": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.policies.passwords.tsx",
			"parent": "/_public/projects/$projectId/auth/policies",
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.policies.passwords-ggRQ-1eh.js"]
		},
		"/_public/projects/$projectId/auth/policies/sessions": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.policies.sessions.tsx",
			"parent": "/_public/projects/$projectId/auth/policies",
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.policies.sessions-BmvlyQYH.js"]
		},
		"/_public/projects/$projectId/auth/policies/users": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.policies.users.tsx",
			"parent": "/_public/projects/$projectId/auth/policies",
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.policies.users-CntUnAKc.js"]
		},
		"/_public/projects/$projectId/auth/teams/$teamId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.teams.$teamId.tsx",
			"parent": "/_public/projects/$projectId/auth/teams",
			"children": ["/_public/projects/$projectId/auth/teams/$teamId/activity", "/_public/projects/$projectId/auth/teams/$teamId/members"],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.auth.teams._teamId-9umRIRH2.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/View-Bvm-NfBE.js",
				"/assets/MembershipUpdateDrawer-Bv3yK3WZ.js"
			]
		},
		"/_public/projects/$projectId/auth/users/$userId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.users.$userId.tsx",
			"parent": "/_public/projects/$projectId/auth",
			"children": [
				"/_public/projects/$projectId/auth/users/$userId/activity",
				"/_public/projects/$projectId/auth/users/$userId/identities",
				"/_public/projects/$projectId/auth/users/$userId/memberships",
				"/_public/projects/$projectId/auth/users/$userId/sessions",
				"/_public/projects/$projectId/auth/users/$userId/targets"
			],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.auth.users._userId-CKxzoH0H.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/MembershipUpdateDrawer-Bv3yK3WZ.js",
				"/assets/View-BFHNpORU.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.tsx",
			"parent": "/_public/projects/$projectId/databases",
			"children": [
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/$tableId",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/backups",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/browser",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/db-security",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/export-import",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/monitor",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/security",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/settings",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/visualizer",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/overview/"
			],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId-CtSZS-zc.js",
				"/assets/DatabaseOperationsLockContext-c6AoSqMw.js",
				"/assets/useRedirectIfDedicatedDatabaseProvisioning-tFe-RaXE.js",
				"/assets/resource-status-labels-Bgw93kqt.js"
			]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.tsx",
			"parent": "/_public/projects/$projectId/databases",
			"children": [
				"/_public/projects/$projectId/databases/mysql/$databaseId/backups",
				"/_public/projects/$projectId/databases/mysql/$databaseId/connect",
				"/_public/projects/$projectId/databases/mysql/$databaseId/connections",
				"/_public/projects/$projectId/databases/mysql/$databaseId/monitor",
				"/_public/projects/$projectId/databases/mysql/$databaseId/roles",
				"/_public/projects/$projectId/databases/mysql/$databaseId/settings",
				"/_public/projects/$projectId/databases/mysql/$databaseId/sql",
				"/_public/projects/$projectId/databases/mysql/$databaseId/visualizer",
				"/_public/projects/$projectId/databases/mysql/$databaseId/",
				"/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId"
			],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.mysql._databaseId-Bs6rNV-t.js",
				"/assets/alert-dialog-CU9wQJGk.js",
				"/assets/cable-BJgDdO3P.js",
				"/assets/circle-question-mark-D4FIUSU5.js",
				"/assets/rows-3-BWWlAVAO.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/DatabaseOperationsLockContext-c6AoSqMw.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/useRedirectIfDedicatedDatabaseProvisioning-tFe-RaXE.js",
				"/assets/NativeSidebarDatabaseBar-DWQY5kR0.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/MysqlIndexAlgorithmSelector-B8iN4aZz.js",
				"/assets/MysqlDatabaseHeaderSlotContext-BXwMTlfl.js",
				"/assets/MysqlSegmentedToggle-C6VJYkRI.js",
				"/assets/MysqlSidebarContext-DYrInDBn.js",
				"/assets/mysql-chrome-CiEmS3V9.js",
				"/assets/mysql-spreadsheet-chrome-C0Sh0vd6.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/resource-status-labels-Bgw93kqt.js",
				"/assets/mysql-index-metadata-BXyrJVPY.js",
				"/assets/mysql-table-ddl-uB040tM7.js"
			]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.tsx",
			"parent": "/_public/projects/$projectId/databases",
			"children": [
				"/_public/projects/$projectId/databases/postgres/$databaseId/backups",
				"/_public/projects/$projectId/databases/postgres/$databaseId/connect",
				"/_public/projects/$projectId/databases/postgres/$databaseId/connections",
				"/_public/projects/$projectId/databases/postgres/$databaseId/enums",
				"/_public/projects/$projectId/databases/postgres/$databaseId/extensions",
				"/_public/projects/$projectId/databases/postgres/$databaseId/monitor",
				"/_public/projects/$projectId/databases/postgres/$databaseId/roles",
				"/_public/projects/$projectId/databases/postgres/$databaseId/settings",
				"/_public/projects/$projectId/databases/postgres/$databaseId/sql",
				"/_public/projects/$projectId/databases/postgres/$databaseId/visualizer",
				"/_public/projects/$projectId/databases/postgres/$databaseId/",
				"/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId"
			],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.postgres._databaseId-Cy-CLC64.js",
				"/assets/alert-dialog-CU9wQJGk.js",
				"/assets/cable-BJgDdO3P.js",
				"/assets/circle-question-mark-D4FIUSU5.js",
				"/assets/list-ordered-DOFUSOOY.js",
				"/assets/rows-3-BWWlAVAO.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/DatabaseOperationsLockContext-c6AoSqMw.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/useRedirectIfDedicatedDatabaseProvisioning-tFe-RaXE.js",
				"/assets/NativeSidebarDatabaseBar-DWQY5kR0.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/PostgresIndexAlgorithmSelector-By74dfRV.js",
				"/assets/PostgresDatabaseHeaderSlotContext-RNaS0gEX.js",
				"/assets/PostgresSegmentedToggle-Vc50VbYP.js",
				"/assets/PostgresSidebarContext-D_0TcvPC.js",
				"/assets/postgres-chrome-NJpYfnAc.js",
				"/assets/postgres-spreadsheet-chrome-Cf8LKl4J.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/resource-status-labels-Bgw93kqt.js",
				"/assets/postgres-index-metadata-Ds2bPlHT.js",
				"/assets/postgres-table-ddl-CLPOaNlE.js"
			]
		},
		"/_public/projects/$projectId/functions/$functionId/domains": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.$functionId.domains.tsx",
			"parent": "/_public/projects/$projectId/functions/$functionId",
			"children": ["/_public/projects/$projectId/functions/$functionId/domains/add", "/_public/projects/$projectId/functions/$functionId/domains/"],
			"assets": [],
			"preloads": ["/assets/projects._projectId.functions._functionId.domains-CcsoB23G.js"]
		},
		"/_public/projects/$projectId/functions/$functionId/executions": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.$functionId.executions.tsx",
			"parent": "/_public/projects/$projectId/functions/$functionId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions._functionId.executions-Ue70gL57.js",
				"/assets/scroll-area-BAv_Fw8-.js",
				"/assets/Executions-BmoZDuBL.js",
				"/assets/FixWithAgentDropdown-CFM75QyO.js"
			]
		},
		"/_public/projects/$projectId/functions/$functionId/security": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.$functionId.security.tsx",
			"parent": "/_public/projects/$projectId/functions/$functionId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions._functionId.security-ChJlVclI.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/PermissionsEditor-bEX_z69O.js"
			]
		},
		"/_public/projects/$projectId/functions/$functionId/settings": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.$functionId.settings.tsx",
			"parent": "/_public/projects/$projectId/functions/$functionId",
			"children": [
				"/_public/projects/$projectId/functions/$functionId/settings/build",
				"/_public/projects/$projectId/functions/$functionId/settings/danger-zone",
				"/_public/projects/$projectId/functions/$functionId/settings/executions",
				"/_public/projects/$projectId/functions/$functionId/settings/git",
				"/_public/projects/$projectId/functions/$functionId/settings/runtime",
				"/_public/projects/$projectId/functions/$functionId/settings/"
			],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions._functionId.settings-BxWhqWbZ.js",
				"/assets/hammer-Vyvp8x95.js",
				"/assets/ProjectResourceSettingsShell-B9w7B_Em.js"
			]
		},
		"/_public/projects/$projectId/functions/$functionId/variables": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.$functionId.variables.tsx",
			"parent": "/_public/projects/$projectId/functions/$functionId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.functions._functionId.variables-CRDxl3Xc.js", "/assets/VariablesSettingsCard-DHW1AGjw.js"]
		},
		"/_public/projects/$projectId/functions/create/deploy": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.create.deploy.tsx",
			"parent": "/_public/projects/$projectId/functions/create",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions.create.deploy-yApyOIPA.js",
				"/assets/DomainInput-DrHDnhpX.js",
				"/assets/VariablesSettingsCard-DHW1AGjw.js",
				"/assets/FunctionDomainCard-D4etSPKT.js"
			]
		},
		"/_public/projects/$projectId/functions/create/deploying": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.create.deploying.tsx",
			"parent": "/_public/projects/$projectId/functions/create",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions.create.deploying-CKm9M8WT.js",
				"/assets/BuildLogsCard-BuoGQwEn.js",
				"/assets/BuildLogsView-DkKLjYRC.js",
				"/assets/DeploymentInfo-C6WAVE9u.js",
				"/assets/url-Du2_iWj5.js"
			]
		},
		"/_public/projects/$projectId/functions/create/manual": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.create.manual.tsx",
			"parent": "/_public/projects/$projectId/functions/create",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions.create.manual-DPflpxNL.js",
				"/assets/DomainInput-DrHDnhpX.js",
				"/assets/VariablesSettingsCard-DHW1AGjw.js",
				"/assets/FunctionDomainCard-D4etSPKT.js"
			]
		},
		"/_public/projects/$projectId/messaging/$messageId/settings": {
			"filePath": "/app/src/routes/_public/projects.$projectId.messaging.$messageId.settings.tsx",
			"parent": "/_public/projects/$projectId/messaging/$messageId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.messaging._messageId.settings-DrYG-awr.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/View-DS9RTKde.js",
				"/assets/StorageFilePreviewThumb-FTozrYGC.js",
				"/assets/MessagingTargetsModal-Dv5xT4oS.js",
				"/assets/ServiceHeader-DlqKRX7Q.js"
			]
		},
		"/_public/projects/$projectId/messaging/providers/$providerId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.messaging.providers.$providerId.tsx",
			"parent": "/_public/projects/$projectId/messaging",
			"children": [
				"/_public/projects/$projectId/messaging/providers/$providerId/activity",
				"/_public/projects/$projectId/messaging/providers/$providerId/settings",
				"/_public/projects/$projectId/messaging/providers/$providerId/"
			],
			"assets": [],
			"preloads": ["/assets/projects._projectId.messaging.providers._providerId-CDUI_HGR.js"]
		},
		"/_public/projects/$projectId/messaging/providers/create": {
			"filePath": "/app/src/routes/_public/projects.$projectId.messaging.providers.create.tsx",
			"parent": "/_public/projects/$projectId/messaging"
		},
		"/_public/projects/$projectId/messaging/topics/$topicId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.messaging.topics.$topicId.tsx",
			"parent": "/_public/projects/$projectId/messaging",
			"children": [
				"/_public/projects/$projectId/messaging/topics/$topicId/activity",
				"/_public/projects/$projectId/messaging/topics/$topicId/settings",
				"/_public/projects/$projectId/messaging/topics/$topicId/"
			],
			"assets": [],
			"preloads": ["/assets/projects._projectId.messaging.topics._topicId-Bdbj5XeW.js"]
		},
		"/_public/projects/$projectId/settings/domains/add": {
			"filePath": "/app/src/routes/_public/projects.$projectId.settings.domains.add.tsx",
			"parent": "/_public/projects/$projectId/settings/domains",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.settings.domains.add-D7xPOFJU.js",
				"/assets/proxy-domains-DK3yA_MR.js",
				"/assets/VerifyDomainContent-DnpSzuOK.js"
			]
		},
		"/_public/projects/$projectId/settings/migrations/import": {
			"filePath": "/app/src/routes/_public/projects.$projectId.settings.migrations.import.tsx",
			"parent": "/_public/projects/$projectId/settings/migrations",
			"assets": [],
			"preloads": ["/assets/projects._projectId.settings.migrations.import-B6AKnuEH.js"]
		},
		"/_public/projects/$projectId/sites/$siteId/deployments": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.$siteId.deployments.tsx",
			"parent": "/_public/projects/$projectId/sites/$siteId",
			"children": ["/_public/projects/$projectId/sites/$siteId/deployments/$deploymentId", "/_public/projects/$projectId/sites/$siteId/deployments/"],
			"assets": [],
			"preloads": ["/assets/projects._projectId.sites._siteId.deployments-aujBiBhb.js"]
		},
		"/_public/projects/$projectId/sites/$siteId/domains": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.$siteId.domains.tsx",
			"parent": "/_public/projects/$projectId/sites/$siteId",
			"children": ["/_public/projects/$projectId/sites/$siteId/domains/add", "/_public/projects/$projectId/sites/$siteId/domains/"],
			"assets": [],
			"preloads": ["/assets/projects._projectId.sites._siteId.domains-DQm3N4Ql.js"]
		},
		"/_public/projects/$projectId/sites/$siteId/logs": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.$siteId.logs.tsx",
			"parent": "/_public/projects/$projectId/sites/$siteId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites._siteId.logs-BlvFM-iG.js",
				"/assets/scroll-area-BAv_Fw8-.js",
				"/assets/Executions-BmoZDuBL.js",
				"/assets/FixWithAgentDropdown-CFM75QyO.js"
			]
		},
		"/_public/projects/$projectId/sites/$siteId/settings": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.$siteId.settings.tsx",
			"parent": "/_public/projects/$projectId/sites/$siteId",
			"children": [
				"/_public/projects/$projectId/sites/$siteId/settings/build",
				"/_public/projects/$projectId/sites/$siteId/settings/danger-zone",
				"/_public/projects/$projectId/sites/$siteId/settings/git",
				"/_public/projects/$projectId/sites/$siteId/settings/runtime",
				"/_public/projects/$projectId/sites/$siteId/settings/"
			],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites._siteId.settings-Ck2887N-.js",
				"/assets/hammer-Vyvp8x95.js",
				"/assets/ProjectResourceSettingsShell-B9w7B_Em.js"
			]
		},
		"/_public/projects/$projectId/sites/$siteId/usage": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.$siteId.usage.tsx",
			"parent": "/_public/projects/$projectId/sites/$siteId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites._siteId.usage-DRVSFdkw.js",
				"/assets/GbHoursUnitInfo-Cktrflt4.js",
				"/assets/ComputeUsageSection-CQUISqhA.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/use-usage-chart-filters-ClBZWx5w.js"
			]
		},
		"/_public/projects/$projectId/sites/$siteId/variables": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.$siteId.variables.tsx",
			"parent": "/_public/projects/$projectId/sites/$siteId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.sites._siteId.variables-CdWVvolx.js", "/assets/VariablesSettingsCard-DHW1AGjw.js"]
		},
		"/_public/projects/$projectId/sites/create/deploy": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.create.deploy.tsx",
			"parent": "/_public/projects/$projectId/sites/create",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites.create.deploy-DM-xV7rb.js",
				"/assets/DomainInput-DrHDnhpX.js",
				"/assets/VariablesSettingsCard-DHW1AGjw.js",
				"/assets/BuildSettings-CcK7dwUv.js",
				"/assets/DomainInput-aKh5cCZX.js"
			]
		},
		"/_public/projects/$projectId/sites/create/deploying": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.create.deploying.tsx",
			"parent": "/_public/projects/$projectId/sites/create",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites.create.deploying-Dsj37rTj.js",
				"/assets/BuildLogsCard-BuoGQwEn.js",
				"/assets/BuildLogsView-DkKLjYRC.js",
				"/assets/DeploymentInfo-C6WAVE9u.js",
				"/assets/url-Du2_iWj5.js",
				"/assets/deployment-screenshots-DzNA_V6z.js",
				"/assets/screenshot-preview-sizes-BnekkyBQ.js"
			]
		},
		"/_public/projects/$projectId/sites/create/finish": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.create.finish.tsx",
			"parent": "/_public/projects/$projectId/sites/create",
			"assets": [],
			"preloads": ["/assets/projects._projectId.sites.create.finish-BQGlErOc.js"]
		},
		"/_public/projects/$projectId/sites/create/manual": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.create.manual.tsx",
			"parent": "/_public/projects/$projectId/sites/create",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites.create.manual-CI6J8mBu.js",
				"/assets/layout-template-C39Jxm-2.js",
				"/assets/DomainInput-DrHDnhpX.js",
				"/assets/VariablesSettingsCard-DHW1AGjw.js",
				"/assets/BuildSettings-CcK7dwUv.js",
				"/assets/DomainInput-aKh5cCZX.js"
			]
		},
		"/_public/projects/$projectId/storage/$bucketId/security": {
			"filePath": "/app/src/routes/_public/projects.$projectId.storage.$bucketId.security.tsx",
			"parent": "/_public/projects/$projectId/storage/$bucketId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.storage._bucketId.security-CrwnQI1S.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/View-D1a9-Yky.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/StorageFilePreviewThumb-FTozrYGC.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js"
			]
		},
		"/_public/projects/$projectId/storage/$bucketId/settings": {
			"filePath": "/app/src/routes/_public/projects.$projectId.storage.$bucketId.settings.tsx",
			"parent": "/_public/projects/$projectId/storage/$bucketId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.storage._bucketId.settings-BUN_tgBX.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/View-D1a9-Yky.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/StorageFilePreviewThumb-FTozrYGC.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js"
			]
		},
		"/_public/projects/$projectId/usage/$categoryId/$metricId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.usage.$categoryId.$metricId.tsx",
			"parent": "/_public/projects/$projectId/usage/$categoryId"
		},
		"/_public/organizations/$orgId/agent/automations/": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.agent.automations.index.tsx",
			"parent": "/_public/organizations/$orgId/agent/automations",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.agent.automations.index-CboJOi5o.js"]
		},
		"/_public/organizations/$orgId/agent/settings/": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.agent.settings.index.tsx",
			"parent": "/_public/organizations/$orgId/agent/settings"
		},
		"/_public/organizations/$orgId/apps/$appId/": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.apps.$appId.index.tsx",
			"parent": "/_public/organizations/$orgId/apps/$appId",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.apps._appId.index-B-d5g0eA.js", "/assets/useOrgAppUpdate-B4uwthVw.js"]
		},
		"/_public/organizations/$orgId/domains/$domainId/": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.domains.$domainId.index.tsx",
			"parent": "/_public/organizations/$orgId/domains/$domainId",
			"assets": [],
			"preloads": [
				"/assets/organizations._orgId.domains._domainId.index-Ci9MBrrf.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/View-BKLv7N-T.js",
				"/assets/ServiceHeader-DlqKRX7Q.js"
			]
		},
		"/_public/organizations/$orgId/marketplace/$appId/": {
			"filePath": "/app/src/routes/_public/organizations.$orgId.marketplace.$appId.index.tsx",
			"parent": "/_public/organizations/$orgId/marketplace",
			"assets": [],
			"preloads": ["/assets/organizations._orgId.marketplace._appId.index-DabKol2i.js"]
		},
		"/_public/projects/$projectId/functions/$functionId/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.$functionId.index.tsx",
			"parent": "/_public/projects/$projectId/functions/$functionId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions._functionId.index-BichnHub.js",
				"/assets/circle-question-mark-D4FIUSU5.js",
				"/assets/circle-x-BHwQQ0fF.js",
				"/assets/git-commit-horizontal-gNs7fE_n.js",
				"/assets/scroll-text-B-ybGU5M.js",
				"/assets/proxy-domains-DK3yA_MR.js",
				"/assets/DeploymentListRowContextMenu-Ci0Prr_m.js",
				"/assets/url-Du2_iWj5.js",
				"/assets/deployment-repository-url-Ck0Heg2_.js"
			]
		},
		"/_public/projects/$projectId/functions/create/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.create.index.tsx",
			"parent": "/_public/projects/$projectId/functions/create",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions.create.index-CEGrG5Ya.js",
				"/assets/layout-template-C39Jxm-2.js",
				"/assets/CreateWizardColumns-5xkz44Gn.js",
				"/assets/use-installation-reconnect-CGvarikS.js",
				"/assets/WarningAlert-DNzxfNNg.js"
			]
		},
		"/_public/projects/$projectId/messaging/$messageId/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.messaging.$messageId.index.tsx",
			"parent": "/_public/projects/$projectId/messaging/$messageId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.messaging._messageId.index-BRWRTE0l.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/View-DS9RTKde.js",
				"/assets/StorageFilePreviewThumb-FTozrYGC.js",
				"/assets/MessagingTargetsModal-Dv5xT4oS.js",
				"/assets/ServiceHeader-DlqKRX7Q.js"
			]
		},
		"/_public/projects/$projectId/messaging/providers/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.messaging.providers.index.tsx",
			"parent": "/_public/projects/$projectId/messaging",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.messaging.providers.index-lP2fay8r.js",
				"/assets/MessagingProviderIcon-AeDCxrsb.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/View-CANlVQ1N.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/resource-status-labels-Bgw93kqt.js"
			]
		},
		"/_public/projects/$projectId/messaging/topics/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.messaging.topics.index.tsx",
			"parent": "/_public/projects/$projectId/messaging",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.messaging.topics.index-Bo_Djw1m.js",
				"/assets/MessagingProviderIcon-AeDCxrsb.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/View-CANlVQ1N.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/resource-status-labels-Bgw93kqt.js"
			]
		},
		"/_public/projects/$projectId/settings/domains/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.settings.domains.index.tsx",
			"parent": "/_public/projects/$projectId/settings/domains",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.settings.domains.index-BvOZnEaP.js",
				"/assets/proxy-domains-DK3yA_MR.js",
				"/assets/BuildLogsCard-BuoGQwEn.js",
				"/assets/BuildLogsView-DkKLjYRC.js",
				"/assets/EventEditor-zMKTfXm3.js",
				"/assets/EventResourceIdSelector-DceoGnvp.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/VariablesSettingsCard-DHW1AGjw.js",
				"/assets/View-L-bM4h_0.js",
				"/assets/ProxyRuleContextMenu-DQBBiMgX.js",
				"/assets/VerifyDomainContent-DnpSzuOK.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/input-tags-DAy5yWAO.js",
				"/assets/use-scroll-to-card-B-sk318q.js"
			]
		},
		"/_public/projects/$projectId/settings/migrations/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.settings.migrations.index.tsx",
			"parent": "/_public/projects/$projectId/settings/migrations",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.settings.migrations.index-BLZIxnxf.js",
				"/assets/proxy-domains-DK3yA_MR.js",
				"/assets/BuildLogsCard-BuoGQwEn.js",
				"/assets/BuildLogsView-DkKLjYRC.js",
				"/assets/EventEditor-zMKTfXm3.js",
				"/assets/EventResourceIdSelector-DceoGnvp.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/VariablesSettingsCard-DHW1AGjw.js",
				"/assets/View-L-bM4h_0.js",
				"/assets/ProxyRuleContextMenu-DQBBiMgX.js",
				"/assets/VerifyDomainContent-DnpSzuOK.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/input-tags-DAy5yWAO.js",
				"/assets/use-scroll-to-card-B-sk318q.js"
			]
		},
		"/_public/projects/$projectId/sites/$siteId/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.$siteId.index.tsx",
			"parent": "/_public/projects/$projectId/sites/$siteId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites._siteId.index-wSeqJzR2.js",
				"/assets/proxy-domains-DK3yA_MR.js",
				"/assets/DeploymentListRowContextMenu-Ci0Prr_m.js",
				"/assets/Deployments-Byxqq9tG.js"
			]
		},
		"/_public/projects/$projectId/sites/create/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.create.index.tsx",
			"parent": "/_public/projects/$projectId/sites/create",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites.create.index-9baebsZI.js",
				"/assets/CreateWizardColumns-5xkz44Gn.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/use-installation-reconnect-CGvarikS.js",
				"/assets/WarningAlert-DNzxfNNg.js",
				"/assets/SiteTemplateGallery-BW7rLx5w.js"
			]
		},
		"/_public/projects/$projectId/storage/$bucketId/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.storage.$bucketId.index.tsx",
			"parent": "/_public/projects/$projectId/storage/$bucketId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.storage._bucketId.index-DCkXtoUo.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/View-D1a9-Yky.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/StorageFilePreviewThumb-FTozrYGC.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/View-D3Qrg4QD.js",
				"/assets/files-documents-layout-DzGNHKCL.js"
			]
		},
		"/_public/projects/$projectId/stores/$appId/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.stores.$appId.index.tsx",
			"parent": "/_public/projects/$projectId/stores",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.stores._appId.index-BLfKQKmz.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/platform-Drn0Kt8_.js"
			]
		},
		"/_public/projects/$projectId/auth/teams/$teamId/activity": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.teams.$teamId.activity.tsx",
			"parent": "/_public/projects/$projectId/auth/teams/$teamId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.teams._teamId.activity-rU4A0zld.js"]
		},
		"/_public/projects/$projectId/auth/teams/$teamId/members": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.teams.$teamId.members.tsx",
			"parent": "/_public/projects/$projectId/auth/teams/$teamId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.teams._teamId.members-BmQu3Nxo.js"]
		},
		"/_public/projects/$projectId/auth/users/$userId/activity": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.users.$userId.activity.tsx",
			"parent": "/_public/projects/$projectId/auth/users/$userId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.users._userId.activity-IgWxzg1o.js"]
		},
		"/_public/projects/$projectId/auth/users/$userId/identities": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.users.$userId.identities.tsx",
			"parent": "/_public/projects/$projectId/auth/users/$userId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.users._userId.identities-x4BKwzMc.js"]
		},
		"/_public/projects/$projectId/auth/users/$userId/memberships": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.users.$userId.memberships.tsx",
			"parent": "/_public/projects/$projectId/auth/users/$userId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.users._userId.memberships-D2-QhY3o.js"]
		},
		"/_public/projects/$projectId/auth/users/$userId/sessions": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.users.$userId.sessions.tsx",
			"parent": "/_public/projects/$projectId/auth/users/$userId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.users._userId.sessions-BTYjO5EW.js"]
		},
		"/_public/projects/$projectId/auth/users/$userId/targets": {
			"filePath": "/app/src/routes/_public/projects.$projectId.auth.users.$userId.targets.tsx",
			"parent": "/_public/projects/$projectId/auth/users/$userId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.auth.users._userId.targets-lAEweUzf.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/$tableId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.$tableId.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId"
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/backups": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.backups.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.backups-DWkeMwwT.js",
				"/assets/View-CNsySQq4.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/MessageDirectionIcon-BIBRARvM.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js",
				"/assets/UsageBreakdownDrawer-BarOQhFl.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/card-BWTX5GGH.js",
				"/assets/database-console-labels-Cv6LZ0JX.js",
				"/assets/scramble-sensitive-text-B85ZBLrk.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/browser": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.browser.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId"
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.collections.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId",
			"children": ["/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId"],
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases._dbKind._databaseId.collections-CCYDGJTm.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/db-security": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.db-security.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId"
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/export-import": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.export-import.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.export-import-bL_66jQa.js",
				"/assets/View-CNsySQq4.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/MessageDirectionIcon-BIBRARvM.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js",
				"/assets/UsageBreakdownDrawer-BarOQhFl.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/card-BWTX5GGH.js",
				"/assets/database-console-labels-Cv6LZ0JX.js",
				"/assets/scramble-sensitive-text-B85ZBLrk.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/monitor": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.monitor.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.monitor-DwKgezkB.js",
				"/assets/View-CNsySQq4.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/MessageDirectionIcon-BIBRARvM.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js",
				"/assets/UsageBreakdownDrawer-BarOQhFl.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/card-BWTX5GGH.js",
				"/assets/database-console-labels-Cv6LZ0JX.js",
				"/assets/scramble-sensitive-text-B85ZBLrk.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/security": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.security.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId"
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/settings": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.settings.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId",
			"children": [
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/settings/replication",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/settings/security",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/settings/specification",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/settings/"
			],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.settings-Bx6q7vt5.js",
				"/assets/View-CNsySQq4.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/MessageDirectionIcon-BIBRARvM.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js",
				"/assets/UsageBreakdownDrawer-BarOQhFl.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/card-BWTX5GGH.js",
				"/assets/database-console-labels-Cv6LZ0JX.js",
				"/assets/scramble-sensitive-text-B85ZBLrk.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.tables.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId",
			"children": ["/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId"],
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases._dbKind._databaseId.tables-0Uc9WJ8R.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/visualizer": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.visualizer.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.visualizer-gixtb81G.js",
				"/assets/View-CNsySQq4.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/MessageDirectionIcon-BIBRARvM.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js",
				"/assets/UsageBreakdownDrawer-BarOQhFl.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/card-BWTX5GGH.js",
				"/assets/database-console-labels-Cv6LZ0JX.js",
				"/assets/scramble-sensitive-text-B85ZBLrk.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/backups": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.backups.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.mysql._databaseId.backups-Bk3RlsyP.js",
				"/assets/formatDistanceToNow-cJmiQq6U.js",
				"/assets/circle-dashed-Bdwta1At.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/card-BWTX5GGH.js"
			]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/connect": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.connect.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId"
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/connections": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.connections.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.mysql._databaseId.connections-muD_8mB-.js",
				"/assets/circle-stop-BmUPPWMe.js",
				"/assets/file-json-xVstgmtc.js",
				"/assets/layout-list-DqSGudZm.js",
				"/assets/unplug-Bznham4S.js"
			]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/monitor": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.monitor.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.mysql._databaseId.monitor-BfcKW0Ob.js",
				"/assets/formatDistanceToNow-cJmiQq6U.js",
				"/assets/heart-pulse-dYdTKSRi.js",
				"/assets/memory-stick-D5fCUFc6.js",
				"/assets/scan-line-DhoFxO0x.js",
				"/assets/ReferenceLine-CG1AslbT.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js"
			]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/roles": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.roles.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases.mysql._databaseId.roles-DxdE9vYy.js", "/assets/spreadsheet-sticky-BNnYpryn.js"]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/settings": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.settings.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId",
			"children": [
				"/_public/projects/$projectId/databases/mysql/$databaseId/settings/compute",
				"/_public/projects/$projectId/databases/mysql/$databaseId/settings/maintenance",
				"/_public/projects/$projectId/databases/mysql/$databaseId/settings/network",
				"/_public/projects/$projectId/databases/mysql/$databaseId/settings/pitr",
				"/_public/projects/$projectId/databases/mysql/$databaseId/settings/replication",
				"/_public/projects/$projectId/databases/mysql/$databaseId/settings/storage",
				"/_public/projects/$projectId/databases/mysql/$databaseId/settings/"
			],
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases.mysql._databaseId.settings-6qaPqOX7.js", "/assets/calendar-clock-BTxVcidk.js"]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/sql": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.sql.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.mysql._databaseId.sql-CWvUeZTF.js",
				"/assets/file-json-xVstgmtc.js",
				"/assets/ReadOnlyDataSpreadsheet-xqiQN-0c.js",
				"/assets/MysqlTableRowsEmptyState-36IJ-Rkr.js"
			]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/visualizer": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.visualizer.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.mysql._databaseId.visualizer-BUm6H4zq.js",
				"/assets/map-M5yo_f59.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/schema-visualizer-graph-layout-DlZdDsbD.js",
				"/assets/column-icons-k_BDJ0zq.js"
			]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/backups": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.backups.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.postgres._databaseId.backups-CuLxpd1S.js",
				"/assets/formatDistanceToNow-cJmiQq6U.js",
				"/assets/circle-dashed-Bdwta1At.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/card-BWTX5GGH.js"
			]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/connect": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.connect.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId"
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/connections": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.connections.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.postgres._databaseId.connections-wfHlwOGs.js",
				"/assets/circle-stop-BmUPPWMe.js",
				"/assets/file-json-xVstgmtc.js",
				"/assets/layout-list-DqSGudZm.js",
				"/assets/unplug-Bznham4S.js"
			]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/enums": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.enums.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.postgres._databaseId.enums-3Y7n92z4.js",
				"/assets/file-json-xVstgmtc.js",
				"/assets/spreadsheet-sticky-BNnYpryn.js"
			]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/extensions": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.extensions.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId"
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/monitor": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.monitor.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.postgres._databaseId.monitor-CBS6I0sI.js",
				"/assets/formatDistanceToNow-cJmiQq6U.js",
				"/assets/heart-pulse-dYdTKSRi.js",
				"/assets/memory-stick-D5fCUFc6.js",
				"/assets/scan-line-DhoFxO0x.js",
				"/assets/ReferenceLine-CG1AslbT.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js"
			]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/roles": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.roles.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases.postgres._databaseId.roles-DjFDttYR.js", "/assets/spreadsheet-sticky-BNnYpryn.js"]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/settings": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.settings.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId",
			"children": [
				"/_public/projects/$projectId/databases/postgres/$databaseId/settings/compute",
				"/_public/projects/$projectId/databases/postgres/$databaseId/settings/extensions",
				"/_public/projects/$projectId/databases/postgres/$databaseId/settings/maintenance",
				"/_public/projects/$projectId/databases/postgres/$databaseId/settings/network",
				"/_public/projects/$projectId/databases/postgres/$databaseId/settings/pitr",
				"/_public/projects/$projectId/databases/postgres/$databaseId/settings/replication",
				"/_public/projects/$projectId/databases/postgres/$databaseId/settings/storage",
				"/_public/projects/$projectId/databases/postgres/$databaseId/settings/"
			],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.postgres._databaseId.settings-B9liXQR7.js",
				"/assets/calendar-clock-BTxVcidk.js",
				"/assets/puzzle-BzMtSx0_.js"
			]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/sql": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.sql.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.postgres._databaseId.sql-Cg1AZQ6Q.js",
				"/assets/file-json-xVstgmtc.js",
				"/assets/ReadOnlyDataSpreadsheet-xqiQN-0c.js",
				"/assets/PostgresTableRowsEmptyState-DZgEpmSd.js"
			]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/visualizer": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.visualizer.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.postgres._databaseId.visualizer-DuTaSpbd.js",
				"/assets/map-M5yo_f59.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/schema-visualizer-graph-layout-DlZdDsbD.js",
				"/assets/column-icons-k_BDJ0zq.js"
			]
		},
		"/_public/projects/$projectId/functions/$functionId/domains/add": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.$functionId.domains.add.tsx",
			"parent": "/_public/projects/$projectId/functions/$functionId/domains",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions._functionId.domains.add-DgZXqqtH.js",
				"/assets/proxy-domains-DK3yA_MR.js",
				"/assets/VerifyDomainContent-DnpSzuOK.js",
				"/assets/DomainTargetCard-CCjlC50E.js"
			]
		},
		"/_public/projects/$projectId/functions/$functionId/settings/build": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.$functionId.settings.build.tsx",
			"parent": "/_public/projects/$projectId/functions/$functionId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions._functionId.settings.build-DjvmmxtX.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/BuildTriggersCard-Crzb9Mpz.js",
				"/assets/SpecificationTableCard-CRtBirDV.js",
				"/assets/input-tags-DAy5yWAO.js"
			]
		},
		"/_public/projects/$projectId/functions/$functionId/settings/danger-zone": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.$functionId.settings.danger-zone.tsx",
			"parent": "/_public/projects/$projectId/functions/$functionId/settings"
		},
		"/_public/projects/$projectId/functions/$functionId/settings/executions": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.$functionId.settings.executions.tsx",
			"parent": "/_public/projects/$projectId/functions/$functionId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions._functionId.settings.executions-uIhH1rtU.js",
				"/assets/EventEditor-zMKTfXm3.js",
				"/assets/EventResourceIdSelector-DceoGnvp.js",
				"/assets/SettingsCardsList-aFxgkNpo.js"
			]
		},
		"/_public/projects/$projectId/functions/$functionId/settings/git": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.$functionId.settings.git.tsx",
			"parent": "/_public/projects/$projectId/functions/$functionId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions._functionId.settings.git-DnjJCIsR.js",
				"/assets/RootDirectoryPicker-Dtrpp-T-.js",
				"/assets/SettingsCardsList-aFxgkNpo.js"
			]
		},
		"/_public/projects/$projectId/functions/$functionId/settings/runtime": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.$functionId.settings.runtime.tsx",
			"parent": "/_public/projects/$projectId/functions/$functionId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions._functionId.settings.runtime-Cf77174s.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/SpecificationTableCard-CRtBirDV.js"
			]
		},
		"/_public/projects/$projectId/functions/create/repository/$repository": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.create.repository.$repository.tsx",
			"parent": "/_public/projects/$projectId/functions/create",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions.create.repository._repository-D1GpJwe9.js",
				"/assets/BranchSelector-VxMz1VVe.js",
				"/assets/DomainInput-DrHDnhpX.js",
				"/assets/RootDirectoryPicker-Dtrpp-T-.js",
				"/assets/VariablesSettingsCard-DHW1AGjw.js",
				"/assets/use-installation-reconnect-CGvarikS.js",
				"/assets/WarningAlert-DNzxfNNg.js",
				"/assets/FunctionDomainCard-D4etSPKT.js"
			]
		},
		"/_public/projects/$projectId/functions/create/template/$templateId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.create.template.$templateId.tsx",
			"parent": "/_public/projects/$projectId/functions/create",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions.create.template._templateId-Bgq5pq7J.js",
				"/assets/BranchSelector-VxMz1VVe.js",
				"/assets/ConnectRepositorySection-BvkEI-Ok.js",
				"/assets/DomainInput-DrHDnhpX.js",
				"/assets/RepositoryPicker-DgUnPiCr.js",
				"/assets/RootDirectoryPicker-Dtrpp-T-.js",
				"/assets/VariablesSettingsCard-DHW1AGjw.js",
				"/assets/use-installation-reconnect-CGvarikS.js",
				"/assets/WarningAlert-DNzxfNNg.js",
				"/assets/FunctionDomainCard-D4etSPKT.js"
			]
		},
		"/_public/projects/$projectId/messaging/providers/$providerId/activity": {
			"filePath": "/app/src/routes/_public/projects.$projectId.messaging.providers.$providerId.activity.tsx",
			"parent": "/_public/projects/$projectId/messaging/providers/$providerId"
		},
		"/_public/projects/$projectId/messaging/providers/$providerId/settings": {
			"filePath": "/app/src/routes/_public/projects.$projectId.messaging.providers.$providerId.settings.tsx",
			"parent": "/_public/projects/$projectId/messaging/providers/$providerId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.messaging.providers._providerId.settings-tJ9Z8WoH.js",
				"/assets/MessagingProviderIcon-AeDCxrsb.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/View-CBaiAa_u.js",
				"/assets/ServiceHeader-DlqKRX7Q.js"
			]
		},
		"/_public/projects/$projectId/messaging/topics/$topicId/activity": {
			"filePath": "/app/src/routes/_public/projects.$projectId.messaging.topics.$topicId.activity.tsx",
			"parent": "/_public/projects/$projectId/messaging/topics/$topicId"
		},
		"/_public/projects/$projectId/messaging/topics/$topicId/settings": {
			"filePath": "/app/src/routes/_public/projects.$projectId.messaging.topics.$topicId.settings.tsx",
			"parent": "/_public/projects/$projectId/messaging/topics/$topicId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.messaging.topics._topicId.settings-mT-eMB_K.js",
				"/assets/hash-Bxnr-edP.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/ServiceHeader-DlqKRX7Q.js"
			]
		},
		"/_public/projects/$projectId/sites/$siteId/deployments/$deploymentId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.$siteId.deployments.$deploymentId.tsx",
			"parent": "/_public/projects/$projectId/sites/$siteId/deployments",
			"children": ["/_public/projects/$projectId/sites/$siteId/deployments/$deploymentId/"],
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites._siteId.deployments._deploymentId-EqqhzU4S.js",
				"/assets/drawer-wujZceMS.js",
				"/assets/BuildLogsView-DkKLjYRC.js",
				"/assets/DeploymentDetailView-CnD4Tlyy.js",
				"/assets/FixWithAgentDropdown-CFM75QyO.js",
				"/assets/View-CsiDoe39.js"
			]
		},
		"/_public/projects/$projectId/sites/$siteId/domains/add": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.$siteId.domains.add.tsx",
			"parent": "/_public/projects/$projectId/sites/$siteId/domains",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites._siteId.domains.add-BoCNs9f7.js",
				"/assets/proxy-domains-DK3yA_MR.js",
				"/assets/VerifyDomainContent-DnpSzuOK.js",
				"/assets/DomainTargetCard-CCjlC50E.js"
			]
		},
		"/_public/projects/$projectId/sites/$siteId/settings/build": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.$siteId.settings.build.tsx",
			"parent": "/_public/projects/$projectId/sites/$siteId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites._siteId.settings.build-DV27_WzF.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/BuildTriggersCard-Crzb9Mpz.js",
				"/assets/SpecificationTableCard-CRtBirDV.js",
				"/assets/input-tags-DAy5yWAO.js",
				"/assets/adapter-defaults-BGWxkfw_.js"
			]
		},
		"/_public/projects/$projectId/sites/$siteId/settings/danger-zone": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.$siteId.settings.danger-zone.tsx",
			"parent": "/_public/projects/$projectId/sites/$siteId/settings"
		},
		"/_public/projects/$projectId/sites/$siteId/settings/git": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.$siteId.settings.git.tsx",
			"parent": "/_public/projects/$projectId/sites/$siteId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites._siteId.settings.git-BlaLYExE.js",
				"/assets/RootDirectoryPicker-Dtrpp-T-.js",
				"/assets/SettingsCardsList-aFxgkNpo.js"
			]
		},
		"/_public/projects/$projectId/sites/$siteId/settings/runtime": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.$siteId.settings.runtime.tsx",
			"parent": "/_public/projects/$projectId/sites/$siteId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites._siteId.settings.runtime-BUOQoY_Q.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/SpecificationTableCard-CRtBirDV.js"
			]
		},
		"/_public/projects/$projectId/sites/create/templates/$template": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.create.templates.$template.tsx",
			"parent": "/_public/projects/$projectId/sites/create",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites.create.templates._template-CHHnpX-l.js",
				"/assets/layout-template-C39Jxm-2.js",
				"/assets/BranchSelector-VxMz1VVe.js",
				"/assets/ConnectRepositorySection-BvkEI-Ok.js",
				"/assets/DomainInput-DrHDnhpX.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/RepositoryPicker-DgUnPiCr.js",
				"/assets/RootDirectoryPicker-Dtrpp-T-.js",
				"/assets/use-installation-reconnect-CGvarikS.js",
				"/assets/WarningAlert-DNzxfNNg.js",
				"/assets/DomainInput-aKh5cCZX.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.index.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId"
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.index.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId"
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.index.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId"
		},
		"/_public/projects/$projectId/functions/$functionId/domains/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.$functionId.domains.index.tsx",
			"parent": "/_public/projects/$projectId/functions/$functionId/domains",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions._functionId.domains.index-CAL9DD1T.js",
				"/assets/proxy-domains-DK3yA_MR.js",
				"/assets/BuildLogsCard-BuoGQwEn.js",
				"/assets/BuildLogsView-DkKLjYRC.js",
				"/assets/ProxyRuleContextMenu-DQBBiMgX.js",
				"/assets/VerifyDomainContent-DnpSzuOK.js",
				"/assets/url-Du2_iWj5.js"
			]
		},
		"/_public/projects/$projectId/functions/$functionId/settings/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.$functionId.settings.index.tsx",
			"parent": "/_public/projects/$projectId/functions/$functionId/settings",
			"assets": [],
			"preloads": ["/assets/projects._projectId.functions._functionId.settings.index-Srdel8EF.js", "/assets/SettingsCardsList-aFxgkNpo.js"]
		},
		"/_public/projects/$projectId/messaging/providers/$providerId/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.messaging.providers.$providerId.index.tsx",
			"parent": "/_public/projects/$projectId/messaging/providers/$providerId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.messaging.providers._providerId.index-CoxppcEz.js",
				"/assets/MessagingProviderIcon-AeDCxrsb.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/View-CBaiAa_u.js",
				"/assets/ServiceHeader-DlqKRX7Q.js"
			]
		},
		"/_public/projects/$projectId/messaging/topics/$topicId/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.messaging.topics.$topicId.index.tsx",
			"parent": "/_public/projects/$projectId/messaging/topics/$topicId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.messaging.topics._topicId.index-CNJ4vjqN.js",
				"/assets/alert-dialog-CU9wQJGk.js",
				"/assets/hash-Bxnr-edP.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/MessagingTargetsModal-Dv5xT4oS.js",
				"/assets/ServiceHeader-DlqKRX7Q.js"
			]
		},
		"/_public/projects/$projectId/sites/$siteId/deployments/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.$siteId.deployments.index.tsx",
			"parent": "/_public/projects/$projectId/sites/$siteId/deployments",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites._siteId.deployments.index-BNJyT84P.js",
				"/assets/proxy-domains-DK3yA_MR.js",
				"/assets/DeploymentListRowContextMenu-Ci0Prr_m.js",
				"/assets/Deployments-Byxqq9tG.js"
			]
		},
		"/_public/projects/$projectId/sites/$siteId/domains/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.$siteId.domains.index.tsx",
			"parent": "/_public/projects/$projectId/sites/$siteId/domains",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites._siteId.domains.index-CMm0fzHE.js",
				"/assets/proxy-domains-DK3yA_MR.js",
				"/assets/BuildLogsCard-BuoGQwEn.js",
				"/assets/BuildLogsView-DkKLjYRC.js",
				"/assets/ProxyRuleContextMenu-DQBBiMgX.js",
				"/assets/VerifyDomainContent-DnpSzuOK.js",
				"/assets/url-Du2_iWj5.js"
			]
		},
		"/_public/projects/$projectId/sites/$siteId/settings/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.$siteId.settings.index.tsx",
			"parent": "/_public/projects/$projectId/sites/$siteId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites._siteId.settings.index-DS8PyX8i.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/SettingsCardsList-aFxgkNpo.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.collections.$collectionId.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/collections",
			"children": [
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/backups",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/columns",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/db-security",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/db-settings",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/documents",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/export-import",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/indexes",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/json",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/monitor",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/security",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/settings",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/visualizer",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/"
			],
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases._dbKind._databaseId.collections._collectionId-CqEbnyQ8.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/settings/replication": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.settings.replication.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.settings.replication-CJcQTqOM.js",
				"/assets/alert-dialog-CU9wQJGk.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/PostgresDatabaseConfigSettings-DTq78Qlo.js",
				"/assets/PostgresDatabasePrimaryCard-EU8XPkb0.js",
				"/assets/useDatabaseSettingsPage-Cy1jlgG2.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/settings/security": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.settings.security.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.settings.security-CY5cbd14.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/useDatabaseSettingsPage-Cy1jlgG2.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/settings/specification": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.settings.specification.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.settings.specification-UC1cgVU_.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/useDatabaseSettingsPage-Cy1jlgG2.js",
				"/assets/use-scroll-to-card-B-sk318q.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.tables.$tableId.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/tables",
			"children": [
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/backups",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/columns",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/db-security",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/db-settings",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/documents",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/export-import",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/indexes",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/monitor",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/rows",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/security",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/settings",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/visualizer",
				"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/"
			],
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases._dbKind._databaseId.tables._tableId-CmSIrYbh.js"]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/settings/compute": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.settings.compute.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.mysql._databaseId.settings.compute-rtrGf6rA.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/MysqlDatabaseGeneralSettings-CW4L5Rcz.js",
				"/assets/MysqlSettingsLoading-B21i9aU0.js",
				"/assets/use-scroll-to-card-B-sk318q.js"
			]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/settings/maintenance": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.settings.maintenance.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.mysql._databaseId.settings.maintenance-CcTtzprz.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/MysqlSettingsLoading-B21i9aU0.js"
			]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/settings/network": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.settings.network.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.mysql._databaseId.settings.network-C7K__ZmC.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/MysqlDatabaseConfigSettings-DONRL6qy.js",
				"/assets/MysqlSettingsLoading-B21i9aU0.js"
			]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/settings/pitr": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.settings.pitr.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.mysql._databaseId.settings.pitr-DGDUfAAQ.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/MysqlDatabaseConfigSettings-DONRL6qy.js",
				"/assets/MysqlSettingsLoading-B21i9aU0.js"
			]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/settings/replication": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.settings.replication.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.mysql._databaseId.settings.replication-D1m619Cf.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/MysqlDatabaseConfigSettings-DONRL6qy.js",
				"/assets/MysqlSettingsLoading-B21i9aU0.js"
			]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/settings/storage": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.settings.storage.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.mysql._databaseId.settings.storage-DXyp-_qd.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/MysqlDatabaseConfigSettings-DONRL6qy.js",
				"/assets/MysqlSettingsLoading-B21i9aU0.js"
			]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.tables.$tableId.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId",
			"children": [
				"/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId/columns",
				"/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId/indexes",
				"/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId/rows",
				"/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId/security",
				"/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId/settings"
			],
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases.mysql._databaseId.tables._tableId-CwJpo0O5.js", "/assets/MysqlTableHeaderSlotContext-DOBlkoRQ.js"]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/settings/compute": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.settings.compute.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.postgres._databaseId.settings.compute-BUBf2_4E.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/PostgresDatabaseGeneralSettings-DZfFF0JW.js",
				"/assets/PostgresSettingsLoading-BuZL_yWq.js",
				"/assets/use-scroll-to-card-B-sk318q.js"
			]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/settings/extensions": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.settings.extensions.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId/settings",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases.postgres._databaseId.settings.extensions-B0fApob5.js", "/assets/PostgresSettingsLoading-BuZL_yWq.js"]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/settings/maintenance": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.settings.maintenance.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.postgres._databaseId.settings.maintenance-BsSCRmQs.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/PostgresSettingsLoading-BuZL_yWq.js"
			]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/settings/network": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.settings.network.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.postgres._databaseId.settings.network-CBirsm5v.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/PostgresDatabaseConfigSettings-DTq78Qlo.js",
				"/assets/PostgresSettingsLoading-BuZL_yWq.js"
			]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/settings/pitr": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.settings.pitr.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.postgres._databaseId.settings.pitr-SNRXCY4e.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/PostgresDatabaseConfigSettings-DTq78Qlo.js",
				"/assets/PostgresSettingsLoading-BuZL_yWq.js"
			]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/settings/replication": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.settings.replication.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.postgres._databaseId.settings.replication-BVRLMPHT.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/PostgresDatabaseConfigSettings-DTq78Qlo.js",
				"/assets/PostgresDatabasePrimaryCard-EU8XPkb0.js",
				"/assets/PostgresSettingsLoading-BuZL_yWq.js"
			]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/settings/storage": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.settings.storage.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.postgres._databaseId.settings.storage-DU1gTUih.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/PostgresDatabaseConfigSettings-DTq78Qlo.js",
				"/assets/PostgresSettingsLoading-BuZL_yWq.js"
			]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.tables.$tableId.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId",
			"children": [
				"/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId/columns",
				"/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId/indexes",
				"/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId/rows",
				"/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId/security",
				"/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId/settings"
			],
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases.postgres._databaseId.tables._tableId-LU2FOBjk.js", "/assets/PostgresTableHeaderSlotContext-w6w97MTq.js"]
		},
		"/_public/projects/$projectId/sites/create/repositories/$installationId/$repositoryId": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.create.repositories.$installationId.$repositoryId.tsx",
			"parent": "/_public/projects/$projectId/sites/create",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.sites.create.repositories._installationId._repositoryId-BP1k-YIc.js",
				"/assets/BranchSelector-VxMz1VVe.js",
				"/assets/DomainInput-DrHDnhpX.js",
				"/assets/RootDirectoryPicker-Dtrpp-T-.js",
				"/assets/VariablesSettingsCard-DHW1AGjw.js",
				"/assets/use-installation-reconnect-CGvarikS.js",
				"/assets/WarningAlert-DNzxfNNg.js",
				"/assets/BuildSettings-CcK7dwUv.js",
				"/assets/DomainInput-aKh5cCZX.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/overview/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.overview.index.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases._dbKind._databaseId.overview.index-Dw_00x_T.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/settings/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.settings.index.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.settings.index-B7BRh6xo.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/useDatabaseSettingsPage-Cy1jlgG2.js"
			]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/settings/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.settings.index.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.mysql._databaseId.settings.index-Bw53dgf6.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/MysqlDatabaseGeneralSettings-CW4L5Rcz.js",
				"/assets/MysqlSettingsLoading-B21i9aU0.js"
			]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/settings/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.settings.index.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId/settings",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.postgres._databaseId.settings.index-BLelOHGv.js",
				"/assets/SettingsCardsList-aFxgkNpo.js",
				"/assets/PostgresDatabaseGeneralSettings-DZfFF0JW.js",
				"/assets/PostgresSettingsLoading-BuZL_yWq.js"
			]
		},
		"/_public/projects/$projectId/functions/$functionId/deployments/$deploymentId/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.functions.$functionId.deployments.$deploymentId.index.tsx",
			"parent": "/_public/projects/$projectId/functions/$functionId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.functions._functionId.deployments._deploymentId.index-NtpJaHAN.js",
				"/assets/drawer-wujZceMS.js",
				"/assets/BuildLogsView-DkKLjYRC.js",
				"/assets/DeploymentDetailView-CnD4Tlyy.js",
				"/assets/FixWithAgentDropdown-CFM75QyO.js"
			]
		},
		"/_public/projects/$projectId/sites/$siteId/deployments/$deploymentId/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.sites.$siteId.deployments.$deploymentId.index.tsx",
			"parent": "/_public/projects/$projectId/sites/$siteId/deployments/$deploymentId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.sites._siteId.deployments._deploymentId.index-1g8fsCio.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/backups": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.collections.$collectionId.backups.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases._dbKind._databaseId.collections._collectionId.backups-C2FTz101.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/columns": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.collections.$collectionId.columns.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.collections._collectionId.columns-pTRAS5LO.js",
				"/assets/View-CNsySQq4.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/MessageDirectionIcon-BIBRARvM.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js",
				"/assets/UsageBreakdownDrawer-BarOQhFl.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/card-BWTX5GGH.js",
				"/assets/database-console-labels-Cv6LZ0JX.js",
				"/assets/scramble-sensitive-text-B85ZBLrk.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/db-security": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.collections.$collectionId.db-security.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases._dbKind._databaseId.collections._collectionId.db-security-f31ZDiSZ.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/db-settings": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.collections.$collectionId.db-settings.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases._dbKind._databaseId.collections._collectionId.db-settings-BHetQSCU.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/documents": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.collections.$collectionId.documents.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.collections._collectionId.documents-C2p6XxNg.js",
				"/assets/View-CNsySQq4.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/MessageDirectionIcon-BIBRARvM.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js",
				"/assets/UsageBreakdownDrawer-BarOQhFl.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/card-BWTX5GGH.js",
				"/assets/database-console-labels-Cv6LZ0JX.js",
				"/assets/scramble-sensitive-text-B85ZBLrk.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/export-import": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.collections.$collectionId.export-import.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases._dbKind._databaseId.collections._collectionId.export-import-B622wE10.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/indexes": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.collections.$collectionId.indexes.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.collections._collectionId.indexes-Y6UeL0o3.js",
				"/assets/View-CNsySQq4.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/MessageDirectionIcon-BIBRARvM.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js",
				"/assets/UsageBreakdownDrawer-BarOQhFl.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/card-BWTX5GGH.js",
				"/assets/database-console-labels-Cv6LZ0JX.js",
				"/assets/scramble-sensitive-text-B85ZBLrk.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/json": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.collections.$collectionId.json.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases._dbKind._databaseId.collections._collectionId.json-BAvIuf2D.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/monitor": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.collections.$collectionId.monitor.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases._dbKind._databaseId.collections._collectionId.monitor-Cvr6ip6h.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/security": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.collections.$collectionId.security.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.collections._collectionId.security-DrpMd_fx.js",
				"/assets/View-CNsySQq4.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/MessageDirectionIcon-BIBRARvM.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js",
				"/assets/UsageBreakdownDrawer-BarOQhFl.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/card-BWTX5GGH.js",
				"/assets/database-console-labels-Cv6LZ0JX.js",
				"/assets/scramble-sensitive-text-B85ZBLrk.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/settings": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.collections.$collectionId.settings.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.collections._collectionId.settings-8aR3p9Qp.js",
				"/assets/View-CNsySQq4.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/MessageDirectionIcon-BIBRARvM.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js",
				"/assets/UsageBreakdownDrawer-BarOQhFl.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/card-BWTX5GGH.js",
				"/assets/database-console-labels-Cv6LZ0JX.js",
				"/assets/scramble-sensitive-text-B85ZBLrk.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/visualizer": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.collections.$collectionId.visualizer.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases._dbKind._databaseId.collections._collectionId.visualizer-B3PNKUsS.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/backups": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.tables.$tableId.backups.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases._dbKind._databaseId.tables._tableId.backups-Lovp0f7v.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/columns": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.tables.$tableId.columns.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.tables._tableId.columns-BVEj0Y5R.js",
				"/assets/View-CNsySQq4.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/MessageDirectionIcon-BIBRARvM.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js",
				"/assets/UsageBreakdownDrawer-BarOQhFl.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/card-BWTX5GGH.js",
				"/assets/database-console-labels-Cv6LZ0JX.js",
				"/assets/scramble-sensitive-text-B85ZBLrk.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/db-security": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.tables.$tableId.db-security.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases._dbKind._databaseId.tables._tableId.db-security-RiOLOeay.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/db-settings": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.tables.$tableId.db-settings.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases._dbKind._databaseId.tables._tableId.db-settings-D3jeThTl.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/documents": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.tables.$tableId.documents.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.tables._tableId.documents-bLscAFMP.js",
				"/assets/View-CNsySQq4.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/MessageDirectionIcon-BIBRARvM.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js",
				"/assets/UsageBreakdownDrawer-BarOQhFl.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/card-BWTX5GGH.js",
				"/assets/database-console-labels-Cv6LZ0JX.js",
				"/assets/scramble-sensitive-text-B85ZBLrk.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/export-import": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.tables.$tableId.export-import.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases._dbKind._databaseId.tables._tableId.export-import-lbkK64lM.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/indexes": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.tables.$tableId.indexes.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.tables._tableId.indexes-P01uYgJO.js",
				"/assets/View-CNsySQq4.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/MessageDirectionIcon-BIBRARvM.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js",
				"/assets/UsageBreakdownDrawer-BarOQhFl.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/card-BWTX5GGH.js",
				"/assets/database-console-labels-Cv6LZ0JX.js",
				"/assets/scramble-sensitive-text-B85ZBLrk.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/monitor": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.tables.$tableId.monitor.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases._dbKind._databaseId.tables._tableId.monitor-PfMxM4u7.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/rows": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.tables.$tableId.rows.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.tables._tableId.rows-BxoZ5UfI.js",
				"/assets/View-CNsySQq4.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/MessageDirectionIcon-BIBRARvM.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js",
				"/assets/UsageBreakdownDrawer-BarOQhFl.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/card-BWTX5GGH.js",
				"/assets/database-console-labels-Cv6LZ0JX.js",
				"/assets/scramble-sensitive-text-B85ZBLrk.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/security": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.tables.$tableId.security.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.tables._tableId.security-DlrABACE.js",
				"/assets/View-CNsySQq4.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/MessageDirectionIcon-BIBRARvM.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js",
				"/assets/UsageBreakdownDrawer-BarOQhFl.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/card-BWTX5GGH.js",
				"/assets/database-console-labels-Cv6LZ0JX.js",
				"/assets/scramble-sensitive-text-B85ZBLrk.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/settings": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.tables.$tableId.settings.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases._dbKind._databaseId.tables._tableId.settings-BoHL7OCN.js",
				"/assets/View-CNsySQq4.js",
				"/assets/avatar-BHEw_B11.js",
				"/assets/ConfirmNameDialog-Dd2d3cpu.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/RefreshButton-Du1-Lmp6.js",
				"/assets/ResourceTitleSwitcher-BxK4yHaD.js",
				"/assets/useViewportPanZoom-BtciAdba.js",
				"/assets/SchemaVisualizerRelationshipEdges-BppSZ5-6.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PermissionsEditor-bEX_z69O.js",
				"/assets/DatabaseClusterPreview-CTK1_2z5.js",
				"/assets/DatabaseMonitorNodeSelect-kZaNC2i0.js",
				"/assets/navigate-to-database-switcher-DfOZBQ-n.js",
				"/assets/TableViewResizableLayout-DNy68Dwz.js",
				"/assets/MessageDirectionIcon-BIBRARvM.js",
				"/assets/PlanLimitWarning-D7FmN2-2.js",
				"/assets/ServiceHeader-DlqKRX7Q.js",
				"/assets/files-documents-layout-DzGNHKCL.js",
				"/assets/UsageBreakdownDrawer-BarOQhFl.js",
				"/assets/UsageResourceBreakdownCard-7R_jZpYw.js",
				"/assets/card-BWTX5GGH.js",
				"/assets/database-console-labels-Cv6LZ0JX.js",
				"/assets/scramble-sensitive-text-B85ZBLrk.js",
				"/assets/database-schema-export-D8HCjnuO.js"
			]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/visualizer": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.tables.$tableId.visualizer.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases._dbKind._databaseId.tables._tableId.visualizer-Bmx2VUcy.js"]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId/columns": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.tables.$tableId.columns.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases.mysql._databaseId.tables._tableId.columns-BVD7A26i.js", "/assets/TableStructureView-DeU7MNCk.js"]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId/indexes": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.tables.$tableId.indexes.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases.mysql._databaseId.tables._tableId.indexes-4ULuA-Wt.js", "/assets/TableStructureView-DeU7MNCk.js"]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId/rows": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.tables.$tableId.rows.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.mysql._databaseId.tables._tableId.rows-Icd5Nlcx.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/MysqlTableRowsEmptyState-36IJ-Rkr.js",
				"/assets/spreadsheet-sticky-BNnYpryn.js",
				"/assets/spreadsheet-cell-formatting-CV7AUIah.js",
				"/assets/column-icons-k_BDJ0zq.js"
			]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId/security": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.tables.$tableId.security.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases.mysql._databaseId.tables._tableId.security-D0LW5D_0.js"]
		},
		"/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId/settings": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.mysql.$databaseId.tables.$tableId.settings.tsx",
			"parent": "/_public/projects/$projectId/databases/mysql/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases.mysql._databaseId.tables._tableId.settings-CCEfMqFu.js", "/assets/TableStructureView-DeU7MNCk.js"]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId/columns": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.tables.$tableId.columns.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases.postgres._databaseId.tables._tableId.columns-Bx_OaeB-.js", "/assets/TableStructureView-BQuPqmfO.js"]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId/indexes": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.tables.$tableId.indexes.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases.postgres._databaseId.tables._tableId.indexes-CdA4eMuU.js", "/assets/TableStructureView-BQuPqmfO.js"]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId/rows": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.tables.$tableId.rows.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": [
				"/assets/projects._projectId.databases.postgres._databaseId.tables._tableId.rows-68q9J9PJ.js",
				"/assets/FiltersPopover-Cl84090V.js",
				"/assets/ToolbarCountBadge-tVgblUI6.js",
				"/assets/PostgresTableRowsEmptyState-DZgEpmSd.js",
				"/assets/spreadsheet-sticky-BNnYpryn.js",
				"/assets/spreadsheet-cell-formatting-CV7AUIah.js",
				"/assets/column-icons-k_BDJ0zq.js"
			]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId/security": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.tables.$tableId.security.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases.postgres._databaseId.tables._tableId.security-9XyvL0wH.js"]
		},
		"/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId/settings": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.postgres.$databaseId.tables.$tableId.settings.tsx",
			"parent": "/_public/projects/$projectId/databases/postgres/$databaseId/tables/$tableId",
			"assets": [],
			"preloads": ["/assets/projects._projectId.databases.postgres._databaseId.tables._tableId.settings-DlsNCCbx.js", "/assets/TableStructureView-BQuPqmfO.js"]
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.collections.$collectionId.index.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/collections/$collectionId"
		},
		"/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId/": {
			"filePath": "/app/src/routes/_public/projects.$projectId.databases.$dbKind.$databaseId.tables.$tableId.index.tsx",
			"parent": "/_public/projects/$projectId/databases/$dbKind/$databaseId/tables/$tableId"
		}
	},
	"clientEntry": "/assets/main-uHRHOkhm.js"
});
export { tsrStartManifest };
