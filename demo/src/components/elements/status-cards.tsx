'use client'

import { clsx } from 'clsx/lite'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

interface StatusCard {
  label: string
  duration: number
}

const cards: StatusCard[] = [
  { label: 'Sending Image', duration: 3.2 },
  { label: 'Sending References', duration: 4.1 },
  { label: 'Nano working...', duration: 6.2 },
  { label: 'Images ready!', duration: 13.5 },
]

function CountUp({ target, duration = 1000, onComplete }: { target: number; duration?: number; onComplete?: () => void }) {
  const [count, setCount] = useState(0)
  const startTime = useRef<number | null>(null)
  const hasCompleted = useRef(false)

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp
      const progress = Math.min((timestamp - startTime.current) / duration, 1)
      
      setCount(progress * target)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else if (!hasCompleted.current) {
        hasCompleted.current = true
        onComplete?.()
      }
    }
    
    requestAnimationFrame(animate)
  }, [target, duration, onComplete])

  return <span>{count.toFixed(1)}s</span>
}

function Card({ 
  card, 
  index, 
  isVisible, 
  className 
}: { 
  card: StatusCard
  index: number
  isVisible: boolean
  className?: string
}) {
  const [isComplete, setIsComplete] = useState(false)
  const [showCard, setShowCard] = useState(false)

  useEffect(() => {
    if (isVisible) {
      // Stagger card appearance
      const timer = setTimeout(() => {
        setShowCard(true)
      }, index * 800)
      return () => clearTimeout(timer)
    } else {
      setShowCard(false)
      setIsComplete(false)
    }
  }, [isVisible, index])

  if (!showCard) return null

  // Alternate tilt directions for variety
  const startRotation = index % 2 === 0 ? -8 : 8

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.85, rotate: startRotation }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, y: -10, scale: 0.95, rotate: startRotation / 2 }}
      transition={{ 
        type: 'spring', 
        stiffness: 400, 
        damping: 20,
        mass: 0.8,
      }}
      className={clsx(
        'flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg shadow-olive-950/10 dark:bg-olive-900 dark:shadow-black/20',
        className
      )}
    >
      <div
        className={clsx(
          'h-2.5 w-2.5 rounded-full transition-colors duration-300',
          isComplete || index === 3 ? 'bg-green-500' : 'bg-yellow-400'
        )}
      />
      <div className="flex flex-col">
        <span className="text-sm font-medium text-olive-950 dark:text-white">{card.label}</span>
        <span className="text-xs tabular-nums text-olive-600 dark:text-olive-400">
          {index === 3 ? (
            // Last card shows static number
            <span>{card.duration.toFixed(1)}s</span>
          ) : (
            <CountUp 
              target={card.duration} 
              duration={1200} 
              onComplete={() => setIsComplete(true)} 
            />
          )}
        </span>
      </div>
    </motion.div>
  )
}

function MobileCards({ isVisible }: { isVisible: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!isVisible) {
      setCurrentIndex(0)
      setIsComplete(false)
      return
    }

    // Cycle through cards
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= cards.length - 1) {
          return 0
        }
        return prev + 1
      })
      setIsComplete(false)
    }, 2500)

    return () => clearInterval(interval)
  }, [isVisible])

  const currentCard = cards[currentIndex]

  // Alternate tilt directions
  const startRotation = currentIndex % 2 === 0 ? -6 : 6

  return (
    <div className="flex justify-center">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 60, scale: 0.9, rotate: startRotation }}
            animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, x: -60, scale: 0.9, rotate: -startRotation }}
            transition={{ 
              type: 'spring', 
              stiffness: 400, 
              damping: 22,
              mass: 0.8,
            }}
            className="flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-lg shadow-olive-950/10 dark:bg-olive-900 dark:shadow-black/20"
          >
            <div
              className={clsx(
                'h-4 w-4 rounded-full transition-colors duration-300',
                isComplete || currentIndex === 3 ? 'bg-green-500' : 'bg-yellow-400'
              )}
            />
            <div className="flex flex-col">
              <span className="text-lg font-medium text-olive-950 dark:text-white">{currentCard.label}</span>
              <span className="text-sm tabular-nums text-olive-600 dark:text-olive-400">
                {currentIndex === 3 ? (
                  <span>{currentCard.duration.toFixed(1)}s</span>
                ) : (
                  <CountUp 
                    target={currentCard.duration} 
                    duration={1200} 
                    onComplete={() => setIsComplete(true)} 
                  />
                )}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function StatusCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 z-10">
      {/* Desktop: Cards positioned along the curve */}
      <div className="hidden h-full w-full md:block">
        <div className="relative h-full w-full">
          {/* Card 1 - Left side, lower */}
          <div className="absolute bottom-[15%] left-[5%]">
            <AnimatePresence>
              {isVisible && <Card card={cards[0]} index={0} isVisible={isVisible} />}
            </AnimatePresence>
          </div>
          
          {/* Card 2 - Left-center, slightly higher */}
          <div className="absolute bottom-[25%] left-[28%]">
            <AnimatePresence>
              {isVisible && <Card card={cards[1]} index={1} isVisible={isVisible} />}
            </AnimatePresence>
          </div>
          
          {/* Card 3 - Right-center, higher */}
          <div className="absolute bottom-[45%] right-[28%]">
            <AnimatePresence>
              {isVisible && <Card card={cards[2]} index={2} isVisible={isVisible} />}
            </AnimatePresence>
          </div>
          
          {/* Card 4 - Right side, highest */}
          <div className="absolute bottom-[65%] right-[5%]">
            <AnimatePresence>
              {isVisible && <Card card={cards[3]} index={3} isVisible={isVisible} />}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile: Single card with transitions */}
      <div className="flex h-full items-center justify-center md:hidden">
        <MobileCards isVisible={isVisible} />
      </div>
    </div>
  )
}

