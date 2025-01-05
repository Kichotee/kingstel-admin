import AppRoutes from "./routes";

import "./App.css";
import { AppProvider } from "./provider";

function App() {
  

  return (
    <>
      <div className="font-poppins">
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </div>
    </>
  );
}

export default App;
