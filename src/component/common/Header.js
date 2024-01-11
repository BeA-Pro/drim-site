import React from "react";
// scss
import "../../asset/scss/header.scss";

//images
import Logo from "../../asset/images/Logo.png";

function Header() {

  return (
    <div className="header_wrap">
      <div className="header_Logo">로고</div>
      <div className="menu">
        <ul>
          <li>회사 소개</li>
          <li>사업 소개</li>
          <li>부동산 보고서</li>
          <li>시공 문의</li>
        </ul>
      </div>
    </div>
  )

}


export default Header;
