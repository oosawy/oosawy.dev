import { Heart } from 'lucide-react'
import { type ReactNode } from 'react'
import { cn } from '~/lib/utils'

type ArticleCardProps = {
  emoji: ReactNode
  title: string
  href: string
  date?: string
  likes?: number
}

export default function ZennArticleCard(props: ArticleCardProps) {
  return (
    <div
      className={cn(
        'grid grid-rows-[auto,max-content] relative w-full bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow',
        'in-data-article-subgrid:grid-rows-subgrid in-data-article-subgrid:row-span-2 in-data-article-subgrid:gap-0'
      )}
    >
      {/* Header Section */}
      <div className="bg-[#cfe5ff] p-4 min-h-16 flex flex-col items-center justify-center relative">
        <div className="absolute top-3 left-2 px-1 py-1/3 sm:px-2 sm:py-1 rounded-full bg-[#3ea8ff] text-white text-[10px] sm:text-xs font-semibold">
          ARTICLE
        </div>

        <div
          className={cn(
            'text-[32px]',
            'in-data-article-subgrid:text-[48px] in-data-article-subgrid:m-2'
          )}
        >
          {props.emoji}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-2 p-2 sm:p-4 bg-white">
        <a
          href={props.href}
          target="_blank"
          className="text-gray-800 font-semibold text-card-title leading-relaxed after:absolute after:inset-0"
        >
          {props.title}
        </a>

        <div className="grow"></div>

        {/* Footer */}
        <div className="flex items-center gap-3">
          {props.date && (
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>{props.date}</span>
            </div>
          )}

          {props.likes && (
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <Heart className="w-3.5 h-3.5" />
              <span>{props.likes}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
