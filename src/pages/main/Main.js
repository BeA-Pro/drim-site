import React, { useRef, useState, useEffect } from "react";
// scss
import "../../asset/scss/main.scss";

// component
import Slide from "../../component/common/Slide";
import SiteActivityComponent from "../../component/common/SiteActivityComponent";

// icons
import HalfPictureHalfWrites from "../../component/common/HalfPictureHalfWrites";
import WritesInfo from "../../component/common/WritesInfo";


function Main() {
  const elements = useRef([null, null, null, null]);

  const [isFocus, setIsFocus] = useState([true, false, false, false]);
  const [curScroll, setCurScroll] = useState(0);

  useEffect(() => {
    const getScrollPosition = () => {
      const pos = window.scrollY;
      setCurScroll(pos);
    }

    window.addEventListener('scroll', getScrollPosition);

    return () => window.removeEventListener('scroll', getScrollPosition);
  }, [])

  useEffect(() => {
    const scrollBottom = curScroll + window.innerHeight;
    const elementRefs = elements.current;

    if (elementRefs.every(ref => ref !== null)) {
      const [el1, el2, el3, el4] = elementRefs;

      if (scrollBottom < el2.offsetTop + el2.getBoundingClientRect().height) {
        setIsFocus([true, false, false, false]);
      } else if (scrollBottom < el3.offsetTop + el3.getBoundingClientRect().height) {
        setIsFocus([false, true, false, false]);
      } else if (scrollBottom < el4.offsetTop + el4.getBoundingClientRect().height) {
        setIsFocus([false, false, true, false]);
      } else {
        setIsFocus([false, false, false, true]);
      }
    }
  }, [curScroll])

  const scrollToSection = (index) => {
    const elementRef = elements.current[index];
    if (elementRef !== null) {
      const windowHeight = window.innerHeight;
      const elementHeight = elementRef.getBoundingClientRect().height;
      const elementOffsetTop = elementRef.offsetTop;
      const scrollPosition = elementOffsetTop - (windowHeight + 100) / 2 + (elementHeight / 2);
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className="scrollButtons-wrap">
        {isFocus.map((focus, index) => (
          <div key={index} className={`scrollButtons-button ${focus ? 'focused' : ''}`} onClick={() => scrollToSection(index)} />
        ))}
      </div>
      <Slide ref={el => elements.current[0] = el} />
      <section className="second-section" ref={el => elements.current[1] = el}>
        <div className="second-section-wrap">
          <div className="second-section-title">About us</div>
          <div className="second-section-writes">Helping our customers create a better world</div>
          <div className="siteActivityComponent-wrap">
            <SiteActivityComponent id="projects" count={12} />
            <SiteActivityComponent id="totalTurnover" count={23} />
            <SiteActivityComponent id="career" count={34} />
          </div>
        </div>
      </section>
      <section className="third-section" ref={el => elements.current[2] = el}>
        <HalfPictureHalfWrites />
      </section>
      <section className="fourth-section" ref={el => elements.current[3] = el}>
        <WritesInfo />
      </section>
    </>
  )
}

export default Main;