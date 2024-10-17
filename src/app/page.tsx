import { preload } from 'react-dom'
import { ProfileCard } from '~/components/profile-card'

export default function Home() {
  preload('/avatar.jpg', { as: 'image' })

  return <ProfileCard />
}
