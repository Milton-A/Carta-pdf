import React from 'react';
import html2pdf from 'html2pdf.js';

const GerarPDF = ({ dados }) => {
  const gerarPdf = () => {
    const element = document.getElementById('carta-pdf');
    const opt = {
      margin:       [10, 10],
      filename:     'carta.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div>
      <div id="carta-pdf">
        <p>Nome: {dados.nome}</p>
        <p>Endereço: {dados.endereco}</p>
      </div>
      <button onClick={gerarPdf}>Gerar PDF</button>
    </div>
  );
};

export default GerarPDF;
