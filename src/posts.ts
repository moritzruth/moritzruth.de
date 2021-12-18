/* eslint-disable camelcase */
import { $fetch } from "ohmyfetch"

const USERNAME = "moritzruth"

export interface Post {
  id: number
  title: string
  slug: string
  description: string
  published_at: string
  reading_time_minutes: number
  tags: string[]
}

export interface FullPost extends Post {
  body_html: string
}

export const getPosts = () => $fetch<Post[]>(`https://dev.to/api/articles?username=${USERNAME}&per_page=1000`)
export const getPostBySlug = (slug: string) => $fetch<FullPost>(`https://dev.to/api/articles/${USERNAME}/${slug}`).catch(() => null)
