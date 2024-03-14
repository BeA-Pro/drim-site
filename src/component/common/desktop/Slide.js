import React, { useState, useEffect, useCallback, forwardRef } from 'react';

// scss
import "../../../asset/scss/desktop/slide.scss"

// images
import Main_image1 from '../../../asset/images/main_image1.png';
import Main_image2 from '../../../asset/images/main_image2.png';
import Main_image3 from '../../../asset/images/main_image3.png';

const Slide = forwardRef((props, ref) => {
  const slideImages = [
    {
      id: 0,
      img: Main_image1
    },
    {
      id: 1,
      img: Main_image2
    },
    {
      id: 2,
      img: Main_image3
    },
  ];

  const slideButtons = [0, 1, 2];

  const [currentIdx, setCurrentIdx] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIdx((preIdx) => (preIdx + 1) % slideImages.length);
  }, [slideImages.length]);

  const changeCurSlide = (clickIndex) => {
    setCurrentIdx((preIdx) => (clickIndex));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIdx, nextSlide]);


  return (
    <div ref={ref} className="slide-wrap">
      {slideImages.map((image) => (
        <img
          key={image.id}
          className={`main-image ${image.id === currentIdx ? "active" : ""}`}
          src={image.img}
          alt={`slide ${image.id}`}
        />
      ))}

      <div className='slide-button-list'>
        {slideButtons.map((index) => (
          <div
            key={index}
            className={`slide-button`}
            onClick={() => changeCurSlide(index)}
          >
            <div className={`left ${index === currentIdx ? "active" : ""}`} />
            <div className={`center ${index === currentIdx ? "active" : ""}`} />
            <div className={`right ${index === currentIdx ? "active" : ""}`} />
          </div>
        ))}
      </div>
    </div>
  );
});
export default Slide;