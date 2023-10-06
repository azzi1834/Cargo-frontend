import React from "react";
import transportation from "./../../images/ocean_transport.jpeg";
import maerskFlow from "./../../images/maersk_flow.jpeg";
import supplyChain from "./../../images/supplyChain.jpeg";
import "./../../styling/App.css";
import { Link } from "react-router-dom";
import MyNavbar from "../MyNavbar";

export default function CompleteAccount() {
  return (
    <>
      <MyNavbar />
      <div className="container">
        <div className="my-5">
          <h1>Complete your account</h1>
        </div>
        <div className="row">
          <p>
            Please choose the Transportation Services option below, unless you
            have a contract that includes Maersk Flow or Supply Chain
            Management.
          </p>
          <div className="col-md-4">
            <div className="check">
              <div className="card cards-complete-account">
                <div className="transport-services-cards h-100">
                  <img
                    src={transportation}
                    alt="transportation"
                    className="cards-complete-account-img"
                  />
                </div>
                <div className="card-body">
                  <div className="card-title">
                    <h2>API Solutions</h2>
                  </div>
                  <p className="card-text ">
                    For businesses of all sizes. Book, track and manage
                    integrated logistics services including: ocean shipping,
                    inland transportation, air freight, less-than-container load
                    (LCL), customs services, cargo and container protection.
                  </p>
                  <div>
                    <Link
                      to={"/groups/new-customer"}
                      className="btn btn-primary card-button"
                    >
                      Continue
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="check">
              <div className="card cards-complete-account">
                <div className="transport-services-cards h-100">
                  <img
                    src={maerskFlow}
                    alt="maerskFlow"
                    className="cards-complete-account-img"
                  />
                </div>
                <div className="card-body">
                  <div className="card-title">
                    <h2>Maersk Flow</h2>
                  </div>
                  <p className="card-text ">
                    A digital product designed to empower supply chain
                    professionals to manage and improve their supply chain
                    operations through better control and visibility.
                  </p>
                  <div>
                    <button className="btn btn-primary card-button">
                      Request Access
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="check">
              <div className="card cards-complete-account">
                <div className="transport-services-cards h-100">
                  <img
                    src={supplyChain}
                    alt="supplyChain"
                    className="cards-complete-account-img"
                  />
                </div>
                <div className="card-body">
                  <div className="card-title">
                    <h2>Supply Chain Management</h2>
                  </div>
                  <p className="card-text ">
                    A supply chain management solution for larger businesses
                    with complex supply chains to thrive in ever-changing
                    markets.
                  </p>
                  <div>
                    <button className="btn btn-primary card-button">
                      Request Access
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
