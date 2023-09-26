import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/auth";
import "../styling/App.css";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { verifyToken } from "../redux/slices/user";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Login() {
  const [redirect, setRedirect] = useState(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginUser = async (values) => {
    dispatch(loginUser(values));
    dispatch(verifyToken());
  };
  console.log("state", state);
  if (state.todo.message === "User not found") {
    toast("User Invalid");
  } else if (state.todo.status === 200 && !state.isLoading && !state.isError) {
    navigate("/");
    toast("Login Successfull");
  } else {
  }
  return (
    <>
      {redirect ? (
        <HomePage />
      ) : (
        <div>
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
          {/* {redirect && (
      //     <Navigate to="/" replace={true} />
      //   )} */}
          <div className="row">
            <ToastContainer />
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h1 className="my-3 mx-3">Login</h1>
              <div className="loginForm">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    agreeToTerms: false,
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                    handleLoginUser(values);
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
                      <label htmlFor="password" className="mb-2 mt-3">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                      <div className="inputDiv d-flex">
                        <label className="mb-2 mt-3">
                          <Field
                            type="checkbox"
                            name="agreeToTerms"
                            className="mx-2"
                          />
                          Remember my email and password
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary my-3 registerUser-button"
                      >
                        Login
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
              <div style={{ paddingRight: "30px" }}>
                <p className="my-1 d-flex flex-row-reverse">
                  <Link
                    className="text-decoration-none"
                    to={"/user/forgot-password"}
                  >
                    Forgot password?
                  </Link>
                </p>
              </div>
              <div className="my-3 mx-3">
                <div
                  style={{
                    border: "1px solid rgba(126, 121, 121, 0.3)",
                    padding: "20px",
                    borderRadius: "4px",
                  }}
                >
                  <h2>New to our Online Services?</h2>
                  <p>
                    Sign up to book online, manage and pay for shipments, and
                    access a suite of products and services designed to simplify
                    your supply chain.
                  </p>
                  <Link to={"/auth/register"}>
                    <button
                      type="submit"
                      className="btn btn-primary my-3 registerUser-button"
                    >
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      )}
    </>
  );
}
