import React from "react";

function ListPropertyWelcomePage() {
  return (
    <center>
      <div style={{marginTop: "80px", marginBottom: "40px"}}>
        <a href="/renter/signin" className="btn btn-primary mr-6">
          Signin
        </a>
        <a href="/renter/signup" className="btn btn-secondary">
          SignUp
        </a>
      </div>
    </center>
  );
}

export default ListPropertyWelcomePage;
