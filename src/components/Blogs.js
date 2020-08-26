import React from "react"
import Blog from "./Blog"
export const Blogs = ({ blogs, title }) => {
  return (
    <div className="d-lg-flex d-md-flex flex-wrap py-5">
      {blogs.map(blog => {
        return <Blog key={blog.id} {...blog} />
      })}
    </div>
  )
}
export default Blogs
