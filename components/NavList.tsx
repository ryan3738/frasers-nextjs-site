import Link from 'next/link';

export interface NavLinks {
  href: string;
  label: string;
  header?: boolean;
  burger?: boolean;
  footer?: boolean;
}

interface NavListProps {
  links: NavLinks[];
  showOnLarge?: boolean;
  burgerMenuLink?: boolean;
}

export default function NavList({
  links,
  showOnLarge,
  burgerMenuLink
}: NavListProps): JSX.Element {
  return (
    <>
      {links?.map((link, index) => (
        <div
          key={link?.label + index}
          className={`nav-link ${showOnLarge && 'show-on-large'} ${
            burgerMenuLink && 'burger-menu-link'
          }`}
        >
          <Link
            key={link.label}
            href={link.href}
            className="flex size-full place-items-center"
          >
            {link.label}
          </Link>
        </div>
      ))}
      <style jsx>{`
        .nav-link {
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
          padding: 0 3.25rem;
          margin: auto;
          font-weight: 600;
          min-height: 60px;
          min-width: 60px;
          height: 100%;
          width: auto;
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
          height: auto;
          width: 100%;
        }
        .show-on-large {
          display: none;
        }

        @media (min-width: 769px) {
          .show-on-large {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
