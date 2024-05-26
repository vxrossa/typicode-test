import { Route, Switch } from 'wouter'
import { Posts } from '@/pages/posts'
import { Post } from '@/pages/Post'

export function Router() {
  return (
    <Switch>
      <Route path="/" component={Posts} />
      <Route path="/posts" component={Posts} />
      <Route path="/posts/:id">{({ id }) => <Post id={id} />}</Route>
    </Switch>
  )
}
