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
    <div>
      <span style={{fontSize: "22px"}}>Rooms</span>
      <button
        onClick={decrementRoom}
        className="btn btn-outline-secondary btn-md room-requirement-button"
        disabled={rooms <= 1}
      >
        <span className="room-requirement-symbol">-</span>
      </button>
      <span value={field.value} className="number-of-rooms">
        {rooms}
      </span>
      <button
        onClick={incrementRoom}
        className="btn btn-outline-primary btn-md room-requirement-button"
        disabled={rooms >= 9999}
      >
        <span className="room-requirement-symbol">+</span>
      </button>
    </div>
  );
}

export default RoomRequirement;
