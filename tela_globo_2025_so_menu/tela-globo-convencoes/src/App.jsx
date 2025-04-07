import React from "react";
import Menu from "./components/Menu";
import menuData from "./components/menuData";


const App = () => {
  return (

    
    <div className="container mx-auto p-4">
      {/* Menu renderizado com dados passados por props */}
      <Menu isVertical={true} menuData={menuData} />

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
          <h2 className="text-green-700 font-bold text-lg border-l-4 border-green-500 pl-2 mb-4">
            CONSULTAR CONVENÇÕES
          </h2>

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
              <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-1">
                🔍 Buscar
              </button>
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