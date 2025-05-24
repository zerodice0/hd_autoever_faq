import { XlargeTertiaryButton } from "@/shared/xlarge_tetiary_button/ui/xlarge_tertiary_button";

export function RegistCounselResult() {
  return (
    <div>
      <div className="board-write">
        <div className="result-info">
          <strong>기아 비즈 서비스를 <br/> 문의해 주셔서 감사합니다. </strong>
          <p>등록해주신 문의는 접수완료되어 <br/> 기아 비즈 담당자에게 전달되었습니다. <br/> 담당자 확인 후 기재해주신 연락처로 빠르게 안내드리겠습니다. </p>
        </div>
      </div>
      <div className="button-group">
        <XlargeTertiaryButton 
          onClick={() => window.open('https://wiblebiz.kia.com/News', '_self')}
          buttonText="기아 비즈 새소식 보러가기"
        />
      </div>
    </div>
  );
}