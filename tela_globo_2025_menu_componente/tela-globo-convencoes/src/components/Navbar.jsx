import { useState } from "react";
import Menu from "./Menu";

function Navbar({ isVertical = false }) {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div>
      {/* HEADER */}
      <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-green-600">AFILIADAS</h1>
          <img src="/logo.png" alt="logo globo" className="w-10 h-10" />
          <h1 className="text-xl font-bold text-green-600">GESTÃO</h1>
        </div>

        <div className="text-sm text-green-500 flex items-center gap-2 mt-4 md:mt-0">
          <span>Olá Hugo Leonardo</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </header>

      {/* BOTÃO DE MENU HAMBURGUER (só aparece se isVertical for true) */}
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

      {/* MENU */}
      {(isVertical ? menuAberto : true) && (
        <nav className="bg-gray-200 py-3 px-6 rounded-md w-full md:w-auto mt-4">
          <Menu isVertical={isVertical} />
        </nav>
      )}
    </div>
  );
}

export default Navbar;
