import React, {useState} from "react";
import DatePicker from "./DatePicker";
import ModalComponent from "../common/ModalComponent";
import RoomRequirement from "./RoomRequirement";

function SearchComponent() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [rooms, setRooms] = useState(1);

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
      <input type="text" placeholder="search a place" />
      <DatePicker />
      <input type="text" value={`${rooms} rooms`} onClick={() => setIsOpen(true)} />
      <ModalComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
        <RoomRequirement
          rooms={rooms}
          decrementRoom={decrementRoom}
          incrementRoom={incrementRoom}
        />
      </ModalComponent>
    </div>
  );
}

export default SearchComponent;
