import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { mainTheme } from '~/themes/main'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={mainTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
