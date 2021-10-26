import Link from 'next/link';

const showOnNavBar = 'show-on-large';
const showInBurgerMenu = 'burger-menu-link';

export default function NavList(properties) {
  return (
    <>
      <Link href="/">
        <a
          className={`nav-link ${'showOnLarge' in properties && showOnNavBar} ${
            'burgerMenuLink' in properties && showInBurgerMenu
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/menu">
        <a
          className={`nav-link ${'showOnLarge' in properties && showOnNavBar} ${
            'burgerMenuLink' in properties && showInBurgerMenu
          }`}
        >
          Menu
        </a>
      </Link>

      <Link href="/#about">
        <a
          className={`nav-link ${'showOnLarge' in properties && showOnNavBar} ${
            'burgerMenuLink' in properties && showInBurgerMenu
          }`}
        >
          ABOUT
        </a>
      </Link>
      <Link href="/#gift-cards">
        <a
          className={`nav-link ${'showOnLarge' in properties && showOnNavBar} ${
            'burgerMenuLink' in properties && showInBurgerMenu
          }`}
        >
          Gift Cards
        </a>
      </Link>
      <Link href="/#contact">
        <a
          className={`nav-link ${'showOnLarge' in properties && showOnNavBar} ${
            'burgerMenuLink' in properties && showInBurgerMenu
          }`}
        >
          Contact
        </a>
      </Link>

      {/* <div
        className={`nav-link ${'showOnLarge' in props && showOnNavBar} ${
          'burgerMenuLink' in props && showInBurgerMenu
        }`}
      >
        <Button
          buttonText="ORDER ONLINE"
          buttonLink={siteData.websites.onlineStore}
        />
      </div> */}
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
           {
            /* color: var(--medium-emphasis-text); */
          }
          background: var(--primary-color-desaturated);
          color: var(--background-color);
        }
        .welcome-logo {
          max-width: 100%;
          max-height: auto;
          margin: auto;
          display: block;
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
