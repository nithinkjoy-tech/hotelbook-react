import {jsPDF} from "jspdf";

export default function Invoice(
  name,
  address,
  phone,
  inputFields,
  date,
  grandTotal,
  restaurantBillAmount,
  accomodationTotal
) {
  if(restaurantBillAmount){
      inputFields.items.splice(0,0,{itemName:"Restaurant Bill",itemPrice:restaurantBillAmount})
    }
    inputFields.items.splice(0,0,{itemName:"Accomodation Total",itemPrice:accomodationTotal})
  
  let i = 4;
  const doc = new jsPDF({orientation: "p", unit: "in", format: "a4"});

  doc.setFontSize(30);
  doc.text(`Invoice`, 3.5, 0.5);
  doc.setFontSize(15);
  doc.text("Invoice From", 1, 1);
  doc.setFontSize(12);
  doc.text(`Hotel Adithya`, 1, 1.3);
  doc.text("Dharmastala,D.k", 1, 1.5);
  doc.setFontSize(15);
  doc.text("Bill To", 1, 2);
  doc.setFontSize(12);
  doc.text(`${name}`, 1, 2.3);
  doc.text(`${address}`, 1, 2.5);
  doc.text(`${phone}`, 1, 2.7);
  doc.setFontSize(15);
  doc.text("Invoice Date", 5, 1);
  doc.setFontSize(12);
  doc.text(`${date}`, 5.2, 1.3);
  doc.setFontSize(15);
  if (inputFields?.items.length !== 0) {
    doc.text("Item", 0.9, 3.9);
    doc.text("Amount", 3.9, 3.9);
    doc.text("-----------------------------------------------------------", 0.7, 4);
  }
  inputFields?.items.map(item => {
    i += 0.3;
    doc.text(`${item.itemName}`, 1, `${i}`);
    doc.text(`${item.itemPrice}`, 4, `${i}`);
  });
  i += 1;
  doc.text("Total Rs:-", 4, `${i}`);
  doc.text(`${grandTotal}`, 5, `${i}`);
  doc.save();
}
