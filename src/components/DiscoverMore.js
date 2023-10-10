import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiSolution from "../images/Prices/apisolution.svg";
import ediSolution from "../images/Prices/edi.svg";
import emissionDashboard from "../images/Prices/co2.svg";
import "../styling/App.css";
import Input, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import "react-phone-number-input/style.css";
export default function DiscoverMore() {
  // const [phoneNumber, setPhoneNumber] = useState();
  // const [country, setCountry] = useState();
  // const CountrySelect = ({ value, onChange, labels, ...rest }) => (
  //   <select
  //     {...rest}
  //     value={value}
  //     onChange={(event) => onChange(event.target.value || undefined)}
  //   >
  //     <option value="">{labels.ZZ}</option>
  //     {getCountries().map((country) => (
  //       <option key={country} value={country}>
  //         {labels[country]} +{getCountryCallingCode(country)}
  //       </option>
  //     ))}
  //   </select>
  // );
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(success, rejected);
  // }, []);

  return (
    <>
      {/* <div>
        <label htmlFor="countrySelect">Country Select</label>
        <CountrySelect labels={en} name="countrySelect" />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <Input placeholder="Enter phone number" name="phoneNumber" />
      </div> */}
      {/* <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div> */}

      {/* <div className="container">
        <div className="row">
          {cardData.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img
                  src={card.imgName}
                  className="card-img-top"
                  alt={card.cardTitle}
                />
                <div className="card-body">
                  <h5 className="card-title">{card.cardTitle}</h5>
                  <p className="card-text">{card.cardText}</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary">Access</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}
