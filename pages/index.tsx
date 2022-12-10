import { Box, Spinner } from '@chakra-ui/react'

import { MainLayout } from '~/layouts/main'
import HomeScreen from '~/screens/home/home'
import { DEFAULT_HEADERS } from '~/services'
import { ArticleProps } from '~/typings/components/article'

interface HomeProps {
  news: { articles: ArticleProps[] }
}

export default function Home(props: HomeProps) {
  const { news } = props

  if (!news)
    return (
      <MainLayout>
        <Box display="flex" justifyContent="center">
          <Spinner textAlign="center" />
        </Box>
      </MainLayout>
    )

  return <HomeScreen lastArticle={news.articles[0]} allArticles={news.articles} />
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_ROUTE_URL}/news`, {
    headers: DEFAULT_HEADERS,
  })
  const data = await response.json()

  return {
    props: {
      news: data,
    },
  }
}
