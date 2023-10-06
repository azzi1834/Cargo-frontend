import React from "react";
import FavAndLearnmore from "./FavAndLearnmore";

export default function CorouselCard({ imgName, title, text, btnName }) {
  return (
    <div>
      <div className="check">
        <div className="card cards-services h-100">
          <img
            className="card-img-top corousel-img"
            src={imgName}
            alt={imgName}
          />
          <div className="card-body ">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>

            <div className="card-footer">
              <FavAndLearnmore btnName={btnName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
