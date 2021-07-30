import React from "react";
import "../../css/room.css";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

function PriceandImageSection({hotelDetails}) {

  let images=hotelDetails.photos.map(photo=>({original:photo}))

  return (
    <section className="room-single-block" style={{marginTop: "30px"}}>
      <div className="content-with-slider">
        <div className="container">
          <div className="content-photo-1 d-grid">          
            <ImageGallery items={images} />
            <div className="content-photo-right">
              <div className="content-photo-left text-center">
                <h4>{hotelDetails.hotelName}</h4>
                <div className="border-line">
                  <div className="bg">
                    <span className="price">Rs. {hotelDetails.startingRatePerDay}</span>
                    <p> Per night starting rate</p>
                  </div>
                  <div className="book-btn px-2">
                    <a href="booking.html" className="btn btn-style btn-secondary mt-3">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceandImageSection;
