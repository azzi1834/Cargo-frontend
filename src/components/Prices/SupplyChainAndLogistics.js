import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import customerServices from "./../../images/Prices/customs-services.svg";
import warehousingDistribution from "./../../images/Prices/warehousing-and-distribution.svg";
import eDelivery from "./../../images/Prices/e-delivery.svg";
import eFulfilment from "./../../images/Prices/e-fulfilment.svg";
import SupplyChainManagement from "./../../images/Prices/e-fulfilment.svg";
import FavAndLearnmore from "./FavAndLearnmore";
import CorouselSupplychainAndServices from "./CorouselSupplychainAndServices";
import TransportationServices from "./TransportationServices";
export default function SupplyChainAndLogistics() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="carousel-container card-container my-3">
        <Slider {...settings}>
          <div className="check">
            <div className="card cards-services h-100 ">
              <img
                className="card-img-top corousel-img"
                src={customerServices}
                alt="customerServices"
              />
              <div className="card-body ">
                <h5 className="card-title">Customs Services</h5>
                <p className="card-text">
                  Our Customs Services can help every importer and exporter that
                  needs to have customs clearance and expedite this process at
                  both origin and destination.
                </p>
              </div>
              <div className="card-footer border-0 mt-3">
                <FavAndLearnmore btnName={"Get a quote"} />
              </div>
            </div>
          </div>

          <div className="check">
            <div className="card cards-services">
              <img
                className="card-img-top"
                src={warehousingDistribution}
                alt="warehousingDistribution"
              />
              <div className="card-body">
                <h5 className="card-title">Warehousing and Distribution</h5>
                <p className="card-text">
                  Maersk takes care of your end-to-end warehousing and
                  distribution logistics, from our strategic network of storage
                  facilities; capable to fulfill your customer’s demands.
                </p>
              </div>
              <div className="card-footer border-0 mt-3">
                <FavAndLearnmore btnName={"Contact us"} />
              </div>{" "}
            </div>
          </div>

          <div className="check">
            <div className="card cards-services h-100">
              <img className="card-img-top" src={eDelivery} alt="eDelivery" />
              <div className="card-body">
                <h5 className="card-title">E-Delivery</h5>
                <p className="card-text">
                  Maersk’s geography agnostic delivery product ensures that all
                  your parcel delivery needs are met.
                </p>
              </div>
              <div className="card-footer border-0 mt-auto pt-auto">
                <FavAndLearnmore btnName={"Contact us"} />
              </div>
            </div>
          </div>

          <div className="check">
            <div className="card cards-services">
              <img
                className="card-img-top"
                src={eFulfilment}
                alt="eFulfilment"
              />
              <div className="card-body ">
                <h5 className="card-title">E-Fulfilment</h5>
                <p className="card-text">
                  Maersk’s direct-to-consumer infrastructure sustains your stock
                  flow with a strategically located order fulfilment network.
                </p>
                <FavAndLearnmore btnName={"Contact us"} />
              </div>
            </div>
          </div>
          <div className="check">
            <div className="card cards-services">
              <img
                className="card-img-top"
                src={SupplyChainManagement}
                alt="SupplyChainManagement"
              />
              <div className="card-body ">
                <h5 className="card-title">Supply Chain Management</h5>
                <p className="card-text">
                  Maersk SCM solutions combine shipment data and stakeholder
                  management systems to streamline your logistics end-to-end.
                </p>
                <FavAndLearnmore btnName={"Contact us"} />
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div>
        <CorouselSupplychainAndServices />
      </div>
      <div>
        <TransportationServices />
      </div>
    </div>
  );
}
