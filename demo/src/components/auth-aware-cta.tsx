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
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const welcomeText = 'Welcome back!'

  useEffect(() => {
    // Check for peel_logged_in cookie (set by banana.peel.diy on login)
    const checkAuth = () => {
      if (typeof window !== 'undefined') {
        const hasAuthCookie = document.cookie
          .split('; ')
          .some(cookie => cookie.startsWith('peel_logged_in='))

        setIsLoggedIn(hasAuthCookie)
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  // Typewriter effect for welcome message
  useEffect(() => {
    if (isLoggedIn && showWelcomeLabel && !isLoading) {
      setIsTyping(true)
      let currentIndex = 0

      const typeNextChar = () => {
        if (currentIndex <= welcomeText.length) {
          setDisplayedText(welcomeText.slice(0, currentIndex))
          currentIndex++

          if (currentIndex <= welcomeText.length) {
            setTimeout(typeNextChar, 50) // 50ms per character for smooth typing
          } else {
            setIsTyping(false)
          }
        }
      }

      // Start typing after a small delay
      const timer = setTimeout(() => {
        typeNextChar()
      }, 200)

      return () => clearTimeout(timer)
    }
  }, [isLoggedIn, showWelcomeLabel, isLoading])

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
            {displayedText}
            {isTyping && (
              <span className="inline-block w-0.5 h-3.5 bg-olive-600 dark:bg-olive-400 ml-0.5 animate-pulse" />
            )}
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
