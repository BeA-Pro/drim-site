import React from 'react'

//images
import IconTech from "../asset/icons/science.svg";
import IconDesign from "../asset/icons/apartment.svg";
import IconHQ from "../asset/icons/high_quality.svg";
import MissionImage from "../asset/images/imgMission.png";
import { management1, management2, management3, management4 } from '../data/string';

function Management() {
  return (
    <div className="management-wrapper">
      <div className="management-title">경영이념</div>
      <div className="management-details">
        <div className="management-details-row">
          <p className="management-details-title">Mission</p>
          <div className="management-details-content">
            <p className="management-details-writes">{management1}</p>
            <img src={MissionImage} alt="MissionImage" className="management-details-image" />
          </div>
        </div>
        <div className="management-details-row">
          <p className="management-details-title">Core Value</p>
          <div className="management-details-content">
            <div className="management-details-value">
              <img src={IconTech} alt="IconTech" className="management-icon" />
              <p className="management-value-writes" >{management2}</p>
            </div>
            <div className="management-details-value">
              <img src={IconDesign} alt="iconJustice" className="management-icon" />
              <p className="management-value-writes" >{management3}</p>
            </div>
            <div className="management-details-value">
              <img src={IconHQ} alt="iconLight" className="management-icon" />
              <p className="management-value-writes" >{management4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileManagement() {
  return (
    <div className="management-wrapper">
      <div className="management-title">경영이념</div>
      <div className="management-details">
        <div className="management-details-row">
          <p className="management-details-title">Mission</p>
          <div className="management-details-content">
            <p className="management-details-writes">{management1}</p>
          </div>
        </div>
        <div className="management-details-row">
          <p className="management-details-title">Core Value</p>
          <div className="management-details-content">
            <div className="management-details-value">
              <img src={IconTech} alt="IconTech" className="management-icon" />
              <p className="management-value-writes" >{management2}</p>


            </div>
            <div className="management-details-value">
              <img src={IconDesign} alt="iconJustice" className="management-icon" />
              <p className="management-value-writes" >{management3}</p>


            </div>
            <div className="management-details-value">
              <img src={IconHQ} alt="iconLight" className="management-icon" />
              <p className="management-value-writes" >{management4}</p>


            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export { Management, MobileManagement }