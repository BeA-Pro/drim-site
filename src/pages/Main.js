import React, { useRef, useState, useEffect } from "react";

import { section2title, section2Content } from '../data/string'

// component
import { Slide, MobileSlide } from "../components/Slide";
import { SiteActivityComponent, MobileSiteActivityComponent } from "../components/SiteActivityComponent";
import { HalfPictureHalfWrites, MobileHalfPictureHalfWrites } from "../components/HalfPictureHalfWrites";
import { WritesInfo, MobileWritesInfo } from "../components/WritesInfo";


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
      const [, el2, el3, el4] = elementRefs;

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
          <div className="second-section-title">{section2title}</div>
          <div className="second-section-writes">{section2Content}</div>
          <div className="siteActivityComponent-wrap">
            <SiteActivityComponent id="projects" count={42} />
            <SiteActivityComponent id="totalTurnover" count={120} />
            <SiteActivityComponent id="career" count={22} />
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

function MobileMain() {
  return (
    <>
      <MobileSlide />
      <section className="second-section">
        <div className="second-section-wrap">
          <div className="second-section-title">{section2title}</div>
          <div className="siteActivityComponent-wrap">
            <MobileSiteActivityComponent id="projects" count={42} />
            <MobileSiteActivityComponent id="totalTurnover" count={120} />
            <MobileSiteActivityComponent id="career" count={22} />
          </div>
        </div>
      </section>
      <section className="third-section">
        <MobileHalfPictureHalfWrites />
      </section>
      <section className="fourth-section">
        <MobileWritesInfo />
      </section>
    </>
  )
}

export { Main, MobileMain }