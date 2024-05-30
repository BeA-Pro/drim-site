import React, { useState, useEffect, useRef } from 'react';

import MoneyIcon from '@mui/icons-material/Money';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import HomeWorkIcon from '@mui/icons-material/HomeWork';



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
      const duration = 3000; // 애니메이션 지속 시간 (1.5초)

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
        {props.id === "projects" && <HomeWorkIcon sx={{ fontSize: 70, color: "white" }} />}
        {props.id === "totalTurnover" && <MoneyIcon sx={{ fontSize: 70, color: "white" }} />}
        {props.id === "career" && <WorkHistoryIcon sx={{ fontSize: 70, color: "white" }} />}

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
      const duration = 3000; // 애니메이션 지속 시간 (1.5초)

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
        {props.id === "projects" && <HomeWorkIcon sx={{ fontSize: 50 }} />}
        {props.id === "totalTurnover" && <MoneyIcon sx={{ fontSize: 50 }} />}
        {props.id === "career" && <WorkHistoryIcon sx={{ fontSize: 50 }} />}

      </div>
    </div>
  );
}

export { SiteActivityComponent, MobileSiteActivityComponent };