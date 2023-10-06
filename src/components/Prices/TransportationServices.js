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
import shippingQuote from "./../../images/Prices/shipping-quote-with add-ons.svg";

export default function TransportationServices() {
  const [scroll, setScroll] = useState("no");
  const [activeForm, setActiveForm] = useState("transportation");
  const handleFormChange = (formName) => {
    setActiveForm(formName);
  };
  const handleScroll = () => {
    setScroll(scroll === "no" ? "yes" : "no");
  };
  const transportationData = [
    {
      imgName: shippingQuote,
      title: "Ocean quote request",
      text: "Request a freight quote, valid up to 90 days for standard, oversized and Less-than-Container Load (LCL) ocean shipments.",
      btnName: "Get a quote",
    },
    {
      imgName: lcl,
      title: "Less-Than-Container Load (LCL)",
      text: "With Maersk Less-Than-Container Load you have the flexibility to ship small amounts of cargo quickly based on your needs.",
      btnName: "Book now",
    },
    {
      imgName: shippingQuote,
      title: "Air Freight",
      text: "Maersk Air Freight is fast, frequent, predictable and is a reliable way to respond to supply chain challenges you may face.",
      btnName: "Instant prices",
    },
    {
      imgName: shippingQuote,
      title: "Cross Border Rail Transportation",
      text: "As a dedicated service or as part of a multi modal solution, rail offers faster time-to-market than ocean at substantially lower cost than air freight.",
      btnName: "Contact us",
    },
    {
      imgName: shippingQuote,
      title: "Maersk Contract",
      text: "Maersk Contract products offer reliability and certainty, regarding space availability on our vessels and transportation costs.",
      btnName: "Contact us",
    },
    {
      imgName: shippingQuote,
      title: "Inland Delivery",
      text: "With Maersk Inland delivery service, you can easily arrange a new pick-up from your supplier’s factory as well as the delivery to your chosen location.",
      btnName: "Contact us",
    },
    {
      imgName: shippingQuote,
      title: "Cargo Insurance",
      text: "Take no chances. Get comprehensive cover for your cargo through Maersk Cargo Insurance, provided by Zurich Insurance.",
      btnName: "Instant prices",
    },
    {
      imgName: shippingQuote,
      title: "ECO Delivery",
      text: "Transport your goods in a more sustainable way. Maersk ECO Delivery offers immediate CO₂ savings and provides you with green fuel as an alternative to fossil fuels.",
      btnName: "Get a quote",
    },
    {
      imgName: shippingQuote,
      title: "Flex Hub",
      text: "Flex Hub makes it easier to profit from global demand by placing your cargo closer to its final destination and moving it quickly at the right time.",
      btnName: "Contact us",
    },
    {
      imgName: shippingQuote,
      title: "Maersk Accelerate",
      text: "As a priority offering, Maersk Accelerate saves time and hassle across various milestones in your cargo’s journey through a bundle of express solutions.",
      btnName: "Contact us",
    },
    {
      imgName: shippingQuote,
      title: "Truckload transportation",
      text: "Conventional trucking is the fastest mode of inland transport. Truckload transport ensures reliable delivery of your cargo, from start to end.",
      btnName: "Book now",
    },
    {
      imgName: shippingQuote,
      title: "Value Protect",
      text: "A solution to keep your cargo protected from logistics-related risks.",
      btnName: "Book now",
    },
    // {
    //   imgName: shippingQuote,
    //   title: "",
    //   text: "",
    //   btnName: "",
    // },
  ];
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
                  <FavAndLearnmore btnName={"Get Started"} />
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
            {scroll === "no" ? (
              <div className="my-4 scroll-down-btn-div ">
                <button className="scroll-down-btn" onClick={handleScroll}>
                  <span>
                    View all <i class="bi bi-arrow-down"></i>
                  </span>
                </button>
              </div>
            ) : (
              <>
                {transportationData.map((card, index) => (
                  <div key={index} className="row gx-0 mt-4">
                    <div className="col-sm-1 card-services-img">
                      <img
                        src={card.imgName}
                        alt={card.imgName}
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-sm-8">
                      <h5>{card.title}</h5>
                      <p>{card.text}</p>
                    </div>
                    <div className="col-sm-3">
                      <FavAndLearnmore btnName={card.btnName} />
                    </div>
                    <hr />
                  </div>
                ))}
                <div className="my-4 scroll-down-btn-div ">
                  <button className="scroll-down-btn" onClick={handleScroll}>
                    <span>
                      View less <i class="bi bi-arrow-up"></i>
                    </span>
                  </button>
                </div>
              </>
            )}
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
                  <FavAndLearnmore btnName={"Contact us"} />
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
                  <FavAndLearnmore btnName={"Contact us"} />
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
                  <FavAndLearnmore btnName={"Contact us"} />
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
                  <FavAndLearnmore btnName={"Get Access"} />
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
                  <FavAndLearnmore btnName={"Get Access"} />
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
                  <FavAndLearnmore btnName={"Get Access"} />
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
