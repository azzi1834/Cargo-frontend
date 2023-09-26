import React, { Component } from "react";
import Slider from "react-slick";
import "../styling/App.css";
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="image-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/home_furniture_96x96.svg?h=240&la=en&w=240&hash=BE80449F6E61744320FE10226597244D"
              alt="FMCG"
              className="slider-images img-fluid"
            />
            <h5 className="text-center mt-2">FMCG</h5>
          </div>
          <div className="image-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/home-decor_96x96.svg?h=240&la=en&w=240&hash=704F74D1A01606F9C6D74DD324E25C87"
              alt="Retail"
              className="slider-images img-fluid"
            />
            <h5 className="text-center mt-2">Retails</h5>
          </div>
          <div className="image-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/weekly-merchandise-products_96x96.svg?h=240&la=en&w=240&hash=47B85E39A19096B6C05E0DCED8A166C1"
              alt="Fashion & Style"
              className="slider-images img-fluid"
            />
            <h5 className="text-center mt-2">Fashion & Styles</h5>
          </div>
          <div className="image-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/centre-store_96x96.svg?h=240&la=en&w=240&hash=60DEC8C86B4B66EC0EAA12DA922FF62B"
              alt="Chemicals"
              className="slider-images img-fluid"
            />
            <h5 className="text-center mt-2">Chemicals</h5>
          </div>
          <div className="image-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/frozen-products_96x96_v2.svg?h=240&la=en&w=240&hash=7E9788C09E9B63EE43A01BAA528E1BF5"
              alt="Refrigrated goods"
              className="slider-images img-fluid"
            />
            <h5 className="text-center mt-2">Refrigrated goods</h5>
          </div>
          <div className="image-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/automotive_96x96_v1.svg?h=240&la=en&w=240&hash=05E6F73A2A47ABAEE1234042784BAEDA"
              alt="Automotive"
              className="slider-images img-fluid"
            />
            <h5 className="text-center mt-2">Automotive</h5>
          </div>
          <div className="image-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/pharma_and_healthcare_96x96_v1.svg?h=240&la=en&w=240&hash=FE3919BC208E093C47B6D110FCD5613A"
              alt="Pharma & Healthcare"
              className="slider-images img-fluid"
            />
            <h5 className="text-center mt-2">Pharma & Healthcare</h5>
          </div>
          <div className="image-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/home_appliances_96x96.svg?h=240&la=en&w=240&hash=48E43F733590C42337F0E61A9FAB8956"
              alt="Technology"
              className="slider-images img-fluid"
            />
            <h5 className="text-center mt-2">Technology</h5>
          </div>
        </Slider>
      </div>
    );
  }
}
