import Menu from "./Menu"; //importação do componente Menu

function Navbar() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
      {/* Logo e título */}
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-green-600">AFILIADAS</h1>
        <img src="/logo.png" alt="logo globo" className="w-10 h-10" />
        <h1 className="text-xl font-bold text-green-600">GESTÃO</h1>
      </div>

      {/* Saudação do usuário */}
      <div className="text-sm text-green-500 flex items-center gap-2 mt-4 md:mt-0">
        <span>Olá Hugo Leonardo</span>
        <i className="fas fa-chevron-down"></i>
      </div>

      {/* Barra de navegação É aqui que o menu é montado e exibido. O menu é exibido em uma div flexível que muda de direção dependendo da propriedade isVertical.*/}
      <nav className="bg-gray-200 py-3 px-6 rounded-md mt-4 md:mt-0 w-full md:w-auto">
        <Menu isVertical={false} />
      </nav>
    </header>
  );
}

export default Navbar;
