import React, {useEffect, useState, useMemo} from "react";
import "../../css/ArrivalList.css";
import Sidebar from "./Sidebar";
import {getCompletedStays,downloadInvoice} from "../../api/renter";
import DataTable, {createTheme} from "react-data-table-component";
import InputBox from "./../common/InputBox";
import _ from "lodash";
import Calendar from "./../landingPageComponent/Calendar";
import * as Yup from "yup";
import {Formik,Form} from "formik"
import Invoice from './../common/Invoice';
import { displayNotification } from './../../services/notificationService';

const dateValidator = Yup.object()
    .shape({
      day: Yup.number().min(1).max(31).required(),
      month: Yup.number().min(1).max(12).required(),
      year: Yup.number().min(2021).max(3000).required(),
    })
    .nullable();

  const validationSchema = Yup.object().shape({
    selectedDayRange: Yup.object().shape({
      from: dateValidator,
      to: dateValidator,
    }),
    // rooms: Yup.number().min(1).max(9999).required(),
  });

function CompletedStays() {

  const handleDownloadInvoice=async(bookingId)=>{
    console.log(bookingId,"download")
    const {data,status}=await downloadInvoice(bookingId)
    if(status !== 200) return displayNotification("error", data||"Something unexpected happened");
    generateInvoice(data)
  }

  function generateInvoice(details) {

let roomDetails = [{roomNumber:56,roomBoy:'ravi',roomType:'king'}]
    Invoice(
      details?.name,
      details?.address,
      details?.phoneNumber,
      details?.inputFields,
      details?.earlyEndingDayOfStay||details?.endingDayOfStay,
      details?.price,
      details?.restaurantBillAmount,
      details?.accomodationTotal,
      details?.roomDetails||roomDetails,
      details?.extraBedTotal,
      details?.lateStartingDayOfStay||details?.startingDayOfStay
    );
  }

  const [booking, setBooking] = useState();
  const [fullBooking, setFullBooking] = useState();

  const columns = useMemo(
    () => [
      {
        name: "Booking ID",
        selector: "hotelBookingId",
        sortable: true,
        grow:0
      },
      {
        name: "Name",
        selector: "name",
        sortable: true,
      },
      {
        name: "Phone Number",
        selector: "phoneNumber",
        grow:1
      },
      {
        name: "Booked Date",
        selector: "bookedOn",
        sortable: true,
      },
      {
        name: "Check In",
        selector: booking?.lateStartingDayOfStay?"lateStartingDayOfStay":"startingDayOfStay",
        sortable: true,
        grow:0
      },
      {
        name: "Check Out",
        selector: booking?.earlyEndingDayOfStay?"earlyEndingDayOfStay":"endingDayOfStay",
        sortable: true,
        grow:0
      },
      {
        name: "Email",
        selector: "email",
      },
      {
        name: "Booking Mode",
        sortable: true,
        selector: "bookingMode",
        grow:0,
        cell: row =>
          row.bookingMode === "online" ? (
            <span className="badge badge-success">Online</span>
          ) : (
            <span className="badge badge-secondary">Offline</span>
          ),
      },
      {
        name: "Download Invoice",
        cell: row =><button onClick={()=>handleDownloadInvoice(row._id)} className="btn btn-secondary">Download</button>
      },
    ],
    []
  );

  

  const handleChange = ({target}) => {
    let booking = fullBooking;
    setBooking(
      booking.filter(book => _.includes(book.name.toLowerCase(), target.value.toLowerCase()))
    );
  };

  const handleSubmit=async(values)=>{
    const {data, status} = await getCompletedStays(values);
    console.log(data)
    if (status !== 200) {
        setBooking([]);
        setFullBooking([]);
        return};
    setBooking(data);
    setFullBooking([...data]);
  }

  const getAllBookings = async () => {
    const {data, status} = await getCompletedStays();
    if (status !== 200) return;
    setBooking(data);
    setFullBooking([...data]);
  };

  useEffect(() => {
    getAllBookings();
  }, []);

  return (
    <React.Fragment>
      <Formik
      initialValues={{
        selectedDayRange: {
          from: null,
          to: null,
        },
        // rooms: 1,
      }}
      validationSchema={validationSchema}
      onSubmit={values => handleSubmit(values)}
    >
      {({errors, touched, values, handleChange, handleBlur}) => (
        <Form>
          <section className="w3l-availability-form" id="booking" style={{marginLeft: "400px"}}>
            {/* <div className="w3l-availability-form-main py-5">
              <div className="container pt-lg-3 pb-lg-5">
                <div className="forms-top">
                  <div className="form-right">
                    <div className="mt-6 form-inner-cont"> */}
                      <h3 className="title-small">Search Completed Stays by Date</h3>
                      <div className="row book-form">
                        <div className="form-input col-md-4 col-sm-6 mt-3 ">
                          <Calendar
                            name="selectedDayRange"
                            onChange={handleChange}
                            selectedDayRange={values.selectedDayRange}
                            minimumDate={false}
                            placeholder="Select date 📅"
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
                      {/* </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </section>
        </Form>
      )}
    </Formik>
      <div className="dashboard-items">
        <div className="arrivallist" style={{margin: 0}}>
          <>
            <DataTable
              title="Completed Stays List"
              pagination
              subHeader
              noDataComponent="No Completed Stays."
              subHeaderComponent={[
                <input
                  onChange={e => handleChange(e)}
                  placeholder="Search by name"
                  className="border-1 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  type="text"
                ></input>,
              ]}
              columns={columns}
              data={booking}
            />
          </>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CompletedStays;
