import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import { BananaIcon } from '@/components/icons/banana-icon'
import { GitHubIcon } from '@/components/icons/social/github-icon'
import { XIcon } from '@/components/icons/social/x-icon'
import { YouTubeIcon } from '@/components/icons/social/youtube-icon'
import {
  FooterCategory,
  FooterLink,
  FooterWithNewsletterFormCategoriesAndSocialIcons,
  NewsletterForm,
  SocialLink,
} from '@/components/sections/footer-with-newsletter-form-categories-and-social-icons'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLinksActionsAndCenteredLogo,
} from '@/components/sections/navbar-with-links-actions-and-centered-logo'
import type { Metadata } from 'next'
import Image from 'next/image'
import './globals.css'

export const metadata: Metadata = {
  title: 'Peel - Nano Banana, Zero Friction',
  description: 'The easiest way to use Nano Banana. No API keys, no setup, pay as you go with no subscription.',
  icons: {
    icon: 'https://peel.diy/favicon.png',
  },
  openGraph: {
    title: 'Peel - Nano Banana, Zero Friction',
    description: 'The easiest way to use Nano Banana. No API keys, no setup, pay as you go with no subscription.',
    images: [
      {
        url: 'https://peel.diy/unfurl.png',
        width: 1200,
        height: 630,
        alt: 'Peel - Nano Banana, Zero Friction',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peel - Nano Banana, Zero Friction',
    description: 'The easiest way to use Nano Banana. No API keys, no setup, pay as you go with no subscription.',
    images: ['https://peel.diy/unfurl.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <>
          <NavbarWithLinksActionsAndCenteredLogo
            id="navbar"
            links={
              <>
                <NavbarLink href="/pricing">Pricing</NavbarLink>
                <NavbarLink href="/about">About</NavbarLink>
                <NavbarLink href="#">Docs</NavbarLink>
                <NavbarLink href="#" className="sm:hidden">
                  Log in
                </NavbarLink>
              </>
            }
            logo={
              <NavbarLogo href="/">
                <div className="flex items-center gap-2">
                  <BananaIcon className="h-8 w-8 text-olive-950 dark:text-white" />
                  <span className="text-2xl font-semibold text-olive-950 dark:text-white">Peel</span>
                </div>
              </NavbarLogo>
            }
            actions={
              <>
                <ButtonLink href="https://nano.wims.vc">Start now</ButtonLink>
              </>
            }
          />

          <Main>{children}</Main>

          <FooterWithNewsletterFormCategoriesAndSocialIcons
            id="footer"
            cta={
              <NewsletterForm
                headline="Stay updated"
                subheadline={
                  <p>
                    Get updates when we ship new features. No spam, no fluff. Just the good stuff.
                  </p>
                }
              />
            }
            links={
              <>
                <FooterCategory title="Product">
                  <FooterLink href="/">Home</FooterLink>
                  <FooterLink href="/pricing">Pricing</FooterLink>
                </FooterCategory>
                <FooterCategory title="Legal">
                  <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                  <FooterLink href="#">Terms of Service</FooterLink>
                </FooterCategory>
              </>
            }
            fineprint="© 2025 Peel"
            socialLinks={
              <>
                <SocialLink href="https://x.com" name="X">
                  <XIcon />
                </SocialLink>
                <SocialLink href="https://github.com" name="GitHub">
                  <GitHubIcon />
                </SocialLink>
                <SocialLink href="https://www.youtube.com" name="YouTube">
                  <YouTubeIcon />
                </SocialLink>
              </>
            }
          />
        </>
      </body>
    </html>
  )
}
