import type { PageInformation } from '@/pages/faq/model/page_model';

export interface FaqData {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}

export interface FaqResponse {
  pageInformation: PageInformation;
  data: FaqData[];
}