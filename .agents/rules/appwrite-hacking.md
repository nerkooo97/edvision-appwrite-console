---
description: Pravila za hakovanje i otključavanje Appwrite Console funkcionalnosti na lokalnom okruženju
---
# Appwrite Hacking Guide

Ovaj repozitorij ima prekinut "build" proces (`vite.config.ts` ne radi) pa se izvorni kod iz `src/` ne može lako prevesti. Umjesto toga, vršimo **nasilno otključavanje** (injection) funkcionalnosti direktno u minificiranim bundlovima u `dist/` direktoriju.

## Ključni Fajl
Glavni fajl koji modificiramo je `dist/client/assets/main-uHRHOkhm.js`.

## Šta smo otključali?
1. **Multi-tenancy (Organizacije / Timovi)**: Prepisali `multiTenancy:!1` i `orgRoles:!1` u `!0`.
2. **Cloud/Pro Mogućnosti**: `activity`, `accountMfa`, `agent`, `firewall`, `databaseBackups`, `orgApiKeys`.
3. **Zaobilaženje Billing Plan-a**: Prepravili `getPlanNameFromTier` (iz `src/lib/utils/plan-filter.ts`) da minificirana funkcija bezuslovno vraća `core` (najjaci plan) kako bi spriječili UI da nas tjera na nadogradnju.
4. **Zaobilaženje backupsEnabled**: Prepravili svako čitanje svojstva `.backupsEnabled` u `.backupsEnabled||!0`.

## Kako primijeniti izmjene?
Sve ove promjene smo sakupili u jednu TypeScript skriptu. Kada agent (ti) mora resetovati stanje ili primijeniti ponovo izmjene, treba samo pokrenuti:
```bash
bun run scripts/apply-hacks.ts
```

## Problem sa Backupovima (i nepostojećim API rutama)
Otključavanje UI funkcionalnosti **ne znači** da backend server ima API podršku. 
- Npr. Backup rute (`/v1/databases/:databaseId/backups/policies`) NE POSTOJE u open-source (self-hosted) verziji Appwrite servera.
- Zbog ovoga, kada korisnik pokuša koristiti "Manual backup" ili slično, API vraća 404 grešku.
- Zbog načina na koji React Query / Appwrite SDK radi, taj 404 se nekad prikaže kao full-page "General route not found" umjesto greške unutar same komponente. Ne možemo ovo riješiti iz UI-ja jer API ruta jednostavno ne postoji na backendu.
