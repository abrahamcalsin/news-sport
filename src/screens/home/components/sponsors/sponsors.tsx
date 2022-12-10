import * as React from 'react'
import { Box, Flex, Heading, Link } from '@chakra-ui/react'

import { CodealoLogo } from '~/components/svg/codealo'
import { DonwebCloudLogo } from '~/components/svg/donweb-cloud'

export default function Sponsors() {
  return (
    <Box textAlign="center" mt="16">
      <Heading as="h3" fontSize={{ base: 'xl', sm: '2xl' }} mb="10">
        Potrocinadores
      </Heading>
      <Flex justifyContent="center" alignItems="center" gap={{ base: '10', sm: '28' }}>
        <Link
          href="https://www.codealo.dev"
          w="36"
          transition="all .3s"
          _hover={{
            transform: 'scale(1.06) rotate(-2deg)',
          }}
          isExternal
        >
          <CodealoLogo />
        </Link>
        <Link
          href="https://donweb.com"
          w="36"
          transition="all .3s"
          _hover={{
            transform: 'scale(1.06) rotate(-2deg)',
          }}
        >
          <DonwebCloudLogo />
        </Link>
      </Flex>
    </Box>
  )
}
