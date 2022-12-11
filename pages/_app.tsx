import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import chakraTheme from '../styles/chakraTheme';

const emotionCache = createCache({
  key: 'emotion-css-cache',
  prepend: true, // ensures styles are prepended to the <head>, instead of appended
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={chakraTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  );
}
