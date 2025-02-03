import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContentImageSlider from '../components/ContentImageSlider';

function Content() {
  const location = useLocation();
  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const index = queryParams.get('index');
    fetch('/introduce.json')
      .then(response => response.json())
      .then(data => {
        setData(data[index]);
        setLoad(true);
      })
      .catch(error => console.error('Error fetching file list:', error));
  }, [location]);

  return (
    <div className="content-wrapper">
      <p className="content-wrapper-title">{data.name}</p>
      {load && <ContentImageSlider images={data.images} />}
      <div className="content-wrapper-information">
        <p className="content-wrapper-information-title">Information</p>
        <ul className="content-wrapper-information-details">
          <li className="content-wrapper-information-content">
            • 건축면적 : {`${data.buildingArea}`}m<sup>2</sup>
          </li>
          <li className="content-wrapper-information-content">
            • 연면적 : {`${data.totalFloorArea}`}m<sup>2</sup>
          </li>
          <li className="content-wrapper-information-content">
            • 대지면적 : {`${data.siteArea}`}m<sup>2</sup>
          </li>
          <li className="content-wrapper-information-content">
            • 건축규모 : {`${data.buildingScale}`}
          </li>
          <li className="content-wrapper-information-content">
            • 건축구조 : {`${data.buildingStructure}`}
          </li>
          <li className="content-wrapper-information-content">
            • 주요마감 : {`${data.mainFinishes}`}
          </li>
        </ul>
      </div>
    </div>
  );
}


function MobileContent() {
  const location = useLocation();
  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const index = queryParams.get('index');
    fetch('/introduce.json')
      .then(response => response.json())
      .then(data => {
        setData(data[index]);
        setLoad(true);
      })
      .catch(error => console.error('Error fetching file list:', error));
  }, [location]);

  return (
    <div className="content-wrapper">
      <p className="content-wrapper-title">{data.name}</p>
      {load && <ContentImageSlider images={data.images} />}
      <div className="content-wrapper-information">
        <p className="content-wrapper-information-title">Information</p>
        <ul className="content-wrapper-information-details">
          <li className="content-wrapper-information-content">
            • 건축면적 : {`${data.buildingArea}`}m<sup>2</sup>
          </li>
          <li className="content-wrapper-information-content">
            • 연면적 : {`${data.totalFloorArea}`}m<sup>2</sup>
          </li>
          <li className="content-wrapper-information-content">
            • 대지면적 : {`${data.siteArea}`}m<sup>2</sup>
          </li>
          <li className="content-wrapper-information-content">
            • 건축규모 : {`${data.buildingScale}`}
          </li>
          <li className="content-wrapper-information-content">
            • 건축구조 : {`${data.buildingStructure}`}
          </li>
          <li className="content-wrapper-information-content">
            • 주요마감 : {`${data.mainFinishes}`}
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Content, MobileContent }
