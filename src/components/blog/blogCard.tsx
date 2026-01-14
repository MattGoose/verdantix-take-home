import { Link } from "@tanstack/react-router"
import type BlogPost from "../../types/blogPost"

export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <section className="blogCard">
            <Link
                to="/posts/$post"
                params={{ post: post?.source_file }}
            >
                <section className='blogCardInner'>
                    <header>
                        <h5>Ipsum lorum.</h5>
                    </header>
                    <article className="blogCardText">{post?.intro[0]}</article>
                </section>
            </Link>
        </section>
    )
}