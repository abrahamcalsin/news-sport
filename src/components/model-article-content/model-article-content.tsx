import * as React from 'react'
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  Img,
  Link,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'

import { DateFormat } from '~/components/date-format'
import { ModelArticleContentProps } from '~/typings/components/model-article-content'
import { dateFormat } from '~/utils'

export default function ModelArticleContent(props: ModelArticleContentProps) {
  const {
    isOpen,
    onClose,
    modalContentTitle,
    modalContentAuthor,
    modalContentDescription,
    modalContentDate,
    modalContentUrlImage,
    modalContentUrlArticle,
    modalContentHosted,
  } = props

  return (
    <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent
        maxH="2xl"
        overflow="auto"
        m="3"
        p="6"
        maxW="3xl"
        bg="gray.100"
        _dark={{
          bg: 'gray.700',
        }}
      >
        <ModalHeader p="0" mr="6">
          <Link href={modalContentUrlArticle} isExternal>
            <Heading
              as="h3"
              fontSize="xl"
              lineHeight="1.6"
              color="gray.700"
              _dark={{
                color: 'gray.100',
              }}
            >
              {modalContentTitle}
              <Text as="span">
                <Icon ml="2" as={FiExternalLink} />
              </Text>
            </Heading>
          </Link>
          <Box
            mt="3"
            display="flex"
            alignItems="center"
            gap="2"
            color="gray.500"
            fontSize="sm"
            fontWeight="semibold"
            _dark={{
              color: 'gray.400',
            }}
          >
            <Avatar size="sm" />
            <Flex direction="column">
              <Text
                as="span"
                color="blue.500"
                _dark={{
                  color: 'blue.300',
                }}
              >
                {!modalContentAuthor ? 'Unknown' : modalContentAuthor}
              </Text>
              <Text fontWeight="normal">
                <Text as="span" fontWeight="semibold">
                  Publicado:
                </Text>{' '}
                <DateFormat date={modalContentDate} dateFormat={dateFormat.ES} locale="es" />
              </Text>
            </Flex>
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <Box
          as="hr"
          bg="gray.100"
          h={0.2}
          my="4"
          _dark={{
            bg: 'gray.600',
          }}
        />
        <Text mb="5">{modalContentDescription}</Text>
        <Box
          w="full"
          h="auto"
          position="relative"
          overflow="hidden"
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="xl"
          _dark={{
            borderColor: 'gray.600',
          }}
        >
          <Text
            as="span"
            position="absolute"
            top="3"
            left="3"
            px="2"
            py="0.5"
            bg="blue.500"
            borderRadius="sm"
            color="gray.100"
            fontSize="sm"
            fontWeight="semibold"
          >
            {modalContentHosted}
          </Text>
          <Img
            src={
              !modalContentUrlImage
                ? 'https://res.cloudinary.com/abrahamcalsin/image/upload/v1670644437/News%20Sport/Img/image-not-found.svg'
                : modalContentUrlImage
            }
            maxW="full"
            w="full"
            h={{ base: '52', sm: '96' }}
            objectFit="cover"
          />
        </Box>
      </ModalContent>
    </Modal>
  )
}
