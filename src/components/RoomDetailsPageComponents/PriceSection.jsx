import React from 'react'
import '../../css/room.css'

function PriceSection({hotelDetails}) {
    return (
        <section className="room-single-block">
        <div className="content-with-slider">
            <div className="container">
                <div className="content-photo-1 d-grid">
                  
                    <div className="content-photo-right">
                        <div className="csslider infinity" id="slider1">
                            <ul className="banner_slide_bg">
                                <li>
                                    <img className="img" src={require('../images/slide1.jpg')} alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
    
                    <div className="content-photo-left text-center">
                      <h4>{hotelDetails.name}</h4>
                      <h6>{hotelDetails.type}</h6>
                      <div className="border-line">
                          <div className="bg">
                              <span className="price">Rs.{hotelDetails.rent}</span>
                              <p> Per night</p>
                          </div>
                          <div className="book-btn px-2">
                              <a href="booking.html" className="btn btn-style btn-secondary mt-3">Book Now</a>
                          </div>
                      </div>
                      <ul className="room-amenities">
                          {/* <li><a href="#url"><span className="fa fa-beer"></span> MiniBar</a></li> */}
                          <li><a href="#url"><span className="fas fa-users"></span> {hotelDetails.guests} Guests</a></li>
                          {/* <li><a href="#url"><span className="fa fa-bed"></span> Double Bed</a></li> */}
                      </ul>
                      <a href="#" className="back"> <span className="fas fa-long-arrow-left"></span> Back to all rooms</a>
                  </div>
    
                </div>
            </div>
        </div>
    </section>
   
    )
}

export default PriceSection

