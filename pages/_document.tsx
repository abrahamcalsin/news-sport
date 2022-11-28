import { ColorModeScript } from '@chakra-ui/react'
import { Head, Html, Main, NextScript } from 'next/document'

import { mainTheme } from '~/themes/main'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <ColorModeScript initialColorMode={mainTheme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
