import React, { useState, useEffect, useRef } from 'react';

// scss
import "../../asset/scss/writesInfo.scss"

// strings
import { environment, environmentSubtitle, environmentWrites, social, socialSubtitle, socialWrites, goveranance, goverananceSubtitle, goverananceWrites } from '../../component/data/string'


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
      <div className={`writeInfo-first wrap ${isVisible ? 'hover' : ''}`}>
        <div className={`writeInfo-first title ${isVisible ? 'hover' : ''}`}>{environment}</div>
        <div className={`writeInfo-first subTitle ${isVisible ? 'hover' : ''}`}>{environmentSubtitle}</div>
        <div className={`writeInfo-first detail ${isVisible ? 'hover' : ''}`}>{environmentWrites}</div>
      </div>
      <div className={`writeInfo-second wrap ${isVisible ? 'hover' : ''}`}>
        <div className={`writeInfo-second title ${isVisible ? 'hover' : ''}`}>{social}</div>
        <div className={`writeInfo-second subTitle ${isVisible ? 'hover' : ''}`}>{socialSubtitle}</div>
        <div className={`writeInfo-second detail ${isVisible ? 'hover' : ''}`}>{socialWrites}</div>
      </div>
      <div className={`writeInfo-third wrap ${isVisible ? 'hover' : ''}`}>
        <div className={`writeInfo-third title ${isVisible ? 'hover' : ''}`}>{goveranance}</div>
        <div className={`writeInfo-third subTitle ${isVisible ? 'hover' : ''}`}>{goverananceSubtitle}</div>
        <div className={`writeInfo-third detail ${isVisible ? 'hover' : ''}`}>{goverananceWrites}</div>
      </div>
    </div >
  )

}
export default WritesInfo;