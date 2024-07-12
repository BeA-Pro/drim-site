import React from 'react'

export default function History() {
  return (
    <div className='history-wrapper'>
      <div className='history-title'>연혁</div>
      <div className="history-writes">2003년 시작한 드림종합건설은 지금까지 꾸준히 성장하고 있습니다.</div>
      <div className="history-container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body" style={{ width: 600 }}>
                <div id="content">
                  <ul className="timeline">
                    <li className="event" data-date="2003">
                      <h3>드림건설 건축업 개인사업자</h3>

                    </li>
                    <li className="event" data-date="2005">
                      <h3>(주)하이다 코리아 인수</h3>
                      <h3>주식회사 포럼종합건설 공동 대표이사 취임</h3>
                    </li>
                    <li className="event" data-date="2009">
                      <h3>주식회사 드림예건으로 사명변경</h3>
                      <h3>실내건축업 면허추가</h3>
                      <h3>서울시 서초구 양재동 2203번지 동방빌딩 5층으로 사무실 이전</h3>
                    </li>
                    <li className="event" data-date="2011">
                      <h3>주식회사 피엔엘로 사명변경</h3>
                      <h3>시설물 유지관리업 면허 추가</h3>
                    </li>
                    <li className="event" data-date="2016">
                      <h3>주식회사 드림종합건설 설립</h3>
                      <h3>건설업 면허 추가</h3>
                    </li>
                    <li className="event" data-date="2018">
                      <h3>파주시 가람로 116번지 57 2층으로 사무실 이전</h3>
                    </li>
                    <li className="event" data-date="2020">
                      <h3>파주시 금바위로 42 10층으로 사무실 구입 이전</h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
