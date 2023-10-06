import React from "react";
import Footer from "../Footer";
import Navbar from "../MyNavbar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  picked: Yup.string().required("A radio option is required"),
});
export default function RequestMaerskFlow() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div>
        <h1 className="m-5">Request access to Maersk Flow</h1>
        <div className="row m-5">
          <h6 className="mx-2 my-2 ">Choose a party</h6>
          <div className="col-md-7">
            <Formik
              validationSchema={validationSchema}
              initialValues={{
                picked: "",
              }}
              onSubmit={async (values) => {
                console.log(values);
              }}
            >
              {({ values }) => (
                <Form className="form-control border-0">
                  <div role="group" aria-labelledby="my-radio-group">
                    <label>
                      <Field
                        type="radio"
                        name="picked"
                        value="consignee"
                        className="mx-2"
                      />
                      Flow Consignee
                    </label>
                    <div>
                      <label
                        htmlFor="consignee"
                        className="radio-button-details"
                      >
                        Maximise your supply chain with flexible solutions
                      </label>
                    </div>
                    <label>
                      <Field
                        type="radio"
                        name="picked"
                        value="shipper"
                        className="mx-2"
                      />
                      Flow Shipper
                    </label>
                    <div>
                      <label htmlFor="shipper" className="radio-button-details">
                        Perform e-booking and create commercial documents
                      </label>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <Link
                        to={"/groups"}
                        type="button"
                        className="btn btn-primary my-3 py-2 px-3 reset-button"
                      >
                        Back to groups
                      </Link>
                    </div>

                    <div>
                      <Link
                        to={"/groups/new-customer"}
                        type="submit"
                        className="btn btn-primary my-3 mx-3 registerUser-button"
                      >
                        Continue
                      </Link>
                    </div>
                  </div>{" "}
                </Form>
              )}
            </Formik>
          </div>
          <div className="col-md-5"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
