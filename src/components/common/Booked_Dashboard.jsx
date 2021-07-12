import React from "react";
import "../../css/Booked_Dashboard.css";
import Rating from "./Rating";
import Img from "../../images/room1.jpg";
function Booked_Dashboard() {
  return (
    <div className="booked">
      <h3>Booked</h3>
      <h5>Caption about Booked</h5>
      <article className="book">
        <div className="book-box">
          <img src={Img} width="1500" height="1368" alt="" />
        </div>
        <div className="book-content">
          <h1 className="book-title">Akash Hotel</h1>

          <p className="book-metadata">
            <span className="book-rating">
              <Rating value="3.5" className="rating" />
            </span>
          </p>
          <p className="book-desc">
            Address section
            <h5 className="pay">Pay Rs. 5000</h5>
          </p>
          <div className="book-details">
            <h5>Hotel Booking ID : 5897458631</h5>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Booked_Dashboard;
