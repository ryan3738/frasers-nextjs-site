import Link from 'next/link';

export default function NavLink() {
  return (
    <>
      <Link href='/#about'>
        <a className='nav-link'>ABOUT</a>
      </Link>
      <Link href='/#menu'>
        <a className='nav-link'>MENU</a>
      </Link>
      <Link href='/#contact'>
        <a className='nav-link'>CONTACT</a>
      </Link>
      <style jsx>{`
        .nav-link {
          padding: 1em;
          margin: auto;
          /* display: none; */
        }
      `}</style>
    </>
  );
}
