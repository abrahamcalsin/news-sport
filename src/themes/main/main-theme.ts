import { extendTheme } from '@chakra-ui/react'

import config from './options/config'
import fonts from './options/fonts'
import semanticTokens from './options/semantic-tokens'
import styles from './options/styles'

const mainTheme = extendTheme({
  config,
  fonts,
  semanticTokens,
  styles,
})

export default mainTheme
