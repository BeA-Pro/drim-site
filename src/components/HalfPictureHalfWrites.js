import React from "react";
import { useNavigate } from "react-router-dom";

// writes
import { section3Content, section3title } from '../data/string'

// images
import half_image from '../asset/images/third-section-img.png';

function HalfPictureHalfWrites() {
  const navigate = useNavigate();

  const moveTo = () => {
    navigate('/inquiry');
  }

  return (
    <div className="halfPictureHalfWrites-wrap">
      <div className="half-picture-container">
        <img className="half-picture" src={half_image} alt="info" />
      </div>
      <div className="half-writes">
        <div className="half-writes-title">{section3title}
        </div>
        <div className="half-writes-detail">{section3Content}</div>
        <button className="half-writes-button" onClick={moveTo}>문의하기</button>
      </div>
    </div>
  )
}

function MobileHalfPictureHalfWrites() {
  const navigate = useNavigate();

  const moveTo = () => {
    navigate('/inquiry');
  }

  return (
    <div className="halfPictureHalfWrites-wrap">
      <div className="image-container">

        <img className="half-picture" src={half_image} alt="info" />

      </div>
      <div className="half-writes">
        <div className="half-writes-title">{section3title}</div>
        <div className="half-writes-detail">{section3Content}</div>
        <button className="half-writes-button" onClick={moveTo}>문의하기</button>
      </div>
    </div>
  )
}



export { HalfPictureHalfWrites, MobileHalfPictureHalfWrites };