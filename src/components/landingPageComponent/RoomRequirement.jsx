import React from "react";
import {useFormikContext} from "formik";

function RoomRequirement({name, rooms}) {
  const formik = useFormikContext();
  const field = formik.getFieldProps(name);

  const decrementRoom = () => {
    if (rooms <= 1) return;
    formik.setFieldValue(name, rooms - 1);
  };

  const incrementRoom = () => {
    if (rooms >= 9999) return;
    formik.setFieldValue(name, rooms + 1);
  };

  return (
    <div className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" >
      <span style={{fontSize: "15px"}}>Rooms</span>
      <button
        onClick={decrementRoom}
        className="btn btn-outline-secondary btn-sm room-requirement-button"
        disabled={rooms <= 1}
        type="button"
      >
        <span className="room-requirement-symbol">-</span>
      </button>
      <span value={field.value} className="number-of-rooms">
        {rooms}
      </span>
      <button
        onClick={incrementRoom}
        className="btn btn-outline-primary btn-sm room-requirement-button"
        disabled={rooms >= 9999}
        type="button"
      >
        <span className="room-requirement-symbol">+</span>
      </button>
    </div>
  );
}

export default RoomRequirement;
