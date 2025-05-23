import '@/widgets/container/ui/board_white.css';

import { COUNSEL_SERVICE, type CounselService } from '@/pages/counsel/model/counsel_service_model';
import { ProcessInfo } from '@/widgets/process_info/ui/process_info';
import { ProcessInfoData } from '@/pages/counsel/model/process_info_data';
import { DialogAlert } from '@/widgets/dialog_alert/ui/dialog_alert';

import { useRef, useState } from 'react';

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

  const isInMinMaxLength = (value: string, min: number, max: number) => {
    return (min <= value.trim().length) && (value.trim().length < max);
  }

  const itemLengthCheckMessage = (item: string, min: number, max: number) => {
    return `${item} 항목은 ${min}자 이상 ~ ${max}자 이하로 입력해주세요`;
  }

  const onClickRegist = (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

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

  const onClickTogglePersonalInformation = () => {
    setDropdownShow(!dropdownShow);
  }

  return (
    <div className='content reduced'>
      <h1> 상담문의 <em>기아 비즈가 최고의 모빌리티 솔루션을 제안해드립니다.</em></h1>
      {
        isRegisted ? (
          <div>
            <div className="board-write">
              <div className="result-info">
                <strong>기아 비즈 서비스를 <br/> 문의해 주셔서 감사합니다. </strong>
                <p>등록해주신 문의는 접수완료되어 <br/> 기아 비즈 담당자에게 전달되었습니다. <br/> 담당자 확인 후 기재해주신 연락처로 빠르게 안내드리겠습니다. </p>
              </div>
            </div>
            <div className="button-group">
              <a className="btn-xlg btn-tertiary" 
                href="https://wiblebiz.kia.com/News"
                target="_self">
                기아 비즈 새소식 보러가기
              </a>
            </div>
          </div>
        ) : (
          <div>
            <form>
              <div className="board-write">
              <h4 className="heading-4">회사명 <i className="required">필수</i>
              </h4>
              <input type="text"
                placeholder="소속된 회사명을 적어주세요"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <h4 className="heading-4">부서명 <i className="required">필수</i>
              </h4>
              <input type="text"
                placeholder="소속된 부서명을 적어주세요"
                value={departmentName}
                onChange={(e) => setDepartmentName(e.target.value)}
              />
              <h4 className="heading-4">성함 <i className="required">필수</i>
              </h4>
              <input type="text"
                placeholder="담당자 성함을 적어주세요" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <h4 className="heading-4">이메일 <i className="required">필수</i>
              </h4>
              <input type="text"
                placeholder="담당자 이메일 주소를 적어주세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h4 className="heading-4">연락처 <i className="required">필수</i>
              </h4>
              <input type="text"
                placeholder="담당자 연락처를 적어주세요"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <h4 className="heading-4">문의 서비스 선택</h4>
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
              <h4 className="heading-4">문의내용 <i className="required">필수</i>
              </h4>
              <textarea placeholder="궁금하신 내용과 참고사항을 입력해주세요
                (ex.업종, 사업장 주소, 현재 업무용 차량 운영 대수, 희망 계약차량 대수 등)" 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
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
            </div>
            {
              agreement && <div className="button-group submit">
                <button className="btn-xlg btn-primary"
                  type="submit"
                  onSubmit={onClickRegist}
                  onClick={onClickRegist}>
                  등록하기
                </button>
              </div>
            }
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