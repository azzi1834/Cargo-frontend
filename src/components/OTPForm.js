import React, { useEffect } from "react";
import "../styling/App.css";
import { Link } from "react-router-dom";
import { verifyOTP, verifyToken } from "../redux/slices/user";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupSchema = Yup.object().shape({
  otp: Yup.string().max(4, "OTP must be 4 digit").required("OTP is required"),
});
export default function OTPForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleVerifyOTP = (values) => {
    dispatch(verifyToken());
    dispatch(verifyOTP(values));
    console.log(values);
  };
  const { data } = useSelector((state) => state?.user);
  useEffect(() => {
    console.log("data", data);
    if (data?.data?.status === 200) {
      toast.success("OTP verified successfully");
      setTimeout(() => {
        navigate("/auth/update-password");
      }, 2000);
    }
    if (data?.data?.status === 0) {
      toast.error("Invalid OTP");
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
            Please enter an OTP number that we have sent you through your given
            email.
          </p>
          <div className="loginForm">
            <Formik
              initialValues={{
                otp: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                handleVerifyOTP(values);
              }}
            >
              {(formik) => (
                <Form className="form-control border-0">
                  <label htmlFor="otp" className="mb-2 mt-3">
                    Enter OTP
                  </label>
                  <Field
                    type="text"
                    name="otp"
                    placeholder="Enter OTP here"
                    className="form-control"
                    maxLength={4}
                  />
                  <ErrorMessage
                    name="otp"
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
    // <div className="container">
    //   <h5 className="mx-1 my-3">Enter OTP here</h5>
    //   <div className="userInput p-3">
    //     <input
    //       className="form-control mx-2"
    //       style={{textAlign:"center"}}
    //       required
    //       autoFocus
    //       type="text"
    //       id="sec"
    //       maxLength="1"
    //       onkeyup="clickEvent(this,'third')"
    //     />
    //     <input
    //       className="form-control mx-3"
    //       style={{textAlign:"center"}}
    //       required
    //       type="text"
    //       id="third"
    //       maxLength="1"
    //       onkeyup="clickEvent(this,'fourth')"
    //     />
    //     <input
    //       className="form-control mx-3"
    //       style={{textAlign:"center"}}
    //       required
    //       type="text"
    //       id="fourth"
    //       maxLength="1"
    //       onkeyup="clickEvent(this,'fifth')"
    //     />
    //     <input
    //       required
    //       className="form-control mx-3"
    //       style={{textAlign:"center"}}
    //       type="text"
    //       id="fifth"
    //       maxlength="1"
    //     />
    //   </div>
    //   <div className="registerButton">
    //     <button type="submit" className="btn btn-primary my-3">
    //       Verify OTP
    //     </button>
    //   </div>
    // </div>
  );
}
