import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import dadosDoMenu from "./components/dadosDoMenu"; // Agora importamos os dados do menu
import NovaPagina from "./pages/NovaPagina";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-gray-100 shadow-md rounded-md">
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

      {/* O menu aparece em todas as páginas e recebe os dados corretamente */}
      <Menu isVertical={false} menuData={dadosDoMenu} />

      <Router>
        <Routes>
          {/* Página principal com toda a aplicação */}
          <Route path="/home" element={<Home />} />

          {/* Página apenas com o menu */}
          <Route path="/nova-pagina" element={<NovaPagina />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
