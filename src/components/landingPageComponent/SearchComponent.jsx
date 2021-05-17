import React, {useState} from "react";
import ModalComponent from "../common/ModalComponent";
import RoomRequirement from "./RoomRequirement";
import Calendar from "./Calendar";

function SearchComponent() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [placeForSearch, setPlaceForSearch] = useState("");
  const [errors,setErrors]=useState()
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null
  });
  
  const handleSubmit=()=>{
      let err={
        placeForSearch:"",
        selectedDayRange:"",
        rooms:""
    }
      if(placeForSearch.length<1) {
        err.placeForSearch="place for search is required"
          setErrors(err)
      }
      
    if(!selectedDayRange?.from?.day) {
        err.selectedDayRange="date is required"
        setErrors(err)
    } 
    if(rooms<1){
        err.rooms="number of room is required"
        setErrors(err)
    }

    if(errors) return 
    
  }

  const decrementRoom = () => {
    if (rooms <= 1) return;
    setRooms(rooms - 1);
  };

  const incrementRoom = () => {
    if (rooms >= 9999) return;
    setRooms(rooms + 1);
  };

  return (
    <div>
      <input type="text" value={placeForSearch} onChange={({currentTarget})=>{setPlaceForSearch(currentTarget.value)}} placeholder="search a place" />
      {errors?.placeForSearch&&<p>{errors["placeForSearch"]}</p>}
      <Calendar selectedDayRange={selectedDayRange} setSelectedDayRange={setSelectedDayRange} />
      {errors?.selectedDayRange&&<p>{errors["selectedDayRange"]}</p>}
      <span className="room-option" onClick={() => setIsOpen(true)} >{`${rooms} room`+(rooms===1?"":"s")}</span>
      {errors?.rooms&&<p>{errors["rooms"]}</p>}
      <ModalComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
        <RoomRequirement
          rooms={rooms}
          decrementRoom={decrementRoom}
          incrementRoom={incrementRoom}
        />
      </ModalComponent>
      <button onClick={handleSubmit} type="submit">Submit</button>
    </div>
  );
}

export default SearchComponent;
