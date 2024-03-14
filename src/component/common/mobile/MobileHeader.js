import React, { useState } from "react";
// scss
import "../../../asset/scss/mobile/mobileHeader.scss";

//images
import Logo from "../../../asset/icons/drim-logo.svg";
import Menu from "../../../asset/icons/menu.svg"
import Down from "../../../asset/icons/down.svg"
import Close from "../../../asset/icons/close.svg"
import Left from "../../../asset/icons/left.svg"

function MobileHeader() {

  const heightsInfo = [168, 92, 70.5, 30.5, 30.5, 0]

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


  return (
    <div className="header-wrap">
      <div className='header-top'>
        <img src={Logo} alt="Logo" className="Logo" />
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
            <div className="menu-sub">
              <div className="menu-sub-name">사업소개</div>
              {detailsHeights[2] ?
                <img src={Left} alt="Left" className="Left" onClick={() => clickDownButton(2)} /> :
                <img src={Down} alt="Down" className="Down" onClick={() => clickDownButton(2)} />
              }
            </div>
            <ul className={`menu-sub-details three ${detailsHeights[2] ? 'hover' : ''}`}>
              <li>건축사업</li>
              <li>리모델링사업</li>
              <li>인테리어사업</li>
            </ul>
            <div className="menu-sub">
              <div className="menu-sub-name">부동산보고서</div>
              {detailsHeights[3] ?
                <img src={Left} alt="Left" className="Left" onClick={() => clickDownButton(3)} /> :
                <img src={Down} alt="Down" className="Down" onClick={() => clickDownButton(3)} />
              }
            </div>
            <ul className={`menu-sub-details one ${detailsHeights[3] ? 'hover' : ''}`}>
              <li>부동산보고서</li>
            </ul>
            <div className="menu-sub">
              <div className="menu-sub-name">시공문의</div>
              {detailsHeights[4] ?
                <img src={Left} alt="Left" className="Left" onClick={() => clickDownButton(4)} /> :
                <img src={Down} alt="Down" className="Down" onClick={() => clickDownButton(4)} />
              }
            </div>
            <ul className={`menu-sub-details one ${detailsHeights[4] ? 'hover' : ''}`}>
              <li>시공문의</li>
            </ul>
          </div>
        </nav>
      </div >
    </div >
  )
}


export default MobileHeader;