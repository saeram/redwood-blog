import { Metadata } from '@redwoodjs/web'
import ArticleCell from 'src/components/ArticlesCell'

interface Props {
  id: number
}
const ArticlePage = ({ id }: Props) => {
  return (
    <>
      <Metadata title="Article" description="Article page" />

      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
