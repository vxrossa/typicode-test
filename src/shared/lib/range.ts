export interface RangeItem {
  page: number
  label: string
}

export const createRange = (start: number, end: number): RangeItem[] => {
  const length = end - start + 1

  return Array.from({ length }, (_, idx) => ({
    page: idx + start,
    label: (idx + start).toString(),
  }))
}
