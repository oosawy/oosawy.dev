import { Heart } from 'lucide-react'
import { type ReactNode } from 'react'

type ArticleCardProps = {
  emoji: ReactNode
  title: string
  href: string
  date?: string
  likes?: number
}

export default function ZennArticleCard(props: ArticleCardProps) {
  return (
    <div className="flex flex-col relative w-full h-full bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Header Section */}
      <div className="grow bg-[#cfe5ff] p-4 flex justify-center items-center min-h-16 @container-[size]">
        <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-[#3ea8ff] text-white text-xs font-semibold">
          ARTICLE
        </div>

        <div className="contents text-[max(100cqh,36px)]">{props.emoji}</div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-2 px-4 py-4 bg-white">
        <a
          href={props.href}
          target="_blank"
          className="text-gray-800 font-semibold text-base leading-relaxed after:absolute after:inset-0"
        >
          {props.title}
        </a>

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
