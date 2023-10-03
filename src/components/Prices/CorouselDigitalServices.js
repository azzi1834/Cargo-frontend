import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavAndLearnmore from "./FavAndLearnmore";
import captainPeter from "./../../images/Prices/captain-peter.svg";
import apiSolution from "./../../images/Prices/apisolution.svg";
import ediSolution from "./../../images/Prices/edi.svg";
import emissionDashboard from "./../../images/Prices/co2.svg";
export default function CorouselDigitalServices() {
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
        <h5 className="col-sm-8">Popular in Digital services</h5>
        <div className="col-sm-4 d-flex flex-row-reverse">
          <i className="bi bi-arrow-right ms-1"></i> View all
        </div>
      </div>
      <div className="carousel-container my-3">
        <Slider {...settings}>
          <div className="card cards-services">
            <div className="transport-services-cards">
              <img src={apiSolution} alt="apiSolution" />
              <h6>API Solutions</h6>
            </div>
            <div className="card-body">
              <p className="card-text ">
                API Solutions are the future of data integrations and are
                capable of secure, fast data transmissions that can be used to
                automatically update your information in real-time.
              </p>

              <FavAndLearnmore btnName={"Instant Prices"} />
            </div>
          </div>

          <div className="card cards-services">
            <div className="transport-services-cards">
              <img src={captainPeter} alt="captainPeter" />
              <h6>Captain Peter™</h6>
            </div>
            <div className="card-body">
              <p className="card-text">
                Based on the advantages of our Remote Container Management
                technology, Captain Peter™ takes care of everyone shipping
                refrigerated or frozen cargo.
              </p>

              <FavAndLearnmore btnName={"Instant Prices"} />
            </div>
          </div>

          <div className="card cards-services">
            <div className="transport-services-cards">
              <img src={ediSolution} alt="ediSolution" />
              <h6>EDI Solutions</h6>
            </div>
            <div className="card-body ">
              <p className="card-text">
                With Maersk’s Electronic Data Interchange (EDI) your paperwork
                will be reduced and your business and communication with us
                become faster.
              </p>

              <FavAndLearnmore btnName={"Contact us"} />
            </div>
          </div>

          <div className="card cards-services">
            <div className="transport-services-cards">
              <img src={emissionDashboard} alt="emissionDashboard" />
              <h6>Emissions Dashboard</h6>
            </div>
            <div className="card-body ">
              <p className="card-text">
                Receive emissions reporting and optimisation insights across all
                carriers and modes.
              </p>

              <FavAndLearnmore btnName={"Instant Prices"} />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
