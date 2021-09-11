
import jsPDFInvoiceTemplate, { OutputType, jsPDF } from "jspdf-invoice-template";


export default function Invoice(
  name,
  address,
  phone,
  inputFields,
  date,
  grandTotal,
  restaurantBillAmount,
  accomodationTotal,roomDetails
) {
  console.log('restaurant bill',restaurantBillAmount);
  console.log('accomodationTotal',accomodationTotal);
  console.log(inputFields)
// roomNumber:56,roomBoy:'ravi',roomType:'king'

  var props = {
    // outputType: OutputType.Save,
    returnJsPDFDocObject: true,
    fileName: "Invoice",
    orientationLandscape: false,
    logo: {
        src: '/adithyalogo.png',
        width: 53.33, //aspect ratio = width/height
        height: 26.66,
        margin: {
            top: 0, //negative or positive num, from the current position
            left: 0 //negative or positive num, from the current position
        }
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
        invDate: "Payment Date: 01/01/2021 18:12",
        invGenDate: `Invoice Date: ${date}`,
        headerBorder: false,
        tableBodyBorder: false,
        header: ["#", "Title", "Amount"],
        table: inputFields?.items.map((data,index) =>([
             index+=1,
             data.item,
             data.amount
        ]
        )),
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
        
        invDesc: `${roomDetails?.map(details=>([
           'Room Number - ', details.roomNumber,
            ' Room Type -', details.roomType,
            ' Room Boy - ', details.roomBoy
        ])
        )}`,
    },
    footer: {
        text: "The invoice is created on a computer and is valid without the signature and stamp.",
    },
    pageEnable: true,
    pageLabel: "Page ",
};

jsPDFInvoiceTemplate(props);

}


