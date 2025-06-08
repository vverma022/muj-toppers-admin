interface BlogPreviewProps {
  title: string
  content: string
  coverImage: string | null
}

export function BlogPreview({ title, content, coverImage }: BlogPreviewProps) {
  return (
    <div className="prose prose-stone dark:prose-invert max-w-none border rounded-md p-6">
      {coverImage && (
        <div className="not-prose mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={coverImage || "/placeholder.svg"}
            alt={title}
            className="w-full rounded-lg object-cover aspect-video"
          />
        </div>
      )}

      <h1>{title}</h1>

      <div dangerouslySetInnerHTML={{ __html: content }} />

      {!content && <div className="text-muted-foreground italic">Your blog preview will appear here...</div>}
    </div>
  )
}
