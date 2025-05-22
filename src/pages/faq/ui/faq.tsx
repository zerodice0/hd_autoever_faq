import '@/pages/faq/ui/content.css';
import '@/pages/faq/ui/tabs.css';
import '@/pages/faq/ui/search.css';
import '@/pages/faq/ui/filter.css';
import '@/pages/faq/ui/faq.css';
import '@/pages/faq/ui/list_more.css';
import '@/pages/faq/ui/inquery_info.css';

import { tabsType, type TABS_TYPE, type Tabs } from '@/pages/faq/model/tabs_model';
import { useCategories } from '@/pages/faq/api/category_hooks';
import type { FaqData, FaqResponse } from '@/pages/faq/model/faq_model';
import { fetchFaqs } from '@/pages/faq/api/faq_api';
import { ProcessInfo } from '@/pages/faq/ui/process_info/process_info';
import { AppInfo } from '@/pages/faq/ui/app_info/app_info';
import type { FaqProps } from '@/pages/faq/model/faq_props';

import { useEffect, useState } from 'react';

function Faq({ navigateTo }: FaqProps) {
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

  const categories = useCategories(tabs.find((tab) => tab.isSelected)?.value || '');
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [question, setQuestion] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
  const [faqs, setFaqs] = useState<FaqData[]>([]);
  const [selectedFaqId, setSelectedFaqId] = useState<number | null>(null);

  useEffect(() => {
    fetchFaqs(
      10, 0, 
      tabs.find((tab) => tab.isSelected)?.value ?? '',
      selectedCategory,
      currentQuestion,
    ).then((response: FaqResponse) => {
      setFaqs(response.data); // offset이 0이면 response.data를 설정
    });
    
  }, [currentQuestion, selectedCategory, tabs]);

  const onClickTab = (value: string) => {
    setSelectedFaqId(null);
    setTabs(tabs.map((tab) => ({
      ...tab,
      isSelected: tab.value === value,
    })));
    setSelectedCategory(null);
  };

  const onChangeCategory = (categoryID: string | null) => {
    setSelectedFaqId(null);
    setCurrentQuestion(question);
    setSelectedCategory(categoryID);
  };

  const onClickFaq = (faqId: number) => {
    const isSelectedFaqId = faqId === selectedFaqId;
    const target = isSelectedFaqId ? null : faqId;
    setSelectedFaqId(target);
  };

  const onClickSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentQuestion(question);
    if (question.trim().length === 0) {
      setSelectedCategory(null);
    }
  }

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
            <a onClick={() => onClickTab(tab.value)}>
              <span>{tab.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <form>
        <div className="search">
          <div className="input-wrap">
            <input type="text" 
              placeholder="찾으시는 내용을 입력해 주세요"
              value={question}
              onChange={(e) => setQuestion(e.target.value)} />
            <button type="button" 
              className="clear"
              onClick={() => setQuestion('')}>다시입력</button>
            <button type="button"
              className="submit"
              onClick={onClickSearch}>검색</button>
          </div>
        </div>
      </form>
      <div className="filter">
        {
          categories.map((category) => (
            <label key={category.categoryID}>
              <input type="radio"
                name="filter"
                checked={selectedCategory === category.categoryID}
                onChange={() => onChangeCategory(category.categoryID)}
              />
              <i>{category.name}</i>
            </label>
          ))
        }
      </div>
      {
        faqs.length === 0 ? <div className="no-data">
            <p>검색결과가 없습니다.</p>
          </div> 
        : <ul className="faq-list">
          {faqs.map((faq) => (
            <li key={faq.id} className={
              selectedFaqId === faq.id ? 'active show' : ''
              }>
              <h4 className="a">
                <button type="button" onClick={() => onClickFaq(faq.id)}>
                  {tabs.find((tab) => tab.isSelected)?.value === tabsType.serviceUsage && <em>{faq.categoryName}</em>}
                  <em>{faq.subCategoryName}</em>
                  <strong>{faq.question}</strong>
                </button>
              </h4>
              <div className="q">
                <div className="inner" 
                  // Sanitize-html 적용 필요함
                  dangerouslySetInnerHTML={{ __html: faq.answer }}>  
                </div>
              </div>
            </li>
          ))}
        </ul>
      }
        <button type="button" className="list-more"><i></i>더보기</button>
        <h2 className="heading-2">서비스 문의</h2>
        <div className="inquiry-info">
          <a className="btn-xxlg btn-tertiary" 
            href="/documents/proposal.pdf"
            download="기아 비즈 서비스 제안서">
              <i className="ic download"></i><span>서비스 제안서 다운로드</span>
          </a>
          <a className="btn-xxlg btn-tertiary" onClick={() => navigateTo('/Counsel')}>
            <i className="ic write"></i><span>상담문의 등록하기</span></a>
          <a className="btn-xxlg btn-tertiary" 
            href="https://pf.kakao.com/_xfLxjdb"
            target="_blank" rel="noreferrer">
            <i className="ic talk"></i>
              <span>카톡으로 문의하기 <em>ID : 기아 비즈</em></span>
          </a>
        </div>
        <ProcessInfo />
        <AppInfo />
    </div>
  );
}

export default Faq;