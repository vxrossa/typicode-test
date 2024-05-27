import { Post } from '@/entities/post'
import './style.css'
import { User, UserInfo } from '@/entities/user'

interface Props {
  post?: Post | null
  user?: User | null
  isLoading?: boolean
  isError?: boolean
}

export function PostInfo({ post, user, isLoading, isError }: Props) {
  if (isLoading) return <p>Loading post...</p>

  if (isError) return <p>There was an error loading this post. Please try again</p>

  return (
    <article className="post-info__wrapper">
      <p className="post__title">{post?.title}</p>
      <p className="post__body">{post?.body}</p>
      {user && <UserInfo user={user} />}
    </article>
  )
}
