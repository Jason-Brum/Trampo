import React from "react";

const Button = ({ toggleSubmenu, submenuAtivo, titulo }) => {
  return (
    <div
      onClick={() => toggleSubmenu(titulo)}
      className={`font-bold text-gray-800 flex items-center gap-1 px-4 py-2 rounded-md cursor-pointer ${
        submenuAtivo === titulo ? "bg-gray-300 border-b-2 border-gray-600" : "hover:bg-gray-300"
      }`}
    >
      {titulo}
      <i
        className={`fas ${
          submenuAtivo === titulo ? "fa-circle text-xs" : "fa-chevron-down text-xs"
        }`}
      ></i>
    </div>
  );
};

export default Button;
