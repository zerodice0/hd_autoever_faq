import styles from '@/shared/header_required/ui/header_required.module.css';

import type { HeaderRequiredProps } from '@/shared/header_required/model/header_required_props';

export const HeaderRequired = ({ title, isRequired }: HeaderRequiredProps) => {
  return (
    <h4 className={styles.heading4}>
      {title}
      {isRequired && <i className={styles.required}>필수</i>}
    </h4>
  );
}