
import type { Category } from "@/pages/faq/model/category_model";

export const fetchCategory = async (tab: string): Promise<Category[]> => {
  const response = await fetch(`/category?tab=${tab}`);
  const data = await response.json();

  return data.map((category: Category) => category);
}