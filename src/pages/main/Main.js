import React from "react";
// scss
import "../../asset/scss/main.scss";

// component
import Slide from "../../component/common/Slide";
import SiteActivityComponent from "../../component/common/SiteActivityComponent";

// icons
import Works from '../../asset/icons/works.svg';
import Time from '../../asset/icons/time.svg';
import People from '../../asset/icons/people.svg';
import HalfPictureHalfWrites from "../../component/common/HalfPictureHalfWrites";




function Main() {
  return (
    <>
      <Slide />
      <section className="second-section">
        <div className="second-section-title">About us</div>
        <div className="siteActivityComponent-wrap">
          <SiteActivityComponent id="projects" count={12} />
          <SiteActivityComponent id="totalTurnover" count={23} />
          <SiteActivityComponent id="career" count={34} />
        </div>
      </section>
      <section className="third-section">
        <HalfPictureHalfWrites />
      </section>
    </>
  )

}

export default Main;