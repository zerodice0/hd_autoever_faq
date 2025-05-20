import { SERVICE_USAGE_CATEGORY } from "@/pages/faq/api/mockup/service_usage_category";
import { SERVICE_CONSULT_CATEGORY } from "@/pages/faq/api/mockup/service_consult_category";
import { http, HttpResponse } from 'msw';

export const category = [
  http.get("/category", ({request}) => {
    const url = new URL(request.url);
    const categoryId = url.searchParams.get('tab');

    if (categoryId === 'USAGE') {
      return HttpResponse.json(SERVICE_USAGE_CATEGORY);
    }

    if (categoryId === 'CONSULT') {
      return HttpResponse.json(SERVICE_CONSULT_CATEGORY);
    }

    if (!categoryId) {
      return HttpResponse.json({
        code: '400',
        message: 'Invalid category ID',
      });
    }
  })
];