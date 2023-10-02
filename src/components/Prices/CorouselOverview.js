import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import oceanMaerskSpot from "./../../images/Prices/ocean-and-maersk-spot.svg";
import lcl from "./../../images/Prices/lcl.svg";
import landContainer from "./../../images/Prices/inland-price-lookup.svg";
import oceanRequest from "./../../images/Prices/shipping-quote-with add-ons.svg";
import { Link } from "react-router-dom";
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
    slidesToShow: 3, // Display three cards per view
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust the number of slides for different screen sizes if necessary
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
      <p className="mt-4">FEATURED</p>
      <div className="row gx-0">
        <div className="col-sm-8">
          <h5>
            Container Shipping Rates for Transportation and Integrated Logistics
            Services
          </h5>
        </div>
        <div className="col-sm-4 d-flex flex-row-reverse">
          <div
            className="mx-1"
            style={{
              border: "1px solid rgb(126, 121, 121)",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              marginBottom: "auto",
            }}
          >
            {sideView === "normal" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrows-angle-expand"
                viewBox="0 0 16 16"
                onClick={handleSideView}
              >
                <path
                  fill-rule="evenodd"
                  d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrows-angle-contract"
                viewBox="0 0 16 16"
                onClick={handleSideView}
              >
                <path
                  fill-rule="evenodd"
                  d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"
                />
              </svg>
            )}
          </div>
          <div
            className="mx-1"
            style={{
              border: "1px solid rgb(126, 121, 121)",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              marginBottom: "auto",
            }}
          >
            {toggleView === "grid" ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-grid"
                  viewBox="0 0 16 16"
                  onClick={handleToggleView}
                >
                  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-list-task"
                  viewBox="0 0 16 16"
                  onClick={handleToggleView}
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                  />
                  <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                  <path
                    fill-rule="evenodd"
                    d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                  />
                </svg>
              </div>
            )}
          </div>

          <div
            className="mx-1 "
            style={{
              border: "1px solid rgb(126, 121, 121)",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              marginBottom: "auto",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.8513.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="carousel-container my-3">
        <Slider {...settings}>
          <div className="card cards-services">
            <img
              className="card-img-top"
              src={oceanMaerskSpot}
              alt="oceanMaerskSpot"
              style={{ height: "180px" }}
            />
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
            <img
              className="card-img-top"
              src={lcl}
              alt="lcl"
              style={{ height: "180px" }}
            />
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
            <img
              className="card-img-top"
              src={landContainer}
              alt="landContainer"
              style={{ height: "180px" }}
            />
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
            <img
              className="card-img-top"
              src={oceanRequest}
              alt="oceanRequest"
              style={{ height: "180px" }}
            />
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
