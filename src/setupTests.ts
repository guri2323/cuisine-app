import "@testing-library/jest-dom";
import { vi } from "vitest";

// jsdom doesn't implement scrollTo; provide a no-op for scroll restoration tests
// eslint-disable-next-line @typescript-eslint/no-empty-function
globalThis.scrollTo = vi.fn(() => {});
