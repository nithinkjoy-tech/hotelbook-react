import React from "react";
import "../../css/room.css";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import _ from "lodash"

function PriceandImageSection({hotelDetails}) {

  let images=hotelDetails.photos.map(photo=>({original:photo}))

  console.log('hotel details',hotelDetails)

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
                    <a onClick={()=>window.scrollTo(0, 720)} className="btn btn-secondary mt-3">
                      <span style={{color: 'black'}} >Book Now</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3">
                <h3 className="title-small"><span className="fa fa-map-marker" style={{color:"red"}} /> Address</h3>
                <p>{hotelDetails.address}</p>
                <p>Contact: {hotelDetails.phoneNumber}</p>
                <p>Pincode: {hotelDetails.postalCode}</p>
                <p>{hotelDetails.description}</p>
                <p>{_.range(hotelDetails.starRating).map(range=><span>⭐</span>)}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceandImageSection;
