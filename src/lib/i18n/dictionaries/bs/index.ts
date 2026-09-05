import { bsDatabasesDictionary } from './databases'
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
