import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({ id, title, image, date, category, slug, desc }) => {
  return (
    <div className="card col-lg-4 col-md-6 p-1 border-0">
      <div className="h-50">
        <Link
          to={`/blogs/${slug}`}
          className="text-decoration-none text-dark "
          key={id}
        >
          <Image fluid={image.childImageSharp.fluid} className="h-100"></Image>
        </Link>
      </div>
      <div className="card-footer h-50 d-flex flex-column justify-content-between">
        <div className="font-weight-bold">{title}</div>
        <p className="">{desc}</p>
        <div className="d-flex justify-content-between">
          <span className="d-block" style={{ backgroundColor: "lightgrey" }}>
            {category}
          </span>
          <span>{date}</span>
        </div>
      </div>
    </div>
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
