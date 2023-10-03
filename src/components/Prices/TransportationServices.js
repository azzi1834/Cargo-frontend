import React, { useState } from "react";
import FavAndLearnmore from "./FavAndLearnmore";
import oceanTransport from "./../../images/Prices/ocean-transport.svg";
import inlandService from "./../../images/Prices/inland-services.svg";
import lcl from "./../../images/Prices/lclService.svg";
import fourPL from "./../../images/Prices/4pl.svg";
import bookingService from "./../../images/Prices/booking-services.svg";
import coldchainlogistics from "./../../images/Prices/ccl.svg";
import apiSolution from "./../../images/Prices/apisolution.svg";
import captainPeter from "./../../images/Prices/captain-peter.svg";
import ediSolution from "./../../images/Prices/edi.svg";

export default function TransportationServices() {
  const [scroll, setScroll] = useState("down");
  const [activeForm, setActiveForm] = useState("transportation");
  const handleFormChange = (formName) => {
    setActiveForm(formName);
  };
  const renderForm = () => {
    switch (activeForm) {
      case "transportation":
        return (
          <div className="main">
            <div>
              <div className="row gx-0 mt-4">
                <div className="col-sm-1 card-services-img">
                  <img
                    src={oceanTransport}
                    alt="ocean Transport"
                    className=""
                  />
                </div>
                <div className="col-sm-8">
                  <h5>Ocean and Maersk Spot</h5>
                  <p>
                    Book your Ocean & Inland shipments online at fixed container
                    shipping prices and with a loading guarantee to know when
                    they will arrive.
                  </p>
                </div>
                <div className="col-sm-3">
                  <FavAndLearnmore btnName={"Instant prices"} />
                </div>
              </div>
              <hr />

              <div className="row gx-0 mt-4">
                <div className="col-sm-1 card-services-img">
                  <img src={inlandService} alt="ocean Transport" className="" />
                </div>
                <div className="col-sm-8">
                  <h5>Inland container shipping prices</h5>
                  <p>
                    Use our inland container shipping price look-up feature to
                    find inland container rates online that are already included
                    in your existing contract or look up our tariff rates.
                  </p>
                </div>
                <div className="col-sm-3">
                  <FavAndLearnmore btnName={"Instant prices"} />
                </div>
              </div>
              <hr />
              <div className="row gx-0 mt-4">
                <div className="col-sm-1 card-services-img">
                  <img src={lcl} alt="ocean Transport" className="" />
                </div>
                <div className="col-sm-8">
                  <h5>Less-Than-Container Load (LCL)</h5>
                  <p>
                    With Maersk Less-Than-Container Load you have the
                    flexibility to ship small amounts of cargo quickly based on
                    your needs.
                  </p>
                </div>
                <div className="col-sm-3">
                  <FavAndLearnmore btnName={"Instant prices"} />
                </div>
              </div>
            </div>
            <hr />
            <div className="my-4 scroll-down-btn-div ">
              <button className="scroll-down-btn">
                <span>
                  View all <i class="bi bi-arrow-down"></i>
                </span>
              </button>
            </div>
            {/* <div className="my-4 scroll-down-btn-div ">
          <button className="scroll-down-btn">
            <span>
              View all <i class="bi bi-arrow-up"></i>
            </span>
          </button>
        </div> */}
          </div>
        );
      case "supplyChain":
        return (
          <div className="main">
            <div>
              <div className="row gx-0 mt-4">
                <div className="col-sm-1 card-services-img">
                  <img src={fourPL} alt="fourPL" className="" />
                </div>
                <div className="col-sm-8">
                  <h5>4PL Logistics Solutions</h5>
                  <p>
                    Our 4PL experts handle and optimise your end-to-end supply
                    chain.
                  </p>
                </div>
                <div className="col-sm-3">
                  <FavAndLearnmore btnName={"Instant prices"} />
                </div>
              </div>
              <hr />

              <div className="row gx-0 mt-4">
                <div className="col-sm-1 card-services-img">
                  <img src={bookingService} alt="bookingService" className="" />
                </div>
                <div className="col-sm-8">
                  <h5>Booking Services</h5>
                  <p>
                    Maersk Booking Services offers visibility and a single point
                    of contact to manage your day-to-day bookings and
                    communication with carriers and suppliers
                  </p>
                </div>
                <div className="col-sm-3">
                  <FavAndLearnmore btnName={"Instant prices"} />
                </div>
              </div>
              <hr />
              <div className="row gx-0 mt-4">
                <div className="col-sm-1 card-services-img">
                  <img
                    src={coldchainlogistics}
                    alt="coldchainlogistics"
                    className=""
                  />
                </div>
                <div className="col-sm-8">
                  <h5>Cold Chain Logistics</h5>
                  <p>
                    End to end temperature controlled supply chain for your
                    sensitive cargo.
                  </p>
                </div>
                <div className="col-sm-3">
                  <FavAndLearnmore btnName={"Instant prices"} />
                </div>
              </div>
            </div>
            <hr />
            <div className="my-4 scroll-down-btn-div ">
              <button className="scroll-down-btn">
                <span>
                  View all <i class="bi bi-arrow-down"></i>
                </span>
              </button>
            </div>
            {/* <div className="my-4 scroll-down-btn-div ">
          <button className="scroll-down-btn">
            <span>
              View all <i class="bi bi-arrow-up"></i>
            </span>
          </button>
        </div> */}
          </div>
        );
      case "digitalServices":
        return (
          <div className="main">
            <div>
              <div className="row gx-0 mt-4">
                <div className="col-sm-1 card-services-img">
                  <img src={apiSolution} alt="apiSolution" className="" />
                </div>
                <div className="col-sm-8">
                  <h5>API Solutions</h5>
                  <p>
                    API Solutions are the future of data integrations and are
                    capable of secure, fast data transmissions that can be used
                    to automatically update your information in real-time.
                  </p>
                </div>
                <div className="col-sm-3">
                  <FavAndLearnmore btnName={"Instant prices"} />
                </div>
              </div>
              <hr />

              <div className="row gx-0 mt-4">
                <div className="col-sm-1 card-services-img">
                  <img src={captainPeter} alt="captainPeter" className="" />
                </div>
                <div className="col-sm-8">
                  <h5>Captain Peter™</h5>
                  <p>
                    Based on the advantages of our Remote Container Management
                    technology, Captain Peter™ takes care of everyone shipping
                    refrigerated or frozen cargo.
                  </p>
                </div>
                <div className="col-sm-3">
                  <FavAndLearnmore btnName={"Instant prices"} />
                </div>
              </div>
              <hr />
              <div className="row gx-0 mt-4">
                <div className="col-sm-1 card-services-img">
                  <img src={ediSolution} alt="ediSolution" className="" />
                </div>
                <div className="col-sm-8">
                  <h5>EDI Solutions</h5>
                  <p>
                    With Maersk’s Electronic Data Interchange (EDI) your
                    paperwork will be reduced and your business and
                    communication with us become faster.
                  </p>
                </div>
                <div className="col-sm-3">
                  <FavAndLearnmore btnName={"Instant prices"} />
                </div>
              </div>
            </div>
            <hr />
            <div className="my-4 scroll-down-btn-div ">
              <button className="scroll-down-btn">
                <span>
                  View all <i class="bi bi-arrow-down"></i>
                </span>
              </button>
            </div>
            {/* <div className="my-4 scroll-down-btn-div ">
          <button className="scroll-down-btn">
            <span>
              View all <i class="bi bi-arrow-up"></i>
            </span>
          </button>
        </div> */}
          </div>
        );
      default:
        return (
          <div className="main">
            <div>
              <div className="row gx-0 mt-4">
                <div className="col-sm-1 card-services-img">
                  <img
                    src={oceanTransport}
                    alt="ocean Transport"
                    className=""
                  />
                </div>
                <div className="col-sm-8">
                  <h5>Ocean and Maersk Spot</h5>
                  <p>
                    Book your Ocean & Inland shipments online at fixed container
                    shipping prices and with a loading guarantee to know when
                    they will arrive.
                  </p>
                </div>
                <div className="col-sm-3">
                  <FavAndLearnmore btnName={"Instant prices"} />
                </div>
              </div>
              <hr />

              <div className="row gx-0 mt-4">
                <div className="col-sm-1 card-services-img">
                  <img src={inlandService} alt="ocean Transport" className="" />
                </div>
                <div className="col-sm-8">
                  <h5>Inland container shipping prices</h5>
                  <p>
                    Use our inland container shipping price look-up feature to
                    find inland container rates online that are already included
                    in your existing contract or look up our tariff rates.
                  </p>
                </div>
                <div className="col-sm-3">
                  <FavAndLearnmore btnName={"Instant prices"} />
                </div>
              </div>
              <hr />
              <div className="row gx-0 mt-4">
                <div className="col-sm-1 card-services-img">
                  <img src={lcl} alt="ocean Transport" className="" />
                </div>
                <div className="col-sm-8">
                  <h5>Less-Than-Container Load (LCL)</h5>
                  <p>
                    With Maersk Less-Than-Container Load you have the
                    flexibility to ship small amounts of cargo quickly based on
                    your needs.
                  </p>
                </div>
                <div className="col-sm-3">
                  <FavAndLearnmore btnName={"Instant prices"} />
                </div>
              </div>
            </div>
            <hr />
            <div className="my-4 scroll-down-btn-div ">
              <button className="scroll-down-btn">
                <span>
                  View all <i class="bi bi-arrow-down"></i>
                </span>
              </button>
            </div>
            {/* <div className="my-4 scroll-down-btn-div ">
      <button className="scroll-down-btn">
        <span>
          View all <i class="bi bi-arrow-up"></i>
        </span>
      </button>
    </div> */}
          </div>
        );
    }
  };
  return (
    <>
      <p className="mt-4">ALL SERVICES</p>
      <h5 className="col-sm-8">All Transportation services</h5>
      <div className="transport-service-options">
        <div
          id="services-options"
          className={` ${activeForm === "transportation" ? "active" : ""}`}
          onClick={() => handleFormChange("transportation")}
        >
          Transportation services
        </div>
        <div
          id="services-options"
          className={` ${activeForm === "supplyChain" ? "active" : ""}`}
          onClick={() => handleFormChange("supplyChain")}
        >
          Supply chain & logistics
        </div>
        <div
          id="services-options"
          className={` ${activeForm === "digitalServices" ? "active" : ""}`}
          onClick={() => handleFormChange("digitalServices")}
        >
          Digital services
        </div>
      </div>
      <div className="my-2">{renderForm()}</div>
    </>
  );
}
