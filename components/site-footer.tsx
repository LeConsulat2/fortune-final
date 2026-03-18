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
    <footer className="bg-card/50 border-t border-border text-muted-foreground py-8">
      <div className="mx-auto flex flex-col items-center md:flex-row md:justify-between md:max-w-5xl px-4 md:px-6">
        <p className="mb-4 md:mb-0 text-center md:text-left text-sm font-medium">
          &copy; {new Date().getFullYear()} Fortune Daily
        </p>
        <nav className="flex flex-wrap justify-center gap-5">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground/70 hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
