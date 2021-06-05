import React from 'react'
import facilities from "../../images/facilities.jpg";
import '../css/room.css'

const Amenities = (props) => {
    return ( 
    <section class="w3l-roomsingleblock1 py-5">
	<div class="container py-sm-4">
		<div class="row">
			<div class="col-lg-7 roomsingle">
                <h3 class="title-small">Amenities provided</h3>
                <ul class="w3l-right-book mt-4">
                 {props.amenities.map(amenity => (
                      <li><a hef="#url"><span class="fa fa-check" aria-hidden="true"></span>{amenity}</a></li>
                 ))}
                </ul>
			</div>
			<div class="col-lg-5 mt-lg-0 mt-4">
				<img src={facilities} alt="" class="img-fluid" />
			</div>
		</div>
	</div>
</section> );
}
 
export default Amenities;