import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { isLegacyTheme, LEGACY_LOGO_SRC } from '@/lib/legacy-theme-assets'

export function AppwriteLogo({ className }: { className?: string }) {
  return (
    <img
      src="/cropped-logo5.png"
      alt="Logo"
      className={className ?? 'h-8 w-auto object-contain'}
    />
  )
}
