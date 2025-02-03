import React from 'react'
import Logo from "../asset/images/YellowBlack.png";
import { greeting1, greeting2, greeting3, greeting4, greetingSubTitle } from '../data/string';


function Greeting() {
  return (
    <div className="greeting-wrapper">
      <img src={Logo} alt='Logo' className="greeting-decoration" />
      <div className="greeting-title">인사말</div>
      <div className="greeting-details">
        <p className="greeting-details-title">{greetingSubTitle.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</p>
        <p className="greeting-details-writes">
          {greeting1}
        </p>
        <p className="greeting-details-writes">
          {greeting2}
        </p>
        <p className="greeting-details-writes">
          {greeting3}
        </p>
        <p className="greeting-details-boss">
          {greeting4}
        </p>
      </div>

    </div>
  )
}


function MobileGreeting() {
  return (
    <div className="greeting-wrapper">
      <img src={Logo} alt='Logo' className="greeting-decoration" />
      <div className="greeting-title">인사말</div>
      <div className="greeting-details">
        <p className="greeting-details-title">{greetingSubTitle.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</p>
        <p className="greeting-details-writes">
          {greeting1}
        </p>
        <p className="greeting-details-writes">
          {greeting2}
        </p>
        <p className="greeting-details-writes">
          {greeting3}
        </p>
        <p className="greeting-details-boss">
          {greeting4}
        </p>
      </div>

    </div>
  )
}

export { Greeting, MobileGreeting }