import React, {useState} from "react";
import ModalComponent from "../common/ModalComponent";
import RoomRequirement from "./RoomRequirement";
import Calendar from "./Calendar";
import * as Yup from "yup";
import {Formik, Form} from "formik";
import apiClient from "./../../api/client";

const dateValidator = Yup.object()
  .shape({
    day: Yup.number().min(1).max(31).required(),
    month: Yup.number().min(1).max(12).required(),
    year: Yup.number().min(2021).max(3000).required(),
  })
  .nullable();

const validationSchema = Yup.object().shape({
  placeForSearch: Yup.string().min(1).required(),
  selectedDayRange: Yup.object().shape({
    from: dateValidator,
    to: dateValidator,
  }),
  rooms: Yup.number().min(1).max(9999).required(),
});

function SearchComponent() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleSubmit = async values => {
    const {data} = await apiClient.get("/guest/book",values);
    console.log(data);
  }; 

  return (
    <Formik
      initialValues={{
        placeForSearch: "",
        selectedDayRange: {
          from: null,
          to: null,
        },
        rooms: 1,
      }}
      validationSchema={validationSchema}
      onSubmit={values => handleSubmit(values)}
    >
      {({errors, touched, values, handleChange}) => (
        <Form>
          <input name="placeForSearch" onChange={handleChange} />
          {errors.placeForSearch && touched.placeForSearch ? <p>{errors.placeForSearch}</p> : null}
          <Calendar
            name="selectedDayRange"
            onChange={handleChange}
            selectedDayRange={values.selectedDayRange}
          />
          <span className="room-option" onClick={() => setIsOpen(true)}>
            {`${values.rooms} room` + (values.rooms === 1 ? "" : "s")}
          </span>
          <ModalComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
            <RoomRequirement name="rooms" rooms={values.rooms} />
          </ModalComponent>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default SearchComponent;
 