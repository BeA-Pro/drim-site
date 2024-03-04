import React, { useState } from "react";
// scss
import "../../../asset/scss/header.scss";

//images
import Logo from "../../../asset/icons/drim-logo.svg";
import Menu from "../../../asset/icons/menu.svg"

function MobileHeader() {

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
        <img src={Menu} alt="Menu" className="Menu" onClick={setIsBottomHover} onMouseLeave={handleMouseLeave} />
      </div>

      <div className={`header-bottom ${isBottomHover ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
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
    </div >
  )
}


export default MobileHeader;