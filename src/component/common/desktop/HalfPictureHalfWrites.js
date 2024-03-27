import React from "react";
//scss
import "../../../asset/scss/desktop/halfPictureHalfWrites.scss";

// images
import half_image from '../../../asset/images/third-section-img.png';

function HalfPictureHalfWrites() {

  return (
    <div className="halfPictureHalfWrites-wrap">
      <div className="half-picture-container">
        <img className="half-picture" src={half_image} alt="info" />
      </div>
      <div className="half-writes">
        <div className="half-writes-title">Design Your Career With Us</div>
        <div className="half-writes-detail">Please write some words Please write some wordsPlease write some wordsPlease write some words Please write some words Please write some words Please write some words Please write some words Please write some words</div>
        <button className="half-writes-button">JOIN OUR TEAM</button>
      </div>
    </div>
  )
}

export default HalfPictureHalfWrites;