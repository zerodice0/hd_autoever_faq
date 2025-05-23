import '@/widgets/dialog_alert/ui/dialog_alert.css';

import type { DialogAlertProps } from '@/widgets/dialog_alert/model/dialog_alert_model';

export function DialogAlert({ ref, message }: DialogAlertProps) {
  const onClickDialogClose = () => {
    ref.current?.close();
  }

  return (
    <dialog className="dialog-wrapper dialog-error" id="error_faq" ref={ref}>
      <div className="dialog-body">
        <p className="message">{message}</p>
        <div className="button-group">
          <button type="button" 
                  className="btn-xlg btn-tertiary"
                  onClick={onClickDialogClose}>
                    확인
          </button>
        </div>
      </div>
    </dialog>
  );
}