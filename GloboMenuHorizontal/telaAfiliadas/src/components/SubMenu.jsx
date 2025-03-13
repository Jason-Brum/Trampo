function SubMenu({ items }) {
  return (
    <div className="absolute left-0 mt-2 bg-gray-300 shadow-md rounded-md p-4 flex flex-col gap-2 w-48">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="px-4 py-2 text-gray-700 hover:bg-gray-400 rounded uppercase text-sm"
        >
          {item.titulo}
        </a>
      ))}
    </div>
  );
}

export default SubMenu;


