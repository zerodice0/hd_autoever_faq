import styles from '@/widgets/quick_util/ui/quick_util.module.css';

import type { QuickUtilProps } from '@/widgets/quick_util/model/quick_util_props';

export function QuickUtil({isScrolled, onClickQuickUtil}: QuickUtilProps) {
  return (
    <div className={`${styles.quickUtil} ${isScrolled ? styles.active : ''}`}>
      <div className={styles.inner}>
        <button type="button"
          className={styles.top}
          data-ui-click="scroll-top"
          onClick={onClickQuickUtil}>
          상단으로
        </button>
      </div>
    </div>
  );
}