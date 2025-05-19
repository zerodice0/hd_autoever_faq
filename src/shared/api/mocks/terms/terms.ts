import { http, HttpResponse } from 'msw';
import { ADMIN_PRIVACY } from './responses/admin_privacy';
import { JOIN_SERVICES_USE } from './responses/join_services_use';
export const terms = [
	http.get("/terms", ({ request }) => {
		const url = new URL(request.url);
		const termsClassId = url.searchParams.get('termsClassID');

		if (termsClassId === 'STARTADMIN_ADMIN_PRIVACY') {
			return HttpResponse.json(ADMIN_PRIVACY);
		}

		if (termsClassId === 'STARTADMIN_JOIN_SERVICES_USE') {
			return HttpResponse.json(JOIN_SERVICES_USE);
		}

		if (!termsClassId) {
			return HttpResponse.json({
				code: '400',
				message: 'Invalid terms class ID',
			});
		}
	}),
];
