import React from 'react'
import Logo from "../asset/images/YellowBlack.png";

function Greeting() {
  return (
    <div className="greeting-wrapper">
      <img src={Logo} alt='Logo' className="greeting-decoration" />
      <div className="greeting-title">인사말</div>
      <div className="greeting-details">
        <p className="greeting-details-title">미래를 생각하는 종합건설기업
          <br />드립종합건설입니다</p>
        <p className="greeting-details-writes">
          창립 후 60여년간 축적된 건축, 토목, 주택 등 사업 Portfolio를 바탕으로 건설사업에 일익을 담당하여 온 저희 신영씨앤디는 World Best Real Estate Group 신영그룹의 한 가족으로서 그룹의 개발 및 마케팅 노하우와 그동안 쌓아온 풍부한 시공경험 및 기술력을 바탕으로 새로운 시너지 효과를 창출하고 있습니다.
        </p>
        <p className="greeting-details-writes">
          또한 급변하는 시장의 트렌드 분석을 통해 차별화된 건설사업관리(Project Management) 와 체계적인 공사관리(Construction Management) 서비스를 제공하고 있으며, 고객에게는 공간활용의 편리성과 유용성을 겸비한 쾌적한 미래주거환경을 제공하고, 신개념 도시문화에 걸맞는 새로운 건축문화를 구현하고자 노력하고 있습니다.
        </p>
        <p className="greeting-details-writes">
          저희 신영씨앤디는 인간이 생활하는 최적의 공간의 장소를 만든다는 최우선 목표로 끊임없는 혁신, 창의적 기술, 고객만족, 상생의 파트너십을 바탕으로 최고가치를 창출하는 회사가 될 것임은 물론 우리의 역량과 재원을 통해 명실 상부한 초우량 종합 건설회사로 자리매김할 것입니다.
        </p>
        <p className="greeting-details-writes">
          새로운 미래창조를 위한 적극적인 투자와 끊임없는 혁신으로 미래를 생각하는 건설명가로서 고객 여러분들께 최고의 가치를 드리고 믿음에 보답할 수 있는 Construction Trend Leader가 되어 지속적으로 안정적인 성장을 이어 갈 수 있도록 노력하겠습니다. 감사합니다.
        </p>
        <p className="greeting-details-boss">
          (주) 드림종합건설 대표이사 박윤환
        </p>
      </div>

    </div>
  )
}

export { Greeting }