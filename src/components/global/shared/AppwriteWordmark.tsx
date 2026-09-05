import { cn } from '@/lib/utils'
import { useIsLegacyTheme } from '@/hooks/use-is-legacy-theme'
import { LegacyAppwriteLogo } from '@/components/global/shared/LegacyAppwriteBrand'

/**
 * Full "Appwrite" wordmark for loaders; word uses --foreground, mark uses --brand-cta
 * (aligned with header logo + theme tokens on light/dark/system and debug themes).
 */
export function AppwriteWordmark({
  className,
  'aria-label': ariaLabel = 'Logo',
}: {
  className?: string
  'aria-label'?: string
}) {
  return (
    <img
      src="/cropped-logo5.png"
      alt={ariaLabel}
      className={cn('h-6 w-auto shrink-0 object-contain', className)}
    />
  )
}
