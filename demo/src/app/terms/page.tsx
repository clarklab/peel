import { DocumentCentered } from '@/components/sections/document-centered'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <DocumentCentered id="document" headline="Terms and Conditions" subheadline={<p>Last updated on January 7, 2026.</p>}>
        <p>
          These terms and conditions explain the rules for using Peel's website and services. By using our website or
          services, you agree to these terms. If you do not agree, please do not use our services.
        </p>

        <h2>About Our Services</h2>
        <p>
          Peel provides tools and services for working with Nano Banana. We offer a simple, pay-as-you-go way to use
          these tools without complicated setup or subscriptions.
        </p>

        <h2>Using Our Services</h2>
        <p>When you use our services, you agree to:</p>
        <ul>
          <li>Follow all applicable laws and regulations</li>
          <li>Not use our services for any illegal or harmful purpose</li>
          <li>Not try to break, hack, or interfere with our services</li>
          <li>Not pretend to be someone else or provide false information</li>
          <li>Not use our services to spam, harass, or harm others</li>
        </ul>

        <h2>Your Account</h2>
        <p>
          If you create an account with us, you are responsible for keeping your account information safe. You are also
          responsible for all activity that happens under your account. Please tell us right away if you think someone
          else is using your account without permission.
        </p>

        <h2>Payments</h2>
        <p>
          Our services are pay-as-you-go. You pay for what you use. All payments are processed securely through our
          payment providers. Prices may change, but we will let you know before any changes affect you.
        </p>
        <p>
          Refunds are handled on a case-by-case basis. If you have a billing issue, please contact us and we will work
          with you to resolve it.
        </p>

        <h2>Your Content</h2>
        <p>
          You own the content you create using our services. However, by using our services, you give us permission to
          process your content as needed to provide the service. We do not claim ownership of your content.
        </p>

        <h2>Our Content</h2>
        <p>
          Everything on our website (like our logo, design, text, and code) belongs to us or our licensors. You may not
          copy, modify, or distribute our content without permission.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Our website may link to other websites or services that we do not control. We are not responsible for the
          content or practices of these third-party sites. Use them at your own risk.
        </p>

        <h2>Service Availability</h2>
        <p>
          We try to keep our services running smoothly, but we cannot guarantee they will always be available. We may
          need to update, change, or temporarily stop our services for maintenance or other reasons.
        </p>

        <h2>Limitations</h2>
        <p>
          Our services are provided "as is" without warranties. We do our best to provide a reliable service, but we
          cannot promise it will be perfect or error-free.
        </p>
        <p>
          To the extent allowed by law, we are not responsible for any indirect, incidental, or consequential damages
          from using our services.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. If we make significant changes, we will let you know by updating
          the date at the top of this page. Your continued use of our services after changes means you accept the new
          terms.
        </p>

        <h2>Ending Your Use</h2>
        <p>
          You can stop using our services at any time. We may also end or suspend your access if you break these terms
          or if we need to for legal or security reasons.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of the jurisdiction where our company is located. Any disputes will be
          resolved in the courts of that jurisdiction.
        </p>

        <h2>Contact Us</h2>
        <p>If you have questions about these terms, contact us at:</p>
        <p>
          Email: <Link href="mailto:hello@peel.diy" className="underline underline-offset-4">hello@peel.diy</Link>
        </p>

        <h2>Privacy</h2>
        <p>
          Your privacy matters to us. Please read our{' '}
          <Link href="/privacy-policy" className="underline underline-offset-4">
            Privacy Policy
          </Link>{' '}
          to understand how we collect and use your information.
        </p>
      </DocumentCentered>
    </>
  )
}
