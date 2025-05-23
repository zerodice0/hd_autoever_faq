import { http, HttpResponse } from 'msw';
import { SERVICE_USAGE_FAQ } from '@/pages/faq/api/mockup/service_usage_faq';
import { SERVICE_CONSULT_FAQ } from '@/pages/faq/api/mockup/service_consult_faq';
import type { FaqData } from '@/pages/faq/model/faq_model';

export const faq = [
  http.get('/faq', ({ request }) => {
    const url = new URL(request.url);
    const limit = url.searchParams.get('limit');
    const offset = url.searchParams.get('offset');
    const tab = url.searchParams.get('tab');
    const question = url.searchParams.get('question');
    const faqCategory = url.searchParams.get('faqCategory');
    
    if (!limit || !offset || !tab) {
      return HttpResponse.json({
        code: '400',
        message: 'Invalid limit, offset, or tab',
      });
    }

    const limitNumber = Number(limit);
    const offsetNumber = Number(offset);
    const prevOffset = offsetNumber - limitNumber > 0 ? offsetNumber - limitNumber : 0;
    
    let faqs: FaqData[] = [];
    if (tab === 'USAGE') {
      faqs = SERVICE_USAGE_FAQ;
    } else if (tab === 'CONSULT') {
      faqs = SERVICE_CONSULT_FAQ;
    }

    let filteredFaqs: FaqData[] = faqs;
    if (question) {
      filteredFaqs = faqs.filter(
        (faq) => faq.question.toLowerCase().includes(question.toLowerCase())
        // html 태그 제거
        || faq.answer.replace(/<[^>]*>?/g, '').toLowerCase().includes(question.toLowerCase())
      );
    }
    if (faqCategory) {
      let subCategory: string[] = [];
      if (faqCategory === 'PRODUCT') {
        subCategory = ['서비스 상품'];
      } else if (faqCategory === 'COUNSELING') {
        subCategory = ['도입 상담'];
      } else if (faqCategory === 'CONTRACT') {
        subCategory = ['계약'];
      } else if (faqCategory === 'SIGN_UP') {
        subCategory = ['가입', '로그인', '회원등급', '면허'];
      } else if (faqCategory === 'BUSINESS') {
        subCategory = ['상품', '프로필', '예약'];
      } else if (faqCategory === 'ACCIDENT') {
        subCategory = ['사고', '보험'];
      } else if (faqCategory === 'RESERVATION') {
        subCategory = ['예약', '결제'];
      } else if (faqCategory === 'VEHICLE') {
        subCategory = ['차량'];
      } else if (faqCategory === 'REFUEL') {
        subCategory = ['충전'];
      } else if (faqCategory === 'COUPON') {
        subCategory = ['쿠폰', '기타'];
      }

      filteredFaqs = filteredFaqs.filter((faq) =>  
        subCategory.includes(faq.subCategoryName)
      );
    }

    const responseFaqs = filteredFaqs.slice(offsetNumber, offsetNumber + limitNumber);
    const nextOffset = (offsetNumber + limitNumber) > SERVICE_USAGE_FAQ.length ? 
        offsetNumber : offsetNumber + limitNumber;

    return HttpResponse.json(
      {
        'pageInfo': {
          'totalRecord': filteredFaqs.length,
          'offset': offsetNumber,
          'limit': limitNumber,
          'prevOffset': prevOffset,
          'nextOffset': nextOffset,
        },
        'data': responseFaqs,
      }
    );
  }),
];