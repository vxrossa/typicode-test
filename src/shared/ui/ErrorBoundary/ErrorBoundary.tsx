import { Component, PropsWithChildren } from 'react'

export class ErrorBoundary extends Component<PropsWithChildren> {
  constructor(props: PropsWithChildren) {
    super(props)
  }

  state = {
    error: false,
  }

  componentDidCatch(error: Error) {
    console.error(`Unhandled error: ${error}`)
  }

  static getDerivedStateFromError() {
    return {
      error: true,
    }
  }

  render() {
    if (!this.state.error) return <>{this.props.children}</>

    return (
      <div className="error__wrapper">
        <p>Unknown error happened</p>
      </div>
    )
  }
}
