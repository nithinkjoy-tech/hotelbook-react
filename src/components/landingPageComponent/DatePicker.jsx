import React from "react";
import { Formik, Form, useFormikContext } from "formik";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import Calendar,{utils} from '@hassanmojab/react-modern-calendar-datepicker';

function DatePickerField({ name }) {
  const formik = useFormikContext();
  const field = formik.getFieldProps(name);
  
  return (
    <Calendar
    minimumDate={utils().getToday()}
    value={field.value}
    onChange={value => formik.setFieldValue(name, value)}
    />
    );
  } 
  
  function DatePicker() {
    return (
      <Formik
      initialValues={{
        date: { from: null, to: null }
      }}
      onSubmit={({date}) => {
        if(date.from&&!date.to){
          date.to=date.from
        }
        console.log(date)}}
      >
      <Form>
        <DatePickerField name="date" />
        <button type="submit">Submit</button>
      </Form> 
    </Formik>
  );
}

export default DatePicker;
