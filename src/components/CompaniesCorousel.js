import React, { Component } from "react";
import Slider from "react-slick";
import "../styling/App.css";
export default class MultipleItem extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="companySlider-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/homepage/brands/apm-terminals_pos.svg"
              alt="FMCG"
              className="company-slider-images img-fluid"
            />
          </div>
          <div className="companySlider-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/homepage/brands/svitzer.svg"
              alt="Retail"
              className="company-slider-images img-fluid"
            />
          </div>
          <div className="companySlider-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/twill/images/twill-logo_with_endorsement_full_colour_light_rgb-01.svg"
              alt="Fashion & Style"
              className="company-slider-images img-fluid"
            />
          </div>

          <div className="companySlider-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/homepage/brands/sealandmaersk.svg"
              alt="Refrigrated goods"
              className="company-slider-images img-fluid"
            />
          </div>
          <div className="companySlider-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/homepage/brands/hamburg-sud_logo_rgb.svg"
              alt="Automotive"
              className="company-slider-images img-fluid"
            />
          </div>
          <div className="companySlider-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/homepage/brands/alianca_logo_rgb.svg"
              alt="Pharma & Healthcare"
              className="company-slider-images img-fluid"
            />
          </div>
          <div className="companySlider-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/homepage/brands/maersk_line_limited_rgb_logo.svg"
              alt="Technology"
              className="company-slider-images img-fluid"
            />
          </div>
          <div className="companySlider-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/homepage/brands/maersk-container-industry.svg"
              alt="Technology"
              className="company-slider-images img-fluid"
            />
          </div>
          <div className="companySlider-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/homepage/brands/maersk-training.svg"
              alt="Technology"
              className="company-slider-images img-fluid"
            />
          </div>
          <div className="companySlider-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/homepage/brands/maersk-supply-service.png"
              alt="Technology"
              className="company-slider-images img-fluid"
            />
          </div>
          <div className="companySlider-div">
            <img
              src="https://www.maersk.com/~/media_sc9/maersk/homepage/brands/maersk-h2s.png"
              alt="Technology"
              className="company-slider-images img-fluid"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
