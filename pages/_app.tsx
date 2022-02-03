import { ChakraProvider } from '@chakra-ui/provider';
import type { AppProps } from 'next/app';
import '@fontsource/open-sans';

import theme from '../src/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  ) 
};

export default MyApp;
