import React, { useState } from 'react';

// images
import Back from "../asset/icons/arrow_back.svg";
import Forward from "../asset/icons/arrow_forward.svg";

export default function ContentImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="contentImageSlider-wrapper">
      <div className="contentImageSlider-wrapper2">
        <img
          className="contentImageSlider-forward"
          src={Forward}
          alt="forward"
          onClick={handleNext}
        />
        <img
          className="contentImageSlider-back"
          src={Back}
          alt="back"
          onClick={handlePrev}
        />
        <div
          className="contentImageSlider-images"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className="contentImageSlider-image"
              alt={`Slide ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}