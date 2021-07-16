import React,{useState} from "react";
import Rating from '../common/Rating'
import { Link } from 'react-router-dom';
//wazirx bluewallet  
function SearchResultComponent({hotels,user}) {  

  const handleHotelClick=(id)=>{
    if(user==="renter") return window.location=`/renter/room/${id}`
    window.location=""
  }
 
  return (
    <div className="best-rooms w3l-blog py-5">
      <div className="container py-lg-5 py-sm-4">
        <div className="ban-content-inf row">
          <div  className="maghny-gd-1 col-lg-4 col-md-6 mt-md-5 mt-4">
          {hotels?.length>0?<span>{hotels.map(hotel => (
              <div className="maghny-grid">
                <figure onClick={()=>handleHotelClick(hotel._id)} className="effect-lily">
                  <img className="img-fluid" style={{height:"260px"}} src={hotel.mainPhoto} alt="Room" />
                  <figcaption>
                    <div>  
                      <h4 className="top-text">
                        {hotel.hotelName}
                        <Rating value={hotel?.reviewScore} />
                      </h4>
                      
                    </div>
                  </figcaption>
                </figure>
                <div className="room-info"> 
                  <h3 className="room-title"> 
                    <a href="#url">{hotel?.city}</a> 
                  </h3>
                  <ul className="mb-3">
                    <li key={hotel?.guests}>
                      <span className="fa fa-users"></span>
                      {hotel.guests} Guests
                    </li>
                    <li key={hotel?.roomSize}>
                      <span className="fa fa-bed"></span> {hotel?.roomSize}sqft
                    </li>
                  </ul>
                  <p>{hotel?.description}</p>
                  <p style={{color:"purple",fontWeight:"bold"}} >Book for Rs.{hotel?.startingRatePerDay} </p>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                {user==="renter"?<Link to={`/renter/listproperty/${hotel._id}`} >
                    <span className="btn mt-sm-4 mt-3">
                      Edit hotel
                    </span>
                  </Link>:<div></div>}
                  {user==="renter"?<Link to={`/renter/addroom/${hotel._id}`} >
                    <span className="btn mt-sm-3">
                      <i style={{fontSize:"1.5rem"}}>+</i> Add Rooms
                    </span>
                  </Link>:<div></div>}
                </div>
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
                    <a onClick={()=>handleHotelClick(hotel._id)} className="btn view">
                      Full Info →
                    </a>
                  </div>
                </div>
              </div> 
          ))}</span>:<p>There is no place with given name</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResultComponent
   
