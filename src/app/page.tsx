import ZennArticleCard from '~/components/article-card'
import ContributionsCard from '~/components/contributions-card'
import { HourglassNotDoneIcon, HundredPointsIcon } from '~/components/icons'
import { ProfileCard } from '~/components/profile-card'

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl grid grid-rows-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[140px] md:auto-rows-[160px]">
        <div className="col-span-2 row-span-2 lg:row-start-2 lg:col-start-3">
          <ProfileCard />
        </div>

        <div className="col-span-2 row-span-1 row-start-3 col-start-1 lg:row-start-1 lg:col-span-3">
          <ZennArticleCard
            emoji={<HundredPointsIcon />}
            title={`Next.jsでFirebase Authに起因する数秒間の読み込み画面を倒して快適なユーザー体験を勝ち取る`}
            href="https://zenn.dev/yutaosawa/articles/9e978d12793a56"
            likes={21}
          />
        </div>

        <div className="col-span-1 row-span-1 row-start-4 md:col-start-2 lg:col-span-2 lg:row-start-2 lg:col-start-1">
          <ZennArticleCard
            emoji={<HourglassNotDoneIcon />}
            title={`なぜ "use client" ディレクティブは優れた API なのか`}
            href="https://zenn.dev/yutaosawa/articles/9e978d12793a56"
            likes={121}
          />
        </div>

        <div className="col-span-2 row-span-2 md:col-start-3 lg:row-start-1 lg:col-start-5">
          <ContributionsCard
            contributions={[
              {
                repo: 'vercel/swr',
                language: 'typescript',
                stars: '32k',
                commits: 3,
              },
              {
                repo: 'withastro/astro',
                language: 'typescript',
                stars: '52k',
                commits: 1,
              },
              {
                repo: 'lucide-icons/lucide',
                language: 'typescript',
                stars: '19k',
                commits: 1,
              },
              {
                repo: 'tamagui/tamagui',
                language: 'typescript',
                stars: '11k',
                commits: 1,
              },
              {
                repo: 'jotaijs/jotai-redux',
                language: 'typescript',
                stars: '8',
                commits: 1,
              },
            ]}
          />
        </div>
      </div>
    </main>
  )
}
