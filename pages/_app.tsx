import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import chakraTheme from '../styles/chakraTheme';
import { useState } from 'react';
import { MainContext } from '../utils/context';
import Head from 'next/head';

const emotionCache = createCache({
  key: 'emotion-css-cache',
  prepend: true, // ensures styles are prepended to the <head>, instead of appended
});
export default function App({ Component, pageProps }: AppProps) {
  const [showLoader, setShowLoader] = useState(false);
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={chakraTheme}>
        <MainContext.Provider value={{ showLoader, setShowLoader }}>
          <Head>
            <title>NS | Frontend Engineer</title>
            <link rel="icon" href="/assets/logo.png" />
            <meta
              name="description"
              content="Naman Samra, Frontend Engineer Portfolio"
              key="desc"
            />
            <meta property="og:title" content="Naman Samra Portfolio" />
            <meta
              property="og:description"
              content="Naman Samra, Frontend Engineer Portfolio"
            />
          </Head>
          <Component {...pageProps} />
        </MainContext.Provider>
      </ChakraProvider>
    </CacheProvider>
  );
}
