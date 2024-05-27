import { usePosts } from '@/entities/post'
import './style.css'
import { PostsList } from '@/widgets/posts-list'
import { Pagination } from '@/shared/ui/Pagination'
import { useParamsState } from '@/shared/lib/useParamsState.ts'

export function Posts() {
  const [page, setPage] = useParamsState<number>('page', 1)

  const { data, isLoading, error } = usePosts({
    page,
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
      <h1 className="posts__heading">List of posts</h1>
      {content}
      <Pagination totalPages={10} page={page} onChange={p => setPage(p)} />
    </main>
  )
}
