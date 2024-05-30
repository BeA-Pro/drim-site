import React from 'react'

//images
import IconHand from "../asset/icons/iconHand.svg";
import IconJustice from "../asset/icons/iconJustice.svg";
import IconLight from "../asset/icons/iconLight.svg";
import MissionImage from "../asset/images/imgMission.png";

function Management() {
  return (
    <div className="management-wrapper">
      <div className="management-title">경영이념</div>
      <div className="management-details">
        <div className="management-details-row">
          <p className="management-details-title">Mission</p>
          <div className="management-details-content">
            <p className="management-details-writes">드림종합건설은 인간이 생활하는
              최적의 공간과 장소를 제공합니다</p>
            <img src={MissionImage} alt="MissionImage" className="management-details-image" />
          </div>
        </div>
        <div className="management-details-row">
          <p className="management-details-title">Core Value</p>
          <div className="management-details-content">
            <div className="management-details-value">
              <img src={IconHand} alt="iconHand" className="management-icon" />
              <p className="management-value-writes" >기본과 원칙</p>
            </div>
            <div className="management-details-value">
              <img src={IconJustice} alt="iconJustice" className="management-icon" />
              <p className="management-value-writes" >성과중심의경영</p>
            </div>
            <div className="management-details-value">
              <img src={IconLight} alt="iconLight" className="management-icon" />
              <p className="management-value-writes" >조직역량강화</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Management }