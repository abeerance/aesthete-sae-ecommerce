import WebappHead from "@/components/common/head/head";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navigation/navbar";
import "@/styles/globals.css";
import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import "@fontsource/inter";
import "@fontsource/montserrat";
import type { AppProps } from "next/app";

const theme = extendTheme({
  fonts: { heading: `'Inter', sans-serif`, body: `'Montserrat', sans-serif'` },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WebappHead />
      <Flex minHeight='100vh' flexDirection='column'>
        <Navbar />
        <Flex
          flex='1'
          width='100%'
          maxWidth='1380px'
          padding='70px 24px !important'
          margin='0 auto'
        >
          <Component {...pageProps} />
        </Flex>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}
