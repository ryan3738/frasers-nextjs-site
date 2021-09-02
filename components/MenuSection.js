import MenuItem from './MenuItem';

export default function MenuSection({ category }) {
  return (
    <div className="menu-container">
      <h2 className="menu-header">{category}</h2>
      <div className="line" />
      <MenuItem category={category} />
      <style jsx>{`
        .menu-header {
          display: inline-block;
          padding: 3rem 0 0;
        }

        .line {
          border: 0.5px solid var(--primary-color-desaturated);
          width: 100%;
          height: 0px;
        }
      `}</style>
    </div>
  );
}
