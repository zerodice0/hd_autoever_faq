import { useEffect, useState } from "react"
import { fetchCategory } from "@/pages/faq/api/category_api";
import type { Category } from "@/pages/faq/model/category_model";

export const useCategories = (tab: string): Category[] => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() =>{
    fetchCategory(tab).then((response) => {
      setCategories([{categoryID: null, name: '전체'}, ...response]);
    });
  }, [tab]);

  return categories;
}