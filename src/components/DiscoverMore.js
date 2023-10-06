import React from "react";
import { useDispatch, useSelector } from "react-redux";
import apiSolution from "../images/Prices/apisolution.svg";
import ediSolution from "../images/Prices/edi.svg";
import emissionDashboard from "../images/Prices/co2.svg";
export default function DiscoverMore() {
  const cardData = [
    {
      imgName: apiSolution,
      cardTitle: "API Solutions",
      cardText:
        "API Solutions are the future of data integrations and are capable of secure, fast data transmissions that can be used to automatically update your information in real-time.",
    },
    {
      imgName: ediSolution,
      cardTitle: "Card 2",
      cardText: "This is card 2.",
    },
    {
      imgName: emissionDashboard,
      cardTitle: "Card 3",
      cardText: "This is card 3.",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          {cardData.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img
                  src={card.imgName}
                  className="card-img-top"
                  alt={card.cardTitle}
                />
                <div className="card-body">
                  <h5 className="card-title">{card.cardTitle}</h5>
                  <p className="card-text">{card.cardText}</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary">Access</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
