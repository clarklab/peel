'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { clsx } from 'clsx/lite'
import { BookOpenIcon } from '@/components/icons/book-open-icon'
import { RocketIcon } from '@/components/icons/rocket-icon'
import { PhotoIcon } from '@/components/icons/photo-icon'
import { SlidersIcon } from '@/components/icons/sliders-icon'
import { Square3Stack3dIcon } from '@/components/icons/square-3-stack-3d-icon'
import { BanknotesIcon } from '@/components/icons/banknotes-icon'
import { TagIcon } from '@/components/icons/tag-icon'
import { SparklesIcon } from '@/components/icons/sparkles-icon'
import { BeakerIcon } from '@/components/icons/beaker-icon'

type NavItem = {
  id: string
  label: string
  icon?: React.ReactNode
  children?: { id: string; label: string }[]
}

const navigation: NavItem[] = [
  { id: 'getting-started', label: 'Getting Started', icon: <RocketIcon className="size-4" /> },
  { id: 'nano-banana-primer', label: 'Nano Banana Primer', icon: <BookOpenIcon className="size-4" /> },
  {
    id: 'making-an-image',
    label: 'Making an Image',
    icon: <PhotoIcon className="size-4" />,
    children: [
      { id: 'prompting-with-images', label: 'Prompting with Images' },
      { id: 'prompting-with-text', label: 'Prompting with Text' },
    ],
  },
  { id: 'batch-jobs', label: 'Batch Jobs', icon: <Square3Stack3dIcon className="size-4" /> },
  { id: 'combining-images', label: 'Combining Images', icon: <BeakerIcon className="size-4" /> },
  {
    id: 'presets',
    label: 'Presets',
    icon: <SlidersIcon className="size-4" />,
    children: [
      { id: 'remove-bg', label: 'Remove BG' },
      { id: 'add-brand-color', label: 'Add Brand Color' },
      { id: 'duplicate', label: 'Duplicate' },
      { id: 'upscale', label: 'Upscale' },
      { id: 'transform', label: 'Transform' },
      { id: 'desaturate', label: 'Desaturate' },
      { id: 'custom-presets', label: 'Custom Presets' },
    ],
  },
  { id: 'reference-images', label: 'Reference Images', icon: <SparklesIcon className="size-4" /> },
]

const pricingNavigation: NavItem[] = [
  { id: 'pricing', label: 'Pricing', icon: <BanknotesIcon className="size-4" /> },
  { id: 'tokens', label: 'Tokens', icon: <TagIcon className="size-4" /> },
]

function NavLink({
  item,
  activeSection,
  isChild = false,
}: {
  item: { id: string; label: string; icon?: React.ReactNode }
  activeSection: string
  isChild?: boolean
}) {
  const isActive = activeSection === item.id

  return (
    <a
      href={`#${item.id}`}
      className={clsx(
        'group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200',
        isChild && 'ml-6 text-[13px]',
        isActive
          ? 'bg-olive-950 text-white dark:bg-white dark:text-olive-950'
          : 'text-olive-600 hover:bg-olive-200/60 hover:text-olive-950 dark:text-olive-400 dark:hover:bg-olive-800/60 dark:hover:text-white'
      )}
    >
      {item.icon && (
        <span
          className={clsx(
            'transition-colors',
            isActive ? 'text-white dark:text-olive-950' : 'text-olive-400 group-hover:text-olive-600 dark:text-olive-500 dark:group-hover:text-olive-300'
          )}
        >
          {item.icon}
        </span>
      )}
      {item.label}
    </a>
  )
}

function Sidebar({ activeSection }: { activeSection: string }) {
  return (
    <aside className="sticky top-24 hidden h-fit w-64 shrink-0 lg:block">
      <nav className="flex flex-col gap-1">
        <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-olive-400 dark:text-olive-500">
          Documentation
        </div>
        {navigation.map((item) => (
          <div key={item.id}>
            <NavLink item={item} activeSection={activeSection} />
            {item.children?.map((child) => (
              <NavLink key={child.id} item={child} activeSection={activeSection} isChild />
            ))}
          </div>
        ))}

        <div className="my-4 border-t border-olive-200 dark:border-olive-800" />

        <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-olive-400 dark:text-olive-500">
          Billing
        </div>
        {pricingNavigation.map((item) => (
          <NavLink key={item.id} item={item} activeSection={activeSection} />
        ))}
      </nav>
    </aside>
  )
}

function MobileNav({ activeSection }: { activeSection: string }) {
  const [isOpen, setIsOpen] = useState(false)

  const allItems = [
    ...navigation.flatMap((item) => [item, ...(item.children || [])]),
    ...pricingNavigation,
  ]
  const activeItem = allItems.find((item) => item.id === activeSection)

  return (
    <div className="sticky top-16 z-40 -mx-6 bg-olive-100/95 px-6 py-3 backdrop-blur-sm lg:hidden dark:bg-olive-950/95">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-lg bg-olive-200/60 px-4 py-3 text-sm font-medium text-olive-950 dark:bg-olive-800/60 dark:text-white"
      >
        <span className="flex items-center gap-2">
          <BookOpenIcon className="size-4 text-olive-500" />
          {activeItem?.label || 'Documentation'}
        </span>
        <svg
          className={clsx('size-4 transition-transform', isOpen && 'rotate-180')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-6 right-6 top-full mt-2 max-h-96 overflow-y-auto rounded-lg bg-white p-2 shadow-xl ring-1 ring-olive-200 dark:bg-olive-900 dark:ring-olive-700">
          <div className="mb-2 px-3 pt-2 text-xs font-semibold uppercase tracking-wider text-olive-400 dark:text-olive-500">
            Documentation
          </div>
          {navigation.map((item) => (
            <div key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium',
                  activeSection === item.id
                    ? 'bg-olive-950 text-white dark:bg-white dark:text-olive-950'
                    : 'text-olive-600 hover:bg-olive-100 dark:text-olive-300 dark:hover:bg-olive-800'
                )}
              >
                {item.icon}
                {item.label}
              </a>
              {item.children?.map((child) => (
                <a
                  key={child.id}
                  href={`#${child.id}`}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    'ml-6 flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] font-medium',
                    activeSection === child.id
                      ? 'bg-olive-950 text-white dark:bg-white dark:text-olive-950'
                      : 'text-olive-500 hover:bg-olive-100 dark:text-olive-400 dark:hover:bg-olive-800'
                  )}
                >
                  {child.label}
                </a>
              ))}
            </div>
          ))}
          <div className="my-2 border-t border-olive-200 dark:border-olive-700" />
          <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-olive-400 dark:text-olive-500">
            Billing
          </div>
          {pricingNavigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className={clsx(
                'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium',
                activeSection === item.id
                  ? 'bg-olive-950 text-white dark:bg-white dark:text-olive-950'
                  : 'text-olive-600 hover:bg-olive-100 dark:text-olive-300 dark:hover:bg-olive-800'
              )}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)

  const copyAsMarkdown = useCallback(() => {
    if (!contentRef.current) return
    const text = contentRef.current.innerText
    const markdown = `## ${title}\n\n${text}`
    navigator.clipboard.writeText(markdown)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [title])

  return (
    <section id={id} className="scroll-mt-28">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-olive-950 dark:text-white sm:text-3xl">
          {title}
        </h2>
        <button
          onClick={copyAsMarkdown}
          className="flex shrink-0 items-center gap-1.5 rounded-lg border border-olive-300 bg-white px-3 py-1.5 text-xs font-medium text-olive-600 transition-colors hover:border-olive-400 hover:bg-olive-50 hover:text-olive-950 dark:border-olive-700 dark:bg-olive-900 dark:text-olive-400 dark:hover:border-olive-600 dark:hover:bg-olive-800 dark:hover:text-white"
        >
          <span className="material-symbols-outlined text-[16px]">content_copy</span>
          {copied ? 'Copied!' : 'Copy Plaintext'}
        </button>
      </div>
      <div ref={contentRef} className="mt-6 space-y-4 text-justify text-olive-700 dark:text-olive-300">{children}</div>
    </section>
  )
}

function SubSection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)

  const copyAsMarkdown = useCallback(() => {
    if (!contentRef.current) return
    const text = contentRef.current.innerText
    const markdown = `### ${title}\n\n${text}`
    navigator.clipboard.writeText(markdown)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [title])

  return (
    <div id={id} className="scroll-mt-28 pt-8">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-display text-xl font-semibold tracking-tight text-olive-950 dark:text-white">
          {title}
        </h3>
        <button
          onClick={copyAsMarkdown}
          className="flex shrink-0 items-center gap-1.5 rounded-lg border border-olive-300 bg-white px-2.5 py-1 text-xs font-medium text-olive-600 transition-colors hover:border-olive-400 hover:bg-olive-50 hover:text-olive-950 dark:border-olive-700 dark:bg-olive-900 dark:text-olive-400 dark:hover:border-olive-600 dark:hover:bg-olive-800 dark:hover:text-white"
        >
          <span className="material-symbols-outlined text-[14px]">content_copy</span>
          {copied ? 'Copied!' : 'Copy Plaintext'}
        </button>
      </div>
      <div ref={contentRef} className="mt-4 space-y-4 text-justify text-olive-700 dark:text-olive-300">{children}</div>
    </div>
  )
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-xl bg-olive-950 p-4 text-sm text-olive-100 dark:bg-olive-900">
      <code>{children}</code>
    </pre>
  )
}

function Callout({ type = 'info', children }: { type?: 'info' | 'tip' | 'warning'; children: React.ReactNode }) {
  const styles = {
    info: 'border-blue-500/30 bg-blue-500/10 text-blue-900 dark:text-blue-200',
    tip: 'border-yellow-500 bg-yellow-100 text-yellow-950 dark:bg-yellow-900/30 dark:text-yellow-200',
    warning: 'border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200',
  }

  return (
    <div className={clsx('rounded-xl border-l-4 p-4 text-sm', styles[type])}>
      {children}
    </div>
  )
}

export default function Page() {
  const [activeSection, setActiveSection] = useState('getting-started')

  useEffect(() => {
    const allIds = [
      ...navigation.flatMap((item) => [item.id, ...(item.children?.map((c) => c.id) || [])]),
      ...pricingNavigation.map((item) => item.id),
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )

    allIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      {/* Header */}
      <div className="mb-12 border-b border-olive-200 pb-12 dark:border-olive-800">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-olive-950 dark:bg-white">
            <BookOpenIcon className="size-5 text-white dark:text-olive-950" />
          </div>
          <span className="text-sm font-medium text-olive-500">Documentation</span>
        </div>
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-olive-950 sm:text-5xl dark:text-white">
          Peel Documentation
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-olive-600 dark:text-olive-400">
          Everything you need to know about using Peel to create and edit images with Nano Banana. From getting started to advanced workflows.
        </p>
      </div>

      <MobileNav activeSection={activeSection} />

      <div className="flex gap-12">
        <Sidebar activeSection={activeSection} />

        {/* Main Content */}
        <main className="min-w-0 flex-1 space-y-16">
          {/* Getting Started */}
          <Section id="getting-started" title="Getting Started">
            <p>
              Welcome to Peel, the AI-powered batch image editor that transforms how creative teams work with images. Whether you're processing product photography, creating marketing assets, or experimenting with artistic styles, Peel makes it fast and effortless. No API keys to configure, no complex setup required—just open the app and start creating immediately.
            </p>
            <Callout type="tip">
              <strong>Quick Start:</strong> Head to <a href="https://banana.peel.diy" className="underline underline-offset-2 hover:no-underline">banana.peel.diy</a> and you can start making images immediately. No account required for your first few generations. When you're ready to scale up, create an account to purchase tokens and unlock unlimited batch processing.
            </Callout>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Your First Batch</h4>
            <p>
              Processing your first batch of images takes less than a minute. Follow these steps to experience the power of AI-driven batch editing:
            </p>
            <ol className="list-inside list-decimal space-y-2 pl-1">
              <li>Open Peel at <code className="rounded bg-olive-200 px-1.5 py-0.5 text-sm dark:bg-olive-800">banana.peel.diy</code></li>
              <li>Drag and drop images onto the upload area, or paste directly from your clipboard</li>
              <li>Type an instruction in the chat (e.g., "Remove the background") or tap a preset button for common operations</li>
              <li>Hit Send and watch Peel process your images concurrently with real-time progress tracking</li>
              <li>Download results individually or grab them all as a ZIP file</li>
            </ol>
            <p>
              That's the entire workflow. No credentials to configure, no billing to set up first, no tutorials to sit through. Peel is designed to get out of your way and let you focus on the creative work that matters.
            </p>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">The Three Panels</h4>
            <p>
              Peel's interface is organized into three main areas that work together to give you complete control over your image editing workflow. On mobile devices, these appear as tabs at the bottom of the screen for easy navigation.
            </p>
            <ul className="list-inside list-disc space-y-2 pl-1">
              <li><strong>Input Panel:</strong> Upload images via drag-and-drop, file browser, or clipboard paste. Add text prompts for image generation. Toggle between Batch mode (same edit on multiple images) and Single Job mode (combine images into one request).</li>
              <li><strong>Tasks Panel:</strong> Your command center with a chat interface and preset buttons. Monitor progress with a real-time progress bar, elapsed time counter, and token usage statistics as jobs run. View your instruction history and reuse previous prompts.</li>
              <li><strong>Results Panel:</strong> View completed images in a gallery layout with side-by-side comparison to originals. Download individual results, retry failed items, or redo completed items with different instructions. Export everything as a ZIP when you're done.</li>
            </ul>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Supported Formats</h4>
            <p>
              Peel accepts JPG, PNG, and WebP images as input. Output images are delivered in the same format as your input, with transparent backgrounds exported as PNG. For best results, use images with dimensions under 2048px—larger images are automatically resized to optimize processing speed and quality.
            </p>
          </Section>

          {/* Nano Banana Primer */}
          <Section id="nano-banana-primer" title="Nano Banana Primer">
            <p>
              Nano Banana is our friendly name for the AI pipeline that powers Peel. Under the hood, we use Google's Gemini 3 Pro Image model via Vercel AI Gateway—one of the most capable multimodal AI systems available today. We've wrapped this powerful technology in an interface designed for speed and simplicity, so you get professional-grade AI image editing without the complexity of working directly with AI APIs.
            </p>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">What Makes It Special</h4>
            <p>
              Gemini's multimodal architecture sets it apart from traditional image editing tools and even other AI models. Here's what you can expect:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-1">
              <li><strong>Multi-modal understanding:</strong> Gemini processes both images and text together in a unified way, enabling natural language editing that understands the semantic content of your images—not just pixels.</li>
              <li><strong>Context awareness:</strong> The model understands what's in your image and can make intelligent, targeted edits. Ask it to "remove the person in the background" and it knows exactly what you mean.</li>
              <li><strong>Batch-native architecture:</strong> Process dozens of images concurrently with the same instruction. Peel's infrastructure is built from the ground up for batch operations.</li>
              <li><strong>Resolution flexibility:</strong> Output at 1K, 2K, or 4K resolution depending on your needs. Higher resolutions cost more tokens but deliver sharper results for print and large-format displays.</li>
              <li><strong>Consistent quality:</strong> Unlike models that produce unpredictable results, Gemini maintains high consistency across batch operations, ensuring your processed images have a cohesive look.</li>
            </ul>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Model Capabilities</h4>
            <p>
              Gemini can generate images from scratch, edit existing images, remove backgrounds, upscale resolution, transform artistic styles, and much more. You interact with these capabilities through natural language instructions—just describe what you want in plain English. The model handles the technical complexity behind the scenes.
            </p>
            <CodeBlock>{`// Example: Simple generation
"A golden retriever wearing sunglasses at the beach"

// Example: Image editing
[Upload photo] + "Remove the person in the background"

// Example: Style transfer
[Upload photo] + "Make this look like a watercolor painting"

// Example: Batch operation
[Upload 20 product photos] + "Remove BG" preset`}</CodeBlock>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Understanding Limitations</h4>
            <p>
              While Nano Banana is remarkably capable, it's important to understand its limitations. AI image generation can sometimes produce unexpected results, especially with complex instructions or unusual compositions. For critical work, always review outputs carefully. The model may struggle with very specific brand elements, exact text rendering, or highly technical subjects. When in doubt, use reference images and clear, specific instructions to guide the AI toward your desired outcome.
            </p>
          </Section>

          {/* Making an Image */}
          <Section id="making-an-image" title="Making an Image">
            <p>
              Peel supports two fundamental input types: existing images you want to transform, and text prompts for generating new images from scratch. Both input types flow through the same powerful AI pipeline, and you can freely mix them in the same batch. This flexibility means you can process a product catalog while simultaneously generating new hero images—all in one session.
            </p>

            <SubSection id="prompting-with-images" title="Prompting with Images">
              <p>
                Image-to-image editing is Peel's core strength and the most common workflow for creative professionals. Upload your existing images, provide a natural language instruction describing what you want changed, and let the AI transform them—all at once. The model sees your image, understands its content and context, and applies your requested changes intelligently.
              </p>
              <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">How It Works</h4>
              <p>
                The image editing workflow is designed to be intuitive and fast. Here's the complete process from start to finish:
              </p>
              <ol className="list-inside list-decimal space-y-2 pl-1">
                <li>Drag and drop images into the Input Panel, browse to select files, or paste directly from your clipboard</li>
                <li>Type an instruction in the chat describing what you want changed, or tap a preset button for common operations</li>
                <li>Choose your output size: 1K for quick iterations, 2K for web use, or 4K for print-quality results</li>
                <li>Send and watch Peel process your images concurrently with real-time progress updates</li>
                <li>Review results in the gallery, retry any that need adjustments, and download when satisfied</li>
              </ol>
              <Callout type="tip">
                <strong>Pro tip:</strong> Images larger than 2048px are automatically resized before processing to optimize speed and quality. For the sharpest results, start with source images that are clean and well-lit—the AI enhances what's there, so garbage in means garbage out.
              </Callout>
              <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Best Practices</h4>
              <p>
                Getting great results from image editing requires clear communication with the AI. Follow these guidelines for consistent, high-quality output:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-1">
                <li>Use high-quality source images for best results—sharp, well-exposed photos produce better output than blurry or poorly lit ones</li>
                <li>Be specific about what you want to change: "remove the background" beats "clean this up" every time</li>
                <li>Reference specific areas when needed: "the background", "the person's shirt", "the left side of the frame"</li>
                <li>Use presets for common operations—they're optimized prompts that consistently deliver great results</li>
                <li>Iterate quickly: if the first result isn't perfect, adjust your instruction and try again with the Redo function</li>
              </ul>
            </SubSection>

            <SubSection id="prompting-with-text" title="Prompting with Text">
              <p>
                Text-to-image generation creates images entirely from your written description, without any source image required. This is perfect for creating new assets from scratch, generating placeholder images for mockups, or exploring creative concepts before committing to a photoshoot. Add text prompts to your input queue just like images—they'll be processed in the same batch.
              </p>
              <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Writing Effective Prompts</h4>
              <p>
                The key to great text-to-image generations is descriptive, specific prompts. Vague descriptions produce generic results, while detailed prompts give the AI the context it needs to create exactly what you envision. Include details about these key aspects:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-1">
                <li><strong>Subject:</strong> What's the main focus of the image? Be specific about objects, people, or scenes.</li>
                <li><strong>Style:</strong> Photorealistic, illustration, watercolor, 3D render, cinematic, documentary?</li>
                <li><strong>Lighting:</strong> Natural light, studio lighting, dramatic shadows, golden hour, overcast?</li>
                <li><strong>Composition:</strong> Close-up, wide shot, overhead view, rule of thirds, centered?</li>
                <li><strong>Mood:</strong> Cheerful, mysterious, professional, playful, serene, energetic?</li>
                <li><strong>Technical details:</strong> Depth of field, color palette, aspect ratio preferences</li>
              </ul>
              <CodeBlock>{`// Basic prompt - vague, generic results
"A coffee cup on a wooden table"

// Better prompt - adds atmosphere and style
"A ceramic coffee cup with latte art, on a rustic wooden
table, morning sunlight streaming through a window,
cozy café atmosphere, shallow depth of field"

// Professional prompt - precise commercial quality
"Product photography of a minimalist ceramic coffee cup,
white background, soft studio lighting, 45-degree angle,
high-end commercial style, sharp focus"`}</CodeBlock>
              <Callout type="tip">
                <strong>Pro tip:</strong> Save your best prompts! When you find a prompt structure that works well for your needs, you can create a custom preset to reuse it across future sessions. This is especially valuable for maintaining brand consistency.
              </Callout>
            </SubSection>
          </Section>

          {/* Batch Jobs */}
          <Section id="batch-jobs" title="Batch Jobs">
            <p>
              Batch processing is Peel's core superpower and the feature that makes it indispensable for creative teams. Instead of processing images one at a time like traditional AI tools, Peel lets you upload dozens or even hundreds of images, give one instruction, and watch them all transform concurrently. This fundamentally changes how you think about AI-powered image editing—it becomes a production tool, not just an experiment.
            </p>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">How Batch Mode Works</h4>
            <p>
              Batch mode is the default processing mode in Peel, optimized for applying the same transformation to multiple images. Here's how to run a batch job:
            </p>
            <ol className="list-inside list-decimal space-y-2 pl-1">
              <li>Drag and drop multiple images into the Input Panel, or select them from your file browser</li>
              <li>Make sure "Batch" mode is selected (not "Single Job")—this is the default</li>
              <li>Type an instruction in the chat or tap a preset button—your instruction applies to all images identically</li>
              <li>Hit Send and watch the progress bar as images process in parallel with real-time status updates</li>
              <li>Download results individually by clicking each image, or click "Download All" for a ZIP archive</li>
            </ol>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Smart Concurrency</h4>
            <p>
              Peel automatically manages concurrency to balance speed with reliability. The system adjusts how many images process simultaneously based on your batch size, using staggered start times to prevent server overload:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-1">
              <li><strong>Small batches (under 5 images):</strong> 3 images process at once with 500ms stagger between starts</li>
              <li><strong>Medium batches (5-9 images):</strong> 2 images at once with 1000ms stagger for stability</li>
              <li><strong>Large batches (10+ images):</strong> Sequential processing with 2000ms delays ensures reliable completion</li>
            </ul>
            <p>
              This adaptive approach means small batches complete quickly while large batches run reliably without overwhelming the AI infrastructure.
            </p>
            <Callout type="tip">
              <strong>Pro tip:</strong> If any image fails during processing, Peel automatically retries up to 3 times with exponential backoff. You can also manually retry individual items from the Results Panel using the Redo function—perfect for fine-tuning specific images that didn't quite hit the mark.
            </Callout>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Common Batch Workflows</h4>
            <p>
              Batch processing unlocks workflows that would be impractical with single-image tools. Here are some popular use cases:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-1">
              <li><strong>E-commerce:</strong> Remove backgrounds from an entire product catalog in one session</li>
              <li><strong>Brand consistency:</strong> Add brand colors or apply consistent styling to marketing images</li>
              <li><strong>Archive restoration:</strong> Upscale a library of legacy images to modern resolutions</li>
              <li><strong>Editorial:</strong> Desaturate photos for a cohesive muted look across a photo essay</li>
              <li><strong>Content variation:</strong> Generate multiple variations of hero images with the Duplicate preset</li>
              <li><strong>Social media:</strong> Transform product shots into multiple artistic styles for different platforms</li>
            </ul>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Monitoring Progress</h4>
            <p>
              While your batch runs, the Tasks Panel shows comprehensive progress information: a visual progress bar, elapsed time, completed/pending/failed counts, and running token usage. Each work item in the Results Panel shows its individual status so you can track exactly which images are processing, completed, or need attention.
            </p>
          </Section>

          {/* Combining Images */}
          <Section id="combining-images" title="Combining Images">
            <p>
              Sometimes you need the AI to see multiple images together—for compositing, style matching, or creating something that references several visual sources. That's exactly what Single Job mode is designed for. While Batch mode treats each image independently, Single Job mode sends all your uploaded images to the AI as one unified request, giving the model full context to understand relationships between images.
            </p>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Single Job Mode</h4>
            <p>
              Toggle from "Batch" to "Single Job" in the Input Panel to switch modes. Now all your uploaded images are sent to the AI as one combined request. The model sees everything together and can understand how the images relate to each other—perfect for tasks that require comparing, combining, or referencing multiple sources.
            </p>
            <ul className="list-inside list-disc space-y-2 pl-1">
              <li><strong>Compositing:</strong> Combine a product shot with a lifestyle background seamlessly</li>
              <li><strong>Style matching:</strong> Show a reference image and ask "make my photo look like this"</li>
              <li><strong>Multi-source creation:</strong> Reference several images to create something entirely new</li>
              <li><strong>Before/after:</strong> Show the AI an example transformation and ask it to apply the same change</li>
              <li><strong>Comparison-based editing:</strong> "Make the colors in image 1 match the palette of image 2"</li>
            </ul>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Example Workflows</h4>
            <p>
              Here are some practical examples of how to use Single Job mode effectively:
            </p>
            <CodeBlock>{`// Composite example - place product in scene
[Image 1: Product on white background]
[Image 2: Lifestyle kitchen photo]
Mode: Single Job
Prompt: "Place the product from image 1 naturally on the
kitchen counter in image 2, matching the lighting"

// Style transfer example - match visual style
[Image 1: Your photo to transform]
[Image 2: Style reference with desired look]
Mode: Single Job
Prompt: "Apply the color grading, mood, and visual style
from image 2 to image 1"

// Brand consistency example
[Image 1: Product photo A]
[Image 2: Product photo B with ideal lighting]
Mode: Single Job
Prompt: "Adjust the lighting in image 1 to match image 2"`}</CodeBlock>
            <Callout type="tip">
              <strong>When to use which mode:</strong> Use Batch mode when you want the same edit applied independently to many images—like removing backgrounds from a product catalog. Use Single Job mode when the AI needs to understand the relationship between multiple images—like applying one image's style to another, or compositing elements together.
            </Callout>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Tips for Better Composites</h4>
            <p>
              When combining images, results improve dramatically with clear, specific instructions. Tell the AI exactly which elements to take from which image, how they should be positioned, and what adjustments to make for seamless integration. If your first attempt doesn't match your vision, use the Redo function to refine your prompt and try again.
            </p>
          </Section>

          {/* Presets */}
          <Section id="presets" title="Presets">
            <p>
              Presets are one-tap transformations that appear as buttons in the chat panel, giving you instant access to common operations without typing instructions. Peel ships with 6 default presets optimized for the most frequent image editing tasks, and you can create unlimited custom presets for workflows you repeat often. Presets work seamlessly with batch processing—apply them to dozens of images at once.
            </p>
            <Callout type="tip">
              <strong>Two types of presets:</strong> "Direct" presets apply immediately when tapped—perfect for standard operations like background removal. "Ask" presets prompt you for additional input first (like a color value or style name) before processing, giving you flexibility while maintaining one-tap convenience.
            </Callout>

            <SubSection id="remove-bg" title="Remove BG">
              <p>
                The Remove BG preset is a direct-action button that removes the background from your images and makes them transparent. One tap, no questions asked, no configuration needed. This is by far the most popular preset, especially for e-commerce and product photography workflows where clean backgrounds are essential.
              </p>
              <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Key Features</h4>
              <ul className="list-inside list-disc space-y-2 pl-1">
                <li>Works on photos, illustrations, product shots, and mixed media with equal effectiveness</li>
                <li>Handles complex edges like hair, fur, transparent objects, and intricate details</li>
                <li>Outputs transparent PNG format automatically—ready for use in design tools</li>
                <li>Perfect for batch processing entire product catalogs in a single session</li>
                <li>AI understands subject vs. background context, not just edge detection</li>
              </ul>
              <Callout type="tip">
                <strong>Pro tip:</strong> For best results with Remove BG, use images where the subject is clearly distinguishable from the background. High contrast between subject and background produces cleaner edges.
              </Callout>
            </SubSection>

            <SubSection id="add-brand-color" title="Add Brand Color">
              <p>
                Add Brand Color is an ask preset that prompts you to select a color using a visual color picker, then intelligently applies that color to suitable elements in your image. The AI determines which elements make sense to recolor—clothing, accessories, backgrounds, objects—while preserving natural skin tones and other elements that shouldn't change.
              </p>
              <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Key Features</h4>
              <ul className="list-inside list-disc space-y-2 pl-1">
                <li>Uses a visual color picker for precise color selection—enter hex codes or pick from the spectrum</li>
                <li>AI intelligently decides which elements to recolor based on context and composition</li>
                <li>Great for brand consistency across marketing images and campaign materials</li>
                <li>Works in batch mode to apply the exact same brand color across hundreds of images</li>
                <li>Preserves natural elements like skin tones while transforming applicable surfaces</li>
              </ul>
              <Callout type="tip">
                <strong>Example use case:</strong> You're launching a campaign with a signature purple (#7C3AED). Upload all your product shots, tap Add Brand Color, select your purple, and watch as clothing, accessories, and backgrounds transform to match your brand—all while keeping products and people looking natural.
              </Callout>
            </SubSection>

            <SubSection id="duplicate" title="Duplicate">
              <p>
                The Duplicate preset generates multiple variations of your image from different simulated camera angles and perspectives. When you tap it, you're asked how many copies you want (1-10), and the AI creates that many unique interpretations of the same scene. This is invaluable for A/B testing, presenting creative options to stakeholders, or generating variety for social media content.
              </p>
              <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Key Features</h4>
              <ul className="list-inside list-disc space-y-2 pl-1">
                <li>Creates scene variations while maintaining subject consistency and identity</li>
                <li>Uses 8 predefined camera angles (front, side, three-quarter, etc.) for natural variety</li>
                <li>Perfect for A/B testing hero images or presenting options to clients and stakeholders</li>
                <li>Each variation is a unique AI interpretation—not just filters or crops</li>
                <li>Specify 1-10 variations per source image to match your needs</li>
              </ul>
            </SubSection>

            <SubSection id="upscale" title="Upscale">
              <p>
                The Upscale preset enhances image resolution and recovers detail using AI. Unlike traditional upscaling that just interpolates pixels (resulting in blurry enlargements), Nano Banana intelligently generates new detail that makes sense for the image content. This is perfect for rescuing low-resolution images, preparing web images for print, or enhancing screenshots.
              </p>
              <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Key Features</h4>
              <ul className="list-inside list-disc space-y-2 pl-1">
                <li>AI-powered detail enhancement—generates plausible detail, not just blur</li>
                <li>Works on photos, artwork, screenshots, and compressed images</li>
                <li>Particularly effective on JPEG artifacts and compression damage</li>
                <li>Combine with output size setting (1K/2K/4K) to control final resolution</li>
                <li>Maintains original image character while improving clarity and sharpness</li>
              </ul>
              <Callout type="tip">
                <strong>Pro tip:</strong> For maximum resolution boost, set your output size to 4K when using Upscale. The AI will enhance details and generate the highest quality output possible from your source image.
              </Callout>
            </SubSection>

            <SubSection id="transform" title="Transform">
              <p>
                Transform is an ask preset that converts your images into any artistic style you can describe. When you tap it, you're prompted to enter a style description—anything from "watercolor painting" to "cyberpunk neon aesthetic" to "1950s vintage advertisement." The AI interprets your description and transforms your image accordingly while preserving the core composition and subject.
              </p>
              <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Popular Style Transformations</h4>
              <ul className="list-inside list-disc space-y-2 pl-1">
                <li><strong>Photo → Illustration:</strong> "vector illustration", "line art", "flat design", "comic book style"</li>
                <li><strong>Photo → Painting:</strong> "oil painting", "watercolor", "impressionist", "renaissance portrait"</li>
                <li><strong>Photo → Digital Art:</strong> "anime", "pixel art", "3D render", "low poly", "vaporwave"</li>
                <li><strong>Photo → Traditional:</strong> "pencil sketch", "charcoal drawing", "ink wash", "woodcut print"</li>
              </ul>
              <CodeBlock>{`// Example transform style inputs
"watercolor painting with soft edges"
"Studio Ghibli anime style"
"minimalist vector illustration, flat colors"
"cyberpunk neon aesthetic, high contrast"
"vintage 1970s film photograph"
"renaissance oil painting portrait"`}</CodeBlock>
            </SubSection>

            <SubSection id="desaturate" title="Desaturate">
              <p>
                The Desaturate preset reduces color saturation in your images for a muted, editorial aesthetic. Unlike a simple grayscale conversion, this preset intelligently reduces vibrancy while preserving color information—creating that sophisticated, cohesive look popular in modern brand photography and lifestyle content. Colors remain present but subdued.
              </p>
              <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Key Features</h4>
              <ul className="list-inside list-disc space-y-2 pl-1">
                <li>Creates muted, editorial-style imagery with subtle color retention</li>
                <li>Great for establishing consistent visual branding across diverse source images</li>
                <li>Works exceptionally well in batch mode for creating cohesive image sets</li>
                <li>Preserves color relationships while reducing overall saturation</li>
                <li>Perfect for lifestyle brands, editorial content, and sophisticated marketing materials</li>
              </ul>
            </SubSection>

            <SubSection id="custom-presets" title="Custom Presets">
              <p>
                Custom presets let you save your own frequently-used transformations as one-tap buttons. You can configure custom prompts, input validation rules, display templates, and even attach reference images that get sent with every request. This is how you scale your workflows—define your process once, then apply it consistently across all future work.
              </p>
              <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Creating a Custom Preset</h4>
              <p>
                Building a custom preset takes just a minute and pays dividends every time you use it. Here's the complete process:
              </p>
              <ol className="list-inside list-decimal space-y-2 pl-1">
                <li>Open the preset configuration modal from your account Settings</li>
                <li>Choose between Direct (immediate action) or Ask (prompts for user input first)</li>
                <li>Write your prompt instruction—use <code className="rounded bg-olive-200 px-1.5 py-0.5 text-sm dark:bg-olive-800">{"{{INPUT}}"}</code> as a placeholder for user input in Ask presets</li>
                <li>Optionally attach up to 3 reference images (auto-compressed to 1MB each)</li>
                <li>Configure validation rules for Ask presets: text, number (with min/max), or color picker</li>
                <li>Set a custom label, icon, and display order for the button</li>
                <li>Save—your preset immediately appears in the chat panel</li>
              </ol>
              <CodeBlock>{`// Example: "Add Watermark" preset (Direct type)
Type: Direct
Prompt: "Add a subtle semi-transparent watermark reading
'SAMPLE' diagonally across the center of the image"

// Example: "Resize for Social" preset (Ask type)
Type: Ask
Ask Message: "Which platform? (Instagram, Twitter, LinkedIn)"
Prompt: "Resize and crop this image optimally for {{INPUT}}"
Validation: text

// Example: "Set Background Color" preset (Ask type)
Type: Ask
Ask Message: "Choose background color"
Prompt: "Replace the background with a solid {{INPUT}} color"
Validation: color`}</CodeBlock>
              <Callout type="tip">
                <strong>Reference images:</strong> Attach up to 3 reference images to any custom preset. These images are sent to the AI alongside your instruction and input images with every use—perfect for brand style guides, example outputs, or visual instructions that words can't fully capture.
              </Callout>
            </SubSection>
          </Section>

          {/* Reference Images */}
          <Section id="reference-images" title="Reference Images">
            <p>
              Reference images let you show the AI what you want instead of relying solely on text descriptions. Sometimes a picture really is worth a thousand words—especially for nuanced visual concepts like brand aesthetics, specific color treatments, or composition styles that are difficult to articulate. In Peel, reference images are attached to custom presets and sent along with every request that uses that preset.
            </p>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">How Reference Images Work</h4>
            <p>
              When you create a custom preset, you can attach up to 3 reference images. These images are sent to the AI alongside your text instruction and input images, giving the model rich visual context for understanding exactly what you want. The AI can then reference these examples when processing your images, resulting in more consistent and on-brand outputs.
            </p>
            <ul className="list-inside list-disc space-y-2 pl-1">
              <li><strong>Style guides:</strong> Attach brand guidelines, mood boards, or examples of your desired aesthetic</li>
              <li><strong>Color palettes:</strong> Show the exact colors and tones you want applied to outputs</li>
              <li><strong>Composition examples:</strong> Demonstrate the layout, framing, or arrangement you're targeting</li>
              <li><strong>Product templates:</strong> Reference images of ideal product shots for consistent e-commerce styling</li>
              <li><strong>Before/after examples:</strong> Show the AI what a successful transformation looks like</li>
            </ul>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Adding Reference Images to a Preset</h4>
            <p>
              Attaching reference images to a preset is straightforward. Once attached, they're included automatically with every use of that preset:
            </p>
            <ol className="list-inside list-decimal space-y-2 pl-1">
              <li>Open the preset configuration modal from your account Settings</li>
              <li>Create a new preset or edit an existing one</li>
              <li>Scroll down to the Reference Images section in the configuration form</li>
              <li>Upload up to 3 images (each is auto-compressed to 1MB max for optimal performance)</li>
              <li>Save your preset—now every use of this preset automatically includes your references</li>
            </ol>
            <Callout type="tip">
              <strong>Example use case:</strong> Create a "Match Brand Style" preset with your brand's visual guidelines and example outputs attached. Write a prompt like "Apply our brand styling to this image." Now every image you process with that preset will be guided by your brand references, ensuring consistent output across your entire team without anyone needing to remember specific instructions.
            </Callout>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Best Practices for Reference Images</h4>
            <p>
              To get the most out of reference images, choose clear, high-quality examples that strongly represent your desired outcome. Multiple references work best when they're consistent with each other—conflicting visual styles can confuse the AI. For brand work, include your most definitive style examples. For technical transformations, include before/after pairs showing exactly what change you want.
            </p>
          </Section>

          {/* Pricing Section Divider */}
          <div className="!my-20 border-t border-olive-200 dark:border-olive-800" />

          {/* Pricing */}
          <Section id="pricing" title="Pricing">
            <p>
              Peel uses simple, transparent pay-as-you-go pricing. No subscriptions, no monthly commitments, no surprise fees, no unused credits that vanish at month-end. You purchase tokens when you need them, and you use tokens when you process images. That's the entire billing model—designed to be predictable and fair for teams of any size.
            </p>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Token Bundles</h4>
            <p>
              Choose the bundle that matches your volume. Larger bundles offer better per-image rates, making them ideal for teams with ongoing image processing needs:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-olive-200 bg-white p-5 dark:border-olive-700 dark:bg-olive-900">
                <h5 className="font-display font-semibold text-olive-950 dark:text-white">Starter</h5>
                <p className="mt-1 text-2xl font-bold text-olive-950 dark:text-white">$5</p>
                <p className="mt-2 text-sm text-olive-500">~35 images at 1K/2K</p>
                <p className="mt-1 text-sm text-olive-500">~20 images at 4K</p>
              </div>
              <div className="rounded-xl border border-olive-200 bg-white p-5 dark:border-olive-700 dark:bg-olive-900">
                <h5 className="font-display font-semibold text-olive-950 dark:text-white">Pro</h5>
                <p className="mt-1 text-2xl font-bold text-olive-950 dark:text-white">$35</p>
                <p className="mt-2 text-sm text-olive-500">~260 images at 1K/2K</p>
                <p className="mt-1 text-sm text-olive-500">~145 images at 4K</p>
              </div>
              <div className="rounded-xl border-2 border-olive-950 bg-white p-5 dark:border-white dark:bg-olive-900">
                <div className="mb-2 inline-block rounded-full bg-olive-950 px-2 py-0.5 text-xs font-medium text-white dark:bg-white dark:text-olive-950">
                  Best value
                </div>
                <h5 className="font-display font-semibold text-olive-950 dark:text-white">Power</h5>
                <p className="mt-1 text-2xl font-bold text-olive-950 dark:text-white">$90</p>
                <p className="mt-2 text-sm text-olive-500">~670 images at 1K/2K</p>
                <p className="mt-1 text-sm text-olive-500">~375 images at 4K</p>
              </div>
            </div>
            <p className="mt-6">
              Tokens never expire. Use them whenever you need them, at whatever pace works for your projects. Your current balance is always visible in the header, and you can purchase additional tokens at any time without losing your existing balance. Tokens are tied to your account, so they persist across sessions and devices.
            </p>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Getting Started Free</h4>
            <p>
              You can try Peel without purchasing tokens—we offer a few free generations for new users to experience the platform before committing. Once you've seen what Peel can do, purchase a Starter bundle to continue processing images at scale.
            </p>
          </Section>

          {/* Tokens */}
          <Section id="tokens" title="Tokens">
            <p>
              Tokens are the currency of Peel's AI processing. Every image you process consumes tokens based on a simple formula: the output resolution you choose determines the cost. All operations—whether you're removing backgrounds, transforming styles, upscaling, or running custom presets—use the same token rate per image. This makes cost estimation straightforward: count your images, pick your resolution, calculate your spend.
            </p>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Cost by Resolution</h4>
            <p>
              Higher resolution output requires more AI computation and produces larger files, which is why 4K costs more than 1K/2K. Choose the resolution that matches your end use:
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-olive-200 dark:border-olive-700">
              <table className="w-full text-sm">
                <thead className="bg-olive-100 dark:bg-olive-800">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-olive-950 dark:text-white">Output Size</th>
                    <th className="px-4 py-3 text-right font-semibold text-olive-950 dark:text-white">Cost per Image</th>
                    <th className="px-4 py-3 text-right font-semibold text-olive-950 dark:text-white">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-olive-200 bg-white dark:divide-olive-700 dark:bg-olive-900">
                  <tr>
                    <td className="px-4 py-3">1K resolution</td>
                    <td className="px-4 py-3 text-right font-mono">~$0.13</td>
                    <td className="px-4 py-3 text-right text-olive-500">Quick previews, thumbnails</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">2K resolution</td>
                    <td className="px-4 py-3 text-right font-mono">~$0.13</td>
                    <td className="px-4 py-3 text-right text-olive-500">Web, social media</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">4K resolution</td>
                    <td className="px-4 py-3 text-right font-mono">~$0.24</td>
                    <td className="px-4 py-3 text-right text-olive-500">Print, large displays</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              All operations—Remove BG, Transform, Upscale, Desaturate, Add Brand Color, and any custom presets—cost the same per image at a given resolution. There's no premium for complex operations. The only variable is your chosen output resolution.
            </p>
            <h4 className="pt-4 font-display text-lg font-semibold text-olive-950 dark:text-white">Tracking Your Usage</h4>
            <p>
              Peel makes it easy to understand exactly where your tokens go with comprehensive usage tracking:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-1">
              <li>Your token balance is always visible in the header—watch it update in real-time as you process</li>
              <li>Each batch displays elapsed time, progress, and running token usage as images complete</li>
              <li>The Account menu shows your complete job history with token usage per session</li>
              <li>Token purchases are confirmed instantly and reflected in your balance immediately</li>
            </ul>
            <Callout type="tip">
              <strong>Pro tip:</strong> If a generation fails, Peel automatically retries up to 3 times with exponential backoff. You're only charged for successful outputs—failed attempts don't consume tokens. This means you can process with confidence knowing you won't pay for images that don't work out.
            </Callout>
          </Section>

          {/* Footer */}
          <div className="!mt-20 rounded-2xl bg-olive-200/50 p-8 dark:bg-olive-800/30">
            <h3 className="font-display text-xl font-semibold text-olive-950 dark:text-white">
              Need help?
            </h3>
            <p className="mt-2 text-olive-600 dark:text-olive-400">
              Can't find what you're looking for? Reach out and we'll help you out.
            </p>
            <a
              href="mailto:clark@superfun.team"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-olive-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-olive-800 dark:bg-white dark:text-olive-950 dark:hover:bg-olive-100"
            >
              Contact Support
            </a>
          </div>
        </main>
      </div>
    </div>
  )
}
