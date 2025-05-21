import type { PageInformation } from '@/pages/faq/model/page_model';

export interface Faq {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}

export interface FaqResponse {
  pageInformation: PageInformation;
  data: Faq[];
}