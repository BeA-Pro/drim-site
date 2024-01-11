import React from "react";
//scss
import "../../asset/scss/footer.scss";

function Footer() {

  return (
    <div className="footer_wrap">
      <div className="footer_Logo">
        로고
      </div>
      <ul className="footer_info">
        <li>
          <a>주소 (10894) 경기도 파주시 금바위로42, 10층 1009호 | 대표전화 : 010-7367-7896 | 상호 : 드림종합건설 | 개인정보처리방침 / 위치정보사업이용약관</a>
        </li>
      </ul>
      <ul className="footer_copyright">
        <li>
          <a>Copyright©2002-2020 DRIM. All Rights Reserved</a>
        </li>
      </ul>
    </div >
  )
}

export default Footer;