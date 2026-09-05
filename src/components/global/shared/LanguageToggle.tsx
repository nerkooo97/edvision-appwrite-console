import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useI18n } from '@/lib/i18n'
import { setDebugOverride } from '@/lib/debug-overrides'
import { useT } from '@/lib/i18n/translate'

export function LanguageToggle() {
  const t = useT()
  const { language } = useI18n()

  const handleLanguageChange = (value: string) => {
    if (!value || value === language) return
    setDebugOverride('language', value)
    if (value === 'he') {
      setDebugOverride('pageDirection', 'rtl')
    } else {
      setDebugOverride('pageDirection', 'ltr')
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('debug:language', value)
      window.location.reload()
    }
  }

  return (
    <div className="flex items-center justify-between px-2 py-2">
      <span className="text-sm text-muted-foreground">{t('Language')}</span>
      <ToggleGroup
        type="single"
        value={language === 'bs' ? 'bs' : 'en'}
        onValueChange={handleLanguageChange}
        className="rounded-lg bg-muted/50 p-0.5"
      >
        <ToggleGroupItem
          value="en"
          aria-label="English"
          className="h-7 px-2.5 text-xs font-semibold rounded-md data-[state=on]:bg-accent data-[state=on]:text-foreground"
        >
          EN
        </ToggleGroupItem>
        <ToggleGroupItem
          value="bs"
          aria-label="Bosanski"
          className="h-7 px-2.5 text-xs font-semibold rounded-md data-[state=on]:bg-accent data-[state=on]:text-foreground"
        >
          BA
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
