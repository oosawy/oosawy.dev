import { CubeIcon } from '../icons'

export function VectrixCard() {
  return (
    <div className="flex flex-col relative w-full h-full bg-sky-50/50 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
      {/* Header Section */}
      <div className="grow aspect-square p-4 flex justify-center min-h-16 @container-[size]">
        <div className="text-[100cqh] text-sky-400">
          <CubeIcon className='stroke-[0.5]' />
        </div>
      </div>

      {/* Content Section */}
      <div className="grow flex flex-col gap-2 sm:gap-3 md:gap-4 p-3 bg-white">
        <div className="flex flex-col">
            <a
              // href={'https://github.com/oosawy/vectrix'}
              target="_blank"
              className="font-semibold text-card-title !after:absolute !after:inset-0"
            >
              vectrix
            </a>

          <span className="text-xs sm:text-sm text-muted-foreground leading-none">
            work in progress
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-1 md:gap-2 flex-wrap">
          <div className="grow"></div>
        </div>
      </div>
    </div>
  )
}
