import type { FaqData, FaqResponse } from "@/pages/faq/model/faq_model";
import type { PageInformation } from "@/pages/faq/model/page_model";

export const fetchFaqs = async (
  limit: number,
  offset: number,
  tab: string,
  faqCategory: string | null,
  question: string | null,
): Promise<FaqResponse> => {
  let queryString = `limit=${limit}&offset=${offset}&tab=${tab}`;
  if (faqCategory) {
    queryString += `&faqCategory=${faqCategory}`;
  }
  if (question) {
    queryString += `&question=${question}`;
  }

  const response = await fetch(`/faq?${queryString}`);
  const json = await response.json();

  const pageInformation: PageInformation = json.pageInfo;
  const faqs: FaqData[] = json.data;

  return {
    pageInformation,
    data: faqs,
  };
}