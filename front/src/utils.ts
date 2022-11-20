import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import * as htmlToImage from 'html-to-image'

async function creatPdf({
    doc,
    elements,
  }: {
    doc: jsPDF;
    elements: HTMLCollectionOf<Element>;
  }) {
    let top = 80;
    const padding = 0;
  
    for (let i = 0; i < elements.length; i++) {
      const el = elements.item(i) as HTMLElement;
      const imgData = await htmlToImage.toPng(el);
  
      let elHeight = el.offsetHeight;
      let elWidth = el.offsetWidth;
  
      const pageWidth = doc.internal.pageSize.getWidth();
  
      if (elWidth > pageWidth) {
        const ratio = pageWidth / elWidth;
        elHeight = elHeight * ratio - padding;
        elWidth = elWidth * ratio - padding;
      }
  
      const pageHeight = doc.internal.pageSize.getHeight();
  
      if (top + elHeight > pageHeight) {
        doc.addPage();
        top = 20;
      }
  
      doc.addImage(imgData, "PNG", padding, top, elWidth, elHeight, `image${i}`);
      top += elHeight;
    }
  }

export async function exportPdf() {
    const doc= new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor("blue")
    doc.text("Relatório", 90, 25);

    const data = Date.now();
    const hoje = new Date(data);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor("black")
    doc.text(`Data: ${hoje.getDate()}/${hoje.getMonth()+1}/${hoje.getFullYear()} às ${hoje.getHours()}:${hoje.getMinutes()}:${hoje.getSeconds()}`, 20, 40);
    
    autoTable(doc, {
        startY: 50,
        head: [['Maçãs', 'Bananas', 'Laranjas', 'Açaí', 'Melancias', 'Cacau']],
        body: [
            ['1', '2', '3,', '7', '4', '8'],
        ],
      })
     
    const elements = document.getElementsByClassName("custom-chart");

    await creatPdf({ doc, elements });
      
    doc.save(`${data}.pdf`);
}
