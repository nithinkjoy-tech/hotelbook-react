import React from 'react';
import image1 from '../../images/room1.jpg';
import image2 from '../../images/room2.jpg';

const RoomDescription = (props) => {
    return ( 
        <section className="w3l-roomsingleblock1 py-5">
	<div className="container py-sm-4">
		<div className="row">
			<div className="col-lg-3 col-md-4 col-6">
				<img src={image1} alt="" className="img-fluid" />
			</div>
			<div className="col-lg-3 col-md-4 col-6">
				<img src={image2} alt="" className="img-fluid" />
			</div>
			<div className="col-lg-6 roomsingle mt-lg-0 mt-4">
				<h3 className="title-small">The Room</h3>
				<p className="roomsingle mt-3">{props.description}</p>
			</div>
		</div>
	</div>
</section>
     );
}
 
export default RoomDescription;