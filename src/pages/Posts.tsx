import { usePosts } from '@/entities/post'
import { PostItem } from '@/entities/post/ui/Post.tsx'

export function Posts() {
  const { data } = usePosts()
  return <div>{data?.map(d => <PostItem post={d} />)}</div>
}
