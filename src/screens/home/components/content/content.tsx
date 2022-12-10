import * as React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'

import { ModelArticleContent } from '~/components/model-article-content'
import { MainLayout } from '~/layouts/main'
import { AllArticles } from '~/screens/home/components/all-articles'
import { LastArticle } from '~/screens/home/components/last-article'
import { QatarCalendar } from '~/screens/home/components/qatar-calendar'
import { TvSports } from '~/screens/home/components/tv-sports'
import { AllArticlesProps } from '~/typings/components/all-articles'
import { ArticleProps } from '~/typings/components/article'
import { LastArticleProps } from '~/typings/components/last-article'

import { Sponsors } from '../sponsors'

export function Content(props: LastArticleProps & Pick<AllArticlesProps, 'allArticles'>) {
  const { lastArticle, allArticles } = props

  const [selectedArticle, setSelectedArticle] = React.useState<ArticleProps | null>(null)

  return (
    <MainLayout>
      <Box textAlign="center" mb={{ base: '14', sm: '24' }}>
        <Heading as="h3" fontSize="xl" mb={{ base: '6', sm: '10' }}>
          TV Deportes
        </Heading>
        <Flex justifyContent="space-between" gap="5" alignItems="center">
          <TvSports />
        </Flex>
      </Box>
      <Box
        mb={{ base: '14', sm: '20' }}
        display="flex"
        justifyContent="space-between"
        gap={{ base: '6', sm: '4' }}
        alignItems={{ base: 'center', sm: 'stretch' }}
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <LastArticle lastArticle={lastArticle} onClick={() => setSelectedArticle(lastArticle)} />
        <QatarCalendar />
      </Box>
      <AllArticles allArticles={allArticles} handleClick={article => setSelectedArticle(article)} />
      {selectedArticle && (
        <ModelArticleContent
          isOpen={true}
          onClose={() => setSelectedArticle(null)}
          modalContentTitle={selectedArticle.title}
          modalContentAuthor={selectedArticle.author}
          modalContentDescription={selectedArticle.description}
          modalContentDate={selectedArticle.publishedAt}
          modalContentUrlImage={selectedArticle.urlToImage}
          modalContentUrlArticle={selectedArticle.url}
          modalContentHosted={selectedArticle.source?.name}
        />
      )}
      <Sponsors />
    </MainLayout>
  )
}
