import { extendTheme } from '@chakra-ui/react'

import config from './options/config'
import semanticTokens from './options/semantic-tokens'
import styles from './options/styles'

const mainTheme = extendTheme({
  config,
  semanticTokens,
  styles,
})

export default mainTheme
