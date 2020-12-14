import Link from 'next/link';
import Button from './button';

export default function NavList(props) {
  return (
    <>
      <Link href='/'>
        <a
          className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
            'burgerMenuLink' in props && 'burger-menu-link'
          }`}
        >
          Home
        </a>
      </Link>
      <Link href='/#about'>
        <a
          className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
            'burgerMenuLink' in props && 'burger-menu-link'
          }`}
        >
          ABOUT
        </a>
      </Link>
      <Link href='/#menu'>
        <a
          className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
            'burgerMenuLink' in props && 'burger-menu-link'
          }`}
        >
          Menu
        </a>
      </Link>
      <Link href='/#contact'>
        <a
          className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
            'burgerMenuLink' in props && 'burger-menu-link'
          }`}
        >
          Contact
        </a>
      </Link>
      <div
        className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
          'burgerMenuLink' in props && 'burger-menu-link'
        }`}
      >
        <Button
          buttonText='ORDER ONLINE'
          buttonLink='https://frasersgh.square.site/'
        />
      </div>
      <style jsx>{`
        .nav-link {
          text-transform: uppercase;
          padding: 1em;
          margin: auto;
        }

        a:hover {
          color: var(--medium-emphasis-text);
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

        @media (min-width: 460px) {
          .show-on-large {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
