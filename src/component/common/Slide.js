import React, { useState, useEffect } from 'react';

// scss
import "../../asset/scss/slide.scss"

// images
import Main_image1 from '../../asset/images/main_image1.png';
import Main_image2 from '../../asset/images/main_image2.png';
import Main_image3 from '../../asset/images/main_image3.png';

function Slide() {
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

  const preSlide = () => {
    setCurrentIdx((preIdx) => (preIdx - 1 + slideImages.length) % slideImages.length);
  };

  const nextSlide = () => {
    setCurrentIdx((preIdx) => (preIdx + 1) % slideImages.length);
  }

  const changeCurSlide = (clickIndex) => {
    setCurrentIdx((preIdx) => (clickIndex));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // 클리어 필요
  }, [currentIdx]);


  return (
    <div className="slide-wrap">
      {slideImages.map((image, index) => (
        <img
          key={index}
          className={`main-image ${index === currentIdx ? "active" : ""}`}
          src={image.img}
          alt={`slide ${index}`}
        />
      ))}

      <div className='slide-button-list'>
        {slideButtons.map((index) => (
          <button
            key={index}
            className={`slide-button ${index === currentIdx ? "active" : ""}`}
            onClick={() => changeCurSlide(index)}
          />
        ))}
      </div>
    </div >
  )

}

// <div className='slide-button-list'>
//   <button className='slide-button' />
//   <button className='slide-button' />
//   <button className='slide-button' />
// </div>

// <div className='slide-button-list'>
//         {slideButtons.map((index) => {
//           <button className={`'slide-button' ${index === currentIdx ? "active" : ""}`} />
//         })
//         }
//       </div>
export default Slide;