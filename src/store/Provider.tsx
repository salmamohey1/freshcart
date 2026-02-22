"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

// ReduxProvider wraps the app with both Redux and React Query providers
export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize React Query client
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </Provider>
  );
}
