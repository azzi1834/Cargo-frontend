import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import countries from "../CountriesList";
import Footer from "../Footer";
import ReferenceModal from "./ReferenceModal";
const ValidateSchema = Yup.object().shape({
  email: Yup.string().required("Trading company name is required"),
  tradingName: Yup.string().required("Trading name is required"),
  postalCode: Yup.string().required("Postal code is required"),
  taxCode: Yup.string().required("Tax type code is required"),
});
export default function CompanyDetails() {
  const [viewCompanyDetails, setViewCompanyDetails] = useState("hide");
  const [viewCompanyAddress, setViewCompanyAddress] = useState("hide");
  const [viewTaxDetails, setViewTaxDetails] = useState("hide");
  const [viewReferenceDetails, setViewReferenceDetails] = useState("hide");
  const [selectedOption, setSelectedOption] = useState("");
  const [showForm, setShowForm] = useState(true);

  const initialValues = {
    tradingName: "",
    country: "",
    postalCode: "",
    taxCode: "",
    webUrl: "",
    companyUrl: "",
    city: "",
    district: "",
    streetName: "",
    pobox: "",
    phone: "",
    extension: "",
  };

  const handleView = (value) => {
    switch (value) {
      case "viewCompanyDetails":
        setViewCompanyDetails(viewCompanyDetails === "hide" ? "show" : "hide");
        break;
      case "viewCompanyAddress":
        setViewCompanyAddress(viewCompanyAddress === "hide" ? "show" : "hide");
        break;
      case "viewTaxDetails":
        setViewTaxDetails(viewTaxDetails === "hide" ? "show" : "hide");
        break;
      case "viewReferenceDetails":
        setViewReferenceDetails(
          viewReferenceDetails === "hide" ? "show" : "hide"
        );
        break;
      default:
    }
  };
  const handleSelectOption = (e) => {
    setSelectedOption(e.target.value);
    if (selectedOption === "yes") {
      setShowForm(true);
    } else if (selectedOption === "no") {
      setShowForm(false);
    }
  };
  const handleSearchCompany = async (values) => {
    console.log(values);
    console.log("clicked");
  };
  return (
    <>
      <div className="row gx-0">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-8">
              <div className="m-5">
                <h1>Enter company details</h1>
                <h4>Please share additional details for precise search</h4>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={ValidateSchema}
                onSubmit={(values) => {
                  handleSearchCompany(values);
                }}
              >
                {(formik) => (
                  <Form className="form-control border-0">
                    <div className="company-details-text">
                      <div className="row ">
                        <div
                          className="col-md-10"
                          onClick={() => handleView("viewCompanyDetails")}
                          style={{ cursor: "pointer" }}
                        >
                          Company Details
                        </div>
                        <div className="col-md-2">
                          {viewCompanyDetails === "hide" ? (
                            <i
                              className="bi bi-chevron-down drop-arrows"
                              onClick={() => handleView("viewCompanyDetails")}
                            ></i>
                          ) : (
                            <i
                              className="bi bi-chevron-up drop-arrows"
                              onClick={() => handleView("viewCompanyDetails")}
                            ></i>
                          )}
                        </div>
                      </div>
                    </div>
                    {viewCompanyDetails === "show" ? (
                      <div>
                        <div className="row company-details">
                          <div>
                            <label htmlFor="tradingName">Trading Name</label>
                            <Field
                              type="text"
                              name="tradingName"
                              id="tradingName"
                              className="form-control my-2"
                              placeholder="Enter english version of trading name"
                            />
                            <ErrorMessage
                              name="tradingName"
                              component="div"
                              className="text-danger"
                            />
                            <label htmlFor="webUrl" className="mt-4 mb-2">
                              Do you have the company website URL?
                            </label>
                            <div>
                              <Field
                                type="radio"
                                name="webUrl"
                                id="webUrl"
                                className="mx-3"
                                value="yes"
                                checked={selectedOption === "yes"}
                                onChange={handleSelectOption}
                                style={{ cursor: "pointer" }}
                              />
                              Yes
                            </div>
                            <div>
                              <Field
                                type="radio"
                                name="webUrl"
                                id="webUrl"
                                className="mx-3"
                                value="no"
                                checked={selectedOption === "no"}
                                onChange={handleSelectOption}
                                style={{ cursor: "pointer" }}
                              />
                              No
                            </div>
                            <ErrorMessage
                              name="country"
                              component="div"
                              className="text-danger"
                            />
                            {showForm ? (
                              ""
                            ) : (
                              <div className="mt-4 mb-2">
                                <label htmlFor="companyUrl">
                                  Please enter your company website URL
                                </label>
                                <Field
                                  type="text"
                                  name="companyUrl"
                                  id="companyUrl"
                                  className="form-control my-2"
                                  placeholder="Enter your company url"
                                />
                                <ErrorMessage
                                  name="country"
                                  component="div"
                                  className="text-danger"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <hr className="mx-5" />
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="company-details-text">
                      <div className="row ">
                        <div
                          className="col-md-10"
                          onClick={() => handleView("viewCompanyAddress")}
                          style={{ cursor: "pointer" }}
                        >
                          Company Address
                        </div>
                        <div className="col-md-2">
                          {viewCompanyAddress === "hide" ? (
                            <i
                              className="bi bi-chevron-down drop-arrows"
                              onClick={() => handleView("viewCompanyAddress")}
                            ></i>
                          ) : (
                            <i
                              className="bi bi-chevron-up drop-arrows"
                              onClick={() => handleView("viewCompanyAddress")}
                            ></i>
                          )}
                        </div>
                      </div>
                    </div>
                    {viewCompanyAddress === "show" ? (
                      <div>
                        <div className="row company-details">
                          <div>
                            <label htmlFor="city">City</label>
                            <Field
                              type="text"
                              name="city"
                              id="city"
                              className="form-control my-2"
                              placeholder="Enter english version of trading name"
                            />

                            <label htmlFor="apartment">
                              Apartment details (optional)
                            </label>
                            <Field
                              type="text"
                              name="apartment"
                              id="apartment"
                              className="form-control my-2"
                              placeholder="Enter your apartment, suite, floor details"
                            />

                            <label htmlFor="district">
                              City sub-area/City district (optional)
                            </label>
                            <Field
                              type="text"
                              name="district"
                              id="district"
                              className="form-control my-2"
                              placeholder="Enter your sub/area district"
                            />

                            <label htmlFor="Street Name">Street Name</label>
                            <Field
                              type="text"
                              name="streetName"
                              id="streetName"
                              className="form-control my-2"
                              placeholder="Enter name of the street to which customer is registered"
                            />

                            <label htmlFor="street">
                              Street Number (optional)
                            </label>
                            <Field
                              type="text"
                              name="street"
                              id="street"
                              className="form-control my-2"
                              placeholder="Enter house number of the building to which customer is registered"
                            />

                            <label htmlFor="postalCode">Postal Code</label>
                            <Field
                              type="text"
                              name="postalCode"
                              id="postalCode"
                              className="form-control my-2"
                              placeholder="Enter country postal code to which customer is registered"
                            />
                            <ErrorMessage
                              name="postalCode"
                              component="div"
                              className="text-danger"
                            />
                            <label htmlFor="pobox">
                              PO Box Number (optional)
                            </label>
                            <Field
                              type="text"
                              name="pobox"
                              id="pobox"
                              className="form-control my-2"
                              placeholder="Enter PO Box number of the customer"
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

                            <div className="row">
                              <div className="col-md-3">
                                <label htmlFor="prefix">Prefix</label>
                                <Field
                                  type="text"
                                  name="prefix"
                                  id="prefix"
                                  className="form-control my-2"
                                  placeholder=""
                                />
                              </div>
                              <div className="col-md-9">
                                <label htmlFor="phone">Phone Number</label>
                                <Field
                                  type="text"
                                  name="phone"
                                  id="phone"
                                  className="form-control my-2"
                                  placeholder="Enter phone number"
                                />
                              </div>
                            </div>

                            <label htmlFor="extension">
                              Extension (Optional)
                            </label>
                            <Field
                              type="text"
                              name="extension"
                              id="extension"
                              className="form-control my-2"
                              placeholder="Enter phone extension"
                            />

                            {/* <label htmlFor="tradingName">
                          Apartment details (optional)
                        </label>
                        <Field
                          type="text"
                          name="tradingName"
                          id="tradingName"
                          className="form-control my-2"
                          placeholder=""
                        /> */}
                          </div>
                        </div>
                        <hr className="mx-5" />
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="company-details-text">
                      <div className="row ">
                        <div
                          className="col-md-10"
                          onClick={() => handleView("viewTaxDetails")}
                          style={{ cursor: "pointer" }}
                        >
                          Tax Details
                        </div>
                        <div className="col-md-2">
                          {viewTaxDetails === "hide" ? (
                            <i
                              className="bi bi-chevron-down drop-arrows"
                              onClick={() => handleView("viewTaxDetails")}
                            ></i>
                          ) : (
                            <i
                              className="bi bi-chevron-up drop-arrows"
                              onClick={() => handleView("viewTaxDetails")}
                            ></i>
                          )}
                        </div>
                      </div>
                    </div>
                    {viewTaxDetails === "show" ? (
                      <div className="mt-4 mb-2 mx-5">
                        <label htmlFor="tradingName">Tax Type Code</label>
                        <Field
                          type="text"
                          name="taxCode"
                          id="taxCode"
                          className="form-control my-2"
                          placeholder="Select the tax type code"
                        />
                        <ErrorMessage
                          name="taxCode"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="company-details-text">
                      <div className="row ">
                        <div
                          className="col-md-10"
                          onClick={() => handleView("viewReferenceDetails")}
                          style={{ cursor: "pointer" }}
                        >
                          Reference Details
                        </div>
                        <div className="col-md-2">
                          {viewReferenceDetails === "hide" ? (
                            <i
                              className="bi bi-chevron-down
                          drop-arrows"
                              onClick={() => handleView("viewReferenceDetails")}
                            ></i>
                          ) : (
                            <i
                              className="bi bi-chevron-up drop-arrows"
                              onClick={() => handleView("viewReferenceDetails")}
                            ></i>
                          )}
                        </div>
                      </div>
                    </div>
                    {viewReferenceDetails === "show" ? (
                      <div className="mt-4 mb-2 mx-5 addreference-button">
                        <ReferenceModal />
                      </div>
                    ) : (
                      ""
                    )}
                    <hr className="mx-5" />
                    <div className="d-flex mx-5">
                      <div>
                        <button
                          className="btn btn-primary track-button"
                          type="submit"
                        >
                          Advanced Search
                        </button>
                      </div>
                      <button
                        className="btn btn-primary discard mx-2"
                        type="button"
                      >
                        Discard
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      <Footer />
    </>
  );
}
