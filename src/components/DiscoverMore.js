import React from "react";
import { useDispatch, useSelector } from "react-redux";
import apiSolution from "../images/Prices/apisolution.svg";
import ediSolution from "../images/Prices/edi.svg";
import emissionDashboard from "../images/Prices/co2.svg";
import "../styling/App.css";
export default function DiscoverMore() {
  return (
    <>
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>

      {/* <div className="container">
        <div className="row">
          {cardData.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img
                  src={card.imgName}
                  className="card-img-top"
                  alt={card.cardTitle}
                />
                <div className="card-body">
                  <h5 className="card-title">{card.cardTitle}</h5>
                  <p className="card-text">{card.cardText}</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary">Access</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}
