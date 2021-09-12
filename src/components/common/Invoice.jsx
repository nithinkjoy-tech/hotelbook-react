import jsPDFInvoiceTemplate, {OutputType, jsPDF} from "jspdf-invoice-template";

export default function Invoice(
  name,
  address,
  phone,
  inputFields,
  date,
  grandTotal,
  restaurantBillAmount,
  accomodationTotal,
  roomDetails,
  extraBedTotal
) {
  if (restaurantBillAmount) {
    inputFields.items.splice(0, 0, {itemName: "Restaurant Bill", itemPrice: restaurantBillAmount});
  }
  if (extraBedTotal) {
    inputFields.items.splice(0, 0, {itemName: "Extra Bed Cost", itemPrice: extraBedTotal});
  }
  inputFields.items.splice(0, 0, {itemName: "Accomodation Total", itemPrice: accomodationTotal});
  // roomNumber:56,roomBoy:'ravi',roomType:'king'

  var props = {
    // outputType: OutputType.Save,
    returnJsPDFDocObject: true,
    fileName: "Invoice",
    orientationLandscape: false,
    logo: {
      src: "/HotelBook.png",
      width: 53.33, //aspect ratio = width/height
      height: 26.66,
      margin: {
        top: 0, //negative or positive num, from the current position
        left: 0, //negative or positive num, from the current position
      },
    },
    business: {
      name: "Hotel Adithya",
      address: "Bangalore Road, Dharmastala",
      phone: "9874563210",
      email: "info@adithyahotel.com",
      website: "hoteladithya.com",
    },
    contact: {
      label: "Invoice issued for:",
      name: name,
      address: address,
      phone: phone,
      email: "client@website.al",
      otherInfo: "www.website.al",
    },
    invoice: {
      label: "Invoice #: ",
      num: 19,
      invDate: `Payment Date: ${date}`,
      invGenDate: `Invoice Date: ${date}`,
      headerBorder: false,
      tableBodyBorder: false,
      header: ["#", "Title", "Amount"],
      table: inputFields?.items.map((data, index) => [(index += 1), data.itemName, data.itemPrice]),
      invTotalLabel: "Total:",
      invTotal: `${grandTotal}`,
      invCurrency: "ALL",
      // row1: {
      //     col1: 'VAT:',
      //     col2: '20',
      //     col3: '%',
      //     style: {
      //         fontSize: 10 //optional, default 12
      //     }
      // },
      // row2: {
      //     col1: 'SubTotal:',
      //     col2: '116,199.90',
      //     col3: 'ALL',
      //     style: {
      //         fontSize: 10 //optional, default 12
      //     }
      // },

      invDescLabel: "Room Details",

      invDesc: `${roomDetails?.map(details => [
        "Room Number - ",
        details.roomNumber,
        " Room Type -",
        details.roomType,
        " Room Boy - ",
        details.roomBoy,
        " Adults - ",
        details.adults,
        " Children - ",
        details.children,
      ])}`,
    },
    footer: {
      text: "The invoice is created on a computer and is valid without the signature and stamp.",
    },
    pageEnable: true,
    pageLabel: "Page ",
  };

  jsPDFInvoiceTemplate(props);
}
