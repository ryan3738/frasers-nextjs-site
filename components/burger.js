import { bool, func } from 'prop-types';

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default function Burger({ open, setOpen }) {
  return (
    <>
      <div className='styled-burger' open={open} onClick={() => setOpen(!open)}>
        <div className='top-bun' />
        <div className='patty' />
        <div className='bottom-bun' />
        <style jsx>{`
          .styled-burger {
            position: absolute;
            top: 1rem;
            right: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 2rem;
            height: 2rem;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 10;
          }
          div:focus {
            outline: none;
          }
          div {
            width: 2rem;
            height: 0.25rem;
            background: var(--color-main);
            border-radius: 10px;
            transition: all 0.3s linear;
            position: relative;
            transform-origin: 1px;
          }
        `}</style>

        <style animation jsx>{`
          div {
            background: ${open ? 'var(--color-white)' : 'var(--color-main)'};
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
      </div>
    </>
  );
}
