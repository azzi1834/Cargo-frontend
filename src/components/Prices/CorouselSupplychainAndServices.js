import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CorouselCard from "./CorouselCard";
import FavAndLearnmore from "./FavAndLearnmore";
import coldChainLogistics from "./../../images/Prices/coldchainlogistics.svg";
import customServices from "./../../images/Prices/customservices.svg";
import warehousing from "./../../images/Prices/warehouse.svg";
import depotServices from "./../../images/Prices/depot-services.svg";
import ecommerceLogistics from "./../../images/Prices/ecommerce-logistics.svg";
import maerskFlow from "./../../images/Prices/maersk-flow.svg";
import supplychainManagement from "./../../images/Prices/depot-services.svg";

export default function CorouselSupplychainAndServices() {
  const cardData = [
    {
      imgName: coldChainLogistics,
      cardTitle: "Cold Chain Logistics",
      cardText:
        "End to end temperature controlled supply chain for your sensitive cargo.",
      btnName: "Instant Prices",
    },
    {
      imgName: customServices,
      cardTitle: "Customs Services",
      cardText:
        "Our Customs Services can help every importer and exporter that needs to have customs clearance and expedite this process at both origin and destination.",
      btnName: "Instant Prices",
    },
    {
      imgName: warehousing,
      cardTitle: "Warehousing and Distribution",
      cardText: "This is card 3.",
      btnName: "Instant Prices",
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <div className="container">
      <div className="row gx-0">
        <p className="mt-4">POPULAR</p>
        <h5 className="col-sm-8">Popular in Supply chain & logistics</h5>
        <div className="col-sm-4 d-flex flex-row-reverse">
          <i className="bi bi-arrow-right ms-1"></i> View all
        </div>
      </div>
      <div className="carousel-container my-3">
        <Slider {...settings}>
          {/* {cardData.map((card, index) => (
            <CorouselCard
              key={index}
              imgName={card.imgName}
              title={card.cardTitle}
              text={card.cardText}
            />
          ))} */}
          <div className="check">
            <div className="card cards-services">
              <div className="transport-services-cards">
                <img src={coldChainLogistics} alt="coldChainLogistics" />
                <h6>Cold Chain Logistics</h6>
              </div>
              <div className="card-body">
                <p className="card-text">
                  End to end temperature controlled supply chain for your
                  sensitive cargo.
                </p>

                <FavAndLearnmore btnName={"Instant Prices"} />
              </div>
            </div>
          </div>

          <div className="check">
            <div className="card cards-services">
              <div className="transport-services-cards">
                <img src={customServices} alt="customServices" />
                <h6>Customs Services</h6>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Our Customs Services can help every importer and exporter that
                  needs to have customs clearance and expedite this process at
                  both origin and destination.
                </p>

                <FavAndLearnmore btnName={"Instant Prices"} />
              </div>
            </div>
          </div>

          <div className="check">
            <div className="card cards-services">
              <div className="transport-services-cards">
                <img src={warehousing} alt="warehousing" />
                <h6>Warehousing and Distribution</h6>
              </div>
              <div className="card-body ">
                <p className="card-text">
                  Maersk takes care of your end-to-end warehousing and
                  distribution logistics, from our strategic network of storage
                  facilities; capable to fulfill your customer’s demands.
                </p>

                <FavAndLearnmore btnName={"Contact us"} />
              </div>
            </div>
          </div>

          <div className="check">
            <div className="card cards-services">
              <div className="transport-services-cards">
                <img src={depotServices} alt="depotServices" />
                <h6>Depot Services</h6>
              </div>
              <div className="card-body ">
                <p className="card-text">
                  Container depots are essential nodes that act as key
                  connectors expediting the import and export of your cargo.
                </p>

                <FavAndLearnmore btnName={"Instant Prices"} />
              </div>
            </div>
          </div>

          <div className="check">
            <div className="card cards-services">
              <div className="transport-services-cards">
                <img src={ecommerceLogistics} alt="ecommerceLogistics" />
                <h6>E-Commerce Logistics</h6>
              </div>
              <div className="card-body ">
                <p className="card-text">
                  Optimise your end-to-end e-commerce logistics, including
                  e-fulfilment, last-mile and cross-border delivery.
                </p>

                <FavAndLearnmore btnName={"Get a quote"} />
              </div>
            </div>
          </div>

          <div className="check">
            <div className="card cards-services">
              <div className="transport-services-cards">
                <img src={maerskFlow} alt="maerskFlow" />
                <h6>Maersk Flow</h6>
              </div>
              <div className="card-body ">
                <p className="card-text">
                  Maersk Flow is a self-service digital supply chain solution.
                  With visibility into your supply chain operations, you can
                  take the right action at the right time and be in control of
                  your logistics operations.
                </p>

                <FavAndLearnmore btnName={"Book now"} />
              </div>
            </div>
          </div>

          <div className="check">
            <div className="card cards-services">
              <div className="transport-services-cards">
                <img src={supplychainManagement} alt="supplychainManagement" />
                <h6>Supply Chain Management</h6>
              </div>
              <div className="card-body">
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
    </div>
  );
}
