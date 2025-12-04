import ZennArticleCard from "~/components/article-card"
import ContributionsCard from "~/components/contributions-card"
import { ProfileCard } from "~/components/profile-card"
import { Twemoji } from "~/components/twemoji"
import { HolaCard } from "~/components/work-cards/hola-card"
import { ThoughtCard } from "~/components/work-cards/thought-card"
import { VectrixCard } from "~/components/work-cards/vectrix-card"
import { WarpCard } from "~/components/work-cards/warp-card"
import { getZennArticle } from "~/lib/zenn"

export const CardBoard = async () => {
  const [article1, article2] = await Promise.all([
    getZennArticle("31a573e5755303"), // Next.jsでFirebase Authに起因する数秒間の読み込み画面を倒して快適なユーザー体験を勝ち取る
    getZennArticle("9e978d12793a56"), // なぜ "use client" ディレクティブは優れた API なのか
  ])

  return (
    <section className="contents">
      <div className="row-2 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="col-span-2 row-span-2 lg:row-span-1 lg:row-start-2 lg:col-start-3">
          <ProfileCard />
        </div>

        <div className="col-span-2 row-span-1 md:row-start-3 lg:row-start-1 lg:col-span-3">
          <ZennArticleCard
            emoji={<Twemoji emoji={article1.emoji} />}
            title={article1.title}
            href={`https://zenn.dev/${article1.path}`}
            likes={article1.liked_count}
          />
        </div>

        <div className="row-span-1 col-span-1 md:row-start-3 lg:col-span-2 lg:row-start-2 lg:col-start-1">
          <ZennArticleCard
            emoji={<Twemoji emoji={article2.emoji} />}
            title={article2.title}
            href={`https://zenn.dev/${article2.path}`}
            likes={article2.liked_count}
          />
        </div>

        <div className="col-span-1 row-span-1 md:row-start-3 md:col-start-4 lg:col-span-2 lg:row-start-3 lg:col-start-4">
          <HolaCard />
        </div>

        <div className="col-span-1 row-span-1 md:row-start-4 lg:col-span-1 lg:row-start-3 lg:col-start-3">
          <VectrixCard />
        </div>

        <div className="col-span-1 row-span-1 md:row-start-4 lg:col-span-1 lg:row-start-3 lg:col-start-6">
          <div className="flex flex-col gap-4">
            <WarpCard />
            <ThoughtCard />
          </div>
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
    </section>
  )
}
