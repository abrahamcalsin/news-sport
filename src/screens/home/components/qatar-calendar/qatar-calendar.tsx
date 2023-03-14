import * as React from 'react'
import { Box, Heading, Skeleton, Text } from '@chakra-ui/react'
import useSWR from 'swr'

import { DateFormat } from '~/components/date-format'
import { useFetch } from '~/hooks/use-fetch'
import { MainLayout } from '~/layouts/main'
import { filterData } from '~/lib/filter-data'
import { dateFormat } from '~/utils'

import { SoccerMatches } from './components/soccer-matches'
import { TeamMatch } from './components/team-match'

export default function QatarCalendar() {
  const { data, error } = useSWR(`${process.env.API_ROUTE_URL}/qatar-calendar`, useFetch)

  if (error) return <MainLayout>failed to load</MainLayout>

  if (!data)
    return (
      <Box maxW="300" w="full" borderRadius="lg" overflow="hidden">
        <Skeleton w="full" h="full" />
      </Box>
    )

  const gamesByStatus = {
    live: filterData(data.results, item => item.properties.Status.select?.name === 'live'),
    finished: filterData(data.results, item => item.properties.Status.select?.name === 'finished'),
    'coming-soon': filterData(data.results, item => item.properties.Status.select?.name === 'coming-soon'),
  }

  const status = gamesByStatus.live.length ? 'live' : gamesByStatus['coming-soon'].length ? 'coming-soon' : 'finished'
  const game = gamesByStatus[status][0]

  console.log(game)

  return (
    <Box
      maxW="300"
      w="full"
      p="5"
      bg="gray.50"
      borderRadius="lg"
      borderWidth="1px"
      borderColor="gray.100"
      textAlign="center"
      color="gray.600"
      _dark={{
        color: 'inherit',
        bg: 'gray.700',
        borderColor: 'gray.600',
      }}
    >
      <Heading
        as="h3"
        fontSize="md"
        _dark={{
          color: 'gray.300',
        }}
      >
        Qatar 2022 - Calendario
      </Heading>
      <Box
        as="hr"
        bg="gray.100"
        h={0.2}
        mb="3"
        mt="4"
        _dark={{
          bg: 'gray.600',
        }}
      />
      <Text fontWeight="medium" fontSize="sm" mb="3">
        {gamesByStatus.live.length ? (
          <DateFormat
            date={gamesByStatus.live[0].properties.FullDate.date.start}
            dateFormat={dateFormat.ES}
            locale="es"
          />
        ) : null}
        {!gamesByStatus.live.length ? (
          <DateFormat
            date={gamesByStatus['coming-soon'][gamesByStatus['coming-soon'].length - 1].properties.FullDate.date.start}
            dateFormat="DD MMMM, YYYY"
            locale="es"
          />
        ) : null}
        {!gamesByStatus.live.length && !gamesByStatus['coming-soon'].length ? (
          <DateFormat
            date={gamesByStatus.finished[gamesByStatus.finished.length - 1].properties.FullDate.date.start}
            dateFormat={dateFormat.ES}
            locale="es"
          />
        ) : null}
      </Text>
      <>
        <SoccerMatches
          conditions={gamesByStatus.live.length}
          data={gamesByStatus.live.slice(0, 2)}
          renderResultItem={item => (
            <TeamMatch
              key={item.id}
              name={item.properties.Name.title[0].plain_text}
              playStatus={item.properties.Status.select.name}
              backgroundStatus="red.100"
            />
          )}
        />
        <SoccerMatches
          conditions={!gamesByStatus.live.length}
          data={gamesByStatus['coming-soon'].slice(-2)}
          renderResultItem={item => (
            <TeamMatch
              key={item.id}
              name={item.properties.Name.title[0].plain_text}
              playStatus={item.properties.Status.select.name}
              backgroundStatus="blue.100"
            />
          )}
        />
        <SoccerMatches
          conditions={!gamesByStatus.live.length && !gamesByStatus['coming-soon'].length}
          data={gamesByStatus.finished.slice(0, 2)}
          renderResultItem={item => (
            <TeamMatch
              key={item.id}
              name={item.properties.Name.title[0].plain_text}
              playStatus={item.properties.Status.select.name}
              backgroundStatus="green.100"
            />
          )}
        />
        <Box
          as="hr"
          bg="gray.100"
          h={0.2}
          mb="3"
          mt="5"
          _dark={{
            bg: 'gray.600',
          }}
        />
        <Text fontWeight="medium" fontSize="sm" mb="3">
          {!gamesByStatus.live.length || !gamesByStatus['coming-soon'].length ? (
            <DateFormat
              date={gamesByStatus.finished[0].properties.FullDate.date.start}
              dateFormat="MMMM, YYYY"
              locale="es"
            />
          ) : null}
          {gamesByStatus.live.length ? (
            <DateFormat
              date={
                gamesByStatus['coming-soon'][gamesByStatus['coming-soon'].length - 1].properties.FullDate.date.start
              }
              dateFormat={dateFormat.ES}
              locale="es"
            />
          ) : null}
        </Text>
        <SoccerMatches
          conditions={!gamesByStatus.live.length || !gamesByStatus['coming-soon'].length}
          data={gamesByStatus.finished.slice(0, 2)}
          renderResultItem={item => (
            <TeamMatch
              key={item.id}
              name={item.properties.Name.title[0].plain_text}
              playStatus={item.properties.Status.select.name}
              backgroundStatus="green.100"
            />
          )}
        />
        <SoccerMatches
          conditions={gamesByStatus.live.length}
          data={gamesByStatus['coming-soon'].slice(-1)}
          renderResultItem={item => (
            <TeamMatch
              key={item.id}
              name={item.properties.Name.title[0].plain_text}
              playStatus={item.properties.Status.select.name}
              backgroundStatus="blue.100"
            />
          )}
        />
      </>
    </Box>
  )
}
