interface PostPageProps {
  id: number | string
}

export function Post({ id }: PostPageProps) {
  return <div>post {id}</div>
}
