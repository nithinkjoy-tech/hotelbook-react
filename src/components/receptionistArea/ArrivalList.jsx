import React, {useEffect, useState, useMemo} from "react";
import "../../css/ArrivalList.css";
import Sidebar from "./Sidebar";
import {getBookings} from "../../api/renter";
import DataTable, {createTheme} from "react-data-table-component";
import InputBox from "./../common/InputBox";
import _ from "lodash";

function ArrivalList() {
  const handleClick = data => {
    console.log(data);
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
            <button onClick={() => handleClick(row)} className="checkin-button">
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
    const {data} = await getBookings();
    setBooking(data);
    setFullBooking([...data]);
  };

  useEffect(() => {
    getAllBookings();
  }, []);

  return (
    // <div className="dashboard page-top">
    <div className="dashboard-items">
      <div className="arrivallist" style={{margin: 0}}>
        <>
          <DataTable
            title="Arrivals List"
            pagination
            subHeader
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
        {/* <table>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Booked Date</th>
                <th scope="col">Booking Number</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Account">Rajesh</td>
                <td data-label="Due Date">98745632102</td>
                <td data-label="Amount">03/10/2021</td>
                <td data-label="Period">1234</td>
                <td data-label="CheckIn">
                  <button className="checkin-button">CheckIn</button>
                </td>
              </tr>
              <tr>
                <td data-label="Account">Rajesh</td>
                <td data-label="Due Date">98745632102</td>
                <td data-label="Amount">03/10/2021</td>
                <td data-label="Period">1234</td>
                <td data-label="CheckIn">
                  <button className="checkin-button">CheckIn</button>
                </td>
              </tr>
              <tr>
                <td data-label="Account">Rajesh</td>
                <td data-label="Due Date">98745632102</td>
                <td data-label="Amount">03/10/2021</td>
                <td data-label="Period">1234</td>
                <td data-label="CheckIn">
                  <button className="checkin-button">CheckIn</button>
                </td>
              </tr>
            </tbody>
          </table> */}
      </div>
    </div>
    // </div>
  );
}

export default ArrivalList;
