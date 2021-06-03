import React, {useEffect, useState} from "react";
import PropertyInputBox from "../common/PropertyInputBox";
import PropertySelectBox from "./../common/PropertySelectBox";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {useFormikContext, ErrorMessage} from "formik";
import Error from "./../forms/Error";
import SaveAsDraftButton from "./SaveAsDraftButton";
import ImageUpload from "./ImageUpload";
import {Delete} from "@material-ui/icons";
// var pincodeDirectory = require('india-pincode-lookup');

function Step3({saveAsDraft}) {
  const [prev, setPrev] = useState();
  const [numberOfImages, setNumberOfImages] = useState(0);
  const {getFieldProps, values, setFieldValue} = useFormikContext();

  let {value,name} = getFieldProps("mainPhoto");
  const handleDelete = () => {
    setFieldValue(name, null);
    setPrev(null);
  };

  const loadImage = () => {
    setPrev(JSON.parse(localStorage.getItem("coverPhoto")))
  };

  useEffect(() => {
    loadImage();
  }, []);

  let handleImageChange = data => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setPrev(reader.result);
        localStorage.setItem("coverPhoto", JSON.stringify(reader.result));
      }
    };
    reader.readAsDataURL(data);
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
                <ImageUpload
                  label="Cover photo"
                  text="Upload an image"
                  multiple={false}
                  onChange={event => {
                    let data = event.target.files[0];
                    setFieldValue("mainPhoto", data);
                    handleImageChange(data);
                  }}
                />
                <ErrorMessage name="mainPhoto" component={Error} />
              </div>
              {prev&&value ? (
                <div>
                  <center>
                    <img className="image" src={prev} alt="hotel" />
                    <button onClick={handleDelete} className="btn btn-danger mt-2" type="button">
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
                    let data = event.target.files;
                    setFieldValue("photos", data);
                    setNumberOfImages(data.length);
                  }}
                  numberOfImages={numberOfImages}
                />
              </div>
              <SaveAsDraftButton values={values} saveAsDraft={saveAsDraft} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step3;
