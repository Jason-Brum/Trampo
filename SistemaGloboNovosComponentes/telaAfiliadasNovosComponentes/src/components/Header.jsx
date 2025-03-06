import React from "react";

const Header = () => {
  return (
    <div id="headerGlobo" className="bg-gray-200 py-4 px-6 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold text-green-600">Afiliadas</span>
        <img className="logoGlobo w-10 h-10" src="/logo.png" alt="Logo Globo" />
        <span className="text-2xl font-bold text-green-600">Gestão</span>
      </div>
      <div className="flex items-center gap-4">
        <h5 className="text-gray-600">Olá Hugo Leonardo De Souza Guimaraes!</h5>
        <i
          className="fa fa-sign-out fa-3 text-red-600 cursor-pointer"
          title="Logout"
        ></i>
      </div>
    </div>
  );
};

export default Header;
