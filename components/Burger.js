import { bool, func } from 'prop-types';

export default function Burger({ open, setOpen }) {
  return (
    <>
      <button
        type="button"
        className="styled-burger"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div className="top-bun" />
        <div className="patty" />
        <div className="bottom-bun" />
        <style jsx>{`
          .styled-burger {
            position: absolute;
            top: 0.6rem;
            right: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 2.8rem;
            height: 2.8rem;
            background: var(--background-color);
            border: 0;
            /* box-shadow: 0 0 0 7px var(--secondary-color); */
            cursor: pointer;
            padding: 0;
            z-index: 10;
            border-radius: 7px;
          }

          div:focus {
            outline: none;
          }
          div {
            width: 2.8rem;
            height: 0.3rem;
            border-radius: 10px;
            transition: all 0.3s ease-in-out;
            position: relative;
            transform-origin: 1.5px;
          }
        `}</style>
        {/* animation styles */}
        <style jsx>{`
          div {
            background: ${open
              ? 'var(--medium-emphasis-text)'
              : 'var(--primary-color)'};
          }

          .top-bun {
            transform: ${open ? 'rotate(45deg)' : 'rotate(0)'};
          }

          .patty {
            opacity: ${open ? '0' : '1'};
            transform: ${open ? 'translateX(20px)' : 'translateX(0)'};
          }

          .bottom-bun {
            transform: ${open ? 'rotate(-45deg)' : 'rotate(0)'};
          }
        `}</style>
      </button>
    </>
  );
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
