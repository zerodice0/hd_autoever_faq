import styles from './xlarge_primary_button.module.css';

import type { XlargePrimaryButtonProps } from '@/shared/xlarge_primary_button/model/xlarge_primary_button_props';

export function XlargePrimaryButton({ onClick, buttonText }: XlargePrimaryButtonProps) {
  return (
    <button className={`${styles.button}`}
      type="submit"
      onClick={onClick}
      onSubmit={onClick}>
      {buttonText}
    </button>
  )
}