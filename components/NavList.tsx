import Link from 'next/link';

export default function NavList(props): JSX.Element {
  return (
    <>
      <Link href="/">
        <a
          className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
            'burgerMenuLink' in props && 'burger-menu-link'
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/menu">
        <a
          className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
            'burgerMenuLink' in props && 'burger-menu-link'
          }`}
        >
          Menu
        </a>
      </Link>
      <Link href="/#about">
        <a
          className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
            'burgerMenuLink' in props && 'burger-menu-link'
          }`}
        >
          ABOUT
        </a>
      </Link>
      <Link href="/#gift-cards">
        <a
          className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
            'burgerMenuLink' in props && 'burger-menu-link'
          }`}
        >
          Gift Cards
        </a>
      </Link>
      <Link href="/#contact">
        <a
          className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
            'burgerMenuLink' in props && 'burger-menu-link'
          }`}
        >
          Contact
        </a>
      </Link>
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
