import { api } from '@/shared/api'
import { User } from './types'
import { GetUserDto } from './dto'

export const getUser = async (dto?: GetUserDto) => {
  if (!dto?.id) return

  return await api.get<User>(`/users/${dto.id}`)
}
