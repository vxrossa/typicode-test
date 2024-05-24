import useSWR from 'swr'
import { User } from './types.ts'
import { getUser } from './api.ts'

export const useUser = (id?: User['id']) => {
  return useSWR(id ? `/users/${id}` : null, () => getUser(id))
}
