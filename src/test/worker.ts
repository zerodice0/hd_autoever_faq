import { setupWorker } from "msw/browser";
import { terms } from "../widgets/dialog_policy/api/mockup/terms";
import { category } from "../pages/faq/api/mockup/category";
import { faq } from "../pages/faq/api/mockup/faq";

export const worker = setupWorker(
	...terms,
	...category,
	...faq
);
