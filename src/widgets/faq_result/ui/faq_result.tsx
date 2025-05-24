import styles from '@/widgets/faq_result/ui/faq_result.module.css';

import type { FaqData } from '@/pages/faq/model/faq_model';
import type { TABS_TYPE, Tabs } from '@/pages/faq/model/tabs_model';
import { tabsType } from '@/pages/faq/model/tabs_model';
import type { FaqResultProps } from '@/widgets/faq_result/model/faq_result_props';

export function FaqResult(
  {
    faqs,
    selectedFaqId,
    onClickFaq,
    totalRecord,
    onClickMoreFaq,
    tabs,
  }: FaqResultProps
) {
  return (
    <>
      {
        faqs.length === 0 ? <div className="no-data">
            <p>검색결과가 없습니다.</p>
          </div>
        : <ul className={styles.faqList}>
          {faqs.map((faq: FaqData) => (
            <li key={faq.id} className={
              selectedFaqId === faq.id ? `${styles.active} ${styles.show}` : ''
              }>
              <h4 className={styles.a}>
                <button type="button" onClick={() => onClickFaq(faq.id)}>
                  {tabs.find((tab: Tabs<TABS_TYPE>) => tab.isSelected)?.value === tabsType.serviceUsage && <em>{faq.categoryName}</em>}
                  <em>{faq.subCategoryName}</em>
                  <strong>{faq.question}</strong>
                </button>
              </h4>
              <div className={styles.q}>
                <div className={styles.inner} 
                  // Sanitize-html 적용 필요함
                  dangerouslySetInnerHTML={{ __html: faq.answer }}>  
                </div>
              </div>
            </li>
          ))}
        </ul>
      }
      { 
        (faqs.length < totalRecord) && 
          <button type="button" className={styles.listMore} onClick={onClickMoreFaq}>
            <i></i>더보기
          </button>
      }
    </>
  );
}