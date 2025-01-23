import { Provider } from "@/components/ui/provider";
import { Toaster } from "@/components/ui/toaster";
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
      <Toaster/>
      <QueryClientProvider client={queryClient}>
        <Router>{children}</Router>
      </QueryClientProvider>
    </Provider>
  );
};
