import ZennArticleCard from '~/components/article-card'
import { getZennArticles } from '~/lib/zenn'
import { Twemoji } from './twemoji'

export async function ArticlesSection() {
  const articles = await getZennArticles('yutaosawa')

  if (!articles.length) {
    return null
  }

  return (
    <section className='contents space-y-4 md:space-y-6'>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800">Articles</h2>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-4 md:gap-6'>
        {articles.map((article) => (
          <div key={article.id} className='contents' data-article-subgrid>
            <ZennArticleCard
              emoji={<Twemoji emoji={article.emoji} />}
              title={article.title}
              href={`https://zenn.dev${article.path}`}
              likes={article.liked_count}
              date={new Date(article.published_at).toLocaleDateString('ja-JP')}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
