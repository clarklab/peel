import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Screenshot } from '@/components/elements/screenshot'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
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
            More than a Nano Banana wrapper. No subscription. Just pay-as-you-go image editing with the best AI model available today. As it should be.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
              Start now
            </ButtonLink>

            <PlainButtonLink href="#" size="lg">
              See it in action <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
        demo={
          <>
            <Screenshot className="rounded-md lg:hidden" placement="bottom-right">
              <Image
                src="/img/screenshots/1-left-1670-top-1408.webp"
                alt=""
                width={1670}
                height={1408}
                className="bg-white/75 md:hidden dark:hidden"
              />
              <Image
                src="/img/screenshots/1-color-olive-left-1670-top-1408.webp"
                alt=""
                width={1670}
                height={1408}
                className="bg-black/75 not-dark:hidden md:hidden"
              />
              <Image
                src="/img/screenshots/1-left-2000-top-1408.webp"
                alt=""
                width={2000}
                height={1408}
                className="bg-white/75 max-md:hidden dark:hidden"
              />
              <Image
                src="/img/screenshots/1-color-olive-left-2000-top-1408.webp"
                alt=""
                width={2000}
                height={1408}
                className="bg-black/75 not-dark:hidden max-md:hidden"
              />
            </Screenshot>
            <Screenshot className="rounded-lg max-lg:hidden" placement="bottom">
              <Image
                src="/img/screenshots/1.webp"
                alt=""
                className="bg-white/75 dark:hidden"
                width={3440}
                height={1990}
              />
              <Image
                className="bg-black/75 not-dark:hidden"
                src="/img/screenshots/1-color-olive.webp"
                alt=""
                width={3440}
                height={1990}
              />
            </Screenshot>
          </>
        }
        footer={
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <RocketIcon className="h-5 w-5 text-olive-950 dark:text-white" />
                <h3 className="font-display text-base font-semibold text-olive-950 dark:text-white">Zero setup.</h3>
              </div>
              <p className="text-sm text-olive-700 dark:text-olive-400">From photo or text prompt, open Peel and start making images in seconds.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <SparklesIcon className="h-5 w-5 text-olive-950 dark:text-white" />
                <h3 className="font-display text-base font-semibold text-olive-950 dark:text-white">No API keys.</h3>
              </div>
              <p className="text-sm text-olive-700 dark:text-olive-400">You don't need to be a wizard to make and edit images. Or do be a wizard, we don't care.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <LightingBoltIcon className="h-5 w-5 text-olive-950 dark:text-white" />
                <h3 className="font-display text-base font-semibold text-olive-950 dark:text-white">On brand, always.</h3>
              </div>
              <p className="text-sm text-olive-700 dark:text-olive-400">Add brand colors, swap logos, never get stuck with a boring stock photo again.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <RocketIcon className="h-5 w-5 text-olive-950 dark:text-white" />
                <h3 className="font-display text-base font-semibold text-olive-950 dark:text-white">Big batch energy.</h3>
              </div>
              <p className="text-sm text-olive-700 dark:text-olive-400">Edit one image or a dozen at a time, just don't tell your boss (or do, they'll love it).</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <SparklesIcon className="h-5 w-5 text-olive-950 dark:text-white" />
                <h3 className="font-display text-base font-semibold text-olive-950 dark:text-white">Custom presets.</h3>
              </div>
              <p className="text-sm text-olive-700 dark:text-olive-400">Save time on repeatable tasks, or define your own with deep customization.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <LightingBoltIcon className="h-5 w-5 text-olive-950 dark:text-white" />
                <h3 className="font-display text-base font-semibold text-olive-950 dark:text-white">Intern ready.</h3>
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
        headline="Just like Nano Banana, but you actually want to use it."
        subheadline={
          <p>
            We took the best AI model and made it actually approachable. Faster, cleaner, better.
          </p>
        }
        features={
          <>
            <Feature
              demo={
                <Screenshot placement="bottom-right">
                  <Image
                    src="/img/screenshots/1-left-1000-top-800.webp"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-color-olive-left-1000-top-800.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-left-1800-top-660.webp"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-color-olive-left-1800-top-660.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-left-1300-top-1300.webp"
                    alt=""
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-color-olive-left-1300-top-1300.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-left-1800-top-1250.webp"
                    alt=""
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <Image
                    src="/img/screenshots/1-color-olive-left-1800-top-1250.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="Make one image or hundreds"
              subheadline={
                <p>
                  From big batches to tiny copy edits. Seriously. No API keys to manage, no credentials to lose, no configs to mess up. Just start.
                </p>
              }
              cta={
                <Link href="#">
                  Get started <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={
                <Screenshot placement="bottom-left">
                  <Image
                    src="/img/screenshots/1-right-1000-top-800.webp"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-color-olive-right-1000-top-800.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-right-1800-top-660.webp"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-color-olive-right-1800-top-660.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-right-1300-top-1300.webp"
                    alt=""
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-color-olive-right-1300-top-1300.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-right-1800-top-1250.webp"
                    alt=""
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <Image
                    src="/img/screenshots/1-color-olive-right-1800-top-1250.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="Pay for what you use"
              subheadline={
                <p>No monthly fees. No commitment. Use it when you need it, pay for what you actually consume. Revolutionary, we know.</p>
              }
              cta={
                <Link href="#">
                  See pricing <ArrowNarrowRightIcon />
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
        headline="Our numbers speak for themselves."
        subheadline={
          <p>
            Peel is already powering dozens of projects. From solo devs to entire teams, we make Nano Banana actually usable.
          </p>
        }
      >
        <Stat stat="15s" text="Average response time. Nano Banana is fast. Peel just made it better." />
        <Stat stat="0" text="Setup steps. Literally zero. We counted." />
      </StatsWithGraph>
      {/* Testimonial */}
      <TestimonialThreeColumnGrid
        id="testimonial"
        headline="People like it"
        subheadline={<p>Actual humans using Peel to ship actual things.</p>}
      >
        <div className="col-span-full mx-auto max-w-2xl">
          <figure className="flex flex-col items-center gap-10 text-center text-sm/7 text-olive-950 dark:text-white">
            <blockquote className="relative flex flex-col gap-4 *:first:before:inline *:first:before:content-['\201c'] *:last:after:inline *:last:after:content-['\201d']">
              <p>
                I was skeptical about building another wrapper tool, but Peel just works. No friction, no surprises, just Nano Banana doing what it does best.
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
                <ButtonLink href="#" size="lg">
                  Start now
                </ButtonLink>
              }
              badge="$5 to start"
            />
            <Plan
              name="Bring your own key"
              price="$0.15"
              period="/request"
              subheadline={<p>Use your own API key and save on every request.</p>}
              features={[
                'Full Nano Banana Pro access',
                'No API keys needed',
                'No setup required',
                'Instant start',
                'Pay only for what you use',
                'Zero markup tokens',
              ]}
              cta={
                <ButtonLink href="#" size="lg">
                  Start now
                </ButtonLink>
              }
              badge="$5 to start"
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
            <ButtonLink href="#" size="lg">
              Start now
            </ButtonLink>

            <PlainButtonLink href="#" size="lg">
              See pricing <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
