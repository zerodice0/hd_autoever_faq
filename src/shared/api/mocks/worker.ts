import { setupWorker } from "msw/browser";
import { terms } from "./terms/terms";

export const worker = setupWorker(...terms);
