import { Router } from './providers/Router'
import './styles/normalize.css'
import './styles/globals.css'
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary'

export default function App() {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  )
}
