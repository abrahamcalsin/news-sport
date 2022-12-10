import * as React from 'react'

import { AllArticlesProps } from '~/typings/components/all-articles'
import { LastArticleProps } from '~/typings/components/last-article'

import { Content } from './components/content'

export default function HomeScreen(props: LastArticleProps & Pick<AllArticlesProps, 'allArticles'>) {
  const { lastArticle, allArticles } = props

  return <Content lastArticle={lastArticle} allArticles={allArticles} />
}
