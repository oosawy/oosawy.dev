import { Card, CardContent } from '~/components/ui/card'
import { Avatar, AvatarImage } from '~/components/ui/avatar'
import { GitHubIcon, XIcon, ZennIcon } from './icons'

export function ProfileCard() {
  return (
    <Card className="w-full h-full grid place-content-center bg-white dark:bg-gray-800">
      <CardContent className="flex flex-col lg:flex-row items-center gap-4 px-6">
        <Avatar className="size-32 lg:size-20">
          <AvatarImage src="/avatar.jpg" alt="Profile Picture" />
        </Avatar>
        <div className="flex flex-col items-center sm:contents lg:flex lg:flex-col lg:items-center lg:justify-center">
          <h2 className="mb-2 lg:mb-0.5 text-2xl font-bold dark:text-white">
            Yuta Osawa
          </h2>
          <div className="mb-4 sm:mb-6 lg:mb-4 text-muted-foreground dark:text-gray-300">
            Web Developer
          </div>
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
        </div>
      </CardContent>
    </Card>
  )
}
