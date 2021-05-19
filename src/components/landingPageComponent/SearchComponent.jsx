import React, {useState} from "react";
import ModalComponent from "../common/ModalComponent";
import RoomRequirement from "./RoomRequirement";
import Calendar from "./Calendar";
import * as Yup from "yup";
import {Formik, Form} from "formik";
import apiClient from "./../../api/client";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputBox from "./../common/InputBox";
import { CalendarTodayOutlined } from '@material-ui/icons';

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
    const {data} = await apiClient.get("/guest/book", values);
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
        // <Form>
 
        <section className="w3l-availability-form" id="booking">
          <div className="w3l-availability-form-main py-5">
            <div className="container pt-lg-3 pb-lg-5">
              <div className="forms-top">
                <div className="form-right">
                  <div className="form-inner-cont">
                    <h3 className="title-small">Check Availability</h3>
                    <div className="row book-form">
                      <InputBox
                        label={null}
                        placeholder="Where are you going?"
                        name="placeForSearch"
                      />  
                      <div className="form-input col-md-4 col-sm-6 mt-3">
                      <Calendar
                        name="selectedDayRange"
                        onChange={handleChange}
                        selectedDayRange={values.selectedDayRange}
                      />
                      </div>
                      <div className="bottom-btn col-md-4 col-sm-6 mt-3">
                        <button className="btn btn-style btn-primary py-3 w-100 px-2">
                          Check Availability
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        /* <input
            style={{transition: "all .15s ease"}}
            classNameName="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            name="placeForSearch"
            onChange={handleChange}
          />
          {errors.placeForSearch && touched.placeForSearch ? <p>{errors.placeForSearch}</p> : null}
          <Calendar
            name="selectedDayRange"
            onChange={handleChange}
            selectedDayRange={values.selectedDayRange}
          />
          <span classNameName="room-option" onClick={() => setIsOpen(true)}>
            {`${values.rooms} room` + (values.rooms === 1 ? "" : "s")}
          </span>
          <ModalComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
            <RoomRequirement name="rooms" rooms={values.rooms} />
          </ModalComponent>
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button> */
        /* </Form> */
      )}
    </Formik>
  );
}

export default SearchComponent;
