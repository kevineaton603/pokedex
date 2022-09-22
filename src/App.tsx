import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PokedexView from "./views/PokedexView";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PokedexView />
    </QueryClientProvider>
  );
};

export default App;
