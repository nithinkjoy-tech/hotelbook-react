import React from "react";
import {ErrorMessage} from "formik";
import Error from "./../forms/Error";

function InputBox({label, type, placeholder, handleChange, handleBlur, values, name}) {
  return (
    <div>
      {label&&<label
        className="block uppercase text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        {label}
      </label>}
      <input
        onBlur={handleBlur}
        className="border-1 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={values[name]}
        autoComplete="off"
      />
      <ErrorMessage name={name} component={Error} />
    </div>
  );
}

export default InputBox;
