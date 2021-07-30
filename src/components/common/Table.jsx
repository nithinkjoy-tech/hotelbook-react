import React, {useState} from "react";
import PersonIcon from "@material-ui/icons/Person";
import "bootstrap/dist/css/bootstrap.css";
import ImageGallery from "react-image-gallery";
import "../../css/Table.css";
import {getRoombyId} from "../../api/guest";
import ModalComponent from "./ModalComponent";
import Modal from "@material-ui/core/Modal";
import {Redirect} from "react-router-dom";
import {displayNotification} from "./../../services/notificationService";

function Table({rooms}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [facilities, setFacilities] = useState();
  // // let images=[]
  // const [open, setOpen] = React.useState(false);

  const handleRoomClick = room => {
    console.log("clicke");
    window.location = `/hotel/roomdetails/${room._id}`;
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const getRoomDetails = async roomId => {
    const {data, status} = await getRoombyId(roomId);
    console.log(data, "dt");
    let images;
    if (status !== 200) return displayNotification("error", "Something went wrong");
    images = data.photos.map(photo => ({original: photo}));
    // rooms.map(room => {
    //   room._id == roomId && ;
    // });
    setFacilities(data.facilities);
    images.unshift({original: data.mainPhoto});
    setImages(images);
    console.log(images, "igs");
    // if(images.length>0)
    setIsOpen(true);
    // window.location =`/hotel/roomdetails/`
  };

  return (
    <div style={{margin: "auto", width: "85%"}}>
      <table class="table table-bordered">
        <thead class="table-dark">
          <tr>
            <th scope="col">Room Type</th>
            <th scope="col">Sleeps</th>
            <th scope="col">Price for {} nights</th>
            <th scope="col">Select Room</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <tr style={{cursor: "pointer"}} onClick={() => getRoomDetails(room._id)}>
              <h3 style={{marginBottom: 0}}>{room.roomType}</h3>
              <td scope="col" className="features">
                <img
                  src={room.mainPhoto}
                  alt="room image"
                  className="columns"
                  style={{width: "30%", border: "2px solid gray", borderRadius: "5px"}}
                />
                <div className="features_list" className="columns" style={{marginLeft: "40px"}}>
                  <p>Features</p>
                  <p>Features</p>
                  <p>Features</p>
                  <p>Features</p>
                  <p>Features</p>
                </div>
              </td>
              <td>
                <div className="persons">
                  <PersonIcon />
                </div>
              </td>
              <td>Rs.1200</td>
              <td>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Rooms</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                </select>
              </td>
            </tr>
          ))}
          {images.length > 0 ? (
            <div >
              <ModalComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
              <div style={{display: 'flex',justifyContent: "space-around"}} >
              <div style={{width: "80%", display: "flex",flexDirection: "column",flexWrap: "wrap"}}>
               <div>
                <ImageGallery items={images} />

               </div>
               <div className="col-lg-7 roomsingle">
                  <h3 className="title-small mb-0">Amenities provided</h3>
                  <ul style={{columns:"3"}}>
                    {facilities.map(facility => (
                      <li >
                        <span className="fa fa-check" aria-hidden="true" />
                        {facility}
                      </li>
                    ))}
                  </ul>
              </div>
              </div>
              </div>
            </ModalComponent>
            </div>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
