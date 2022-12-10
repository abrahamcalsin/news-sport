import * as React from 'react'
import { Box } from '@chakra-ui/react'

import { Footer } from '~/components/footer'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout(props: MainLayoutProps) {
  const { children } = props

  return (
    <Box maxW="5xl" mx="auto" mt="28" px="3">
      {children}
      <Footer />
    </Box>
  )
}
