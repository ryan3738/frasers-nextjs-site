import menu from '../public/data/menu.json';

const getMenuItem = (menu, category) => {
  return (
    <>
      <div>
        {menu
          .filter((e) => e.Category === category)
          //   .filter((e) => e.Available === true)
          .map((data) => {
            return (
              <div key={data['Item Name']}>
                <h3>{data['Item Name']}</h3>
                <p dangerouslySetInnerHTML={{ __html: data.Description }}></p>
                <h3>{data.Price}</h3>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default function MenuItem(props) {
  return (
    <>
      <div className='menu-section'>
        <div className='menu-item'>{getMenuItem(menu, props.category)}</div>
      </div>
      <style jsx>
        {`
          .menu-section {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
            grid-gap: 20px;
            padding: 5%;
            background:
          }

          .menu-item {
            text-align: left;
            border-radius: 7px;
            padding: 5%;
            background: var(--color-darker);
          }
        `}
      </style>
    </>
  );
}
