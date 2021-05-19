import React from "react";

function InputBox({label,type,placeholder,name}) {
  return (
    <div className="form-input col-md-4 col-sm-6 mt-3">
      <label>{label}</label>
      <input
        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputBox;
