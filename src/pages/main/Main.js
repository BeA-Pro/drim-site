import React from "react";
// scss
import "../../asset/scss/main.scss";

// component
import Slide from "../../component/common/Slide";
import SiteActivityComponent from "../../component/common/SiteActivityComponent";

// icons
import HalfPictureHalfWrites from "../../component/common/HalfPictureHalfWrites";
import WritesInfo from "../../component/common/WritesInfo";




function Main() {
  return (
    <>
      <Slide />
      <section className="second-section">
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
      <section className="third-section">
        <HalfPictureHalfWrites />
      </section>

      <section className="fourth-section">
        <WritesInfo />
      </section>
    </>
  )
}

export default Main;