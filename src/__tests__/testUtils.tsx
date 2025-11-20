import { ReactNode } from "react";
import { MemoryRouter, MemoryRouterProps } from "react-router-dom";

interface TestRouterProps {
  initialEntries?: MemoryRouterProps["initialEntries"];
  children: ReactNode;
}

export function TestRouter({ initialEntries = ["/"], children }: TestRouterProps) {
  return (
    <MemoryRouter
      initialEntries={initialEntries}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      {children}
    </MemoryRouter>
  );
}
