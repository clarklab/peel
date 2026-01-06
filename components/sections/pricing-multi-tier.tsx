import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Section } from '../elements/section'
import { CheckmarkIcon } from '../icons/checkmark-icon'

export function Plan({
  name,
  price,
  period,
  subheadline,
  badge,
  features,
  cta,
  className,
  variant = 'default',
}: {
  name: ReactNode
  price: ReactNode
  period?: ReactNode
  subheadline: ReactNode
  badge?: ReactNode
  features: ReactNode[]
  cta: ReactNode
  variant?: 'default' | 'highlighted'
} & ComponentProps<'div'>) {
  const isHighlighted = variant === 'highlighted'

  return (
    <div
      className={clsx(
        'flex flex-col justify-between gap-6 rounded-xl p-6 sm:items-start',
        isHighlighted ? 'bg-olive-950 dark:bg-white' : 'bg-olive-950/2.5 dark:bg-white/5',
        className,
      )}
    >
      <div className="self-stretch">
        <div className="flex items-center justify-between">
          {badge && (
            <div
              className={clsx(
                'order-last inline-flex rounded-full px-2 text-xs/6 font-medium',
                isHighlighted
                  ? 'bg-white/10 text-white dark:bg-olive-950/10 dark:text-olive-950'
                  : 'bg-olive-950/10 text-olive-950 dark:bg-white/10 dark:text-white',
              )}
            >
              {badge}
            </div>
          )}

          <h3
            className={clsx(
              'text-2xl/8 tracking-tight',
              isHighlighted ? 'text-white dark:text-olive-950' : 'text-olive-950 dark:text-white',
            )}
          >
            {name}
          </h3>
        </div>
        <p className="mt-1 inline-flex gap-1 text-base/7">
          <span className={isHighlighted ? 'text-white dark:text-olive-950' : 'text-olive-950 dark:text-white'}>
            {price}
          </span>
          {period && <span className="text-olive-500 dark:text-olive-500">{period}</span>}
        </p>
        <div
          className={clsx(
            'mt-4 flex flex-col gap-4 text-sm/6',
            isHighlighted ? 'text-olive-300 dark:text-olive-600' : 'text-olive-700 dark:text-olive-400',
          )}
        >
          {subheadline}
        </div>
        <ul
          className={clsx(
            'mt-4 space-y-2 text-sm/6',
            isHighlighted ? 'text-olive-300 dark:text-olive-600' : 'text-olive-700 dark:text-olive-400',
          )}
        >
          {features.map((feature, index) => (
            <li key={index} className="flex gap-4">
              <CheckmarkIcon
                className={clsx(
                  'h-lh shrink-0',
                  isHighlighted ? 'stroke-white dark:stroke-olive-950' : 'stroke-olive-950 dark:stroke-white',
                )}
              />
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </div>
      {cta}
    </div>
  )
}

export function PricingMultiTier({
  plans,
  ...props
}: {
  plans: ReactNode
} & ComponentProps<typeof Section>) {
  return (
    <Section {...props}>
      <div className="grid grid-cols-1 gap-2 sm:has-[>:nth-child(5)]:grid-cols-2 sm:max-lg:has-[>:last-child:nth-child(even)]:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none lg:has-[>:nth-child(5)]:grid-flow-row lg:has-[>:nth-child(5)]:grid-cols-3">
        {plans}
      </div>
    </Section>
  )
}
