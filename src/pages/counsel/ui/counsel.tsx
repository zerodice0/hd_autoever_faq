import type { CounselProps } from '@/pages/counsel/model/counsel_model';

export default function Counsel({ navigateTo }: CounselProps) {
  return (
    <div className='content'>
      <h2>상담문의</h2>
      <button onClick={() => navigateTo('/FAQ')}>FAQ로 돌아가기</button>
    </div>
  );
}