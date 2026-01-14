import { useEffect, useState } from "react"
import BlogCard from "../components/blog/blogCard"
import Notification from "../components/notification"
import Spinner from "../components/spinner"
import { useBlogStore } from '../stores/blogStore'
import type BlogPost from "../types/blogPost"

export default function BlogPage() {
  const setPosts = useBlogStore((store) => store.setPosts)
  const posts = useBlogStore((store) => store.posts)

  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch('/data/blog_parsed.json')
        const json: BlogPost = await response.json()
        setPosts([json])
      } catch (error) {
        setErrorMessage("Could not read JSON file - sorry!")
      } finally {
        setLoading(false)
      }
    }

    fetchBlogData()
  }, [setPosts])

  if (loading) return <Spinner />
  if (errorMessage) return <Notification message={errorMessage} />

  if (posts) return (
    <div className="container">
      <div className="row">
        {posts.map((post) => (
          <div key={post?.source_file} className="col-12 col-lg-4 mb-3">
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </div>
  )
}