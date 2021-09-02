import React, {useEffect, useState, useMemo} from "react";
// import "../../css/ArrivalList.css";
import {getRoomBoys, deleteRoomBoy,getHotelRooms} from "../api/admin";
import DataTable, {createTheme} from "react-data-table-component";
import _ from "lodash";
import {confirmAlert} from "react-confirm-alert";
import {displayNotification} from "../services/notificationService";

function ManageRoomBoy({hotelId}) {
  const handleEdit = roomBoyId => {
    console.log(roomBoyId);
    window.location = `/admin/manageHotel/roomBoy/${roomBoyId}`;
  };

  const [roomBoys, setRoomBoys] = useState();
  const [fullRoomBoys, setFullRoomBoys] = useState();

  const handleDelete = roomBoyId => {
    // window.location=`/reception/dashboard/checkout/${data}`
    // console.log(data);
    confirmAlert({
      title: "Delete Room Boy",
      message: "Are you sure want to delete room boy",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            const {data, status} = await deleteRoomBoy(roomBoyId);
            if (status !== 200) return displayNotification("error", data);

            setRoomBoys(data)
            displayNotification("info", "Successfully deleted room boy.");
          },
        },
        {
          label: "No",
          onClick: () => {
            return null;
          },
        },
      ],
    });
  };

  const columns = useMemo(
    () => [
      {
        name: "Name",
        selector: "name",
        sortable: true,
      },
      {
        name: "Phone Number",
        selector: "phoneNumber",
      },
      {
        name: "Aadhar Number",
        selector: "aadharNumber",
      },
      {
        name: "Address",
        selector: "address",
      },
      {
        name: "",
        cell: row => (
          <td data-label="Edit">
            <button onClick={() => handleEdit(row._id)} className="checkin-button">
              Edit
            </button>
          </td>
        ),
        grow: 0,
      },
      {
        name: "",
        cell: row => (
          <td data-label="Delete">
            <button onClick={() => handleDelete(row._id)} className="btn btn-danger">
              Delete
            </button>
          </td>
        ),
      },
    ],
    []
  );

  const handleChange = ({target}) => {
    let roomBoys = fullRoomBoys;
    setRoomBoys(
      roomBoys.filter(roomBoy => _.includes(roomBoy.name.toLowerCase(), target.value.toLowerCase()))
    );
  };

  const getAllRoomBoys = async () => {

    if(hotelId){
      const {data:validHotel,status:resStatus}=await getHotelRooms(hotelId);
    if(resStatus !== 200) return displayNotification("error","Invalid URL")
    }

    const {data, status} = await getRoomBoys();
    if (status !== 200) return;
    setRoomBoys(data);
    setFullRoomBoys([...data]);
  };

  useEffect(() => {
    getAllRoomBoys();
  }, []);

  return (
    <div className="dashboard-items">
      <div className="arrivallist" style={{margin: 0}}>
        <>
          <DataTable
            title="Room Boys"
            pagination
            subHeader
            noDataComponent="No bookings available for today"
            subHeaderComponent={[
              <input
                onChange={e => handleChange(e)}
                placeholder="Search by name"
                className="border-1 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                type="text"
              ></input>,
            ]}
            columns={columns}
            data={roomBoys}
          />
        </>
      </div>
    </div>
  );
}

export default ManageRoomBoy;
