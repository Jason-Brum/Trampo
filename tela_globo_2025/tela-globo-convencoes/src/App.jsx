import React, {useState} from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false); //useState, hook que permite criar um estado local, para controlar a abertura do menu mobile (hamburguer) isOpen guarda o estado do menu, e setIsOpen é a função que altera esse estado. O valor inicial é false, ou seja, o menu está fechado.

  //Renderização do container principal
  //O componente App retorna um JSX que representa a estrutura da tela.
  return (
    <div className="container mx-auto p-4">
      <header className="flex items-center justify-between bg-white text-green-600 py-6 px-6">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">AFILIADAS</span>
          <img src="/logo.png" alt="logo globo" className="h-10" />
          <span className="text-2xl font-bold">GESTÃO</span>
      </div>
    <div className="text-sm">Olá Hugo Leonardo</div>
</header>

<nav className="bg-gray-100 py-4 px-6 rounded-lg mt-2">
        {/* Botão menu mobile md:hidden para não aparecer em telas médias e grandes */}
        <div className="md:hidden flex justify-between items-center">
          <span className="font-bold text-black text-xl">MENU</span>
          <button onClick={() => setIsOpen(!isOpen)} className="text-green-600 text-2xl">
            ☰
          </button>
        </div>

        {/* Menu horizontal em telas grandes */}
        <div className="hidden md:flex gap-4 font-bold text-black text-xl">
          <a href="#" className="hover:text-orange-600">AFILIADAS</a>
          <a href="#" className="hover:text-orange-600">TV ABERTA</a>
          <a href="#" className="hover:text-orange-600">INTERNET</a>
          <a href="#" className="hover:text-orange-600">FINANCEIRO</a>
          <a href="#" className="hover:text-orange-600">NOVA CATEGORIA</a>
        </div>

        {/* Menu vertical em telas pequenas */}
        {isOpen && (
          <div className="flex flex-col gap-2 font-bold text-black text-base mt-4 md:hidden"> {/* Exibe os itens do menu verticalmente quando isOpen for true */}
            <a href="#" className="hover:text-orange-600">AFILIADAS</a>
            <a href="#" className="hover:text-orange-600">TV ABERTA</a>
            <a href="#" className="hover:text-orange-600">INTERNET</a>
            <a href="#" className="hover:text-orange-600">FINANCEIRO</a>
            <a href="#" className="hover:text-orange-600">NOVA CATEGORIA</a>
          </div>
        )}
      </nav>


      {/* Breadcrumb mostra o caminho de navehação, onde o usuário está no sistema */}
      <div className="breadcrumb bg-white text-sm text-gray-700 mt-4 px-6 py-3 rounded-md shadow-sm">
        CONVENÇÕES INTERNET &gt; CONSULTAR
      </div>

      <div className="bg-green-500 text-white text-xl font-bold py-6 px-6 rounded-lg flex justify-between items-center mt-4">
        CONVENÇÕES INTERNET
        <div className="flex gap-2">
          <button className="bg-white text-green-600 px-3 py-1 rounded flex items-center gap-1 text-sm shadow-sm">
            📂 Exportar
          </button>
          <button className="bg-white text-green-600 px-3 py-1 rounded flex items-center gap-1 text-sm shadow-sm">
            📂 Cópia de Índices
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="bg-white border border-gray-200 p-4 rounded mb-4 shadow-sm">
          <h2 className="text-green-700 font-bold text-lg border-l-4 border-green-500 pl-2 mb-4">CONSULTAR CONVENÇÕES</h2>
          <div className="flex flex-col gap-4 mt-4 md:flex-row md:items-end md:gap-4">
            <div className="flex flex-col w-full md:w-1/4">
              <label className="mb-1 font-medium text-sm text-gray-700">Afiliada</label>
              <input type="text" className="border border-gray-300 p-2 rounded" />
            </div>
            <div className="flex flex-col w-full md:w-1/4">
              <label className="mb-1 font-medium text-sm text-gray-700">Código Contábil</label>
              <input type="text" className="border border-gray-300 p-2 rounded" />
            </div>
            <div className="flex flex-col w-full md:w-1/4">
              <label className="mb-1 font-medium text-sm text-gray-700">Mnemônico</label>
              <input type="text" className="border border-gray-300 p-2 rounded" />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-700 flex items-center gap-1">
                <input type="checkbox" /> Inativa
              </label>
              <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-1">🔍 Buscar</button>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-green-700 font-semibold">RESULTADO DA CONSULTA</h2>
          <table className="w-full mt-2 border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Convenção</th>
                <th className="p-2 border">Mnemônico</th>
                <th className="p-2 border">Início</th>
                <th className="p-2 border">Término</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-600">Não há registros</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;

