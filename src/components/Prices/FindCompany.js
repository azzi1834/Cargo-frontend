import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import countries from "../CountriesList";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const SearchSchema = Yup.object().shape({
  email: Yup.string().required("Trading company name is required"),
  country: Yup.string().required("Country/Region is required"),
});

export default function FindCompany() {
  const initialValues = {
    trading: "",
    country: "",
  };
  const [view, setView] = useState("hide");
  const [form, setForm] = useState("default");

  const handleForm = () => {
    setForm(form === "default" ? "manual" : "default");
  };
  const handleView = () => {
    console.log("clicked");
    setView(view === "hide" ? "show" : "hide");
  };
  const handleSearchCompany = async (values) => {
    console.log(values);
  };
  const { data } = useSelector((state) => state.auth.data);
  console.log("Data is", data);
  return (
    <>
      <div className="row gx-0">
        <div className="col-md-6">
          <h1 className="m-5">Welcome {data?.dataValues?.firstName}!</h1>
          <div>
            <div className="row user-details-text">
              <div className="col-md-10">User Details</div>
              <div className="col-md-2">
                {view === "hide" ? (
                  <i className="bi bi-chevron-down" onClick={handleView}></i>
                ) : (
                  <i className="bi bi-chevron-up" onClick={handleView}></i>
                )}
              </div>
            </div>
            {view === "show" ? (
              <div>
                <div className="row user-details">
                  <div className="col-md-2 d-flex justify-content-center align-content-center">
                    HH
                  </div>
                  <div className="col-md-3">
                    <h6>Name:</h6>
                    <h6>Username:</h6>
                    <h6>Email:</h6>
                  </div>
                  <div className="col-md-7">
                    <div>
                      <strong>{data?.dataValues?.firstName}</strong>
                    </div>
                    <div>
                      <strong>{data?.dataValues?.userName}</strong>
                    </div>
                    <div>
                      <strong>{data?.dataValues?.email}</strong>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            ) : (
              ""
            )}
            <h3 className="mx-5">Let's find your home company</h3>
            <div className="mx-5">
              {form === "default" ? (
                <Formik
                  initialValues={initialValues}
                  validationSchema={SearchSchema}
                  onSubmit={(values) => {
                    handleSearchCompany(values);
                  }}
                >
                  {(formik) => (
                    <Form className="form-control border-0">
                      <label htmlFor="email" className="mb-2 mt-3">
                        Trading Name
                      </label>
                      <Field
                        type="text"
                        name="trading"
                        placeholder="Enter your trading company name"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="trading"
                        component="div"
                        className="text-danger"
                      />
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
                      <button
                        type="submit"
                        className="btn btn-primary my-3 registerUser-button"
                      >
                        Search
                      </button>
                      <p>
                        Alternatively, you can &nbsp;
                        <span onClick={handleForm}>
                          <Link>manually enter your company details.</Link>
                        </span>
                      </p>
                    </Form>
                  )}
                </Formik>
              ) : (
                <Formik
                  initialValues={initialValues}
                  validationSchema={SearchSchema}
                  onSubmit={(values) => {
                    handleSearchCompany(values);
                  }}
                >
                  {(formik) => (
                    <Form className="form-control border-0">
                      <h4>Select your company's location</h4>
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
                      <div className="d-flex ">
                        <div>
                          <button
                            type="submit"
                            className="btn btn-primary my-3 mx-3 registerUser-button"
                            onClick={handleForm}
                          >
                            Proceed
                          </button>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="btn btn-primary my-3 py-2 px-3 reset-button"
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-3"></div>
      </div>
      <Footer />
    </>
  );
}
