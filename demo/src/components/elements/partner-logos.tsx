import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import Image from 'next/image'

function LogoLabel({ children, className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      className={clsx(
        'absolute -top-5 left-0 text-[10px] font-medium uppercase tracking-wider text-olive-500 dark:text-olive-400',
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
        size === 'normal' && 'h-5 sm:h-6 md:h-7 lg:h-8',
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
      <div className="relative hidden md:block">
        <LogoLabel>Used by</LogoLabel>
        <Logo src="/img/logos/logo-superfun.svg" alt="Superfun" />
      </div>

      {/* Wims */}
      <Logo src="/img/logos/logo-wims.svg" alt="Wims" className="hidden md:flex" />

      {/* Powered by - Gemini */}
      <div className="relative hidden md:block">
        <LogoLabel>Powered by</LogoLabel>
        <Logo src="/img/logos/logo-gemini.svg" alt="Gemini" size="large" />
      </div>

      {/* Vercel */}
      <Logo src="/img/logos/logo-vercel.svg" alt="Vercel" size="large" className="hidden md:flex" />

      {/* Netlify */}
      <Logo src="/img/logos/logo-netlify.svg" alt="Netlify" size="large" className="hidden md:flex" />

      {/* Mobile layout - grouped */}
      <div className="flex w-full items-end gap-8 md:hidden">
        <div className="relative">
          <LogoLabel>Used by</LogoLabel>
          <Logo src="/img/logos/logo-superfun.svg" alt="Superfun" className="!h-7 sm:!h-8" />
        </div>
        <Logo src="/img/logos/logo-wims.svg" alt="Wims" className="!h-7 sm:!h-8" />
      </div>

      <div className="flex w-full items-end gap-6 md:hidden">
        <div className="relative flex-1 flex justify-center">
          <LogoLabel>Powered by</LogoLabel>
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

