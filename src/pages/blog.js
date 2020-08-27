import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import Sponsors from "../components/sponsors.js"
import Title from "../components/title.js"
const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <Title title="Blog" />
      <div className="container">
        <Blogs blogs={blogs}></Blogs>
        <hr></hr>
        <Sponsors />
      </div>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiBlogs(sort: { order: DESC, fields: date }) {
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
export default Blog
