import { useEffect, useRef, useState } from 'react'

export const useDebounce = <T>(value: T, delay = 500) => {
  const [state, setState] = useState(value)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    timer.current = setTimeout(() => {
      setState(value)
    }, delay)

    return () => {
      clearTimeout(timer.current)
    }
  }, [value, delay])

  return [state, setState] as const
}
