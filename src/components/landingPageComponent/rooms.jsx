import React from 'react';
import '../../css/room.css'
import room1 from "../../images/room1.jpg";
import room2 from "../../images/room2.jpg";
import room3 from "../../images/room3.jpg";
import room4 from "../../images/room4.jpg";
import room5 from "../../images/room5.jpg";
const Rooms = () => {
    return ( <div className="best-rooms py-5">
    <div className="container py-lg-5 py-sm-4">
        <h3 className="title-big text-center">Best Rooms</h3>
        <div className="ban-content-inf row py-lg-3">
            <div className="maghny-gd-1 col-lg-6">
                <div className="maghny-grid">
                    <figure className="effect-lily">
                        <img className="img-fluid" src={room1} alt="" />
                        <figcaption className="w3set-hny">
                            <div>
                                <h4 className="top-text">Luxury Hotel and Best Resort
                                    <span>Peaceful Place to stay</span></h4>
                                <p>From Rs.1200 </p>
                            </div>
                        </figcaption>
                    </figure>
                    <div className="room-info">
                        <h3 className="room-title"><a href="room-single.html">Luxury Hotel</a></h3>
                        <ul className="mb-3">
                            <li><span className="fa fa-users"></span> 2 Guests</li>
                            <li><span className="fa fa-bed"></span> Double bed</li>
                            <li><span className="fa fa-bed"></span> 15sqft</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam
                            tempora voluptates?</p>
                        <a href="#book" className="btn btn-style btn-primary mt-sm-4 mt-3">Book Now</a>
                    </div>
                </div>
            </div>
            <div className="maghny-gd-1 col-lg-6 mt-lg-0 mt-4">
                <div className="row">
                    <div className="maghny-gd-1 col-6">
                        <div className="maghny-grid">
                            <figure className="effect-lily border-radius">
                                <img className="img-fluid" src={room2} alt="" />
                                <figcaption>
                                    <div>
                                        <h4>Family Rooms <span> Resort</span></h4>
                                        <p>From Rs.1200 </p>
                                    </div>

                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="maghny-gd-1 col-6">
                        <div className="maghny-grid">
                            <figure className="effect-lily border-radius">
                                <img className="img-fluid" src={room3} alt="" />
                                <figcaption>
                                    <div>
                                        <h4>Double Rooms <span> Resort</span></h4>
                                        <p>From Rs.1500 </p>
                                    </div>

                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="maghny-gd-1 col-6 mt-4">
                        <div className="maghny-grid">
                            <figure className="effect-lily border-radius">
                                <img className="img-fluid" src={room4} alt="" />
                                <figcaption>
                                    <div>
                                        <h4>Luxury Rooms <span> Resort</span></h4>
                                        <p>From Rs.2000 </p>
                                    </div>

                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="maghny-gd-1 col-6 mt-4">
                        <div className="maghny-grid">
                            <figure className="effect-lily border-radius">
                                <img className="img-fluid" src={room5} alt="" />
                                <figcaption>
                                    <div>
                                        <h4>Resort Rooms <span> Resort</span></h4>
                                        <p>From Rs.1800 </p>
                                    </div>

                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 );
}
 
export default Rooms;