export default function Social(props) {
  return (
    <div className='social'>
      <a href={props.href} target='_blank' rel='noreferrer noopener'>
        <img
          // style='max-width:100%; max-height: auto;'
          src={props.img}
          alt={props.alt}
        />
      </a>
      <style jsx>{`
        .social {
          width: 45px;
          height: 45px;
          vertical-align: center;
          background-color: var(--color-main);
          border-radius: 5px;
          grid-column: 1/2;
          margin: 5px;
        }
        .social:hover {
          animation-name: social-button;
          animation-duration: 500ms;
          background-color: var(${props.color});
        }
      `}</style>
    </div>
  );
}
