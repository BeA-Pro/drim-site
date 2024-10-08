import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

//images
import Logo from "../asset/icons/drim-logo.svg";

//images
import Menu from "../asset/icons/menu.svg"
import Down from "../asset/icons/down.svg"
import Close from "../asset/icons/close.svg"
import Left from "../asset/icons/left.svg"


function Header() {

  const [isBottomHover, setIsBottomHover] = useState(false);

  const handleMouseEnter = () => {
    setIsBottomHover(true);
  };

  const handleMouseLeave = () => {
    setIsBottomHover(false);
  };
  const navigate = useNavigate();

  const clickMenuButton = (num) => {
    if (num === 0) navigate('/about?click=management');
    else if (num === 1) navigate('/introduce?click=all');
    else if (num === 2) navigate('/report');
    else if (num === 3) navigate('/inquiry')

  }

  return (
    <div className="header-wrap">
      <div className='header-top'>
        <Link to="/"><img src={Logo} alt="Logo" className="Logo" /></Link>

        <nav className="menu">
          <ul onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <li>
              <button onClick={() => clickMenuButton(0)}>회사소개</button>
            </li>
            <li>
              <button onClick={() => clickMenuButton(1)}>사업소개</button>
            </li>
            <li>
              <button onClick={() => clickMenuButton(2)}>부동산보고서</button>
            </li>
            <li>
              <button onClick={() => clickMenuButton(3)}>시공문의</button>
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
              <Link to="about?click=management">경영이념</Link>
            </li>
            <li>
              <Link to="about?click=greeting">인사말</Link>
            </li>
            <li>
              <Link to="about?click=history">연혁</Link>
            </li>
            <li>
              <Link to="about?click=directions">오시는 길</Link>
            </li>
          </ul>
          <ul>
            <li><Link to="introduce?click=architecture">건축사업</Link></li>
            <li><Link to="introduce?click=remodeling">리모델링사업</Link></li>
            <li><Link to="introduce?click=interior">인테리어사업</Link></li>
          </ul>
          <ul>
            <li><Link to="report">부동산보고서</Link></li>
          </ul>
          <ul>
            <li><Link to="inquiry">시공문의</Link></li>
          </ul>
        </div>

      </div>
    </div >
  )
}

function MobileHeader() {
  const navigate = useNavigate();
  const heightsInfo = [142, 92, 70.5, 30.5, 30.5, 0]

  const [isBottomHover, setIsBottomHover] = useState(false);
  const [height, setHeight] = useState(0)
  const [detailsHeights, setDetailsHeights] = useState([5, false, false, false, false])


  const clickMenuButton = () => {
    if (isBottomHover) {
      setIsBottomHover(false);
      setHeight(0);
      setDetailsHeights([5, false, false, false, false])
    } else {
      setIsBottomHover(true);
      setHeight(heightsInfo[0]);
    }
  }


  const clickDownButton = (index) => {
    if (index === detailsHeights[0]) {
      setHeight(heightsInfo[0])
      setDetailsHeights([5, false, false, false, false])
    } else {
      setHeight(height - heightsInfo[detailsHeights[0]] + heightsInfo[index])
      const temp = [...detailsHeights]
      if (temp[0] !== 5) temp[temp[0]] = false; // 이전 높이를 0으로 바꿈
      temp[0] = index; // 현재 인덱스를 저장
      temp[temp[0]] = true; // 현재 인덱스 true로 표시
      setDetailsHeights(temp);
    }
  }

  const clickButton = (index) => {
    if (index === 0) navigate('/about?click=management');
    else if (index === 1) navigate('/about?click=greeting');
    else if (index === 2) navigate('/about?click=history');
    else if (index === 3) navigate('/about?click=directions');
    else if (index === 4) navigate('/introduce?click=architecture');
    else if (index === 5) navigate('/introduce?click=remodeling');
    else if (index === 6) navigate('/introduce?click=interior');
    else if (index === 7) navigate('/report');
    else if (index === 8) navigate('/inquiry');



    clickMenuButton();

  }


  return (
    <div className="header-wrap">
      <div className='header-top'>
        <Link to="/"><img src={Logo} alt="Logo" className="Logo" /></Link>
        {isBottomHover ?
          <img
            src={Close}
            alt="Close"
            className="Close"
            onClick={clickMenuButton}
          /> :
          <img
            src={Menu}
            alt="Menu"
            className="Menu"
            onClick={clickMenuButton}
          />

        }
      </div>

      <div className={`header-bottom ${isBottomHover ? 'hovered' : ''}`}
        style={{ height: `${height}px` }}
      >
        <nav className="menu">
          <div>
            <div className="menu-sub">
              <div className="menu-sub-name">회사소개</div>
              {detailsHeights[1] ?
                <img src={Left} alt="Left" className="Left" onClick={() => clickDownButton(1)} /> :
                <img src={Down} alt="Down" className="Down" onClick={() => clickDownButton(1)} />
              }
            </div>
            <ul className={`menu-sub-details five ${detailsHeights[1] ? 'hover' : ''}`}>
              <li>
                <button onClick={() => clickButton(0)}>경영이념</button>
              </li>
              <li>
                <button onClick={() => clickButton(1)}>인사말</button>
              </li>
              <li>
                <button onClick={() => clickButton(2)}>연혁</button>
              </li>
              <li>
                <button onClick={() => clickButton(3)}>오시는 길</button>
              </li>
            </ul>
            <div className="menu-sub">
              <div className="menu-sub-name">사업소개</div>
              {detailsHeights[2] ?
                <img src={Left} alt="Left" className="Left" onClick={() => clickDownButton(2)} /> :
                <img src={Down} alt="Down" className="Down" onClick={() => clickDownButton(2)} />
              }
            </div>
            <ul className={`menu-sub-details three ${detailsHeights[2] ? 'hover' : ''}`}>
              <li>
                <button onClick={() => clickButton(4)}>건축사업</button>
              </li>
              <li>
                <button onClick={() => clickButton(5)}>리모델링사업</button>
              </li>
              <li>
                <button onClick={() => clickButton(6)}>인테리어사업</button>
              </li>
            </ul>
            <div className="menu-sub">
              <div className="menu-sub-name">부동산보고서</div>
              {detailsHeights[3] ?
                <img src={Left} alt="Left" className="Left" onClick={() => clickDownButton(3)} /> :
                <img src={Down} alt="Down" className="Down" onClick={() => clickDownButton(3)} />
              }
            </div>
            <ul className={`menu-sub-details one ${detailsHeights[3] ? 'hover' : ''}`}>
              <li><button onClick={() => clickButton(7)}>부동산보고서</button></li>
            </ul>
            <div className="menu-sub">
              <div className="menu-sub-name">시공문의</div>
              {detailsHeights[4] ?
                <img src={Left} alt="Left" className="Left" onClick={() => clickDownButton(4)} /> :
                <img src={Down} alt="Down" className="Down" onClick={() => clickDownButton(4)} />
              }
            </div>
            <ul className={`menu-sub-details one ${detailsHeights[4] ? 'hover' : ''}`}>
              <li><button onClick={() => clickButton(8)}>시공문의</button></li>
            </ul>
          </div>
        </nav>
      </div >
    </div >
  )
}



export { Header, MobileHeader };