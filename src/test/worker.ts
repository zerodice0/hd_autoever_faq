import { setupWorker } from "msw/browser";
import { terms } from "../shared/dialog_policy/api/mockup/terms";

export const worker = setupWorker(...terms);
