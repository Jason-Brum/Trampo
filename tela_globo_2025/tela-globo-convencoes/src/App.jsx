import React from 'react';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="flex items-center justify-between bg-green-500 p-4 text-white">
        <div className="text-2xl font-bold">AFILIADAS</div>
        <div className="logo">
          <img src="/logo.png" alt="logo globo" className="h-12" />
        </div>
        <div className="text-2xl font-bold">GESTÃO</div>
        <div className="text-lg text-green-700">Olá Hugo Leonardo</div>
      </header>

      <nav className="menuDeNavegacao flex justify-around bg-gray-100 text-black py-2">
        <a href="#" className="px-4 py-2 hover:text-orange-600">AFILIADAS</a>
        <a href="#" className="px-4 py-2 text-orange-600 font-semibold">TV ABERTA</a>
        <a href="#" className="px-4 py-2 hover:text-orange-600">INTERNET</a>
        <a href="#" className="px-4 py-2 hover:text-orange-600">FINANCEIRO</a>
        <a href="#" className="px-4 py-2 hover:text-orange-600">NOVA CATEGORIA</a>
      </nav>

      <div className="breadcrumb p-2 text-sm text-gray-700 bg-gray-50 border-b">
        CONVENÇÕES INTERNET &gt; CONSULTAR
      </div>

      <div className="bg-green-500 text-white p-2 text-xl font-bold flex justify-between">
        CONVENÇÕES INTERNET
        <div className="flex gap-2">
          <button className="bg-white text-green-600 p-1 rounded flex items-center gap-1">📂 Exportar</button>
          <button className="bg-white text-green-600 p-1 rounded flex items-center gap-1">📂 Cópia de Índices</button>
        </div>
      </div>

      <div className="p-4">
        <div className="bg-gray-100 p-4 rounded mb-4 shadow">
          <h2 className="text-green-700 font-semibold">CONSULTAR CONVENÇÕES</h2>
          <div className="flex gap-2 mt-2 items-center">
            <input type="text" placeholder="Afiliada" className="border p-2 rounded w-1/4" />
            <input type="text" placeholder="Código Contábil" className="border p-2 rounded w-1/4" />
            <input type="text" placeholder="Mnemônico" className="border p-2 rounded w-1/4" />
            <label className="flex items-center gap-1">
              <input type="checkbox" /> Inativa
            </label>
            <button className="bg-green-600 text-white p-2 rounded flex items-center gap-1">🔍 Buscar</button>
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
