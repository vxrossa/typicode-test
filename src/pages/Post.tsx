import { usePost } from '@/entities/post'
import { useUser } from '@/entities/user'

interface PostPageProps {
  id: number | string
}

export function Post({ id }: PostPageProps) {
  const { data: postData } = usePost(id)
  const { data: userData } = useUser(postData?.userId)

  console.log(postData, userData)

  return <div>post {id}</div>
}
