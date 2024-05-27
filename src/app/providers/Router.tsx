import { Route, Switch } from 'wouter'
import { Posts } from '@/pages/posts'
import { Post } from '@/pages/post'
import { NotFound } from '@/pages/not-found'

export function Router() {
  return (
    <Switch>
      <Route path="/">
        <Posts />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/posts/:id">{({ id }) => <Post id={id} />}</Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}
