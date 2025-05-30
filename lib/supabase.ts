import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anon Key environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Bucket name for blog images
export const BLOG_IMAGES_BUCKET = 'blog-images'

// Function to upload a file to Supabase Storage
export async function uploadFile(file: File, bucket: string = BLOG_IMAGES_BUCKET) {
  try {
    // Generate a unique file name
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`
    const filePath = `${fileName}`

    // Upload the file
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) {
      throw error
    }

    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath)

    return {
      path: filePath,
      url: publicUrl
    }
  } catch (error) {
    console.error('Error uploading file:', error)
    throw error
  }
}

// Function to delete a file from Supabase Storage
export async function deleteFile(path: string, bucket: string = BLOG_IMAGES_BUCKET) {
  try {
    const { error } = await supabase.storage
      .from(bucket)
      .remove([path])

    if (error) {
      throw error
    }

    return true
  } catch (error) {
    console.error('Error deleting file:', error)
    throw error
  }
}

// Function to get a file's public URL
export function getFileUrl(path: string, bucket: string = BLOG_IMAGES_BUCKET) {
  const { data: { publicUrl } } = supabase.storage
    .from(bucket)
    .getPublicUrl(path)

  return publicUrl
} 