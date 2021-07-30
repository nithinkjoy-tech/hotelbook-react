import React from "react";

function Reviews() {
  return (
    <div style={{backgroundColor: "#F4F4F4"}}>
      <h1 style={{textAlign: "center",marginTop:"20px"}}>Reviews</h1>
      <div style={{margin: "auto", width: "85%", padding: "15px 0"}}>
        <div className="card" style={{margin: "10px 0"}}>
          <div className="card-body">
            <div className="row__card">
              <h5 className="card-title col__card badge badge-info" style={{marginLeft: "0",fontSize: "18px"}}>
                Name
              </h5>
              <h5 className="card-title col__card badge badge-primary" style={{fontSize: "18px"}}>Room type</h5>
              <h5 className="card-title col__card badge badge-secondary" style={{fontSize: "18px"}}>Number of days</h5>
              <h5 className="card-title col__card badge badge-success" style={{fontSize: "18px"}}>Reviewed date</h5>
            </div>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card" style={{margin: "10px 0"}}>
          <div className="card-body">
            <div className="row__card">
              <h5 className="card-title col__card badge badge-info" style={{marginLeft: "0",fontSize: "18px"}}>
                Name
              </h5>
              <h5 className="card-title col__card badge badge-primary" style={{fontSize: "18px"}}>Room type</h5>
              <h5 className="card-title col__card badge badge-secondary" style={{fontSize: "18px"}}>Number of days</h5>
              <h5 className="card-title col__card badge badge-success" style={{fontSize: "18px"}}>Reviewed date</h5>
            </div>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
