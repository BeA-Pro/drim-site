import React, { useState } from "react";
import { Link } from 'react-router-dom';

//images
import Logo from "../../asset/icons/drim-logo.svg";

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
        <Link to="/"><img src={Logo} alt="Logo" className="Logo" /></Link>

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
              <Link to="about">경영이념</Link>
            </li>
            <li>
              <Link to="about">인사말</Link>
            </li>
            <li>
              <Link to="about">연혁</Link>
            </li>
            <li>
              <Link to="about">오시는 길</Link>
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