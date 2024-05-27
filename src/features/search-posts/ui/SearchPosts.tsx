import './style.css'

interface Props {
  value: string
  onChange: (newValue: string) => void
}

export function SearchPosts({ value, onChange }: Props) {
  return (
    <input
      className="search-posts"
      value={value}
      onInput={e => onChange(e.currentTarget.value)}
      placeholder="Search posts by name"
    />
  )
}
