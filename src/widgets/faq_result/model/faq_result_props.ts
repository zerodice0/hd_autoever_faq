import type { FaqData } from '@/pages/faq/model/faq_model';
import type { TABS_TYPE, Tabs } from '@/pages/faq/model/tabs_model';

export interface FaqResultProps {
  faqs: FaqData[];
  selectedFaqId: number | null;
  onClickFaq: (faqId: number) => void;
  totalRecord: number;
  onClickMoreFaq: () => void;
  tabs: Tabs<TABS_TYPE>[];
}