import React from 'react'
import Post from '../Post/Post'

const PostDetail = (props) => (
  <div>
    <p>Post</p>
    <Post {...props.post} />
  </div>
)

export default PostDetail
