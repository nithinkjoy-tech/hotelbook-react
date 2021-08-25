import {jsPDF} from 'jspdf';


export default function Invoice(name,address,phone,inputFields,total,amount,date){
     let i=4;
    const doc = new jsPDF({orientation: "p",
    unit: "in",
    format: 'a4'})
    

doc.setFontSize(30);
doc.text(`Invoice`,3.5,0.5);
doc.setFontSize(15)
doc.text('Invoice From',1,1);
doc.setFontSize(12)
doc.text(`Hotel Adithya`,1,1.3)
doc.text('Dharmastala,D.k',1,1.5)
doc.setFontSize(15)
doc.text('Bill To',1,2)
doc.setFontSize(12)
doc.text(`${name}`,1,2.3)
doc.text(`${address}`,1,2.5);
doc.text(`${phone}`,1,2.7);
doc.setFontSize(15)
doc.text('Invoice Date',5,1)
doc.setFontSize(12)
doc.text(`${date}`,5.2,1.3)
doc.setFontSize(15)
if(inputFields.length !== 0){
doc.text('Item',0.9,3.9);
doc.text('Amount',3.9,3.9);
doc.text('-----------------------------------------------------------',0.7,4)}
inputFields.forEach(items)
function items(element){
    i+=.3;
    doc.text(`${element.item}`,1,`${i}`);
    doc.text(`${element.amount}`,4,`${i}`)
}
i+=1
doc.text('Total:-',4,`${i}`);
const final = total + amount;
doc.text(`${final}`,5,`${i}`)
doc.save()
  }


