import React from "react";
import facilities from "../../images/facilities.jpg";
import "../../css/room.css";

const Amenities = ({mainPhoto}) => {
  return (
    <section className="w3l-roomsingleblock1 py-5">
      <div className="container py-sm-4">
        <div className="row">
          <div className="col-lg-7 roomsingle">
            <h3 className="title-small">Amenities provided</h3>
            <ul className="w3l-right-book mt-4">
              <li>abcd</li>
              <li>abcd</li>
              <li>abcd</li>
              <li>abcd</li>
              {/* {props.amenities.map(amenity => (
                      <li><a hef="#url"><span className="fa fa-check" aria-hidden="true"></span>{amenity}</a></li>
                 ))} */}
            </ul>
          </div>
          <div className="col-lg-5 mt-lg-0 mt-4">
            <img src={mainPhoto} alt="" className="img-fluid" style={{border: "1px solid #B42B86"}} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
