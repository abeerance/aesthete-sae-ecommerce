import WebappHead from "@/components/common/head/head";
import Navbar from "@/components/navigation/navbar";
import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
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
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
