import styles from '@/widgets/inquery_info/ui/inquery_info.module.css';

import type { InqueryInfoProps } from '@/widgets/inquery_info/model/inquery_info_props';
import { XxlargeTertiaryButton } from '@/shared/xxlarge_tertiary_button/ui/xxlarge_tertiary_button';

export function InqueryInfo({
  onClickCounsel 
}: InqueryInfoProps) {
  return (
    <div className={styles.inqueryInfo}>
      <XxlargeTertiaryButton
        buttonIcon="download"
        onClick={() => window.open('/documents/proposal.pdf', '_blank', 'noopener,noreferrer')}
        buttonText="서비스 제안서 다운로드"
        buttonDescription={null}
      />
      <XxlargeTertiaryButton
        buttonIcon="write"
        onClick={onClickCounsel}
        buttonText="상담문의 등록하기"
        buttonDescription={null}
      />
      <XxlargeTertiaryButton
        buttonIcon="talk"
        onClick={() => window.open('https://pf.kakao.com/_xfLxjdb', '_blank', 'noopener,noreferrer')}
        buttonText="카톡으로 문의하기"
        buttonDescription="ID : 기아 비즈"
      />
    </div>
  );
}