import React from "react";
import "../../css/room.css";

// images
import delhi from "../../images/delhi.jpg";
import agra from "../../images/agra.jpeg";
import bangalore from "../../images/bangalore.jpg";
import goa from "../../images/goa.jpg";
import mumbai from "../../images/mumbai.jpg";
import munnar from "../../images/munnar.jpg";
import mysore from "../../images/mysore.jpg";
import ooty from "../../images/ooty.jpg";
import {useHistory} from "react-router-dom";
import {getHotels} from "../../api/guest";

const Places = () => {
  const history = useHistory();

  const searchPlace = async place => {
    let values = {
      placeForSearch: place,
      selectedDayRange: {
        from: null,
        to: null,
      },
      rooms: 1,
    };
    const {data} = await getHotels(values);
    history.push("/search", {data, values});
  };

  return (
    <div className="best-rooms py-5">
      <div className="container py-lg-5 py-sm-4">
        <h3 className="title-big text-center">Top Places</h3>
        <div className="ban-content-inf row py-lg-3">
          <div className="maghny-gd-1 col-lg-6 mt-lg-0 mt-4">
            <div className="row">
              <div onClick={() => searchPlace("Delhi")} className="maghny-gd-1 col-6">
                <div className="maghny-grid">
                  <figure className="effect-lily border-radius">
                    <img className="img-fluid" src={delhi} alt="" />
                    <figcaption>
                      <div>
                        <h4>
                          <span>Delhi</span>
                        </h4>
                        <p>Administrative epicentre of India</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div onClick={() => searchPlace("Bangalore")} className="maghny-gd-1 col-6">
                <div className="maghny-grid">
                  <figure className="effect-lily border-radius">
                    <img className="img-fluid" src={bangalore} alt="" />
                    <figcaption>
                      <div>
                        <h4>
                          <span>Bangalore</span>
                        </h4>
                        <p>Technology hub of India</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div onClick={() => searchPlace("Ooty")} className="maghny-gd-1 col-6 mt-4">
                <div className="maghny-grid">
                  <figure className="effect-lily border-radius">
                    <img className="img-fluid" src={ooty} alt="" />
                    <figcaption>
                      <div>
                        <h4>
                          <span>Ooty</span>
                        </h4>
                        <p>Endless natural beauty of Nilgiris</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div onClick={() => searchPlace("Mumbai")} className="maghny-gd-1 col-6 mt-4">
                <div className="maghny-grid">
                  <figure className="effect-lily border-radius">
                    <img className="img-fluid" src={mumbai} alt="" />
                    <figcaption>
                      <div>
                        <h4>
                          <span>Mumbai</span>
                        </h4>
                        <p>Cosmpolitan and financial capital of India</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div onClick={() => searchPlace("Goa")} className="maghny-gd-1 col-lg-6 mt-lg-0 mt-4">
            <div className="row">
              <div className="maghny-gd-1 col-6">
                <div className="maghny-grid">
                  <figure className="effect-lily border-radius">
                    <img className="img-fluid" src={goa} alt="" />
                    <figcaption>
                      <div>
                        <h4>
                          <span>Goa</span>
                        </h4>
                        <p>An idyllic combination of the sun,sand and sea</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div onClick={() => searchPlace("Munnar")} className="maghny-gd-1 col-6">
                <div className="maghny-grid">
                  <figure className="effect-lily border-radius">
                    <img className="img-fluid" src={munnar} alt="" />
                    <figcaption>
                      <div>
                        <h4>
                          <span>Munnar</span>
                        </h4>
                        <p>Reffered as the Kashmir of South India</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div onClick={() => searchPlace("Mysore")} className="maghny-gd-1 col-6 mt-4">
                <div className="maghny-grid">
                  <figure className="effect-lily border-radius">
                    <img className="img-fluid" src={mysore} alt="" />
                    <figcaption>
                      <div>
                        <h4>
                          <span>Mysore</span>
                        </h4>
                        <p>A royal city with grand palaces and heritage sites</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div onClick={() => searchPlace("Agra")} className="maghny-gd-1 col-6 mt-4">
                <div className="maghny-grid">
                  <figure className="effect-lily border-radius">
                    <img className="img-fluid" src={agra} alt="" />
                    <figcaption>
                      <div>
                        <h4>
                          <span>Agra</span>
                        </h4>
                        <p>The city of eternal love</p>
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

export default Places;
