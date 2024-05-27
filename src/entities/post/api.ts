import { api } from '@/shared/api.ts'
import { Post } from './types'
import { GetPostsDto } from './dto'

export const getPosts = async (dto?: GetPostsDto) => {
  const params = new URLSearchParams()

  if (!dto?.title) {
    params.set('_page', dto?.page ? dto.page.toString() : '1')
  }

  // if (dto?.title) {
  //   params.set('_per_page', '100')
  // } else {
  //   params.set('_per_page', dto?.limit ? dto.limit.toString() : '25')
  // }

  const data = await api.get<Post[]>(`/posts?${params.toString()}`)

  if (dto?.title) {
    return data.filter(p => p.title.includes(dto.title || ''))
  } else {
    return data
  }
}

export const getPost = async (id: string | number) => {
  return await api.get<Post>(`/posts/${id}`)
}
