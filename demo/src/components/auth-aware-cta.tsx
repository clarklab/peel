'use client'

import { useEffect, useState } from 'react'
import { ButtonLink } from '@/components/elements/button'

interface AuthAwareCTAProps {
  size?: 'md' | 'lg'
  color?: 'dark/light' | 'light' | 'yellow'
  className?: string
  defaultText?: string
  showWelcomeLabel?: boolean
}

export function AuthAwareCTA({
  size = 'lg',
  color = 'dark/light',
  className,
  defaultText = 'Start now',
  showWelcomeLabel = true
}: AuthAwareCTAProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for auth token in localStorage
    // Common token keys used by authentication systems
    const checkAuth = () => {
      if (typeof window !== 'undefined') {
        const tokenKeys = [
          'peel_auth_token',
          'auth_token',
          'access_token',
          'token',
          'jwt',
          'authToken',
        ]

        const hasToken = tokenKeys.some(key => {
          const value = localStorage.getItem(key)
          return value !== null && value !== '' && value !== 'undefined'
        })

        setIsLoggedIn(hasToken)
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  // During SSR or initial load, show default text
  if (isLoading) {
    return (
      <ButtonLink href="https://banana.peel.diy" size={size} color={color} className={className}>
        {defaultText}
      </ButtonLink>
    )
  }

  if (isLoggedIn) {
    return (
      <div className="flex flex-col items-center gap-2">
        {showWelcomeLabel && (
          <span className="text-sm font-medium text-olive-700 dark:text-olive-400">
            Welcome back!
          </span>
        )}
        <ButtonLink href="https://banana.peel.diy" size={size} color={color} className={className}>
          Open Peel
        </ButtonLink>
      </div>
    )
  }

  return (
    <ButtonLink href="https://banana.peel.diy" size={size} color={color} className={className}>
      {defaultText}
    </ButtonLink>
  )
}
