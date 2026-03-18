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
    <footer className="bg-card/50 border-t border-border text-muted-foreground text-sm py-8">
      <div className="mx-auto flex flex-col items-center md:flex-row md:justify-between md:max-w-5xl px-4 md:px-6">
        <p className="mb-4 md:mb-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} Fortune Daily
        </p>
        <nav className="flex flex-wrap justify-center gap-4">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
