import React from "react";
// scss
import "../../asset/scss/main.scss";

// images
import Main_image1 from '../../asset/images/main_image1.png';


function Main() {
  return (
    <div className="main-wrap">
      <img className="main-image" src={Main_image1} alt="메인이미지" />
    </div>
  )

}

export default Main;