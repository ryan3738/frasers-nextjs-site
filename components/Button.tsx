export default function Button({ buttonText, buttonLink }): JSX.Element {
  return (
    <>
      <a href={buttonLink}>
        <button type="button" className="button-text">
          <span className="button-text">{buttonText}</span>
        </button>
      </a>

      <style jsx>{`
        .button-text {
          padding: 0.5rem;
          min-height: 60px;
          min-width: 60px;
          font-weight: bold;
          margin: 0.5rem 0;
          /* display: flex;
          flex-direction: column;
          place-items: center; */
          /* display: inline-block; */
          /* vertial-align: middle; */
          /* line-height: normal; */
          /* margin: 1%; */
          /* padding: 1%; */
        }
      `}</style>
    </>
  );
}
