import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import oceanMaerskSpot from "./../../images/Prices/ocean-and-maersk-spot.svg";
import lcl from "./../../images/Prices/lcl.svg";
import landContainer from "./../../images/Prices/inland-price-lookup.svg";
import oceanRequest from "./../../images/Prices/shipping-quote-with add-ons.svg";
import FavAndLearnmore from "./FavAndLearnmore";
export default function CorouselOverview() {
  const [toggleView, setToggleView] = useState("grid");
  const [sideView, setSideView] = useState("normal");
  const handleSideView = () => {
    setSideView(sideView === "normal" ? "wide" : "normal");
  };
  const handleToggleView = () => {
    setToggleView(toggleView === "grid" ? "list" : "grid");
  };
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
    <>
      <div className="container">
        <p className="mt-4">FEATURED</p>
        <div className="row gx-0">
          <div className="col-sm-8">
            <h5>
              Container Shipping Rates for Transportation and Integrated
              Logistics Services
            </h5>
          </div>
          <div className="col-sm-4 d-flex flex-row-reverse">
            <div className="mx-1 view-icons">
              {sideView === "normal" ? (
                <i
                  class="bi bi-arrows-angle-expand"
                  onClick={handleSideView}
                ></i>
              ) : (
                <i
                  class="bi bi-arrows-angle-contract"
                  onClick={handleSideView}
                ></i>
              )}
            </div>
            <div className="mx-1 search-icon">
              {toggleView === "grid" ? (
                <div>
                  <i class="bi bi-grid" onClick={handleToggleView}></i>
                </div>
              ) : (
                <div>
                  <i class="bi bi-list-task" onClick={handleToggleView}></i>
                </div>
              )}
            </div>

            <div className="mx-1 view-icons">
              <i class="bi bi-search"></i>
            </div>
          </div>
        </div>
        <div className="carousel-container card-container my-3">
          <Slider {...settings}>
            <div className="check">
              <div className="card cards-services">
                <img
                  className="card-img-top corousel-img"
                  src={oceanMaerskSpot}
                  alt="oceanMaerskSpot"
                />
                <div className="card-body ">
                  <h5 className="card-title">Ocean and Maersk Spot</h5>
                  <p className="card-text">
                    Book your Ocean & Inland shipments online at fixed container
                    shipping prices and with a loading guarantee to know when
                    they will arrive.
                  </p>

                  <FavAndLearnmore btnName={"Instant Prices"} />
                </div>
              </div>
            </div>

            <div className="check">
              <div className="card cards-services">
                <img className="card-img-top" src={lcl} alt="lcl" />
                <div className="card-body">
                  <h5 className="card-title">Less-Than-Container Load (LCL)</h5>
                  <p className="card-text">
                    With Maersk Less-Than-Container Load you have the
                    flexibility to ship small amounts of cargo quickly based on
                    your needs.
                  </p>
                  <FavAndLearnmore btnName={"Book Now"} />
                </div>
              </div>
            </div>

            <div className="check">
              <div className="card cards-services">
                <img
                  className="card-img-top"
                  src={landContainer}
                  alt="landContainer"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Inland container shipping prices
                  </h5>
                  <p className="card-text">
                    Use our inland container shipping price look-up feature to
                    find inland container rates online that are already included
                    in your existing contract or look up our tariff rates.
                  </p>
                  <FavAndLearnmore btnName={"Instant Prices"} />
                </div>
              </div>
            </div>

            <div className="check">
              <div className="card cards-services">
                <img
                  className="card-img-top"
                  src={oceanRequest}
                  alt="oceanRequest"
                />
                <div className="card-body ">
                  <h5 className="card-title">Ocean quote request</h5>
                  <p className="card-text">
                    Request a freight quote, valid up to 90 days for standard
                    and oversized ocean shipments.
                  </p>
                  <FavAndLearnmore btnName={"Get a quote"} />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
