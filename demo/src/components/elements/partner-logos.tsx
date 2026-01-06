import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import Image from 'next/image'

function LogoLabel({ children, className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      className={clsx(
        'absolute bottom-full left-0 mb-1 text-[10px] font-medium uppercase tracking-wider text-olive-500 dark:text-olive-400',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

function Logo({ src, alt, size = 'normal', className, ...props }: { src: string; alt: string; size?: 'normal' | 'large' } & ComponentProps<'div'>) {
  return (
    <div 
      className={clsx(
        'flex items-end',
        size === 'normal' && 'h-4 sm:h-5 md:h-6 lg:h-7',
        size === 'large' && 'h-6 sm:h-7 md:h-8 lg:h-10',
        className
      )} 
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        width={120}
        height={32}
        className="h-full w-auto dark:brightness-0 dark:invert"
      />
    </div>
  )
}

export function PartnerLogos({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'flex w-full flex-col items-start gap-12 md:flex-row md:items-end md:justify-evenly md:gap-0',
        className
      )}
      {...props}
    >
      {/* Used by - Superfun */}
      <div className="relative hidden h-7 items-end md:flex lg:h-10">
        <LogoLabel>Used by</LogoLabel>
        <Logo src="/img/logos/logo-superfun.svg" alt="Superfun" />
      </div>

      {/* Wims */}
      <div className="hidden h-7 items-end md:flex lg:h-10">
        <Logo src="/img/logos/logo-wims.svg" alt="Wims" />
      </div>

      {/* Powered by - Gemini */}
      <div className="relative hidden h-7 items-end md:flex lg:h-10">
        <LogoLabel>Powered by</LogoLabel>
        <Logo src="/img/logos/logo-gemini.svg" alt="Gemini" size="large" />
      </div>

      {/* Vercel */}
      <div className="hidden h-7 items-end md:flex lg:h-10">
        <Logo src="/img/logos/logo-vercel.svg" alt="Vercel" size="large" />
      </div>

      {/* Netlify */}
      <div className="hidden h-7 items-end md:flex lg:h-10">
        <Logo src="/img/logos/logo-netlify.svg" alt="Netlify" size="large" />
      </div>

      {/* Mobile layout - grouped */}
      <div className="relative flex w-full items-end gap-6 md:hidden">
        <LogoLabel>Used by</LogoLabel>
        <div className="flex-1 flex justify-center">
          <Logo src="/img/logos/logo-superfun.svg" alt="Superfun" className="!h-6 sm:!h-7" />
        </div>
        <div className="flex-1 flex justify-center">
          <Logo src="/img/logos/logo-wims.svg" alt="Wims" className="!h-6 sm:!h-7" />
        </div>
        <div className="flex-1" /> {/* Empty column to align with Powered by */}
      </div>

      <div className="relative flex w-full items-end gap-6 md:hidden">
        <LogoLabel>Powered by</LogoLabel>
        <div className="flex-1 flex justify-center">
          <Logo src="/img/logos/logo-gemini.svg" alt="Gemini" size="large" className="!h-9 sm:!h-11" />
        </div>
        <div className="flex-1 flex justify-center">
          <Logo src="/img/logos/logo-vercel.svg" alt="Vercel" size="large" className="!h-9 sm:!h-11" />
        </div>
        <div className="flex-1 flex justify-center">
          <Logo src="/img/logos/logo-netlify.svg" alt="Netlify" size="large" className="!h-9 sm:!h-11" />
        </div>
      </div>
    </div>
  )
}

