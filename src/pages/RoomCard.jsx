import React, {useEffect, useState} from "react";
import slide1 from "../images/slide1.jpg";
import {getHotelRooms} from "./../api/admin";
import "../css/Card.css";
import { Link } from 'react-router-dom';

function RoomCard({match}) {
  const hotelId=match.params.hotelId
  const [rooms, setRooms] = useState();

  const getRooms = async () => {
    const {data} = await getHotelRooms(hotelId);
    console.log(data, "dt");
    setRooms(data);
  };

  const editRoom=(roomId)=>{
    window.location=`/admin/editroom/${roomId}`
  }

  useEffect(() => {
    getRooms();
  }, []);


  return (
    <div>
      <h1 style={{marginTop: "70px", textAlign: "center"}}>Rooms</h1>
      <Link 
        to={`/admin/addroom/${hotelId}`}
        className="btn btn-primary btn-lg btn-block"
        style={{marginBottom: "2rem", marginLeft: "5rem"}}
      >
        <i style={{fontSize: "25px", fontWeight: "bold"}}>+</i> Add Room
      </Link>

      <div className="wrapper">
        {rooms?.length > 0 ? (
          rooms.map(room => (
            <div className="room_card">
              <img src={room?.mainPhoto} className="room_card__img" />
              <div className="room_card__body">
                <h2 className="room_card__title">{room?.roomType}</h2>
                <p className="room_card__description">{room?.kindOfBed}</p>
                <p className="room_card__description">{room?.numberOfBeds}</p>
                <h3 className="room_card__price">{room?.basePricePerNight}</h3>
                <button onClick={()=>editRoom(room?._id)} className="room_card__btn">Edit Room</button>
              </div>
            </div>
          ))
        ) : (
          <h2 style={{margin: "5rem"}}>There are no rooms</h2>
        )}
      </div>
    </div>
  );
}

export default RoomCard;
