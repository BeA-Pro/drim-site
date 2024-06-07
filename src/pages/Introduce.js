import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import IntroImage from '../asset/images/intro_image.png';

function Introduce() {
  const location = useLocation();
  const [introData, setIntroData] = useState([]);
  const [check, setCheck] = useState([true, false, false, false]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/introduce.json')
      .then(response => response.json())
      .then(data => {
        setIntroData(data)
      })
      .catch(error => console.error('Error fetching file list:', error));
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const click = queryParams.get('click');
    console.log(click)
    if (click === "all") setCheck([true, false, false, false]);
    else if (click === "architecture") setCheck([false, true, false, false]);
    else if (click === "remodeling") setCheck([false, false, true, false]);
    else if (click === "interior") setCheck([false, false, false, true]);
  }, [location])

  const clickButton = (num) => {
    if (num === 0) setCheck([true, false, false, false]);
    else if (num === 1) setCheck([false, true, false, false]);
    else if (num === 2) setCheck([false, false, true, false]);
    else if (num === 3) setCheck([false, false, false, true]);
  }

  const clickImage = (index) => {
    navigate(`/content?index=${index}`);
  }

  return (
    <div className='introduce-wrapper'>
      <img className="main-image" src={IntroImage} alt="inquiryImage" />
      <div className='introduce-title'>사업소개</div>
      <div className="introduce-content-wrapper">
        <div className="introduce-buttons-wrapper">
          <button className={`introduce-button ${check[0] ? 'active' : ''}`} onClick={() => clickButton(0)}>전체</button>
          <button className={`introduce-button ${check[1] ? 'active' : ''}`} onClick={() => clickButton(1)}>건축</button>
          <button className={`introduce-button ${check[2] ? 'active' : ''}`} onClick={() => clickButton(2)}>리모델링</button>
          <button className={`introduce-button ${check[3] ? 'active' : ''}`} onClick={() => clickButton(3)}>인테리어</button>
        </div>
        <div className="introduce-bar" />
        <div className="introduce-contents">
          {
            introData.map((intro) => {
              if (check[0] || check[Number(intro.category)]) {
                return (
                  <div key={intro.id} className="introduce-content" onClick={() => clickImage(intro.id)}>
                    <p className="introduce-content-title">{intro.name}</p>
                    <img className="introduce-content-image" src={intro.images[0]} alt="introImage" />
                  </div>
                );
              }
              return null;
            })
          }
        </div>
      </div>
    </div>
  )
}

function MobileIntroduce() {
  return (
    <div className='introduce-wrapper'>
      <img className="main-image" src={IntroImage} alt="inquiryImage" />
      Introduce</div>
  )
}

export { Introduce, MobileIntroduce }