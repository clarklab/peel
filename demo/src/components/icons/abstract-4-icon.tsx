import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function Abstract4Icon({ className, ...props }: ComponentProps<'svg'>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 1200 1200"
      fill="currentColor"
      role="image"
      className={clsx('inline-block', className)}
      {...props}
    >
      <path d="m600 120-420 240v480l420 240 419.88-239.93 0.12109-0.19141v-479.88zm0 92.387 298.68 170.65-80.785 46.176-217.89-124.45-217.85 124.49-80.855-46.211zm177.54 286.16v156.71l-137.11-78.297v-156.72zm-217.97-78.312v156.68l-137.07 78.324v-156.7zm0 544.29-298.75-170.7v-341.52l80.809 46.176v249.13l217.94 124.55zm-96.719-240 137.11-78.348 137.15 78.348-137.11 78.324zm476.33 69.301-298.75 170.7v-92.363l217.93-124.5v-249.18l80.809-46.176v341.52z"/>
    </svg>
  )
}
