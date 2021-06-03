import React from "react";
import PropertyInputBox from "../common/PropertyInputBox";
import PropertySelectBox from "./../common/PropertySelectBox";
import {useFormikContext, ErrorMessage} from "formik";
import Error from "./../forms/Error";
import SaveAsDraftButton from './SaveAsDraftButton';

function Step4({saveAsDraft}) {
  const {getFieldProps, values, setFieldValue} = useFormikContext();
  //   console.log("ee",pincodeDirectory.lookup(5869))

  let {value:GST, name} = getFieldProps("GST");

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
                      options={["No","Yes"]}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <PropertySelectBox
                      label="Are you registered for GST purposes?"
                      name="GST"
                      options={["No","Yes"]}
                    />
                  </div>
                  {(GST&&GST.startsWith("Y"))?<><div className="col-span-6 sm:col-span-6">
                    <PropertyInputBox
                      label="Trade name"
                      name="tradeName"
                    />
                  </div><div className="col-span-6 sm:col-span-6">
                    <PropertyInputBox
                      label="GSTIN Number"
                      name="GSTIN"
                    />
                  </div></>:""}
                  <div className="col-span-6 sm:col-span-3">
                    <PropertyInputBox
                      label="PAN Card number"
                      name="panCardNumber"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <PropertyInputBox
                      label="State"
                      name="state"
                    />
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

export default Step4;