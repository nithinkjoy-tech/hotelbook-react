import React from 'react'
import '../../css/room.css'

function PriceSection({hotelDetails}) {
    return (
        <section class="room-single-block">
        <div class="content-with-slider">
            <div class="container">
                <div class="content-photo-1 d-grid">
                  
                    <div class="content-photo-right">
                        <div class="csslider infinity" id="slider1">
                            <ul class="banner_slide_bg">
                                <li>
                                    <img class="img" src={require('../images/slide1.jpg')} alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="content-photo-left text-center">
                      <h4>{hotelDetails.name}</h4>
                      <h6>{hotelDetails.type}</h6>
                      <div class="border-line">
                          <div class="bg">
                              <span class="price">Rs.{hotelDetails.rent}</span>
                              <p> Per night</p>
                          </div>
                          <div class="book-btn px-2">
                              <a href="booking.html" class="btn btn-style btn-secondary mt-3">Book Now</a>
                          </div>
                      </div>
                      <ul class="room-amenities">
                          {/* <li><a href="#url"><span class="fa fa-beer"></span> MiniBar</a></li> */}
                          <li><a href="#url"><span class="fas fa-users"></span> {hotelDetails.guests} Guests</a></li>
                          {/* <li><a href="#url"><span class="fa fa-bed"></span> Double Bed</a></li> */}
                      </ul>
                      <a href="#" class="back"> <span class="fas fa-long-arrow-left"></span> Back to all rooms</a>
                  </div>
    
                </div>
            </div>
        </div>
    </section>
   
    )
}

export default PriceSection

