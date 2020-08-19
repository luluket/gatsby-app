import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({ id, title, image, date, category, slug, desc }) => {
  return (
    <article className="card col-lg-4 col-md-6 col-sm-12 p-1 border-0">
      <div>
        <Link
          to={`/blogs/${slug}`}
          className="text-decoration-none text-dark"
          key={id}
        >
          <Image fluid={image.childImageSharp.fluid}></Image>
        </Link>
      </div>
      <div className="card-footer h-100">
        <Link
          to={`/blogs/${slug}`}
          className="text-decoration-none text-dark"
          key={id}
        >
          <h4 className="font-weight-bold">{title}</h4>
          <p>{desc}</p>
          <span style={{ backgroundColor: "lightgrey" }}>{category}</span>
          <p>{date}</p>
        </Link>
      </div>
    </article>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default Blog
