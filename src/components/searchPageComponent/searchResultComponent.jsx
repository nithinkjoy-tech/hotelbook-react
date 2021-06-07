import React from "react";
import slide1 from "../../images/slide1.jpg";
import Rating from '../common/Rating'
//wazirx bluewallet  
function SearchResultComponent({hotels}) {    
  return (
    <div className="best-rooms w3l-blog py-5">
      <div className="container py-lg-5 py-sm-4">
        <div className="ban-content-inf row">
          {hotels.map(hotel => (
            <div key={hotel.hotelName} className="maghny-gd-1 col-lg-4 col-md-6 mt-md-5 mt-4">
              <div className="maghny-grid">
                <figure className="effect-lily">
                  <img className="img-fluid" style={{height:"260px"}} src={hotel.mainPhoto} alt="Room" />
                  <figcaption>
                    <div>
                      <h4 className="top-text">
                        {hotel.hotelName}
                        <Rating value={hotel?.rating} />
                      </h4>
                      <p>Book for Rs.{hotel?.startingRatePerDay} </p>
                    </div>
                  </figcaption>
                </figure>
                <div className="room-info"> 
                  <h3 className="room-title">
                    <a href="#url">{hotel?.hotelName}</a>
                  </h3>
                  <ul className="mb-3">
                    <li key={hotel?.guests}>
                      <span className="fa fa-users"></span>
                      {hotel.guests} Guests
                    </li>
                    <li key={hotel?.roomSize}>
                      <span className="fa fa-bed"></span> {hotel?.roomSize}sqft
                    </li>
                  </ul>
                  <p>{hotel?.description}</p>
                  <a href="booking.html" className="btn mt-sm-4 mt-3">
                    Book Now
                  </a>
                  <div className="room-info-bottom">
                    <ul className="room-amenities">
                      <li>
                        <a href="#url">
                          <span className="fa fa-bed" title="Beds"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#url">
                          <span className="fa fa-television" title="Television"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#url">
                          <span className="fa fa-bath" title="Private Bathroom"></span>
                        </a>
                      </li>
                    </ul>
                    <a href="#" className="btn view">
                      Full Info →
                    </a>
                  </div>
                </div>
              </div> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResultComponent;
