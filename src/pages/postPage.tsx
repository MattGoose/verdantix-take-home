import { useParams } from "@tanstack/react-router"
import KeyArea from "@components/blog/post/keyArea"
import Notification from "@components/notification"
import { useBlogStore } from '@stores/blogStore'

export default function PostPage() {
    const { post } = useParams({ from: '/posts/$post' })
    const getPost = useBlogStore((store) => store.getPost)

    const postData = getPost(post)

    if (!postData) return <Notification message="Post not found!" />

    return (
        <div className="container py-4">
            <section className="blogNavigation">
                <a href="#intro">1. Introduction</a>
                <a href="#key_areas">2. Key areas</a>
                <a href="#closing">3. Closing</a>
            </section>

            <article className="blogPost">
                <section id="intro">
                    <h2 className="text-decoration-underline">Introduction</h2>
                    {postData.intro.map((intro, i) => (
                        <p className="intro" key={i}>{intro}</p>
                    ))}
                </section>

                <section id="key_areas">
                <h3 className="text-decoration-underline">Key areas</h3>
                    {postData.key_areas.map((key, i) => (
                        <section key={i}>
                            <KeyArea
                                title={key.title}
                                body={key.body}
                            />
                        </section>
                    ))}
                </section>

                <section id="closing">
                    {postData.closing.map((closing, i) => (
                        <p className="closing" key={i}><i>{closing}</i></p>
                    ))}
                </section>

                <p className="cta"><strong>{postData.call_to_action}</strong></p>
            </article>
        </div>
    )
}