import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Feedback() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [count, setCount] = useState(0);
  const [nameCount, setNameCount] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const customLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [userRating, setUserRating] = useState(1);
  const handleRatingChange = (event, newValue) => {
    setUserRating(newValue);
  };
  const options = [
    {
      value: "Please Select Option",
      label: "Please Select Option",
      className: "disabled",
    },
    {
      value: "General Management",
      label: "General Management",
      className: "myOptionClassName",
    },
    {
      value: "Operations Management",
      label: "Operations Management",
      className: "",
    },
    {
      value: "Logistic Management",
      label: "Logistic Management",
      className: "",
    },
    { value: "Customs Management", label: "Customs Management", className: "" },
    { value: "Procurement", label: "Procurement", className: "" },
    { value: "Finance", label: "Finance", className: "" },
    { value: "Customer Service", label: "Customer Service", className: "" },
    { value: "Import Operations", label: "Import Operations", className: "" },
    { value: "Export Operations", label: "Export Operations", className: "" },
    {
      value: "Booking/shiping clerk",
      label: "Booking/shiping clerk",
      className: "",
    },
    { value: "Other", label: "Other", className: "" },
  ];
  const defaultOption = options[0];
  const handleSelectOption = (e) => {
    setSelectedOption(e.target.value);
    if (selectedOption === "yes") {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Feeback
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Maersk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="my-4">Tell us about your visit</div>
          <div>
            Overall,how satisfied are you with your experience on our website
            today?
          </div>
          <div className="my-3">
            <Box
              m="14px"
              p="30px"
              sx={{
                "& > legend": { mt: 2 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {customLabels.map((label, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: "center",
                    margin: "1px",
                    border: "1px solid black",
                    borderRadius: "30px",
                    borderColor: "black",
                  }}
                >
                  <Avatar
                    sx={{
                      backgroundColor:
                        userRating >= index + 1 ? "#4cb0c2" : "white",
                      cursor: "pointer",
                    }}
                    onClick={() => setUserRating(index + 1)}
                    onMouseEnter={() => setUserRating(index + 1)}
                    onMouseLeave={() => setUserRating(index + 1)}
                  >
                    <Typography variant="body2" color="textSecondary">
                      {label}
                    </Typography>
                  </Avatar>
                </div>
              ))}
              <Rating
                className="m-auto"
                name="customized-10"
                value={userRating}
                max={10}
                onChange={handleRatingChange}
                IconContainerComponent={({ value, ...props }) => {
                  return (
                    <span {...props}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                      ></Typography>
                    </span>
                  );
                }}
              />
            </Box>
          </div>
          <div>
            <label className="mt-2 mb-2" htmlFor="textArea">
              Could you please tell us more?
            </label>
            <textarea
              className="form-control mb-3"
              id="textArea"
              rows="3"
              style={{ borderColor: "black" }}
            ></textarea>
          </div>
          <div>
            <label className="mt-2 mb-1" htmlFor="selection">
              Which of the following best describes your role?
            </label>
            <Dropdown
              className="my-2"
              options={options}
              // onChange={this._onSelect}
              value={defaultOption}
              style={{ borderColor: "black" }}
              placeholder="Select an option"
            />
          </div>
          <div>
            <label className="my-1" htmlFor="roleDescription">
              Please, describe your role
            </label>
            <input
              type="text"
              name="roleDescription"
              id="roleDescription"
              style={{ borderColor: "black" }}
              className="form-control my-2"
              maxLength={50}
              onChange={(e) => setCount(e.target.value.length)}
            />
            <label htmlFor="charLimit" className="d-flex flex-row-reverse">
              {count}/50
            </label>
          </div>
          <div className="my-2">
            <label htmlFor="" className="mb-2">
              If we need clarification on any of your responses, may we contact
              you?
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="yes"
                checked={selectedOption === "yes"}
                onChange={handleSelectOption}
                style={{ borderColor: "#1398b0" }}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Yes, I prefer to communicate via email
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="no"
                checked={selectedOption === "no"}
                onChange={handleSelectOption}
                style={{ borderColor: "#1398b0" }}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                No, please do not contact me
              </label>
            </div>
            {showForm ? (
              ""
            ) : (
              <div className="my-5">
                <label htmlFor="userNameForCommunication">Name</label>
                <input
                  required
                  type="text"
                  style={{ borderColor: "black" }}
                  name="userNameForCommunication"
                  id="userNameForCommunication"
                  className="form-control"
                  maxLength={50}
                  onChange={(e) => setNameCount(e.target.value.length)}
                />
                <label htmlFor="charLimit" className="d-flex flex-row-reverse">
                  {nameCount}/50
                </label>
                <label htmlFor="userEmailForCommunication">Email</label>
                <input
                  required
                  type="email"
                  name="userEmailForCommunication"
                  id="userEmailForCommunication"
                  className="form-control"
                  style={{ borderColor: "black" }}
                />
              </div>
            )}
          </div>
          <div>
            <p className="mt-3">
              For more information about your privacy, please see our <br />
              <a href="" style={{ color: "black" }}>
                Privacy and Cookie Policy
              </a>
            </p>
          </div>
          {/* </div> */}
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex flex-column">
            <div>
              <Button
                className=" bg-light"
                style={{
                  color: "black",
                  borderRadius: "0px",
                  border: "1px solid black",
                  paddingLeft: "35px",
                  paddingRight: "35px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                }}
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                className="mx-3"
                variant="primary"
                style={{
                  backgroundColor: "#1398b0",
                  borderRadius: "0px",
                  border: "0px",
                  paddingLeft: "35px",
                  paddingRight: "35px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                }}
                onClick={handleClose}
                type="submit"
              >
                Submit
              </Button>
            </div>
            <div className="d-flex flex-row-reverse">
              <p className="p-3">
                Powered by <strong>Medallia</strong>
              </p>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Feedback;
