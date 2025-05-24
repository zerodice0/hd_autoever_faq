import xxlargeButtonStyles from './xxlarge_button.module.css';
import tertiaryButtonStyles from './tertiary_button.module.css';

import type { XxlargeTertiaryButtonProps } from '@/shared/xxlarge_tertiary_button/model/xxlarge_tertiary_button_props';

export function XxlargeTertiaryButton({
  onClick,
  buttonText,
  buttonDescription
}: XxlargeTertiaryButtonProps) {
  return (
    <a className={`${xxlargeButtonStyles.button} ${tertiaryButtonStyles.btnTertiary}`} 
      onClick={onClick}>
      <i className={`${xxlargeButtonStyles.ic} ${xxlargeButtonStyles.talk}`}></i>
        <span>{buttonText} {buttonDescription && <em>{buttonDescription}</em>}</span>
    </a>
  )
}