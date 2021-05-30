import React from 'react';
import Rating from '../common/Rating'
import "../../css/room.css";
import room1 from '../../images/room1.jpg'

// Data model
// const data=[{id:"1",name:'hotel abc',rent:'1200',guests:'2',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam tempora voluptates?',rating:3,roomSize:15},
// {id:"2",name:'Hotel def',rent:'1500',guests:'1',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam tempora voluptates?',rating:3.5,roomSize:20},
// {id:"3",name:'Hotel ghi',rent:'1000',guests:'3',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam tempora voluptates?',rating:4,roomSize:25},
// {id:"4",name:'Hotel jkl',rent:'1300',guests:'2',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam tempora voluptates?',rating:4.5,roomSize:10},
// {id:"5",name:'Hotel mno',rent:'1100',guests:'3',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam tempora voluptates?',rating:5,roomSize:35},
// {id:"6",name:'Hotel pqr',rent:'900',guests:'1',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam tempora voluptates?',rating:2.5,roomSize:12}
// ]

const SearchResultComponent = ({hotels}) => {
  return (
    <div className="best-rooms w3l-blog py-5">
      <div className="container py-lg-5 py-sm-4">
        <div className="ban-content-inf row">
          {hotels.map(hotel => (
            <div key={hotel.name} className="maghny-gd-1 col-lg-4 col-md-6 mt-md-5 mt-4">
              <div className="maghny-grid">
                <figure className="effect-lily">
                  <img className="img-fluid" src={room1} alt="Room image" />
                  <figcaption>
                    <div>
                      <h4 className="top-text">
                        {hotel.name}
                        <Rating value={hotel.rating} />
                      </h4>
                      <p>Book for Rs.{hotel.rent} </p>
                    </div>
                  </figcaption>
                </figure>
                <div className="room-info">
                  <h3 className="room-title">
                    <a href="#url">{hotel.name}</a>
                  </h3>
                  <ul className="mb-3">
                    <li key={hotel.guests}>
                      <span className="fa fa-users"></span>
                      {hotel.guests} Guests
                    </li>
                    <li key={hotel.roomSize}>
                      <span className="fa fa-bed"></span> {hotel.roomSize}sqft
                    </li>
                  </ul>
                  <p>{hotel.description}</p>
                  <a href="booking.html" className="btn mt-sm-4 mt-3">
                    Book Now
                  </a>
                  <div className="room-info-bottom">
                    <ul className="room-amenities">
                      <li>
                        <a href="#url">
                          <span className="fa fa-bed" title="Beds"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#url">
                          <span className="fa fa-television" title="Television"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#url">
                          <span className="fa fa-bath" title="Private Bathroom"></span>
                        </a>
                      </li>
                    </ul>
                    <a href="room-single.html" className="btn view">
                      Full Info →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResultComponent;
