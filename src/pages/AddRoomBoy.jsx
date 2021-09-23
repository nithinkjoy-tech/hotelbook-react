import React, {useState, useEffect} from "react";
import PropertyInputBox from "../components/common/PropertyInputBox";
import PropertySelectBox from "../components/common/PropertySelectBox";
import "react-phone-input-2/lib/style.css";
import * as Yup from "yup";
import FormCheckBox from "../components/common/FormCheckBox";
// import Error from "../../forms/Error";
import {Delete} from "@material-ui/icons";
import {Formik, Form, ErrorMessage, getIn} from "formik";
import {addRoomBoy, getRoomBoy, editRoomBoy, getHotelRooms} from "../api/admin";
import {getHotelsName} from "../api/guest";
import Error from "../components/forms/Error";
import {toast} from "react-toastify";
import {displayNotification} from "../services/notificationService";
import {DropzoneArea} from "material-ui-dropzone";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import _ from "lodash";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(1).max(50).required(),
  phoneNumber: Yup.string()
    .required()
    .length(12)
    .matches(/^[0-9]+$/, "Mobile number must include only numbers")
    .label("Mobile Number"),
  address: Yup.string().required().min(8).max(255),
  city: Yup.string().required().min(1).max(50),
  aadharNumber: Yup.string()
    .required()
    .length(12)
    .matches(/^[0-9]+$/, "Aadhar Number must include only numbers")
    .label("Aadhar Number"),
  photo: Yup.mixed().required(),
  currentHotelId: Yup.string().required().label("Current Hotel Id"),
});

function AddRoomBoy({match, hotelId}) {
  const roomBoyId = match?.params?.roomBoyId;
  console.log(hotelId, "rbid");

  // let mongoIdRegex=new RegExp("^[0-9a-fA-F]{24}$")

  // if(!mongoIdRegex.test(roomBoyId)) return displayNotification("error","Invalid ")

  const [initialValues, setInitialValues] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
    aadharNumber: "",
    photo: "",
    currentHotelId: hotelId || "",
  });

  const [options, setOptions] = useState();
  const [prev, setPrev] = useState();

  const getRoomBoyDetails = async () => {
    // const {data, status} = await getHotelsName();
    // if (status !== 200) return displayNotification("error", "Something went wrong");
    // // console.log(data,"dt")
    // setOptions(data);

    if (hotelId) {
      const {data: validHotel, status: resStatus} = await getHotelRooms(hotelId);
      if (resStatus !== 200) return displayNotification("error", "Invalid URL");
    }

    if (roomBoyId) {
      console.log("here");
      const {data, status} = await getRoomBoy(roomBoyId);
      console.log("done");
      if (status !== 200) return displayNotification("error", "Something went wrong");
      console.log(data, "rb");
      setInitialValues(data);
      setPrev(data.photo);
    }
  };

  useEffect(() => {
    getRoomBoyDetails();
  }, []);

  const handleSubmit = async (values, setFieldError) => {
    // values["currentHotelId"]=options.filter(option=>option.city===values["currentHotel"])[0]._id
    if (!roomBoyId) {
      const {data, status} = await addRoomBoy(values);
      if (status !== 200) return displayNotification("error", data);
      displayNotification("info", "Successfully saved");
      setTimeout(() => {
        window.location=`/admin/manageHotel/${localStorage.getItem("viewHotelId")}`
      },1000)
    } else {
      const {data, status} = await editRoomBoy(roomBoyId, values);
      if (status !== 200) return displayNotification("error", data);
      displayNotification("info", "Successfully updated");
      setTimeout(() => {
        window.location=`/admin/manageHotel/${localStorage.getItem("viewHotelId")}`
      },1000)
    }
  };

  const handleImageChange = (data, setFieldValue) => {
    if (!data[0]) return;
    // console.log(data,"dta")
    const reader = new FileReader();
    // setPrev(null)
    reader.onload = () => {
      if (reader.readyState === 2) {
        let imageBase64 = reader.result;
        setFieldValue("photo", imageBase64);
      }
    };
    reader.readAsDataURL(data[0]);
  };

  return (
    <div className={roomBoyId ? "" : "dashboard-items"}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, {setFieldError}) => handleSubmit(values, setFieldError)}
        enableReinitialize
      >
        {({
          setFieldValue,
          getFieldProps,
          errors,
          getFieldMeta,
          handleBlur,
          values,
          setFieldTouched,
          handleChange,
        }) => (
          <Form>
            <div style={{marginTop: "60px"}}>
              <h1 style={{textAlign: "center", marginTop: "70px", marginBottom: "0"}}>
                Add RoomBoy
              </h1>
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
                              <PropertyInputBox label="Name" type="text" name="name" />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <PropertyInputBox label="Address" name="address" />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <PropertyInputBox label="City" type="text" name="city" />
                            </div>
                            
                            
                            <div className="col-span-6 sm:col-span-3">
                              <PropertyInputBox
                                label="Aadhar Number"
                                name="aadharNumber"
                                placeholder="Aadhar Number"
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label className="block text-sm font-medium text-gray-700">
                                Phone Number
                              </label>
                              <PhoneInput
                                onBlur={() => {
                                  setFieldTouched("phoneNumber");
                                  handleBlur("phoneNumber");
                                }}
                                name="phoneNumber"
                                onChange={number => {
                                  setFieldValue("phoneNumber", number);
                                }}
                                value={values["phoneNumber"]}
                                country={"in"}
                                onlyCountries={["in"]}
                              />
                              {getIn(errors, `phoneNumber`) &&
                                getFieldMeta("phoneNumber").touched && (
                                  <div style={{color: "red"}}>{getIn(errors, "phoneNumber")}</div>
                                )}
                            </div>
                            <div className="col-span-6 sm:col-span-3"></div>
                            {/* <div className="col-span-6 sm:col-span-3">
                              <PropertySelectBox
                                label="Current Hotel"
                                name="currentHotel"
                                onChange={handleChange}
                                options={_.flattenDeep([null, options.map(hotel => hotel.city)])}
                              />
                            </div> */}
                            {/* <div className="col-span-6 sm:col-span-3"></div> */}
                            <div style={{width: "65vw", marginTop: "3rem", marginLeft: 0}}>
                              <p style={{color: "black"}}>Passport size photo (Below 200kb)</p>
                              <div style={{margin: "auto", width: "70%"}}>
                                <DropzoneArea
                                  onChange={data => handleImageChange(data, setFieldValue)}
                                  acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                                  showPreviews={true}
                                  maxFileSize={204900}
                                  filesLimit={1}
                                  onDelete={() => {
                                    if (prev) {
                                      setFieldValue("photo", prev);
                                    }
                                  }}
                                />
                                {getIn(errors, `photo`) && getFieldMeta("photo").touched && (
                                  <div style={{color: "red"}}>{getIn(errors, "photo")}</div>
                                )}
                              </div>
                              {prev ? (
                                <img style={{margin: "auto", width: "50%"}} src={prev} />
                              ) : null}
                            </div>
                          </div>
                          <button
                            style={{float: "right", marginRight: "4rem", marginBottom: "2rem"}}
                            className="btn btn-primary"
                            type="submit"
                          >
                            Save Details
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
    </div>
  );
}

export default AddRoomBoy;
