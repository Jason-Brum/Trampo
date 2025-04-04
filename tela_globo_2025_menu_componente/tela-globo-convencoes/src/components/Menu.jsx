import { useState } from "react"; // Importação do hook useState do React
import SubMenu from "./SubMenu"; //Componente filho para exibir os links do submenu

const menuData = [
  {
    titulo: "AFILIADAS",
    subMenu: [
      { titulo: "INCLUIR", link: "#" },
      { titulo: "CONSULTAR", link: "#" },
      { titulo: "AGRUPAMENTO", link: "#" }
    ]
  },
  {
    titulo: "TV ABERTA",
    subMenu: [
      { titulo: "INCLUIR CONVENÇÃO", link: "#" },
      { titulo: "CONSULTAR CONVENÇÃO", link: "#" },
      { titulo: "RECEITAS", link: "#" },
      { titulo: "LANÇAMENTOS", link: "#" },
      { titulo: "PRESTAÇÃO DE CONTAS", link: "#" },
      { titulo: "RELATÓRIOS", link: "#" }
    ]
  },
  {
    titulo: "INTERNET",
    subMenu: [
      { titulo: "INCLUIR CONVENÇÃO", link: "#" },
      { titulo: "CONSULTAR CONVENÇÃO", link: "#" },
      { titulo: "RECEITAS", link: "#" },
      { titulo: "LANÇAMENTOS", link: "#" },
      { titulo: "PRESTAÇÃO DE CONTAS", link: "#" },
      { titulo: "RELATÓRIOS", link: "#" }
    ]
  },
  {
    titulo: "FATURAMENTO",
    subMenu: [
      { titulo: "INCLUIR CONVENÇÃO", link: "#" }
    ]
  },
  {
    titulo: "NOVA CATEGORIA",
    subMenu: [
      { titulo: "INCLUIR", link: "#" },
      { titulo: "CONSULTAR", link: "#" }
    ]
  }
];

function Menu({ isVertical = false }) { //Função onde realmente o menu é montado e exibido. Recebe uma propriedade isVertical que define se o menu é vertical ou horizontal 

  const [submenuAtivo, setSubmenuAtivo] = useState(null);

  const toggleSubmenu = (menuItem) => { //Função que controla a exibição do submenu. Recebe o item do menu como parâmetro. Permite abrir um submenu e fechar outro.
    setSubmenuAtivo(submenuAtivo === menuItem ? null : menuItem); //Cria uma variável submenuAtivo que armazena qual menu está com submenu aberto. null significa que nenhum está aberto, por padrão.
  };

  return ( //Renderiza o menu com base nos dados do menuData. O menu é exibido em uma div flexível que muda de direção dependendo da propriedade isVertical.
    <div className={`flex ${isVertical ? 'flex-col' : 'flex-wrap'} gap-4`}>
      {menuData.map((menuItem) => ( //percorre o array menuData e renderiza cada item do menu. Cada item tem um título e um submenu.
        <div key={menuItem.titulo} className="relative">
          <button
            onClick={() => toggleSubmenu(menuItem.titulo)} //Adiciona um evento de clique ao botão que chama a função toggleSubmenu passando o título do menuItem. Obs. Só está com hover no submenu, colocar hover também no menuItem.
            className={`font-bold text-gray-800 flex items-center gap-1 px-4 py-2 rounded-md ${
              submenuAtivo === menuItem.titulo ? "bg-gray-300" : "hover:bg-gray-200"
            }`}
          >
            {menuItem.titulo}
            <i
              className={`fas ${
                submenuAtivo === menuItem.titulo ? "fa-circle" : "fa-chevron-down"
              } text-xs`}
            ></i>
          </button> {/*Só exibe o componente submenu se o submenuAtivo for igual ao título do menuItem.*/}

          {submenuAtivo === menuItem.titulo && 
          <SubMenu items={menuItem.subMenu} isVertical={isVertical} />}
        </div>
      ))}
    </div>
  );
}

export default Menu;
