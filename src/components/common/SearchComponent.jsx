import React,{useState,useEffect} from "react";
import {useHistory} from "react-router-dom";
import RoomRequirement from "../landingPageComponent/RoomRequirement";
import Calendar from "../landingPageComponent/Calendar";
import * as Yup from "yup";
import {Formik, Form} from "formik";
import InputBox from "./InputBox";
import {getHotelsName,getHotelInfo,getHotels} from "../../api/guest";
import PropertySelectBox from './PropertySelectBox';
import _ from "lodash";

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
  // rooms: Yup.number().min(1).max(9999).required(),
});

function SearchComponent({initialValues}) {
  // console.log(pageNumber,pageSize,"pnps")
  const history = useHistory();

  const [options,setOptions]=useState()

  const getHotels=async ()=>{
    const {data}=await getHotelsName()
    console.log(data,"dt")
    setOptions(data)
  }

  useEffect(() => {
    getHotels()
  },[])

  const handleSubmit = async values => {
    console.log(values,"vlds")
    localStorage.setItem("selectedDays",JSON.stringify(values.selectedDayRange))
    values["pageNumber"]=0
    values["pageSize"]=9
    const {data} = await getHotelInfo(values);
    console.log(data,"dt")
    let {hotels,numberOfDays}=data
    localStorage.setItem("numberOfDays",numberOfDays)
    let forcePage=0
    window.location=`/hoteldetails/${data.hotels._id}`
    // history.push("/search", {data:hotels, hotelsCount,values,forcePage});
  };

  if(!options) return null

  return (
    <Formik
      initialValues={
        initialValues || {
          placeForSearch: "",
          selectedDayRange: {
            from: null,
            to: null,
          },
          // rooms: 1,
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
                          <PropertySelectBox
                            label={null}
                            name="placeForSearch"
                            onChange={handleChange}
                            options={_.flattenDeep([null,options.map(hotel=>hotel.city)])}
                          />
                        </div>
                        <div className="form-input col-md-4 col-sm-6 mt-3 ">
                          <Calendar
                            name="selectedDayRange"
                            onChange={handleChange}
                            selectedDayRange={values.selectedDayRange}
                            minimumDate={true}
                          />
                        </div>
                        {/* <div className="form-input col-md-3 col-sm-6 mt-3">
                          <RoomRequirement name="rooms" rooms={values.rooms} />
                        </div> */}

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
