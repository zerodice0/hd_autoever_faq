import '@/widgets/dialog_policy/ui/dialog_policy.css';

import { useJoinServicesUse } from '@/widgets/dialog_policy/api/terms_hooks';
import type { DialogPolicyProps } from '@/widgets/dialog_policy/model/dialog_policy_props';

import { useState } from 'react';

function DialogPolicy({ ref }: DialogPolicyProps) {
  const joinServicesUseData = useJoinServicesUse();
  const [selectedTermIndex, setSelectedTermIndex] = useState<number>(0);

  const onClickDialogClose = () => {
    ref.current?.close();
  }

  const parseTimestampToDateString = (timestamp: number):string => {
    let result = '현재';

    if (timestamp !== 0) {
      const date = new Date(timestamp);
      result = date.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' });
    }

    return result;
  }

  return (
    <dialog ref={ref} style={{ padding: '0px'}}>
      <div>
        <div className="dialog-wrapper dialog-policy" id="ms_policy1">
          <div className="dialog-header">
            <h4>이용약관</h4>
            <button type="button" className="close" onClick={onClickDialogClose}>닫기</button>
          </div>
          <div className="dialog-body">
            <div className="policy-top">
              <select onChange={(e) => setSelectedTermIndex(Number(e.target.value))}>
                {joinServicesUseData.map((term, index) => (
                  <option value={index} key={term.termsVersion}>
                    {parseTimestampToDateString(term.startDate)} ~ {parseTimestampToDateString(term.endDate)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              {
                joinServicesUseData[selectedTermIndex] && 
                  <div dangerouslySetInnerHTML={
                    { __html: joinServicesUseData[selectedTermIndex].contents }
                  } />
              }
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );

}

export default DialogPolicy;
