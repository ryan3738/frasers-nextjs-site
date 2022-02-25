import NavList, { NavLinks } from './NavList';

interface FooterProps {
  children?: React.ReactNode;
  navLinks?: NavLinks[];
}

export default function Footer({
  children,
  navLinks,
}: FooterProps): JSX.Element {
  const footerLinks = navLinks?.filter(link => link.footer === true);
  // const footerLinks = [];
  return (
    <footer className="footer">
      {footerLinks && (
        <nav className="nav-list">
          <NavList links={footerLinks} />
        </nav>
      )}
      {children}
      <span>© 2022 Frasers Gourmet Hideaway |</span>
      <span className="no-wrap">
        &nbsp;Built by:&nbsp;
        <a
          className="light-text"
          href="https://github.com/ryan3738"
          target="_blank"
          rel="noreferrer noopener"
        >
          Ryan Fraser
        </a>
      </span>
      <style jsx>{`
        .footer {
          height: auto;
          width: 100%;
          background-color: var(--surface-color);
          padding: 1em;
        }

        .nav-list {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
        }
        .no-wrap {
          white-space: nowrap;
        }
      `}</style>
    </footer>
  );
}
