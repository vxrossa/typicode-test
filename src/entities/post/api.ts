import { api } from '@/shared/api.ts'
import { Post } from './types'

export const getPosts = async () => {
  return await api.get<Post[]>('/posts')
}

export const getPost = async (id: string | number) => {
  return await api.get<Post>(`/posts/${id}`)
}
