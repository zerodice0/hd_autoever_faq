import '@/pages/container/ui/board_white.css';

export default function Counsel() {
  return (
    <div className='content'>
  <h1> 상담문의 <em>기아 비즈가 최고의 모빌리티 솔루션을 제안해드립니다.</em>
  </h1>
  <div>
    <form>
      <div className="board-write">
        <h4 className="heading-4">회사명 <i className="required">필수</i>
        </h4>
        <input type="text" placeholder="소속된 회사명을 적어주세요" />
        <h4 className="heading-4">부서명 <i className="required">필수</i>
        </h4>
        <input type="text" placeholder="소속된 부서명을 적어주세요" />
        <h4 className="heading-4">성함 <i className="required">필수</i>
        </h4>
        <input type="text" placeholder="담당자 성함을 적어주세요" />
        <h4 className="heading-4">이메일 <i className="required">필수</i>
        </h4>
        <input type="text" placeholder="담당자 이메일 주소를 적어주세요" />
        <h4 className="heading-4">연락처 <i className="required">필수</i>
        </h4>
        <input type="text" placeholder="담당자 연락처를 적어주세요" />
        <h4 className="heading-4">문의 서비스 선택</h4>
        <div className="check-group radio-summary">
          <input id="선택안함" name="package" type="radio" value="선택안함" />
          <label className="radio" htmlFor="선택안함">
            <i>
              <em>선택안함</em>
            </i>
          </label>
          <input id="차량 구독 패키지" name="package" type="radio" value="차량 구독 패키지" />
          <label className="radio" htmlFor="차량 구독 패키지">
            <i>
              <em>차량 구독 패키지</em>
            </i>
            <p className="summary">
              <strong>차량 구독 패키지</strong>는 친환경차, 차량관리, 관리자 Web, 이용자 App, 고객센터, 보험 및 사고처리 등 서비스를 부담없는 가격으로 이용하실 수 있습니다.
            </p>
          </label>
          <input id="솔루션 구독 패키지" name="package" type="radio" value="솔루션 구독 패키지" />
          <label className="radio" htmlFor="솔루션 구독 패키지">
            <i>
              <em>솔루션 구독 패키지</em>
            </i>
            <p className="summary">
              <strong>솔루션 구독 패키지</strong>는 현재 우리 회사가 보유중인 차량을 이용하면서 관리자 Web, 이용자 App, 고객센터 서비스를 저렴한 비용으로 이용하실 수 있습니다.
            </p>
          </label>
          <input id="하이브리드 패키지" name="package" type="radio" value="하이브리드 패키지" />
          <label className="radio" htmlFor="하이브리드 패키지">
            <i>
              <em>하이브리드 패키지</em>
            </i>
            <p className="summary">
              <strong>하이브리드 패키지</strong>는 현재 보유 차량과 친환경차를 함께 이용하면서 차량관리, 관리자 Web, 이용자 App, 고객센터, 보험 및 사고처리 서비스를 부담없는 가격으로 이용하실 수 있습니다.
            </p>
          </label>
          <p className="summary"></p>
          <p className="summary">
            <strong>차량 구독 패키지</strong>는 친환경차, 차량관리, 관리자 Web, 이용자 App, 고객센터, 보험 및 사고처리 등 서비스를 부담없는 가격으로 이용하실 수 있습니다.
          </p>
          <p className="summary">
            <strong>솔루션 구독 패키지</strong>는 현재 우리 회사가 보유중인 차량을 이용하면서 관리자 Web, 이용자 App, 고객센터 서비스를 저렴한 비용으로 이용하실 수 있습니다.
          </p>
          <p className="summary">
            <strong>하이브리드 패키지</strong>는 현재 보유 차량과 친환경차를 함께 이용하면서 차량관리, 관리자 Web, 이용자 App, 고객센터, 보험 및 사고처리 서비스를 부담없는 가격으로 이용하실 수 있습니다.
          </p>
        </div>
        <h4 className="heading-4">문의내용 <i className="required">필수</i>
        </h4>
        <textarea placeholder="궁금하신 내용과 참고사항을 입력해주세요
        (ex.업종, 사업장 주소, 현재 업무용 차량 운영 대수, 희망 계약차량 대수 등)" />
        <div className="agreement-box">
          <label className="checkbox">
            <input type="checkbox" />
            <i>
              <em>개인정보 수집 및 이용에 동의합니다.</em>
            </i>
          </label>
          <div className="dropdown-wrapper" data-ui-item="true" data-ui-clearable="true">
            <button type="button" className="toggle" data-ui-click="dropdown-toggle">전문보기</button>
            <div className="full-text" data-ui-target="true">
              <div className="inner">
                <h4 className="heading-info">개인정보 수집 이용 동의</h4>
                <p>
                  <strong>수집 이용 목적</strong> 유선 또는 온라인 상담 서비스 이용
                </p>
                <p>
                  <strong>수집 항목</strong> 회사명, 부서명, 성함, 이메일주소, 연락처
                </p>
                <p>
                  <strong>보유기간</strong> 수집 시부터 이용목적 달성 후 파기
                </p>
                <p>※ 개인정보수집 및 이용에 대해 거부할 권리가 있으며, 거부 시에는 상담 서비스 이용이 불가합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
  );
}