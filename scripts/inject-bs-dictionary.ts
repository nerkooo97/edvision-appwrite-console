import fs from "node:fs";
import { bsDictionary } from "../src/lib/i18n/dictionaries/bs/index.ts";

const bsJson = JSON.stringify(bsDictionary);

// 1. Update dist/client/assets/main-uHRHOkhm.js
console.log("Injecting bsDictionary into dist/client/assets/main-uHRHOkhm.js...");
let clientJs = fs.readFileSync("dist/client/assets/main-uHRHOkhm.js", "utf8");

const tbeTarget = "var Tbe={he:pbe,ja:{...Sbe,...Cbe,...wbe,...xbe,...bbe,...ybe,...vbe,..._be,...gbe,...hbe,...mbe}};";
if (clientJs.includes(tbeTarget)) {
  clientJs = clientJs.replace(
    tbeTarget,
    `var bsDictObj=${bsJson};var Tbe={he:pbe,ja:{...Sbe,...Cbe,...wbe,...xbe,...bbe,...ybe,...vbe,..._be,...gbe,...hbe,...mbe},bs:bsDictObj};`
  );
  fs.writeFileSync("dist/client/assets/main-uHRHOkhm.js", clientJs, "utf8");
  console.log("Client main-uHRHOkhm.js updated with bsDictionary!");
} else if (clientJs.includes("var bsDictObj=")) {
  console.log("Client already has bsDictObj!");
} else {
  console.warn("Could not find exact Tbe target in client JS");
}

// 2. Update dist/server/assets/translate-DZcqveGn.js
console.log("Injecting bsDictionary into dist/server/assets/translate-DZcqveGn.js...");
let serverJs = fs.readFileSync("dist/server/assets/translate-DZcqveGn.js", "utf8");

const serverTarget = `var LANGUAGE_DICTIONARIES = {\n\the: heDictionary,\n\tja: {\n\t\t...jaMarketingDictionary,\n\t\t...jaProductPagesDictionary,\n\t\t...jaPricingDictionary,\n\t\t...jaSharedUiDictionary,\n\t\t...jaAccountGlobalDictionary,\n\t\t...jaOrganizationsDictionary,\n\t\t...jaProjectMiscDictionary,\n\t\t...jaAuthStorageDictionary,\n\t\t...jaFunctionsDictionary,\n\t\t...jaSitesDictionary,\n\t\t...jaDatabasesDictionary\n\t}\n};`;

if (serverJs.includes(serverTarget)) {
  serverJs = serverJs.replace(
    serverTarget,
    `const bsDict = ${bsJson};\nvar LANGUAGE_DICTIONARIES = {\n\the: heDictionary,\n\tja: {\n\t\t...jaMarketingDictionary,\n\t\t...jaProductPagesDictionary,\n\t\t...jaPricingDictionary,\n\t\t...jaSharedUiDictionary,\n\t\t...jaAccountGlobalDictionary,\n\t\t...jaOrganizationsDictionary,\n\t\t...jaProjectMiscDictionary,\n\t\t...jaAuthStorageDictionary,\n\t\t...jaFunctionsDictionary,\n\t\t...jaSitesDictionary,\n\t\t...jaDatabasesDictionary\n\t},\n\tbs: bsDict\n};`
  );
  fs.writeFileSync("dist/server/assets/translate-DZcqveGn.js", serverJs, "utf8");
  console.log("Server translate-DZcqveGn.js updated with bsDictionary!");
} else if (serverJs.includes("const bsDict =")) {
  console.log("Server already has bsDict!");
} else {
  console.warn("Could not find exact serverTarget in server JS");
}

console.log("Done!");
