import * as React from 'react'
import { Badge, Box, Heading, Img, Text } from '@chakra-ui/react'

import { DateFormat } from '~/components/date-format'
import { LastArticleProps } from '~/typings/components/last-article'
import { dateFormat } from '~/utils'

export default function LastArticle(props: LastArticleProps) {
  const { lastArticle, onClick } = props

  return (
    <Box
      w="full"
      h="full"
      position="relative"
      overflow="hidden"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius={{ base: 'lg', sm: 'xl' }}
      _before={{
        content: `""`,
        position: 'absolute',
        width: 'full',
        height: '60%',
        left: '-4',
        bottom: '-6',
        bg: 'gray.900',
        filter: 'blur(2.2rem)',
        opacity: '0.8',
      }}
      transition="all .3s"
      _hover={{
        transform: 'scale(1.01)',
      }}
      _dark={{
        borderColor: 'gray.600',
      }}
      role="group"
      cursor="pointer"
      onClick={onClick}
    >
      <Badge
        position="absolute"
        m={{ base: '3', sm: '5' }}
        px="1.5"
        bg="blue.500"
        color="gray.100"
        letterSpacing="widest"
      >
        ULTIMA HORA
      </Badge>
      <Box position="absolute" m={{ base: '4', sm: '10' }} bottom="0">
        <Text display="flex" gap="2" color="gray.400" fontSize={{ base: 'xs', sm: 'sm' }} fontWeight="semibold">
          <Text as="span" color="blue.300">
            {lastArticle.source?.name}
          </Text>
          <Text as="span">•</Text>
          <DateFormat date={lastArticle?.publishedAt} dateFormat={dateFormat.ES} locale="es" />
        </Text>
        <Heading
          mt={{ base: '1', sm: '2' }}
          color="gray.100"
          fontSize={{ base: 'lg', sm: '2xl' }}
          lineHeight={{ base: 1.5, sm: 1.6 }}
          noOfLines={{ base: 2, sm: 3 }}
          _groupHover={{
            textDecor: 'underline',
          }}
        >
          {lastArticle?.title}
        </Heading>
      </Box>
      <Img src={lastArticle?.urlToImage} maxW="full" w="full" h={{ base: '52', sm: '96' }} objectFit="cover" />
    </Box>
  )
}
