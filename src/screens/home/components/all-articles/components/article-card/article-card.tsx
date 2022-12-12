import * as React from 'react'
import { Box, Heading, Img, Text } from '@chakra-ui/react'

import { DateFormat } from '~/components/date-format'
import { ArticleProps } from '~/typings/components/article'
import { dateFormat } from '~/utils'

interface ArticleCardProps {
  title: ArticleProps['title']
  urlToImage: ArticleProps['urlToImage']
  source: ArticleProps['source']
  publishedAt: ArticleProps['publishedAt']
  handleClick: () => void
}

export default function ArticleCard(props: ArticleCardProps) {
  const { title, urlToImage, source, publishedAt, handleClick } = props

  return (
    <Box
      cursor="pointer"
      transition="all .3s"
      _hover={{
        transform: 'scale(1.03)',
      }}
      onClick={handleClick}
    >
      <Box w="full" h="auto" position="relative" overflow="hidden" borderRadius="md">
        <Img
          src={
            !urlToImage
              ? 'https://res.cloudinary.com/abrahamcalsin/image/upload/v1670644437/News%20Sport/Img/image-not-found.svg'
              : urlToImage
          }
          maxW="full"
          w="full"
          h={{ base: '24', sm: '32' }}
          objectFit="cover"
        />
      </Box>
      <Heading as="h4" mt="3.5" fontSize="sm" lineHeight="1.5" noOfLines={{ base: 2, sm: 3 }}>
        {title}
      </Heading>
      <Text display="inline-flex" flexWrap="wrap" gap="1.5" color="gray.400" fontSize="xs" fontWeight="semibold">
        <Text as="span" color="blue.500">
          {source?.name}
        </Text>
        <Text as="span">•</Text>
        <DateFormat date={publishedAt} dateFormat={dateFormat.ES} locale="es" />
      </Text>
    </Box>
  )
}
