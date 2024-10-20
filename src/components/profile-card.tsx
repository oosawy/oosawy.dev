import { Card, CardContent } from '~/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'

export function ProfileCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-sm mx-6 bg-white dark:bg-gray-800">
        <CardContent className="flex flex-col items-center px-6 py-8">
          <Avatar className="w-32 h-32 mb-4">
            <AvatarImage src="/avatar.jpg" alt="Profile Picture" />
            <AvatarFallback>oosawy</AvatarFallback>
          </Avatar>
          <h2 className="mb-2 text-2xl font-bold dark:text-white">
            Yuta Osawa
          </h2>
          <p className="mb-4 text-muted-foreground dark:text-gray-300">
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
    </div>
  )
}

const XIcon = (props: { className: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  </svg>
)

const GitHubIcon = (props: { className: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>GitHub</title>
    <path
      fill="currentColor"
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
    />
  </svg>
)

const ZennIcon = (props: { className: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Zenn</title>
    <path
      fill="currentColor"
      d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z"
    />
  </svg>
)
