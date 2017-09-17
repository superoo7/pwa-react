import React from 'react'
import Post from '../Post/Post'

// console.log(posts)

const Home = ({posts}) => (
  <div>
    {
      posts.length ?
      posts.map(post => <Post {...post} key={post.slug} titleLink />) :
      <p>Awaiting post</p>
    }
  </div>
)

export default Home
