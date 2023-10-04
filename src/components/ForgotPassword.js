import React, { useEffect, useState } from "react";
import { generateOTP, verifyOTP, verifyToken } from "../redux/slices/user";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styling/App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default function ForgotPassword() {
  const { data } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleForgotPassword = (values) => {
    dispatch(generateOTP(values));
    console.log(values);
  };
  useEffect(() => {
    if (data && data?.status === 200) {
      toast.success("OTP generated Successful");
      setTimeout(() => {
        navigate("/auth/verify-otp");
      }, 2000);
    }
    if (data && data?.status === 0) {
      toast.error(" Email not found");
    }
  }, [data]);
  return (
    <>
      <nav
        className="navbar navbar-light"
        style={{ border: "1px solid rgba(126, 121, 121, 0.3)" }}
      >
        <Link to={"/"}>
          <img
            className="p-3"
            src="https://www.maersk.com/~/media_sc9/headless/accounts-maersk/logos/maeu"
            alt=""
          />
        </Link>
      </nav>
      <ToastContainer />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h1 className="my-3 mx-3">Forgot Password</h1>
          <p className="mx-3">
            Please fill in the details below and we will send you an email with
            instructions on how to reset your password.
          </p>
          <div className="loginForm">
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                handleForgotPassword(values);
              }}
            >
              {(formik) => (
                <Form className="form-control border-0">
                  <label htmlFor="email" className="mb-2 mt-3">
                    Email
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
                  <div className="d-flex">
                    <button
                      type="submit"
                      className="btn btn-primary my-3 registerUser-button"
                    >
                      Submit
                    </button>
                    <Link to={"/auth/login"}>
                      <button
                        type="submit"
                        className="btn btn-primary my-3 mx-2"
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          border: "1px solid black",
                          padding: "10px 20px",
                        }}
                      >
                        Cancel
                      </button>
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  );
}
