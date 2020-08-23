import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <div className="d-lg-flex d-md-flex flex-wrap py-5">
      {blogs.map(blog => {
        return <Blog key={blog.id} {...blog} />
      })}
    </div>
  )
}
export default Blogs
