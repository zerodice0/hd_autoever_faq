import xxlargeButtonStyles from './xxlarge_button.module.css';
import tertiaryButtonStyles from './tertiary_button.module.css';

import type { XxlargeTertiaryButtonProps } from '@/shared/xxlarge_tertiary_button/model/xxlarge_tertiary_button_props';

export function XxlargeTertiaryButton({
  onClick,
  buttonText,
  buttonDescription,
  buttonIcon
}: XxlargeTertiaryButtonProps) {
  const iconClass = xxlargeButtonStyles[buttonIcon];

  return (
    <a className={`${xxlargeButtonStyles.button} ${tertiaryButtonStyles.btnTertiary}`} 
      onClick={onClick}>
      <i className={`${xxlargeButtonStyles.ic} ${iconClass}`}></i>
        <span>{buttonText} {buttonDescription && <em>{buttonDescription}</em>}</span>
    </a>
  )
}