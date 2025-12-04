import { z } from 'zod'

const ONE_DAY = 24 * 60 * 60

const ZennArticleSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  emoji: z.string(),
  liked_count: z.number(),
  published_at: z.string(),
  path: z.string(),
})

export type ZennArticle = z.infer<typeof ZennArticleSchema>

const ArticlesResponseSchema = z.object({
  articles: z.array(ZennArticleSchema),
  next_page: z.number().nullable().optional(),
})

const ArticleResponseSchema = z.object({
  article: ZennArticleSchema,
})

export async function getZennArticles(username: string): Promise<ZennArticle[]> {
  let allArticles: ZennArticle[] = []
  let page = 1
  let hasNextPage = true

  while (hasNextPage) {
    const res = await fetch(
      `https://zenn.dev/api/articles?username=${username}&order=latest&page=${page}`,
      {
        next: { revalidate: ONE_DAY },
      }
    )

    if (!res.ok) {
      throw new Error(`Failed to fetch Zenn articles: ${res.statusText}`)
    }

    const data = await res.json()
    const parsed = ArticlesResponseSchema.safeParse(data)

    if (!parsed.success) {
      throw new Error('Failed to parse Zenn API response:', parsed.error)
    }

    allArticles = [...allArticles, ...parsed.data.articles]

    if (parsed.data.next_page) {
      page = parsed.data.next_page
    } else {
      hasNextPage = false
    }
  }

  return allArticles
}

export async function getZennArticle(slug: string) {
  const res = await fetch(`https://zenn.dev/api/articles/${slug}`, {
    next: { revalidate: ONE_DAY },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch Zenn article: ${res.statusText}`)
  }

  const data = await res.json()
  const parsed = ArticleResponseSchema.safeParse(data)

  if (!parsed.success) {
    throw new Error('Failed to parse Zenn API response:', parsed.error)
  }

  return parsed.data.article
}
