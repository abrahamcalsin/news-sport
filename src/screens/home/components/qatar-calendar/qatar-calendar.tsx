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

  const liveGame = filterData(data.results, item => item.properties.Status.select?.name === 'live')
  const finishedGame = filterData(data.results, item => item.properties.Status.select?.name === 'finished')
  const comingSoonGame = filterData(data.results, item => item.properties.Status.select?.name === 'coming-soon')

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
        {liveGame.length ? (
          <DateFormat date={liveGame[0].properties.FullDate.date.start} dateFormat={dateFormat.ES} locale="es" />
        ) : null}
        {!liveGame.length ? (
          <DateFormat
            date={comingSoonGame[comingSoonGame.length - 1].properties.FullDate.date.start}
            dateFormat="DD MMMM, YYYY"
            locale="es"
          />
        ) : null}
        {!liveGame.length && !comingSoonGame.length ? (
          <DateFormat
            date={finishedGame[finishedGame.length - 1].properties.FullDate.date.start}
            dateFormat={dateFormat.ES}
            locale="es"
          />
        ) : null}
      </Text>
      <>
        <SoccerMatches
          conditions={liveGame.length}
          data={liveGame.slice(0, 2)}
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
          conditions={!liveGame.length}
          data={comingSoonGame.slice(-2)}
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
          conditions={!liveGame.length && !comingSoonGame.length}
          data={finishedGame.slice(0, 2)}
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
          {!liveGame.length || !comingSoonGame.length ? (
            <DateFormat date={finishedGame[0].properties.FullDate.date.start} dateFormat="MMMM, YYYY" locale="es" />
          ) : null}
          {liveGame.length ? (
            <DateFormat
              date={comingSoonGame[comingSoonGame.length - 1].properties.FullDate.date.start}
              dateFormat={dateFormat.ES}
              locale="es"
            />
          ) : null}
        </Text>
        <SoccerMatches
          conditions={!liveGame.length || !comingSoonGame.length}
          data={finishedGame.slice(0, 2)}
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
          conditions={liveGame.length}
          data={comingSoonGame.slice(-1)}
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
