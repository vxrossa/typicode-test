import { api } from '@/shared/api'
import { User } from './types.ts'

export const getUser = async (id?: User['id'] | null) => {
  if (!id) return

  return await api.get<User>(`/users/${id}`)
}
