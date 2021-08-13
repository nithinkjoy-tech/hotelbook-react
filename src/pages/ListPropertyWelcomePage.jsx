import React from "react";
import {Link} from "react-router-dom";

function ListPropertyWelcomePage() {
  return (
    <center>
      <div style={{marginTop: "80px", marginBottom: "40px"}}>
        <Link to="/renter/signin">
          <span className="btn btn-primary mr-6">SignIn</span>
        </Link>
        <Link to="/renter/signup">
          <span className="btn btn-secondary">SignUp</span>
        </Link>
      </div>
    </center>
  );
}

export default ListPropertyWelcomePage;
