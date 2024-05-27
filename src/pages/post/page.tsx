import { usePost } from '@/entities/post'
import { useUser } from '@/entities/user'
import './style.css'
import { PostInfo } from '@/widgets/post-info'
import { Link } from 'wouter'

interface Props {
  id: number | string
}

export function Post({ id }: Props) {
  const { data: postData, isLoading, error } = usePost(id)
  const { data: userData } = useUser(postData?.userId)

  return (
    <main className="post__page">
      <Link className="post__back-link" to="/">
        Go back
      </Link>
      <PostInfo isError={!!error} isLoading={isLoading} post={postData} user={userData} />
    </main>
  )
}
