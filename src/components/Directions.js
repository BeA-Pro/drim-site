import React, { useEffect } from 'react'

//images
import BusLogo from "../asset/icons/iconBus.svg";
import SubwayLogo from "../asset/icons/iconSubway.svg";

function Directions() {


  // 네이버 지도 띄우기
  useEffect(() => {
    const naver = window.naver;
    const mapSelector = document.querySelector('.directions-info-map');
    const location = new naver.maps.LatLng(37.7283227258667, 126.760012646678);
    const map = new naver.maps.Map(mapSelector, {
      center: location,
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT
      }
    })
    new naver.maps.Marker({
      position: location,
      map: map,
    });
  }, [])


  return (
    <div className="directions-wrapper">
      <div className="directions-title">오시는길</div>
      <div className="directions-info">
        <div className="directions-info-left">
          <p className="directions-info-name">주소</p>
          <p className="directions-info-address">경기도 파주시 금바위로42, 10층 1009호</p>
          <div className="directions-info-details">
            <div className="directions-info-route">
              <div className="directions-info-route-row1">
                <img src={SubwayLogo} alt="SubwayLogo" className="directions-logo" />
                <p>지하철</p>
              </div>
              <div className="directions-info-route-row2">
                <p>• 운정역 경의중앙에서 도보로 12분</p>
              </div>

            </div>
            <div className="directions-info-route">
              <div className="directions-info-route-row1">
                <img src={BusLogo} alt="BusLogo" className="directions-logo" />
                <p>버스</p>
              </div>
              <div className="directions-info-route-row2">
                <p>• 한길 육교 정류장에서 하차</p>
              </div>
            </div>
          </div>
        </div>
        <div className="directions-info-right">
          <div className="directions-info-map"></div>
        </div>
      </div>
    </div>
  )
}

function MobileDirections() {


  // 네이버 지도 띄우기
  useEffect(() => {
    const naver = window.naver;
    const mapSelector = document.querySelector('.directions-info-map');
    const location = new naver.maps.LatLng(37.7283227258667, 126.760012646678);
    const map = new naver.maps.Map(mapSelector, {
      center: location,
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
        style: naver.maps.ZoomControlStyle.SMALL,
      }
    })
    new naver.maps.Marker({
      position: location,
      map: map,
    });
  }, [])


  return (
    <div className="directions-wrapper">
      <div className="directions-title">오시는길</div>

      <div className="directions-info">
        <div className="directions-info-map"></div>
        <p className="directions-info-name">주소</p>
        <p className="directions-info-address">경기도 파주시 금바위로42, 10층 1009호</p>

        <div className="directions-info-route-row1">
          <img src={SubwayLogo} alt="SubwayLogo" className="directions-logo" />
          <p>지하철</p>
        </div>
        <p className="directions-info-route-row2">• 운정역 경의중앙에서 도보로 12분</p>
        <div className="directions-info-route">
          <div className="directions-info-route-row1">
            <img src={BusLogo} alt="BusLogo" className="directions-logo" />
            <p>버스</p>
          </div>
          <p className="directions-info-route-row2">• 한길 육교 정류장에서 하차</p>
        </div>

      </div>

    </div>
  )
}


export { Directions, MobileDirections }
