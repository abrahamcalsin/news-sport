import * as React from 'react'
import { Box } from '@chakra-ui/react'
import Link from 'next/link'

import { DarkThemeButton } from '~/components/dark-theme-button'

import { LogoNewsSport } from '../logo'

export default function Header() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      maxW="5xl"
      w="full"
      mx="auto"
      mt={{ base: 0, sm: '8' }}
      px="3"
      py={{ base: '2', sm: '0' }}
      position={{ base: 'fixed', sm: 'initial' }}
      zIndex={{ base: '2', sm: 'auto' }}
      top="0"
      left="0"
      bg={{
        base: 'white',
        sm: '0',
      }}
      borderBottom={{ base: '1px', sm: 'none' }}
      borderColor="gray.200"
      _dark={{
        bg: 'gray.800',
        borderColor: 'gray.700',
      }}
    >
      <Link href="/">
        <Box w="24">
          <LogoNewsSport />
        </Box>
      </Link>
      <DarkThemeButton />
    </Box>
  )
}
