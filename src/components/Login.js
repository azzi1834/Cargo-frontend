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

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Password must be required"),
});

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
    agreeToTerms: false,
  };
  const { isLogged, data, isError } = useSelector((state) => state.auth);
  // const { isLogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginUser = async (values) => {
    dispatch(loginUser(values));
  };
  useEffect(() => {
    console.log("data::::state", data);
    console.log("logged", isLogged);
    if (isLogged && data?.status === 200) {
      toast.success("User Login Successfull");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else if (data?.status === 200 && data?.message === "Invalid password") {
      toast.error("Email and Password Invalid");
    } else console.log();
  }, [data, isError]);
  return (
    <>
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

        <div className="row gx-0">
          <ToastContainer />
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1 className="my-3 mx-3">Login</h1>
            <div className="loginForm">
              <Formik
                initialValues={initialValues}
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
                  to={"/auth/forgot-password"}
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
    </>
  );
}
