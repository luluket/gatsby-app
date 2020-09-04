import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Blogs from "../components/Blogs"
import Sponsors from "../components/sponsors.js"
import Title from "../components/title.js"
import Subtitle from "../components/Subtitle"
const BlogFiltered = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <Title title="Blog" />
      <div className="container">
        <div className="row mx-auto">
          <div className="col text-center pt-3">
            <h1 className="">
              Objave vezane za: <b>{blogs[0].category}</b>
            </h1>
          </div>
        </div>
        <Blogs blogs={blogs}></Blogs>
        <div className="row d-flex justify-content-center">
          <Link to="/blog" className="btn btn-info">
            Povratak na blog
          </Link>
        </div>

        <hr></hr>
        <Sponsors />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetAllStrapiBlogs($category: String) {
    allStrapiBlogs(
      filter: { category: { eq: $category } }
      sort: { order: DESC, fields: date }
    ) {
      nodes {
        date(formatString: "DD/MM/YYYY")
        desc
        id
        slug
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        content
        category
      }
    }
  }
`
export default BlogFiltered
