import { usePosts } from '@/entities/post'
import './style.css'
import { PostsList } from '@/widgets/posts-list'

export function Posts() {
  const { data, isLoading, error } = usePosts({
    page: 2,
  })

  let content

  if (isLoading) {
    content = <p>Loading a list of posts</p>
  } else if (error) {
    content = <p>Unknown error happened</p>
  } else {
    content = <PostsList data={data} />
  }

  return (
    <main className="posts">
      <p className="posts__heading">List of posts</p>
      {content}
    </main>
  )
}
