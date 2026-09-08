import fs from "node:fs";

console.log("🛠️  Započinjem injekciju promjena (HACK) u build fajlove...");

const file = "dist/client/assets/main-uHRHOkhm.js";

try {
  if (!fs.existsSync(file)) {
    console.error("Fajl ne postoji:", file);
    process.exit(1);
  }

  let content = fs.readFileSync(file, "utf8");
  const oldContent = content;

  // 1. Uključi Teams (Organizations) u navigaciji - multiTenancy
  content = content.replace(/multiTenancy:!1/g, "multiTenancy:!0");
  content = content.replace(/orgRoles:!1/g, "orgRoles:!0");

  // 2. Otključaj sve napredne opcije koje su inače skrivene za obicne korisnike
  const featuresToEnable = [
    "activity",
    "accountMfa",
    "agent",
    "firewall",
    "databaseBackups",
    "orgApiKeys"
  ];
  featuresToEnable.forEach(feature => {
    const regex = new RegExp(`${feature}:!1`, "g");
    content = content.replace(regex, `${feature}:!0`);
  });

  // 3. Zaobiđi Appwrite Cloud Billing Plan (Lažiraj Core/Scale plan tako da nema "Potrebna je nadogradnja" upozorenja)
  const target1 = "let e=parseInt(t[1],10);return e===0?`free`:e===1?`pro`:e===2?`core`:`custom`}";
  const replace1 = "let e=parseInt(t[1],10);return `core`}";
  const target2 = "if(e===`0`||e.toLowerCase()===`tier-0`)return`free`;if(e===`1`||e.toLowerCase()===`tier-1`)return`pro`;if(e===`2`||e.toLowerCase()===`tier-2`)return`core`;";
  const replace2 = "if(e===`0`||e.toLowerCase()===`tier-0`)return`core`;if(e===`1`||e.toLowerCase()===`tier-1`)return`core`;if(e===`2`||e.toLowerCase()===`tier-2`)return`core`;";
  
  content = content.replace(target1, replace1);
  content = content.replace(target2, replace2);
  content = content.replace(/return typeof e==`number`\?e===0\?`free`:e===1\?`pro`:e===2\?`core`:`custom`:`free`/g, "return `core`");

  // 4. Zaobiđi backupsEnabled check
  content = content.replace(/\.backupsEnabled/g, ".backupsEnabled||!0");

  if (content !== oldContent) {
    fs.writeFileSync(file, content, "utf8");
    console.log("✅ Uspješno ubrizgane promjene u:", file);
  } else {
    console.log("⚠️ Nema promjena (možda su već primijenjene).");
  }
} catch (err) {
  console.error("❌ Greška:", err);
}
