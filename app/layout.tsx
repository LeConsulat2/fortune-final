import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Daily-Fortune',
  description: 'Your Daily Fortune',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* Global floating Home button */}
        <Link
          href="/"
          className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-2xl text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          🏠
          <span className="sr-only">Home</span>
        </Link>
      </body>
    </html>
  );
}
