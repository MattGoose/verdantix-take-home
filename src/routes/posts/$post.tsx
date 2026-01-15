import { createFileRoute } from '@tanstack/react-router'
import PostPage from '@pages/postPage'

export const Route = createFileRoute('/posts/$post')({
  component: Post,
})

function Post() {
  return (
    <PostPage />
  )
}
