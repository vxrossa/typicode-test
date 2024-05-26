import { api } from '@/shared/api.ts'
import { Post } from './types'
import { GetPostsDto } from './dto'

export const getPosts = async (dto?: GetPostsDto) => {
  const params = new URLSearchParams()

  params.set('_page', dto?.page ? dto.page.toString() : '1')
  params.set('per_page', dto?.limit ? dto.limit.toString() : '25')

  return await api.get<Post[]>(`/posts?${params.toString()}`)
}

export const getPost = async (id: string | number) => {
  return await api.get<Post>(`/posts/${id}`)
}
