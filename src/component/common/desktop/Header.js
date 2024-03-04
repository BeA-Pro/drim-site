import React, { useState } from "react";
// scss
import "../../../asset/scss/header.scss";

//images
import Logo from "../../../asset/icons/drim-logo.svg";

function Header() {

  const [isBottomHover, setIsBottomHover] = useState(false);

  const handleMouseEnter = () => {
    setIsBottomHover(true);
  };

  const handleMouseLeave = () => {
    setIsBottomHover(false);
  };


  return (
    <div className="header-wrap">
      <div className='header-top'>
        <img src={Logo} alt="Logo" className="Logo" />
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

      <div className={`header-bottom ${isBottomHover ? 'hovered' : ''}`}
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