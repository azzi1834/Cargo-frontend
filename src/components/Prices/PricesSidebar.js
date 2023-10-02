import React from "react";
import overview from "./../../images/Prices/overview.svg";
import transportationServices from "./../../images/Prices/transportServices.svg";
import supplyChainAndLogistics from "./../../images/Prices/supply-chain-and-logistics.svg";
import digitalServices from "./../../images/Prices/digital-services.svg";
import findLocalOffices from "./../../images/Prices/find-local-offices.svg";
import tariffInquiry from "./../../images/Prices/traffic-inquiry.svg";
import { Link } from "react-router-dom";
export default function PricesSidebar() {
  return (
    <div>
      <div className="d-flex sidebar-item">
        <img src={overview} alt="overview" className="mx-2 text-center" />
        <Link to={"/prices-and-quotes"} className="sidebar-item-heading">
          Overview
        </Link>
      </div>
      <div className="d-flex sidebar-item">
        <img
          src={transportationServices}
          alt="transportationServices"
          className="mx-2 text-center"
        />
        <Link
          to={"/prices-and-quotes/transportation-services"}
          className="sidebar-item-heading"
        >
          Transportation Services
        </Link>
      </div>
      <div className="d-flex sidebar-item">
        <img
          src={supplyChainAndLogistics}
          alt="supplyChainAndLogistics"
          className="mx-2 text-center"
        />
        <Link
          to={"/prices-and-quotes/logistics"}
          className="sidebar-item-heading"
        >
          Supply Chain & Logistics
        </Link>
      </div>
      <div className="d-flex sidebar-item">
        <img
          src={digitalServices}
          alt="digitalServices"
          className="mx-2 text-center"
        />
        <Link
          to={"/prices-and-quotes/digital-services"}
          className="sidebar-item-heading"
        >
          Digital Services
        </Link>
      </div>
      <p
        className="ms-4"
        style={{ fontSize: "13px", color: "rgb(126, 121, 121)" }}
      >
        SUPPORT
      </p>
      <div className="d-flex sidebar-item">
        <img
          src={findLocalOffices}
          alt="findLocalOffices"
          className="mx-2 text-center"
        />
        <Link to={"/local-information"} className="sidebar-item-heading">
          Find Local Offices
        </Link>
      </div>
      <div className="d-flex sidebar-item">
        <img
          src={tariffInquiry}
          alt="tariffInquiry"
          className="mx-2 text-center"
        />
        <Link to={"tariff"} className="sidebar-item-heading">
          Tariff Inquiry
        </Link>
      </div>
    </div>
  );
}
