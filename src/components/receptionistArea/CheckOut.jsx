import React, {useState, useEffect} from "react";
import Invoice from "../common/Invoice";
import "../../css/Checkout.css";
import {checkOutDetails,checkOut} from "../../api/renter"
import { displayNotification } from './../../services/notificationService';

function CheckOut({match}) {
  const bookingId = match.params.bookingId
  const [inputFields, setInputFields] = useState([]);
  const [values, setValues] = useState();
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState();
  let disable = true;

  //Amount calculation
  // const money = 1500;
  const [money, setMoney] = useState();
  const [total, setTotal] = useState();
  const [amount, setAmount] = useState([]);

  const handlePay=async()=>{
    const {data,status}=await checkOut(bookingId)
    if(status !== 200) return displayNotification("error","Something went wrong")
    console.log(data)
    displayNotification("info","Payment successfull")
    
  }

  const getDetails=async()=>{
    const {data}=await checkOutDetails(bookingId)
    console.log(data)
    setDetails(data)
    setTotal(Number(data.price))
  }

  useEffect(() => {
    getDetails()
    const amountList = inputFields.map(amt => Number(amt.amount));
    const result = amountList.reduce((a, b) => a + b, 0);
    setAmount(result);
  }, [inputFields, amount]);

  values && (values.item && values.amount ? (disable = false) : (disable = true));

  function handleChange(e) {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  }

  function handleRemove(index) {
    const fields = [...inputFields];
    fields.splice(index, 1);
    setInputFields(fields);
  }

  function handleVisible() {
    setVisible(true);
  }

  function generateInvoice() {
    const d = new Date();
    const date = d.getDate() + "/" + d.getMonth()+1 + "/" + d.getFullYear();
    // Name
    // Address
    // phone
    // inputfields
    // Total
    // Amount
    // Date
    let name = "vishnu satheesh";
    let address = "pulickal house, kakkinje post, kaanjal";
    let phone = "8137833845";
    Invoice(details?.name||name, address, phone, inputFields, total, amount, date);
  }

  function handleSave() {
    const fields = [...inputFields];
    fields.push(values);
    setInputFields(fields);
    setVisible(false);
    disable = true;
    setValues(undefined);
  }

  if(!details) return null

  return (
    <div className="checkout">
      <h2 className="title">Check Out</h2>
      <div className="payment-contents">
        <div className="left">
          <h4 className="name">Name</h4>
          <p>{details.name}</p>
          <h4 className="address">Address</h4>
          <p>Pulickal house, kakkinje post, kaanjal</p>
          <h4 className="phone">Phone</h4>
          <p>8198745632</p>
        </div>
        <div className="right">
          <h4 className="title-fields">Add Additional Charges here!</h4>
          <div className="input-box">
            {inputFields &&
              inputFields.map((field, index) => {
                return (
                  <div className="text-fields" key={index}>
                    <div className="list-items">
                      <div className="list-item">
                        <h5 className="item-list">{field.item}</h5>
                        <h5 className="item-list">{field.amount}</h5>
                        {
                          <button className="remove-button" onClick={() => handleRemove(index)}>
                            {" "}
                            -{" "}
                          </button>
                        }
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <button type="button" className="add-button" onClick={() => handleVisible()}>
            +
          </button>

          {visible ? (
            <div className="fields">
              <input
                type="text"
                className="itembox"
                name="item"
                placeholder="Additional Item"
                onChange={handleChange}
              />
              <input
                type="text"
                className="amountbox"
                name="amount"
                placeholder="Item Cost"
                onChange={handleChange}
              />
              <button
                type="button"
                className={`save-button ${disable ? "dis" : ""}`}
                onClick={() => handleSave()}
                disabled={disable}
              >
                ADD
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="amount">
            <h4 className="total">Total -</h4>
            <h3 className="total-amount">Rs. {total + amount}</h3>
          </div>
          <button onClick={handlePay} type="button" className="pay-button">
            PAY
          </button>
        </div>
      </div>
      <div className="invoice-button">
        <p className="invoice-text">Download Invoice now</p>
        <button type="button" className="download-button" onClick={generateInvoice}>
          Download
        </button>
        <button type="button" className="btn btn-warning" onClick={()=>window.location="/reception/dashboard"}>
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default CheckOut;
