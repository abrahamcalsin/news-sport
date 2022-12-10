import * as React from 'react'
import { Box, Text } from '@chakra-ui/react'

import { PlayStatus } from '../game-status/game-status'

interface TeamMatchProps {
  name: string
  playStatus: string
  backgroundStatus: string
}

export default function TeamMatch(props: TeamMatchProps) {
  const { name, playStatus, backgroundStatus } = props

  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      borderRadius="5"
      bg={backgroundStatus}
      color="gray.600"
      mb="4"
      _last={{
        mb: '0',
      }}
      py="2"
    >
      <Text fontSize="xs" mb="1">
        {name}
      </Text>
      <PlayStatus status={playStatus} />
    </Box>
  )
}
