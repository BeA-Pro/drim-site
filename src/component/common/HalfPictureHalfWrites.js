import React from "react";
//scss
import "../../asset/scss/halfPictureHalfWrites.scss";

// images
import half_image from '../../asset/images/third-section-img.png';

function HalfPictureHalfWrites() {

  return (
    <div className="halfPictureHalfWrites-wrap">
      <img className="half-picture" src={half_image} />
      <div className="half-writes">
      </div>
    </div>
  )
}

export default HalfPictureHalfWrites;