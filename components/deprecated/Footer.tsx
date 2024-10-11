import NavList, { NavLinks } from './NavList';

interface FooterProps {
  children?: React.ReactNode;
  navLinks?: NavLinks[];
}

export default function Footer({ children, navLinks }: FooterProps) {
  const footerLinks = navLinks?.filter(link => link.footer === true);

  return (
    <footer className="grid h-fit w-full place-items-center overflow-x-auto bg-accent p-4">
      {footerLinks && (
        <nav className="flex place-items-center gap-4">
          <NavList links={footerLinks} />
        </nav>
      )}
      {children}
      <div className="grid w-full items-center justify-center gap-1">
        <span>© 2022 Frasers Gourmet Hideaway</span>
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
