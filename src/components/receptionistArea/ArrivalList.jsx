import React from 'react';
import '../../css/ArrivalList.css';


function ArrivalList() {
    return (
        <div className="arrivallist">
           <table>
  <caption>Arrivals List</caption>
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
      <td data-label="CheckIn"><button className="checkin-button">CheckIn</button></td>
    </tr>
    <tr>
      <td data-label="Account">Rajesh</td>
      <td data-label="Due Date">98745632102</td>
      <td data-label="Amount">03/10/2021</td>
      <td data-label="Period">1234</td>
      <td data-label="CheckIn"><button className="checkin-button">CheckIn</button></td>
    </tr>
    <tr>
      <td data-label="Account">Rajesh</td>
      <td data-label="Due Date">98745632102</td>
      <td data-label="Amount">03/10/2021</td>
      <td data-label="Period">1234</td>
      <td data-label="CheckIn"><button className="checkin-button">CheckIn</button></td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default ArrivalList
