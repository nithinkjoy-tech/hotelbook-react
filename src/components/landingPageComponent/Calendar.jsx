import React from "react";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, {utils} from "@hassanmojab/react-modern-calendar-datepicker";
import {useFormikContext} from "formik";
     
const Calendar = ({selectedDayRange, name,minimumDate}) => {
  const formik = useFormikContext();
  const field = formik.getFieldProps(name);


  const renderCustomInput = ({ref}) => (
    <input
      readOnly 
      ref={ref}
      value={
        selectedDayRange?.from?.day
          ? `${selectedDayRange?.from?.day}/${selectedDayRange?.from?.month}/${
              selectedDayRange?.from?.year
            }${selectedDayRange?.to?.day ? " - " + selectedDayRange?.to?.day + "/" : ""}${
              selectedDayRange?.to?.month ? selectedDayRange?.to?.month + "/" : ""
            }${selectedDayRange?.to?.year ? selectedDayRange?.to?.year +"📅": ""}`
          : "📅  Check-in - Check-out"
      }
      style={{
        cursor: "pointer",
      }}
      className="border-0 px-28 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
    />
  );

  return (
    <DatePicker
      renderInput={renderCustomInput}
      value={field.value}
      onChange={value => {
        formik.setFieldValue(name, value);
      }}
      inputPlaceholder="Select days"
      shouldHighlightWeekends
      minimumDate={minimumDate?utils().getToday():""}
    />
  );
};

export default Calendar;
