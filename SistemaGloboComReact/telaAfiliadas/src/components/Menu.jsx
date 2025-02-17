import { useState } from "react";
import SubMenu from "./SubMenu";

const menuData = {
  "AFILIADAS": ["INCLUIR", "CONSULTAR", "AGRUPAMENTO"],
  "TV ABERTA": ["INCLUIR CONVENÇÃO", "CONSULTAR CONVENÇÃO", "RECEITAS"],
  "INTERNET": ["INCLUIR CONVENÇÃO", "CONSULTAR CONVENÇÃO", "RECEITAS"],
  "FINANCEIRO": ["FATURAMENTO"],
  "NOVA CATEGORIA": ["INCLUIR", "CONSULTAR"]
};

function Menu() {
  const [submenuAtivo, setSubmenuAtivo] = useState(null);

  const toggleSubmenu = (menuItem) => {
    setSubmenuAtivo(submenuAtivo === menuItem ? null : menuItem);
  };

  return (
    <div className="flex gap-6">
      {Object.keys(menuData).map((menuItem) => (
        <div key={menuItem} className="relative">
          <button
            onClick={() => toggleSubmenu(menuItem)}
            className={`font-bold text-gray-800 flex items-center gap-1 p-2 rounded-md ${
              submenuAtivo === menuItem ? "bg-gray-300" : "hover:bg-gray-200"
            }`}
          >
            {menuItem} <i className={`fas ${submenuAtivo === menuItem ? "fa-circle" : "fa-chevron-down"} text-xs`}></i>
          </button>

          {submenuAtivo === menuItem && <SubMenu items={menuData[menuItem]} />}
        </div>
      ))}
    </div>
  );
}

export default Menu;
