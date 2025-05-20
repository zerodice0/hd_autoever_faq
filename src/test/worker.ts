import { setupWorker } from "msw/browser";
import { terms } from "../shared/terms/api/mockup/terms";

export const worker = setupWorker(...terms);
