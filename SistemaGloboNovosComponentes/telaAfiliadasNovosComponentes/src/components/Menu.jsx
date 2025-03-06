import Dropdown from "./Dropdown";

const menuData = [
  {
    titulo: "Afiliadas",
    subMenu: [
      { titulo: "Incluir", link: "/pages/afiliada.html" },
      { titulo: "Consultar", link: "/pages/consultar_afiliada.html" },
      { titulo: "Agrupamento", link: "/pages/agrupamento.html" },
    ],
  },
  {
    titulo: "TV Aberta",
    subMenu: [
      { titulo: "Incluir Convenção", link: "/pages/convencoes_tvaberta.html" },
      { titulo: "Consultar Convenção", link: "/pages/consultar_convencoes_tvaberta.html" },
      { titulo: "Receitas", link: "/pages/receita_tvaberta.html" },
      { titulo: "Lançamentos", link: "/pages/lancamento_tvaberta.html" },
      { titulo: "Prestação de Contas", link: "/pages/prestacao_conta_tvaberta.html" },
      { titulo: "Relatórios", link: "/pages/relatorio_tvaberta.html" },
    ],
  },
  {
    titulo: "Internet",
    subMenu: [
      { titulo: "Incluir Convenção", link: "/pages/convencoes_internet.html" },
      { titulo: "Consultar Convenção", link: "/pages/consultar_convencoes_internet.html" },
      { titulo: "Receitas", link: "/pages/receita_internet.html" },
      { titulo: "Lançamentos", link: "/pages/lancamento_internet.html" },
      { titulo: "Prestação de Contas", link: "/pages/prestacao_conta_internet.html" },
      { titulo: "Relatórios", link: "/pages/relatorio_internet.html" },
    ],
  },
  {
    titulo: "Financeiro",
    subMenu: [{ titulo: "Faturamento", link: "/pages/faturamento.html" }],
  },
  {
    titulo: "Nova Categoria",
    subMenu: [
      { titulo: "Incluir", link: "/pages/categoria.html" },
      { titulo: "Consultar", link: "/pages/consultar_categoria.html" },
    ],
  },
];

const Menu = () => {
  return (
    <nav className="bg-gray-200 py-3 px-6 rounded-md mt-4 md:mt-0 flex gap-6 w-full justify-center">
      <ul className="flex gap-6">
        {menuData.map((menuItem, index) => (
          <Dropdown key={index} title={menuItem.titulo} items={menuItem.subMenu} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
