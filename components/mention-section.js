import MenuItem from './menu-item';

export default function MenuSection(props) {
  return (
    <div className='menu-container'>
      <h2 className='menu-header'>{props.category}</h2>
      <MenuItem category={props.category} />
      <style jsx>
        {`
          .menu-header {
            display: inline-block;
            max-width: 640px;
            padding: 3rem 0 0;
            /* margin: 0 auto 4rem auto; */
          }
        `}
      </style>
    </div>
  );
}
