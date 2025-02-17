import { Link } from "react-router-dom";

function SubMenu({ items }) {
  return (
    <div className="absolute mt-2 bg-gray-300 shadow-md rounded-md p-2 flex gap-4">
      {items.map((item, index) => (
        <Link key={index} to={item.path} className="px-4 py-2 text-gray-700 hover:bg-gray-400 rounded uppercase">
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default SubMenu;
