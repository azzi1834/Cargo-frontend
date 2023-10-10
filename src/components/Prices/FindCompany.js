import React, { useState, useEffect } from "react";
import "./../../styling/App.css";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import countries from "../CountriesList";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import MyNavbar from "../MyNavbar";
import { searchCompanies, verifyToken } from "../../redux/slices/user";
const SearchSchema = Yup.object().shape({
  trading: Yup.string().required("Trading company name is required"),
  country: Yup.string().required("Country/Region is required"),
});
export default function FindCompany() {
  const [showCompnies, setShowCompanies] = useState(false);

  const dispatch = useDispatch();

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
  const { data } = useSelector((state) => state?.auth.data);
  // const { data1 } = useSelector((state) => state?.auth);

  const companies = useSelector((state) => state?.user?.data?.data?.company);
  const handleSearchCompany = async (values) => {
    console.log(values);
    dispatch(verifyToken());
    dispatch(searchCompanies(values));
    setShowCompanies(true);
  };
  useEffect(() => {
    console.log("auth", data);
    console.log("comapnies data", companies);
    // if (data?.data?.status === 200) {
    //   toast.success("Password Updated Successfull");
    // }
    // if (data?.data?.status === 401) {
    //   toast.error("Something went wrong");
    // }
  }, [data]);
  const handleCompaniestable = () => {
    setShowCompanies(false);
  };
  return (
    <>
      <MyNavbar />
      <div className="row gx-0">
        <div className="col-md-6">
          <h1 className="m-5">Welcome {data?.dataValues?.firstName}!</h1>
          <div>
            <div className="row company-details-text mx-5">
              <div
                className="col-md-10"
                onClick={handleView}
                style={{ cursor: "pointer" }}
              >
                User Details
              </div>
              <div className="col-md-2">
                {view === "hide" ? (
                  <i
                    className="bi bi-chevron-down"
                    onClick={handleView}
                    style={{ cursor: "pointer" }}
                  ></i>
                ) : (
                  <i
                    className="bi bi-chevron-up"
                    onClick={handleView}
                    style={{ cursor: "pointer" }}
                  ></i>
                )}
              </div>
            </div>
            {view === "show" ? (
              <div>
                <div className="row user-details">
                  <div className="col-md-2 d-flex justify-content-center align-content-center">
                    <div className="profile-img-box">
                      {" "}
                      <p>HH</p>
                    </div>
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
                          <Link
                            to={"/user/additional-details"}
                            type="submit"
                            className="btn btn-primary my-3 mx-3 registerUser-button"
                          >
                            Proceed
                          </Link>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="btn btn-primary my-3 py-2 px-3 reset-button"
                            onClick={handleForm}
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
      {showCompnies ? (
        <div className="m-5">
          <table className="table">
            <thead className="bg-light">
              <tr>
                <th>Company Name</th>
                <th>Company Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {companies &&
                companies.map((data, index) => (
                  <tr key={index}>
                    <td>{data?.tradingName}</td>
                    <td>
                      {data?.address + "  "}
                      {data?.country}
                    </td>
                    <td>
                      <div className="d-flex flex-row-reverse">
                        <Link
                          to={"/user/additional-details"}
                          className="text-decoration-none"
                          onClick={handleCompaniestable}
                        >
                          Select
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
}
