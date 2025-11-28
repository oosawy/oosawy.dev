import { type ReactNode } from 'react'
import { LanguageBadge } from '../language-badge'

export function HolaCard() {
  return (
    <div className="flex flex-col relative w-full h-full bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
      {/* Header Section */}
      <div className="bg-neutral-700 text-white font-mono p-4 flex justify-center min-h-16 @container">
        <div className="text-[min(8cqw,20px)] whitespace-pre">
          {`> hola query\n  _http._tcp._local `}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 p-3 bg-white">
        <div className="flex flex-col">
            <a
              href={'https://github.com/oosawy/hola'}
              target="_blank"
              className="text-gray-800 font-semibold text-card-title after:absolute after:inset-0"
            >
              hola
            </a>

          <span className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-none">
            yet another mdns querier
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-1 md:gap-2 flex-wrap">
          <TagChip>CLI</TagChip>
          <TagChip>Network</TagChip>
          <TagChip>mDNS</TagChip>
          <div className="grow"></div>
<LanguageBadge lang="golang" />
        </div>
      </div>
    </div>
  )
}

const TagChip = ({ children }: { children: ReactNode }) => {
  return (
    <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full border border-neutral-700 text-neutral-700 text-[10px] sm:text-xs font-medium text-xs">
      {children}
    </span>
  )
}
