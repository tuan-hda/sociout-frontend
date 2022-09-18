import React from "react"
import { Post } from "../components"

const PostList = () => {
  return (
    <div className='space-y-4 relative -z-10'>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default PostList
