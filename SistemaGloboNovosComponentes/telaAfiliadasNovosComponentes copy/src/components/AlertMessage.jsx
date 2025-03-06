import React from "react";

const AlertMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div id="alert-mensagem" className="form-error alert alert-danger">
      <strong>Erro:</strong>
      <p id="mensagemErro">{message}</p>
    </div>
  );
};

export default AlertMessage;
