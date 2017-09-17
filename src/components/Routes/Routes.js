import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

import posts from '../../../blog-posts.json'

// Component
import Home from './../Home/Home'
import About from './../About/About'
import PostDetail from './../PostDetail/PostDetail'
import NotFound from './../NotFound/NotFound'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={() => <Home posts={posts.posts} />} />
    <Route path='/about' component={About} />
    <Route path='/post/:slug' component={({match}) => {
      const post = posts.posts.filter(post =>
        match.params.slug === post.slug
      )
      return <PostDetail post={post[0]} />
    }} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
