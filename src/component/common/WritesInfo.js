import React, { useState, useEffect, useRef } from 'react';

// scss
import "../../asset/scss/writesInfo.scss"


function WritesInfo() {

  const [isVisible, setIsVisible] = useState(false);

  const elementRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (elementBottom < windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, []);



  return (
    <div className="writeInfo-wrap" ref={elementRef}>
      <div className={`writeInfo-first ${isVisible ? 'hover' : ''}`}>
        <div className={`writeInfo-first title ${isVisible ? 'hover' : ''}`}>Environmental</div>
        <div className={`writeInfo-first subTitle ${isVisible ? 'hover' : ''}`}>leadership is out DNA</div>
        <div className={`writeInfo-first detail ${isVisible ? 'hover' : ''}`}>Write some words Write some words Write some words Write some words Write some words Write some words Write some words Write some words Write some words Write some words Write some words Write some words</div>
      </div>
      <div className={`writeInfo-second ${isVisible ? 'hover' : ''}`}>
        <div className={`writeInfo-second title ${isVisible ? 'hover' : ''}`}>Social</div>
        <div className={`writeInfo-second subTitle ${isVisible ? 'hover' : ''}`}>equity is good design</div>
        <div className={`writeInfo-second detail ${isVisible ? 'hover' : ''}`}>Write some words Write some words Write some words Write some words Write some words Write some words Write some words Write some words Write some words Write some words Write some words Write some words</div>
      </div>
      <div className={`writeInfo-third ${isVisible ? 'hover' : ''}`}>
        <div className={`writeInfo-third title ${isVisible ? 'hover' : ''}`}>Governance</div>
        <div className={`writeInfo-third subTitle ${isVisible ? 'hover' : ''}`}>reinforces our values</div>
        <div className={`writeInfo-third detail ${isVisible ? 'hover' : ''}`}>Write some words Write some words Write some words Write some words Write some words Write some words Write some words Write some words Write some words Write some words Write some words Write some words</div>
      </div>
    </div >
  )

}
export default WritesInfo;