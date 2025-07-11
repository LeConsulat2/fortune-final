import Link from 'next/link';

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/cookies', label: 'Cookies' },
];

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-b from-red-900 via-orange-900 to-amber-900 text-gray-300 text-sm py-10">
      <div className="mx-auto flex flex-col items-center md:flex-row md:justify-between md:max-w-5xl px-4 md:px-6">
        <p className="mb-4 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} Fortune-Final. All rights reserved.
        </p>
        <nav className="flex flex-wrap justify-center gap-4">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-amber-300 hover:text-amber-200 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
