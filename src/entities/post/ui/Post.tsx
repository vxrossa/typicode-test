import { Post } from '@/entities/post'
import './style.css'
import { Link } from 'wouter'

interface Props {
  post: Post
}

export function PostItem({ post }: Props) {
  return (
    <Link to={`/posts/${post.id}`} className="post">
      <div className="post__wrapper">
        <p className="post__title">{post.title}</p>
        <p className="post__body">{post.body}</p>
      </div>
    </Link>
  )
}
