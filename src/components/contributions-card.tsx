import { BookMarkedIcon } from 'lucide-react'
import { Language, LanguageBadge } from './language-badge'

type Contribution = {
  repo: string
  language: Language
  stars: string
  commits: number
}

type ContributionsCardProps = {
  contributions: Contribution[]
}

export default function ContributionsCard(props: ContributionsCardProps) {
  const repoURL = (repo: string) => `https://github.com/${repo}`
  const commitsURL = (repo: string) =>
    `https://github.com/${repo}/commits?author=oosawy`

  return (
    <div className="h-full bg-white rounded-lg overflow-y-auto shadow-sm pb-4">
      {/* Header */}
      <div className="px-4 py-2 border-b border-gray-200">
        <h2 className="text-gray-800 font-semibold md:text-lg leading-relaxed">
          Contributions
        </h2>
      </div>

      {/* Body */}
      {props.contributions.map((c) => (
        <div className="flex flex-col gap-1.5 px-4 pt-3.5" key={c.repo}>
          <div className="flex items-center gap-1.5">
            <div className="shrink-0">
              <BookMarkedIcon className="w-4.5 h-4.5 text-muted-foreground" />
            </div>
            <div className="space-x-2">
              <a
                href={repoURL(c.repo)}
                target="_blank"
                className="font-semibold text-base text-blue-600 hover:underline truncate"
              >
                {c.repo}
              </a>
              <a
                href={commitsURL(c.repo)}
                target="_blank"
                className="text-sm text-muted-foreground hover:text-current transition"
              >
                {c.commits} {c.commits === 1 ? 'commit' : 'commits'}
              </a>
            </div>
          </div>
          <div className="ml-6">
            {/* Languages */}
            {c.language && (
              <div className="flex flex-wrap gap-2">
                <LanguageBadge lang={c.language} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
