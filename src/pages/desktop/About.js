import React, { useRef, useState, useEffect } from "react";


//image
import AboutImage from '../../asset/images/about_image.png';


function About() {
  return (
    <>
      <img className="main-image" src={AboutImage} alt="aboutImage" />
    </>
  )
}

export default About;