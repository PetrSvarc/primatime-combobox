import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ComboBoxPage from "./pages/ComboBoxPage.tsx";

const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <ComboBoxPage />
    </QueryClientProvider>
  )
}

export default App
