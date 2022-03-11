import { QueryClient, QueryClientProvider } from "react-query";

// COMPONENTS:
import Characters from "./containers/Characters/Characters";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App bg-gray-450 min-h-screen">
      <QueryClientProvider client={queryClient}>
        <Characters />
      </QueryClientProvider>
    </div>
  );
}

export default App;
