function SubMenu({ items, isVertical }) { //Componente Submenu recebe duas propriedades: items e isVertical. items é um array de objetos que contém os dados do submenu, e isVertical é um booleano que define se o submenu deve ser exibido verticalmente ou horizontalmente.
  return (
    <div
      className={`z-10 bg-gray-300 shadow-md rounded-md p-2 flex gap-2
        ${isVertical
            ? 'absolute top-0 left-[13%] flex-col'
            : 'absolute mt-2 flex-row'}
          
      `}
      >
        {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="px-4 py-2 text-gray-700 hover:bg-gray-400 rounded uppercase whitespace-nowrap"
        >
          {item.titulo}
        </a>
      ))}
    </div>
  );
}
  
  export default SubMenu;
  