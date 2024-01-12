import React from "react";
// scss
import "../../asset/scss/main.scss";

// images
import Main_image1 from '../../asset/images/main_image1.png';


function Main() {
  return (
    <>
      <img className="main_image" href="메인 이미지" src={Main_image1} />
      <div className="dump">
      </div>
    </>
  )

}

export default Main;