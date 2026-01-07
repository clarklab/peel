import { DocumentCentered } from '@/components/sections/document-centered'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <DocumentCentered id="document" headline="Privacy Policy" subheadline={<p>Last updated on January 7, 2026.</p>}>
        <p>
          This privacy policy explains how Peel ("<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>")
          collects, uses, and protects your information when you use our website and services.
        </p>

        <h2>What Information We Collect</h2>
        <p>We collect information in a few ways:</p>
        <ul>
          <li>
            <strong>Information you give us:</strong> When you sign up, contact us, or use our services, you may provide
            your name, email address, or other contact details.
          </li>
          <li>
            <strong>Information collected automatically:</strong> When you visit our website, we automatically collect
            some technical information like your IP address, browser type, device type, and how you use our site.
          </li>
          <li>
            <strong>Cookies and tracking:</strong> We use cookies and similar technologies to understand how people use
            our website and to show you relevant ads. This includes working with advertising partners like Reddit.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and improve our services</li>
          <li>Respond to your questions and requests</li>
          <li>Send you updates about our services (if you signed up for them)</li>
          <li>Show you relevant advertisements</li>
          <li>Understand how people use our website so we can make it better</li>
          <li>Comply with legal requirements</li>
        </ul>

        <h2>Advertising and Third-Party Services</h2>
        <p>
          We work with advertising partners, including Reddit, to show you ads and measure how well our ads perform.
          These partners may collect information about your visits to our website using cookies or similar technologies.
        </p>
        <p>
          When you interact with our ads on platforms like Reddit, those platforms may share information with us about
          your interaction. We use this information to understand which ads are working and to improve our marketing.
        </p>
        <p>
          For more information about how Reddit handles your data, you can read the{' '}
          <Link href="https://www.reddit.com/policies/privacy-policy" className="underline underline-offset-4">
            Reddit Privacy Policy
          </Link>.
        </p>

        <h2>Who We Share Your Information With</h2>
        <p>We do not sell your personal information. We may share your information with:</p>
        <ul>
          <li>
            <strong>Service providers:</strong> Companies that help us run our business, like hosting providers and
            email services. They can only use your information to help us.
          </li>
          <li>
            <strong>Advertising partners:</strong> To show you relevant ads and measure ad performance.
          </li>
          <li>
            <strong>Legal requirements:</strong> If we are required to by law, or to protect our rights.
          </li>
        </ul>

        <h2>Your Choices and Rights</h2>
        <p>You have choices about your information:</p>
        <ul>
          <li>
            <strong>Cookies:</strong> Most browsers let you block or delete cookies. Note that this may affect how our
            website works for you.
          </li>
          <li>
            <strong>Marketing emails:</strong> You can unsubscribe from our emails by clicking the unsubscribe link at
            the bottom of any email.
          </li>
          <li>
            <strong>Your data:</strong> Depending on where you live, you may have the right to access, correct, or
            delete your personal information. Contact us to make a request.
          </li>
        </ul>

        <h2>How We Protect Your Information</h2>
        <p>
          We use reasonable security measures to protect your information. However, no website or internet transmission
          is completely secure, so we cannot guarantee absolute security.
        </p>

        <h2>How Long We Keep Your Information</h2>
        <p>
          We keep your information only as long as we need it for the purposes described in this policy, or as required
          by law.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. If we make changes, we will update the date at the top of this
          page. Your continued use of our services after changes means you accept the updated policy.
        </p>

        <h2>Contact Us</h2>
        <p>If you have questions about this privacy policy or your personal information, contact us at:</p>
        <p>
          Email: <Link href="mailto:privacy@peel.diy" className="underline underline-offset-4">privacy@peel.diy</Link>
        </p>
      </DocumentCentered>
    </>
  )
}
