import { menu } from '../public/data/menu';

const getMenuItem = (menu, category) => {
  return (
    <>
      <div>
        {menu
          .filter((e) => e.Category === category)
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
      <div>{getMenuItem(menu, props.category)}</div>
    </>
  );
}
