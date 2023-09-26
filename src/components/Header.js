import React from "react";
import MyNavbar from "./MyNavbar";
import "../styling/App.css";
import TrackingForm from "./TrackingForm";
import Feedback from "./Feedback";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <MyNavbar />
      <div className="header-details container">
        <div className="row" style={{ height: "350px" }}>
          <div className="col-md-8">
            <h5 className="header-title" style={{ fontFamily: "sans-serif" }}>
              Propelled by ambition and Green methanol
            </h5>
            <p className="header-description">
              Learn more about our journey towards net zero by 2040.
            </p>
            <Link to={"/all-the-way-to-zero"}>
              <button className="btn bg-light my-2">Learn More</button>
            </Link>
          </div>
          <div className="col-md-4">
            <TrackingForm />
          </div>
        </div>
      </div>
      <div className="d-flex flex-row-reverse" style={{}}>
        <Feedback />
      </div>
    </div>
  );
}
