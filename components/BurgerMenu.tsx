import NavList, { NavLinks } from './NavList';

interface BurgerMenuProps {
  open: boolean;
  links: NavLinks[];
}

export default function BurgerMenu({
  open,
  links,
}: BurgerMenuProps): JSX.Element {
  return (
    <>
      <nav className="styled-menu">
        <NavList links={links} burgerMenuLink />
      </nav>
      <style jsx>{`
        .styled-menu {
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--background-color);
          height: 100vh;
          width: 80vw;
          padding: 2rem;
          position: absolute;
          top: 0;
          right: 0;
          transition: transform 0.3s ease-in-out;
        }

        @media (max-width: var(--medium-screen)) {
          .styled-menu {
            width: 100%;
            font-size: 1.5rem;
            text-align: center;
          }
        }

        a {
          font-size: 2rem;
          text-transform: uppercase;
          padding: 2rem 0;
          font-weight: bold;
          letter-spacing: 0.5rem;
          /* color: var(--secondary-color); */
          text-decoration: none;
          transition: color 0.3s linear;
        }
      `}</style>
      <style jsx>{`
        .styled-menu {
          /* hide and show menu */
          transform: ${open ? 'translateX(0)' : 'translateX(100%)'};
        }
      `}</style>
    </>
  );
}
