import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function ReferenceModal() {
  const [lgShow, setLgShow] = useState(false);
  const [COR, setCOR] = useState(false);
  const [CRN, setCRN] = useState(false);
  const [DOD, setDOD] = useState(false);
  const [DUN, setDUN] = useState(false);
  const [EORI, setEORI] = useState(false);
  const [FOF, setFOF] = useState(false);

  const referenceData = [
    {
      text: "Customer's own reference number - COR",
    },
    {
      text: "Company registration number - CRN",
    },
    {
      text: "US government location code / DoDAAC number - DOD",
    },
    {
      text: " Dun & bradstreet identification number - DUN",
    },
    {
      text: "Economic operators registration and identification number - EORI",
    },
    {
      text: "Federal maritime commission code - FOF",
    },
  ];
  const handleChange = (value, i) => {
    switch (value) {
      case "COR":
        setCOR(!COR);
        break;
      case "CRN":
        setCRN(!CRN);
        break;
      case "DOD":
        setDOD(!DOD);
        break;
      case "DUN":
        setDUN(!DUN);
        break;
      case "EORI":
        setEORI(!EORI);
        break;
      case "FOF":
        setFOF(!FOF);
        break;
    }
  };
  const handleModal = () => {
    setLgShow(false);
  };
  //   const handleCheck = () => {
  //     if (COR) {
  //       return true;
  //     }
  //   };
  return (
    <>
      <div>
        <div className="addreference-button">
          <p onClick={() => setLgShow(true)}> + Add reference details</p>
        </div>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <h6 className="my-2">
              <strong>Customer Reference (optional)</strong>
            </h6>
            <h6 className="my-2">Select the relevant references</h6>

            <div>
              {referenceData.map((data, index) => (
                <div key={index} class="form-check my-2">
                  <input
                    class="form-check-input "
                    type="checkbox"
                    value=""
                    //   checked={handleCheck}
                    id="flexCheckDefault"
                    style={{ cursor: "pointer", fontSize: "20px" }}
                    onChange={() => handleChange(data.text.slice(-3), index)}
                  />
                  <label class="form-check-label mx-1" for="flexCheckDefault">
                    {data.text}
                  </label>
                </div>
              ))}
            </div>
            <div className="mt-5 d-flex flex-row-reverse ">
              <button
                className="btn btn-primary track-button"
                onClick={handleModal}
              >
                Publish
              </button>
            </div>
          </Modal.Body>
        </Modal>
        <div className="references">
          {COR ? (
            <div>
              <label htmlFor="referenceNumber" className="mx-3">
                Customer's own reference number (optional)
              </label>
              <form action="" className="form-control border-0">
                <input
                  type="text"
                  name="referenceNumber"
                  id="referenceNumber"
                  className="form-control"
                />
              </form>
            </div>
          ) : (
            ""
          )}
          {CRN ? (
            <div>
              <label htmlFor="referenceNumber" className="mx-3">
                Company registration number (optional){" "}
              </label>
              <form action="" className="form-control border-0">
                <input
                  type="text"
                  name="referenceNumber"
                  id="referenceNumber"
                  className="form-control"
                />
              </form>
            </div>
          ) : (
            ""
          )}
          {DOD ? (
            <div>
              <label htmlFor="referenceNumber" className="mx-3">
                US government location code / DoDAAC number (optional)
              </label>
              <form action="" className="form-control border-0">
                <input
                  type="text"
                  name="referenceNumber"
                  id="referenceNumber"
                  className="form-control"
                />
              </form>
            </div>
          ) : (
            ""
          )}
          {DUN ? (
            <div>
              <label htmlFor="referenceNumber" className="mx-3">
                Dun & bradstreet identification number (optional)
              </label>
              <form action="" className="form-control border-0">
                <input
                  type="text"
                  name="referenceNumber"
                  id="referenceNumber"
                  className="form-control"
                />
              </form>
            </div>
          ) : (
            ""
          )}
          {EORI ? (
            <div>
              <label htmlFor="referenceNumber" className="mx-3">
                Economic operators registration and identification number
                (optional)
              </label>
              <form action="" className="form-control border-0">
                <input
                  type="text"
                  name="referenceNumber"
                  id="referenceNumber"
                  className="form-control"
                />
              </form>
            </div>
          ) : (
            ""
          )}
          {FOF ? (
            <div>
              <label htmlFor="referenceNumber" className="mx-3">
                Federal maritime commission code (optional)
              </label>
              <form action="" className="form-control border-0">
                <input
                  type="text"
                  name="referenceNumber"
                  id="referenceNumber"
                  className="form-control"
                />
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
