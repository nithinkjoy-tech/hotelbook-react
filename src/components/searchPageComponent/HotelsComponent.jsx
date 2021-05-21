import React from "react";
import slide1 from "../../images/slide1.jpg";

function HotelsComponent({hotels}) {
  return (
    <div>
      {hotels.map(hotel => (
        <div className=" p-2 float-right" style={{width: "65%", marginRight: "180px"}}>
          <div className=" w-full lg:max-w-full lg:flex">
            <div
              className="h-48 lg:h-auto lg:w-72 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{backgroundImage: `url(${slide1})`}}
              title="Mountain"
            ></div>
            <div style={{backgroundColor:"#f8f4f4"}} className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">{hotel.hotelName}</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                  nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">2 nights</p>
                  <p className="text-gray-600">Price:{hotel.startingRatePerDay}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelsComponent;
