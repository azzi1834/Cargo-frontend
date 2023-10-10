import React, { useState } from "react";
import MyNavbar from "../MyNavbar";
import classes from "./../../styling/Style.InstantPrices.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  fromCity: Yup.string().required(
    "You cannot leave the From (City, Country/Region) field blank"
  ),
  toCity: Yup.string().required(
    "You cannot leave the To (City, Country/Region) field blank"
  ),
  commidity: Yup.string().required(
    "You cannot leave the Commodity field blank"
  ),
});

export default function InstantPrices() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectOption = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleInstantPrices = (values) => {
    console.log(values);
  };
  return (
    <>
      <div>
        <MyNavbar />
        <div className="row gx-0">
          <Formik
            initialValues={{
              fromCity: "",
              toCity: "",
              carrier: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              handleInstantPrices(values);
            }}
          >
            {(formik) => (
              <Form className="form-control border-0">
                <div className="col-md-8">
                  <div className="px-4 py-5">
                    <h1>Ocean Prices or Maersk Spot</h1>
                  </div>

                  <div className="row px-5">
                    <div className={`col-md-1 ${classes.heading}`}>
                      <strong>
                        <p>ROUTE</p>
                      </strong>
                    </div>
                    <div className="col-md-10 pb-2 text-center">
                      <div className={classes.hrLine}>
                        <hr />
                      </div>
                    </div>
                    <div className={`col-md-1 ${classes.infoSymbol}`}>
                      <i className="bi bi-info-circle"></i>
                    </div>
                  </div>
                  <div className="row px-5">
                    <div className="col-md-6 ">
                      <label htmlFor="fromCity" className="mb-2 mt-3">
                        From (City, Country/Region)
                      </label>
                      <Field
                        type="text"
                        name="fromCity"
                        placeholder="Enter city name"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="fromCity"
                        component="div"
                        className="text-danger"
                      />
                      <div className="d-flex flex-column">
                        <div className="my-1">
                          <Field
                            type="radio"
                            name="carrier1"
                            id="carrier1"
                            checked
                            className={`mx-1 mt-3 ${classes.radioButton}`}
                            value="CY"
                            onChange={handleSelectOption}
                          />
                          Merchant Haulage (CY)
                        </div>
                        <div className="my-1">
                          <Field
                            type="radio"
                            name="carrier1"
                            id="carrier1"
                            className={`mx-1 ${classes.radioButton}`}
                            value="SD"
                            onChange={handleSelectOption}
                          />
                          Carrier Haulage (SD)
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <label htmlFor="toCity" className="mb-2 mt-3">
                        To (City, Country/Region)
                      </label>
                      <Field
                        type="text"
                        name="toCity"
                        placeholder="Enter city name"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="toCity"
                        component="div"
                        className="text-danger"
                      />
                      <div className="d-flex flex-column">
                        <div className="my-1">
                          <Field
                            type="radio"
                            name="carrier2"
                            id="carrier2"
                            className={`mx-1 mt-3 ${classes.radioButton}`}
                            value="CY"
                            onChange={handleSelectOption}
                            checked
                          />
                          Merchant Haulage (CY)
                        </div>
                        <div className="my-2">
                          <Field
                            type="radio"
                            name="carrier2"
                            id="carrier2"
                            className={`mx-1 ${classes.radioButton}`}
                            value="SD"
                            onChange={handleSelectOption}
                          />
                          Carrier Haulage (SD)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className={`col-sm-2 ${classes.heading}`}>
                        <strong>
                          <p>COMMODITY</p>
                        </strong>
                      </div>
                      <div className="col-9">
                        <hr />
                      </div>
                      <div className={`col ${classes.infoSymbol}`}>
                        <i className="bi bi-info-circle"></i>
                      </div>
                    </div>
                  </div>
                  <div className="row px-5">
                    <div className="col-md-6">
                      <label htmlFor="fromCity" className="mb-2 mt-3">
                        Commodity
                      </label>
                      <Field
                        type="text"
                        name="commidity"
                        placeholder="Enter commodity"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="commidity"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="row px-5">
                    <div className="col-sm-7">
                      <div className={`form-check ${classes.check}`}>
                        <input
                          className={`form-check-input ${classes.checkButton}`}
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        Dangerous cargo
                        {/* <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Dangerous cargo
                        </label> */}
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
