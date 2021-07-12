import React, {useEffect} from "react";
import PropertyInputBox from "../common/PropertyInputBox";
import PropertySelectBox from "./../common/PropertySelectBox";
import "react-phone-input-2/lib/style.css";
import * as Yup from "yup";
import FormCheckBox from "./../common/FormCheckBox";
import {Formik, Form} from "formik";
import {addRoom} from "../../api/renter";
import {toast} from "react-toastify";

const validationSchema = Yup.object().shape({
  roomType: Yup.string().min(1).max(50).required(),
  numberOfRoomsOfThisType: Yup.number().min(1).max(9999).required(),
  kindOfBed: Yup.string()
    .required()
    .oneOf(["Single bed", "Double bed", "Large bed", "Extra large bed"]),
  numberOfBeds: Yup.number().min(1).max(10).required(),
  basePricePerNight: Yup.number().min(10).max(2500000).required(),
  numberOfGuestsInaRoom: Yup.number().min(1).max(50),
  facilities: Yup.array().required(),
});

function AddRoom({match}) {
  let hotelId = match.params.hotelId;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (values, setFieldError) => {
    values["hotelId"] = hotelId;
    // return console.log(values,"va")
    const {data, status} = await addRoom(values);

    if (status === 400 && data.property === "toast") return toast.error(data.msg);
    if (status === 400) return setFieldError(data.property, data.msg);
    toast.info("Successfully added room");
    setTimeout(() => {
      window.location = "/renter/dashboard";
    }, 1000);
  };

  let initialValues = {
    roomType: "",
    numberOfRoomsOfThisType: "",
    kindOfBed: "Single bed",
    numberOfBeds: "",
    basePricePerNight: "",
    numberOfGuestsInaRoom: "",
    facilities: [],
  };

  let value = initialValues.facilities;

  let checkBoxModified = (feature,setFieldValue) => {
    if (value.includes(feature)) value = value.filter(val => feature !== val);
    else value.push(feature);
    setFieldValue("facilities", value);
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, {setFieldError}) => handleSubmit(values, setFieldError)}
    >
      {({setFieldValue}) => (
        <Form>
          <div style={{marginTop: "60px"}}>
            <h1 style={{textAlign: "center", marginTop: "70px", marginBottom: "0"}}>Add room</h1>
            <div
              style={{marginLeft: "7.75vw", width: "85%", marginBottom: "2rem"}}
              className="md:grid md:grid-cols-1 md:gap-6"
            >
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
                            <PropertyInputBox label="Room Type" type="text" name="roomType" />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <PropertyInputBox
                              label="Number of Rooms of this Type"
                              type="number"
                              name="numberOfRoomsOfThisType"
                              min="1"
                              max="9999"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <PropertySelectBox
                              label="Kind of Bed"
                              name="kindOfBed"
                              options={["Single bed", "Double bed", "Large bed", "Extra large bed"]}
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <PropertyInputBox
                              label="Number of Beds"
                              type="number"
                              name="numberOfBeds"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <PropertyInputBox
                              label="Base Price Per Night (INR)"
                              type="number"
                              name="basePricePerNight"
                              min="10"
                              max="2500000"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <PropertyInputBox
                              label="Number of Guests in a Room"
                              type="number"
                              name="numberOfGuestsInaRoom"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="hotelName"
                              className="text-sm font-medium text-gray-700"
                            >
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
                                                defaultChecked={value?.includes(feature)}
                                                label={feature}
                                                onChange={() => checkBoxModified(feature,setFieldValue)}
                                              />
                                            ))}
                                          </div>
                                          <div className="holder">
                                            {rightFeature.map(feature => (
                                              <FormCheckBox
                                                key={feature}
                                                defaultChecked={value.includes(feature)}
                                                label={feature}
                                                onChange={() => checkBoxModified(feature,setFieldValue)}
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
                        </div>
                        <button
                          style={{float: "right", marginRight: "4rem", marginBottom: "2rem"}}
                          className="btn btn-primary"
                        >
                          Save Room
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AddRoom;
