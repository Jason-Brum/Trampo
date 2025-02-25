import { useState } from "react";
import SubMenu from "./SubMenu";
import Button from "./Button";

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
          <Button
            toggleSubmenu={toggleSubmenu}
            submenuAtivo={submenuAtivo}
            titulo={menuItem.titulo}
          /> 
         

          {submenuAtivo === menuItem.titulo && <SubMenu items={menuItem.subMenu} />}
        </div>
      ))}
    </div>
  );
}

export default Menu;

