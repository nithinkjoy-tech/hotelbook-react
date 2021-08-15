import React from "react";
import "../../css/OverView.css";
import Sidebar from "./Sidebar";

function OverView() {
  return (
    <div className="page-top">
        <div>
      <Sidebar />
        </div>
      <div className="dashboard">
        <div className="overview">
          <h2 className="overview-title">Over View</h2>
          <div className="overview-contents-left">
            <div className="overview-contents">
              <div className="overview-card">
                <a href="/reception/dashboard/arrivals">
                  <h4 className="card-title">Arrivals</h4>
                  <h1 className="arrival-num">34</h1>
                </a>
                <h4 className="arrived">24 Arrived</h4>
              </div>
              <div className="overview-card">
                <h4 className="card-title">Occupancy</h4>
                <h1 className="arrival-num">20</h1>
                <h4 className="arrived">40/60 Occupied</h4>
              </div>
              <div className="overview-card">
                <h4 className="card-title">Arrivals</h4>
                <h1 className="arrival-num">34</h1>
                <h4 className="arrived">24 Arrived</h4>
              </div>
              <div className="overview-card">
                <h4 className="card-title">Arrivals</h4>
                <h1 className="arrival-num">34</h1>
                <h4 className="arrived">24 Arrived</h4>
              </div>
              <div className="overview-card">
                <h4 className="card-title">Arrivals</h4>
                <h1 className="arrival-num">34</h1>
                <h4 className="arrived">24 Arrived</h4>
              </div>
              <div className="overview-card">
                <h4 className="card-title">Arrivals</h4>
                <h1 className="arrival-num">34</h1>
                <h4 className="arrived">24 Arrived</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;
