import '@/pages/faq/ui/content.css';
import '@/pages/faq/ui/tabs.css';
import '@/pages/faq/ui/search.css';

import { useState } from 'react';

function Faq() {
  const tabs = ['서비스 도입', '서비스 이용'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className='content'>
      <h1>
        자주 묻는 질문
        <em>궁금하신 내용을 빠르게 찾아보세요.</em>
      </h1>
      <i className='sticky-checker'/>
      <ul className="tabs">
        {tabs.map((tab) => (
          <li key={tab}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? 'active' : ''}>
            <a><span>{tab}</span></a>
          </li>
        ))}
      </ul>
      <form>
        <div className="search">
          <div className="input-wrap">
            <input type="text" placeholder="찾으시는 내용을 입력해 주세요" />
            <button type="button" className="clear" data-ui-click="input-clear">다시입력</button>
            <button type="button" className="submit">검색</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Faq;