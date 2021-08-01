import React, {useEffect, useState} from "react";
import {ImportContactsTwoTone} from "@material-ui/icons";
import PriceandImageSection from "../components/RoomDetailsPageComponents/PriceandImageSection";
import RoomDescription from "../components/RoomDetailsPageComponents/RoomDescription";
import Amenities from "../components/RoomDetailsPageComponents/Amenities";
import Reviews from "../components/RoomDetailsPageComponents/Reviews";
import {getHotel,getRoomsbyId} from "./../api/guest";
import Table from './../components/common/Table';
import { displayNotification } from './../services/notificationService';

const HotelDetails = ({match}) => {
  const hotelId = match.params.hotelId;

  const [hotel, setHotel] = useState();
  const [rooms, setRooms] = useState();

  // const getRoomsbyId=async(hotelRoomIds)=>{
  //   console.log(hotelRoomIds,"ff")
    
  // }
  
  const getHotelbyId = async () => {
    let {data, status} = await getHotel(hotelId);
    console.log(data, status, "dt");
    setHotel(data);
    let selectedDayRange=JSON.parse(localStorage.getItem("selectedDays"))
    console.log(selectedDayRange,"sdrg")
    let {data:roomData, status:reqStatus} = await getRoomsbyId({roomIds:data.hotelRooms,selectedDayRange});
    console.log(roomData,"dtnj"); 
    setRooms(roomData) 
    let numberOfDays = Number(localStorage.getItem("numberOfDays"))
    if(numberOfDays===0) displayNotification("info","Select date of your stay for clear details")
    // getRoomsbyId(data.hotelRooms)  
  };

  useEffect(() => {
    getHotelbyId();
  }, []);

  if (!hotel||!rooms) return null;
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
      <Table rooms={rooms} />
      <Reviews />
    </React.Fragment>
  );
};

export default HotelDetails;
