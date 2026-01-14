import { create } from "zustand"
import { persist } from 'zustand/middleware'
import type BlogPost from "../types/blogPost"

interface BlogState {
    posts: BlogPost[]
    setPosts: (posts: BlogPost[]) => void
    getPost: (source_file: string) => BlogPost | undefined
}

export const useBlogStore = create<BlogState>()(
    persist((set, get) => ({
        posts: [],
        
        setPosts: (posts) => set({ posts }),
        
        getPost: (source_file) => get().posts.find((p) => p.source_file === source_file),
    }),
    { name: 'blog-posts-storage' })
)