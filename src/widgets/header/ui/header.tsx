import styles from '@/widgets/header/ui/header.module.css';

import { useState } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const headerClass = isNavOpen ? `${styles.header} ${styles.navOpened}` : styles.header;
  
  return (
    <header className={headerClass}>
      <div className={styles.inner}>
        <a className={styles.logo} href='/'></a>
        <nav>
          <ul>
            <li><a href='https://wiblebiz.kia.com/Guide/'>서비스 소개</a></li>
            <li><a href='/FAQ'>자주 묻는 질문</a></li>
            <li><a href='https://wiblebiz.kia.com/News/'>새소식</a></li>
            <li><a href='https://wiblebiz.kia.com/Counsel/'>상담문의</a></li>
          </ul>
        </nav>
        <span className={styles.util} >
          <button className={styles.nav} type='button' onClick={() => setIsNavOpen(!isNavOpen)}>
            <span className={styles.blind}>메뉴 열기</span>
          </button>
        </span>
      </div>

    </header>
  );
};

export default Header;
