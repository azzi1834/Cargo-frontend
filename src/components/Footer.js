import React from "react";
import { Link } from "react-router-dom";
import "../styling/App.css";
export default function () {
  return (
    <footer>
      <hr />
      <div className="row">
        <div className="col-md-3 d-flex flex-column ">
          <ul style={{ listStyleType: "none" }} className="footer-Links">
            <Link to={"/about-us"}>About Us</Link>
            <Link to={"/careers"}>Careers</Link>
            <Link to={"/insights"}>Insights</Link>
            <Link to={"/news-and-advisories"}>News & advisories</Link>
            <Link to={"/maersk-growth"}>Maersk Growth</Link>
            <Link to={"/whistleblower"}>Whistleblower</Link>
          </ul>
        </div>
        <div className="col-md-3 ">
          <ul style={{ listStyleType: "none" }} className="footer-Links">
            <Link to={"/contact-us"}>Contact us</Link>
            <Link to={"/investors"}>Investors</Link>
            <Link to={"/press"}>Press</Link>
            <Link to={"/sustainability"}>Sustainabiliy</Link>
            <Link to={"/procurement"}>Procurement</Link>
            <Link to={"/support"}>Support</Link>
          </ul>
        </div>
        <div className="col-md-3 ">
          <ul style={{ listStyleType: "none" }} className="footer-Links">
            <Link to={"/terms-and-conditions"}>Terms & conditions</Link>
            <Link to={"/data-privacy-notifications"}>Data Privacy Notification</Link>
            <Link to={"/brand-protection"}>Brand Protection</Link>
            <Link to={"/cookie-policy"}>Cookie policy</Link>
            <Link to={"/cookie-preferences"}>Cookie preferences</Link>
            <Link to={"/unsolicited-submissions-policy"}>Unsolicited Submissions Policy</Link>
          </ul>
        </div>
        <div className="col-md-3 ">
          <ul style={{ listStyleType: "none" }} className="footer-Links">
            <Link to={"/container-tracking"}>Container tracking</Link>
            <Link to={"/supply-chain-and-logistics"}>Supply Chain and Logistics</Link>
            <Link to={"/transportation-services"}>Transportation Services</Link>
            <Link to={"/vessel-schedules"}>Vessel schedules</Link>
            <Link to={"/container-sales"}>Container sales</Link>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="d-flex p-3">
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/776/137/original/alphabet-letter-c-green-3d-render-free-png.png"
              alt="MyCargo"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "10px",
                paddingLeft: "10px",
              }}
            />
            <h2 className="">MyCargo</h2>
          </div>
          <div>
            <p className="mx-5">&copy;A.P.Moller - Maersk</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex socialLinks">
            <a href="">LinkedIn</a>
            <a href="">Facebook</a>
            <a href="">Twitter</a>
            <a href="">Instagram</a>
            <a href="">Youtube</a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="mx-5">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/shared-files/app-badges/download_on_the_app_store_badge_us-uk_rgb_blk_092917.svg"
              alt="App Store"
              className="my-1"
            />
          </div>
          <div className="mx-5">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/shared-files/app-badges/google-play-badge-english.svg"
              alt="Play Store"
              className="my-1"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
