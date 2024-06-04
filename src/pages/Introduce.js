import React from 'react'


import IntroImage from '../asset/images/intro_image.png';

function Introduce() {
  return (
    <div className='introduce-wrapper'>
      <img className="main-image" src={IntroImage} alt="inquiryImage" />
      Introduce</div>
  )
}

function MobileIntroduce() {
  return (
    <div className='introduce-wrapper'>
      <img className="main-image" src={IntroImage} alt="inquiryImage" />
      Introduce</div>
  )
}

export { Introduce, MobileIntroduce }