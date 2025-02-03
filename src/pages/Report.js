
import React, { useEffect, useState } from 'react'


import ReportImage from '../asset/images/report_image.png';

//images
import Download from "../asset/icons/download.svg"

function Report() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch('/files.json')
      .then(response => response.json())
      .then(data => {
        setReports(data)
        console.log(data)
      })
      .catch(error => console.error('Error fetching file list:', error));
  }, []);

  const handleDownload = (filePath) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="report-wrapper">
      <img className="main-image" src={ReportImage} alt="report_Image" />
      <div className="report-title">부동산보고서</div>
      <div className="report-reports">
        <div className="report-search-wrapper"></div>
        <div className="report-reports-wrapper">
          <ul>
            {reports.map((report, index) => (
              <li className="report" key={index}>
                <div className="report-name">{report.name}</div>
                <img src={Download} alt="download-button" className="report-download" onClick={() => handleDownload(report.path)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function MobileReport() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch('/files.json')
      .then(response => response.json())
      .then(data => {
        setReports(data)
        console.log(data)
      })
      .catch(error => console.error('Error fetching file list:', error));
  }, []);

  const handleDownload = (filePath) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="report-wrapper">
      <img className="main-image" src={ReportImage} alt="report_Image" />
      <div className="report-title">부동산보고서</div>
      <div className="report-reports">
        <div className="report-search-wrapper"></div>
        <div className="report-reports-wrapper">
          <ul>
            {reports.map((report, index) => (
              <li className="report" key={index}>
                <div className="report-name">{report.name}</div>
                <img src={Download} alt="download-button" className="report-download" onClick={() => handleDownload(report.path)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export { Report, MobileReport }