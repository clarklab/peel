'use client'

import { clsx } from 'clsx/lite'
import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { useState } from 'react'
import { Container } from '../elements/container'
import { ArrowNarrowRightIcon } from '../icons/arrow-narrow-right-icon'
import { CheckmarkIcon } from '../icons/checkmark-icon'

export function FooterCategory({ title, children, ...props }: { title: ReactNode } & ComponentProps<'div'>) {
  return (
    <div {...props}>
      <h3>{title}</h3>
      <ul role="list" className="mt-2 flex flex-col gap-2">
        {children}
      </ul>
    </div>
  )
}

export function FooterLink({ href, className, ...props }: { href: string } & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <li className={clsx('text-olive-700 dark:text-olive-400', className)}>
      <Link href={href} {...props} />
    </li>
  )
}

export function SocialLink({
  href,
  name,
  className,
  ...props
}: {
  href: string
  name: string
} & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={name}
      className={clsx('text-olive-950 *:size-6 dark:text-white', className)}
      {...props}
    />
  )
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function NewsletterForm({
  headline,
  subheadline,
  className,
  ...props
}: {
  headline: ReactNode
  subheadline: ReactNode
} & ComponentProps<'form'>) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setStatus('success')
      form.reset()
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={clsx('flex max-w-sm flex-col gap-2', className)}>
        <div className="flex items-center gap-2 text-olive-950 dark:text-white">
          <CheckmarkIcon className="h-5 w-5" />
          <p className="font-medium">You're subscribed!</p>
        </div>
        <p className="text-olive-700 dark:text-olive-400">
          Thanks for signing up. We'll keep you posted on new features.
        </p>
      </div>
    )
  }

  return (
    <form
      className={clsx('flex max-w-sm flex-col gap-2', className)}
      name="newsletter"
      method="POST"
      data-netlify="true"
      onSubmit={handleFormSubmit}
      {...props}
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <p>{headline}</p>
      <div className="flex flex-col gap-4 text-olive-700 dark:text-olive-400">{subheadline}</div>
      <div className="flex items-center border-b border-olive-950/20 py-2 has-[input:focus]:border-olive-950 dark:border-white/20 dark:has-[input:focus]:border-white">
        <input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          required
          disabled={status === 'loading'}
          className="flex-1 text-olive-950 focus:outline-hidden disabled:opacity-50 dark:text-white"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          disabled={status === 'loading'}
          className="relative inline-flex size-7 items-center justify-center rounded-full after:absolute after:-inset-2 hover:bg-olive-950/10 disabled:opacity-50 dark:hover:bg-white/10 after:pointer-fine:hidden"
        >
          {status === 'loading' ? (
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          ) : (
            <ArrowNarrowRightIcon />
          )}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
      )}
    </form>
  )
}

export function FooterWithNewsletterFormCategoriesAndSocialIcons({
  cta,
  links,
  fineprint,
  socialLinks,
  className,
  ...props
}: {
  cta: ReactNode
  links: ReactNode
  fineprint: ReactNode
  socialLinks?: ReactNode
} & ComponentProps<'footer'>) {
  return (
    <footer className={clsx('pt-16', className)} {...props}>
      <div className="bg-olive-950/2.5 py-16 text-olive-950 dark:bg-white/5 dark:text-white">
        <Container className="flex flex-col gap-16">
          <div className="grid grid-cols-1 gap-x-6 gap-y-16 text-sm/7 lg:grid-cols-2">
            {cta}
            <nav className="grid grid-cols-2 gap-6 sm:has-[>:last-child:nth-child(3)]:grid-cols-3 sm:has-[>:nth-child(5)]:grid-cols-3 md:has-[>:last-child:nth-child(4)]:grid-cols-4 lg:max-xl:has-[>:last-child:nth-child(4)]:grid-cols-2">
              {links}
            </nav>
          </div>
          <div className="flex items-center justify-between gap-10 text-sm/7">
            <div className="text-olive-600 dark:text-olive-500">{fineprint}</div>
            {socialLinks && <div className="flex items-center gap-4 sm:gap-10">{socialLinks}</div>}
          </div>
        </Container>
      </div>
    </footer>
  )
}
