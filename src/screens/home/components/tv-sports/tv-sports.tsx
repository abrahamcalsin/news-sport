import * as React from 'react'
import { Box, Flex, Img, Link, Skeleton } from '@chakra-ui/react'
import useSWR from 'swr'

import { useFetch } from '~/hooks/use-fetch'
import { MainLayout } from '~/layouts/main'
import { TvSportsProps } from '~/typings/components/tv-sports'

export default function TvSports() {
  const { data, error } = useSWR(`${process.env.API_ROUTE_URL}/tv-sports`, useFetch)

  if (error) return <MainLayout>failed to load</MainLayout>

  if (!data)
    return (
      <Flex justifyContent="space-between" w="full" gap="24">
        <Box maxW="full" w="20" h="14" borderRadius="lg" overflow="hidden">
          <Skeleton w="full" h="full" />
        </Box>
        <Box maxW="full" w="20" h="14" borderRadius="lg" overflow="hidden">
          <Skeleton w="full" h="full" />
        </Box>
        <Box maxW="full" w="20" h="14" borderRadius="lg" overflow="hidden">
          <Skeleton w="full" h="full" />
        </Box>
        <Box maxW="full" w="20" h="14" borderRadius="lg" overflow="hidden">
          <Skeleton w="full" h="full" />
        </Box>
        <Box maxW="full" w="20" h="14" borderRadius="lg" overflow="hidden">
          <Skeleton w="full" h="full" />
        </Box>
        <Box maxW="full" w="20" h="14" borderRadius="lg" overflow="hidden">
          <Skeleton w="full" h="full" />
        </Box>
      </Flex>
    )

  return (
    <>
      {data.results.map((item: TvSportsProps) => {
        return (
          <Link key={item.id} href={item.properties.Url.url} w="14" isExternal>
            <Img
              src={item.properties.TvCover.files[0].file.url}
              alt={item.properties.Name.title[0].plain_text}
              title={item.properties.Name.title[0].plain_text}
              w="full"
              maxW="full"
              h="14"
              objectFit="contain"
              transition=".3s"
              opacity="0.4"
              filter="grayscale(1) brightness(0.8)"
              _hover={{
                opacity: '1',
                filter: 'grayscale(0)',
              }}
              _dark={{
                opacity: '0.5',
                filter: 'grayscale(1) brightness(2.3)',

                _hover: {
                  opacity: '1',
                  filter: 'grayscale(0)',
                },
              }}
            />
          </Link>
        )
      })}
    </>
  )
}
