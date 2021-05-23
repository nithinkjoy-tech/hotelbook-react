import React, {useState} from "react";
import InputBox from "./../components/common/InputBox";
import {Formik, Form} from "formik";
import {guestSignin} from "../api/guest";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  userId: Yup.string().required().label("Email or Username"),
  password: Yup.string().required().label("Password"),
});

function SigninPage() {
  const [passwordType, setPasswordType] = useState("password");

  const handleSubmit = async (values, setFieldError) => {
    const {data, status} = await guestSignin(values);
    if (status === 400) setFieldError("userId", data);
    else console.log("login success");
  };

  return (
    <Formik
      initialValues={{
        userId: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, {setFieldError}) => handleSubmit(values, setFieldError)}
    >
      {({errors, touched, values, handleChange, handleBlur}) => (
        <Form>
          <main>
            <section className="absolute w-full h-full">
              <div
                className="absolute top-0 w-full h-full bg-gray-900"
                style={{
                  backgroundColor: "white",
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="container mx-auto px-6 h-full">
                <div className="flex content-center items-center justify-center h-full">
                  <div className="w-full lg:w-4/12 px-4">
                    <div
                      style={{backgroundColor: "white", width: "110%"}}
                      className="mt-10 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
                    >
                      <div className="rounded-t mb-0 px-6 py-6">
                        <div className="text-center mb-3">
                          <h6 className="text-gray-600 text-sm font-bold">Sign in with</h6>
                        </div>
                        <div className="btn-wrapper text-center">
                          <button
                            className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                            type="button"
                            style={{transition: "all .15s ease"}}
                          >
                            <img
                              alt="..."
                              className="w-5 mr-1"
                              src={require("../images/github.svg").default}
                            />
                            Github
                          </button>
                          <button
                            className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                            type="button"
                            style={{transition: "all .15s ease"}}
                          >
                            <img
                              alt="..."
                              className="w-5 mr-1"
                              src={require("../images/google.svg").default}
                            />
                            Google
                          </button>
                        </div>
                        <hr className="mt-6 border-b-1 border-gray-400" />
                      </div>
                      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div className="text-gray-500 text-center mb-3 font-bold">
                          <small>Or sign in with credentials</small>
                        </div>
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
                        <div className="relative w-full mb-3">
                          <InputBox
                            error={errors}
                            handleBlur={handleBlur}
                            touched={touched}
                            label="Password"
                            values={values}
                            type={passwordType}
                            name="password"
                            placeholder="Password"
                            handleChange={handleChange}
                            style={{transition: "all .15s ease"}}
                          />
                        </div>
                        <div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              id="customCheckLogin"
                              type="checkbox"
                              onChange={() =>
                                setPasswordType(passwordType === "text" ? "password" : "text")
                              }
                              className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                              style={{transition: "all .15s ease"}}
                            />
                            <span className="ml-2 text-sm font-semibold text-gray-700">
                              Show Password
                            </span>
                          </label>
                        </div>

                        <div className="text-center mt-6">
                          <button
                            className="btn-primary text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                            type="submit"
                            style={{transition: "all .15s ease"}}
                          >
                            Sign In
                          </button>
                        </div>
                        <div className="flex flex-wrap mt-6">
                          <div className="w-1/2">
                            <a
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                              className="text-blue-800"
                            >
                              <small>Forgot password?</small>
                            </a>
                          </div>
                          <div className="w-1/2 text-right">
                            <a
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                              className="text-blue-800"
                            >
                              <small>Create new account</small>
                            </a>
                          </div>
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

export default SigninPage;
