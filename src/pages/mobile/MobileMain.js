import React from "react";

// component
import MobileSlide from "../../components/mobile/MobileSlide";
import MobileSiteActivityComponent from "../../components/mobile/MobileSiteActivityComponent";

// icons
import MobileHalfPictureHalfWrites from "../../components/mobile/MobileHalfPictureHalfWrites";
import MobileWritesInfo from "../../components/mobile/MobileWritesInfo";


function MobileMain() {
  return (
    <>
      <MobileSlide />
      <section className="second-section">
        <div className="second-section-wrap">
          <div className="second-section-title">About us</div>
          <div className="siteActivityComponent-wrap">
            <MobileSiteActivityComponent id="projects" count={12} />
            <MobileSiteActivityComponent id="totalTurnover" count={23} />
            <MobileSiteActivityComponent id="career" count={34} />
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

export default MobileMain;