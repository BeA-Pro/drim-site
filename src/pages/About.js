import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

//image
import AboutImage from '../asset/images/about_image.png';
import History from "../components/History";
import { Directions } from "../components/Directions";
import { Greeting } from "../components/Greeting";
import { Management, MobileManagement } from "../components/Management";


function About() {
  const location = useLocation();
  const navigate = useNavigate();

  const [active, setActive] = useState([false, false, false, false]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const click = queryParams.get('click');
    if (click === "management") setActive([true, false, false, false]);
    else if (click === "greeting") setActive([false, true, false, false]);
    else if (click === "history") setActive([false, false, true, false]);
    else if (click === "directions") setActive([false, false, false, true]);
  }, [location])



  return (
    <>
      <img className="main-image" src={AboutImage} alt="aboutImage" />
      <div className="navigate-buttons-section">
        <button className={`navigate-button ${active[0] ? "active" : ""}`} onClick={() => navigate("/about?click=management")}>경영이념</button>
        <button className={`navigate-button ${active[1] ? "active" : ""}`} onClick={() => navigate("/about?click=greeting")}>인사말</button>
        <button className={`navigate-button ${active[2] ? "active" : ""}`} onClick={() => navigate("/about?click=history")}>연혁</button>
        <button className={`navigate-button ${active[3] ? "active" : ""}`} onClick={() => navigate("/about?click=directions")}>오시는 길</button>
      </div>
      {active[0] && <Management />}
      {active[1] && <Greeting />}
      {active[2] && <History />}
      {active[3] && <Directions />}
    </>
  )
}

function MobileAbout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState([false, false, false, false]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const click = queryParams.get('click');
    if (click === "management") setActive([true, false, false, false]);
    else if (click === "greeting") setActive([false, true, false, false]);
    else if (click === "history") setActive([false, false, true, false]);
    else if (click === "directions") setActive([false, false, false, true]);
  }, [location])

  return (
    <>
      <img className="main-image" src={AboutImage} alt="aboutImage" />
      <div className="navigate-buttons-section">
        <button className={`navigate-button ${active[0] ? "active" : ""}`} onClick={() => navigate("/about?click=management")}>경영이념</button>
        <button className={`navigate-button ${active[1] ? "active" : ""}`} onClick={() => navigate("/about?click=greeting")}>인사말</button>
        <button className={`navigate-button ${active[2] ? "active" : ""}`} onClick={() => navigate("/about?click=history")}>연혁</button>
        <button className={`navigate-button ${active[3] ? "active" : ""}`} onClick={() => navigate("/about?click=directions")}>오시는 길</button>

      </div>
      {active[0] && <MobileManagement />}
      {active[1] && <Greeting />}
      {active[2] && <History />}
      {active[3] && <Directions />}
    </>
  )
}


export { About, MobileAbout };