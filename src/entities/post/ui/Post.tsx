import { Post } from '@/entities/post'

interface Props {
  post: Post
}

export function PostItem({ post }: Props) {
  return <div>{post.title}</div>
}
