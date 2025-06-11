"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import {
  ArrowLeft,
  Bold,
  Italic,
  Underline,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  ImageIcon,
  Send,
  X,
  LinkIcon,
  Eye,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { usePublishBlog } from "@/hooks/usePublishBlog"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function BlogCreationPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")
  const [content, setContent] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [linkText, setLinkText] = useState("")
  const [linkUrl, setLinkUrl] = useState("")
  const [showImagePopover, setShowImagePopover] = useState(false)
  const [showLinkPopover, setShowLinkPopover] = useState(false)
  const [isViewMode, setIsViewMode] = useState(false)
  const [currentAlignment, setCurrentAlignment] = useState("left")

  const publishBlog = usePublishBlog()
  const editorRef = useRef<HTMLDivElement>(null)

  // Initialize editor with default content
  useEffect(() => {
    if (editorRef.current && !content) {
      editorRef.current.innerHTML = "<p>Start writing your blog post...</p>"
      setContent(editorRef.current.innerHTML)
    }
  }, [])

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()])
      setTagInput("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addTag()
    }
  }

  // Focus editor and execute command
  const executeCommand = (command: string, value?: string) => {
    if (editorRef.current) {
      editorRef.current.focus()
      document.execCommand(command, false, value)
      updateContent()
    }
  }

  // Text formatting - only 3 options
  const formatBold = () => executeCommand("bold")
  const formatItalic = () => executeCommand("italic")
  const formatUnderline = () => executeCommand("underline")

  // Insert heading
  const insertHeading = (level: number) => {
    const tag = level === 1 ? "h1" : "h2"
    executeCommand("formatBlock", `<${tag}>`)
  }

  // Insert list
  const insertList = (ordered: boolean) => {
    if (ordered) {
      executeCommand("insertOrderedList")
    } else {
      executeCommand("insertUnorderedList")
    }
  }

  // Apply alignment - only 3 options
  const applyAlignment = (alignment: string) => {
    setCurrentAlignment(alignment)
    switch (alignment) {
      case "left":
        executeCommand("justifyLeft")
        break
      case "center":
        executeCommand("justifyCenter")
        break
      case "right":
        executeCommand("justifyRight")
        break
    }
  }

  // Add image
  const addImage = () => {
    if (imageUrl.trim()) {
      const imageHtml = `<img src="${imageUrl}" alt="Blog image" style="max-width: 100%; height: auto; margin: 1rem 0; border-radius: 0.5rem; display: block;" />`
      executeCommand("insertHTML", imageHtml)
      setImageUrl("")
      setShowImagePopover(false)
    }
  }

  // Add link
  const addLink = () => {
    if (linkText.trim() && linkUrl.trim()) {
      const linkHtml = `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">${linkText}</a>`
      executeCommand("insertHTML", linkHtml)
      setLinkText("")
      setLinkUrl("")
      setShowLinkPopover(false)
    }
  }

  // Update content state
  const updateContent = () => {
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML)
    }
  }

  // Handle editor input
  const handleEditorInput = () => {
    updateContent()
  }

  // Handle blog publishing
  const handlePublishBlog = async () => {
    if (!title.trim()) {
      toast.error("Please enter a title for your blog post")
      return
    }

    if (!category) {
      toast.error("Please select a category")
      return
    }

    if (!content.trim()) {
      toast.error("Please add some content to your blog post")
      return
    }

    try {
      await publishBlog.mutateAsync({
        title,
        content,
        category,
        tags,
      })
      router.push("/admin/blogs")
    } catch (error) {
      // Error is already handled by the usePublishBlog hook
      console.error("Failed to publish blog:", error)
    }
  }

  if (isViewMode) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto p-6">
          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" onClick={() => setIsViewMode(false)} className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Editor
            </Button>
            <Button 
              className="bg-gray-900 text-white hover:bg-gray-700"
              onClick={handlePublishBlog}
              disabled={publishBlog.isLoading}
            >
              {publishBlog.isLoading ? (
                "Publishing..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Publish Blog
                </>
              )}
            </Button>
          </div>

          <Card className="bg-white shadow-lg">
            <CardHeader className="border-b">
              <CardTitle className="text-3xl font-bold">{title || "Untitled Blog Post"}</CardTitle>
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-4">
                {category && (
                  <Badge variant="outline" className="border-gray-300">
                    {category}
                  </Badge>
                )}
                {tags.length > 0 && (
                  <div className="flex gap-2">
                    {tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: content }} />
                {!content && (
                  <p className="text-gray-500 italic text-center py-8">
                    No content yet. Go back to the editor to start writing!
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setIsViewMode(true)} className="border-gray-200">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button 
              className="bg-gray-900 text-white hover:bg-gray-700"
              onClick={handlePublishBlog}
              disabled={publishBlog.isLoading}
            >
              {publishBlog.isLoading ? (
                "Publishing..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Create Blog
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Title */}
        <div className="mb-6">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="border-0 border-b border-gray-200 rounded-none px-0 text-3xl font-bold placeholder:text-gray-300 focus-visible:ring-0 focus-visible:border-gray-400"
          />
        </div>

        {/* Category and Tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="border-gray-200">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="lifestyle">Lifestyle</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Tags</label>
            <div className="flex gap-2">
              <Input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add a tag"
                className="border-gray-200"
              />
              <Button onClick={addTag} variant="outline" className="border-gray-200">
                Add
              </Button>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                    {tag}
                    <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => removeTag(tag)} />
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Editor Toolbar */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 mb-4">
          <div className="flex items-center gap-1 p-2 flex-wrap">
            {/* Heading Controls */}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => insertHeading(1)}
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                title="Heading 1"
              >
                <Heading1 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => insertHeading(2)}
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                title="Heading 2"
              >
                <Heading2 className="w-4 h-4" />
              </Button>
            </div>

            <Separator orientation="vertical" className="h-6 bg-gray-300 mx-1" />

            {/* Text Formatting - Only 3 options */}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={formatBold}
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                title="Bold"
              >
                <Bold className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={formatItalic}
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                title="Italic"
              >
                <Italic className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={formatUnderline}
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                title="Underline"
              >
                <Underline className="w-4 h-4" />
              </Button>
            </div>

            <Separator orientation="vertical" className="h-6 bg-gray-300 mx-1" />

            {/* Lists */}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => insertList(false)}
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                title="Bullet List"
              >
                <List className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => insertList(true)}
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                title="Numbered List"
              >
                <ListOrdered className="w-4 h-4" />
              </Button>
            </div>

            <Separator orientation="vertical" className="h-6 bg-gray-300 mx-1" />

            {/* Text Alignment - Only 3 options */}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => applyAlignment("left")}
                className={`text-gray-600 hover:text-gray-900 hover:bg-gray-100 ${
                  currentAlignment === "left" ? "bg-gray-200" : ""
                }`}
                title="Align Left"
              >
                <AlignLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => applyAlignment("center")}
                className={`text-gray-600 hover:text-gray-900 hover:bg-gray-100 ${
                  currentAlignment === "center" ? "bg-gray-200" : ""
                }`}
                title="Align Center"
              >
                <AlignCenter className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => applyAlignment("right")}
                className={`text-gray-600 hover:text-gray-900 hover:bg-gray-100 ${
                  currentAlignment === "right" ? "bg-gray-200" : ""
                }`}
                title="Align Right"
              >
                <AlignRight className="w-4 h-4" />
              </Button>
            </div>

            <Separator orientation="vertical" className="h-6 bg-gray-300 mx-1" />

            {/* Media */}
            <div className="flex items-center gap-1">
              <Popover open={showImagePopover} onOpenChange={setShowImagePopover}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    title="Insert Image"
                  >
                    <ImageIcon className="w-4 h-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Insert Image</div>
                    <Input
                      placeholder="Enter image URL (https://...)"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && imageUrl && addImage()}
                    />
                    <Button onClick={addImage} className="w-full" disabled={!imageUrl}>
                      Insert Image
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover open={showLinkPopover} onOpenChange={setShowLinkPopover}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    title="Insert Link"
                  >
                    <LinkIcon className="w-4 h-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Insert Link</div>
                    <Input
                      placeholder="Link text (what people will see)"
                      value={linkText}
                      onChange={(e) => setLinkText(e.target.value)}
                    />
                    <Input
                      placeholder="URL (https://...)"
                      value={linkUrl}
                      onChange={(e) => setLinkUrl(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && linkText && linkUrl && addLink()}
                    />
                    <Button onClick={addLink} className="w-full" disabled={!linkText || !linkUrl}>
                      Insert Link
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        {/* Content Editor */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 min-h-[500px]">
          <div
            ref={editorRef}
            contentEditable
            onInput={handleEditorInput}
            className="min-h-[450px] outline-none prose prose-lg max-w-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 rounded p-4"
            suppressContentEditableWarning={true}
            style={{
              minHeight: "450px",
              padding: "1rem",
              lineHeight: "1.6",
              direction: "ltr", // Explicitly set left-to-right text direction
              textAlign: "left", // Default text alignment
            }}
          />
        </div>

        {/* Status Bar */}
        <div className="mt-4 text-sm text-gray-500 flex justify-between items-center">
          <div>
            {content && (
              <span>
                Words:{" "}
                {
                  content
                    .replace(/<[^>]*>/g, "")
                    .split(/\s+/)
                    .filter((word) => word.length > 0).length
                }
              </span>
            )}
          </div>
          <div className="text-xs">💡 Select text and use toolbar buttons to format</div>
        </div>
      </div>
    </div>
  )
}
