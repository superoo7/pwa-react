import React from 'react'
import Post from '../Post/Post'
import posts from '../../../blog-posts.json'

// console.log(posts)

const Home = () => (
  <div>
    {
      posts.posts.map(post => <Post {...post} key={post.slug} titleLink={true} />)
    }
  </div>
)

export default Home
