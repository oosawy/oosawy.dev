import { ThoughtBalloonIcon } from '../icons'

export function ThoughtCard() {
  return (
    <div className="w-full grid place-items-center bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
      <div className="w-full aspect-4/3 grid place-items-center @container-[size]">
        <a target="_blank" title="work in progress">
          <span className="text-[50cqh]">
            <ThoughtBalloonIcon />
          </span>
        </a>
      </div>
    </div>
  )
}
