import React from "react";
import Menu from "../components/Menu"; 
import menu2Data from "../components/menu2Data"; // Importando os dados do menu2

const NovaPagina = () => {
  return (
    <div className="container mx-auto p-4">
      <Menu isVertical={false} menuData={menu2Data} />
    </div>

  );
};

export default NovaPagina;
