import React, {useState, useEffect} from "react";
import ImageGallery from "react-image-gallery";
import {getRoombyId} from "../api/guest";
import {displayNotification} from "../services/notificationService";

function RoomDetails({match}) {
  const roomId = match.params.roomId;
  

  const [images, setImages] = useState([]);

  const getRoomDetails = async () => {
    const {data, status} = await getRoombyId(roomId);
    console.log(data, "dt");
    let images;
    if (status !== 200) return displayNotification("error", "Something went wrong");
    images = data.photos.map(photo => ({original: photo}));
    // rooms.map(room => {
    //   room._id == roomId && ;
    // });
    // images.unshift(data.mainPhoto)
    setImages(images);
    // console.log(images,"igs")
    // if(images.length>0)
    // setOpen(true)
    // window.location =`/hotel/roomdetails/`
  };

  useEffect(() => {
    getRoomDetails();
  }, []);

  if (!roomId) return window.location = "/";

  if(images.length===0) return null
console.log(images,"llo")
  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
}

export default RoomDetails;
