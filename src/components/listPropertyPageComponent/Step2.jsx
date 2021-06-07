import React from "react";
import {useFormikContext, ErrorMessage} from "formik";
import Error from "./../forms/Error";
import SaveAsDraftButton from "./SaveAsDraftButton";
import PropertySelectBox from "./../common/PropertySelectBox";
import FormCheckBox from "./../common/FormCheckBox";

function Step2({saveAsDraft}) {
  const {values, getFieldProps, setFieldValue} = useFormikContext();

  let {value, name} = getFieldProps("facilities");
  let {value:extraBed} = getFieldProps("extraBed");

  let checkBoxModified = feature => {
    if (value.includes(feature)) value = value.filter(val => feature !== val);
    else value.push(feature);
    setFieldValue(name, value);
  };

  let leftFeature = [
    "Free Wifi",
    "Garden",
    "Water park",
    "Spa and wellness centre",
    "Terrace",
    "Fitness centre",
  ];
  let rightFeature = ["Restaurant", "Room service", "Bar", "Hot tub/jacuzzi", "Swimming pool"];

  return (
    <div style={{marginLeft: "7.75vw", width: "85%"}} className="md:grid md:grid-cols-1 md:gap-6">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0"></div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <PropertySelectBox
                      label="Parking"
                      name="parking"
                      options={["No", "Yes, Free", "Yes, Paid"]}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <PropertySelectBox
                      label="Breakfast"
                      name="breakfast"
                      options={["No", "Yes, Free", "Yes, Paid"]}
                    />
                  </div>
                  
                  <div className="col-span-6 sm:col-span-3">
                    <PropertySelectBox
                      label="Extra Bed"
                      name="extraBed"
                      options={["Yes", "No"]}
                    />
                  </div> 
                  {extraBed==="Yes"?<div className="col-span-6 sm:col-span-3">
                    <PropertySelectBox
                      label="No. of extra beds"
                      name="noOfExtraBeds"
                      options={[1,2,3,4]}
                    />
                  </div>:<div></div>}

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="hotelName" className="text-sm font-medium text-gray-700">
                      Features and Facilities
                    </label>
                    <div
                      style={{marginTop: "-70px", width: "100%"}}
                      className="md:grid md:grid-cols-1 md:gap-6"
                    >
                      <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-1 md:gap-6">
                          <div className="md:col-span-1">
                            <div className="px-4 sm:px-0"></div>
                          </div>
                          <div className="mt-5 md:mt-0 md:col-span-2">
                            <div className="shadow overflow-hidden sm:rounded-md">
                              <div className="px-2 py-3 bg-white sm:p-6">
                                <div className="bigholder">
                                  <div className="holder">
                                    {leftFeature.map(feature => (
                                      <FormCheckBox
                                        key={feature}
                                        defaultChecked={value.includes(feature)}
                                        label={feature}
                                        onChange={() => checkBoxModified(feature)}
                                      />
                                    ))}
                                  </div>
                                  <div className="holder">
                                    {rightFeature.map(feature => (
                                      <FormCheckBox
                                        key={feature}
                                        defaultChecked={value.includes(feature)}
                                        label={feature}
                                        onChange={() => checkBoxModified(feature)}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <label htmlFor="hotelName" className="block text-sm font-medium text-gray-700">
                    Features and Facilities
                  </label>
                    <div className="col-span-6 sm:col-span-3">
                      <FormCheckBox />
                      <FormCheckBox />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <FormCheckBox />
                      <FormCheckBox />
                    </div> */}

                  {/* <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email_address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country / Region
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street_address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street_address"
                        id="street_address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal_code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Postal
                      </label>
                      <input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div style={{width: "700%"}}>
                      <label className="block text-sm font-medium text-gray-700">last</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      </div>
                    </div> */}
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

export default Step2;
