import React from "react";
import RoomRequirement from "./RoomRequirement";
import Calendar from "./Calendar";
import * as Yup from "yup";
import {Formik, Form} from "formik";
import apiClient from "./../../api/client";
import InputBox from "./../common/InputBox";


const dateValidator = Yup.object()
  .shape({
    day: Yup.number().min(1).max(31).required(),
    month: Yup.number().min(1).max(12).required(),
    year: Yup.number().min(2021).max(3000).required(),
  })
  .nullable();

const validationSchema = Yup.object().shape({
  placeForSearch: Yup.string().min(1).required("Please enter where you want to go"),
  selectedDayRange: Yup.object().shape({
    from: dateValidator,
    to: dateValidator,
  }),
  rooms: Yup.number().min(1).max(9999).required(),
});

function SearchComponent() {

  const handleSubmit = async values => {
    console.log(values,"bfore")
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
        <Form>
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
                          error={errors}
                          touched={touched}
                          handleChange={handleChange}
                        />
                        <div className="form-input col-md-2 col-sm-6 mt-3 ">                        
                          <Calendar
                            name="selectedDayRange"
                            onChange={handleChange}
                            selectedDayRange={values.selectedDayRange}
                          />
                        </div>
                        <div className="form-input col-md-3 col-sm-6 mt-3">
                          <RoomRequirement name="rooms" rooms={values.rooms} />
                        </div>

                        <div className="bottom-btn col-md-2 col-sm-6 mt-3">
                          <button type="submit" className="btn btn-style btn-primary py-3 w-100 px-2">
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
        </Form>
      )}
    </Formik>
  );
}

export default SearchComponent;
