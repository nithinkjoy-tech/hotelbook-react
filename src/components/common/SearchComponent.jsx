import React from "react";
import {useHistory} from "react-router-dom";
import RoomRequirement from "../landingPageComponent/RoomRequirement";
import Calendar from "../landingPageComponent/Calendar";
import * as Yup from "yup";
import {Formik, Form} from "formik";
import InputBox from "./InputBox";
import {getHotels} from "../../api/guest";

const dateValidator = Yup.object()
  .shape({
    day: Yup.number().min(1).max(31).required(),
    month: Yup.number().min(1).max(12).required(),
    year: Yup.number().min(2021).max(3000).required(),
  })
  .nullable();

const validationSchema = Yup.object().shape({
  placeForSearch: Yup.string().min(1).required("Please enter your destination"),
  selectedDayRange: Yup.object().shape({
    from: dateValidator,
    to: dateValidator,
  }),
  rooms: Yup.number().min(1).max(9999).required(),
});

function SearchComponent({initialValues}) {
  // console.log(pageNumber,pageSize,"pnps")
  const history = useHistory();

  const handleSubmit = async values => {
    values["pageNumber"]=0
    values["pageSize"]=9
    const {data} = await getHotels(values);
    let {hotelsCount,hotels}=data
    let forcePage=0
    history.push("/search", {data:hotels, hotelsCount,values,forcePage});
  };

  return (
    <Formik
      initialValues={
        initialValues || {
          placeForSearch: "",
          selectedDayRange: {
            from: null,
            to: null,
          },
          rooms: 1,
        }
      }
      validationSchema={validationSchema}
      onSubmit={values => handleSubmit(values)}
    >
      {({errors, touched, values, handleChange, handleBlur}) => (
        <Form>
          <section className="w3l-availability-form" id="booking">
            <div className="w3l-availability-form-main py-5">
              <div className="container pt-lg-3 pb-lg-5">
                <div className="forms-top">
                  <div className="form-right">
                    <div className="mt-6 form-inner-cont">
                      <h3 className="title-small">Check Availability</h3>
                      <div className="row book-form">
                        <div className="form-input col-md-4 col-sm-6 mt-3">
                          <InputBox
                            handleBlur={handleBlur}
                            label={null}
                            placeholder="Where are you going?"
                            name="placeForSearch"
                            error={errors}
                            touched={touched}
                            handleChange={handleChange}
                            values={values}
                          />
                        </div>
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
                          <button
                            type="submit"
                            className="btn btn-style btn-primary py-3 w-100 px-2"
                          >
                            Search
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
