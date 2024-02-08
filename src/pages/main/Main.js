import React, { useRef } from "react";
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
        <div className="scrollButtons-button" onClick={() => scrollToSection(element1)} />
        <div className="scrollButtons-button" onClick={() => scrollToSection(element2)} />
        <div className="scrollButtons-button" onClick={() => scrollToSection(element3)} />
        <div className="scrollButtons-button" onClick={() => scrollToSection(element4)} />
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