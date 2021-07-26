import React from "react";
import "../../css/room.css";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
// import withAutoplay from "react-awesome-slider/dist/autoplay";
// const AutoplaySlider = withAutoplay(AwesomeSlider);

function PriceandImageSection({hotelDetails}) {
  // console.log(props,"pts")
  // hotelDetails.photos.map(photo=>photo.split(";base64,").pop())

  let images=hotelDetails.photos.map(photo=>({original:photo}))
  
  const style = {
    "--slider-transition-duration": "200ms",
    "--organic-arrow-thickness": "4px",
    "--organic-arrow-border-radius": "30px",
    "--organic-arrow-height": "23px",
    "--organic-arrow-color": "#d5d5d5",
    "--control-button-width": "5%",
    "--control-button-height": "25%",
    "--control-button-background": "transparent",
    "--control-bullet-color": "#858080",
    "--control-bullet-active-color": "#d5d5d5",
    "--loader-bar-color": "transparent",
  };

  return (
    <section className="room-single-block" style={{marginTop: "30px"}}>
      <div className="content-with-slider">
        <div className="container">
          <div className="content-photo-1 d-grid">          
            <ImageGallery items={images} />
            <div className="content-photo-right">
              <div className="content-photo-left text-center">
                <h4>erferg</h4>
                <h6>erger</h6>
                <div className="border-line">
                  <div className="bg">
                    <span className="price">Rs.100</span>
                    <p> Per night</p>
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
