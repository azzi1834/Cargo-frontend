import React, { useState, useEffect } from "react";
import MyNavbar from "../MyNavbar";
import classes from "./../../styling/Style.confirmDetails.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import countries from "../CountriesList";
const ValidateSchema = Yup.object().shape({
  country: Yup.string().required("Country name is required"),
  city: Yup.string().required("City name is required"),
});
export default function ConfirmDetails() {
  const initialValues = {
    city: "",
    country: "",
  };
  const handleSearchCompany = async (values) => {
    console.log(values);
    console.log("clicked");
  };
  return (
    <>
      <MyNavbar />
      <div className="row gx-0">
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <div className="mt-5">
            <h2>Confirm Details</h2>
            <h5>
              Verify below company details and provide your local Maersk office
            </h5>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className={classes.detailsBox}>
                <strong>Company Details:</strong>
                <p>
                  Trading Name:<span>abcabc</span>
                </p>
                <p>
                  Address:<span>abcabc</span>
                </p>
                <p>
                  Country:<span>abcabc</span>
                </p>
              </div>
              <h5 className="mt-4">Your local Maersk office</h5>
              <div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={ValidateSchema}
                  onSubmit={(values) => {
                    handleSearchCompany(values);
                  }}
                >
                  {(formik) => (
                    <Form className="form-control border-0">
                      <label htmlFor="country" className="mb-2 mt-3">
                        Country/Region
                      </label>
                      <Field
                        as="select"
                        id="country"
                        name="country"
                        className="form-select"
                      >
                        <option value="" disabled selected>
                          Select Country
                        </option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="country"
                        component="div"
                        className="text-danger"
                      />

                      <label htmlFor="country" className=" mt-2">
                        City
                      </label>
                      <Field
                        type="url"
                        name="city"
                        id="city"
                        className="form-control my-2"
                        placeholder="Enter your company url"
                      />
                      <ErrorMessage
                        name="city"
                        component="div"
                        className="text-danger"
                      />
                    </Form>
                  )}
                </Formik>
              </div>

              <div className="my-4">
                <button className="btn btn-primary track-button mx-2">
                  Submit
                </button>
                <button className="btn btn-primary discard">Discard</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5"></div>
      </div>
      ;
    </>
  );
}
