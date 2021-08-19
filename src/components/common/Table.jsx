import React, {useState} from "react";
import PersonIcon from "@material-ui/icons/Person";
import "bootstrap/dist/css/bootstrap.css";
import ImageGallery from "react-image-gallery";
import "../../css/Table.css";
import {getRoombyId} from "../../api/guest";
import ModalComponent from "./ModalComponent";
import {displayNotification} from "./../../services/notificationService";
import _ from "lodash";
import { bookHotel } from './../../api/guest';
import { bookOfflineHotel } from './../../api/renter';
import {getCurrentUser} from "../../services/authService";

function Table({rooms}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [facilities, setFacilities] = useState();
  const [beds, setBeds] = useState();
  const [persons, setPersons] = useState();
  const [price, setPrice] = useState();
  const [roomsNumber, setRoomsNumber] = useState();
  const [object, setObject] = useState({});
  // // let images=[]
  // const [open, setOpen] = React.useState(false);
  let numberOfDays = localStorage.getItem("numberOfDays");

  const handleRoomClick = room => {
    console.log("clicke");
    window.location = `/hotel/roomdetails/${room._id}`;
  };
  let selectedDays = JSON.parse(localStorage.getItem("selectedDays"));

  // const object = {};
  const handleBooking=async(hotelId)=>{



    if(!getCurrentUser()?.isGuest&&!getCurrentUser()?.isReception) return window.location=`/signin?redirecturl=${window.location.href}`
    console.log(object);
    if(_.isEmpty(object)) return displayNotification("error","Please select rooms for booking")
    let roomsArray=[]
    for(let [key, value] of Object.entries(object)){
      console.log(key,"key")
      console.log(object,"obj")
      roomsArray.push({roomId:key,noOfRooms:value})
    }

    let finalData={
      roomDetails:roomsArray,
      selectedDayRange:JSON.parse(localStorage.getItem("selectedDays")),
      hotelId,
    }
    console.log(finalData,"dtt")
    if(getCurrentUser()?.isGuest){
      const {data,status}=await bookHotel(finalData)
      if(status !== 200) return displayNotification("error", data)
      displayNotification("success", data)
    }

    if(getCurrentUser()?.isReception){
      finalData["offlineGuestId"]=JSON.parse(localStorage.getItem("offlineGuestId"))
      if(!finalData["offlineGuestId"]) return displayNotification("error","Check if user is registered")
      const {data,status}=await bookOfflineHotel(finalData)
      if(status !== 200) return displayNotification("error", data)
      displayNotification("success", data)
    }
    // setTimeout(() => {
    //   window.location="/dashboard"
    // },1000)
    // {
//   "roomDetails":[{"roomId": "60995ece56a3f64368509ce9",
//         "noOfRooms":3
//       },
//       {
//         "roomId":"60995ee156a3f64368509cea",
//         "noOfRooms":2
//       }],
//   "selectedDate":{"from":{
//   "day":19,
//   "month":5,
//   "year":2021
// },
// "to":{
//   "day":29,
//   "month":5,
//   "year":2021
// }}
// }
  }

  const handleSelect = selected => {
    // let object={...object}
    
    console.log(object,"ob")
    let key=selected.slice(0, 24)
    let value=Number(selected.slice(24, selected.length))
    object[key] = value;
    setObject(object)
    console.log(value,"vl")

    let bedsNo=0,personsNo=0,priceNo=0,roomsNo=0
    let values=[]
    let datas=[]
    console.log(object,"ob1")
    for (let [key, value] of Object.entries(object)) {
      console.log(value,typeof value,"cc")
      if(Number(value)===0) {
        setObject(_.omit(object, [key.toString()]));
      }
    }

    for (let [key, value] of Object.entries(object)) {
      let data=_.filter(rooms, { '_id': key})[0]
      values.push(Number(value))
      datas.push(data)
    }
    for(let index in values){
      console.log(index, typeof values[index])
      console.log(index, typeof Number(datas[index].numberOfBeds),"bb")
      bedsNo+=values[index]*Number(datas[index].numberOfBeds)
      personsNo+=values[index]*Number(datas[index].numberOfGuestsInaRoom)
      priceNo+=values[index]*Number((datas[index].basePricePerNight)*numberOfDays)
      roomsNo+=values[index]
 
    }
    // let data=_.filter(rooms, { '_id': key})[0]
    setBeds(bedsNo)
    setPersons(personsNo)
    setPrice(priceNo)
    setRoomsNumber(roomsNo)
    // setBeds(Number(data.numberOfBeds)*values)
    // setPersons(Number(data.numberOfGuestsInaRoom)*values)
    // setPrice((Number(data.basePricePerNight)*numberOfDays)*values)
    // setRoomsNumber(values)
    // console.log(data,"dtt")
  };

  const getRoomDetails = async roomId => {
    const {data, status} = await getRoombyId(roomId);
    let images;
    if (status !== 200) return displayNotification("error", "Something went wrong");
    images = data.photos.map(photo => ({original: photo}));
    setFacilities(data.facilities);

    images.unshift({original: data.mainPhoto});
    setImages(images);
    setIsOpen(true);
  };

  if(!rooms[0]) return <div style={{margin:"auto",width:"85%",marginTop:"20px",marginBottom:"20px"}} ><h1>There is no room left for booking</h1></div>

  return (
    <div style={{margin: "auto", width: "85%",marginTop:"30px"}}>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">Room Type</th>
            <th scope="col">Beds</th>
            <th scope="col">Sleeps</th>
            <th scope="col">
              {selectedDays?.from?.day ? `Price for ${numberOfDays} nights` : "Price per night"}
            </th>
            <th scope="col">Select Rooms</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <tr key={room._id}>
              <td style={{cursor: "pointer"}} onClick={() => getRoomDetails(room._id)} scope="col">
                <h3>{room.roomType}</h3>
                <div className="features">
                  <img
                    src={room.mainPhoto}
                    alt="room image"
                    className="columns"
                    style={{width: "30%", border: "2px solid gray", borderRadius: "5px"}}
                  />
                  <div className="features_list" className="columns" style={{marginLeft: "40px"}}>
                    <ul className="w3l-right-book mt-4">
                      {room.facilities.slice(0, 5).map(facility => (
                        <li key={facility}>
                          <span className="fa fa-check" aria-hidden="true" />
                          {facility}
                        </li>
                      ))}
                    </ul>
                    <a style={{fontSize: "18px", color: "#008CFF"}}>View more details</a>
                  </div>
                </div>
              </td>
              <td style={{minWidth: "65px"}}>
                <div className="persons">
                  {room.numberOfBeds <= 10 ? (
                    <div>
                      {_.range(room.numberOfBeds).map(bed => (
                        <i key={bed.toString()} className="fa fa-bed" style={{margin: "2px"}}></i>
                      ))}
                    </div>
                  ) : (
                    <p>This room has {room.numberOfBeds} beds</p>
                  )}
                </div>
              </td>
              <td>
                <div className="persons">
                  {room.numberOfGuestsInaRoom <= 10 ? (
                    <div>
                      {_.range(room.numberOfGuestsInaRoom).map(person => (
                        <PersonIcon key={person.toString()} />
                      ))}
                    </div>
                  ) : (
                    <p>This room can accommodate {room.numberOfGuestsInaRoom} persons</p>
                  )}
                </div>
              </td>
              <td>
                Rs.{" "}
                {selectedDays?.from?.day
                  ? room?.basePricePerNight * numberOfDays
                  : room.basePricePerNight}
              </td>
              <td>
                <select
                  onChange={e => handleSelect(e.target.value)}
                  className="form-select"
                  aria-label="Default select example"
                >
                  {_.range(room.numberOfRoomsOfThisType + 1).map(no => (
                    <option value={`${room._id}${no}`.toString()}>
                      {no.toString()}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.{" "}
                      {room.basePricePerNight * numberOfDays * no}
                    </option>
                  ))}
                  {/* <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option> */}
                </select>
              </td>
            </tr>
          ))}
          <tr>
            <td style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center'}} >
              <div>Total Booking details</div>
              <div>
                <button onClick={()=>handleBooking(rooms[0].hotelId)} className="btn btn-primary">Book Now</button>
              </div>
            </td>
            <td className="tdalign">Beds:<span>{beds}</span></td> 
            <td className="tdalign">Persons:<span>{persons}</span></td>
            <td className="tdalign">Price:<span>{price}</span></td>
            <td className="tdalign">Rooms:<span>{roomsNumber}</span></td>
          </tr>
          {images.length > 0 ? (
            <ModalComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
              <div style={{display: "flex", justifyItems: "center", alignContent: "flex-start"}}>
                <div>
                  <ImageGallery items={images} />
                </div>
                <div className="col-lg-7 roomsingle">
                  <h3 className="title-small mb-0">Amenities provided</h3>
                  <ul style={{columns: "2"}}>
                    {facilities.map(facility => (
                      <li>
                        <span className="fa fa-check" aria-hidden="true" />
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ModalComponent>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
