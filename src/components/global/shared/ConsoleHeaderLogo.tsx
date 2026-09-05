import { useEffect, useLayoutEffect, useRef, useSyncExternalStore } from 'react'
import { cn } from '@/lib/utils'
import { useConsoleProfile } from '@/hooks/use-console-profile'
import { useIsLegacyTheme } from '@/hooks/use-is-legacy-theme'
import { LegacyAppwriteIcon } from '@/components/global/shared/LegacyAppwriteBrand'
import { CloudMarkIcon } from '@/components/global/shared/CloudMarkIcon'

let logoCloudLockedUntilPointerLeave = false
const logoCloudLockListeners = new Set<() => void>()

function emitLogoCloudLockChange() {
  logoCloudLockListeners.forEach((listener) => listener())
}

function setLogoCloudLockedUntilPointerLeave(next: boolean) {
  if (logoCloudLockedUntilPointerLeave === next) return
  logoCloudLockedUntilPointerLeave = next
  emitLogoCloudLockChange()
}

function subscribeLogoCloudLock(listener: () => void) {
  logoCloudLockListeners.add(listener)
  return () => logoCloudLockListeners.delete(listener)
}

function getLogoCloudLockSnapshot() {
  return logoCloudLockedUntilPointerLeave
}

function getLogoCloudLockServerSnapshot() {
  return false
}

/** Custom icon logo (header). */
function FilledAppwriteMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo-icon.png"
      alt="Logo"
      className={cn('h-6 w-6 shrink-0 object-contain', className)}
    />
  )
}

/**
 * Appwrite mark + pink cloud on hover (3D flip); parent header link must use Tailwind `group`.
 * Cloud profile only. After pointer down / click, the cloud stays visible until the pointer leaves
 * the link (including across SPA remounts while still over the logo). Then the idle state is
 * Appwrite again; hover still flips to cloud as usual.
 * Self-hosted shows the Appwrite mark only (no cloud flip or lock logic).
 */
export function ConsoleHeaderLogo({ className }: { className?: string }) {
  const { isCloud } = useConsoleProfile()
  const isLegacyTheme = useIsLegacyTheme()
  const rootRef = useRef<HTMLDivElement>(null)
  const cloudLockedUntilLeave = useSyncExternalStore(
    subscribeLogoCloudLock,
    getLogoCloudLockSnapshot,
    getLogoCloudLockServerSnapshot,
  )

  useEffect(() => {
    if (!isCloud) {
      setLogoCloudLockedUntilPointerLeave(false)
    }
  }, [isCloud])

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !isCloud) return
    const parent = rootRef.current?.parentElement
    if (!parent) return

    const lockCloud = () => setLogoCloudLockedUntilPointerLeave(true)
    const unlockCloud = () => setLogoCloudLockedUntilPointerLeave(false)

    parent.addEventListener('pointerdown', lockCloud)
    parent.addEventListener('click', lockCloud)
    parent.addEventListener('pointerleave', unlockCloud)
    parent.addEventListener('pointercancel', unlockCloud)
    return () => {
      parent.removeEventListener('pointerdown', lockCloud)
      parent.removeEventListener('click', lockCloud)
      parent.removeEventListener('pointerleave', unlockCloud)
      parent.removeEventListener('pointercancel', unlockCloud)
    }
  }, [isCloud])

  if (isLegacyTheme) {
    return <LegacyAppwriteIcon className={className} />
  }

  if (!isCloud) {
    return (
      <div className={cn('relative h-6 w-6 shrink-0', className)}>
        <FilledAppwriteMark />
      </div>
    )
  }

  return (
    <div ref={rootRef} className={cn('relative h-6 w-6 shrink-0 [perspective:88px]', className)}>
      <div
        className={cn(
          'absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]',
          cloudLockedUntilLeave
            ? '[transform:rotateY(180deg)] transition-none'
            : cn(
                '[transform:rotateY(0deg)] transition-transform duration-300 ease-out',
                'group-hover:[transform:rotateY(180deg)]',
                'motion-reduce:transition-none motion-reduce:group-hover:[transform:rotateY(0deg)]',
              ),
        )}
      >
        <div
          className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden]"
          style={{ transform: 'rotateY(0deg)' }}
        >
          <FilledAppwriteMark />
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center text-[var(--brand-cta)] [backface-visibility:hidden]"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <CloudMarkIcon />
        </div>
      </div>
    </div>
  )
}
