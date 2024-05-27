import { Post } from '@/entities/post'
import { PostItem } from '@/entities/post/ui/Post.tsx'
import './style.css'

interface Props {
  data?: Post[]
}

export function PostsList({ data }: Props) {
  return <div className="posts__list">{data?.map(post => <PostItem key={post.id} post={post} />)}</div>
}
