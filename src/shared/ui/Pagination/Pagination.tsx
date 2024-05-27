import { useMemo } from 'react'
import { createRange } from '@/shared/lib/range'
import './style.css'
import clsx from 'clsx'

interface Props {
  totalPages: number
  page: number
  onChange?: (newPage: number) => void
  siblings?: number
}

const SIBLING_LIMIT = 2

export function Pagination({ totalPages = 1, page, siblings = 2, onChange }: Props) {
  const paginationRange = useMemo(() => {
    const leftSiblingIndex = Math.max(page, 1)
    const rightSiblingIndex = Math.min(page + siblings, totalPages)

    const showLeftDots = leftSiblingIndex > SIBLING_LIMIT
    const showRightDots = rightSiblingIndex < totalPages - SIBLING_LIMIT

    const count = SIBLING_LIMIT * siblings

    if (!showLeftDots && !showRightDots) {
      return createRange(1, totalPages)
    }

    if (!showLeftDots && showRightDots) {
      return [
        ...createRange(1, count),
        { page: totalPages - 1, label: '...' },
        {
          label: totalPages,
          page: totalPages,
        },
      ]
    }

    if (showLeftDots && !showRightDots) {
      return [
        {
          page: 1,
          label: '1',
        },
        {
          page: 2,
          label: '...',
        },
        ...createRange(totalPages - count + 1, totalPages),
      ]
    }

    if (showLeftDots && showRightDots) {
      return [
        {
          page: 1,
          label: '1',
        },
        {
          page: 2,
          label: '...',
        },
        ...createRange(leftSiblingIndex, rightSiblingIndex),
        {
          page: totalPages - 1,
          label: '...',
        },
        {
          page: totalPages,
          label: totalPages,
        },
      ]
    }
  }, [page, siblings, totalPages])

  return (
    <div className="pagination">
      {paginationRange?.map(item => (
        <button
          key={item.page}
          className={clsx('pagination__button', {
            ['pagination__button_selected']: page === item.page,
          })}
          onClick={() => {
            onChange?.(item.page)
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
