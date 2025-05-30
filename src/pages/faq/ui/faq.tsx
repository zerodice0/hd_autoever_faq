import faqStyles from '@/pages/faq/ui/faq.module.css';
import searchStyles from '@/pages/faq/ui/search.module.css';

import type { FaqData, FaqResponse } from '@/pages/faq/model/faq_model';
import type { FaqProps } from '@/pages/faq/model/faq_props';
import { tabsType, type TABS_TYPE, type Tabs } from '@/pages/faq/model/tabs_model';
import { useCategories } from '@/pages/faq/api/category_hooks';
import { fetchFaqs } from '@/pages/faq/api/faq_api';
import { ProcessInfo } from '@/widgets/process_info/ui/process_info';
import { AppInfo } from '@/widgets/app_info/ui/app_info';
import { ProcessInfoData } from '@/pages/faq/model/process_info_data';
import { DialogAlert } from '@/widgets/dialog_alert/ui/dialog_alert';

import { useEffect, useRef, useState } from 'react';
import { InqueryInfo } from '@/widgets/inquery_info/ui/inquery_info';
import { FaqFilter } from '@/widgets/faq_filter/ui/faq_filter';
import { FaqResult } from '@/widgets/faq_result/ui/faq_result';

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

  const [nextOffset, setNextOffset] = useState<number>(0);
  const [totalRecord, setTotalRecord] = useState<number>(0);
  const limit = 10;

  const dialogAlertRef = useRef<HTMLDialogElement>(null);
  const [dialogAlertMessage, setDialogAlertMessage] = useState<string>('검색어는 2자 이상 입력해주세요.');

  useEffect(() => {
    fetchFaqs(
      limit, 0,
      tabs.find((tab) => tab.isSelected)?.value ?? '',
      selectedCategory,
      currentQuestion,
    ).then((response: FaqResponse) => {
      setFaqs(response.data);
      setNextOffset(response.pageInformation.nextOffset);
      setTotalRecord(response.pageInformation.totalRecord);
    }).catch(() => {
      setDialogAlertMessage('검색 중 오류가 발생했습니다.');
      dialogAlertRef.current?.showModal();
    });
    
  }, [currentQuestion, selectedCategory, tabs]);

  const onClickTab = (value: string) => {
    setSelectedFaqId(null);
    setTabs(tabs.map((tab) => ({
      ...tab,
      isSelected: tab.value === value,
    })));
    setSelectedCategory(null);
    setNextOffset(0);
    setTotalRecord(0);
  };

  const onChangeCategory = (categoryID: string | null) => {
    setSelectedFaqId(null);
    setCurrentQuestion(question);
    setSelectedCategory(categoryID);
    setNextOffset(0);
    setTotalRecord(0);
  };

  const onClickFaq = (faqId: number) => {
    const isSelectedFaqId = faqId === selectedFaqId;
    const target = isSelectedFaqId ? null : faqId;
    setSelectedFaqId(target);
  };

  const onClickSearch = (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (question.trim().length < 2) {
      setDialogAlertMessage('검색어는 2자 이상 입력해주세요.');
      dialogAlertRef.current?.showModal();
    } else {
      setCurrentQuestion(question);
      if (question.trim().length === 0) {
        setSelectedCategory(null);
        setNextOffset(0);
        setTotalRecord(0);
      }
    }
  }

  const onClickInitSearchResult = () => {
    setQuestion('');
    setCurrentQuestion(null);
    setSelectedCategory(null);
    setNextOffset(0);
    setTotalRecord(0);
    setSelectedFaqId(null);
  }

  const onClickCounsel = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateTo('/Counsel');
  }

  const onClickMoreFaq = async () => {
    if (faqs.length < totalRecord) {
      try {
        const response = await fetchFaqs(
          limit, nextOffset,
          tabs.find((tab) => tab.isSelected)?.value ?? '',
          selectedCategory,
          currentQuestion,
        )
  
        setFaqs([...faqs, ...response.data]);
        setNextOffset(response.pageInformation.nextOffset);
        setTotalRecord(response.pageInformation.totalRecord);
      } catch (error) {
        console.error(error);
        setDialogAlertMessage('검색 중 오류가 발생했습니다.');
        dialogAlertRef.current?.showModal();
      }
    }
  }

  return (
    <div className={faqStyles.content}>
      <h1>
        자주 묻는 질문
        <em>궁금하신 내용을 빠르게 찾아보세요.</em>
      </h1>
      <i className={faqStyles.stickyChecker}/>
      <ul className={faqStyles.tabs}>
        {tabs.map((tab) => (
          <li key={tab.value} className={tab.isSelected ? faqStyles.active : ''}>
            <a onClick={() => onClickTab(tab.value)}>
              <span>{tab.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <form onSubmit={onClickSearch}>
        <div className={searchStyles.search}>
          <div className={searchStyles.inputWrap}>
            <input type="text" 
              placeholder="찾으시는 내용을 입력해 주세요"
              value={question}
              onChange={(e) => setQuestion(e.target.value)} />
            <button type="button" 
              className={searchStyles.clear}
              onClick={() => setQuestion('')}>
                다시입력
            </button>
            <button type="button"
              className={searchStyles.submit}
              onClick={onClickSearch}>
                검색
            </button>
          </div>
        </div>
      </form>
      {
        currentQuestion && (
          <div className={searchStyles.searchInfo}>
            <h2 className={searchStyles.headingInfo}>검색결과 총 <em>{ totalRecord }</em>건 </h2>
            <button type="button"
              className={searchStyles.init}
              onClick={onClickInitSearchResult}>
                검색초기화
            </button>
          </div>
        )
      }
      <FaqFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onChangeCategory={onChangeCategory}
      />
      <FaqResult
        faqs={faqs}
        selectedFaqId={selectedFaqId}
        onClickFaq={onClickFaq}
        totalRecord={totalRecord}
        onClickMoreFaq={onClickMoreFaq}
        tabs={tabs}
      />
      <h2 className="heading-2">서비스 문의</h2>
      <InqueryInfo onClickCounsel={onClickCounsel} />
      <ProcessInfo title="이용 프로세스 안내"
        processInfoData={ProcessInfoData} />
      <AppInfo />
      <DialogAlert 
        ref={dialogAlertRef}
        message={dialogAlertMessage}/>
    </div>
  );
}

export default Faq;