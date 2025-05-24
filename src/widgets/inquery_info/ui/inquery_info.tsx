import styles from './inquery_info.module.css';
import xxlargeButtonStyles from './xxlarge_button.module.css';
import tertiaryButtonStyles from './tertiary_button.module.css';

import type { InqueryInfoProps } from '@/widgets/inquery_info/model/inquery_info_props';

export function InqueryInfo({
  onClickCounsel 
}: InqueryInfoProps) {
  return (
    <div className={styles.inqueryInfo}>
      <a className={`${xxlargeButtonStyles.button} ${tertiaryButtonStyles.btnTertiary}`} 
        onClick={() => window.open('/documents/proposal.pdf', '_blank', 'noopener,noreferrer')}>
          <i className={`${xxlargeButtonStyles.ic} ${xxlargeButtonStyles.download}`}></i>
          <span>서비스 제안서 다운로드</span>
      </a>
      <a className={`${xxlargeButtonStyles.button} ${tertiaryButtonStyles.btnTertiary}`}
        onClick={onClickCounsel}>
        <i className={`${xxlargeButtonStyles.ic} ${xxlargeButtonStyles.write}`}></i>
        <span>상담문의 등록하기</span>
      </a>
      <a className={`${xxlargeButtonStyles.button} ${tertiaryButtonStyles.btnTertiary}`} 
        onClick={() => window.open('https://pf.kakao.com/_xfLxjdb', '_blank', 'noopener,noreferrer')}>
        <i className={`${xxlargeButtonStyles.ic} ${xxlargeButtonStyles.talk}`}></i>
          <span>카톡으로 문의하기 <em>ID : 기아 비즈</em></span>
      </a>
    </div>
  );
}