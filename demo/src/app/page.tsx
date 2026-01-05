import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { PartnerLogos } from '@/components/elements/partner-logos'
import { Screenshot } from '@/components/elements/screenshot'
import { WorkflowDemo } from '@/components/elements/workflow-demo'
import { Abstract1Icon } from '@/components/icons/abstract-1-icon'
import { Abstract2Icon } from '@/components/icons/abstract-2-icon'
import { Abstract3Icon } from '@/components/icons/abstract-3-icon'
import { Abstract4Icon } from '@/components/icons/abstract-4-icon'
import { Abstract5Icon } from '@/components/icons/abstract-5-icon'
import { Abstract6Icon } from '@/components/icons/abstract-6-icon'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { MaterialIcon } from '@/components/icons/material-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { LightingBoltIcon } from '@/components/icons/lighting-bolt-icon'
import { RocketIcon } from '@/components/icons/rocket-icon'
import { SparklesIcon } from '@/components/icons/sparkles-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { Feature, FeaturesTwoColumnWithDemos } from '@/components/sections/features-two-column-with-demos'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'
import { Testimonial, TestimonialThreeColumnGrid } from '@/components/sections/testimonials-three-column-grid'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroLeftAlignedWithDemo
        id="hero"
        headline="The easiest way to make and edit images with Nano Banana."
        subheadline={
          <p>
            More than a Nano Banana Pro wrapper. No subscription. Just pay-as-you-go image editing with the best AI model available today. As it should be.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="https://banana.peel.diy" size="lg">
              Start now
            </ButtonLink>

            <PlainButtonLink href="#demo" size="lg">
              See it in action <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
        demo={
          <div id="demo">
            <Screenshot className="!overflow-visible rounded-md lg:hidden" placement="bottom">
              <WorkflowDemo
                className="rounded-t-xl"
                backgroundImage={
                  <Image
                    src="/img/screenshots/peel-preview.webp"
                    alt="Peel batch image editor preview"
                    width={2000}
                    height={1408}
                    className="rounded-t-xl bg-white/75 dark:bg-black/75"
                  />
                }
              />
            </Screenshot>
            <Screenshot className="!overflow-visible rounded-3xl max-lg:hidden" placement="bottom">
              <WorkflowDemo
                className="rounded-t-2xl"
                backgroundImage={
                  <Image
                    src="/img/screenshots/peel-preview.webp"
                    alt="Peel batch image editor preview"
                    className="rounded-t-2xl bg-white/75 dark:bg-black/75"
                    width={3440}
                    height={1990}
                  />
                }
              />
            </Screenshot>
            <div className="mt-12 mb-4 px-6 lg:mt-16 lg:mb-6 lg:px-8">
              <PartnerLogos />
            </div>
          </div>
        }
        footer={
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                <Abstract1Icon className="h-5 w-5 text-olive-950 dark:text-white" />
                <h3 className="font-display text-base font-semibold leading-snug text-olive-950 dark:text-white">Zero setup.</h3>
              </div>
              <p className="text-sm text-olive-700 dark:text-olive-400">From photo or text prompt, open Peel and start making images in seconds.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                <Abstract2Icon className="h-5 w-5 text-olive-950 dark:text-white" />
                <h3 className="font-display text-base font-semibold leading-snug text-olive-950 dark:text-white">No API keys.</h3>
              </div>
              <p className="text-sm text-olive-700 dark:text-olive-400">You don't need to be a wizard to make and edit images. Or do be a wizard, we don't care.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                <Abstract3Icon className="h-5 w-5 text-olive-950 dark:text-white" />
                <h3 className="font-display text-base font-semibold leading-snug text-olive-950 dark:text-white">On brand, always.</h3>
              </div>
              <p className="text-sm text-olive-700 dark:text-olive-400">Add brand colors, swap logos, never get stuck with a boring stock photo again.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                <Abstract4Icon className="h-5 w-5 text-olive-950 dark:text-white" />
                <h3 className="font-display text-base font-semibold leading-snug text-olive-950 dark:text-white">Big batch energy.</h3>
              </div>
              <p className="text-sm text-olive-700 dark:text-olive-400">Edit one image or a dozen at a time, just don't tell your boss (or do, they'll love it).</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                <Abstract5Icon className="h-5 w-5 text-olive-950 dark:text-white" />
                <h3 className="font-display text-base font-semibold leading-snug text-olive-950 dark:text-white">Custom presets.</h3>
              </div>
              <p className="text-sm text-olive-700 dark:text-olive-400">Save time on repeatable tasks, or define your own with deep customization.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                <Abstract6Icon className="h-5 w-5 text-olive-950 dark:text-white" />
                <h3 className="font-display text-base font-semibold leading-snug text-olive-950 dark:text-white">Intern ready.</h3>
              </div>
              <p className="text-sm text-olive-700 dark:text-olive-400">Easy enough an intern can do it, powerful enough to replace a team of human editors.</p>
            </div>
          </div>
        }
      />
      {/* Features */}
      <FeaturesTwoColumnWithDemos
        id="features"
        eyebrow="Dead simple"
        headline="Just like Nano Banana Pro, but you actually want to use it."
        subheadline={
          <p>
            We took the best AI model and made it actually approachable. Faster, cleaner, better.
          </p>
        }
        features={
          <>
            <Feature
              reversed
              demo={
                <Screenshot placement="bottom" compact>
                  <Image
                    src="/img/screenshots/feature-batch.webp"
                    alt="Batch image processing"
                    className="rounded-t-xl bg-white/75 dark:bg-black/75"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline={
                <span className="flex items-center gap-2">
                  <MaterialIcon name="grid_view" className="text-xl text-olive-500" />
                  Make one image or hundreds
                </span>
              }
              subheadline={
                <p>
                  From big batches to tiny copy edits. Seriously. No API keys to manage, no credentials to lose, no configs to mess up. Just start.
                </p>
              }
              cta={
                <Link href="https://banana.peel.diy">
                  Get started <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              reversed
              demo={
                <Screenshot placement="bottom" compact>
                  <Image
                    src="/img/screenshots/feature-presets.webp"
                    alt="Custom presets"
                    className="rounded-t-xl bg-white/75 dark:bg-black/75"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline={
                <span className="flex items-center gap-2">
                  <MaterialIcon name="discover_tune" className="text-xl text-olive-500" />
                  Defeat repeat tasks
                </span>
              }
              subheadline={
                <p>Tired of making similar edits? Setup custom presets with custom rules for dang near anything. Never sweat a boring a task again.</p>
              }
              cta={
                <Link href="https://banana.peel.diy">
                  Get started <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              reversed
              demo={
                <Screenshot placement="bottom" compact>
                  <Image
                    src="/img/screenshots/feature-persona.webp"
                    alt="Picture perfect presets"
                    className="rounded-t-xl bg-white/75 dark:bg-black/75"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline={
                <span className="flex items-center gap-2">
                  <MaterialIcon name="photo_prints" className="text-xl text-olive-500" />
                  Picture perfect presets
                </span>
              }
              subheadline={
                <p>Upload your photos, logos, or layouts and Peel will use them in a perfect match. Or save yourself as a persona.</p>
              }
              cta={
                <Link href="https://banana.peel.diy">
                  Get started <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              reversed
              demo={
                <Screenshot placement="bottom" compact>
                  <Image
                    src="/img/screenshots/feature-tokens.webp"
                    alt="Token tracking"
                    className="rounded-t-xl bg-white/75 dark:bg-black/75"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline={
                <span className="flex items-center gap-2">
                  <MaterialIcon name="toll" className="text-xl text-olive-500" />
                  Keep track of every token
                </span>
              }
              subheadline={
                <p>Track every incoming and outgoing API call token price, and never pay for failed or rejected calls. Pro Plans get tokens at literal cost.</p>
              }
              cta={
                <Link href="https://banana.peel.diy">
                  Get started <ArrowNarrowRightIcon />
                </Link>
              }
            />
          </>
        }
      />
      {/* Stats */}
      <StatsWithGraph
        id="stats"
        eyebrow="Work Faster"
        headline="Hand crafted edits, just with way more hands."
        subheadline={
          <p>
            Peel is already powering dozens of projects. It can certainly help with yours. From solo devs to entire teams, we make Nano Banana actually usable.
          </p>
        }
      >
        <Stat stat="15s" text="Average response time. Nano Banana is fast. Peel just made it better and easier." />
        <Stat stat="Zero" text="AI or API setup steps. Literally zero. We counted. Just prompt and go." />
      </StatsWithGraph>
      {/* Testimonial */}
      <TestimonialThreeColumnGrid
        id="testimonial"
      >
        <div className="col-span-full mx-auto max-w-4xl">
          <figure className="flex flex-col items-center gap-10 text-center text-lg text-olive-950 dark:text-white">
            <blockquote className="relative flex flex-col gap-4 *:first:before:inline *:first:before:content-['\201c'] *:last:after:inline *:last:after:content-['\201d']">
              <p className="text-3xl md:text-5xl">
                I was skeptical about building another wrapper tool, but Peel just works. No friction, no surprises, just Nano Banana Pro doing what it does best.
              </p>
            </blockquote>
            <figcaption className="flex flex-col items-center gap-4">
              <div className="flex size-12 overflow-hidden rounded-full outline -outline-offset-1 outline-black/5 *:size-full *:object-cover dark:outline-white/5">
                <Image
                  src="/img/avatars/10-size-160.webp"
                  alt=""
                  className="not-dark:bg-white/75 dark:bg-black/75"
                  width={160}
                  height={160}
                />
              </div>
              <div>
                <p className="font-semibold">Clark Wimberly</p>
                <p className="text-olive-700 dark:text-olive-400">Developer</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </TestimonialThreeColumnGrid>
      {/* FAQs */}
      <FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
        <Faq
          id="faq-1"
          question="Do I really not need an API key?"
          answer="Nope. We handle all of that. You just use Peel. It's kind of the whole point."
        />
        <Faq
          id="faq-2"
          question="How does pay-as-you-go work?"
          answer="You pay for what you use. No monthly bills, no minimums, no subscriptions. Use Nano Banana for 5 minutes? Pay for 5 minutes. Revolutionary, we know."
        />
        <Faq
          id="faq-3"
          question="What's Nano Banana?"
          answer="The best AI model you can use right now. We just made it easier to actually, you know, use it."
        />
        <Faq
          id="faq-4"
          question="Is this too good to be true?"
          answer="No. We're just not trying to lock you into some enterprise plan. Simple tools for normal humans."
        />
      </FAQsTwoColumnAccordion>
      {/* Pricing */}
      <PricingMultiTier
        id="pricing"
        headline="Simple pricing. Pay for what you use. That's it."
        plans={
          <>
            <Plan
              name="Pay as you go"
              price="$0.20"
              period="/request"
              subheadline={<p>No monthly fee. No commitment. Just use it.</p>}
              features={[
                'Full Nano Banana Pro access',
                'No API keys needed',
                'No setup required',
                'Instant start',
                'Pay only for what you use',
              ]}
              cta={
                <ButtonLink href="https://banana.peel.diy" size="lg">
                  Start now
                </ButtonLink>
              }
              badge="$5 to start"
            />
            <Plan
              name="Pay as you go PRO"
              price="$0.15"
              period="/request"
              subheadline={<p>No monthly fee. No commitment. Just use it.</p>}
              features={[
                'Full Nano Banana Pro access',
                'Zero markup tokens',
                'No API keys needed',
                'No setup required',
                'Instant start',
                'Pay only for what you use',
              ]}
              cta={
                <ButtonLink href="https://banana.peel.diy" size="lg">
                  Start now
                </ButtonLink>
              }
              badge="$17 to start"
            />
          </>
        }
      />
      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="So... ready to use Nano Banana like a normal person?"
        subheadline={
          <p>
            No signups. No setup. No subscriptions. Just the best AI tool, zero friction. Start in seconds.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="https://banana.peel.diy" size="lg">
              Start now
            </ButtonLink>

            <PlainButtonLink href="#pricing" size="lg">
              See pricing <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
