"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Bold, Italic, Heading1, List, ImageIcon, Quote, Eye, Pencil } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface SimpleEditorProps {
  content: string
  setContent: (content: string) => void
}

export function SimpleEditor({ content, setContent }: SimpleEditorProps) {
  const [imageUrl, setImageUrl] = useState("")
  const [textareaRef, setTextareaRef] = useState<HTMLTextAreaElement | null>(null)
  const [isPreview, setIsPreview] = useState(false)

  const insertAtCursor = (before: string, after = "") => {
    if (textareaRef) {
      const start = textareaRef.selectionStart
      const end = textareaRef.selectionEnd
      const selectedText = content.substring(start, end)
      const newContent = content.substring(0, start) + before + selectedText + after + content.substring(end)

      setContent(newContent)

      // Set cursor position after insertion
      setTimeout(() => {
        textareaRef.focus()
        textareaRef.setSelectionRange(start + before.length, start + before.length + selectedText.length)
      }, 0)
    }
  }

  const insertImage = () => {
    if (imageUrl) {
      insertAtCursor(`<img src="${imageUrl}" alt="Blog image" class="w-full rounded-lg my-4" />`)
      setImageUrl("")
    }
  }

  const formatters = [
    {
      icon: <Bold className="h-4 w-4" />,
      action: () => insertAtCursor("<strong>", "</strong>"),
      label: "Bold",
    },
    {
      icon: <Italic className="h-4 w-4" />,
      action: () => insertAtCursor("<em>", "</em>"),
      label: "Italic",
    },
    {
      icon: <Heading1 className="h-4 w-4" />,
      action: () => insertAtCursor("<h1>", "</h1>"),
      label: "Heading",
    },
    {
      icon: <List className="h-4 w-4" />,
      action: () => insertAtCursor("<ul>\n  <li>", "</li>\n</ul>"),
      label: "List",
    },
    {
      icon: <Quote className="h-4 w-4" />,
      action: () => insertAtCursor("<blockquote>", "</blockquote>"),
      label: "Quote",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 p-2 bg-muted rounded-md">
        {!isPreview && (
          <>
            {formatters.map((formatter, index) => (
              <Button key={index} variant="ghost" size="sm" onClick={formatter.action} title={formatter.label}>
                {formatter.icon}
              </Button>
            ))}

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" title="Insert Image">
                  <ImageIcon className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Insert Image</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="image-url">Image URL</Label>
                    <Input
                      id="image-url"
                      placeholder="https://example.com/image.jpg"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                    />
                  </div>
                  <Button onClick={insertImage} className="w-full">
                    Insert Image
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </>
        )}

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsPreview(!isPreview)}
          title={isPreview ? "Edit" : "Preview"}
          className="ml-auto"
        >
          {isPreview ? <Pencil className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </Button>
      </div>

      {isPreview ? (
        <div 
          className="min-h-[400px] text-lg leading-relaxed p-4 border rounded-md prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <Textarea
          ref={setTextareaRef}
          placeholder="Tell your story..."
          className="min-h-[400px] text-lg leading-relaxed focus-visible:ring-0 focus-visible:ring-offset-0 resize-none border-none p-0"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      )}
    </div>
  )
}
