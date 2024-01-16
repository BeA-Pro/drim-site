import React, { useState, useEffect } from "react";
// scss
import "../../asset/scss/header.scss";

//images
import Logo from "../../asset/images/Logo.png";

function Header() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setMenuOpen(false);
  };


  return (
    <div className="header_wrap">
      <div className="header-top">
        <h1>Logo</h1>
        <nav className="menu">
          <ul onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <li>
              <button>회사소개</button>
            </li>
            <li>
              <button>사업소개</button>
            </li>
            <li>
              <button>부동산보고서</button>
            </li>
            <li>
              <button>시공문의</button>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`header-bottom ${isMenuOpen ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="menu-details">
          <ul>
            <li>
              경영이념
            </li>
            <li>
              인사말
            </li>
            <li>
              연혁
            </li>
            <li>
              오시는 길
            </li>
          </ul>
          <ul>
            <li>건축사업</li>
            <li>리모델링사업</li>
            <li>인테리어사업</li>
          </ul>
          <ul>
            <li>부동산보고서</li>
          </ul>
          <ul>
            <li>시공문의</li>
          </ul>
        </div>

      </div>
    </div >
  )

}


export default Header;