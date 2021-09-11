import React, {useState, useEffect, useRef} from "react";
import Invoice from "../common/Invoice";
import "../../css/Checkout.css";
import {checkOutDetails, checkOut} from "../../api/renter";
import {displayNotification} from "./../../services/notificationService";
import {Button} from "@material-ui/core";
import {FieldArray, Form, Formik, getIn} from "formik";
import * as Yup from "yup";
import MUITextField from "@material-ui/core/TextField";
import _ from "lodash";
import {confirmAlert} from "react-confirm-alert";

const validationSchema = Yup.object().shape({
  items: Yup.array().of(
    Yup.object().shape({
      itemName: Yup.string().min(1).max(50).required().label("Item Name"),
      itemPrice: Yup.number()
        .typeError("Must be a Number")
        .positive()
        .min(1)
        .max(1000000)
        .required()
        .label("Item Price"),
    })
  ),
});

function CheckOut({match}) {
  const bookingId = match.params.bookingId;
  const [inputFields, setInputFields] = useState([]);
  const [details, setDetails] = useState();
  let removeButtonRef = useRef(null);

  const [total, setTotal] = useState();
  const [isPaid, setIsPaid] = useState(false);
  const [grandTotal, setGrandTotal] = useState();
  const [restaurantBillAmount, setRestaurantBillAmount] = useState();
  const [accomodationTotal, setAccomodationTotal] = useState();

  const initialValues = {items: [{itemName: "", itemPrice: ""}]};

  const getDetails = async () => {
    const {data, status} = await checkOutDetails(bookingId);
    console.log('checkout data',data)
    if (status !== 200) {
      displayNotification("error", data);
      setTimeout(() => {
        window.location = "/reception/dashboard";
      }, 1000);
    }
    setDetails(data);
    setTotal(Number(data.price));
    setGrandTotal(Number(data.price));
    setRestaurantBillAmount(data.restaurantBillAmount);
    setAccomodationTotal(data.accomodationTotal);
    if (removeButtonRef.current) {
      removeButtonRef.current.click();
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  function generateInvoice() {
    const d = new Date();
    let month = d.getMonth() + 1;
    const date = d.getDate() + "/" + month + "/" + d.getFullYear();
    console.log(inputFields)
    // Dummy Room details

let roomDetails = [{roomNumber:56,roomBoy:'ravi',roomType:'king'}]
    Invoice(
      details?.name,
      details?.address,
      details?.phoneNumber,
      inputFields,
      date,
      grandTotal,
      restaurantBillAmount,
      accomodationTotal,roomDetails
    );
  }

  const handleSubmit = async values => {
    confirmAlert({
      title: "Confirm Payment",
      message: "Are you sure want to pay.",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            const {data, status} = await checkOut(bookingId, values);
            if (status !== 200) return displayNotification("error", "Something went wrong");
            displayNotification("info", "Payment successfull");
            setIsPaid(true);
          },
        },
        {
          label: "No",
          onClick: () => {
            return null;
          },
        },
      ],
    });
  };

  if (!details) return null;

  return (
    <div className="checkout mt-14">
      <h2 className="title">Check Out</h2>
      <div style={{display: "flex"}}>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => (window.location = "/reception/dashboard")}
        >
          Go to Home
        </button>
        <div className="payment-contents" style={{flexGrow: 1}}>
          <div className="left">
            <h4 className="name">Name</h4>
            <p>{details.name}</p>
            <h4 className="address">Address</h4>
            <p>{details.address}</p>
            <h4 className="phone">Phone</h4>
            <p>{details.phoneNumber}</p>
          </div>
          <div className="right">
            <div className="container">
              <div className="row">
                <div className="col" style={{fontSize: "20px"}}>
                  Accomodation Total
                </div>
                <div className="col font-bold" style={{fontSize: "20px"}}>
                  Rs. {accomodationTotal}
                </div>
                <div className="w-100"></div>
                <div className="col" style={{fontSize: "20px"}}>
                  Restaurant Total
                </div>
                <div className="col font-bold" style={{fontSize: "20px"}}>
                  Rs. {restaurantBillAmount}
                </div>
              </div>
            </div>
            <div>
              <div style={{textAlign: "center"}}>
                <Formik
                  initialValues={initialValues}
                  onSubmit={(values, {setFieldError}) => handleSubmit(values, setFieldError)}
                  validationSchema={validationSchema}
                >
                  {({
                    values,
                    errors,
                    isValid,
                    getFieldProps,
                    getFieldMeta,
                    handleChange,
                    handleBlur,
                    setFieldValue,
                  }) => (
                    <Form>
                      <FieldArray name="items">
                        {({push, remove}) => (
                          <div>
                            {values.items.map((p, index) => {
                              return (
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    alignItems: "flex-end",
                                  }}
                                  key={p.id}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-evenly",
                                      alignItems: "flex-end",
                                    }}
                                  >
                                    <MUITextField
                                      name={`items[${index}].itemName`}
                                      label="Item Name"
                                      className="mt-14"
                                      onChange={handleChange}
                                      value={getFieldProps(`items[${index}].itemName`).value}
                                      onBlur={handleBlur}
                                    />
                                    {getIn(errors, `items[${index}].itemName`) &&
                                      getFieldMeta(`items[${index}].itemName`).touched && (
                                        <div style={{color: "red"}}>
                                          {getIn(errors, `items[${index}].itemName`)}
                                        </div>
                                      )}
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-evenly",
                                      alignItems: "flex-end",
                                    }}
                                  >
                                    <MUITextField
                                      name={`items[${index}].itemPrice`}
                                      label="Item Price"
                                      className="mt-14"
                                      onChange={async e => {
                                        await setFieldValue(
                                          `items[${index}].itemPrice`,
                                          e.target.value
                                        );
                                      }}
                                      value={(() => {
                                        let extraItemsPrice = 0;
                                        values.items.map(
                                          item => (extraItemsPrice += Number(item.itemPrice))
                                        );
                                        setGrandTotal(Number(total) + extraItemsPrice);
                                        setInputFields(values);
                                        return getFieldProps(`items[${index}].itemPrice`).value;
                                      })()}
                                      onBlur={handleBlur}
                                    />
                                    {getIn(errors, `items[${index}].itemPrice`) &&
                                      getFieldMeta(`items[${index}].itemPrice`).touched && (
                                        <div style={{color: "red"}}>
                                          {getIn(errors, `items[${index}].itemPrice`)}
                                        </div>
                                      )}
                                  </div>
                                  <div
                                    ref={removeButtonRef}
                                    className="btn btn-danger"
                                    onClick={() => {
                                      remove(index);
                                      setGrandTotal(
                                        Number(total) -
                                          Number(getFieldProps(`items[${index}].itemPrice`).value)
                                      );
                                    }}
                                  >
                                    Delete
                                  </div>
                                </div>
                              );
                            })}
                            <Button
                              type="button"
                              className="mt-3"
                              style={{marginRight: "130px"}}
                              variant="contained"
                              onClick={() => {
                                if (!isValid) return;
                                push({itemName: "", itemPrice: ""});
                              }}
                            >
                              Add Additional Charges
                            </Button>
                          </div>
                        )}
                      </FieldArray>
                      <div></div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                          justifyContent: "flex-start",
                        }}
                        className="mt-8"
                      >
                        <div>
                          <h3>
                            {" "}
                            Total Rs. <span style={{fontWeight: "bold"}}>{grandTotal}</span>
                          </h3>
                        </div>
                        {!isPaid && (
                          <Button
                            className="mb-2 ml-5"
                            variant="contained"
                            color="primary"
                            type="submit"
                          >
                            pay amount
                          </Button>
                        )}
                        {isPaid && (
                          <button
                            type="button"
                            className="mb-2 ml-5 btn btn-secondary"
                            onClick={generateInvoice}
                          >
                            Download Invoice
                          </button>
                        )}
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
