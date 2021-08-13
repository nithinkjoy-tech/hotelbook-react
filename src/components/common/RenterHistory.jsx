import React, {useState, useEffect} from "react";
import "../../css/History.css";
import ReactStars from "react-rating-stars-component";
import ModalComponent from "./ModalComponent";
import {useFormikContext, Formik, Form} from "formik";
import * as Yup from "yup";
import InputBox from "./InputBox";
import "../../css/Booked_Dashboard.css";
import {useHistory} from "react-router-dom";
import Rating from "./Rating";
import {getBookings} from "../../api/renter";
import {displayNotification} from "../../services/notificationService";
import PropertySelectBox from './PropertySelectBox';
import Calendar from './../landingPageComponent/Calendar';

const dateValidator = Yup.object()
  .shape({
    day: Yup.number().min(1).max(31).required(),
    month: Yup.number().min(1).max(12).required(),
    year: Yup.number().min(2021).max(3000).required(),
  })
  .nullable();

const validationSchema = Yup.object().shape({
  selectedOption: Yup.string().required().oneOf(["Booked","Checkin","Checkout"]),
  selectedDayRange: Yup.object().shape({
    from: dateValidator,
    to: dateValidator,
  }),
});

function RenterHistory() {
  const history = useHistory();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [bookings, setBookings] = useState();
  const [hotelId, setHotelId] = useState();
  const [ratingValue, setRatingValue] = useState();
  const [reviewValue, setReviewValue] = useState();

  // const getAllBookings = async () => {
  //   const {data, status} = await getBookings({isStayCompleted: true});
  //   if (status !== 200) return displayNotification("error", data);
  //   // console.log(data,"dtt")
  //   setBookings(data);
  // };

  // const onReviewClick = (hotelId) => {
  //   setIsOpen(true);
  //   setHotelId(hotelId);
    
  // };

  // const setValues=(getFieldProps)=>{
  //   const {value:ratingValue}=getFieldProps("rating")
  // if(ratingValue) setRatingValue(ratingValue)
  // const {value:reviewValue}=getFieldProps("review")
  // if(reviewValue) setReviewValue(reviewValue)
  // }

  // const diffBetweenDays = (startingDate, endingDate) => {
  //   const diffInMs = new Date(endingDate) - new Date(startingDate);
  //   return diffInMs / (1000 * 60 * 60 * 24);
  // };

  // const handleDetails = (roomDetails, startingDate, endingDate) => {
  //   let result = diffBetweenDays(startingDate, endingDate);
  //   history.push("/bookedroomdetails", {data: roomDetails, days: result});
  // };

  // useEffect(() => {
  //   getAllBookings();
  // }, []);

  const handleSubmit = async (values,resetForm) => {
    console.log(values, "val");
    // const {data,status}=await addReview(hotelId, values)
    // if(status !== 200) return displayNotification("error",data)
    // displayNotification("success","Review Posted Successfully")
    // resetForm({values: ""});
  };

  // if (!bookings) return null;

  return (
    <div className="history">
      <h3>History</h3>
      <h5>Caption about History</h5>

      <Formik
      initialValues={
        {
          selectedOption: "",
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
          <section className="w3l-availability-form" style={{marginTop:0}} id="booking">
            <div className="w3l-availability-form-main">
              <div className="container">
                <div className="forms-top">
                  <div className="form-right">
                    <div className="mt-6 form-inner-cont">
                      {/* <h3 className="title-small">Check Availability</h3> */}
                      <div className="row book-form">
                        <div className="form-input col-md-4 col-sm-6 mt-3">
                        <div className="col-span-6 sm:col-span-3">
                    <PropertySelectBox
                      label=""
                      name="starRating"
                      options={["All","Booked","Checkin","Checkout"]}
                    />
                  </div>
                        </div>
                        <div className="form-input col-md-4 col-sm-6 mt-3 ">
                          <Calendar
                            name="selectedDayRange"
                            onChange={handleChange}
                            selectedDayRange={values.selectedDayRange}
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






      {/* {bookings.map(booking => (
        <article className="book">
          <div className="book-box">
            <img src={booking?.mainPhoto} width="1500" height="1368" alt="" />
          </div>
          <div className="book-content">
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <h1
                onClick={() => (window.location = `/hoteldetails/${booking.hotelId}?nodate=true`)}
                className="book-title"
              >
                <a>{booking?.hotelName}</a>{" "}
              </h1>
              <span className="badge badge-success">
                <p style={{margin: 0, color: "#000"}}>Stay completed</p>
              </span>
            </div>

            <p className="book-metadata">
              <span className="book-rating">
                <Rating value={booking?.rating} className="rating" />
              </span>
            </p>
            <p className="book-desc">
              <h5 className="book-desc-more">Address :{booking.address} </h5>
            </p>
            <div className="book-details">
              <div className="book-details-right">
                <h5 className="pay">
                  Total: Rs.{" "}
                  {booking?.totalPrice *
                    (diffBetweenDays(booking.startingDayOfStay, booking.endingDayOfStay) + 1)}
                </h5>
                <h5 className="pay">Total Beds: {booking?.totalBeds}</h5>
                <h5 className="pay">Total Guests: {booking?.totalGuests}</h5>
                <h5 className="pay">Total Rooms: {booking?.totalRooms}</h5>
              </div>
              <div className="book-details-left">
                <h5 className="book-details-desc">Booked On : {booking?.bookedOn}</h5>
                <h5 className="book-details-desc">Check In : {booking?.startingDayOfStay}</h5>
                <h5 className="book-details-desc">Check Out : {booking?.endingDayOfStay}</h5>
              </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <button
                onClick={() =>
                  handleDetails(
                    booking.roomDetails,
                    booking.startingDayOfStay,
                    booking.endingDayOfStay
                  )
                }
                className="btn btn-primary"
              >
                Get Details
              </button>
              <button onClick={() => onReviewClick(booking.hotelId)} className="btn btn-secondary">
                {booking?.reviewId ? "Edit Review" : "Add Review"}
              </button>
            </div>
          </div>
        </article>
      ))} */}
      {/* <Formik
        initialValues={{
          rating: "",
          review: "",
        }}
        validationSchema={reviewSchema}
        onSubmit={(values, { resetForm}) =>
          handleSubmit(values,resetForm)
        }
      >
        {({handleSubmit, setFieldValue, getFieldProps}) => (
          <ModalComponent
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            handleSubmit={handleSubmit}
          >
            <Form>
              <div className="relative w-full mb-3">
                <div style={{display: "flex"}}>
                  <h2 style={{marginRight: "60px", paddingTop: "7px"}}>Review</h2>
                  <ReactStars
                    count={5}
                    onChange={rating => setFieldValue("rating", rating)}
                    size={35}
                    isHalf={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    half={setValues(getFieldProps)}
                    value={Number(ratingValue)||0}
                  />
                  <div></div>
                </div>
                ,
                <textarea
                  style={{width: "40rem", height: "200px"}}
                  name="rating"
                  onChange={e => setFieldValue("review", e.target.value)}
                  row="5"
                  col="90"
                  value={reviewValue}
                ></textarea>
              </div>
            </Form>
          </ModalComponent>
        )}
      </Formik> */}
    </div>
  );
}

export default RenterHistory;
