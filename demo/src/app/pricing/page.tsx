import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Logo, LogoGrid } from '@/components/elements/logo-grid'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import { FAQsAccordion, Faq } from '@/components/sections/faqs-accordion'
import { Plan, PricingHeroMultiTier } from '@/components/sections/pricing-hero-multi-tier'
import { TestimonialTwoColumnWithLargePhoto } from '@/components/sections/testimonial-two-column-with-large-photo'
import Image from 'next/image'

function plans() {
  return (
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
  )
}

export default function Page() {
  return (
    <>
      {/* Hero */}
      <PricingHeroMultiTier
        id="pricing"
        headline="Simple pricing"
        subheadline={
          <p>
            Pay for what you use. No monthly fees, no commitments, no BS. Just Nano Banana when you need it.
          </p>
        }
        options={['Pay as you go']}
        plans={{ 'Pay as you go': plans() }}
        footer={
          <LogoGrid>
            <Logo>
              <Image
                src="/img/logos/9-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={51}
                height={32}
              />
              <Image
                src="/img/logos/9-color-white-height-32.svg"
                className="not-dark:hidden"
                alt=""
                width={51}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/10-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={70}
                height={32}
              />
              <Image
                src="/img/logos/10-color-white-height-32.svg"
                className="not-dark:hidden"
                alt=""
                width={70}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/11-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={100}
                height={32}
              />
              <Image
                src="/img/logos/11-color-white-height-32.svg"
                className="not-dark:hidden"
                alt=""
                width={100}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/12-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={85}
                height={32}
              />
              <Image
                src="/img/logos/12-color-white-height-32.svg"
                className="not-dark:hidden"
                alt=""
                width={85}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/13-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={75}
                height={32}
              />
              <Image
                src="/img/logos/13-color-white-height-32.svg"
                className="not-dark:hidden"
                alt=""
                width={75}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/8-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={85}
                height={32}
              />
              <Image
                src="/img/logos/8-color-white-height-32.svg"
                className="not-dark:hidden"
                alt=""
                width={85}
                height={32}
              />
            </Logo>
          </LogoGrid>
        }
      />
      {/* Testimonial */}
      <TestimonialTwoColumnWithLargePhoto
        id="testimonial"
        quote={
          <p>
            The pay-as-you-go model is perfect. I don't need another subscription. I just need Nano Banana sometimes, and Peel delivers exactly that.
          </p>
        }
        img={
          <Image
            src="/img/avatars/16-h-1000-w-1400.webp"
            alt=""
            className="not-dark:bg-white/75 dark:bg-black/75"
            width={1400}
            height={1000}
          />
        }
        name="Alex Martinez"
        byline="Founder"
      />
      {/* FAQs */}
      <FAQsAccordion id="faqs" headline="Questions & Answers">
        <Faq
          id="faq-1"
          question="How does billing work?"
          answer="You get charged per request. That's it. No monthly bills, no surprise fees, no commitment. Use it once, pay once."
        />
        <Faq
          id="faq-2"
          question="Are there any hidden fees?"
          answer="No. $0.02 per request. That's the whole story."
        />
        <Faq
          id="faq-3"
          question="Can I cancel anytime?"
          answer="There's nothing to cancel. You only pay when you use it. Stop using it? Stop paying. Start again whenever."
        />
        <Faq
          id="faq-4"
          question="Do you offer volume discounts?"
          answer="Not yet. But if you're doing serious volume, reach out. We'll talk."
        />
      </FAQsAccordion>
      {/* Call To Action */}
      <CallToActionSimpleCentered
        id="call-to-action"
        headline="Still have questions?"
        subheadline={
          <p>Just start using it. No signup required. If you have actual questions, we're around.</p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
              Start now
            </ButtonLink>

            <PlainButtonLink href="/" size="lg">
              Back to home <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
