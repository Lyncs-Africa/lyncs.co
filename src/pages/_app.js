import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "@/hooks/use-auth";
import "../components/ImageBuble/ImageBubble.css"

const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>

  )
}
