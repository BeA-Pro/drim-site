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
            주소 (10894) 경기도 파주시 금바위로42, 10층 1009호 |<br /> 대표전화 : 010-7367-7896 | 상호 : 드림종합건설 | 개인정보처리방침 / 위치정보사업이용약관
          </li>
        </ul>
        <ul className="footer-copyright">
          <li>
            Copyright©2002-2020 DRIM. All Rights Reserved
          </li>
        </ul>
      </div>
    </div>

  )
}

export { Footer, MobileFooter };