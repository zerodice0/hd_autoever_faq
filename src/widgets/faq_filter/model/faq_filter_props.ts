import type { Category } from '@/pages/faq/model/category_model';

export interface FaqFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onChangeCategory: (categoryID: string | null) => void;
}