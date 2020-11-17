import Link from 'next/link';

export default function NavList() {
  return (
    <>
      <nav className='nav-list'>
        <Link href='/#about'>
          <a className='nav-link'>ABOUT</a>
        </Link>
        <Link href='/#menu'>
          <a className='nav-link'>MENU</a>
        </Link>
        <Link href='/#contact'>
          <a className='nav-link'>CONTACT</a>
        </Link>
      </nav>
      <style jsx>{`
        .nav-link {
          padding: 1em;
          margin: auto;
          display: none;
        }

        .nav-list a:hover {
          background: var(--primary-color);
          color: var(--background-color);
        }

        @media (min-width: 460px) {
          .burger {
            display: none;
          }
          .nav-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
            grid-template-rows: 4em;
            justify-items: center;
            padding: 0% 2%;
            background: var(--secondary-color);
            position: sticky;
            top: 0;
          }
        }
      `}</style>
    </>
  );
}
