import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
const google = window.google;
export default function DiscoverMore() {
  const initialValues = {
    date: null,
  };

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };
  return (
    <>
      <Formik
        initialValues={{ place: "" }}
        onSubmit={(values) => {
          // Handle form submission here
          console.log(values.place);
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="place">Search for a Place:</label>
            <Field type="text" name="place" id="place" />
            <Field
              type="text"
              name="place"
              id="place"
              component={({ field, form }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Search for a Place"
                  onFocus={() => {
                    const autocomplete = new google.maps.places.Autocomplete(
                      field.name,
                      {
                        types: ["(cities)"],
                        componentRestrictions: { country: "US" }, // Specify the desired country
                      }
                    );
                    autocomplete.addListener("place_changed", () => {
                      const place = autocomplete.getPlace();
                      form.setFieldValue("place", place.formatted_address);
                    });
                  }}
                />
              )}
            />
            <button type="submit">Search</button>
            <ErrorMessage name="place" component="div" className="error" />
          </form>
        )}
      </Formik>
      // ...
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
