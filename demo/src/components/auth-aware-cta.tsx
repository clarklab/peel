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
  const [showCursor, setShowCursor] = useState(false)

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

  // Typewriter effect with cursor blinking
  useEffect(() => {
    if (isLoggedIn && showWelcomeLabel && !isLoading) {
      let currentIndex = 0
      const timers: NodeJS.Timeout[] = []

      // Show cursor and blink twice quickly (~600ms)
      setShowCursor(true)

      // Hide cursor and start typing after 2 quick blinks
      const startTyping = setTimeout(() => {
        setShowCursor(false)
        const typeNextChar = () => {
          if (currentIndex <= welcomeText.length) {
            setDisplayedText(welcomeText.slice(0, currentIndex))
            currentIndex++

            if (currentIndex <= welcomeText.length) {
              timers.push(setTimeout(typeNextChar, 50))
            }
          }
        }
        typeNextChar()
      }, 600)

      timers.push(startTyping)

      return () => timers.forEach(t => clearTimeout(t))
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
      <div className="flex items-center gap-3">
        {showWelcomeLabel && (
          <span className="inline-flex justify-end text-sm font-semibold text-olive-700 whitespace-nowrap dark:text-olive-400">
            {displayedText}
            {showCursor && (
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
