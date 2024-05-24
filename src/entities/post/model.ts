import useSWR from 'swr'
import { getPost, getPosts } from './api.ts'

export const usePosts = () => {
  return useSWR('/api/posts', getPosts)
}

export const usePost = (id: string | number) => {
  return useSWR(`/api/posts/${id}`, () => getPost(id))
}
