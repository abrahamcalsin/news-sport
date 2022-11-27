import { ThemeComponentProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: ThemeComponentProps) => ({
    'html, body': {
      fontSize: {
        base: 'md',
        lg: 'lg',
      },
    },
    '::selection': {
      backgroundColor: mode('blue.100', 'blue.500')(props),
      color: mode('inherit', 'white')(props),
    },
  }),
}

export default styles
