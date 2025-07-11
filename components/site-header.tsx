'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

const LINKS = [
  { href: '/use-guide', label: 'User Guide' },
  { href: '/faq', label: 'FAQ' },
  { href: '/sample-results', label: 'Sample Results' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/cookies', label: 'Cookies' },
  { href: '/terms', label: 'Terms' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-amber-950 via-orange-950 to-red-900/80 backdrop-blur text-white sticky top-0 z-40 shadow-md">
      <div className="mx-auto flex items-center justify-between px-4 py-3 md:max-w-5xl md:px-6">
        <Link href="/" className="text-lg font-semibold">
          Fortune-Final
        </Link>
        <button
          type="button"
          className="md:hidden focus:outline-none"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <Menu size={24} />
        </button>
        {/* Desktop nav */}
        <nav className="hidden gap-6 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-amber-300 hover:text-amber-200 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-gray-800 border-t border-gray-700">
          <ul className="flex flex-col px-4 py-3 space-y-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-amber-300 py-1.5 hover:text-amber-200"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
