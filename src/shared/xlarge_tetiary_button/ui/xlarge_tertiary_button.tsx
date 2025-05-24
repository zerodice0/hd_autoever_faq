import styles from '@/shared/xlarge_tetiary_button/ui/xlarge_tertiary_button.module.css';

import type { XlargeTertiaryButtonProps } from '@/shared/xlarge_tetiary_button/model/xlarge_tertiary_button.props';

export function XlargeTertiaryButton({
  onClick,
  buttonText
}: XlargeTertiaryButtonProps) {
  return (
    <button type="button" 
      className={styles.button}
      onClick={onClick}>
      {buttonText}
    </button>
  );
}