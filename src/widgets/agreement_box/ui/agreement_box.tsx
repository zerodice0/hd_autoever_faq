import '@/widgets/agreement_box/ui/agreement_box.css';

import type { AgreementBoxProps } from '@/widgets/agreement_box/model/agreement_box_props';

export function AgreementBox({
  agreement,
  setAgreement,
  dropdownShow,
  onClickTogglePersonalInformation
}: AgreementBoxProps) {
  return (
    <div className="agreement-box">
      <label className="checkbox">
        <input type="checkbox"
          checked={agreement}
          onChange={() => setAgreement(!agreement)} />
        <i>
          <em>개인정보 수집 및 이용에 동의합니다.</em>
        </i>
      </label>
      <div className={`dropdown-wrapper ${dropdownShow ? 'show active' : ''}`}
        data-ui-item="true"
        data-ui-clearable="true">
        <button type="button"
          className="toggle"
          data-ui-click="dropdown-toggle"
          onClick={onClickTogglePersonalInformation}>
          전문보기
        </button>
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
  );
}