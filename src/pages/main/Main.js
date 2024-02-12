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
  const element1 = useRef(null);
  const element2 = useRef(null);
  const element3 = useRef(null);
  const element4 = useRef(null);
  const [isFocus, setIsFocus] = useState([true, false, false, false]);
  const [curScroll, setCurScroll] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const windowHeight = window.innerHeight;
  //     const element2Bottom = element2.current.getBoundingClientRect().bottom;
  //     const element3Bottom = element3.current.getBoundingClientRect().bottom;
  //     const element4Bottom = element4.current.getBoundingClientRect().bottom;
  //     const scrollPosition = window.scrollY + windowHeight;

  //     if (scrollPosition < element2Bottom) {
  //       setIsFocus([true, false, false, false]);
  //     } else if (scrollPosition < element3Bottom) {
  //       setIsFocus([false, true, false, false]);
  //     } else if (scrollPosition < element4Bottom) {
  //       setIsFocus([false, false, true, false]);
  //     } else {
  //       setIsFocus([false, false, false, true]);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

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
    if (element1.current != null && element2.current != null && element3.current != null && element4.current != null) {
      if (scrollBottom < element2.current.offsetTop + element2.current.getBoundingClientRect().height) {
        setIsFocus([true, false, false, false]);
      } else if (scrollBottom < element3.current.offsetTop + element3.current.getBoundingClientRect().height) {
        setIsFocus([false, true, false, false]);
      } else if (scrollBottom < element4.current.offsetTop + element4.current.getBoundingClientRect().height) {
        setIsFocus([false, false, true, false]);
      } else {
        setIsFocus([false, false, false, true]);
      }
    }
  }, [curScroll])

  const scrollToSection = (elementRef) => {
    if (elementRef.current !== null) {
      const windowHeight = window.innerHeight;
      const elementHeight = elementRef.current.getBoundingClientRect().height;
      const elementOffsetTop = elementRef.current.offsetTop;
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
        <div className={`scrollButtons-button ${isFocus[0] ? 'focused' : ''}`} onClick={() => scrollToSection(element1)} />
        <div className={`scrollButtons-button ${isFocus[1] ? 'focused' : ''}`} onClick={() => scrollToSection(element2)} />
        <div className={`scrollButtons-button ${isFocus[2] ? 'focused' : ''}`} onClick={() => scrollToSection(element3)} />
        <div className={`scrollButtons-button ${isFocus[3] ? 'focused' : ''}`} onClick={() => scrollToSection(element4)} />
      </div>
      <Slide ref={element1} />
      <section className="second-section" ref={element2}>
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
      <section className="third-section" ref={element3}>
        <HalfPictureHalfWrites />
      </section>

      <section className="fourth-section" ref={element4}>
        <WritesInfo />
      </section>
    </>
  )
}

export default Main;