import React from "react";
import apiSolutions from "./../../images/Prices/apiSolutions.svg";
import captainPeter from "./../../images/Prices/captain-peter (1).svg";
import FavAndLearnmore from "./FavAndLearnmore";
import edi from "./../../images/Prices/edi.svg";
import co2 from "./../../images/Prices/co2.svg";
import TransportationServices from "./TransportationServices";

export default function DigitalServices() {
  return (
    <div>
      <div className="container">
        <p className="mt-4">FEATURED</p>
        <div className="row gx-0">
          <div className="col-sm-8">
            <h5>Digital services</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="check">
              <div className="card cards-services h-100 ">
                <img
                  className="card-img-top corousel-img"
                  src={apiSolutions}
                  alt="apiSolutions"
                />
                <div className="card-body ">
                  <h5 className="card-title">API Solutions</h5>
                  <p className="card-text">
                    API Solutions are the future of data integrations and are
                    capable of secure, fast data transmissions that can be used
                    to automatically update your information in real-time.
                  </p>
                  <div className="card-footer margin-auto border-0">
                    <FavAndLearnmore btnName={"Get Access"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="check">
              <div className="card cards-services h-100 ">
                <img
                  className="card-img-top corousel-img"
                  src={captainPeter}
                  alt="captainPeter"
                />
                <div className="card-body ">
                  <h5 className="card-title">Captain Peter™</h5>
                  <p className="card-text">
                    Based on the advantages of our Remote Container Management
                    technology, Captain Peter™ takes care of everyone shipping
                    refrigerated or frozen cargo.
                  </p>
                  <p>
                    From <strong>USD</strong>{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "30px",
                        color: "black",
                      }}
                    >
                      50*
                    </span>{" "}
                    / container
                  </p>
                  <div className="card-footer border-0 margin-auto">
                    <FavAndLearnmore btnName={"Get Access"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4">POPULAR</p>
        <div className="row gx-0">
          <div className="col-sm-8">
            <h5>Popular in Digital services</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="check">
              <div className="card cards-services">
                <div className="transport-services-cards">
                  <img src={edi} alt="edi" />
                  <h6>EDI Solutions</h6>
                </div>
                <div className="card-body ">
                  <p className="card-text">
                    With Maersk’s Electronic Data Interchange (EDI) your
                    paperwork will be reduced and your business and
                    communication with us become faster.
                  </p>
                  <div className="card-footer border-0">
                    <FavAndLearnmore btnName={"Get Access"} />
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="check">
              <div className="card cards-services">
                <div className="transport-services-cards">
                  <img src={co2} alt="co2" />
                  <h6>Depot Services</h6>
                </div>
                <div className="card-body ">
                  <p className="card-text">
                    Container depots are essential nodes that act as key
                    connectors expediting the import and export of your cargo.
                  </p>

                  <FavAndLearnmore btnName={"Get Access"} />
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div>
          <TransportationServices />
        </div>
      </div>
    </div>
  );
}
