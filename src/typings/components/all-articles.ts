import { ArticleProps } from './article'

interface AllArticlesProps {
  allArticles: ArticleProps[]
  handleClick: (article: ArticleProps) => void
}

export type { AllArticlesProps }
