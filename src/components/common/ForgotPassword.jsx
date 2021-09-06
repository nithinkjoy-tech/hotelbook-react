import React, {useState} from "react";
import InputBox from "./InputBox";
import {Formik, Form} from "formik";
import {forgotGuestPassword} from "../../api/guest";
import {renterSignin} from "../../api/renter";
import {restaurantSignin} from "../../api/restaurant";
import {adminSignin} from "../../api/admin";
import * as Yup from "yup";
import {setAuthToken} from "../../services/authService";

const validationSchema = Yup.object().shape({
  userId: Yup.string().required("Email or Username is required").label("Email or Username"),
});

function ForgotPassword({location}) {
  const [passwordType, setPasswordType] = useState("password");

  let bgcolor = "";
  let traycolor = "";
  if (location.pathname === "/signin") {
    traycolor = "";
    bgcolor = "";
  }
  if (location.pathname === "/renter/signin") {
    traycolor = "red";
    bgcolor = "red";
  }
  if (location.pathname === "/admin/signin") {
    traycolor = "blue";
    bgcolor = "blue";
  }

  const handleSubmit = async (values, setFieldError) => {

    if (location.pathname === "/forgotpassword") {
      const {data, status} = await forgotGuestPassword(values);
      if (status === 400) setFieldError("userId", data);
      else {
        console.log(location)
        setAuthToken(data);
        // window.location = "/dashboard";
      }
    }
 
    if (location.pathname === "/reception/signin") {
      const {data, status} = await renterSignin(values);
      if (status === 400) setFieldError("userId", data);
      else {
        setAuthToken(data);
        window.location = "/reception/dashboard";
      }
    }

    if (location.pathname === "/restaurant/signin") {
      const {data, status} = await restaurantSignin(values);
      if (status === 400) setFieldError("userId", data);
      else {
        setAuthToken(data);
        window.location = "/restaurant/dashboard";
      }
    }
    
    if (location.pathname === "/admin/signin") {
      const {data, status} = await adminSignin(values);
      if (status === 400) setFieldError("userId", data);
      else {
        setAuthToken(data);
        window.location = "/admin/dashboard";
      }
    }
  };

  return (
    <Formik
      initialValues={{
        userId: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, {setFieldError}) => handleSubmit(values, setFieldError)}
    >
      {({errors, touched, values, handleChange, handleBlur}) => (
        <Form>
          <main style={{backgroundColor: bgcolor}}>
            <section className="w-full h-full">
              <div
                className="top-0 w-full h-full bg-gray-900"
                style={{
                  // backgroundColor: "red",
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="container mx-auto px-6 h-full">
                <div className="flex content-center items-center justify-center h-full">
                  <div className="w-full lg:w-4/12 px-4">
                    <div
                      style={{backgroundColor: traycolor, width: "110%"}}
                      className="mt-24 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
                    >
                      <div style={{marginTop: "20px"}} className="rounded-t mb-0 px-6 py-6">
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                          <div className="relative w-full mb-3">
                            <InputBox
                              error={errors}
                              handleBlur={handleBlur}
                              touched={touched}
                              label="Email or Username"
                              values={values}
                              type="text"
                              name="userId"
                              placeholder="Email or Username"
                              handleChange={handleChange}
                              style={{transition: "all .15s ease"}}
                            />
                          </div>
                          
                          <div className="text-center mt-6">
                            <button
                              className="btn-primary text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                              type="submit"
                              style={{transition: "all .15s ease"}}
                            >
                              Reset Password
                            </button>
                          </div>
                          {location.pathname ==="/signin"&&<div className="flex flex-wrap mt-6">
                            <div className="w-1/2">
                              <a
                                href="/resetpassword"
                                onClick={e => e.preventDefault()}
                                className="text-blue-800"
                              >
                                <small>Forgot password?</small>
                              </a>
                            </div>
                            <div className="w-1/2 text-right">
                              <a
                                href="/signup"
                                onClick={e => {
                                  e.preventDefault();
                                }}
                                className="text-blue-800"
                              >
                                <small>Create new account</small>
                              </a>
                            </div>
                          </div>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
          </main>
        </Form>
      )}
    </Formik>
  );
}

export default ForgotPassword;
