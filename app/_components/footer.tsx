import Link from 'next/link';
import { NavLinks } from './nav-list';

interface FooterProps {
  children?: React.ReactNode;
  navLinks?: NavLinks[];
  linkFields?: Array<{ label?: string; href?: string } | undefined>;
}

export default function Footer({ children, navLinks, linkFields }: FooterProps) {
  const footerLinks = navLinks?.filter(link => link.footer === true) ?? [];
  const footerLinkFields = navLinks
    ?.map((link, index) => (link.footer === true ? linkFields?.[index] : undefined))
    .filter((field): field is { label?: string; href?: string } => field != null);

  return (
    <footer className="grid h-fit w-full place-items-center overflow-x-auto bg-accent p-4">
      {children}
      {footerLinks.length > 0 && (
        <nav
          aria-label="Footer"
          className="mb-4 flex flex-wrap items-center justify-center gap-4"
        >
          {footerLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase text-foreground/80 hover:text-foreground"
              data-tina-field={footerLinkFields?.[index]?.label}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
      <div className="grid w-full items-center justify-center gap-1">
        <span>© {new Date().getFullYear()} Frasers Gourmet Hideaway</span>
        <span className="flex items-center justify-center gap-1">
          <span>Built by:</span>
          <a
            className="text-foreground/80"
            href="https://github.com/ryan3738"
            target="_blank"
            rel="noreferrer noopener"
          >
            Ryan Fraser
          </a>
        </span>
      </div>
    </footer>
  );
}
