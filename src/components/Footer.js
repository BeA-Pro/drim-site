import React from "react";

// Logo
import Logo from "../asset/icons/drim-logo.svg";

import { footer1, footer2 } from "../data/string";

function Footer() {

  return (
    <div className="footer-wrap">
      <div className="footer-inner">
        <img src={Logo} alt="Logo" className="Logo" />
        <ul className="footer-info">
          <li>
            {footer1}
          </li>
        </ul>
        <ul className="footer-copyright">
          <li>
            {footer2}
          </li>
        </ul>
      </div>
    </div>

  )
}

function MobileFooter() {

  return (
    <div className="footer-wrap">
      <div className="footer-inner">
        <img src={Logo} alt="Logo" className="Logo" />
        <ul className="footer-info">
          <li>
            {footer1}
          </li>
        </ul>
        <ul className="footer-copyright">
          <li>
            {footer2}
          </li>
        </ul>
      </div>
    </div>

  )
}

export { Footer, MobileFooter };