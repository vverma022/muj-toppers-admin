"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { BlogPreview } from "@/components/blog-preview"
import { notFound } from "next/navigation"

interface BlogPost {
  id: string
  title: string
  content: string
  coverImage: string | null
  publishedAt: string
}

export default function BlogPage({ params }: { params: { id: string } }) {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from an API
    const posts = JSON.parse(localStorage.getItem("blogPosts") || "[]")
    const post = posts.find((p: BlogPost) => p.id === params.id)

    if (post) {
      setBlogPost(post)
    }

    setLoading(false)
  }, [params.id])

  if (!loading && !blogPost) {
    notFound()
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center items-center h-[50vh]">
          <div className="animate-pulse text-xl">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <Link href="/blogs" className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blogs
        </Link>
      </div>

      {blogPost && (
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{blogPost.title}</h1>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-4 w-4" />
              {new Date(blogPost.publishedAt).toLocaleDateString()}
            </div>
          </div>

          <BlogPreview title={blogPost.title} content={blogPost.content} coverImage={blogPost.coverImage} isFullPost />
        </div>
      )}
    </div>
  )
}
