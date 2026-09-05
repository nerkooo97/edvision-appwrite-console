import fs from "node:fs";

console.log("Injecting LanguageToggle into bundles...");

// 1. Client Bundle
let clientJs = fs.readFileSync("dist/client/assets/main-uHRHOkhm.js", "utf8");

const clientLangFunc = `function CustomLangToggle(){let t=Dy(),{language:e}=ou();let onChange=(val)=>{if(!val||val===e)return;Yl("language",val);if(val==="he"){Yl("pageDirection","rtl")}else{Yl("pageDirection","ltr")}if(typeof window!=="undefined"){window.localStorage.setItem("debug:language",val);window.location.reload()}};return(0,L.jsxs)("div",{className:"flex items-center justify-between px-2 py-2",children:[(0,L.jsx)("span",{className:"text-sm text-muted-foreground",children:t("Language")}),(0,L.jsxs)(rq,{type:"single",value:e==="bs"?"bs":"en",onValueChange:onChange,className:"rounded-lg bg-muted/50 p-0.5",children:[(0,L.jsx)(iq,{value:"en","aria-label":"English",className:"h-7 px-2.5 text-xs font-semibold rounded-md data-[state=on]:bg-accent data-[state=on]:text-foreground",children:"EN"}),(0,L.jsx)(iq,{value:"bs","aria-label":"Bosanski",className:"h-7 px-2.5 text-xs font-semibold rounded-md data-[state=on]:bg-accent data-[state=on]:text-foreground",children:"BA"})]})]})}`;

if (!clientJs.includes("function CustomLangToggle()")) {
  const urTarget = "function $ur({variant:e=`menu`}){let t=Dy();return e===`header`?(0,L.jsx)(`div`,{className:`shrink-0`,children:(0,L.jsx)(Qur,{})}):(0,L.jsxs)(`div`,{className:`flex items-center justify-between px-2 py-2`,children:[(0,L.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:t(`Theme`)}),(0,L.jsx)(Qur,{})]})};";
  if (clientJs.includes(urTarget)) {
    clientJs = clientJs.replace(urTarget, urTarget + clientLangFunc + ";");
    console.log("Defined CustomLangToggle in clientJs");
  } else {
    // Try without trailing semicolon
    const urTargetNoSemi = "function $ur({variant:e=`menu`}){let t=Dy();return e===`header`?(0,L.jsx)(`div`,{className:`shrink-0`,children:(0,L.jsx)(Qur,{})}):(0,L.jsxs)(`div`,{className:`flex items-center justify-between px-2 py-2`,children:[(0,L.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:t(`Theme`)}),(0,L.jsx)(Qur,{})]})}";
    clientJs = clientJs.replace(urTargetNoSemi, urTargetNoSemi + ";" + clientLangFunc);
    console.log("Defined CustomLangToggle in clientJs (no semi)");
  }

  // Inject into menu
  const menuTarget = "(0,L.jsx)($ur,{})";
  if (clientJs.includes(menuTarget)) {
    clientJs = clientJs.replace(menuTarget, "(0,L.jsx)($ur,{}),(0,L.jsx)(CustomLangToggle,{})");
    console.log("Rendered CustomLangToggle in client menu");
  }
  fs.writeFileSync("dist/client/assets/main-uHRHOkhm.js", clientJs, "utf8");
} else {
  console.log("Client bundle already contains CustomLangToggle.");
}

// 2. Server Bundle
let serverJs = fs.readFileSync("dist/server/assets/ConsoleLayout-c5WGBGep.js", "utf8");

const serverLangFunc = `
function LanguageToggle() {
	const t = useT();
	const { language } = useI18n();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between px-2 py-2",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-sm text-muted-foreground",
			children: t("Language")
		}), /* @__PURE__ */ jsxs(ToggleGroup, {
			type: "single",
			value: language === "bs" ? "bs" : "en",
			className: "rounded-lg bg-muted/50 p-0.5",
			children: [/* @__PURE__ */ jsx(ToggleGroupItem, {
				value: "en",
				"aria-label": "English",
				className: "h-7 px-2.5 text-xs font-semibold rounded-md data-[state=on]:bg-accent data-[state=on]:text-foreground",
				children: "EN"
			}), /* @__PURE__ */ jsx(ToggleGroupItem, {
				value: "bs",
				"aria-label": "Bosanski",
				className: "h-7 px-2.5 text-xs font-semibold rounded-md data-[state=on]:bg-accent data-[state=on]:text-foreground",
				children: "BA"
			})]
		})]
	});
}
`;

if (!serverJs.includes("function LanguageToggle()")) {
  const serverThemeTarget = `function ThemeToggle({ variant = "menu" }) {
	const t = useT();
	if (variant === "header") return /* @__PURE__ */ jsx("div", {
		className: "shrink-0",
		children: /* @__PURE__ */ jsx(ThemeToggleGroup, {})
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between px-2 py-2",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-sm text-muted-foreground",
			children: t("Theme")
		}), /* @__PURE__ */ jsx(ThemeToggleGroup, {})]
	});
}`;

  if (serverJs.includes(serverThemeTarget)) {
    serverJs = serverJs.replace(serverThemeTarget, serverThemeTarget + serverLangFunc);
    console.log("Defined LanguageToggle in serverJs");
  }

  const serverMenuTarget = `/* @__PURE__ */ jsx(ThemeToggle, {}),`;
  if (serverJs.includes(serverMenuTarget)) {
    serverJs = serverJs.replace(
      serverMenuTarget,
      `/* @__PURE__ */ jsx(ThemeToggle, {}),\n\t\t\t\t\t\t\t\t/* @__PURE__ */ jsx(LanguageToggle, {}),`
    );
    console.log("Rendered LanguageToggle in server menu");
  }
  fs.writeFileSync("dist/server/assets/ConsoleLayout-c5WGBGep.js", serverJs, "utf8");
} else {
  console.log("Server bundle already contains LanguageToggle.");
}

console.log("Injection completed successfully!");
