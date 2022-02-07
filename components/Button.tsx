export default function Button({ buttonText, onClick }): JSX.Element {
  return (
    <>
      <button type="button" className="button-text" onClick={onClick}>
        <span className="button-text">{buttonText}</span>
      </button>

      <style jsx>{`
        .button-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          cursor: pointer;
          background-color: var(--primary-color);
          border: 2px solid var(--primary-color);
          border-radius: 5px;
          color: var(--black-color);
          padding: 5px;
          margin: 10px 5px;
        }

        .button-text:hover {
          animation-name: background-color;
          animation-duration: 500ms;
          background-color: var(--surface-color);
          border-color: var(--surface-color);
          color: var(--high-emphasis-text);
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
      `}</style>
    </>
  );
}
