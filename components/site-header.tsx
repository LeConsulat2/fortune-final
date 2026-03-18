'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/use-guide', label: 'Guide' },
  { href: '/faq', label: 'FAQ' },
  { href: '/sample-results', label: 'Samples' },
];

const MORE_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/cookies', label: 'Cookies' },
  { href: '/terms', label: 'Terms' },
];

const ALL_LINKS = [...NAV_LINKS, ...MORE_LINKS];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-card/80 backdrop-blur-md text-card-foreground sticky top-0 z-40 border-b border-border">
      <div className="mx-auto flex items-center justify-between px-4 py-3 md:max-w-5xl md:px-6">
        <Link href="/" className="text-base font-bold tracking-tight text-primary hover:text-primary/80 transition-colors">
          Your-Fortune
        </Link>
        <button
          type="button"
          className="md:hidden focus:outline-none text-muted-foreground hover:text-foreground"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        {/* Desktop nav */}
        <nav className="hidden gap-5 md:flex items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <span className="w-px h-4 bg-border" />
          {MORE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-muted-foreground/70 hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-card border-t border-border">
          <ul className="flex flex-col px-4 py-3 space-y-1">
            {ALL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm font-medium text-muted-foreground py-2 hover:text-foreground transition-colors"
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
