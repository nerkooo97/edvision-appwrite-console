import fs from "node:fs";
import { bsCatalog } from "../src/lib/i18n/messages/bs.ts";

const bsJson = JSON.stringify(bsCatalog);

// 1. Update dist/client/assets/main-uHRHOkhm.js
console.log("Updating dist/client/assets/main-uHRHOkhm.js...");
let clientJs = fs.readFileSync("dist/client/assets/main-uHRHOkhm.js", "utf8");

// Inject bsCatalog definition and update au
if (!clientJs.includes("var bsCatalogObj=")) {
  const auTarget = "var au={en:eu,he:tu,ja:nu}";
  if (!clientJs.includes(auTarget)) {
    throw new Error("Could not find auTarget in client JS");
  }
  clientJs = clientJs.replace(
    auTarget,
    `var bsCatalogObj=${bsJson};var au={en:eu,he:tu,ja:nu,bs:bsCatalogObj}`
  );
}

// Update ru function to recognize 'bs' and default to 'bs'
const ruTarget = "function ru(e){return e===`en`||e===`he`||e===`ja`?e:`en`}";
if (clientJs.includes(ruTarget)) {
  clientJs = clientJs.replace(
    ruTarget,
    "function ru(e){return e===`en`||e===`he`||e===`ja`||e===`bs`?e:`bs`}"
  );
}

// Update debug menu active label
const activeDescTarget = "_=o.language===`he`?T.activeHebrew:o.language===`ja`?T.activeJapanese:T.activeEnglish";
if (clientJs.includes(activeDescTarget)) {
  clientJs = clientJs.replace(
    activeDescTarget,
    '_=o.language===`bs`?"Bosanski":o.language===`he`?T.activeHebrew:o.language===`ja`?T.activeJapanese:T.activeEnglish'
  );
}

// Update debug menu options
const optionsTarget = "v=[{label:T.englishLabel,value:`en`,description:T.englishDescription},{label:T.hebrewLabel,value:`he`,description:T.hebrewDescription},{label:T.japaneseLabel,value:`ja`,description:T.japaneseDescription}]";
if (clientJs.includes(optionsTarget)) {
  clientJs = clientJs.replace(
    optionsTarget,
    'v=[{label:"Bosanski",value:`bs`,description:"Koristi bosanski jezik."},{label:T.englishLabel,value:`en`,description:T.englishDescription},{label:T.hebrewLabel,value:`he`,description:T.hebrewDescription},{label:T.japaneseLabel,value:`ja`,description:T.japaneseDescription}]'
  );
}

// Update debug menu click direction handler
clientJs = clientJs.replaceAll(
  "e.value===`en`||e.value===`ja`",
  "e.value===`en`||e.value===`ja`||e.value===`bs`"
);

fs.writeFileSync("dist/client/assets/main-uHRHOkhm.js", clientJs, "utf8");
console.log("dist/client/assets/main-uHRHOkhm.js updated successfully.");

// 2. Update dist/server/assets/i18n-Db4baE06.js
console.log("Updating dist/server/assets/i18n-Db4baE06.js...");
let serverI18n = fs.readFileSync("dist/server/assets/i18n-Db4baE06.js", "utf8");

if (!serverI18n.includes("const bsCatalog =")) {
  const resolveTarget = 'function resolveLanguagePreference(preference) {\n\tif (preference === "en" || preference === "he" || preference === "ja") return preference;\n\treturn "en";\n}';
  if (serverI18n.includes(resolveTarget)) {
    serverI18n = serverI18n.replace(
      resolveTarget,
      `const bsCatalog = ${bsJson};\nfunction resolveLanguagePreference(preference) {\n\tif (preference === "en" || preference === "he" || preference === "ja" || preference === "bs") return preference;\n\treturn "bs";\n}`
    );
  } else {
    console.warn("Could not find exact resolveTarget in serverI18n, trying regex...");
    serverI18n = serverI18n.replace(
      /function resolveLanguagePreference\(preference\) \{[\s\S]*?return "en";\s*\}/,
      `const bsCatalog = ${bsJson};\nfunction resolveLanguagePreference(preference) {\n\tif (preference === "en" || preference === "he" || preference === "ja" || preference === "bs") return preference;\n\treturn "bs";\n}`
    );
  }

  serverI18n = serverI18n.replace(
    "var LANGUAGE_CATALOGS = {\n\ten: enCatalog,\n\the: heCatalog,\n\tja: jaCatalog\n};",
    "var LANGUAGE_CATALOGS = {\n\ten: enCatalog,\n\the: heCatalog,\n\tja: jaCatalog,\n\tbs: bsCatalog\n};"
  );
}

fs.writeFileSync("dist/server/assets/i18n-Db4baE06.js", serverI18n, "utf8");
console.log("dist/server/assets/i18n-Db4baE06.js updated successfully.");

// 3. Update dist/server/assets/router-MhpvMcmO.js
console.log("Updating dist/server/assets/router-MhpvMcmO.js...");
let serverRouter = fs.readFileSync("dist/server/assets/router-MhpvMcmO.js", "utf8");

serverRouter = serverRouter.replace(
  'overrides.language === "he" ? languageCopy.activeHebrew : overrides.language === "ja" ? languageCopy.activeJapanese : languageCopy.activeEnglish',
  'overrides.language === "bs" ? "Bosanski" : overrides.language === "he" ? languageCopy.activeHebrew : overrides.language === "ja" ? languageCopy.activeJapanese : languageCopy.activeEnglish'
);

serverRouter = serverRouter.replace(
  'const languageOptions = [\n\t\t\t{\n\t\t\t\tlabel: languageCopy.englishLabel,',
  'const languageOptions = [\n\t\t\t{\n\t\t\t\tlabel: "Bosanski",\n\t\t\t\tvalue: "bs",\n\t\t\t\tdescription: "Koristi bosanski jezik."\n\t\t\t},\n\t\t\t{\n\t\t\t\tlabel: languageCopy.englishLabel,'
);

serverRouter = serverRouter.replaceAll(
  'option.value === "en" || option.value === "ja"',
  'option.value === "en" || option.value === "ja" || option.value === "bs"'
);

fs.writeFileSync("dist/server/assets/router-MhpvMcmO.js", serverRouter, "utf8");
console.log("dist/server/assets/router-MhpvMcmO.js updated successfully.");
console.log("ALL INJECTIONS COMPLETE!");
