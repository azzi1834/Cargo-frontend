import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/slices/auth";
import { verifyToken } from "../redux/slices/user";
import { Link } from "react-router-dom";
import "../styling/App.css";
import countries from "./CountriesList";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  firstName: Yup.string().required("First Name is required"),
  surname: Yup.string().required("Surname is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobileNumber: Yup.string().required("Mobile Number is required"),
  landline: Yup.string().required(
    "Either landline number or mobile number is required"
  ),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Password must be required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must be match")
    .required("Confirm Password is required"),
  country: Yup.string().required("Country/Region is required"),
  agreeToTerms: Yup.boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required("You must agree to the terms and conditions"),
});

export default function SignUp() {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    firstName: "",
    surname: "",
    email: "",
    country: "",
    mobileNumber: "",
    landline: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    extension: "",
  };

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.auth);
  const onSubmit = (values) => {
    dispatch(registerUser(values));
  };
  useEffect(() => {
    console.log("state", data);
    if (data?.status === 200) {
      toast.success("User Registered Successfull");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    if (data?.status === 0) {
      toast.error("User already exists");
    }
  }, [data]);
  return (
    <>
      <nav
        className="navbar navbar-light"
        style={{ border: "1px solid rgba(126, 121, 121, 0.3)" }}
      >
        <ToastContainer />
        <Link to={"/"}>
          <img
            className="p-3"
            src="https://www.maersk.com/~/media_sc9/headless/accounts-maersk/logos/maeu"
            alt=""
          />
        </Link>
      </nav>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h1 className="p-3">Welcome to your Maersk Registration</h1>
          <div>
            <p className="p-3">
              If you are already registered with Safmarine or any Sealand – A
              Maersk Company region, then you don't need to register again. You
              can instead go to the respective portal and login with your
              username and password. You will then have the opportunity to
              request access for Safmarine or any Sealand - A Maersk Company
              region as well.
            </p>
          </div>
          <div className="signUpForm">
            <Formik
              initialValues={initialValues}
              validationSchema={SignupSchema}
              onSubmit={onSubmit}
            >
              {() => (
                <Form className="form-control border-0">
                  <label htmlFor="username" className="mb-2 mt-3">
                    Create username
                  </label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Enter desired username"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger"
                  />
                  <label htmlFor="email" className="mb-2 mt-3">
                    Business email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your business email address"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                  <label htmlFor="firstName" className="mb-2 mt-3">
                    First Name
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-danger"
                  />
                  <label htmlFor="surname" className="mb-2 mt-3">
                    Surname
                  </label>
                  <Field
                    type="text"
                    name="surname"
                    placeholder="Enter your surname"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="surname"
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
                  <h2 className="mt-4">Business contact number</h2>
                  <p>Prefix is prefilled based on selected country</p>
                  <label htmlFor="mobileNumber" className="mb-2 mt-3">
                    Mobile number
                  </label>
                  <Field
                    type="phone"
                    name="mobileNumber"
                    placeholder="Enter mobile number"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="mobileNumber"
                    component="div"
                    className="text-danger"
                  />
                  <div className="row my-4">
                    <div className="col-sm-8">
                      <label htmlFor="landline" className="mb-2 mt-3">
                        Landline number
                      </label>
                      <Field
                        type="phone"
                        name="landline"
                        placeholder="Enter landline number"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="landline"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="col-sm-4">
                      <label htmlFor="extension" className="mb-2 mt-3 mx-1">
                        Extension (Optional)
                      </label>
                      <Field
                        type="text"
                        name="extension"
                        placeholder="Enter extension"
                        className="form-control mx-1"
                      />
                    </div>
                  </div>
                  <label htmlFor="password" className="mb-2 mt-3">
                    New password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter desired password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                  <label htmlFor="confirmPassword" className="mb-2 mt-3">
                    Confirm new password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Re-enter desired password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-danger"
                  />
                  <div className="inputDiv d-flex">
                    <label className="mb-2 mt-3">
                      <Field type="checkbox" name="agreeToTerms" />
                      &nbsp;I agree
                      <Link to={"/registered-user-terms"}>
                        registered user terms
                      </Link>
                      and
                      <Link to={"/privacy"}>
                        Privacy notification and cookies policy
                      </Link>
                    </label>
                  </div>
                  <ErrorMessage
                    name="agreeToTerms"
                    component="div"
                    className="text-danger"
                  />
                  <p className="p-3">
                    By registering as a new user, you accept without restriction
                    the user terms (encompassing general user terms, registered
                    user terms and privacy notification) and you will be granted
                    access to our on-line business services. You can book and
                    track your cargo, submit your shipping instructions, get
                    access to transport documents, view your account statement
                    and view or download reports with detailed data of your
                    cargo movements.
                  </p>
                  <p className="p-3">
                    As a registered customer, you can view your personal and
                    company details in my profile. A list of users within your
                    company is also available.
                  </p>
                  <p className="p-3">
                    Without waiving any other rights and remedies, any breach or
                    violation of the user terms is subject to legal prosecution.
                  </p>
                  <button
                    type="submit"
                    className="btn btn-primary my-3 registerUser-button"
                  >
                    Register
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className=" col-md-3"></div>
      </div>
      <div className="d-flex justify-content-center">
        <p className="my-3 mx-3">Already have an Account?</p>
        <Link to={"/auth/login"}>
          <button className="btn btn-primary my-3 registerUser-button">
            Login
          </button>
        </Link>
      </div>
    </>
  );
}
