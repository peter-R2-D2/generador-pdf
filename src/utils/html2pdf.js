import html2pdf from 'html2pdf.js';
import html2canvasPro from 'html2canvas-pro'; // Importamos el motor con soporte moderno

export function generatePdf(htmlContent) {
  const pdfContent = document.getElementById(htmlContent);
  
  const options = {
    margin: [0.35, 0.4, 0.35, 0.4],
    filename: `cotizacion-tecno-leal-${Date.now().toString().slice(-6)}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: 'avoid-all' },
  };

  html2pdf().set(options).from(pdfContent).save();
}