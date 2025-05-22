import Faq from '@/pages/faq/ui/faq';
import Counsel from '@/pages/counsel/ui/counsel';

import { useState, useEffect } from 'react';

export default function Container() {
  const [currentPage, setCurrentPage] = useState<string>('FAQ');

  useEffect(() => {
    const path = window.location.pathname;
    if (!['/Counsel', '/FAQ'].includes(path)) {
      window.history.replaceState({page: '/FAQ'}, '', '/FAQ');
    }
    setCurrentPage(path);

    const onPopState = () => {
      const path = window.location.pathname;
      const newPath = path === '/FAQ' ? '/Counsel' : '/FAQ';

      setCurrentPage(newPath);

      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    window.addEventListener('popstate', onPopState); // 뒤로가기/앞으로가기 처리

    return () => {
      window.removeEventListener('popstate', onPopState);
    }
  }, []);

  const navigateTo = (path: '/FAQ' | '/Counsel') => {
    setCurrentPage(path);
    window.history.pushState({page: path}, '', path);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <div className="container">
      {currentPage === '/FAQ' && <Faq navigateTo={navigateTo} />}
      {currentPage === '/Counsel' && <Counsel navigateTo={navigateTo} />}
    </div>
  )
}