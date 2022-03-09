// styles
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

// components
import Characters from "./components/Characters/Characters";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App bg-gray-450">
      <QueryClientProvider client={queryClient}>
        <Characters />
      </QueryClientProvider>
    </div>
  );
}

export default App;
