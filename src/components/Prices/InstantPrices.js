import React, { useState } from "react";
import MyNavbar from "../MyNavbar";
import classes from "./../../styling/Style.InstantPrices.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { startOfToday, addDays, subDays } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer";
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
  date: Yup.string().required("You cannot leave the Date field blank"),
  weight: Yup.number()
    .required("You cannot leave the Date field blank")
    .min(1000, "You must enter a weight between 1000-99000")
    .max(99000, "You must enter a weight between 1000-99000."),
});

export default function InstantPrices() {
  const maxDate = addDays(startOfToday(), 20);
  const minDate = addDays(startOfToday(), 2);
  const [number, setNumber] = useState(1);
  const handleAddition = () => {
    setNumber(number + 1);
  };
  const handleSubtraction = () => {
    setNumber(number - 1);
  };
  const containers = [
    {
      label: "Regular Sized Cargo",
      options: [
        { label: "20 Dry Standard", value: "20 Dry Standard" },
        { label: "40 Dry Standard", value: "40 Dry Standard" },
        { label: "40 Dry High", value: "40 Dry High" },
        { label: "45 Dry High", value: "45 Dry High" },
      ],
    },
    {
      label: "reefer equipment",
      options: [
        { label: "20 Reefer Standard", value: "20 Reefer Standard" },
        { label: "40 Reefer High", value: "40 Reefer High" },
      ],
    },
    {
      label: "in-guage cargo",
      options: [
        { label: "20 Open Top", value: "20 Open Top" },
        { label: "40 Open Top", value: "40 Open Top" },
        { label: "40 Open Top High", value: "40 Open Top High" },
        { label: "40 Flat Standard", value: "40 Flat Standard" },
        { label: "40 Flat High", value: "40 Flat High" },
      ],
    },
    {
      label: "miscellaneous",
      options: [
        { label: "20 Tank", value: "20 Tank" },
        { label: "40 Tank", value: "40 Tank" },
        { label: "20 Flat", value: "20 Flat" },
      ],
    },
  ];
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
              date: "",
              weight: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              handleInstantPrices(values);
            }}
          >
            {(formik) => (
              <Form className="form-control border-0">
                <div className="col-md-8">
                  <div className="mx-5 py-5">
                    <h1>Ocean Prices or Maersk Spot</h1>
                  </div>

                  <div className="row mx-5">
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
                  <div className="row mx-5">
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
                      <div className="d-flex flex-column" id="my-radio-group">
                        <div
                          className=""
                          role="group"
                          aria-labelledby="my-radio-group"
                        >
                          <div className="my-1">
                            <Field
                              type="radio"
                              name="carrier1"
                              id="carrier1-cy"
                              // checked
                              className={`mx-1 mt-3 ${classes.radioButton}`}
                              // value="CY"
                              onChange={handleSelectOption}
                            />
                            <label htmlFor="carrier1-cy">
                              Merchant Haulage (CY)
                            </label>
                          </div>
                          <div className="my-1">
                            <Field
                              type="radio"
                              name="carrier1"
                              id="carrier1-sd"
                              className={`mx-1 ${classes.radioButton}`}
                              // value="SD"
                              onChange={handleSelectOption}
                            />
                            <label htmlFor="carrier1-sd">
                              {" "}
                              Carrier Haulage (SD)
                            </label>
                          </div>
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
                      <div className="d-flex flex-column" id="my-radio-group2">
                        <div role="group" aria-labelledby="my-radio-group2">
                          <div className="my-1">
                            <Field
                              type="radio"
                              name="carrier2"
                              id="carrier2-cy"
                              className={`mx-1 mt-3 ${classes.radioButton}`}
                              value="CY"
                              onChange={handleSelectOption}
                              // checked
                            />
                            <label htmlFor="carrier2-cy">
                              Merchant Haulage (CY)
                            </label>
                          </div>
                          <div className="my-2">
                            <Field
                              type="radio"
                              name="carrier2"
                              id="carrier2-sd"
                              className={`mx-1 ${classes.radioButton}`}
                              // value="SD"
                              onChange={handleSelectOption}
                            />
                            <label htmlFor="carrier2-sd">
                              Carrier Haulage (SD)
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mx-5">
                    <div className={`col-md-2 ${classes.heading}`}>
                      <strong>
                        <p>COMMODITY</p>
                      </strong>
                    </div>
                    <div className="col-md-9 pb-2 text-center">
                      <div className={classes.hrLine}>
                        <hr />
                      </div>
                    </div>
                    <div className={`col-md-1 ${classes.infoSymbol}`}>
                      <i className="bi bi-info-circle"></i>
                    </div>
                  </div>
                  <div className="row mx-5">
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
                  <div className="row mx-5">
                    <div className="col-md-7">
                      <div className={` ${classes.checks}`}>
                        {/* <div className="row"> */}
                        {/* <div className="col-md-10"> */}
                        <label className={`${classes.checkLabel}`}>
                          <Field
                            className={classes.check}
                            type="checkbox"
                            name="checked"
                            value="One"
                            disabled
                          />
                          Dangerous cargo
                        </label>
                        <i
                          className={`bi bi-info-circle px-2 py-2 ${classes.infoSymbol}`}
                        ></i>
                        {/* </div> */}
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="row mx-5">
                    <div className={`col-md-2 ${classes.heading}`}>
                      <strong>
                        <p>CONTAINER</p>
                      </strong>
                    </div>
                    <div className="col-md-9 pb-2 text-center">
                      <div className={classes.hrLine}>
                        <hr />
                      </div>
                    </div>
                    <div className={`col-md-1 ${classes.infoSymbol}`}>
                      <i className="bi bi-info-circle"></i>
                    </div>
                  </div>
                  <div className="row mx-5">
                    <div className="col-md-8">
                      <label className={`${classes.checkLabel}`}>
                        <Field
                          className={classes.checkCommodity}
                          type="checkbox"
                          name="commodity"
                          value="One"
                        />
                        Shipper owned container (SOC){" "}
                      </label>
                      <i
                        className={`bi bi-info-circle px-2 py-2 ${classes.infoSymbol}`}
                      ></i>
                      <label className={`${classes.checkLabel}`}>
                        <Field
                          className={classes.check}
                          type="checkbox"
                          name="commodity-nonOffering"
                          value="One"
                          disabled
                        />
                        Non-operating reefer{" "}
                      </label>
                      <i
                        className={`bi bi-info-circle px-2 py-2 ${classes.infoSymbol}`}
                      ></i>
                    </div>
                  </div>
                  <div className="row mx-5">
                    <div className="col-md-5  my-3">
                      <label htmlFor="fromCity" className="mb-2 mt-3">
                        Container type
                      </label>
                      <Field
                        className="containers border-0"
                        placeholder="Select container type"
                        render={({ field, form }) => (
                          <Select
                            id="containers"
                            {...field}
                            options={containers}
                            isSearchable={true}
                            placeholder="Select Container type"
                            onChange={(option) =>
                              form.setFieldValue(
                                "container",
                                option ? option.value : ""
                              )
                            }
                          />
                        )}
                      />
                    </div>
                    <div className={`col-md-3 mt-3`}>
                      <label htmlFor="fromCity" className="mb-2 mt-3">
                        Container type
                      </label>
                      <div className={`input-group mb-3 `}>
                        <span
                          className={`input-group-text ${classes.addSub}`}
                          onClick={handleSubtraction}
                        >
                          -
                        </span>
                        <input
                          type="text"
                          className={`form-control ${classes.numberInput}`}
                          aria-label="Amount "
                          value={number}
                        />
                        <span
                          className={`input-group-text ${classes.addSub}`}
                          onClick={handleAddition}
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div className={`col-md-3 ${classes.inputDiv}`}>
                      <label htmlFor="fromCity" className="mb-1">
                        Weight - cargo only(Kg)
                      </label>
                      <Field
                        type="number"
                        name="weight"
                        className="form-control"
                        // value={18000}
                        // min={1000}
                        // max={99000}
                        defaultValue={18000}
                      />
                      <ErrorMessage
                        name="weight"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="row mx-5">
                    <div className={`col-md-1 ${classes.heading}`}>
                      <strong>
                        <p>DATE</p>
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
                  <div className="row mx-5">
                    <div className="col-md-5">
                      <div>
                        <label htmlFor="date" className="mb-2 mt-3">
                          Expected Departure Date
                        </label>
                        <Field name="date">
                          {({ field, form }) => (
                            <DatePicker
                              id="date"
                              {...field}
                              selected={field.value}
                              placeholderText="Select Date"
                              onChange={(date) =>
                                form.setFieldValue(field.name, date)
                              }
                              className="form-control"
                              minDate={minDate}
                              maxDate={maxDate}
                            />
                          )}
                        </Field>

                        <ErrorMessage
                          name="date"
                          component="div"
                          className="text-danger"
                        />
                        <div>
                          <button
                            type="submit"
                            className={`btn btn-primary btn-lg my-3 ${classes.searchButton}`}
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
}
