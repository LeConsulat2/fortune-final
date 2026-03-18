'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

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
    <header className="bg-card/80 backdrop-blur-md text-card-foreground sticky top-0 z-40 border-b border-border">
      <div className="mx-auto flex items-center justify-between px-4 py-3 md:max-w-5xl md:px-6">
        <Link href="/" className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
          Your-Fortune
        </Link>
        <button
          type="button"
          className="md:hidden focus:outline-none text-muted-foreground hover:text-foreground"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Desktop nav */}
        <nav className="hidden gap-6 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-card border-t border-border">
          <ul className="flex flex-col px-4 py-3 space-y-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-muted-foreground py-1.5 hover:text-foreground transition-colors"
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
