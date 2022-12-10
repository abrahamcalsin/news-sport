import * as React from 'react'
import { Text } from '@chakra-ui/react'

interface PlayStatusProps {
  status: string
}

interface LabelStatusProps {
  children: React.ReactNode
  background: string
}

const LabelStatus = (props: LabelStatusProps) => {
  const { children, background } = props

  return (
    <Text
      position="absolute"
      bottom="-2"
      zIndex="1"
      px="2"
      py="0.5"
      bg={background}
      borderRadius="3"
      fontSize={10}
      color="gray.100"
      fontWeight="extrabold"
      letterSpacing={4}
    >
      {children}
    </Text>
  )
}

export function PlayStatus(props: PlayStatusProps) {
  const { status } = props

  switch (status) {
    case 'live': {
      return <LabelStatus background="red.500">EN VIVO</LabelStatus>
    }
    case 'finished': {
      return <LabelStatus background="green.500">FINALIZADO</LabelStatus>
    }
    case 'coming-soon': {
      return <LabelStatus background="blue.500">PROXIMAMENTE</LabelStatus>
    }

    default: {
      console.error(new Error(`The ${status} of the game does not exist`))
    }
  }

  return null
}
