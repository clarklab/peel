'use client'

import { useEffect, useState, useCallback } from 'react'
import { BananaIcon } from '@/components/icons/banana-icon'

interface Message {
  id: number
  text: string
  isTyping: boolean
  displayedText: string
  showActions?: boolean
}

// Vibration helper for mobile typing effect
function vibrateTyping() {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    navigator.vibrate(10) // Short vibration pulse
  }
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [hasInteracted, setHasInteracted] = useState(false)

  // Check if user has already dismissed the chat
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dismissed = localStorage.getItem('peel-chat-dismissed')
      if (dismissed) {
        setHasInteracted(true)
      }
    }
  }, [])

  // Show chat button after 4 seconds
  useEffect(() => {
    if (hasInteracted) return

    const timer = setTimeout(() => {
      setShouldRender(true)
      // Small delay for animation
      requestAnimationFrame(() => {
        setIsVisible(true)
      })
    }, 4000)

    return () => clearTimeout(timer)
  }, [hasInteracted])

  // Typewriter effect
  const typeMessage = useCallback((messageId: number, fullText: string, onComplete?: () => void) => {
    let currentIndex = 0
    const typingSpeed = 30 // ms per character

    const typeNextChar = () => {
      if (currentIndex <= fullText.length) {
        setMessages(prev =>
          prev.map(msg =>
            msg.id === messageId
              ? { ...msg, displayedText: fullText.slice(0, currentIndex), isTyping: currentIndex < fullText.length }
              : msg
          )
        )

        if (currentIndex < fullText.length) {
          vibrateTyping()
        }

        currentIndex++

        if (currentIndex <= fullText.length) {
          setTimeout(typeNextChar, typingSpeed)
        } else {
          onComplete?.()
        }
      }
    }

    typeNextChar()
  }, [])

  // Start conversation when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const firstMessage: Message = {
        id: 1,
        text: "Have you heard of Nano Banana? Imagine Photoshop run by a team of AI agents, ready to do any kind of image editing you need.",
        isTyping: true,
        displayedText: '',
        showActions: false
      }

      setMessages([firstMessage])

      // Start typing first message after a small delay
      setTimeout(() => {
        typeMessage(1, firstMessage.text, () => {
          // After first message completes, add second message with actions
          setTimeout(() => {
            const secondMessage: Message = {
              id: 2,
              text: "Want to learn more?",
              isTyping: true,
              displayedText: '',
              showActions: true
            }
            setMessages(prev => [...prev, secondMessage])

            setTimeout(() => {
              typeMessage(2, secondMessage.text)
            }, 300)
          }, 500)
        })
      }, 400)
    }
  }, [isOpen, messages.length, typeMessage])

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setHasInteracted(true)
    if (typeof window !== 'undefined') {
      localStorage.setItem('peel-chat-dismissed', 'true')
    }
    // Reset messages for next time (if they clear localStorage)
    setTimeout(() => {
      setMessages([])
    }, 300)
  }

  const handleLearnMore = () => {
    window.open('https://blog.google/products/gemini/updated-image-editing-model/', '_blank')
    handleClose()
  }

  if (!shouldRender || hasInteracted) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Chat Panel */}
      <div
        className={`
          transform transition-all duration-300 ease-out origin-bottom-right
          ${isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
          }
        `}
      >
        <div className="w-80 sm:w-96 rounded-2xl bg-white shadow-2xl shadow-olive-950/20 dark:bg-olive-900 dark:shadow-black/40 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-olive-200 dark:border-olive-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-olive-100 dark:bg-olive-800 flex items-center justify-center">
                <BananaIcon className="w-5 h-5 text-olive-950 dark:text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-olive-950 dark:text-white">Peel</p>
                <p className="text-xs text-olive-500 dark:text-olive-400">Online</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full hover:bg-olive-100 dark:hover:bg-olive-800 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5 text-olive-600 dark:text-olive-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
            {messages.map((message) => (
              <div key={message.id} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-olive-100 dark:bg-olive-800 flex items-center justify-center flex-shrink-0">
                  <BananaIcon className="w-5 h-5 text-olive-950 dark:text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-olive-800 dark:text-olive-200 leading-relaxed">
                    {message.displayedText}
                    {message.isTyping && (
                      <span className="inline-block w-0.5 h-4 bg-olive-600 dark:bg-olive-400 ml-0.5 animate-pulse" />
                    )}
                  </p>

                  {/* Action buttons - show after second message finishes typing */}
                  {message.showActions && !message.isTyping && message.displayedText.length > 0 && (
                    <div
                      className="mt-3 flex flex-col gap-2 animate-fade-in"
                      style={{ animation: 'fadeIn 0.3s ease-out' }}
                    >
                      <button
                        onClick={handleLearnMore}
                        className="w-full px-4 py-2.5 text-sm font-medium text-white bg-olive-950 hover:bg-olive-800 dark:bg-white dark:text-olive-950 dark:hover:bg-olive-100 rounded-xl transition-colors text-left"
                      >
                        Tell me more about Nano Banana Pro
                      </button>
                      <button
                        onClick={handleClose}
                        className="w-full px-4 py-2.5 text-sm font-medium text-olive-700 hover:text-olive-950 bg-olive-100 hover:bg-olive-200 dark:text-olive-300 dark:hover:text-white dark:bg-olive-800 dark:hover:bg-olive-700 rounded-xl transition-colors text-left"
                      >
                        I already know
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Toggle Button */}
      <button
        onClick={isOpen ? handleClose : handleOpen}
        className={`
          w-14 h-14 rounded-full bg-olive-950 dark:bg-white
          shadow-lg shadow-olive-950/30 dark:shadow-black/30
          flex items-center justify-center
          transform transition-all duration-300 ease-out
          hover:scale-110 active:scale-95
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        `}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
          {isOpen ? (
            <svg className="w-6 h-6 text-white dark:text-olive-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <BananaIcon className="w-7 h-7 text-white dark:text-olive-950" />
          )}
        </div>
      </button>

      {/* Keyframe animation for fade in */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
