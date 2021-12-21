import Link from 'next/link';

export interface NavLinks {
  href: string;
  text: string;
}

interface NavListProps {
  links: NavLinks[];
  showOnLarge?: boolean;
  burgerMenuLink?: boolean;
}

export default function NavList({
  links,
  showOnLarge,
  burgerMenuLink,
}: NavListProps): JSX.Element {
  return (
    <>
      {links?.map(link => (
        <Link key={link.text} href={link.href}>
          <a
            className={`nav-link ${showOnLarge && 'show-on-large'} ${
              burgerMenuLink && 'burger-menu-link'
            }`}
          >
            {link.text}
          </a>
        </Link>
      ))}
      <style jsx>{`
        .nav-link {
          text-transform: uppercase;
          padding: 1em;
          margin: auto;
          font-weight: 600;
        }
        a {
          transition: all 0.3s ease-in-out;
        }
        a:hover {
          background: var(--primary-color-desaturated);
          color: var(--background-color);
        }
      `}</style>
      <style jsx>{`
        .burger-menu-link {
          margin: 0;
        }
        .show-on-large {
          display: none;
        }

        @media (min-width: 769px) {
          .show-on-large {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
