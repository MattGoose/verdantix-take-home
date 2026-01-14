import { useParams } from "@tanstack/react-router"
import KeyArea from "../components/blog/post/keyArea"
import Notification from "../components/notification"
import { useBlogStore } from '../stores/blogStore'

export default function PostPage() {
    const { post } = useParams({ from: '/posts/$post' })
    const getPost = useBlogStore((store) => store.getPost)

    const postData = getPost(post)

    if (!postData) return <Notification message="Post not found!" />

    return (
        <div className="container py-4">
            <article className="blogPost">
                {postData.intro.map((intro, i) => (
                    <p className="intro" key={i}>{intro}</p>
                ))}

                {postData.key_areas.map((key, i) => (
                    <section key={i}>
                        <KeyArea
                            title={key.title}
                            body={key.body}
                        />
                    </section>
                ))}

                {postData.closing.map((closing, i) => (
                    <p className="intro" key={i}>{closing}</p>
                ))}

                <p className="cta"><strong>{postData.call_to_action}</strong></p>
            </article>
        </div>
    )
}