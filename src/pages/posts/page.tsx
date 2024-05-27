import { usePosts } from '@/entities/post'
import './style.css'
import { PostsList } from '@/widgets/posts-list'
import { Pagination } from '@/shared/ui/Pagination'
import { useParamsState } from '@/shared/lib/useParamsState.ts'
import { SearchPosts } from '@/features/search-posts'
import { useDebounce } from '@/shared/lib/useDebounce'
import { useEffect } from 'react'

export function Posts() {
  const [page, setPage] = useParamsState<number>('page', 1)
  const [query, setQuery] = useParamsState<string>('q', '')

  const [debouncedQuery] = useDebounce(query, 800)

  const { data, isLoading, error } = usePosts({
    page,
    title: debouncedQuery,
  })

  useEffect(() => {
    if (debouncedQuery.length > 0) {
      setPage(1)
    }
  }, [debouncedQuery])

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
      <SearchPosts value={query} onChange={q => setQuery(q)} />
      {content}
      <div className="posts__pagination">
        {data && !query.length && <Pagination totalPages={10} page={page} onChange={p => setPage(p)} />}
      </div>
    </main>
  )
}
