import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// CSS
import styles from './App.css'
import './Base.css'

import posts from '../blog-posts.json'

// Component
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import PostDetail from './components/PostDetail/PostDetail'
import NotFound from './components/NotFound/NotFound'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <div className={styles.container}>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/post/:slug' component={({match}) => {
                const post = posts.posts.filter(post =>
                  match.params.slug === post.slug
                )
                return <PostDetail post={post[0]} />
              }} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>

    )
  }
}

export default App
