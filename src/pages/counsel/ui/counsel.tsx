import boardWhiteStyles from '@/pages/counsel/ui/board_white.module.css';
import counselStyles from '@/pages/counsel/ui/counsel.module.css';

import { COUNSEL_SERVICE, type CounselService } from '@/pages/counsel/model/counsel_service_model';
import { ProcessInfo } from '@/widgets/process_info/ui/process_info';
import { ProcessInfoData } from '@/pages/counsel/model/process_info_data';
import { DialogAlert } from '@/widgets/dialog_alert/ui/dialog_alert';
import { RegistCounselResult } from '@/widgets/regist_counsel_result/ui/regist_counsel_result';
import { useEffect, useRef, useState } from 'react';
import { HeaderRequired } from '@/shared/header_required/ui/header_required';
import { AgreementBox } from '@/widgets/agreement_box/ui/agreement_box';
import { XlargePrimaryButton } from '@/shared/xlarge_primary_button/ui/xlarge_primary_button';

export default function Counsel() {
  const [counselService, setCounselService] = useState<CounselService>('선택안함');
  const [dropdownShow, setDropdownShow] = useState<boolean>(false);
  const [agreement, setAgreement] = useState<boolean>(false);
  
  const [companyName, setCompanyName] = useState<string>('');
  const [departmentName, setDepartmentName] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  
  const dialogAlertRef = useRef<HTMLDialogElement | null>(null);
  const [dialogAlertMessage, setDialogAlertMessage] = useState<string>('');

  const [isRegisted, setIsRegisted] = useState<boolean>(false);

  useEffect(() => {
    setDropdownShow(false);
  }, [agreement]);

  const isInMinMaxLength = (value: string, min: number, max: number) => {
    return (min <= value.trim().length) && (value.trim().length < max);
  }

  const itemLengthCheckMessage = (item: string, min: number, max: number) => {
    return `${item} 항목은 ${min}자 이상 ~ ${max}자 이하로 입력해주세요`;
  }

  const onClickRegist = (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (agreement) {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{1,4}$/;
      const phoneRegex = /^[0-9]{9,12}$/;
      let message: string | null = null;
      
      if (!isInMinMaxLength(companyName, 1, 50)) {
        message = itemLengthCheckMessage('회사명', 1, 50);
      } else if (!isInMinMaxLength(departmentName, 1, 50)) {
        message = itemLengthCheckMessage('부서명', 1, 50);
      } else if (!isInMinMaxLength(name, 1, 50)) {
        message = itemLengthCheckMessage('성함', 1, 50);
      } else if (!emailRegex.test(email)) {
        message = '이메일 정보는 @를 포함해서 이메일 형식에 맞게 입력해주세요';
      } else if (!isInMinMaxLength(email, 5, 50)) {
        message = itemLengthCheckMessage('이메일', 5, 50);
      } else if (!isInMinMaxLength(phone, 1, 50)) {
        message = itemLengthCheckMessage('연락처', 1, 50);
      } else if (!phoneRegex.test(phone)) {
        message = '연락처 정보는 숫자만 9자리 이상 ~ 12자리 이하로 입력해 주세요';
      } else if (!isInMinMaxLength(question, 1, 50)) {
        message = itemLengthCheckMessage('문의내용', 1, 900);
      }

      if (message) {
        setDialogAlertMessage(message);
        dialogAlertRef.current?.showModal();
      } else {
        setIsRegisted(true);
      }
    }
  }

  const onClickTogglePersonalInformation = () => {
    setDropdownShow(!dropdownShow);
  }

  return (
    <div className={counselStyles.content}>
      <h1> 상담문의 <em>기아 비즈가 최고의 모빌리티 솔루션을 제안해드립니다.</em></h1>
      {
        isRegisted ? (
          <RegistCounselResult />
        ) : (
          <div>
            <form>
              <div className={boardWhiteStyles.boardWrite}>
              <HeaderRequired title="회사명" isRequired={true} />
              <input type="text"
                placeholder="소속된 회사명을 적어주세요"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <HeaderRequired title="부서명" isRequired={true} />
              <input type="text"
                placeholder="소속된 부서명을 적어주세요"
                value={departmentName}
                onChange={(e) => setDepartmentName(e.target.value)}
              />
              <HeaderRequired title="성함" isRequired={true} />
              <input type="text"
                placeholder="담당자 성함을 적어주세요" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <HeaderRequired title="이메일" isRequired={true} />
              <input type="text"
                placeholder="담당자 이메일 주소를 적어주세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <HeaderRequired title="연락처" isRequired={true} />
              <input type="text"
                placeholder="담당자 연락처를 적어주세요"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <HeaderRequired title="문의 서비스 선택" isRequired={false} />
              <div className="check-group radio-summary">
                <input id="선택안함" 
                  name="package" 
                  type="radio" 
                  value={COUNSEL_SERVICE.notSelected}
                  checked={counselService === COUNSEL_SERVICE.notSelected}
                  onChange={() => setCounselService(COUNSEL_SERVICE.notSelected)}
                />
                <label className="radio" htmlFor="선택안함">
                  <i>
                    <em>선택안함</em>
                  </i>
                </label>
                <input id="차량 구독 패키지" 
                  name="package" 
                  type="radio" 
                  value={COUNSEL_SERVICE.vehicleSubscription} 
                  checked={counselService === COUNSEL_SERVICE.vehicleSubscription}
                  onChange={() => setCounselService(COUNSEL_SERVICE.vehicleSubscription)}
                />
                <label className="radio" htmlFor="차량 구독 패키지">
                  <i>
                    <em>차량 구독 패키지</em>
                  </i>
                  <p className="summary">
                    <strong>차량 구독 패키지</strong>는 친환경차, 차량관리, 관리자 Web, 이용자 App, 고객센터, 보험 및 사고처리 등 서비스를 부담없는 가격으로 이용하실 수 있습니다.
                  </p>
                </label>
                <input id="솔루션 구독 패키지" 
                  name="package" 
                  type="radio" 
                  value={COUNSEL_SERVICE.solutionSubscription} 
                  checked={counselService === COUNSEL_SERVICE.solutionSubscription}
                  onChange={() => setCounselService(COUNSEL_SERVICE.solutionSubscription)}
                />
                <label className="radio" htmlFor="솔루션 구독 패키지">
                  <i>
                    <em>솔루션 구독 패키지</em>
                  </i>
                  <p className="summary">
                    <strong>솔루션 구독 패키지</strong>는 현재 우리 회사가 보유중인 차량을 이용하면서 관리자 Web, 이용자 App, 고객센터 서비스를 저렴한 비용으로 이용하실 수 있습니다.
                  </p>
                </label>
                <input id="하이브리드 패키지" 
                  name="package" 
                  type="radio" 
                  value={COUNSEL_SERVICE.hybridSubscription} 
                  checked={counselService === COUNSEL_SERVICE.hybridSubscription}
                  onChange={() => setCounselService(COUNSEL_SERVICE.hybridSubscription)}
                />
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
              <HeaderRequired title="문의내용" isRequired={true}/>
              <textarea placeholder="궁금하신 내용과 참고사항을 입력해주세요
                (ex.업종, 사업장 주소, 현재 업무용 차량 운영 대수, 희망 계약차량 대수 등)" 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <AgreementBox
                agreement={agreement}
                setAgreement={setAgreement}
                dropdownShow={dropdownShow}
                onClickTogglePersonalInformation={onClickTogglePersonalInformation}
              />
            </div>
              <div className={`${counselStyles.buttonGroup} ${counselStyles.submit}`}>
                {
                  agreement && <XlargePrimaryButton 
                    onClick={onClickRegist}
                    buttonText="등록하기"
                  />
                }
              </div>
          </form>
          <ProcessInfo title="상담 진행 안내"
            processInfoData={ProcessInfoData} 
          />
          <DialogAlert ref={dialogAlertRef}
            message={dialogAlertMessage} 
          />
        </div>
        )
      }
    </div>
  );
}