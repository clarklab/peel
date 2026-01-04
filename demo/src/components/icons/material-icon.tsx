import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function MaterialIcon({
  name,
  className,
  ...props
}: {
  name: string
} & ComponentProps<'span'>) {
  return (
    <span
      className={clsx('material-symbols-outlined', className)}
      style={{
        fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
      }}
      {...props}
    >
      {name}
    </span>
  )
}

