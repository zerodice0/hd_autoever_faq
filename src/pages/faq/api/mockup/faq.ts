import { http, HttpResponse } from 'msw';
import { SERVICE_USAGE_FAQ } from '@/pages/faq/api/mockup/service_usage_faq';
import { SERVICE_CONSULT_FAQ } from '@/pages/faq/api/mockup/service_consult_faq';

export const faq = [
  http.get("/faq", ({ request }) => {
    const url = new URL(request.url);
    const limit = url.searchParams.get('limit');
    const offset = url.searchParams.get('offset');
    const tab = url.searchParams.get('tab');
    
    if (!limit || !offset || !tab) {
      return HttpResponse.json({
        code: '400',
        message: 'Invalid limit, offset, or tab',
      });
    }

    const limitNumber = Number(limit);
    const offsetNumber = Number(offset);
    const prevOffset = offsetNumber - limitNumber > 0 ? offsetNumber - limitNumber : 0;
    
    if (tab === 'USAGE') {
      const faq = SERVICE_USAGE_FAQ.slice(offsetNumber, offsetNumber + limitNumber);
      const nextOffset = (offsetNumber + limitNumber) > SERVICE_USAGE_FAQ.length ? 
        offsetNumber : offsetNumber + limitNumber;

      return HttpResponse.json(
        {
          "pageInfo": {
            "totalRecord": SERVICE_CONSULT_FAQ.length,
            "offset": offsetNumber,
            "limit": limitNumber,
            "prevOffset": prevOffset,
            "nextOffset": nextOffset,
          },
          "data": faq,
        }
      );
    }

    if (tab === 'CONSULT') {
      const faq = SERVICE_CONSULT_FAQ.slice(offsetNumber, offsetNumber + limitNumber);
      const nextOffset = (offsetNumber + limitNumber) > SERVICE_CONSULT_FAQ.length ? 
        offsetNumber : offsetNumber + limitNumber;

      return HttpResponse.json(
        {
          "pageInfo": {
            "totalRecord": SERVICE_CONSULT_FAQ.length,
            "offset": offsetNumber,
            "limit": limitNumber,
            "prevOffset": prevOffset,
            "nextOffset": nextOffset,
          },
          "data": faq,
        }
      );
    }
  }),
];