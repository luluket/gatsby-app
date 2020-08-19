import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="container">
      <Title title={title} />
      <div className="d-lg-flex d-md-flex flex-wrap">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
        {showLink && (
          <Link to="/blog" className="">
            blog
          </Link>
        )}
      </div>
    </section>
  )
}
export default Blogs
