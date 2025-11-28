import ZennArticleCard from '~/components/article-card'
import ContributionsCard from '~/components/contributions-card'
import { HourglassNotDoneIcon, HundredPointsIcon } from '~/components/icons'
import { ProfileCard } from '~/components/profile-card'
import { HolaCard } from '~/components/work-cards/hola-card'
import { VectrixCard } from '~/components/work-cards/vectrix'

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary flex items-center justify-center p-6 md:p-8">
      <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="col-span-2 row-span-2 lg:row-span-1 lg:row-start-2 lg:col-start-3">
          <ProfileCard />
        </div>

        <div className="col-span-2 row-span-1 md:row-start-3 lg:row-start-1 lg:col-span-3">
          <ZennArticleCard
            emoji={<HourglassNotDoneIcon />}
            title={`Next.jsでFirebase Authに起因する数秒間の読み込み画面を倒して快適なユーザー体験を勝ち取る`}
            href="https://zenn.dev/toridori/articles/31a573e5755303"
            likes={21}
          />
        </div>

        <div className='row-span-1 col-span-1 md:row-start-3 lg:col-span-2 lg:row-start-2 lg:col-start-1'>
          <ZennArticleCard
            emoji={<HundredPointsIcon />}
            title={`なぜ "use client" ディレクティブは優れた API なのか`}
            href="https://zenn.dev/yutaosawa/articles/9e978d12793a56"
            likes={121}
          />
        </div>

        <div className="col-span-1 row-span-1 md:row-start-3 md:col-start-4 md:col-span-2 lg:col-span-2 lg:row-start-3 lg:col-start-4">
          <HolaCard />
        </div>

        <div className="col-span-2 row-span-2 sm:col-span-1 md:col-span-2 md:col-start-3 lg:row-start-1 lg:col-start-5">
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
