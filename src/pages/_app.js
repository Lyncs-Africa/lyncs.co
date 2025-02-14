import {MantineProvider} from '@mantine/core';
import '@/styles/globals.css'
import {QueryClient, QueryClientProvider} from "react-query";
import {AuthProvider} from "@/hooks/use-auth";
import '@mantine/core/styles.css';
import Head from "next/head";
import {HeroUIProvider} from "@heroui/system";

const queryClient = new QueryClient();
export default function App({Component, pageProps}) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description"
              content="Discover the ultimate convenience with our all-in-one platform. Book flights, shop online, buy data and airtime, subscribe to laundry and cleaning services, pay for bus tickets, enroll in online courses, book hotels, and pay for events—all from one place. Simplify your life with just a few clicks."/>
        <link rel="icon" type="image/png" href="/images/icon.svg"/>
        <title>Lyncs Africa </title>
      </Head>
      <MantineProvider>
        <HeroUIProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </QueryClientProvider>
        </HeroUIProvider>
      </MantineProvider>
    </>
  )
}
