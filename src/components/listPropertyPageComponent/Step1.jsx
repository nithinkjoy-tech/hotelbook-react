import React from "react";
import PropertyInputBox from "../common/PropertyInputBox";
import PropertySelectBox from "./../common/PropertySelectBox";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {useFormikContext, ErrorMessage} from "formik";
import Error from "./../forms/Error";
import SaveAsDraftButton from './../common/SaveAsDraftButton';
// var pincodeDirectory = require('india-pincode-lookup');

function Step1({saveAsDraft}) {
  const {handleBlur, getFieldProps, values, setFieldValue} = useFormikContext();
  //   console.log("ee",pincodeDirectory.lookup(5869))

  let {value, name} = getFieldProps("phoneNumber");

  const changePhoneNumber = number => {
    setFieldValue(name, number);
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
                    <PropertyInputBox label="Hotel Name" type="text" name="hotelName" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <PropertyInputBox label="Contact Name" type="text" name="contactName" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <PropertySelectBox
                      label="Star Rating"
                      name="starRating"
                      options={[null, 1, 2, 3, 4, 5]}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <PhoneInput
                      onBlur={handleBlur}
                      name={name}
                      onChange={changePhoneNumber}
                      value={value}
                      country={"in"}
                      onlyCountries={["in"]}
                    />
                    <ErrorMessage name="phoneNumber" component={Error} />
                  </div>
                  <div className="col-span-6 ">
                    <PropertyInputBox label="Address" type="text" name="address" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <PropertyInputBox label="City" type="text" name="city" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <PropertyInputBox label="Place For Search" type="text" name="placeForSearch" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <PropertyInputBox label="Postal Code" type="text" name="postalCode" />
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

export default Step1;
