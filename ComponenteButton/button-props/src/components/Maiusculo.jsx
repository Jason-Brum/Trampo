import React, { useState } from "react";

const Maiusculo = ({ titulo, fonte }) => {
  const [clicado, setClicado] = useState(false); // Estado para verificar se o botão foi clicado

  const handleClick = () => {
    setClicado(true); // Quando clicar, muda o estado para true
  };

  return (
    <div>
      <button
        onClick={handleClick} // Evento de clique
        style={{
          backgroundColor: clicado ? "blue" : "white", // Muda a cor se clicado for true
          color: clicado ? "white" : "black", // Cor do texto para aparecer com contraste
          padding: "10px 20px", // Ajuste visual do botão
          border: "1px solid black", // Borda para definir o botão
          borderRadius: "5px", // Bordas arredondadas
          cursor: "pointer", // Cursor em formato de mão
          transition: "0.3s", // Animação suave da mudança de cor
        }}
      >
        {fonte ? titulo.toUpperCase() : titulo.toLowerCase()}
      </button>
    </div>
  );
};

export default Maiusculo;
