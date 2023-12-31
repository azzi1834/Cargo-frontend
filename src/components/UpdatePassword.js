import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword, verifyToken } from "../redux/slices/user";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function UpdatePassword() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleUpdatePassword = (value) => {
    dispatch(updatePassword(value.password));
  };
  useEffect(() => {
    if (data && data?.data?.status === 200) {
      toast.success("Password Updated Successful");
      setTimeout(() => {
        navigate("/auth/login");
      }, 2000);
    }
    if (data && data?.data?.status === 0) {
      toast.error("Something went wrong");
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
      <div>
        <h1 className="my-3 mx-3 d-flex justify-content-center">
          User Settings
        </h1>

        <h3 className="mx-5">Update Password</h3>
      </div>
      <div className="row">
        <div className="col-md-7 mx-5">
          <Formik
            initialValues={{
              password: "",
              confirmPassword: "",
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
