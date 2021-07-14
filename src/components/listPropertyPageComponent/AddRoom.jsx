import React, {useEffect, useState} from "react";
import PropertyInputBox from "../common/PropertyInputBox";
import PropertySelectBox from "./../common/PropertySelectBox";
import "react-phone-input-2/lib/style.css";
import * as Yup from "yup";
import FormCheckBox from "./../common/FormCheckBox";
import Error from "./../forms/Error";
import ImageUpload from "./ImageUpload";
import {Delete} from "@material-ui/icons";
import {Formik, Form,ErrorMessage} from "formik";
import {addRoom,getRenterRoomById,editRoomById} from "../../api/renter";
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
  mainPhoto: Yup.mixed().required(),
  photos: Yup.array().nullable(),
});

function AddRoom({match}) {
  let roomId = match.params.roomId;

  const [initialValues,setInitialValues]=useState({
    roomType: "",
    numberOfRoomsOfThisType: "",
    kindOfBed: "Single bed",
    numberOfBeds: "",
    basePricePerNight: "",
    numberOfGuestsInaRoom: "",
    facilities: [],
    mainPhoto: "",
    photos: [],
    hotelId:null
  })

  async function getRoom(id) {
    const {data} = await getRenterRoomById(id);
    setInitialValues(data);

    setPrev(data.mainPhoto)
    setNumberOfImages(data.photos.length)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (roomId) {
      getRoom(roomId);
    }
  }, []);

  const [prev, setPrev] = useState();
  const [numberOfImages, setNumberOfImages] = useState(0);

  const handleDelete = (setFieldValue, getFieldProps) => {
    let {name} = getFieldProps("mainPhoto");
    setFieldValue(name, null);
    setPrev(null);
  };

  let imageToBase64 = (images, setFieldValue) => {
    let imagesBase64 = [];
    for (let image of images) {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          let imageBase64 = reader.result;
          imagesBase64.push(imageBase64);
        }
      };
      reader.readAsDataURL(image);
    }
    setFieldValue("photos", imagesBase64);
  };

  let handleImageChange = (data, setFieldValue) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        let imageBase64 = reader.result;
        setPrev(imageBase64);
        setFieldValue("mainPhoto", imageBase64);
      }
    };
    reader.readAsDataURL(data);
  };

  const handleSubmit = async (values, setFieldError) => {
    values["hotelId"] = match.params.hotelId||initialValues.hotelId;
    let isEdited=false
    if (roomId) {
      const {data, status} = await editRoomById(values, roomId);
      if (status === 400) return setFieldError(data.property, data.msg);
      isEdited=true
    } else {
      const {data, status} = await addRoom(values);
      if (status === 400 && data.property === "toast") return toast.error(data.msg);
      if (status === 400) return setFieldError(data.property, data.msg);
    }
    toast.dismiss();
    if(isEdited) toast.info("Successfully modified details")
    else toast.info("Successfully added room");
    setTimeout(() => {
      window.location = "/renter/dashboard";
    }, 1000);
  };

  


  let checkBoxModified = (feature, setFieldValue,{value,name}) => {
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

  if(roomId&&!initialValues?.roomType) return null


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, {setFieldError}) => handleSubmit(values, setFieldError)}
      enableReinitialize
    >
      {({setFieldValue, getFieldProps}) => (
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
                              name="numberOfRoomsOfThisType"
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
                              name="numberOfBeds"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <PropertyInputBox
                              label="Base Price Per Night (INR)"
                              type="text"
                              name="basePricePerNight"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <PropertyInputBox
                              label="Number of Guests in a Room"
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
                                                defaultChecked={getFieldProps("facilities").value.includes(feature)}
                                                label={feature}
                                                onChange={() =>
                                                  checkBoxModified(feature, setFieldValue,getFieldProps("facilities"))
                                                }
                                              />
                                            ))}
                                          </div>
                                          <div className="holder">
                                            {rightFeature.map(feature => (
                                              <FormCheckBox
                                                key={feature}
                                                defaultChecked={getFieldProps("facilities").value.includes(feature)}
                                                label={feature}
                                                onChange={() =>
                                                  checkBoxModified(feature, setFieldValue,getFieldProps("facilities"))
                                                }
                                              />
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div style={{width: "80vw",marginTop:"3rem"}}>
                                      <div className="col-span-6 sm:col-span-6">
                                        <ImageUpload
                                          label="Cover photo"
                                          text="Upload an image"
                                          multiple={false}
                                          onChange={event => {
                                            let image = event.target.files[0];
                                            handleImageChange(image, setFieldValue);
                                          }}
                                        />
                                          <ErrorMessage name="mainPhoto" component={Error} />
                                      </div>
                                      {prev ? (
                                        <div>
                                          <center>
                                            <img className="image" src={prev} alt="hotel" />
                                            <button
                                              onClick={() =>
                                                handleDelete(setFieldValue, getFieldProps)
                                              }
                                              className="btn btn-danger mt-2"
                                              type="button"
                                            >
                                              <span>
                                                <Delete /> Delete
                                              </span>
                                            </button>
                                          </center>
                                        </div>
                                      ) : (
                                        <div></div>
                                      )}
                                      <div className="px-4 py-5 bg-white sm:p-6">
                                        <ImageUpload
                                          text="Upload multiple images"
                                          label="Other photos"
                                          multiple={true}
                                          onChange={event => {
                                            let images = event.target.files;
                                            setFieldValue("photos", images);
                                            imageToBase64(images, setFieldValue);
                                            setNumberOfImages(images.length);
                                          }}
                                          numberOfImages={numberOfImages}
                                        />
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
                          type="submit"
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
