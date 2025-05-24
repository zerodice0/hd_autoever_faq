import containerStyles from '@/widgets/container/ui/container.module.css';
import '@/shared/styles/common.css';

import Faq from '@/pages/faq/ui/faq';
import Counsel from '@/pages/counsel/ui/counsel';

import { useState, useEffect, useCallback } from 'react';
import { QuickUtil } from '@/widgets/quick_util/ui/quick_util';

export default function Container() {
  const [currentPage, setCurrentPage] = useState<string>('FAQ');

  const navigateTo = useCallback((path: '/FAQ' | '/Counsel') => {
    setCurrentPage(path);
    window.history.pushState({page: path}, '', path);
  }, []);

  // 페이지 이동시 초기화
  useEffect(() => {
    // 페이지 이동시 스크롤을 최상단으로 이동
    requestAnimationFrame(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // 페이지 이동시 브라우저 탭 타이틀 변경
    const title = currentPage === '/Counsel' ? '상담 문의' : '서비스 도입 FAQ';
    document.title = `${title} | 기아 비즈(Kia Biz) - 친환경 모빌리티 서비스`;
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

    return () => {
      window.removeEventListener('popstate', onPopState);
    }
  }, []);

  const currentPageComponent = () => {
    let component = <Faq navigateTo={navigateTo} />;
    
    if (currentPage === '/Counsel') {
      component = <Counsel />;
    } 
    
    return component;
  };

  return (
    <>
      <div className={containerStyles.container}>
        {currentPageComponent()}
      </div>
      <QuickUtil />
    </>
  )
}