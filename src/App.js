import React, { useState } from 'react';
import FormularioCarta from './FormularioCarta';
import GerarPDF from './GerarPDF';

const App = () => {
  const [dadosFormulario, setDadosFormulario] = useState(null);

  const handleSubmitFormulario = (data) => {
    setDadosFormulario(data);
  };

  return (
    <div>
      <h1>Sistema de Gestão de Cartas em PDF</h1>
      <FormularioCarta onSubmit={handleSubmitFormulario} />
      {dadosFormulario && <GerarPDF dados={dadosFormulario} />}
    </div>
  );
};

export default App;
