import styles from '@/widgets/dialog_alert/ui/dialog_alert.module.css';

import type { DialogAlertProps } from '@/widgets/dialog_alert/model/dialog_alert_model';
import { XlargeTertiaryButton } from '@/shared/xlarge_tetiary_button/ui/xlarge_tertiary_button';

export function DialogAlert({ ref, message }: DialogAlertProps) {
  const onClickDialogClose = () => {
    ref.current?.close();
  }

  return (
    <dialog className={styles.dialogWrapper} id="error_faq" ref={ref}>
      <div className={styles.dialogBody}>
        <p className={styles.message}>{message}</p>
        <div className={styles.buttonGroup}>
          <XlargeTertiaryButton 
            onClick={onClickDialogClose}
            buttonText="확인"
          />
        </div>
      </div>
    </dialog>
  );
}