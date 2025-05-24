import styles from '@/widgets/quick_util/ui/quick_util.module.css';

import { useState, useCallback, useEffect } from 'react';

export function QuickUtil() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const onClickQuickUtil = useCallback(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  const onScroll = useCallback(() => {
    if (window.scrollY > 10 !== isScrolled) {
      setIsScrolled(window.scrollY > 10);
    }
  }, [isScrolled]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [onScroll]);

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