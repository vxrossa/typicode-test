import { User } from '../types'
import './style.css'

interface Props {
  user?: User | null
}

export function UserInfo({ user }: Props) {
  return (
    <div className="user-info">
      <p className="user-info__text">By</p>
      <p className="user-info__text">{user?.name}</p>
      <p className="user-info__text">Email: {user?.email}</p>
      <p className="user-info__text">Phone: {user?.phone}</p>
    </div>
  )
}
