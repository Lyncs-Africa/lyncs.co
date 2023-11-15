import { MantineProvider, createTheme } from '@mantine/core';
import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "@/hooks/use-auth";
import '@mantine/core/styles.css';

const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {

  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </QueryClientProvider>
    </MantineProvider>
  )
}
