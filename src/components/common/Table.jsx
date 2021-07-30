import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import "bootstrap/dist/css/bootstrap.css";
import pic1 from "../../images/room1.jpg";
import '../../css/Table.css';

function Table() {
  return (
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
        <tr>
          <td scope="col" className="features">
            <img src={pic1} alt="room image" style={{ width: "30%" }} />
            <div className="features_list">
              <p>Features</p>
              <p>Features</p>
              <p>Features</p>
              <p>Features</p>
              <p>Features</p>
            </div>
          </td>
          <td><div className="persons"><PersonIcon /></div></td>
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
      </tbody>
    </table>
  );
}

export default Table;
