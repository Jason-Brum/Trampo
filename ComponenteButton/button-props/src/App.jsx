import React from "react";
import Maiusculo from "./components/Maiusculo";

const App = () => {
  return (
    <div>
      <Maiusculo titulo="Clique Aqui" fonte={true} />
      <Maiusculo titulo="Outro Botão" fonte={false} />
    </div>
  );
};

export default App;



