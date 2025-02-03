import React from 'react'

import MissionImage from "../asset/images/imgMission.png";

//images
import Technology from "../asset/images/technology.png";
import Design from "../asset/images/design.png";
import Quality from "../asset/images/quality.png";
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
            <img src={MissionImage} alt="MissonImage" className="management-details-image" />
          </div>
        </div>
        <div className="management-details-row">
          <p className="management-details-title">Core Value</p>
          <div className="management-details-content">
            <div className="management-details-value">
              <img src={Technology} alt="Technology" className="management-icon" />
              <p className="management-value-writes" >{management2}</p>
            </div>
            <div className="management-details-value">
              <img src={Design} alt="Design" className="management-icon" />
              <p className="management-value-writes" >{management3}</p>
            </div>
            <div className="management-details-value">
              <img src={Quality} alt="Quality" className="management-icon" />
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
              <img src={Technology} alt="Technology" className="management-icon" />
              <p className="management-value-writes" >{management2}</p>


            </div>
            <div className="management-details-value">
              <img src={Design} alt="Design" className="management-icon" />
              <p className="management-value-writes" >{management3}</p>


            </div>
            <div className="management-details-value">
              <img src={Quality} alt="Quality" className="management-icon" />
              <p className="management-value-writes" >{management4}</p>


            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export { Management, MobileManagement }