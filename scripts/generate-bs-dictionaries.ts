import fs from "node:fs";
import path from "node:path";

// Ensure destination directory exists
const targetDir = path.resolve("src/lib/i18n/dictionaries/bs");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Cache file for translations
const cacheFile = path.resolve(".translation-cache-bs.json");
let translationCache: Record<string, string> = {};
if (fs.existsSync(cacheFile)) {
  try {
    translationCache = JSON.parse(fs.readFileSync(cacheFile, "utf8"));
  } catch (e) {
    translationCache = {};
  }
}

function saveCache() {
  fs.writeFileSync(cacheFile, JSON.stringify(translationCache, null, 2), "utf8");
}

// Checks if a string shouldn't be translated (pure numbers, units, symbols, etc.)
function isTranslatable(str: string): boolean {
  const trimmed = str.trim();
  if (!trimmed) return false;
  // numbers, currencies, dashes, pure symbols
  if (/^[\d\s.,/+$%#:;—–\-_()!?*<>=]+$/.test(trimmed)) return false;
  // simple sizes like "100GB", "2TB", "512MB", "15 minutes"
  if (/^\d+\s*(GB|MB|KB|TB|B|px|rem|ms|s|m|h|mo|year|k|M|K)?\b/i.test(trimmed) && trimmed.split(" ").length <= 2) {
    return false;
  }
  return true;
}

// Function to translate a single batch
async function translateBatch(items: string[]): Promise<string[]> {
  const delimiter = "\n---DELIM---\n";
  const joined = items.join(delimiter);
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=bs&dt=t&q=${encodeURIComponent(joined)}`;
  
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const data = await res.json();
      const rawTranslated = data[0].map((x: any) => x[0]).join("");
      const split = rawTranslated.split(/---DELIM---/i).map((s: string) => s.trim());
      
      if (split.length === items.length) {
        return split;
      }
      // If delimiter splitting mismatch, translate one-by-one as fallback
      console.warn(`Batch mismatch (${split.length} vs ${items.length}), fallback to single translation`);
      break;
    } catch (err) {
      console.warn(`Attempt ${attempt + 1} failed:`, err);
      await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
    }
  }

  // Fallback: translate one by one
  const results: string[] = [];
  for (const item of items) {
    if (!isTranslatable(item)) {
      results.push(item);
      continue;
    }
    const singleUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=bs&dt=t&q=${encodeURIComponent(item)}`;
    try {
      const res = await fetch(singleUrl);
      const data = await res.json();
      results.push(data[0].map((x: any) => x[0]).join(""));
    } catch {
      results.push(item); // Fallback to original
    }
    await new Promise((r) => setTimeout(r, 50));
  }
  return results;
}

const DICTIONARY_FILES = [
  { name: "pricing", varName: "bsPricingDictionary", jaImport: "jaPricingDictionary" },
  { name: "sites", varName: "bsSitesDictionary", jaImport: "jaSitesDictionary" },
  { name: "product-pages", varName: "bsProductPagesDictionary", jaImport: "jaProductPagesDictionary" },
  { name: "functions", varName: "bsFunctionsDictionary", jaImport: "jaFunctionsDictionary" },
  { name: "shared-ui", varName: "bsSharedUiDictionary", jaImport: "jaSharedUiDictionary" },
  { name: "account-global", varName: "bsAccountGlobalDictionary", jaImport: "jaAccountGlobalDictionary" },
  { name: "organizations", varName: "bsOrganizationsDictionary", jaImport: "jaOrganizationsDictionary" },
  { name: "auth-storage", varName: "bsAuthStorageDictionary", jaImport: "jaAuthStorageDictionary" },
  { name: "marketing", varName: "bsMarketingDictionary", jaImport: "jaMarketingDictionary" },
  { name: "databases", varName: "bsDatabasesDictionary", jaImport: "jaDatabasesDictionary" },
  { name: "project-misc", varName: "bsProjectMiscDictionary", jaImport: "jaProjectMiscDictionary" },
];

async function processFile(fileConfig: typeof DICTIONARY_FILES[0]) {
  console.log(`\nProcessing ${fileConfig.name}...`);
  const jaModule = await import(path.resolve(`src/lib/i18n/dictionaries/ja/${fileConfig.name}.ts`));
  const jaDict: Record<string, string> = jaModule[fileConfig.jaImport];
  const keys = Object.keys(jaDict);
  console.log(`Found ${keys.length} keys in ${fileConfig.name}`);

  // Determine which keys need translation
  const neededKeys: string[] = [];
  for (const k of keys) {
    if (!translationCache[k]) {
      if (!isTranslatable(k)) {
        translationCache[k] = k;
      } else {
        neededKeys.push(k);
      }
    }
  }

  console.log(`Keys needing translation: ${neededKeys.length}`);

  // Batch translate
  const BATCH_SIZE = 40;
  for (let i = 0; i < neededKeys.length; i += BATCH_SIZE) {
    const batch = neededKeys.slice(i, i + BATCH_SIZE);
    const translated = await translateBatch(batch);
    for (let j = 0; j < batch.length; j++) {
      translationCache[batch[j]] = translated[j] || batch[j];
    }
    process.stdout.write(`  Translated ${Math.min(i + BATCH_SIZE, neededKeys.length)} / ${neededKeys.length}\r`);
    saveCache();
    await new Promise((r) => setTimeout(r, 150));
  }
  console.log(`\nFinished translations for ${fileConfig.name}`);

  // Construct dictionary object for this file
  const fileDict: Record<string, string> = {};
  for (const k of keys) {
    fileDict[k] = translationCache[k] ?? k;
  }

  // Generate TypeScript file
  const tsContent = `/**
 * Bosnian translations for ${fileConfig.name}.
 * Keys are the exact English source strings (English is the source of truth).
 */
export const ${fileConfig.varName}: Record<string, string> = ${JSON.stringify(fileDict, null, 2)}
`;

  const destPath = path.join(targetDir, `${fileConfig.name}.ts`);
  fs.writeFileSync(destPath, tsContent, "utf8");
  console.log(`Saved ${destPath}`);
}

async function main() {
  for (const fileConfig of DICTIONARY_FILES) {
    await processFile(fileConfig);
  }

  // Generate index.ts
  console.log("\nGenerating src/lib/i18n/dictionaries/bs/index.ts...");
  const indexTs = `import { bsDatabasesDictionary } from './databases'
import { bsSitesDictionary } from './sites'
import { bsFunctionsDictionary } from './functions'
import { bsAuthStorageDictionary } from './auth-storage'
import { bsProjectMiscDictionary } from './project-misc'
import { bsOrganizationsDictionary } from './organizations'
import { bsAccountGlobalDictionary } from './account-global'
import { bsSharedUiDictionary } from './shared-ui'
import { bsMarketingDictionary } from './marketing'
import { bsProductPagesDictionary } from './product-pages'
import { bsPricingDictionary } from './pricing'

/**
 * Merged Bosnian dictionary keyed by English source strings.
 * Later entries override earlier ones on key collisions.
 */
export const bsDictionary: Record<string, string> = {
  ...bsMarketingDictionary,
  ...bsProductPagesDictionary,
  ...bsPricingDictionary,
  ...bsSharedUiDictionary,
  ...bsAccountGlobalDictionary,
  ...bsOrganizationsDictionary,
  ...bsProjectMiscDictionary,
  ...bsAuthStorageDictionary,
  ...bsFunctionsDictionary,
  ...bsSitesDictionary,
  ...bsDatabasesDictionary,
}
`;
  fs.writeFileSync(path.join(targetDir, "index.ts"), indexTs, "utf8");
  console.log("bs/index.ts created successfully!");
}

main().catch(console.error);
