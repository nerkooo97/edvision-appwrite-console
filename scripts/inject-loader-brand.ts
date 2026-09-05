import fs from "node:fs";

console.log("Updating preloading screen brand mark in client and server bundles...");

// 1. Client Bundle
let clientJs = fs.readFileSync("dist/client/assets/main-uHRHOkhm.js", "utf8");

const msrTarget = "function Msr(){return(0,L.jsxs)(`div`,{className:J(`inline-flex items-end gap-1.5`,Lx),dir:`ltr`,children:[(0,L.jsx)(ksr,{className:`h-8`}),(0,L.jsx)(`span`,{className:`pb-0.5 text-xs font-extralight tracking-tight text-muted-foreground`,children:`/ 2.0`})]})}";

const msrReplacement = 'function Msr(){return(0,L.jsxs)(`div`,{className:J(`inline-flex items-center gap-2.5`,Lx),dir:`ltr`,children:[(0,L.jsx)("img",{src:"/logo-icon.png",alt:"Logo",className:"h-8 w-8 shrink-0 object-contain"}),(0,L.jsx)(`span`,{className:`text-2xl font-bold tracking-tight text-foreground`,children:`EDVision`})]})}';

if (clientJs.includes(msrTarget)) {
  clientJs = clientJs.replace(msrTarget, msrReplacement);
  fs.writeFileSync("dist/client/assets/main-uHRHOkhm.js", clientJs, "utf8");
  console.log("Updated LoaderBrandMark in client bundle!");
} else {
  console.warn("msrTarget not found in clientJs");
}

// 2. Server Bundle
let serverJs = fs.readFileSync("dist/server/assets/router-MhpvMcmO.js", "utf8");

const serverTarget = `function LoaderBrandMark() {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("inline-flex items-end gap-1.5", FORCE_LTR_CLASS),
		dir: "ltr",
		children: [/* @__PURE__ */ jsx(AppwriteWordmark, { className: "h-8" }), /* @__PURE__ */ jsx("span", {
			className: "pb-0.5 text-xs font-extralight tracking-tight text-muted-foreground",
			children: "/ 2.0"
		})]
	});
}`;

const serverReplacement = `function LoaderBrandMark() {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("inline-flex items-center gap-2.5", FORCE_LTR_CLASS),
		dir: "ltr",
		children: [/* @__PURE__ */ jsx("img", { src: "/logo-icon.png", alt: "Logo", className: "h-8 w-8 shrink-0 object-contain" }), /* @__PURE__ */ jsx("span", {
			className: "text-2xl font-bold tracking-tight text-foreground",
			children: "EDVision"
		})]
	});
}`;

if (serverJs.includes(serverTarget)) {
  serverJs = serverJs.replace(serverTarget, serverReplacement);
  fs.writeFileSync("dist/server/assets/router-MhpvMcmO.js", serverJs, "utf8");
  console.log("Updated LoaderBrandMark in server bundle!");
} else {
  console.warn("serverTarget not found in serverJs");
}

console.log("Done!");
