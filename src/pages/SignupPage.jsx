import React, {useState} from "react";
import InputBox from "./../components/common/InputBox";
import {Formik, Form} from "formik";
import {guestSignin} from "../api/guest";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email or Username is required").label("Email or Username"),
  username: Yup.string().required("Email or Username is required").label("Email or Username"),
  password: Yup.string().required("Password is required").label("Password"),
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
                      </div>
                      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div className="relative w-full mb-3">
                          <InputBox
                            error={errors}
                            handleBlur={handleBlur}
                            touched={touched}
                            label="Email"
                            values={values}
                            type="text"
                            name="email"
                            placeholder="Email"
                            handleChange={handleChange}
                            style={{transition: "all .15s ease"}}
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <InputBox
                            error={errors}
                            handleBlur={handleBlur}
                            touched={touched}
                            label="Username"
                            values={values}
                            type="text"
                            name="username"
                            placeholder="Username"
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
                        <div className="relative w-full mb-3">
                          <InputBox
                            error={errors}
                            handleBlur={handleBlur}
                            touched={touched}
                            label="Confirm Password"
                            values={values}
                            type={passwordType}
                            name="confirmpassword"
                            placeholder="Confirm Password"
                            handleChange={handleChange}
                            style={{transition: "all .15s ease"}}
                          />
                        </div>
                        <div className="form-check" >
                          <input
                          style={{cursor:"pointer"}}
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            onChange={() =>
                              setPasswordType(passwordType === "text" ? "password" : "text")
                            }
                            id="flexCheckDefault"
                          />
                          <label style={{cursor:"pointer"}} className="form-check-label" for="flexCheckDefault">
                            Show Password
                          </label>
                        </div>
                        <div className="text-center mt-6">
                          <button
                            className="btn-primary text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                            type="submit"
                            style={{transition: "all .15s ease"}}
                          >
                            Sign Up
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
