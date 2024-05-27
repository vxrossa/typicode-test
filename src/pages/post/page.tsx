import { usePost } from '@/entities/post'
import { useUser } from '@/entities/user'
import './style.css'

interface Props {
  id: number | string
}

export function Post({ id }: Props) {
  const { data: postData } = usePost(id)
  const { data: userData } = useUser(postData?.userId)

  console.log(postData, userData)

  return <main className="post__page">post {id}</main>
}
