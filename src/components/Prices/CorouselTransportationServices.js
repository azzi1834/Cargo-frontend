import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import oversizedCargo from "./../../images/Prices/oversized-cargo.svg";
import airFreight from "./../../images/Prices/air-freight.svg";
import contract from "./../../images/Prices/contract.svg";
import inlandDelivery from "./../../images/Prices/inland-delivery.svg";
import cargoInsurance from "./../../images/Prices/cargo-insurance.svg";
import ecoDelivery from "./../../images/Prices/eco-delivery.svg";
import valueProtect from "./../../images/Prices/value-protect.svg";
import FavAndLearnmore from "./FavAndLearnmore";

export default function CorouselTransportationServices() {
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
        <h5 className="col-sm-8">Popular in Transportation services</h5>
        <div className="col-sm-4 d-flex flex-row-reverse">
          <i className="bi bi-arrow-right ms-1"></i>
          View all
        </div>
      </div>
      <div className="carousel-container my-3">
        <Slider {...settings}>
          <div className="check">
            <div className="card cards-services">
              <div className="transport-services-cards">
                <img src={oversizedCargo} alt="oversizedCargo" />
                <h6>Oversized cargo shipping prices</h6>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Book your Ocean & Inland shipments online at fixed container
                  shipping prices and with a loading guarantee to know when they
                  will arrive.
                </p>

                <FavAndLearnmore btnName={"Instant Prices"} />
              </div>
            </div>
          </div>

          <div className="check">
            <div className="card cards-services">
              <div className="transport-services-cards">
                <img src={airFreight} alt="airFreight" />
                <h6>Air Freight</h6>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Maersk Air Freight is fast, frequent, predictable and is a
                  reliable way to respond to supply chain challenges you may
                  face.
                </p>

                <FavAndLearnmore btnName={"Instant Prices"} />
              </div>
            </div>
          </div>

          <div className="check">
            <div className="card cards-services">
              <div className="transport-services-cards">
                <img src={contract} alt="contract" />
                <h6>Maersk Contract</h6>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Maersk Contract products offer reliability and certainty,
                  regarding space availability on our vessels and transportation
                  costs.
                </p>
                <FavAndLearnmore btnName={"Contact us"} />
              </div>
            </div>
          </div>

          <div className="check">
            <div className="card cards-services">
              <div className="transport-services-cards">
                <img src={inlandDelivery} alt="inlandDelivery" />
                <h6>Inland Delivery</h6>
              </div>
              <div className="card-body ">
                <p className="card-text">
                  With Maersk Inland delivery service, you can easily arrange a
                  new pick-up from your supplier’s factory as well as the
                  delivery to your chosen location.
                </p>

                <FavAndLearnmore btnName={"Contact us"} />
              </div>
            </div>
          </div>

          <div className="check">
            <div className="card cards-services">
              <div className="transport-services-cards">
                <img src={cargoInsurance} alt="cargoInsurance" />
                <h6>Cargo Insurance</h6>
              </div>
              <div className="card-body ">
                <p className="card-text">
                  Take no chances. Get comprehensive cover for your cargo
                  through Maersk Cargo Insurance, provided by Zurich Insurance.
                </p>

                <FavAndLearnmore btnName={"Instant Prices"} />
              </div>
            </div>
          </div>

          <div className="check">
            <div className="card cards-services">
              <div className="transport-services-cards">
                <img src={ecoDelivery} alt="ecoDelivery" />
                <h6>ECO Delivery</h6>
              </div>
              <div className="card-body ">
                <p className="card-text">
                  Transport your goods in a more sustainable way. Maersk ECO
                  Delivery offers immediate CO₂ savings and provides you with
                  green fuel as an alternative to fossil fuels.
                </p>

                <FavAndLearnmore btnName={"Get a quote"} />
              </div>
            </div>
          </div>

          <div className="check">
            <div className="card cards-services">
              <div className="transport-services-cards">
                <img
                  src={valueProtect}
                  alt="valueProtect"
                  className="img-fluid"
                />
                <h6>Value Protect</h6>
              </div>
              <div className="card-body ">
                <p className="card-text">
                  A solution to keep your cargo protected from logistics-related
                  risks.
                </p>

                <FavAndLearnmore btnName={"Book now"} />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
