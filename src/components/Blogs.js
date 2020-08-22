import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <div className="container py-5">
      <div className="d-lg-flex d-md-flex flex-wrap">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
    </div>
  )
}
export default Blogs
