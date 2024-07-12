import React, { useState, useEffect, useRef } from 'react';

import History from "../asset/images/history.png";
import Project from "../asset/images/project.png";
import Area from "../asset/images/area.png";


import HistoryBlack from "../asset/images/history_black.png";
import ProjectBlack from "../asset/images/project_black.png";
import AreaBlack from "../asset/images/area_black.png";



function SiteActivityComponent(props) {

  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (elementBottom < windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    if (isVisible) {
      const start = performance.now(); // 현재 시간을 기록
      const duration = 1000; // 애니메이션 지속 시간 (1.5초)

      const updateCount = (timestamp) => { // timestamp : requestAnimationFrame 시작시간
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1); // 진행률을 0과 1 사이로 유지

        setCount(Math.floor(progress * props.count)); // 진행률에 따라 숫자 갱신

        if (elapsed < duration) {
          // 애니메이션 종료 전까지 반복
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);

      // 컴포넌트가 언마운트되면 애니메이션 정리
      return () => cancelAnimationFrame(updateCount);

    }

  }, [isVisible, props.count]);

  return (
    <div className="siteActivityComponent" ref={elementRef} >
      <div className="siteActivityComponent-inner">
        <div className="siteActivityComponent-info">
          <div className="main-info">{count}</div>
          {props.id === "projects" && <div className="main-info-unit">Projects</div>}
          {props.id === "totalTurnover" && <div className="main-info-unit">Total Turnover</div>}
          {props.id === "career" && <div className="main-info-unit">Career</div>}

          {props.id === "projects" && <div className="main-info-unit-writes">Write some words</div>}
          {props.id === "totalTurnover" && <div className="main-info-unit-writes">Write some words</div>}
          {props.id === "career" && <div className="main-info-unit-writes">Write some words</div>}
        </div>
        {/*props.id === "projects" && <HomeWorkIcon sx={{ fontSize: 70, color: "white" }} />*/}
        {props.id === "projects" && <img src={Project} alt="history" style={{ width: 70, height: 70 }} />}
        {props.id === "totalTurnover" && <img src={Area} alt="history" style={{ width: 70, height: 70 }} />}
        {props.id === "career" && <img src={History} alt="history" style={{ width: 70, height: 70 }} />}

      </div>
    </div>
  );
}

function MobileSiteActivityComponent(props) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (elementBottom < windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    if (isVisible) {
      const start = performance.now(); // 현재 시간을 기록
      const duration = 1000; // 애니메이션 지속 시간 (1.5초)

      const updateCount = (timestamp) => { // timestamp : requestAnimationFrame 시작시간
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1); // 진행률을 0과 1 사이로 유지

        setCount(Math.floor(progress * props.count)); // 진행률에 따라 숫자 갱신

        if (elapsed < duration) {
          // 애니메이션 종료 전까지 반복
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);

      // 컴포넌트가 언마운트되면 애니메이션 정리
      return () => cancelAnimationFrame(updateCount);

    }

  }, [isVisible, props.count]);
  return (
    <div className="siteActivityComponent" ref={elementRef}>
      <div className="siteActivityComponent-inner">
        <div className="siteActivityComponent-info">
          <div className="main-info">{count}</div>
          {props.id === "projects" && <div className="main-info-unit">Projects</div>}
          {props.id === "totalTurnover" && <div className="main-info-unit">Total Turnover</div>}
          {props.id === "career" && <div className="main-info-unit">Career</div>}

          {props.id === "projects" && <div className="main-info-unit-writes">Write some words</div>}
          {props.id === "totalTurnover" && <div className="main-info-unit-writes">Write some words</div>}
          {props.id === "career" && <div className="main-info-unit-writes">Write some words</div>}
        </div>
        {props.id === "projects" && <img src={ProjectBlack} alt="history" style={{ width: 40, height: 40, color: 'black' }} />}
        {props.id === "totalTurnover" && <img src={AreaBlack} alt="history" style={{ width: 40, height: 40 }} />}
        {props.id === "career" && <img src={HistoryBlack} alt="history" style={{ width: 40, height: 40 }} />}


      </div>
    </div>
  );
}

export { SiteActivityComponent, MobileSiteActivityComponent };