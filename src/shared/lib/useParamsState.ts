import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'

/**
 * This hook syncs React state with query params
 */
export const useParamsState = <T extends string | number = string>(key: string, defaultState: T) => {
  const [initialized, setInitialized] = useState(false)
  const [state, setState] = useState<T>(() => {
    const defaultParams = new URLSearchParams(window.location.search)

    if (typeof defaultState === 'number') {
      return (Number.parseInt(defaultParams.get(key) || '0') || defaultState) as T
    } else {
      return (defaultParams.get(key) || defaultState) as T
    }
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLoc] = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    if (initialized) {
      if (typeof state === 'string' && !state.length) {
        params.delete(key)
      }

      params.set(key, state.toString())
      setLoc(window.location.pathname + '?' + params.toString())
    }

    setInitialized(true)
  }, [state])

  return [state, setState] as const
}
