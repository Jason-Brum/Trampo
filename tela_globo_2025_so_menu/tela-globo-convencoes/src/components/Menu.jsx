import { useState } from "react";
import SubMenu from "./SubMenu";

//O mennuData agora é passado como props para o componente Menu, permitindo que ele seja reutilizado com diferentes dados de menu.
//O componente Menu agora aceita uma propriedade isVertical que determina se o menu deve ser exibido verticalmente ou horizontalmente.
function Menu({ isVertical = false, menuData = [] }) {
  const [submenuAtivo, setSubmenuAtivo] = useState(null);
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleSubmenu = (menuItem) => {
    setSubmenuAtivo(submenuAtivo === menuItem ? null : menuItem);
  };

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div>
      
      {/* BOTÃO DE MENU HAMBURGUER */}
      {isVertical && (
        <div className="mt-4 px-6">
          <button
            onClick={toggleMenu}
            className="flex items-center gap-2 text-green-700 font-semibold bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            <i className="fas fa-bars"></i> MENU
          </button>
        </div>
      )}

      {/* MENU PRINCIPAL */}
      {(isVertical ? menuAberto : true) && (
        <nav className="bg-gray-200 py-3 px-6 rounded-md w-full md:w-auto mt-4">
          <div className={`flex ${isVertical ? "flex-col" : "flex-wrap"} gap-1`}>
            {menuData.map((menuItem) => (
              <div key={menuItem.titulo} className="relative inline-block">
                <button
                  onClick={() => toggleSubmenu(menuItem.titulo)}
                  className={`font-bold text-gray-800 flex items-center gap-1 px-4 py-1 rounded-md ${
                    submenuAtivo === menuItem.titulo
                      ? "bg-gray-300"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {menuItem.titulo}
                  <i
                    className={`fas ${
                      submenuAtivo === menuItem.titulo
                        ? "fa-circle"
                        : "fa-chevron-down"
                    } text-xs`}
                  ></i>
                </button>

                {submenuAtivo === menuItem.titulo && (
                  <SubMenu items={menuItem.subMenu} isVertical={isVertical} />
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}

export default Menu;