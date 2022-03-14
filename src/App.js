import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

// COMPONENTS:
import Routes from "./containers/Routes";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App bg-gray-450 min-h-screen">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Routes />
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
