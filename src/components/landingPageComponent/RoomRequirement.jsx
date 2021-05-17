import React from "react";

function RoomRequirement({decrementRoom, incrementRoom, rooms}) {
  return (
    <div>
      <span style={{fontSize: "22px"}}>Rooms</span>
      <button
        onClick={decrementRoom}
        className="btn btn-outline-secondary btn-md room-requirement-button"
        disabled={rooms <= 1}
      >
        <span className="room-requirement-symbol">-</span>
      </button>
      <span className="number-of-rooms">{rooms}</span>
      <button
        onClick={incrementRoom}
        className="btn btn-outline-primary btn-md room-requirement-button"
        disabled={rooms >= 9999}
      >
        <span className="room-requirement-symbol">+</span>
      </button>
    </div>
  );
}

export default RoomRequirement;
