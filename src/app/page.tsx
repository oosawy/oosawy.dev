import { preload } from 'react-dom'
import { CardBoard } from './CardBoard'
import { ArticlesSection } from '~/components/articles-section'

export default function Home() {
  preload('/avatar.jpg', { as: 'image' })

  return (
    <main className="min-h-dvh grid grid-rows-[1fr_max-content_1fr] gap-8">
      <div className='row-2 px-6 md:px-8 place-self-center'>
        <CardBoard />
      </div>

      <div className='row-3 relative w-full'>
        <div className='absolute inset-x-0 container mx-auto max-w-7xl p-6 md:p-8'>
          <ArticlesSection />
        </div>
      </div>
    </main>
  )
}
