import { Post, PostItem } from '@/entities/post'
import './style.css'

interface Props {
  data?: Post[]
}

export function PostsList({ data }: Props) {
  return <div className="posts__list">{data?.map(post => <PostItem key={post.id} post={post} />)}</div>
}
