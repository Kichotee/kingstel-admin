import { Provider } from "@/components/ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";

type Props = {
  children: ReactNode;
};
export const AppProvider = ({ children }: Props) => {
  const queryClient = new QueryClient();
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <Router>{children}</Router>
      </QueryClientProvider>
    </Provider>
  );
};
