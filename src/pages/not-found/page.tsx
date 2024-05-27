import { Link } from 'wouter'
import './style.css'

export function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__heading">404! Page not found</h1>
      <Link to="/">Go to main page</Link>
    </div>
  )
}
