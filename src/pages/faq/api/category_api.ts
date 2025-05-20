
import type { Category } from "../model/category_model";

export const fetchCategory = async (): Promise<Category[]> => {
  const response = await fetch('/category');
  const data = await response.json();

  return data.map((category: Category) => category);
}