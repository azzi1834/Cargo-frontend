import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword, verifyToken } from "../redux/slices/user";
import toast from "react-hot-toast";

const passwordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function UpdateProfile() {
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("email");
    console.log("logout");
    toast("Logout");
  };
  const dispatch = useDispatch();

  const handleUpdatePassword = (value) => {
    dispatch(verifyToken());
    dispatch(updatePassword(value.password));
  };
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
      <div>
        <h1 className="my-3 mx-3 d-flex justify-content-center">User Settings</h1>
        <p className="m-3">
          <span className="m-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </span>
          Your Profile
        </p>
        <h3 className="mx-5">Update Password</h3>
      </div>
      <div className="row">
        <div className="col-md-7 mx-5">
          <Formik
            initialValues={{
              
              password: "",
              confirmPassword: "",
              
            }}
            validationSchema={passwordSchema}
            onSubmit={(values) => {
              handleUpdatePassword(values);
            }}
          >
            <Form className="form-control border-0">
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
              <button
                type="submit"
                className="btn btn-primary my-3 registerUser-button"
              >
                Update Password
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <h3 className="mx-3 justify-content-center">Exit from account</h3>
          <Link to={"/"}>
            <button className="btn btn-danger bg-light border-1 text-danger w-50 mx-5 my-3" onClick={handleLogout}>
              Logout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
