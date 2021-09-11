import React, {useEffect, useState} from "react";
import "../../css/Booked_Dashboard.css";
import {useHistory} from "react-router-dom";
import Rating from "./Rating";
import {confirmAlert} from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {getBookings, cancelBooking} from "../../api/guest";
import {displayNotification} from "./../../services/notificationService";

function Booked_Dashboard() {
  const history = useHistory();
  const [bookings, setBookings] = useState();

  const getAllBookings = async () => {
    const {data, status} = await getBookings({isStayCompleted: false});
    if (status !== 200) return displayNotification("error", data);
    // console.log(data,"dtt")
    setBookings(data);
  };

  const diffBetweenDays = (startingDate, endingDate) => {
    const diffInMs = new Date(endingDate) - new Date(startingDate);
    return diffInMs / (1000 * 60 * 60 * 24);
  };

  const handleDetails = (roomDetails, startingDate, endingDate) => {
    let result = diffBetweenDays(startingDate, endingDate);
    history.push("/bookedroomdetails", {data: roomDetails, days: result});
  };

  const cancelRoomBooking = async bookingId => {
    confirmAlert({
      title: "Cancel Booking",
      message: "Are you sure want to cancel this booking.",
      buttons: [
        {
          label: "Yes",
          onClick: async() => {
            await cancelBooking(bookingId);
            setBookings(bookings.filter(booking =>bookingId!==booking._id))
            displayNotification("info","Successfully cancelled your booking.")
          },
        },
        {
          label: "No",
          onClick: () => {
            return null;
          },
        },
      ],
    });
  };

  useEffect(() => {
    getAllBookings();
  }, []);

  if (!bookings)
    return (
      <h2 style={{marginTop: "150px", marginLeft: "20px"}}>
        You currently don't have any booking.
      </h2>
    );

  return (
    <React.Fragment>
      <div className="booked">
        <h3>Booked</h3>
        <h5>Caption about Booked</h5>
        {bookings.map(booking => (
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
                <span className="badge badge-warning">
                  <p style={{margin: 0, color: "#000"}}>Stay not completed</p>
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
                  {/* <h5 className="book-details-desc">Hotel Booking ID : 5897458631</h5> */}
                  <h5 className="pay">Booking ID: {booking?.hotelBookingId}</h5>
                  <h5 className="book-details-desc">Booked On : {booking?.bookedOn}</h5>
                  <h5 className="book-details-desc">Check In : {booking?.startingDayOfStay}</h5>
                  <h5 className="book-details-desc">Check Out : {booking?.endingDayOfStay}</h5>
                </div>
                <div className="book-details-left">
                <h5 className="pay">
                    Accomodtion Total: Rs.{" "}
                    {booking?.totalPrice *
                      (diffBetweenDays(booking.startingDayOfStay, booking.endingDayOfStay))}
                  </h5>
                  <h5 className="pay">Extra Cost: {booking?.additionalCharges}</h5>
                  <h5 className="pay">Total Beds: {booking?.totalBeds}</h5>
                  <h5 className="pay">Total Guests: {booking?.totalGuests}</h5>
                  <h5 className="pay">Total Rooms: {booking?.totalRooms}</h5>
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
                {booking?.status==="yettostay"?<button onClick={() => cancelRoomBooking(booking._id)} className="btn btn-danger">
                  Cancel Booking
                </button>:""}
              </div>
            </div>
          </article>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Booked_Dashboard;
