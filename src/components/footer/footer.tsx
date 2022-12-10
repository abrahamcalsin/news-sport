import * as React from 'react'
import { Box, Link } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      mt="16"
      p="8"
      bg="gray.50"
      _dark={{
        bg: 'gray.700',
      }}
      fontSize="sm"
      textAlign="center"
    >
      This project was created with ❤ by{' '}
      <Link href="https://www.abrahamcalsin.com" fontWeight="bold" isExternal>
        Abraham Calsin
      </Link>
    </Box>
  )
}
