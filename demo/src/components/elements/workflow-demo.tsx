'use client'

import { clsx } from 'clsx/lite'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import type { ComponentProps, ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { BananaIcon } from '../icons/banana-icon'
import { MaterialIcon } from '../icons/material-icon'

interface ImageItem {
  src: string
  title: string
}

interface ActionSet {
  action: string
  icon: ReactNode
  suffix?: ReactNode // Optional suffix after the action text (e.g., color swatch)
  beforeImages: ImageItem[]
  afterImages: ImageItem[]
}

// Neon green color swatch for "Add brand color" action
const ColorSwatch = () => (
  <span
    className="ml-1 inline-block h-4 w-4 rounded-sm md:h-5 md:w-5 lg:h-6 lg:w-6"
    style={{ backgroundColor: '#39FF14' }}
  />
)

// Default action sets with different actions using official Material Symbols
// Order: 1. Remove Furniture, 2. Add brand color, 3. Combine products, 4. Fix head shots
const defaultActions: ActionSet[] = [
  {
    action: 'Remove Furniture',
    icon: <MaterialIcon name="view_in_ar" className="text-xl md:text-2xl lg:text-3xl" />,
    beforeImages: [
      { src: '/img/photos/interior-1.webp', title: 'interior-1.webp' },
      { src: '/img/photos/interior-2.webp', title: 'interior-2.webp' },
      { src: '/img/photos/interior-3.webp', title: 'interior-3.webp' },
    ],
    afterImages: [
      { src: '/img/photos/interior-1-after.webp', title: 'interior-1-empty.webp' },
      { src: '/img/photos/interior-2-after.webp', title: 'interior-2-empty.webp' },
      { src: '/img/photos/interior-3-after.webp', title: 'interior-3-empty.webp' },
    ],
  },
  {
    action: 'Add brand color',
    icon: <MaterialIcon name="colors" className="text-xl md:text-2xl lg:text-3xl" />,
    suffix: <ColorSwatch />,
    beforeImages: [
      { src: '/img/photos/stock-worker.webp', title: 'stock-worker.webp' },
      { src: '/img/photos/stock-wine.webp', title: 'stock-wine.webp' },
      { src: '/img/photos/stock-assembly.webp', title: 'stock-assembly.webp' },
    ],
    afterImages: [
      { src: '/img/photos/stock-worker-after.webp', title: 'stock-worker-branded.webp' },
      { src: '/img/photos/stock-wine-after.webp', title: 'stock-wine-branded.webp' },
      { src: '/img/photos/stock-assembly-after.webp', title: 'stock-assembly-branded.webp' },
    ],
  },
  {
    action: 'Combine products',
    icon: <MaterialIcon name="scene" className="text-xl md:text-2xl lg:text-3xl" />,
    beforeImages: [
      { src: '/img/photos/object-cup.webp', title: 'object-cup.webp' },
      { src: '/img/photos/object-laptop.webp', title: 'object-laptop.webp' },
      { src: '/img/photos/scene.webp', title: 'scene.webp' },
    ],
    afterImages: [
      { src: '/img/photos/scene-after.webp', title: 'scene-combined.webp' },
    ],
  },
  {
    action: 'Fix head shots',
    icon: <MaterialIcon name="partner_exchange" className="text-xl md:text-2xl lg:text-3xl" />,
    beforeImages: [
      { src: '/img/photos/headshot-1.webp', title: 'headshot-1.webp' },
      { src: '/img/photos/headshot-2.webp', title: 'headshot-2.webp' },
      { src: '/img/photos/headshot-3.webp', title: 'headshot-3.webp' },
      { src: '/img/photos/headshot-4.webp', title: 'headshot-4.webp' },
    ],
    afterImages: [
      { src: '/img/photos/headshot-1-after.webp', title: 'headshot-1-fixed.webp' },
      { src: '/img/photos/headshot-2-after.webp', title: 'headshot-2-fixed.webp' },
      { src: '/img/photos/headshot-3-after.webp', title: 'headshot-3-fixed.webp' },
      { src: '/img/photos/headshot-4-after.webp', title: 'headshot-4-fixed.webp' },
    ],
  },
]

// Animation phases
type Phase = 'before-enter' | 'before-hold' | 'transition' | 'action-hold' | 'after-enter' | 'complete' | 'exit'

// Thumbnail position for single image (centered)
const thumbnailPositions1 = [
  { left: '10%', top: '10%', rotate: -2 },    // Centered with slight rotation
]

// Thumbnail positions for 3-image pyramid layout (2 top, 1 bottom center)
const thumbnailPositions3 = [
  { left: '0%', top: '0%', rotate: -4 },      // Top left
  { left: '45%', top: '5%', rotate: 3 },      // Top right
  { left: '25%', top: '37%', rotate: -1 },    // Bottom center
]

// Thumbnail positions for 4-image grid layout (2x2) - tighter spacing
const thumbnailPositions4 = [
  { left: '0%', top: '0%', rotate: -3 },      // Top left
  { left: '38%', top: '3%', rotate: 2 },      // Top right
  { left: '3%', top: '35%', rotate: -2 },     // Bottom left
  { left: '42%', top: '38%', rotate: 3 },     // Bottom right
]

function Thumbnail({
  image,
  index,
  side,
  totalCount,
}: {
  image: ImageItem
  index: number
  side: 'left' | 'right'
  totalCount: number
}) {
  // Pick the right positions array based on total image count
  const positions = totalCount === 1
    ? thumbnailPositions1
    : totalCount === 4
      ? thumbnailPositions4
      : thumbnailPositions3
  const position = positions[index] || positions[0]

  // Before images: enter fade up, exit fade right
  // After images: enter fade left, exit fade down
  const initialAnimation =
    side === 'left'
      ? { opacity: 0, y: 50, scale: 0.8 }
      : { opacity: 0, x: -60, scale: 0.8 }

  const exitAnimation =
    side === 'left'
      ? { opacity: 0, x: 100, scale: 0.9 }
      : { opacity: 0, y: 60, scale: 0.9 }

  // Size classes based on layout type (mobile ~10% smaller)
  const sizeClasses = totalCount === 1
    ? 'w-40 md:w-64 lg:w-72'    // Single image: ~40% larger
    : totalCount === 4
      ? side === 'left'
        ? 'w-20 md:w-32 lg:w-36'  // 4-image before: smaller portrait
        : 'w-24 md:w-36 lg:w-44'  // 4-image after: normal square
      : 'w-28 md:w-44 lg:w-52'    // 3-image: standard

  // For 3 images: bottom (index 2) behind top row
  // For 4 images: bottom row (indices 2, 3) behind top row (indices 0, 1)
  const zIndex = index < 2 ? 2 : 1

  return (
    <motion.div
      className="absolute"
      style={{
        left: position.left,
        top: position.top,
        rotate: position.rotate,
        zIndex,
      }}
      initial={initialAnimation}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      exit={exitAnimation}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
        delay: index * 0.1,
      }}
    >
      <div className={clsx('flex flex-col overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/10 dark:bg-olive-900 dark:ring-white/10', sizeClasses)}>
        <div className={clsx(
          'relative overflow-hidden bg-olive-100 dark:bg-olive-800',
          // Aspect ratios based on layout type
          totalCount === 1
            ? 'aspect-[4/3]'    // Single image: landscape
            : totalCount === 4
              ? side === 'left'
                ? 'aspect-[3/4]'  // 4-image before: portrait
                : 'aspect-square' // 4-image after: square
              : 'aspect-[4/3]'    // 3-image: standard landscape
        )}>
          <Image
            src={image.src}
            alt={image.title}
            fill
            className="object-cover"
            sizes={
              totalCount === 1
                ? '(max-width: 768px) 192px, (max-width: 1024px) 256px, 288px'
                : totalCount === 4
                  ? side === 'left'
                    ? '(max-width: 768px) 96px, (max-width: 1024px) 128px, 144px'
                    : '(max-width: 768px) 112px, (max-width: 1024px) 144px, 176px'
                  : '(max-width: 768px) 128px, (max-width: 1024px) 176px, 208px'
            }
          />
        </div>
        <div className="flex items-center justify-center gap-1 truncate px-2 py-1.5 text-[10px] font-medium text-olive-700 dark:text-olive-300 md:px-2.5 md:py-2 md:text-xs">
          {side === 'right' && (
            <BananaIcon className="h-3 w-3 shrink-0 text-olive-500 dark:text-olive-400 md:h-3.5 md:w-3.5" />
          )}
          <span className="truncate">{image.title}</span>
        </div>
      </div>
    </motion.div>
  )
}

function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    setDisplayedText('')
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 40) // 40ms per character for snappy typing

    return () => clearInterval(interval)
  }, [text])

  return (
    <span>
      {displayedText}
      <motion.span
        className="inline-block w-0.5 bg-current md:w-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        |
      </motion.span>
    </span>
  )
}

function ActionPill({ action, icon, suffix }: { action: string; icon: ReactNode; suffix?: ReactNode }) {
  return (
    <motion.div
      className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-olive-950 px-4 py-2 text-sm font-semibold text-white shadow-2xl dark:bg-white dark:text-olive-950 md:gap-3 md:px-8 md:py-4 md:text-lg lg:px-10 lg:py-5 lg:text-xl"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
      }}
    >
      {icon}
      <TypewriterText text={action} />
      {suffix}
    </motion.div>
  )
}

export function WorkflowDemo({
  actions = defaultActions,
  backgroundImage,
  className,
  ...props
}: {
  actions?: ActionSet[]
  backgroundImage?: ReactNode
} & ComponentProps<'div'>) {
  const [currentActionIndex, setCurrentActionIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('before-enter')

  // Scale down during action-hold phase (after typing finishes)
  const isProcessing = phase === 'action-hold'

  const currentAction = actions[currentActionIndex]

  // Animation timeline controller
  useEffect(() => {
    // Calculate typing duration: chars × 40ms per char + 400ms delay after finish
    const typingDuration = currentAction.action.length * 40 + 400

    const timings: Record<Phase, number> = {
      'before-enter': 600, // Time for thumbnails to animate in
      'before-hold': 1000, // Hold before images
      transition: typingDuration, // Wait for typewriter to finish + 200ms delay
      'action-hold': 800, // Brief hold after before images exit
      'after-enter': 600, // After images animate in
      complete: 2000, // Show complete result
      exit: 400, // Exit animation
    }

    const timer = setTimeout(() => {
      switch (phase) {
        case 'before-enter':
          setPhase('before-hold')
          break
        case 'before-hold':
          setPhase('transition')
          break
        case 'transition':
          setPhase('action-hold')
          break
        case 'action-hold':
          setPhase('after-enter')
          break
        case 'after-enter':
          setPhase('complete')
          break
        case 'complete':
          setPhase('exit')
          break
        case 'exit':
          // Move to next action and restart
          setCurrentActionIndex((prev) => (prev + 1) % actions.length)
          setPhase('before-enter')
          break
      }
    }, timings[phase])

    return () => clearTimeout(timer)
  }, [phase, actions.length, currentAction.action.length])

  // Determine what should be visible based on phase
  const showBefore = ['before-enter', 'before-hold', 'transition'].includes(phase)
  const showPill = ['transition', 'action-hold', 'after-enter', 'complete'].includes(phase)
  const showAfter = ['after-enter', 'complete'].includes(phase)

  return (
    <div
      className={clsx(
        'relative overflow-visible',
        className,
      )}
      {...props}
    >
      {/* Background image with scale animation during processing */}
      {backgroundImage && (
        <motion.div
          className="origin-bottom"
          animate={{
            scale: isProcessing ? 0.95 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 30,
          }}
        >
          {backgroundImage}
        </motion.div>
      )}

      {/* Overlay with thumbnails and action pill */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-visible">
      {/* Before thumbnails - below pill on mobile, left side on desktop */}
      <div className={clsx(
        'absolute -translate-y-1/2',
        // Mobile: left side, higher up
        '-left-[5%] top-[60%]',
        // Desktop: left side positioning
        currentAction.beforeImages.length === 4
          ? 'md:-left-[5%] md:top-[60%] lg:-left-[3%]'   // Headshots: closer to center
          : 'md:-left-[10%] md:top-[60%] lg:-left-[8%]' // Standard
      )}>
        <AnimatePresence mode="wait">
          {showBefore && phase !== 'exit' && (
            <motion.div
              key={`before-${currentActionIndex}`}
              className="relative h-48 w-48 md:h-72 md:w-72 lg:h-96 lg:w-96"
              exit={{ opacity: 0 }}
            >
              {currentAction.beforeImages.map((image, index) => (
                <Thumbnail
                  key={`${image.src}-${index}`}
                  image={image}
                  index={index}
                  side="left"
                  totalCount={currentAction.beforeImages.length}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action pill - center/center */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <AnimatePresence mode="wait">
          {showPill && phase !== 'exit' && (
            <ActionPill
              key={`pill-${currentActionIndex}`}
              action={currentAction.action}
              icon={currentAction.icon}
              suffix={currentAction.suffix}
            />
          )}
        </AnimatePresence>
      </div>

      {/* After thumbnails - below pill on mobile, right side on desktop */}
      <div className="absolute -right-[5%] top-[60%] -translate-y-1/2 md:-right-[10%] md:top-[60%] lg:-right-[8%]">
        <AnimatePresence mode="wait">
          {showAfter && phase !== 'exit' && (
            <motion.div
              key={`after-${currentActionIndex}`}
              className="relative h-48 w-48 md:h-72 md:w-72 lg:h-96 lg:w-96"
              exit={{ opacity: 0 }}
            >
              {currentAction.afterImages.map((image, index) => (
                <Thumbnail
                  key={`${image.src}-${index}`}
                  image={image}
                  index={index}
                  side="right"
                  totalCount={currentAction.afterImages.length}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
    </div>
  )
}

