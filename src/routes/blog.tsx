import { createFileRoute } from '@tanstack/react-router'
import BlogPage from '../pages/blogPage.tsx'

export const Route = createFileRoute('/blog')({
  component: Blog,
})

function Blog() {
  return (
    <BlogPage />
  )
}