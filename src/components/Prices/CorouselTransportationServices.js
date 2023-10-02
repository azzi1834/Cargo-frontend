import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import oversizedCargo from "./../../images/Prices/oversized-cargo.svg";
import lcl from "./../../images/Prices/lcl.svg";
import landContainer from "./../../images/Prices/inland-price-lookup.svg";
import oceanRequest from "./../../images/Prices/shipping-quote-with add-ons.svg";

export default function CorouselTransportationServices() {
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
    <div className="container">
      <div className="row gx-0">
        <p className="mt-4">POPULAR</p>
        <h5 className="col-sm-8">Popular in Transportation services</h5>
        <div className="col-sm-4 d-flex flex-row-reverse">View all</div>
      </div>
      <div className="carousel-container my-3">
        <Slider {...settings}>
          <div className="card cards-services">
            <div className="transport-services-cards">
              <img src={oversizedCargo} alt="oversizedCargo" />
              <h6>Oversized cargo shipping prices</h6>
            </div>
            <div className="card-body">
              <h5 className="card-title">Ocean and Maersk Spot</h5>
              <p className="card-text">
                Book your Ocean & Inland shipments online at fixed container
                shipping prices and with a loading guarantee to know when they
                will arrive.
              </p>
              <a href="#" className="btn btn-primary">
                Instant Prices
              </a>
            </div>
          </div>

          <div className="card cards-services">
            <div className="transport-services-cards">
              <img src={oversizedCargo} alt="oversizedCargo" />
              <h6>Oversized cargo shipping prices</h6>
            </div>
            <div className="card-body">
              <h5 className="card-title">Less-Than-Container Load (LCL)</h5>
              <p className="card-text">
                With Maersk Less-Than-Container Load you have the flexibility to
                ship small amounts of cargo quickly based on your needs.
              </p>
              <a href="#" className="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>

          <div className="card cards-services">
            <div className="transport-services-cards">
              <img src={oversizedCargo} alt="oversizedCargo" />
              <h6>Oversized cargo shipping prices</h6>
            </div>
            <div className="card-body">
              <h5 className="card-title">Inland container shipping prices</h5>
              <p className="card-text">
                Use our inland container shipping price look-up feature to find
                inland container rates online that are already included in your
                existing contract or look up our tariff rates.
              </p>
              <a href="#" className="btn btn-primary">
                Instant Prices
              </a>
            </div>
          </div>

          <div className="card cards-services">
            <div className="transport-services-cards">
              <img src={oversizedCargo} alt="oversizedCargo" />
              <h6 >Oversized cargo shipping prices</h6>
            </div>
            <div className="card-body ">
              <h5 className="card-title">Ocean quote request</h5>
              <p className="card-text">
                Request a freight quote, valid up to 90 days for standard and
                oversized ocean shipments.
              </p>
              <Link href="#" className="btn btn-primary mt-auto">
                Get a quote
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
