import React from "react";
import PropertyInputBox from "../common/PropertyInputBox";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {useFormikContext, ErrorMessage} from "formik";
import {Form, Formik} from "formik";
import Error from "./../forms/Error";
import * as Yup from "yup";
import {offlineGuestSignup} from "../../api/renter";
import { displayNotification } from './../../services/notificationService';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2).max(50).required("Name is required").label("Name"),
  email: Yup.string().required("Email is required").email("Email must be valid").label("Email"),
  phoneNumber: Yup.string().min(5).max(50).nullable(),
});

function GuestForm({setGuestExist}) {
  const handleSubmit = async (values, setFieldError) => {
    console.log(values, "vls");
    const {data, status} = await offlineGuestSignup(values);
    localStorage.setItem("offlineGuestId",JSON.stringify(data?.userId)) 
    if (status === 400) setFieldError(data.property, data.msg);
    else {
      setGuestExist(data)
      displayNotification("info","Guest logged In ,please book")
      //   setAuthToken(data);
      // window.location = "/dashboard";
    }
  };

  //   const {handleBlur, getFieldProps, values, setFieldValue} = useFormikContext();

  //   let {value, name} = getFieldProps("phoneNumber");

  //   const changePhoneNumber = number => {
  //     setFieldValue(name, number);
  //   };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phoneNumber: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, {setFieldError}) => handleSubmit(values, setFieldError)}
    >
      {({errors, touched, values, handleChange, handleBlur}) => (
        <Form>
          <div
            style={{marginLeft: "7.75vw", width: "85%"}}
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
                      <h2>Register Offline Guest</h2>
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <PropertyInputBox label="Name" type="text" name="name" />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <PropertyInputBox label="email" type="text" name="email" />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label className="block text-sm font-medium text-gray-700">
                            Phone Number
                          </label>
                          <PhoneInput
                            onBlur={handleBlur}
                            name="phoneNumber"
                            onChange={handleChange("phoneNumber")}
                            value={values["phoneNumber"]}
                            country={"in"}
                          />
                          <ErrorMessage name="phoneNumber" component={Error} />
                        </div>
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="btn-primary text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{transition: "all .15s ease"}}
                        >
                          Register
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

export default GuestForm;
