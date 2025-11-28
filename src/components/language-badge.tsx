type LanguageInfo = {
  name: string
  color: string
}

const Languages = {
  typescript: {
    name: 'TypeScript',
    color: '#3178c6',
  },
  golang: {
    name: 'Go',
    color: '#00add8',
  },
} as const satisfies Record<string, LanguageInfo>

export type Language = keyof typeof Languages

export const LanguageBadge = ({ lang }: { lang: Language }) => (
  <div className="flex items-center gap-1">
    <span
      className="w-3 h-3 rounded-full"
      style={{ backgroundColor: Languages[lang].color }}
    ></span>
    <span className="text-sm text-muted-foreground">
      {Languages[lang].name}
    </span>
  </div>
)
