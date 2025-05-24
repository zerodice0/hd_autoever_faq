import styles from '@/shared/xxlarge_tertiary_button/ui/xxlarge_tertitary_button.module.css';

import type { XxlargeTertiaryButtonProps } from '@/shared/xxlarge_tertiary_button/model/xxlarge_tertiary_button_props';

export function XxlargeTertiaryButton({
  onClick,
  buttonText,
  buttonDescription,
  buttonIcon
}: XxlargeTertiaryButtonProps) {
  const iconClass = styles[buttonIcon];

  return (
    <a className={styles.button}
      onClick={onClick}>
      <i className={`${styles.ic} ${iconClass}`}></i>
        <span>{buttonText} {buttonDescription && <em>{buttonDescription}</em>}</span>
    </a>
  )
}