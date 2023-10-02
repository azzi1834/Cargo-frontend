import React, { useState } from "react";
import newUser from "./../../images/newUser.svg";
import MyNavbar from "../MyNavbar";
import NewLogisticsUser from "../NewLogisticsUser";
import { Link } from "react-router-dom";
import PricesSidebar from "./PricesSidebar";
import PricesNavpage from "./PricesNavpage";
export default function Prices() {
  const [dismiss, setDismiss] = useState(false);

  const handleDismiss = () => {
    setDismiss(true);
  };
  return (
    <>
      <MyNavbar />
      {!dismiss ? (
        <div>
          <div className="row new-to-logistics">
            <div className="col-md-9 d-flex p-2">
              <img src={newUser} alt="New User" />
              <div className="mx-4 mt-3">
                <h5>New to Logistics?</h5>
                <p>
                  Answer a few questions and we’ll give you some personalised
                  recommendations.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <NewLogisticsUser />
              <button
                className="btn btn-primary btn-sm  dismiss"
                onClick={handleDismiss}
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div class="row">
        <div class="col-sm">
          <PricesSidebar />
        </div>
        <div class="col-sm-9">
          <PricesNavpage />
        </div>
      </div>
    </>
  );
}
