import { ChakraProvider } from '@chakra-ui/provider';
import type { AppProps } from 'next/app';
import '@fontsource/open-sans';

import theme from '../src/theme';
import { AuthProvider } from '../src/context/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChakraProvider resetCSS={true} theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  ) 
};

export default MyApp;
