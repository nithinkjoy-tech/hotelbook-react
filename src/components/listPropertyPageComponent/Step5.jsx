import React,{useEffect} from "react";
import PropertyInputBox from "../common/PropertyInputBox";
import PropertySelectBox from "./../common/PropertySelectBox";
import {useFormikContext} from "formik";
import SaveAsDraftButton from "./SaveAsDraftButton";

function Step5({saveAsDraft}) {
  useEffect(() => {
    window.scrollTo(0, 0) 
  }, [])

  const {getFieldProps, setFieldValue, values} = useFormikContext();

  let states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];
  let {value: GST} = getFieldProps("GST");
  let {value: address} = getFieldProps("address");

  const setPaymentAddress = () => {
    setFieldValue("paymentAddress", address);
  };

  return (
    <div style={{marginLeft: "7.75vw", width: "85%"}} className="md:grid md:grid-cols-1 md:gap-6">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0" />
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <PropertySelectBox
                      label="Is prepayment required"
                      name="isPrepaymentRequired"
                      options={["No", "Yes"]}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <PropertySelectBox
                      label="Are you registered for GST purposes?"
                      name="GST"
                      options={["No", "Yes"]}
                    />
                  </div>
                  {GST && GST === "Yes" ? (
                    <>
                      <div className="col-span-6 sm:col-span-6">
                        <PropertyInputBox label="Trade name" name="tradeName" />
                      </div>
                      <div className="col-span-6 sm:col-span-6">
                        <PropertyInputBox label="GSTIN Number" name="GSTIN" />
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <div className="col-span-6 sm:col-span-3">
                    <PropertyInputBox label="PAN Card number" name="panCardNumber" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <PropertySelectBox label="State" name="state" options={states} />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <PropertyInputBox label="Payment Address" name="paymentAddress" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <button
                      className="btn btn-secondary mt-7"
                      type="button"
                      onClick={() => setPaymentAddress()}
                    >
                      click to copy payment address same as hotel address
                    </button>
                  </div>
                </div>
              </div>
              <SaveAsDraftButton values={values} saveAsDraft={saveAsDraft} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step5;
