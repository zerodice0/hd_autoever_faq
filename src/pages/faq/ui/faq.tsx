import '@/pages/faq/ui/content.css';
import '@/pages/faq/ui/tabs.css';
import '@/pages/faq/ui/search.css';

import { tabsType, type TABS_TYPE, type Tabs } from '@/pages/faq/model/tabs_model';
import { useState } from 'react';

function Faq() {
  const [tabs, setTabs] = useState<Tabs<TABS_TYPE>[]>([
    {
      label: '서비스 도입',
      value: tabsType.serviceConsult,
      isSelected: true,
    },
    {
      label: '서비스 이용',
      value: tabsType.serviceUsage,
      isSelected: false,
    },
  ]);

  const handleTabClick = (value: string) => {
    setTabs(tabs.map((tab) => ({
      ...tab,
      isSelected: tab.value === value,
    })));
  };

  return (
    <div className='content'>
      <h1>
        자주 묻는 질문
        <em>궁금하신 내용을 빠르게 찾아보세요.</em>
      </h1>
      <i className='sticky-checker'/>
      <ul className="tabs">
        {tabs.map((tab) => (
          <li key={tab.value} className={tab.isSelected ? 'active' : ''}>
            <a onClick={() => handleTabClick(tab.value)}>
              <span>{tab.label}</span>
            </a>
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