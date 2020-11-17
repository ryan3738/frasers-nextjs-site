export default function Button({ buttonText, buttonLink }) {
  return (
    <>
      <a href={buttonLink}>
        <button className='button-text'>
          <span className='button-text'>{buttonText}</span>
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
        button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          cursor: pointer;
          background-color: var(--primary-color);
          border: 2px solid var(--primary-color);
          border-radius: 5px;
          color: var(--black-color);
          /* display: block; */
          /* padding: 0 5px; */
          margin: 10px 0;
          /* width: 80%; */
          /* max-height: 48px; */
          /* max-width: 220px; */
          /* padding: 5%; */
        }

        button:hover {
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
