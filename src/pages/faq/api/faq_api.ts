import type { Faq } from "../model/faq_model";

export const fetchFaq = async (): Promise<Faq[]> => {
  const response = await fetch('/faq');
  const data = await response.json();

  return data.map((faq: Faq) => faq);
}