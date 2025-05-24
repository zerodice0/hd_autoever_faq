import '@/widgets/dialog_alert/ui/dialog_alert.css';

import type { DialogAlertProps } from '@/widgets/dialog_alert/model/dialog_alert_model';
import { XlargeTertiaryButton } from '@/shared/xlarge_tetiary_button/ui/xlarge_tertiary_button';

export function DialogAlert({ ref, message }: DialogAlertProps) {
  const onClickDialogClose = () => {
    ref.current?.close();
  }

  return (
    <dialog className="dialog-wrapper dialog-error" id="error_faq" ref={ref}>
      <div className="dialog-body">
        <p className="message">{message}</p>
        <div className="button-group">
          <XlargeTertiaryButton 
            onClick={onClickDialogClose}
            buttonText="확인"
          />
        </div>
      </div>
    </dialog>
  );
}