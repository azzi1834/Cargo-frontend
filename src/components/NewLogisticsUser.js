import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import transportationGoods from "../images/transportation-goods.svg";
import supplyChainGoods from "../images/supply-chain-goods.svg";
import bothlogistics from "../images/bothlogistics.svg";
import dryCargo from "../images/dry-cargo.svg";
import refrigratedCargo from "../images/refrigrated-cargo.svg";
import specialCargo from "../images/special-cargo.svg";

export default function NewLogisticsUser() {
  const [lgShow, setLgShow] = useState(false);
  const [transportationShow, setTransportationShow] = useState(false);

  return (
    <>
      <button
        className="btn btn-primary btn-sm ms-5 start"
        onClick={() => setLgShow(true)}
      >
        Start
      </button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <p className="mx-3">
            Are you looking for options regarding transporting goods or support
            for other areas of your supply chain?
          </p>
          <div className="row p-3">
            <div className="col-md-4">
              <div
                className="card text-center logistic-items"
                onClick={() => setTransportationShow(true)}
              >
                <img
                  src={transportationGoods}
                  alt="transportation Goods"
                  style={{ width: "100px", height: "100px" }}
                />
                <p>Transportation Goods</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center logistic-items">
                <img
                  src={supplyChainGoods}
                  alt="transportation Goods"
                  style={{ width: "100px", height: "100px" }}
                />
                <p>Supply Chain Support</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center logistic-items">
                <img
                  src={bothlogistics}
                  alt="transportation Goods"
                  style={{ width: "100px", height: "100px" }}
                />
                <p>Both</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* ------------Transportation Cargo modal extension------------ */}
      <Modal
        size="lg"
        show={transportationShow}
        onHide={() => setTransportationShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row p-3">
            <div className="col-md-8">
              <p>Transportation goods</p>
            </div>
            <div
              className="col-md-4 me-0"
              style={{ paddingLeft: "180px", cursor: "pointer" }}
            >
              change
            </div>
          </div>
          <p className="mx-3">
            What type of goods are you looking to transport?
          </p>
          <div className="row p-3">
            <div className="col-md-4">
              <div className="card text-center logistic-items">
                <img
                  src={dryCargo}
                  alt="Dry Cargo"
                  style={{ width: "100px", height: "100px" }}
                />
                <p>Dry Cargo</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center logistic-items">
                <img
                  src={refrigratedCargo}
                  alt="Refrigrated Cargo"
                  style={{ width: "100px", height: "100px" }}
                />
                <p>Refrigrated Cargo</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center logistic-items">
                <img
                  src={specialCargo}
                  alt="Special Cargo"
                  style={{ width: "100px", height: "100px" }}
                />
                <p>Special Cargo</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* ------------Supply Chain Cargo modal extension------------ */}
      {/* <Modal
        size="lg"
        show={transportationShow}
        onHide={() => setTransportationShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row p-3">
            <div className="col-md-8">
              <p>Transportation goods</p>
            </div>
            <div
              className="col-md-4 me-0"
              style={{ paddingLeft: "180px", cursor: "pointer" }}
            >
              change
            </div>

          </div>
          <p className="mx-3">
            Which part of your supply chain do you need support with?
          </p>
          <div className="row p-3">
            <div className="col-md-4">
              <div className="card text-center logistic-items">
                <img
                  src={dryCargo}
                  alt="Dry Cargo"
                  style={{ width: "100px", height: "100px" }}
                />
                <p>Dry Cargo</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center logistic-items">
                <img
                  src={refrigratedCargo}
                  alt="Refrigrated Cargo"
                  style={{ width: "100px", height: "100px" }}
                />
                <p>Refrigrated Cargo</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center logistic-items">
                <img
                  src={specialCargo}
                  alt="Special Cargo"
                  style={{ width: "100px", height: "100px" }}
                />
                <p>Special Cargo</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
    </>
  );
}
