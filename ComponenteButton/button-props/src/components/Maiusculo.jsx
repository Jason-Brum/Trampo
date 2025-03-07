import React from "react"; //Importação do react

const Maiusculo = ({ titulo, fonte }) => { //Criação do componente Maiusculo que recebe duas props(titulo e fonte)
  return ( //O componente retorna um JSX que contém uma div
    <div>
      <button>  
        {fonte ? titulo.toUpperCase() : titulo.toLowerCase()}
      </button>
    </div>
  );
};

export default Maiusculo;
