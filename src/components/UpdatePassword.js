import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword, verifyToken } from "../redux/slices/user";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function UpdatePassword() {
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
      <div className="row">
        <div className="col-md-4">
          <Formik
            initialValues={{
              username: "",
              firstName: "",
              surname: "",
              mobileNumber: "",
              landline: "",
              email: "",
              password: "",
              confirmPassword: "",
              country: "",
              agreeToTerms: false,
            }}
            validationSchema={SignupSchema}
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
    </>
  );
}
