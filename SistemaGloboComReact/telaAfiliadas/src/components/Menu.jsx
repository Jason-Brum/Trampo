import { useState } from "react";
import SubMenu from "./SubMenu";

const menuData = [
  {
    titulo: "AFILIADAS",
    subMenu: [
      { titulo: "INCLUIR", link: "http://localhost/..." },
      { titulo: "CONSULTAR", link: "http://localhost/..." },
      { titulo: "AGRUPAMENTO", link: "http://localhost/..." }
    ]
  },
  {
    titulo: "TV ABERTA",
    subMenu: [
      { titulo: "INCLUIR CONVENÇÃO", link: "http://localhost/..." },
      { titulo: "CONSULTAR CONVENÇÃO", link: "http://localhost/..." },
      { titulo: "RECEITAS", link: "http://localhost/..." },
      { titulo: "LANÇAMENTOS", link: "http://localhost/..." },
      { titulo: "PRESTAÇÃO DE CONTAS", link: "http://localhost/..." },
      { titulo: "RELATÓRIOS", link: "http://localhost/..." }
    ]
  },
  {
    titulo: "INTERNET",
    subMenu: [
      { titulo: "INCLUIR CONVENÇÃO", link: "http://localhost/..." },
      { titulo: "CONSULTAR CONVENÇÃO", link: "http://localhost/..." },
      { titulo: "RECEITAS", link: "http://localhost/..." },
      { titulo: "LANÇAMENTOS", link: "http://localhost/..." },
      { titulo: "PRESTAÇÃO DE CONTAS", link: "http://localhost/..." },
      { titulo: "RELATÓRIOS", link: "http://localhost/..." }
    ]
  },
  {
    titulo: "FATURAMENTO",
    subMenu: [{ titulo: "INCLUIR CONVENÇÃO", link: "http://localhost/..." }]
  },
  {
    titulo: "NOVA CATEGORIA",
    subMenu: [
      { titulo: "INCLUIR", link: "http://localhost/..." },
      { titulo: "CONSULTAR", link: "http://localhost/..." }
    ]
  }
];

function Menu() {
  const [submenuAtivo, setSubmenuAtivo] = useState(null);

  const toggleSubmenu = (menuItem) => {
    setSubmenuAtivo(submenuAtivo === menuItem ? null : menuItem);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {menuData.map((menuItem) => (
        <div key={menuItem.titulo} className="relative">
          <button
            onClick={() => toggleSubmenu(menuItem.titulo)}
            className={`font-bold text-gray-800 flex items-center gap-1 px-4 py-2 rounded-md ${
              submenuAtivo === menuItem.titulo ? "bg-gray-300" : "hover:bg-gray-200"
            }`}
          >
            {menuItem.titulo}{" "}
            <i
              className={`fas ${
                submenuAtivo === menuItem.titulo ? "fa-circle" : "fa-chevron-down"
              } text-xs`}
            ></i>
          </button>

          {submenuAtivo === menuItem.titulo && <SubMenu items={menuItem.subMenu} />}
        </div>
      ))}
    </div>
  );
}

export default Menu;

