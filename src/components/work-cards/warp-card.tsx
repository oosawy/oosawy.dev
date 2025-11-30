export function WarpCard() {
  return (
    <div className="w-full grid place-items-center bg-neutral-800 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
      <div className="w-full aspect-4/3 grid place-items-center @container">
        <a href={'https://github.com/oosawy/react-warp'} target="_blank">
          <code className="tracking-wide space-x-1 font-medium text-[calc(16cqw)]">
            <span className="text-neutral-300">{'<'}</span>
            <span className="text-amber-400">{'Warp'}</span>
            <span className="text-neutral-300">{'/>'}</span>
          </code>
        </a>
      </div>
    </div>
  )
}
