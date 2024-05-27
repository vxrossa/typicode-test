import useSWR from 'swr'
import { getPost, getPosts } from './api.ts'
import { GetPostsDto } from './dto.ts'

export const usePosts = (dto?: GetPostsDto) => {
  return useSWR(['/api/posts', dto], () => getPosts(dto))
}

export const usePost = (id: string | number) => {
  return useSWR(`/api/posts/${id}`, () =>
    getPost({
      id,
    }),
  )
}
