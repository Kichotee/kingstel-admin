import AppRoutes from "./routes";

import "./App.css";
import { AppProvider } from "./provider";
import { Toaster } from "@/components/ui/sonner"

function App() {
  

  return (
    <>
      <div className="font-poppins">
        <Toaster />
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </div>
    </>
  );
}

export default App;
