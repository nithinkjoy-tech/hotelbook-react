import React, {useEffect, useState, useMemo} from "react";
import DataTable from "react-data-table-component";
import _ from "lodash";
import {getCurrentlyStaying} from "../../api/reception";
import "../../css/ArrivalList.css";

function AddBill() {
  const handleClick = data => {
    window.location = `/reception/dashboard/checkout/${data}`;
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
        name: "Checked In",
        selector: booking?.lateStartingDayOfStay ? "lateStartingDayOfStay" : "startingDayOfStay",
        sortable: true,
      },
      {
        name: "Check Out",
        selector: "endingDayOfStay",
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
          <td data-label="CheckOut">
            <button onClick={() => handleClick(row._id)} className="checkin-button">
              CheckOut
            </button>
          </td>
        ),
      },
    ],
    []
  );
  const [booking, setBooking] = useState();
  const [fullBooking, setFullBooking] = useState();

  const handleChange = ({target}) => {
    let booking = fullBooking;
    setBooking(
      booking.filter(book => _.includes(book.name.toLowerCase(), target.value.toLowerCase()))
    );
  };

  const getAllBookings = async () => {
    const {data, status} = await getCurrentlyStaying();
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
            title="Currently Staying List"
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

export default AddBill;
