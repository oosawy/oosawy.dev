import { Card, CardContent } from '~/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { GitHubIcon, XIcon, ZennIcon } from './icons'

export function ProfileCard() {
  return (
    <Card className="w-full h-full grid place-content-center bg-white dark:bg-gray-800">
      <CardContent className="flex flex-col items-center px-6">
        <Avatar className="w-32 h-32 mb-4">
          <AvatarImage src="/avatar.jpg" alt="Profile Picture" />
          <AvatarFallback>OS</AvatarFallback> {/* Fallback for Yuta Osawa */}
        </Avatar>
        <h2 className="mb-2 text-2xl font-bold dark:text-white">Yuta Osawa</h2>
        <p className="mb-6 text-muted-foreground dark:text-gray-300">
          Web Developer
        </p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/oosawy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-300 dark:text-gray-400 hover:text-[#181717]"
          >
            <GitHubIcon className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/oosawy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-300 dark:text-gray-400 hover:text-[#000000]"
          >
            <XIcon className="w-6 h-6" />
          </a>
          <a
            href="https://zenn.dev/yutaosawa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-300 dark:text-gray-400 hover:text-[#3EA8FF]"
          >
            <ZennIcon className="w-6 h-6" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
