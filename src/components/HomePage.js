import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import IndustrySectorsCorousel from "./IndustrySectorsCorousel";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="">
        <div className="row p-5">
          <div className="col-md-6">
            <div
              className="p-3"
              style={{
                border: "1px solid black",
                borderRadius: "10px",
                height: "",
              }}
            >
              <div className="d-flex">
                <img
                  className="mx-3"
                  src="https://www.maersk.com/~/media_sc9/maersk/homepage/mi-user-plus-circle-48px.svg?w=1000&hash=16AD0509FD17654478205CC4CCA898F3"
                  alt="Register"
                />
                <h4 style={{ paddingTop: "7px" }}>New to Maersk.com?</h4>
              </div>
              <div style={{ marginLeft: "75px" }}>
                <p>
                  Sign up to book online, manage and pay for shipments, and
                  access a suite of products and services designed to simplify
                  your supply chain.
                </p>
              </div>
              <div style={{ paddingLeft: "75px" }}>
                <Link
                  to={"/auth/register"}
                  className="track-button border-1 my-3 text-decoration-none"
                  type="submit"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="p-3"
              style={{
                border: "1px solid black",
                borderRadius: "10px",
              }}
            >
              <div className="d-flex">
                <img
                  className="mx-3"
                  src="https://www.maersk.com/~/media_sc9/maersk/homepage/mi-lifebuoy-48px.svg?w=1000&hash=B521436E352D655E4D6CCDF843171261"
                  alt="Register"
                />
                <h4 style={{ paddingTop: "7px" }}>How to get started</h4>
              </div>
              <div className="my-2" style={{ marginLeft: "75px" }}>
                <p>
                  Step by step guides to get started using our digital services.
                </p>
              </div>
              <div style={{ marginLeft: "75px" }}>
                <Link
                  to={"/support/website-guide"}
                  className="track-button border-1 my-4 text-decoration-none"
                  type="submit"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-5">
          <div>
            <h3>Logistics solutions</h3>
          </div>
          <div className="col-md-8">
            From the farm to your fridge, or the warehouse to your wardrobe,
            Maersk is developing solutions that meet customer needs from one end
            of the supply chain to the other.
          </div>
          <div>
            <Link
              to={"/support/website-guide"}
              className="border-1 my-3 text-decoration-none bg-light"
              style={{
                color: "black",
                border: "1px solid black",
                borderRadius: "4px",
                padding: "10px 20px",
              }}
              type="submit"
            >
              See all solutions
            </Link>
          </div>
        </div>
        <div className="row d-flex flex-row p-3">
          <div className="col-md-4">
            <Link
              to={"/transportation-services"}
              style={{ textDecoration: "none" }}
            >
              <div className="card logistic-card">
                <img
                  className="card-img-top"
                  src="https://www.maersk.com/~/media_sc9/maersk/solutions/transportation-services/inland-services/images/inland-services_720x405_v2.jpg?w=1000&hash=4C26213B9627532ABE058E2F2AB34491"
                  alt="Transportation Services"
                />
                <div className="card-body">
                  <h5 className="card-title">Transportation Services</h5>
                  <p className="card-text">
                    Learn how Maersk offers small and large businesses the
                    opportunity to grow.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link
              to={"/supply-chain-and-logistics"}
              style={{ textDecoration: "none" }}
            >
              <div className="card logistic-card">
                <img
                  className="card-img-top"
                  src="https://www.maersk.com/~/media_sc9/maersk/news/press-releases/images/2023/03/warehouse-automation-solution_1024x576.jpg?w=1000&hash=58D97F936669E9EFE52DEF42E7BECB69"
                  alt="Transportation Services"
                />
                <div className="card-body">
                  <h5 className="card-title">Supply Chain and Logistics</h5>
                  <p className="card-text">
                    We focus on solving your supply chain needs from end to end,
                    taking the complexity out of container shipping for you.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={"/digital-solutions"} style={{ textDecoration: "none" }}>
              <div className="card logistic-card">
                <img
                  className="card-img-top"
                  src="https://www.maersk.com/~/media_sc9/maersk/solutions/supply-chain-and-logistics/maersk-customs-services/maersk-custom-portal_720x405.png?w=1000&hash=5664D8FBE665BCE38C84997DA857DCAC"
                  alt="Transportation Services"
                />
                <div className="card-body">
                  <h5 className="card-title">Digital Solutions</h5>
                  <p className="card-text">
                    Our tailored online services take the complexity out of
                    shipping by letting you instantly book, manage and track
                    shipments, submit Verified Gross Mass information and much
                    more.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row p-5">
          <div>
            <h3>Industry Sectors</h3>
          </div>
          <div className="col-md-8">
            Regardless of your industry, your commodity, or your key markets,
            Maersk offers global and local logistics solutions that enable small
            and large businesses to grow. Next
          </div>
          <div className="container">
            <IndustrySectorsCorousel />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
