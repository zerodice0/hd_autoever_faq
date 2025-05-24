import containerStyles from '@/widgets/container/ui/container.module.css';
import '@/shared/styles/common.css';

import Faq from '@/pages/faq/ui/faq';
import Counsel from '@/pages/counsel/ui/counsel';

import { useState, useEffect, useCallback } from 'react';
import { QuickUtil } from '@/widgets/quick_util/ui/quick_util';

export default function Container() {
  const [currentPage, setCurrentPage] = useState<string>('FAQ');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navigateTo = useCallback((path: '/FAQ' | '/Counsel') => {
    setCurrentPage(path);
    window.history.pushState({page: path}, '', path);
  }, []);

  const onScroll = useCallback(() => {
    if (window.scrollY > 10 !== isScrolled) {
      setIsScrolled(window.scrollY > 10);
    }
  }, [isScrolled]);

  const onClickQuickUtil = useCallback(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  // 페이지 이동시 스크롤을 상단으로 이동하기 위한 useEffect
  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  }, [currentPage]);

  // 이벤트를 처리하기 위한 useEffect
  useEffect(() => {
    const path = window.location.pathname;
    if (!['/Counsel', '/FAQ'].includes(path)) {
      window.history.replaceState({page: '/FAQ'}, '', '/FAQ');
    }
    setCurrentPage(path);

    const onPopState = () => {
      const path = window.location.pathname;
      setCurrentPage(path);
    }

    window.addEventListener('popstate', onPopState); // 뒤로가기/앞으로가기 처리
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('scroll', onScroll);
    }
  }, [onScroll]);

  return (
    <>
      <div className={containerStyles.container}>
        {currentPage === '/FAQ' && <Faq navigateTo={navigateTo} />}
        {currentPage === '/Counsel' && <Counsel />}
      </div>
      <QuickUtil isScrolled={isScrolled} onClickQuickUtil={onClickQuickUtil} />
    </>
  )
}