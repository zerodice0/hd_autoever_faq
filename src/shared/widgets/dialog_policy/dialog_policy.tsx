import './dialog_policy.css';

interface DialogPolicyProps {
  ref: React.RefObject<HTMLDialogElement | null>;
}

function DialogPolicy({ ref }: DialogPolicyProps) {
  return (
    <dialog ref={ref} style={{ padding: '0px'}}>
      <div>
        <div className="dialog-wrapper dialog-policy" id="ms_policy1">
          <div className="dialog-header">
            <h4>개인정보 처리방침</h4>
            <button type="button" className="close">닫기</button>
          </div>
          <div className="dialog-body">
            <div className="policy-top">
              {/* 개인정보 처리방침 select */}
            </div>
            <div>
              {/* 개인정보 처리방침 content */}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );

}

export default DialogPolicy;
