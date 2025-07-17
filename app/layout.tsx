import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import AdsenseInit from '@/components/adsense-init';
import Script from 'next/script';
import CookieConsentBanner from '@/components/cookie-consent-banner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fortune Daily | yourfortune.cool',
  description:
    'Personalized AI-generated daily fortunes that respect your privacy. Discover insights on love, career, money and more at yourfortune.cool.',
  icons: {
    icon: '/fortune.png',
    apple: '/fortune.png',
  },
  other: {
    'google-adsense-account': 'pub-1474915913713685',
  },
};

export const viewport: Viewport = {
  themeColor: '#ff7c1a',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="adsense-script-head"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-1474915913713685"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-gray-100`}
      >
        <AdsenseInit />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-grow">{children}</main>
          <SiteFooter />
        </div>

        {/* Floating Home button */}
        <Link
          href="/"
          className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-2xl text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          🏠<span className="sr-only">Home</span>
        </Link>
        <CookieConsentBanner />
      </body>
    </html>
  );
}
