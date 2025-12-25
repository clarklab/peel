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
        headline="Nano Banana. Zero friction."
        subheadline={
          <p>
            No API keys. No setup. No subscription. Just pay-as-you-go velocity for the best AI tool you'll use today.
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
            <Screenshot className="rounded-md lg:hidden" wallpaper="green" placement="bottom-right">
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
            <Screenshot className="rounded-lg max-lg:hidden" wallpaper="green" placement="bottom">
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
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-olive-950/5 dark:bg-white/10">
                <RocketIcon className="h-6 w-6 text-olive-950 dark:text-white" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-olive-950 dark:text-white">Lightning Fast</h3>
              <p className="mt-2 text-sm text-olive-700 dark:text-olive-400">Get results in seconds, not minutes. Optimized for speed.</p>
            </div>
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-olive-950/5 dark:bg-white/10">
                <SparklesIcon className="h-6 w-6 text-olive-950 dark:text-white" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-olive-950 dark:text-white">Dead Simple</h3>
              <p className="mt-2 text-sm text-olive-700 dark:text-olive-400">No configuration, no API keys. Just start using it.</p>
            </div>
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-olive-950/5 dark:bg-white/10">
                <LightingBoltIcon className="h-6 w-6 text-olive-950 dark:text-white" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-olive-950 dark:text-white">Pay As You Go</h3>
              <p className="mt-2 text-sm text-olive-700 dark:text-olive-400">No subscriptions. Only pay for what you actually use.</p>
            </div>
          </div>
        }
      />
      {/* Features */}
      <FeaturesTwoColumnWithDemos
        id="features"
        eyebrow="Dead simple"
        headline="Nano Banana, but you actually want to use it."
        subheadline={
          <p>
            We took the best AI model and made it actually approachable. Faster, cleaner, better.
          </p>
        }
        features={
          <>
            <Feature
              demo={
                <Screenshot wallpaper="purple" placement="bottom-right">
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
              headline="No keys, no BS"
              subheadline={
                <p>
                  Seriously. No API keys to manage, no credentials to lose, no configs to mess up. Just start.
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
                <Screenshot wallpaper="blue" placement="bottom-left">
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
        eyebrow="Ship faster"
        headline="The numbers speak for themselves."
        subheadline={
          <p>
            Peel is already powering thousands of projects. From solo devs to entire teams, we make Nano Banana actually usable.
          </p>
        }
      >
        <Stat stat="<5s" text="Average response time. Nano Banana is fast. We just made it faster." />
        <Stat stat="0" text="Setup steps. Literally zero. We counted." />
      </StatsWithGraph>
      {/* Testimonial */}
      <TestimonialThreeColumnGrid
        id="testimonial"
        headline="People like it"
        subheadline={<p>Actual humans using Peel to ship actual things.</p>}
      >
        <Testimonial
          quote={
            <p>
              I was skeptical about another wrapper tool, but Peel just works. No friction, no surprises, just Nano Banana doing what it does best.
            </p>
          }
          img={
            <Image
              src="/img/avatars/10-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Jordan Chen"
          byline="Developer"
        />
        <Testimonial
          quote={
            <p>
              Finally. A tool that doesn't make me read documentation for an hour before I can do anything. Peel is what AI tools should be.
            </p>
          }
          img={
            <Image
              src="/img/avatars/15-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Alex Martinez"
          byline="Founder"
        />
        <Testimonial
          quote={
            <p>
              The pay-as-you-go model is perfect. I'm not building production apps, I just need Nano Banana sometimes. Peel gets it.
            </p>
          }
          img={
            <Image
              src="/img/avatars/13-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Sam Riley"
          byline="Designer & Developer"
        />
        <Testimonial
          quote={
            <p>
              I switched from managing API keys across 3 different services to just using Peel. Best decision of the month.
            </p>
          }
          img={
            <Image
              src="/img/avatars/12-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Taylor Kim"
          byline="Product Manager"
        />
        <Testimonial
          quote={
            <p>
              Zero setup tax. Zero subscription anxiety. Just pure utility. This is how tools should work.
            </p>
          }
          img={
            <Image
              src="/img/avatars/11-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Morgan Lee"
          byline="Solo Founder"
        />
        <Testimonial
          quote={
            <p>
              Peel makes Nano Banana accessible without the usual enterprise nonsense. It's refreshingly simple.
            </p>
          }
          img={
            <Image
              src="/img/avatars/14-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Casey Park"
          byline="Startup CTO"
        />
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
        headline="Simple pricing. Pay for what you use."
        plans={
          <>
            <Plan
              name="Pay as you go"
              price="$0.02"
              period="/request"
              subheadline={<p>No monthly fee. No commitment. Just use it.</p>}
              features={[
                'Full Nano Banana access',
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
              badge="Only option"
            />
          </>
        }
      />
      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Ready to use Nano Banana like a normal person?"
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
