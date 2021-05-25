import React from "react";
import "../../css/room.css";
// import room1 from "../../images/room1.jpg";
import room2 from "../../images/room2.jpg";
import room3 from "../../images/room3.jpg";
import room4 from "../../images/room4.jpg";
import room5 from "../../images/room5.jpg";

const Cities = () => {
  return (
    <div className="best-rooms py-5">
    <div className="container py-lg-5 py-sm-4">
        <h3 className="title-big text-center">Top Cities</h3>
        <div className="ban-content-inf row py-lg-3">

<div className="maghny-gd-1 col-lg-6 mt-lg-0 mt-4">
                <div className="row">
                    <div className="maghny-gd-1 col-6">
                        <div className="maghny-grid">
                            <figure className="effect-lily border-radius">
                                <img className="img-fluid" src={room2} alt="" />
                                <figcaption>
                                    <div>
                                        <h4><span>Delhi</span></h4>
                                        <p>Average price <br /> Rs.1800 </p>
                                    </div>

                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="maghny-gd-1 col-6">
                        <div className="maghny-grid">
                            <figure className="effect-lily border-radius">
                                <img className="img-fluid" src={room2} alt="" />
                                <figcaption>
                                    <div>
                                        <h4><span>Bangalore</span></h4>
                                        <p>Average price <br /> Rs.1700 </p>
                                    </div>

                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="maghny-gd-1 col-6 mt-4">
                        <div className="maghny-grid">
                            <figure className="effect-lily border-radius">
                                <img className="img-fluid" src={room3} alt="" />
                                <figcaption>
                                    <div>
                                        <h4><span>Trivandrum</span></h4>
                                        <p>Average price <br /> Rs.1000 </p>
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
                                        <h4><span>Kolkata</span></h4>
                                        <p>Average price <br /> Rs.1500 </p>
                                    </div>

                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            <div className="maghny-gd-1 col-lg-6 mt-lg-0 mt-4">
                <div className="row">
                    <div className="maghny-gd-1 col-6">
                        <div className="maghny-grid">
                            <figure className="effect-lily border-radius">
                                <img className="img-fluid" src={room5} alt="" />
                                <figcaption>
                                    <div>
                                        <h4><span>Chennai</span></h4>
                                        <p>Average price <br /> Rs.1110 </p>
                                    </div>

                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="maghny-gd-1 col-6">
                        <div className="maghny-grid">
                            <figure className="effect-lily border-radius">
                                <img className="img-fluid" src={room5} alt="" />
                                <figcaption>
                                    <div>
                                        <h4><span>Gurugram</span></h4>
                                        <p>Average price <br /> Rs.1300 </p>
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
                                        <h4><span>Lucknow</span></h4>
                                        <p>Average price <br /> Rs.1400 </p>
                                    </div>

                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="maghny-gd-1 col-6 mt-4">
                        <div className="maghny-grid">
                            <figure className="effect-lily border-radius">
                                <img className="img-fluid" src={room3} alt="" />
                                <figcaption>
                                    <div>
                                        <h4><span>Kochi</span></h4>
                                        <p>Average price <br /> Rs.1100 </p>
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
};

export default Cities;
