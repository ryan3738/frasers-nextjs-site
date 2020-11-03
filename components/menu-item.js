import menu from '../public/data/menu.json';
import utilStyles from '../styles/utils.module.css';

const getMenuItem = (menu, category) => {
  return (
    <>
      {menu
        .filter((e) => e.Category === category)
        //   .filter((e) => e.Available === true)
        .map((data) => {
          return (
            <div key={data['Item Name']} className='menu-item'>
              <h3 className={utilStyles.lightText}>{data['Item Name']}</h3>
              <p dangerouslySetInnerHTML={{ __html: data.Description }}></p>
              <p className={utilStyles.lightText}>{data.Price}</p>
              <style jsx>{`
                .menu-item {
                  text-align: left;
                  border-radius: 7px;
                  padding: 5%;
                  background: var(--color-darker);
                }
              `}</style>
            </div>
          );
        })}
    </>
  );
};

export default function MenuItem(props) {
  return (
    <div>
      <div className='menu-section'>{getMenuItem(menu, props.category)}</div>
      <style jsx>
        {`
          .menu-section {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
            grid-gap: 20px;
            padding: 5%;
          }
        `}
      </style>
    </div>
  );
}
