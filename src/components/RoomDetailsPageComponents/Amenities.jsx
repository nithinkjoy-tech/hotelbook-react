import React from 'react'
import facilities from "../../images/facilities.jpg";
import '../css/room.css'

const Amenities = (props) => {
    return ( 
    <section className="w3l-roomsingleblock1 py-5">
	<div className="container py-sm-4">
		<div className="row">
			<div className="col-lg-7 roomsingle">
                <h3 className="title-small">Amenities provided</h3>
                <ul className="w3l-right-book mt-4">
                 {props.amenities.map(amenity => (
                      <li><a hef="#url"><span className="fa fa-check" aria-hidden="true"></span>{amenity}</a></li>
                 ))}
                </ul>
			</div>
			<div className="col-lg-5 mt-lg-0 mt-4">
				<img src={facilities} alt="" className="img-fluid" />
			</div>
		</div>
	</div>
</section> );
}
 
export default Amenities;