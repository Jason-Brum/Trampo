function SubMenu({ items, isVertical }) { //Componente Submenu recebe duas propriedades: items e isVertical. items é um array de objetos que contém os dados do submenu, e isVertical é um booleano que define se o submenu deve ser exibido verticalmente ou horizontalmente.
    return (
      <div
        className={`absolute z-10 mt-2 bg-gray-300 shadow-md rounded-md p-2 ${
          isVertical ? 'static flex-col' : 'flex'
        } flex gap-2`}
      >
        {items.map((item, index) => ( //Percorre o array items e renderiza cada item do submenu. Cada item tem um título e um link.
          // O index é usado como chave única para cada item.
          <a
            key={index}
            href={item.link}
            className="px-4 py-2 text-gray-700 hover:bg-gray-400 rounded uppercase"
          >
            {item.titulo}
          </a>
        ))}
      </div>
    );
  }
  
  export default SubMenu;
  