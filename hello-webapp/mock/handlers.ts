import type { RequestHandler } from "msw";

// The app calls no API, so there is nothing to handle. Any /api call a later
// change adds is answered 501 by mock/browser.ts until a handler lands here.
export const handlers: RequestHandler[] = [];
