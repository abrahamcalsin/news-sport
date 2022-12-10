import '../styles/globals.css'

import type { AppProps } from 'next/app'
import '@fontsource/poppins'
import { ChakraProvider } from '@chakra-ui/react'

import { Header } from '~/components/header'
import { mainTheme } from '~/themes/main'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={mainTheme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
