import * as React from 'react'
import { Box, Grid, Heading } from '@chakra-ui/react'

import { AllArticlesProps } from '~/typings/components/all-articles'

import { ArticleCard } from './components/article-card'

export default function AllArticles(props: AllArticlesProps) {
  const { allArticles, handleClick } = props

  return (
    <Box position="relative" py="10">
      <Box
        position="absolute"
        top="0"
        left="-5%"
        w="110%"
        h="full"
        zIndex="-1"
        bgGradient="linear(90deg, transparent, #F7FAFC, #F7FAFC, #F7FAFC, #F7FAFC, #F7FAFC,  #F7FAFC, #F7FAFC, #F7FAFC, #F7FAFC, transparent)"
        _dark={{
          bgGradient:
            'linear(90deg, transparent, #2D3748, #2D3748, #2D3748, #2D3748, #2D3748, #2D3748, #2D3748, #2D3748, #2D3748, transparent)',
        }}
      />
      <Heading as="h3" fontSize={{ base: 'xl', sm: '2xl' }} mb="10" textAlign={{ base: 'center', sm: 'left' }}>
        Todos los artículos
      </Heading>
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }}
        alignItems="start"
        columnGap={{ base: '3', sm: '5' }}
        rowGap={{ base: '5', sm: '7' }}
      >
        {allArticles.map((article, index) => {
          return (
            <React.Fragment key={index}>
              <ArticleCard
                title={article.title}
                urlToImage={article.urlToImage}
                source={article.source}
                publishedAt={article.publishedAt}
                handleClick={() => handleClick(article)}
              />
            </React.Fragment>
          )
        })}
      </Grid>
    </Box>
  )
}
