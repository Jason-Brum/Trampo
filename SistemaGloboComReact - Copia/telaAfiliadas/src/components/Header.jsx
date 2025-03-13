import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold text-green-600">AFILIADAS</div>
        <div className="w-10 h-10">
          <img src="Logo cor 71b44d.png" alt="logo globo" />
        </div>
        <div className="text-2xl font-bold text-green-600">GESTÃO</div>
      </div>
      <div className="text-sm text-green-500 flex items-center gap-2">
        <span>Olá Hugo Leonardo</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </header>
  );
};

export default Header;