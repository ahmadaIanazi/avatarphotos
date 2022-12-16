import Header from "@/components/layout/Header";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "@/components/layout/Footer";
import { Inter } from "@next/font/google";
import theme from "@/styles/theme";
import { Analytics } from "@vercel/analytics/react";
import DefaultHead from "@/components/layout/DefaultHead";

import "react-medium-image-zoom/dist/styles.css";
import '@fontsource/noto-sans-arabic';

const queryClient = new QueryClient();
const inter = Inter({ subsets: ["latin"] });

function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <ChakraProvider theme={theme}>
      <div dir="rtl">
        <SessionProvider session={session}>
          <QueryClientProvider client={queryClient}>
            <DefaultHead />
            <Flex
              fontFamily="Noto Sans Arabic"
              className={inter.className}
              flexDirection="column"
              minH="100vh"
            >
              <Header />
              <Component {...pageProps} />
              <Footer />
              <Analytics />
            </Flex>
          </QueryClientProvider>
        </SessionProvider>
      </div>
    </ChakraProvider>
  );
}

export default App;
