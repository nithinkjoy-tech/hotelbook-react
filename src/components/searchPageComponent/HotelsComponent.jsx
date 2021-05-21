import React from 'react'
import slide1 from "../../images/slide1.jpg"

function HotelsComponent({hotels}) {
    return (
        <div>
            {hotels.map((hotel) => (
            <div key={Math.random().toString()} className="card bg-white text-black m-4">
              <img
                key={Math.random().toString()}
                className="img"
                src={slide1}
                alt="Card"
              />
              <div key={Math.random().toString()} className="card-img-overlay details-position">
                <h5 key={Math.random().toString()} className="card-title">
                  {hotel.hotelName}
                </h5>
                <h2 key={Math.random().toString()}>price: ${hotel.startingRatePerDay}</h2>
              </div>
            </div>
        ))}
        </div>   
    )
}

export default HotelsComponent
