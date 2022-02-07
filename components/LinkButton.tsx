export default function Button({ buttonText, buttonLink }) {
  return (
    <>
      <a href={buttonLink} className="link">
        <button type="button" className="button-text">
          <span className="button-text">{buttonText}</span>
        </button>
      </a>

      <style jsx>{`
        .button-text {
          /* display: flex;
          flex-direction: column;
          place-items: center; */
          /* display: inline-block; */
          /* vertial-align: middle; */
          /* line-height: normal; */
          /* margin: 1%; */
          /* padding: 1%; */
        }
        .link {
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

        .link:hover {
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
