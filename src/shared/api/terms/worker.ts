import { setupWorker } from "msw/browser";
import { terms } from "./mock/terms";

export const worker = setupWorker(...terms);
