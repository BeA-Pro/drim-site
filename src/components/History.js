import React from 'react'

export default function History() {
  return (
    <div className='history-wrapper'>
      <div className='history-title'>연혁</div>
      <div className="history-writes">1994년 건축설계 전문회사로 출발하여 국내 최고의 전문가들과 지속적인 성장을 거듭하고 있습니다.</div>
      <div class="history-container">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <div id="content">
                  <ul class="timeline">
                    <li class="event" data-date="2020">
                      <h3>Registration</h3>
                      <p>Get here on time, it's first come first serve. Be late, get turned away.</p>
                    </li>
                    <li class="event" data-date="2021">
                      <h3>Opening Ceremony</h3>
                      <p>Get ready for an exciting event, this will kick off in amazing fashion with MOP &amp; Busta Rhymes as an opening show.</p>
                    </li>
                    <li class="event" data-date="2022">
                      <h3>Main Event</h3>
                      <p>This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!</p>
                    </li>
                    <li class="event" data-date="2023">
                      <h3>Closing Ceremony</h3>
                      <p>See how is the victor and who are the losers. The big stage is where the winners bask in their own glory.</p>
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
