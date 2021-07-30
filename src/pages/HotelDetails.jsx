import React, {useEffect, useState} from "react";
import {ImportContactsTwoTone} from "@material-ui/icons";
import PriceandImageSection from "../components/RoomDetailsPageComponents/PriceandImageSection";
import RoomDescription from "../components/RoomDetailsPageComponents/RoomDescription";
import Amenities from "../components/RoomDetailsPageComponents/Amenities";
import Reviews from "../components/RoomDetailsPageComponents/Reviews";
import {getHotel} from "./../api/guest";

const HotelDetails = ({match}) => {
  const hotelId = match.params.hotelId;

  const [hotel, setHotel] = useState();

  const getHotelbyId = async () => {
    const {data, status} = await getHotel(hotelId);
    console.log(data, status, "dt");
    setHotel(data);
  };

  useEffect(() => {
    getHotelbyId();
  }, []);

  if (!hotel) return null;
  // console.log(hotel.photos,"bb")
  return (
    <React.Fragment>
      <PriceandImageSection
        hotelDetails={{
          photos: hotel.photos,
          startingRatePerDay: hotel.startingRatePerDay,
          hotelName: hotel.hotelName,
        }}
      />
      {/* <RoomDescription description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum, dolor volutpat malesuada vulputate, diam libero tristique augue, et euismod dolor eros vitae ligula. Praesent cursus mi non nibh convallis, eget pharetra velit ornare. Fusce vel malesuada ex. Proin vitae leo rhoncus, dictum nulla molestie, condimentum libero. Etiam id mollis ipsum. Quisque tincidunt sagittis nisl, suscipit ullamcorper dolor ullamcorper eget. Cras non tortor id erat tempus interdum.'}/> */}
      <Amenities mainPhoto={hotel.mainPhoto} facilities={hotel.facilities} />
      <Reviews />
    </React.Fragment>
  );
};

export default HotelDetails;
