import React, {useEffect, useState, useMemo} from "react";
import "../../css/ArrivalList.css";
import Sidebar from "./Sidebar";
import {getBookings, cancelBooking} from "../../api/renter";
import DataTable, {createTheme} from "react-data-table-component";
import InputBox from "./../common/InputBox";
import _ from "lodash";
import {displayNotification} from "./../../services/notificationService";
import {confirmAlert} from "react-confirm-alert";

function ArrivalList() {
  const handleClick = data => {
    window.location = `/reception/dashboard/checkin/${data}`;
    console.log(data);
  };

  const handleCancel = async bookingId => {
    confirmAlert({
      title: "Cancel Booking",
      message: "Are you sure want to cancel this booking.",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            const {data, status} = await cancelBooking(bookingId);
            if (status !== 200)
              return displayNotification("error", data || "Could not cancel booking");
            displayNotification("success", data);
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
        name: "Booking ID",
        selector: "hotelBookingId",
        sortable: true,
      },
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
        name: "Booked Date",
        selector: "bookedOn",
        sortable: true,
      },
      {
        name: "Email",
        selector: "email",
      },
      {
        name: "Booking Mode",
        sortable: true,
        selector: "bookingMode",
        cell: row =>
          row.bookingMode === "online" ? (
            <span className="badge badge-success">Online</span>
          ) : (
            <span className="badge badge-secondary">Offline</span>
          ),
      },
      {
        name: "",
        cell: row => (
          <td data-label="CheckIn">
            <button onClick={() => handleCancel(row._id)} className="btn btn-danger">
              Cancel
            </button>
          </td>
        ),
      },
      {
        name: "",
        cell: row => (
          <td data-label="CheckIn">
            <button onClick={() => handleClick(row._id)} className="checkin-button">
              CheckIn
            </button>
          </td>
        ),
      },
    ],
    []
  );
  const [booking, setBooking] = useState();
  const [fullBooking, setFullBooking] = useState();
  console.log(booking, "bknh");
  const handleChange = ({target}) => {
    let booking = fullBooking;
    setBooking(
      booking.filter(book => _.includes(book.name.toLowerCase(), target.value.toLowerCase()))
    );
  };

  const getAllBookings = async () => {
    const {data, status} = await getBookings();
    if (status !== 200) return;
    setBooking(data);
    setFullBooking([...data]);
  };

  useEffect(() => {
    getAllBookings();
  }, []);

  return (
    <div className="dashboard-items">
      <div className="arrivallist" style={{margin: 0}}>
        <>
          <DataTable
            title="Todays Arrivals List"
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
            data={booking}
          />
        </>
      </div>
    </div>
  );
}

export default ArrivalList;
