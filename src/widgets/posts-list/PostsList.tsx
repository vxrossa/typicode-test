import { Post } from '@/entities/post'
import { PostItem } from '@/entities/post/ui/Post.tsx'

interface Props {
  data?: Post[]
}

export function PostsList({ data }: Props) {
  return <div>{data?.map(post => <PostItem key={post.id} post={post} />)}</div>
}
