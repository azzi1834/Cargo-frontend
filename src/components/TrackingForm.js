import React, { useState } from "react";
import "../styling/App.css";
export default function TrackingForm() {
  const [activeForm, setActiveForm] = useState("tracking");
  const handleFormChange = (formName) => {
    setActiveForm(formName);
  };
  const renderForm = () => {
    switch (activeForm) {
      case "tracking":
        return (
          <form className="form-control border-0 p-3">
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <input
                  required
                  className="border-top-0 border-end-0 border-start-0 mx-2 shadow-sm form-control trackingInputs"
                  type="text"
                  placeholder="Enter a tracking ID"
                />
              </div>
            </div>
            <button className="track-button border-1 my-3" type="submit">
              Track
            </button>
          </form>
        );
      case "schedules":
        return (
          <form className="form-control border-0 p-1">
            <div className="tracking-form form-group">
              <label htmlFor="origin" className="control-label">
                From
              </label>
              <div className="input-group">
                <div className="input-group-addon pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                    />
                  </svg>
                </div>
                <input
                  required
                  className="border-top-0 border-end-0 border-start-0 mx-2 shadow-sm form-control trackingInputs"
                  type="text"
                  placeholder="Origin"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="origin" className="control-label">
                To
              </label>
              <div className="input-group">
                <div className="input-group-addon pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <input
                  required
                  className="border-top-0 border-end-0 border-start-0 shadow-sm mx-2 form-control trackingInputs"
                  type="text"
                  placeholder="Destination"
                />
              </div>
            </div>
            <button className="track-button border-1 my-3" type="submit">
              Search
            </button>
          </form>
        );
      case "localOffices":
        return (
          <form className="form-control border-0 p-3">
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-buildings-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V.5ZM2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-1 2v1H2v-1h1Zm1 0h1v1H4v-1Zm9-10v1h-1V3h1ZM8 5h1v1H8V5Zm1 2v1H8V7h1ZM8 9h1v1H8V9Zm2 0h1v1h-1V9Zm-1 2v1H8v-1h1Zm1 0h1v1h-1v-1Zm3-2v1h-1V9h1Zm-1 2h1v1h-1v-1Zm-2-4h1v1h-1V7Zm3 0v1h-1V7h1Zm-2-2v1h-1V5h1Zm1 0h1v1h-1V5Z" />
                  </svg>
                </div>
                <input
                  required
                  className="border-top-0 border-end-0 border-start-0 shadow-sm border-bottom-5 mx-2 form-control trackingInputs"
                  type="text"
                  placeholder="Enter a country/region name"
                />
              </div>
            </div>
            <button className="track-button border-1 my-3" type="submit">
              Find
            </button>
          </form>
        );
      default:
        return (
          <form className="form-control border-0 p-3">
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <input
                  required
                  className="border-top-0 border-end-0 border-start-0 mx-2 shadow-sm form-control trackingInputs"
                  type="text"
                  placeholder="Enter a tracking ID"
                />
              </div>
            </div>
            <button className="track-button border-1 my-3" type="submit">
              Track
            </button>
          </form>
        );
    }
  };
  return (
    <>
      <div className="card my-2">
        <div className="card-header d-flex justify-content-around ">
          <p
            className={`methods ${activeForm === "tracking" ? "active" : ""}`}
            onClick={() => handleFormChange("tracking")}
          >
            Tracking
          </p>
          <p
            className={`methods ${activeForm === "schedules" ? "active" : ""}`}
            onClick={() => handleFormChange("schedules")}
          >
            Schedules
          </p>
          <p
            className={`methods ${
              activeForm === "localOffices" ? "active" : ""
            }`}
            onClick={() => handleFormChange("localOffices")}
          >
            Local Offices
          </p>
        </div>
        <div className="card-body">{renderForm()}</div>
      </div>

    </>
  );
}
